import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  updateProfile,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  writeBatch,
  onSnapshot,
  Timestamp,
} from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import type { AuthUser, Teacher, Student, ClassRoom, UserRole, ApprovalStatus } from '../types';

// 6자리 학급 코드 생성
const generateClassCode = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 헷갈리는 문자 제외
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

// 선생님 회원가입
export const registerTeacher = async (
  email: string,
  password: string,
  displayName: string,
  school?: string
): Promise<{ success: boolean; error?: string; user?: AuthUser }> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName });

    const teacherData: Teacher = {
      uid: user.uid,
      email: email,
      role: 'teacher',
      displayName: displayName,
      createdAt: new Date().toISOString(),
      approvalStatus: 'pending', // 관리자 승인 대기
      school: school,
      classIds: [],
    };

    await setDoc(doc(db, 'users', user.uid), teacherData);

    return { success: true, user: teacherData };
  } catch (error: any) {
    let errorMessage = '회원가입 중 오류가 발생했습니다.';
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = '이미 사용 중인 이메일입니다.';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = '비밀번호는 6자 이상이어야 합니다.';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = '유효하지 않은 이메일 형식입니다.';
    }
    return { success: false, error: errorMessage };
  }
};

// 학생 회원가입 (학급 코드 필요)
export const registerStudent = async (
  email: string,
  password: string,
  displayName: string,
  classCode: string
): Promise<{ success: boolean; error?: string; user?: AuthUser }> => {
  try {
    // 학급 코드 확인
    const classQuery = query(
      collection(db, 'classrooms'),
      where('joinCode', '==', classCode.toUpperCase()),
      where('isActive', '==', true)
    );
    const classSnapshot = await getDocs(classQuery);

    if (classSnapshot.empty) {
      return { success: false, error: '유효하지 않은 학급 코드입니다.' };
    }

    const classRoom = classSnapshot.docs[0].data() as ClassRoom;
    const classId = classSnapshot.docs[0].id;

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName });

    const studentData: Student = {
      uid: user.uid,
      email: email,
      role: 'student',
      displayName: displayName,
      createdAt: new Date().toISOString(),
      approvalStatus: 'approved', // 학생은 바로 승인
      teacherId: classRoom.teacherId,
      classId: classId,
    };

    // 배치로 학생 데이터와 학급 업데이트
    const batch = writeBatch(db);
    batch.set(doc(db, 'users', user.uid), studentData);
    batch.update(doc(db, 'classrooms', classId), {
      studentIds: [...classRoom.studentIds, user.uid],
    });
    await batch.commit();

    return { success: true, user: studentData };
  } catch (error: any) {
    let errorMessage = '회원가입 중 오류가 발생했습니다.';
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = '이미 사용 중인 이메일입니다.';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = '비밀번호는 6자 이상이어야 합니다.';
    }
    return { success: false, error: errorMessage };
  }
};

// 로그인
export const login = async (
  email: string,
  password: string
): Promise<{ success: boolean; error?: string; user?: AuthUser }> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));

    if (!userDoc.exists()) {
      await signOut(auth);
      return { success: false, error: '사용자 정보를 찾을 수 없습니다.' };
    }

    const userData = userDoc.data() as AuthUser;

    // 선생님 승인 확인
    if (userData.role === 'teacher' && userData.approvalStatus !== 'approved') {
      await signOut(auth);
      if (userData.approvalStatus === 'pending') {
        return { success: false, error: '관리자 승인 대기 중입니다. 승인 후 로그인해주세요.' };
      } else {
        return { success: false, error: '승인이 거부되었습니다. 관리자에게 문의하세요.' };
      }
    }

    return { success: true, user: userData };
  } catch (error: any) {
    let errorMessage = '로그인 중 오류가 발생했습니다.';
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage = '이메일 또는 비밀번호가 올바르지 않습니다.';
    } else if (error.code === 'auth/invalid-credential') {
      errorMessage = '이메일 또는 비밀번호가 올바르지 않습니다.';
    }
    return { success: false, error: errorMessage };
  }
};

// 로그아웃
export const logout = async (): Promise<void> => {
  await signOut(auth);
};

// 현재 사용자 정보 가져오기
export const getCurrentUser = async (): Promise<AuthUser | null> => {
  const firebaseUser = auth.currentUser;
  if (!firebaseUser) return null;

  const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
  if (!userDoc.exists()) return null;

  return userDoc.data() as AuthUser;
};

// 인증 상태 변경 리스너
export const onAuthChange = (callback: (user: AuthUser | null) => void) => {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (userDoc.exists()) {
        callback(userDoc.data() as AuthUser);
      } else {
        callback(null);
      }
    } else {
      callback(null);
    }
  });
};

