import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, Edit2, X, CheckCircle, AlertCircle } from 'lucide-react';
import { createFeedback, updateFeedback } from '../services/assignmentService';
import type { TeacherFeedback as FeedbackType } from '../types';

interface TeacherFeedbackProps {
  assignmentId: string;
  studentId: string;
  studentName: string;
  teacherId: string;
  existingFeedback?: FeedbackType;
  onFeedbackSubmitted?: () => void;
}

const TeacherFeedback: React.FC<TeacherFeedbackProps> = ({
  assignmentId,
  studentId,
  studentName,
  teacherId,
  existingFeedback,
  onFeedbackSubmitted,
}) => {
  const [isEditing, setIsEditing] = useState(!existingFeedback);
  const [content, setContent] = useState(existingFeedback?.content || '');
  const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5>(existingFeedback?.rating || 5);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async () => {
    if (!content.trim()) {
      setMessage({ type: 'error', text: '피드백 내용을 입력해주세요.' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setIsSubmitting(true);

    let result;
    if (existingFeedback) {
      result = await updateFeedback(existingFeedback.id, content, rating);
    } else {
      result = await createFeedback(assignmentId, studentId, teacherId, content, rating);
    }

    setIsSubmitting(false);

    if (result.success) {
      setMessage({ type: 'success', text: existingFeedback ? '피드백이 수정되었습니다.' : '피드백이 저장되었습니다.' });
      setIsEditing(false);
      setTimeout(() => setMessage(null), 3000);
      onFeedbackSubmitted?.();
    } else {
      setMessage({ type: 'error', text: result.error || '피드백 저장에 실패했습니다.' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleCancel = () => {
    if (existingFeedback) {
      setContent(existingFeedback.content);
      setRating(existingFeedback.rating);
      setIsEditing(false);
    } else {
      setContent('');
      setRating(5);
    }
  };

  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-5">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">
          {existingFeedback ? '피드백' : `${studentName} 학생 피드백 작성`}
        </h3>
        {existingFeedback && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 rounded-lg transition-colors text-sm"
          >
            <Edit2 className="w-4 h-4" />
            수정
          </button>
        )}
      </div>

      {/* 알림 메시지 */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
              message.type === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span className="text-sm">{message.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 별점 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-400 mb-2">평가</label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              disabled={!isEditing}
              onClick={() => isEditing && setRating(star as 1 | 2 | 3 | 4 | 5)}
              onMouseEnter={() => isEditing && setHoveredStar(star)}
              onMouseLeave={() => isEditing && setHoveredStar(null)}
              className={`transition-transform ${isEditing ? 'hover:scale-110 cursor-pointer' : 'cursor-default'}`}
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (hoveredStar || rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-600'
                }`}
              />
            </button>
          ))}
          <span className="ml-2 text-slate-400 text-sm">
            {rating === 5 && '탁월함'}
            {rating === 4 && '우수함'}
            {rating === 3 && '보통'}
            {rating === 2 && '노력 필요'}
            {rating === 1 && '많은 노력 필요'}
          </span>
        </div>
      </div>

      {/* 피드백 내용 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-400 mb-2">피드백 내용</label>
        {isEditing ? (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="학생에게 전달할 피드백을 작성해주세요. 잘한 점, 개선할 점, 격려의 말 등을 포함하면 좋습니다."
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
            rows={6}
          />
        ) : (
          <div className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white whitespace-pre-wrap">
            {content}
          </div>
        )}
      </div>

      {/* 버튼들 */}
      {isEditing && (
        <div className="flex gap-3">
          {existingFeedback && (
            <button
              onClick={handleCancel}
              className="flex-1 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
            >
              취소
            </button>
          )}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !content.trim()}
            className="flex-1 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                저장 중...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {existingFeedback ? '수정 완료' : '피드백 제출'}
              </>
            )}
          </button>
        </div>
      )}

      {/* 작성 날짜 */}
      {existingFeedback && !isEditing && (
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <p className="text-xs text-slate-500">
            작성일: {new Date(existingFeedback.createdAt).toLocaleString('ko-KR')}
          </p>
        </div>
      )}
    </div>
  );
};

export default TeacherFeedback;
