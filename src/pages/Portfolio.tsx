import React, { useState, useMemo } from 'react';
import { usePortfolioStore, PortfolioItem } from '../stores/portfolioStore';
import { X, Eye, EyeOff, Trash2, Code } from 'lucide-react';

type FilterType = 'all' | 'python' | 'html' | 'javascript' | 'project';

const Portfolio: React.FC = () => {
  const items = usePortfolioStore(state => state.items);
  const deleteProject = usePortfolioStore(state => state.deleteProject);
  const togglePublic = usePortfolioStore(state => state.togglePublic);

  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Filter items
  const filteredItems = useMemo(() => {
    if (filter === 'all') return items;
    return items.filter(item => item.type === filter);
  }, [items, filter]);

  const handleDelete = (id: string) => {
    if (window.confirm('정말 이 프로젝트를 삭제하시겠습니까?')) {
      deleteProject(id);
      if (selectedItem?.id === id) {
        setShowModal(false);
        setSelectedItem(null);
      }
    }
  };

  const handleViewDetails = (item: PortfolioItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'python': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'html': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'javascript': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'project': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'python': return 'Python';
      case 'html': return 'HTML';
      case 'javascript': return 'JavaScript';
      case 'project': return 'Project';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-4 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Portfolio</h1>
          <p className="text-slate-400">나의 프로젝트 갤러리</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/50'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            All ({items.length})
          </button>
          <button
            onClick={() => setFilter('python')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'python'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            Python ({items.filter(i => i.type === 'python').length})
          </button>
          <button
            onClick={() => setFilter('html')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'html'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            HTML ({items.filter(i => i.type === 'html').length})
          </button>
          <button
            onClick={() => setFilter('javascript')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'javascript'
                ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/50'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            JavaScript ({items.filter(i => i.type === 'javascript').length})
          </button>
          <button
            onClick={() => setFilter('project')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'project'
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            Projects ({items.filter(i => i.type === 'project').length})
          </button>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📂</div>
            <h3 className="text-xl font-bold text-white mb-2">
              {filter === 'all' ? '아직 저장된 프로젝트가 없습니다' : `${getTypeLabel(filter)} 프로젝트가 없습니다`}
            </h3>
            <p className="text-slate-400">
              미션을 완료하고 프로젝트를 포트폴리오에 저장해보세요!
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-violet-500/50 transition-all group"
            >
              {/* Card Header */}
              <div className="p-4 border-b border-slate-700">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white line-clamp-1">
                    {item.missionTitle}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{new Date(item.createdAt).toLocaleDateString('ko-KR')}</span>
                  {item.isPublic ? (
                    <span className="flex items-center gap-1 text-green-400">
                      <Eye className="w-3 h-3" />
                      Public
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <EyeOff className="w-3 h-3" />
                      Private
                    </span>
                  )}
                </div>
              </div>

              {/* Code Preview */}
              <div className="p-4 bg-slate-900/50 font-mono text-xs text-slate-300 h-32 overflow-hidden relative">
                <pre className="whitespace-pre-wrap break-all">
                  {item.code.slice(0, 200)}
                  {item.code.length > 200 && '...'}
                </pre>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent pointer-events-none" />
              </div>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="px-4 py-2 flex flex-wrap gap-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="p-4 border-t border-slate-700 flex gap-2">
                <button
                  onClick={() => handleViewDetails(item)}
                  className="flex-1 px-3 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Code className="w-4 h-4" />
                  View Details
                </button>
                <button
                  onClick={() => togglePublic(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.isPublic
                      ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                      : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                  }`}
                  title={item.isPublic ? 'Public으로 전환' : 'Private으로 전환'}
                >
                  {item.isPublic ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-medium transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-700 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedItem.missionTitle}</h2>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span className={`px-2 py-1 rounded border ${getTypeColor(selectedItem.type)}`}>
                    {getTypeLabel(selectedItem.type)}
                  </span>
                  <span>{new Date(selectedItem.createdAt).toLocaleDateString('ko-KR')}</span>
                  {selectedItem.isPublic ? (
                    <span className="flex items-center gap-1 text-green-400">
                      <Eye className="w-4 h-4" />
                      Public
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <EyeOff className="w-4 h-4" />
                      Private
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Code Section */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Code</h3>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="font-mono text-sm text-slate-300 whitespace-pre-wrap break-all">
                    {selectedItem.code}
                  </pre>
                </div>
              </div>

              {/* Output Section */}
              {selectedItem.output && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Output</h3>
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap break-all">
                      {selectedItem.output}
                    </pre>
                  </div>
                </div>
              )}

              {/* Tags Section */}
              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-700 flex gap-3">
              <button
                onClick={() => togglePublic(selectedItem.id)}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  selectedItem.isPublic
                    ? 'bg-slate-700 text-white hover:bg-slate-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {selectedItem.isPublic ? (
                  <>
                    <EyeOff className="w-5 h-5" />
                    Make Private
                  </>
                ) : (
                  <>
                    <Eye className="w-5 h-5" />
                    Make Public
                  </>
                )}
              </button>
              <button
                onClick={() => handleDelete(selectedItem.id)}
                className="flex-1 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