// 학급 생성 (선생님용)
export const createClassRoom = async (
  teacherId: string,
  teacherName: string,
  className: string
): Promise<{ success: boolean; error?: string; classRoom?: ClassRoom }> => {
  try {
    const classId = `class_${Date.now()}`;
    const joinCode = generateClassCode();

    // 코드 중복 확인
    const codeQuery = query(collection(db, 'classrooms'), where('joinCode', '==', joinCode));
    const codeSnapshot = await getDocs(codeQuery);
    if (!codeSnapshot.empty) {
      // 재귀적으로 다시 시도
      return createClassRoom(teacherId, teacherName, className);
    }

    const classRoom: ClassRoom = {
      id: classId,
      name: className,
      teacherId: teacherId,
      teacherName: teacherName,
      joinCode: joinCode,
      studentIds: [],
      createdAt: new Date().toISOString(),
      isActive: true,
    };

    const batch = writeBatch(db);
    batch.set(doc(db, 'classrooms', classId), classRoom);
    batch.update(doc(db, 'users', teacherId), {
      classIds: [...(await getTeacherClassIds(teacherId)), classId],
    });
    await batch.commit();

    return { success: true, classRoom };
  } catch (error) {
    return { success: false, error: '학급 생성 중 오류가 발생했습니다.' };
  }
};

// 선생님의 학급 목록 가져오기
const getTeacherClassIds = async (teacherId: string): Promise<string[]> => {
  const teacherDoc = await getDoc(doc(db, 'users', teacherId));
  if (!teacherDoc.exists()) return [];
  return (teacherDoc.data() as Teacher).classIds || [];
};

// 학급 목록 가져오기 (선생님용)
export const getTeacherClasses = async (teacherId: string): Promise<ClassRoom[]> => {
  const classQuery = query(
    collection(db, 'classrooms'),
    where('teacherId', '==', teacherId)
  );
  const snapshot = await getDocs(classQuery);
  return snapshot.docs.map((doc) => doc.data() as ClassRoom);
};

// 학급 학생 목록 가져오기
export const getClassStudents = async (classId: string): Promise<Student[]> => {
  const studentQuery = query(
    collection(db, 'users'),
    where('classId', '==', classId),
    where('role', '==', 'student')
  );
  const snapshot = await getDocs(studentQuery);
  return snapshot.docs.map((doc) => doc.data() as Student);
};

// 학생 진행 상황 가져오기 (캐싱 적용)
const progressCache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60000; // 1분 캐시

export const getStudentProgressData = async (studentId: string): Promise<any> => {
  const cached = progressCache.get(studentId);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const progressDoc = await getDoc(doc(db, 'progress', studentId));
  const data = progressDoc.exists() ? progressDoc.data() : null;

  progressCache.set(studentId, { data, timestamp: Date.now() });
  return data;
};

// 관리자: 승인 대기 선생님 목록
export const getPendingTeachers = async (): Promise<Teacher[]> => {
  const teacherQuery = query(
    collection(db, 'users'),
    where('role', '==', 'teacher'),
    where('approvalStatus', '==', 'pending')
  );
  const snapshot = await getDocs(teacherQuery);
  return snapshot.docs.map((doc) => doc.data() as Teacher);
};

// 관리자: 선생님 승인
export const approveTeacher = async (
  teacherId: string,
  adminId: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    await updateDoc(doc(db, 'users', teacherId), {
      approvalStatus: 'approved',
      approvedBy: adminId,
      approvedAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: '승인 처리 중 오류가 발생했습니다.' };
  }
};

// 관리자: 선생님 거부
export const rejectTeacher = async (
  teacherId: string,
  adminId: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    await updateDoc(doc(db, 'users', teacherId), {
      approvalStatus: 'rejected',
      approvedBy: adminId,
      approvedAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: '거부 처리 중 오류가 발생했습니다.' };
  }
};

// 학생 진행 상황 실시간 구독 (선생님용)
export const subscribeToClassProgress = (
  classId: string,
  callback: (students: any[]) => void
) => {
  const studentQuery = query(
    collection(db, 'users'),
    where('classId', '==', classId),
    where('role', '==', 'student')
  );

  return onSnapshot(studentQuery, async (snapshot) => {
    const students = await Promise.all(
      snapshot.docs.map(async (doc) => {
        const student = doc.data() as Student;
        const progress = await getStudentProgressData(student.uid);
        return {
          ...student,
          progress,
        };
      })
    );
    callback(students);
  });
};

// 사용자 역할 확인
export const checkUserRole = async (uid: string): Promise<UserRole | null> => {
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (!userDoc.exists()) return null;
  return (userDoc.data() as AuthUser).role;
};

// ========== 관리자 전용 함수 ==========

// 관리자: 모든 학급 조회 (캐싱 적용)
let allClassesCache: { data: ClassRoom[]; timestamp: number } | null = null;
const CLASSES_CACHE_DURATION = 30000; // 30초 캐시

export const getAllClasses = async (): Promise<ClassRoom[]> => {
  if (allClassesCache && Date.now() - allClassesCache.timestamp < CLASSES_CACHE_DURATION) {
    return allClassesCache.data;
  }
  const snapshot = await getDocs(collection(db, 'classrooms'));
  const data = snapshot.docs.map((doc) => doc.data() as ClassRoom);
  allClassesCache = { data, timestamp: Date.now() };
  return data;
};

