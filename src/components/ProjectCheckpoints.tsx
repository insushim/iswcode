import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Trophy, Award } from 'lucide-react';
import type { ProjectCheckpoint } from '../types';

interface ProjectCheckpointsProps {
  checkpoints: ProjectCheckpoint[];
  completedIds: Set<string>;
  onToggle: (id: string) => void;
}

const ProjectCheckpoints: React.FC<ProjectCheckpointsProps> = ({
  checkpoints,
  completedIds,
  onToggle,
}) => {
  // 완료된 포인트 계산
  const completedPoints = checkpoints
    .filter(cp => completedIds.has(cp.id))
    .reduce((sum, cp) => sum + cp.points, 0);

  const totalPoints = checkpoints.reduce((sum, cp) => sum + cp.points, 0);
  const progressPercent = totalPoints > 0 ? (completedPoints / totalPoints) * 100 : 0;
  const allCompleted = completedIds.size === checkpoints.length;

  return (
    <div className="mb-6">
      {/* 헤더 */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            프로젝트 체크포인트
          </h2>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-900/30 rounded-lg border border-violet-700">
            <Award className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-bold text-violet-300">
              {completedPoints} / {totalPoints} 포인트
            </span>
          </div>
        </div>

        {/* 진행률 바 */}
        <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden border-2 border-slate-600">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
          />
          {/* 진행률 텍스트 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-white drop-shadow-md">
              {Math.round(progressPercent)}%
            </span>
          </div>
        </div>
      </div>

      {/* 체크포인트 목록 */}
      <div className="space-y-3">
        {checkpoints.map((checkpoint, index) => {
          const isCompleted = completedIds.has(checkpoint.id);

          return (
            <motion.div
              key={checkpoint.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative rounded-xl border-2 p-4 transition-all cursor-pointer
                ${isCompleted
                  ? 'bg-emerald-900/30 border-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-slate-800/50 border-slate-600 hover:border-violet-500 hover:bg-slate-800/70'
                }
              `}
              onClick={() => onToggle(checkpoint.id)}
            >
              {/* 완료 배지 */}
              {isCompleted && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-lg"
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </motion.div>
              )}

              <div className="flex items-start gap-3">
                {/* 체크박스 */}
                <div className="mt-0.5">
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </motion.div>
                  ) : (
                    <Circle className="w-6 h-6 text-slate-400" />
                  )}
                </div>

                {/* 내용 */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className={`font-bold ${isCompleted ? 'text-emerald-300' : 'text-white'}`}>
                      {checkpoint.title}
                    </h3>
                    <span className={`
                      text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap
                      ${isCompleted
                        ? 'bg-emerald-600 text-white'
                        : 'bg-violet-600 text-white'
                      }
                    `}>
                      {checkpoint.points}pt
                    </span>
                  </div>

                  <p className={`text-sm mb-3 ${isCompleted ? 'text-emerald-200' : 'text-slate-300'}`}>
                    {checkpoint.description}
                  </p>

                  {/* 통과 조건 */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-slate-400 mb-1">통과 조건:</div>
                    {checkpoint.criteria.map((criterion, idx) => (
                      <div
                        key={idx}
                        className={`
                          flex items-start gap-2 text-xs
                          ${isCompleted ? 'text-emerald-300' : 'text-slate-400'}
                        `}
                      >
                        <span className="mt-0.5">
                          {isCompleted ? '✓' : '○'}
                        </span>
                        <span className={isCompleted ? 'line-through' : ''}>
                          {criterion}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 모두 완료 시 축하 메시지 */}
      {allCompleted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 15 }}
          className="mt-4 p-4 bg-gradient-to-r from-emerald-900/50 to-green-900/50 rounded-xl border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-black text-emerald-300 text-lg">
                🎉 모든 체크포인트 완료!
              </h3>
              <p className="text-sm text-emerald-200">
                프로젝트의 모든 요구사항을 달성했어요. 이제 미션을 완료할 수 있습니다!
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCheckpoints;
