import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuthStore } from '../stores/authStore';
import { generateGradeReportPDF, generateAttendanceReportPDF } from '../utils/pdfGenerator';

interface SubjectGrade {
  unitId: string;
  unitName: string;
  score: number;
  grade: string;
  completedMissions: number;
  totalMissions: number;
  averageAccuracy: number;
}

interface GradeReport {
  studentId: string;
  studentName: string;
  period: string;
  subjects: SubjectGrade[];
  overallGrade: string;
  overallScore: number;
  rank?: number;
  totalStudents?: number;
  teacherComment: string;
  attendanceRate: number;
  completionRate: number;
}

interface MissionProgress {
  unitId: string;
  unitName: string;
  missionId: string;
  completed: boolean;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
}

const GradeReport: React.FC = () => {
  const { authUser } = useAuthStore();
  const currentUser = authUser ? { uid: authUser.uid, email: authUser.email } : null;
  const [report, setReport] = useState<GradeReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState('2024-1학기');
  const [shareLink, setShareLink] = useState('');
  const [generatingPDF, setGeneratingPDF] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    loadGradeReport();
  }, [currentUser, period]);

  const loadGradeReport = async () => {
    if (!currentUser) return;

    setLoading(true);
    try {
      // Get student info
      const userDoc = await getDocs(query(collection(db, 'users'), where('uid', '==', currentUser.uid)));
      const userName = userDoc.empty ? currentUser.email?.split('@')[0] || 'Unknown' : userDoc.docs[0].data().name;

      // Get progress data
      const progressQuery = query(
        collection(db, 'progress'),
        where('userId', '==', currentUser.uid)
      );
      const progressSnapshot = await getDocs(progressQuery);

      // Get all units
      const unitsSnapshot = await getDocs(collection(db, 'units'));
      const units = unitsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || data.title || 'Unknown Unit',
          ...data
        };
      });

      // Calculate grades per unit
      const subjectGrades: SubjectGrade[] = [];

      for (const unit of units) {
        // Get missions for this unit
        const missionsQuery = query(
          collection(db, 'missions'),
          where('unitId', '==', unit.id)
        );
        const missionsSnapshot = await getDocs(missionsQuery);
        const totalMissions = missionsSnapshot.size;

        // Get completed missions
        const completedMissions: MissionProgress[] = [];
        progressSnapshot.docs.forEach(progressDoc => {
          const data = progressDoc.data();
          if (data.unitId === unit.id && data.completed) {
            completedMissions.push({
              unitId: data.unitId,
              unitName: unit.name,
              missionId: data.missionId,
              completed: data.completed,
              score: data.score || 0,
              totalQuestions: data.totalQuestions || 0,
              correctAnswers: data.correctAnswers || 0
            });
          }
        });

        // Calculate average accuracy
        let totalQuestions = 0;
        let totalCorrect = 0;
        completedMissions.forEach(m => {
          totalQuestions += m.totalQuestions;
          totalCorrect += m.correctAnswers;
        });

        const averageAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

        // Calculate score (completion * 50% + accuracy * 50%)
        const completionRate = totalMissions > 0 ? (completedMissions.length / totalMissions) : 0;
        const score = Math.round((completionRate * 50) + (averageAccuracy * 0.5));

        // Assign grade
        let grade = 'F';
        if (score >= 90) grade = 'A';
        else if (score >= 80) grade = 'B';
        else if (score >= 70) grade = 'C';
        else if (score >= 60) grade = 'D';

        subjectGrades.push({
          unitId: unit.id,
          unitName: unit.name,
          score,
          grade,
          completedMissions: completedMissions.length,
          totalMissions,
          averageAccuracy: Math.round(averageAccuracy)
        });
      }

      // Calculate overall grade
      const totalScore = subjectGrades.reduce((sum, s) => sum + s.score, 0);
      const overallScore = subjectGrades.length > 0 ? Math.round(totalScore / subjectGrades.length) : 0;

      let overallGrade = 'F';
      if (overallScore >= 90) overallGrade = 'A';
      else if (overallScore >= 80) overallGrade = 'B';
      else if (overallScore >= 70) overallGrade = 'C';
      else if (overallScore >= 60) overallGrade = 'D';

      // Calculate attendance rate
      const attendanceQuery = query(
        collection(db, 'attendance'),
        where('studentId', '==', currentUser.uid)
      );
      const attendanceSnapshot = await getDocs(attendanceQuery);
      const totalDays = attendanceSnapshot.size;
      const presentDays = attendanceSnapshot.docs.filter(doc =>
        ['present', 'late'].includes(doc.data().status)
      ).length;
      const attendanceRate = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;

      // Calculate overall completion rate
      const totalMissions = subjectGrades.reduce((sum, s) => sum + s.totalMissions, 0);
      const completedMissions = subjectGrades.reduce((sum, s) => sum + s.completedMissions, 0);
      const completionRate = totalMissions > 0 ? Math.round((completedMissions / totalMissions) * 100) : 0;

      const gradeReport: GradeReport = {
        studentId: currentUser.uid,
        studentName: userName,
        period,
        subjects: subjectGrades,
        overallGrade,
        overallScore,
        teacherComment: '열심히 공부하고 있습니다. 계속 노력해주세요!',
        attendanceRate,
        completionRate
      };

      setReport(gradeReport);

      // Generate share link
      const shareCode = btoa(`${currentUser.uid}-${period}-${Date.now()}`);
      setShareLink(`${window.location.origin}/parent/${shareCode}`);

    } catch (error) {
      console.error('Error loading grade report:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!report) return;

    setGeneratingPDF(true);
    try {
      const pdfBlob = await generateGradeReportPDF(report);
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `성적표_${report.studentName}_${report.period}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('PDF 생성 중 오류가 발생했습니다.');
    } finally {
      setGeneratingPDF(false);
    }
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(shareLink);
    alert('학부모 공유 링크가 복사되었습니다!');
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600';
      case 'B': return 'text-blue-600';
      case 'C': return 'text-yellow-600';
      case 'D': return 'text-orange-600';
      case 'F': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 80) return 'bg-blue-100 text-blue-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    if (score >= 60) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">성적표를 불러올 수 없습니다</h1>
          <button
            onClick={loadGradeReport}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">성적표</h1>
              <p className="text-gray-600">학생: {report.studentName}</p>
              <p className="text-gray-600">기간: {report.period}</p>
            </div>
            <div className="text-right">
              <div className={`text-6xl font-bold ${getGradeColor(report.overallGrade)}`}>
                {report.overallGrade}
              </div>
              <div className="text-2xl text-gray-700 mt-2">{report.overallScore}점</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-600 font-medium">출석률</div>
              <div className="text-2xl font-bold text-blue-700">{report.attendanceRate}%</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm text-green-600 font-medium">완료율</div>
              <div className="text-2xl font-bold text-green-700">{report.completionRate}%</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-sm text-purple-600 font-medium">평균 점수</div>
              <div className="text-2xl font-bold text-purple-700">{report.overallScore}점</div>
            </div>
          </div>
        </div>

        {/* Subject Grades */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">단원별 성적</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    단원명
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    진도
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    정확도
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    점수
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    등급
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {report.subjects.map((subject) => (
                  <tr key={subject.unitId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {subject.unitName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {subject.completedMissions}/{subject.totalMissions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {subject.averageAccuracy}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${getScoreColor(subject.score)}`}>
                        {subject.score}점
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`text-xl font-bold ${getGradeColor(subject.grade)}`}>
                        {subject.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Teacher Comment */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">선생님 코멘트</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-gray-700">{report.teacherComment}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">액션</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={handleDownloadPDF}
              disabled={generatingPDF}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {generatingPDF ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>PDF 생성 중...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>PDF 다운로드</span>
                </>
              )}
            </button>

            <button
              onClick={copyShareLink}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>학부모 공유 링크 복사</span>
            </button>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">학부모 공유 링크:</p>
            <code className="block p-2 bg-white border border-gray-200 rounded text-sm text-gray-800 overflow-x-auto">
              {shareLink}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeReport;