// 관리자: 모든 승인된 선생님 조회
export const getApprovedTeachers = async (): Promise<Teacher[]> => {
  const teacherQuery = query(
    collection(db, 'users'),
    where('role', '==', 'teacher'),
    where('approvalStatus', '==', 'approved')
  );
  const snapshot = await getDocs(teacherQuery);
  return snapshot.docs.map((doc) => doc.data() as Teacher);
};

// 관리자: 학급 삭제 (학생들도 함께 삭제)
export const deleteClassRoom = async (classId: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const batch = writeBatch(db);
    const students = await getClassStudents(classId);
    for (const student of students) {
      batch.delete(doc(db, 'users', student.uid));
      batch.delete(doc(db, 'progress', student.uid));
    }
    batch.delete(doc(db, 'classrooms', classId));
    await batch.commit();
    allClassesCache = null;
    return { success: true };
  } catch (error) {
    return { success: false, error: '학급 삭제 중 오류가 발생했습니다.' };
  }
};

// 관리자: 학생 계정 삭제
export const deleteStudent = async (studentId: string, classId: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const batch = writeBatch(db);
    batch.delete(doc(db, 'users', studentId));
    batch.delete(doc(db, 'progress', studentId));
    const classDoc = await getDoc(doc(db, 'classrooms', classId));
    if (classDoc.exists()) {
      const classData = classDoc.data() as ClassRoom;
      batch.update(doc(db, 'classrooms', classId), {
        studentIds: classData.studentIds.filter(id => id !== studentId)
      });
    }
    await batch.commit();
    progressCache.delete(studentId);
    return { success: true };
  } catch (error) {
    return { success: false, error: '학생 삭제 중 오류가 발생했습니다.' };
  }
};

// ========== 선생님 전용: 학생 일괄 생성 ==========

export const createStudentsBatch = async (
  classId: string,
  teacherId: string,
  students: { name: string; loginId: string; password: string }[]
): Promise<{ success: boolean; error?: string; createdCount: number; errors: string[] }> => {
  if (students.length > 30) {
    return { success: false, error: '한 번에 최대 30명까지만 생성할 수 있습니다.', createdCount: 0, errors: [] };
  }

  const errors: string[] = [];
  let createdCount = 0;

  const classDoc = await getDoc(doc(db, 'classrooms', classId));
  if (!classDoc.exists()) {
    return { success: false, error: '학급을 찾을 수 없습니다.', createdCount: 0, errors: [] };
  }
  const classData = classDoc.data() as ClassRoom;
  const newStudentIds: string[] = [...classData.studentIds];

  for (const student of students) {
    try {
      const email = student.loginId + '@student.local';
      const userCredential = await createUserWithEmailAndPassword(auth, email, student.password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: student.name });

      const studentData: Student = {
        uid: user.uid,
        email: email,
        role: 'student',
        displayName: student.name,
        createdAt: new Date().toISOString(),
        approvalStatus: 'approved',
        teacherId: teacherId,
        classId: classId,
      };

      await setDoc(doc(db, 'users', user.uid), studentData);
      newStudentIds.push(user.uid);
      createdCount++;
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        errors.push(student.name + ': 이미 사용 중인 아이디입니다.');
      } else {
        errors.push(student.name + ': 생성 실패');
      }
    }
  }

  if (createdCount > 0) {
    await updateDoc(doc(db, 'classrooms', classId), { studentIds: newStudentIds });
  }

  return { success: createdCount > 0, createdCount, errors, error: errors.length > 0 ? errors.length + '개의 계정 생성 실패' : undefined };
};

// 선생님: 학급 삭제
export const deleteTeacherClass = async (classId: string, teacherId: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const classDoc = await getDoc(doc(db, 'classrooms', classId));
    if (!classDoc.exists()) return { success: false, error: '학급을 찾을 수 없습니다.' };
    const classData = classDoc.data() as ClassRoom;
    if (classData.teacherId !== teacherId) return { success: false, error: '권한이 없습니다.' };

    const batch = writeBatch(db);
    const students = await getClassStudents(classId);
    for (const student of students) {
      batch.delete(doc(db, 'users', student.uid));
      batch.delete(doc(db, 'progress', student.uid));
    }
    batch.delete(doc(db, 'classrooms', classId));

    const teacherDoc = await getDoc(doc(db, 'users', teacherId));
    if (teacherDoc.exists()) {
      const teacherData = teacherDoc.data() as Teacher;
      batch.update(doc(db, 'users', teacherId), { classIds: teacherData.classIds.filter(id => id !== classId) });
    }
    await batch.commit();
    return { success: true };
  } catch (error) {
    return { success: false, error: '학급 삭제 중 오류가 발생했습니다.' };
  }
};

// 선생님: 학생 삭제
export const deleteStudentByTeacher = async (studentId: string, classId: string, teacherId: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const classDoc = await getDoc(doc(db, 'classrooms', classId));
    if (!classDoc.exists()) return { success: false, error: '학급을 찾을 수 없습니다.' };
    const classData = classDoc.data() as ClassRoom;
    if (classData.teacherId !== teacherId) return { success: false, error: '권한이 없습니다.' };
    return await deleteStudent(studentId, classId);
  } catch (error) {
    return { success: false, error: '학생 삭제 중 오류가 발생했습니다.' };
  }
};
