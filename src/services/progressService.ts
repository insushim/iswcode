import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Progress } from '../types';
import type { MissionHistory } from '../stores/progressStore';

// Progress 데이터를 Firebase에 동기화
export const syncProgressToFirebase = async (
  userId: string,
  progress: Progress,
  missionHistory: MissionHistory[]
): Promise<{ success: boolean; error?: string }> => {
  try {
    await setDoc(doc(db, 'progress', userId), {
      ...progress,
      missionHistory,
      updatedAt: serverTimestamp(),
    }, { merge: true });

    return { success: true };
  } catch (error) {
    console.error('Error syncing progress to Firebase:', error);
    return { success: false, error: 'Progress 동기화 실패' };
  }
};

// Firebase에서 Progress 데이터 가져오기
export const getProgressFromFirebase = async (
  userId: string
): Promise<{ progress: Progress | null; missionHistory: MissionHistory[] }> => {
  try {
    const progressDoc = await getDoc(doc(db, 'progress', userId));

    if (!progressDoc.exists()) {
      return { progress: null, missionHistory: [] };
    }

    const data = progressDoc.data();
    const { missionHistory, updatedAt, ...progress } = data;

    return {
      progress: progress as Progress,
      missionHistory: missionHistory || [],
    };
  } catch (error) {
    console.error('Error fetching progress from Firebase:', error);
    return { progress: null, missionHistory: [] };
  }
};

// 미션 완료 기록을 Firebase에 추가
export const recordMissionCompletion = async (
  userId: string,
  missionHistory: MissionHistory
): Promise<{ success: boolean; error?: string }> => {
  try {
    const progressRef = doc(db, 'progress', userId);
    const progressDoc = await getDoc(progressRef);

    if (progressDoc.exists()) {
      const data = progressDoc.data();
      const existingHistory = data.missionHistory || [];

      await updateDoc(progressRef, {
        missionHistory: [...existingHistory, missionHistory],
        updatedAt: serverTimestamp(),
      });
    } else {
      await setDoc(progressRef, {
        missionHistory: [missionHistory],
        updatedAt: serverTimestamp(),
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Error recording mission completion:', error);
    return { success: false, error: '미션 완료 기록 실패' };
  }
};
