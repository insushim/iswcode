import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Assignment, StudentSubmission, TeacherFeedback } from '../types';

// 과제 생성
export const createAssignment = async (
  teacherId: string,
  classId: string,
  title: string,
  description: string,
  missionIds: string[],
  dueDate: string
): Promise<{ success: boolean; error?: string; assignment?: Assignment }> => {
  try {
    const assignmentId = `assignment_${Date.now()}`;
    const assignment: Assignment = {
      id: assignmentId,
      title,
      description,
      missionIds,
      dueDate,
      classId,
      teacherId,
      createdAt: new Date().toISOString(),
      status: 'active',
    };

    await setDoc(doc(db, 'assignments', assignmentId), assignment);
    return { success: true, assignment };
  } catch (error) {
    console.error('과제 생성 오류:', error);
    return { success: false, error: '과제 생성 중 오류가 발생했습니다.' };
  }
};

// 과제 목록 가져오기 (선생님용)
export const getTeacherAssignments = async (teacherId: string): Promise<Assignment[]> => {
  try {
    const assignmentsQuery = query(
      collection(db, 'assignments'),
      where('teacherId', '==', teacherId),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(assignmentsQuery);
    return snapshot.docs.map((doc) => doc.data() as Assignment);
  } catch (error) {
    console.error('과제 목록 조회 오류:', error);
    return [];
  }
};

// 과제 목록 가져오기 (학생용 - 자신의 학급)
export const getStudentAssignments = async (classId: string): Promise<Assignment[]> => {
  try {
    const assignmentsQuery = query(
      collection(db, 'assignments'),
      where('classId', '==', classId),
      where('status', '==', 'active'),
      orderBy('dueDate', 'asc')
    );
    const snapshot = await getDocs(assignmentsQuery);
    return snapshot.docs.map((doc) => doc.data() as Assignment);
  } catch (error) {
    console.error('과제 목록 조회 오류:', error);
    return [];
  }
};

// 과제 상세 조회
export const getAssignment = async (assignmentId: string): Promise<Assignment | null> => {
  try {
    const assignmentDoc = await getDoc(doc(db, 'assignments', assignmentId));
    if (!assignmentDoc.exists()) return null;
    return assignmentDoc.data() as Assignment;
  } catch (error) {
    console.error('과제 조회 오류:', error);
    return null;
  }
};

// 과제 업데이트
export const updateAssignment = async (
  assignmentId: string,
  updates: Partial<Assignment>
): Promise<{ success: boolean; error?: string }> => {
  try {
    await updateDoc(doc(db, 'assignments', assignmentId), updates);
    return { success: true };
  } catch (error) {
    console.error('과제 업데이트 오류:', error);
    return { success: false, error: '과제 업데이트 중 오류가 발생했습니다.' };
  }
};

// 과제 삭제
export const deleteAssignment = async (assignmentId: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const batch = writeBatch(db);

    // 과제 삭제
    batch.delete(doc(db, 'assignments', assignmentId));

    // 관련 제출물 삭제
    const submissionsQuery = query(
      collection(db, 'submissions'),
      where('assignmentId', '==', assignmentId)
    );
    const submissionsSnapshot = await getDocs(submissionsQuery);
    submissionsSnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    // 관련 피드백 삭제
    const feedbacksQuery = query(
      collection(db, 'feedbacks'),
      where('assignmentId', '==', assignmentId)
    );
    const feedbacksSnapshot = await getDocs(feedbacksQuery);
    feedbacksSnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    return { success: true };
  } catch (error) {
    console.error('과제 삭제 오류:', error);
    return { success: false, error: '과제 삭제 중 오류가 발생했습니다.' };
  }
};

// 학생 제출 현황 가져오기
export const getAssignmentSubmissions = async (
  assignmentId: string
): Promise<StudentSubmission[]> => {
  try {
    const submissionsQuery = query(
      collection(db, 'submissions'),
      where('assignmentId', '==', assignmentId)
    );
    const snapshot = await getDocs(submissionsQuery);

    // 각 제출물에 피드백 정보 추가
    const submissions = await Promise.all(
      snapshot.docs.map(async (doc) => {
        const submission = doc.data() as StudentSubmission;
        const feedback = await getFeedbackForSubmission(assignmentId, submission.studentId);
        return {
          ...submission,
          feedback: feedback || undefined,
        };
      })
    );

    return submissions;
  } catch (error) {
    console.error('제출 현황 조회 오류:', error);
    return [];
  }
};

// 학생 제출물 생성/업데이트
export const submitAssignment = async (
  assignmentId: string,
  studentId: string,
  studentName: string,
  completedMissions: string[],
  totalMissions: number
): Promise<{ success: boolean; error?: string }> => {
  try {
    const submissionId = `${assignmentId}_${studentId}`;
    const score = Math.round((completedMissions.length / totalMissions) * 100);

    const submission: StudentSubmission = {
      id: submissionId,
      assignmentId,
      studentId,
      studentName,
      submittedAt: new Date().toISOString(),
      completedMissions,
      totalMissions,
      score,
    };

    await setDoc(doc(db, 'submissions', submissionId), submission);
    return { success: true };
  } catch (error) {
    console.error('과제 제출 오류:', error);
    return { success: false, error: '과제 제출 중 오류가 발생했습니다.' };
  }
};

// 학생 제출물 조회
export const getStudentSubmission = async (
  assignmentId: string,
  studentId: string
): Promise<StudentSubmission | null> => {
  try {
    const submissionId = `${assignmentId}_${studentId}`;
    const submissionDoc = await getDoc(doc(db, 'submissions', submissionId));
    if (!submissionDoc.exists()) return null;

    const submission = submissionDoc.data() as StudentSubmission;
    const feedback = await getFeedbackForSubmission(assignmentId, studentId);

    return {
      ...submission,
      feedback: feedback || undefined,
    };
  } catch (error) {
    console.error('제출물 조회 오류:', error);
    return null;
  }
};

// 피드백 생성
export const createFeedback = async (
  assignmentId: string,
  studentId: string,
  teacherId: string,
  content: string,
  rating: 1 | 2 | 3 | 4 | 5
): Promise<{ success: boolean; error?: string; feedback?: TeacherFeedback }> => {
  try {
    const feedbackId = `${assignmentId}_${studentId}`;
    const feedback: TeacherFeedback = {
      id: feedbackId,
      assignmentId,
      studentId,
      teacherId,
      content,
      rating,
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    await setDoc(doc(db, 'feedbacks', feedbackId), feedback);
    return { success: true, feedback };
  } catch (error) {
    console.error('피드백 생성 오류:', error);
    return { success: false, error: '피드백 생성 중 오류가 발생했습니다.' };
  }
};

// 피드백 업데이트
export const updateFeedback = async (
  feedbackId: string,
  content: string,
  rating: 1 | 2 | 3 | 4 | 5
): Promise<{ success: boolean; error?: string }> => {
  try {
    await updateDoc(doc(db, 'feedbacks', feedbackId), { content, rating });
    return { success: true };
  } catch (error) {
    console.error('피드백 업데이트 오류:', error);
    return { success: false, error: '피드백 업데이트 중 오류가 발생했습니다.' };
  }
};

// 피드백 조회 (과제 + 학생)
export const getFeedbackForSubmission = async (
  assignmentId: string,
  studentId: string
): Promise<TeacherFeedback | null> => {
  try {
    const feedbackId = `${assignmentId}_${studentId}`;
    const feedbackDoc = await getDoc(doc(db, 'feedbacks', feedbackId));
    if (!feedbackDoc.exists()) return null;
    return feedbackDoc.data() as TeacherFeedback;
  } catch (error) {
    console.error('피드백 조회 오류:', error);
    return null;
  }
};

// 학생이 받은 모든 피드백 조회
export const getStudentFeedbacks = async (studentId: string): Promise<TeacherFeedback[]> => {
  try {
    const feedbacksQuery = query(
      collection(db, 'feedbacks'),
      where('studentId', '==', studentId),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(feedbacksQuery);
    return snapshot.docs.map((doc) => doc.data() as TeacherFeedback);
  } catch (error) {
    console.error('피드백 목록 조회 오류:', error);
    return [];
  }
};

// 피드백 읽음 표시
export const markFeedbackAsRead = async (feedbackId: string): Promise<{ success: boolean; error?: string }> => {
  try {
    await updateDoc(doc(db, 'feedbacks', feedbackId), { isRead: true });
    return { success: true };
  } catch (error) {
    console.error('피드백 읽음 처리 오류:', error);
    return { success: false, error: '읽음 처리 중 오류가 발생했습니다.' };
  }
};

// 읽지 않은 피드백 개수 조회
export const getUnreadFeedbackCount = async (studentId: string): Promise<number> => {
  try {
    const feedbacksQuery = query(
      collection(db, 'feedbacks'),
      where('studentId', '==', studentId),
      where('isRead', '==', false)
    );
    const snapshot = await getDocs(feedbacksQuery);
    return snapshot.docs.length;
  } catch (error) {
    console.error('읽지 않은 피드백 개수 조회 오류:', error);
    return 0;
  }
};
