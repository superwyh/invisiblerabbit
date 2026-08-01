import React, { useState } from 'react';
import { GameItem, GameLink } from '../types';
import { X, Plus, Trash2, RotateCcw, Save, Check, Sparkles } from 'lucide-react';

interface GameEditorModalProps {
  games: GameItem[];
  onSaveGames: (updatedGames: GameItem[]) => void;
  onResetDefault: () => void;
  onClose: () => void;
  lang: 'zh' | 'en';
}

export const GameEditorModal: React.FC<GameEditorModalProps> = ({
  games,
  onSaveGames,
  onResetDefault,
  onClose,
  lang
}) => {
  const [editingGame, setEditingGame] = useState<GameItem | null>(null);
  const [localGames, setLocalGames] = useState<GameItem[]>(games);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddNewGame = () => {
    const nextNum = localGames.length + 1;
    const numStr = nextNum < 10 ? `0${nextNum}` : `${nextNum}`;
    const newGame: GameItem = {
      id: `game-${Date.now()}`,
      number: numStr,
      title: 'NEW GAME TITLE',
      titleZh: '新游戏名称',
      tagline: 'Minimalist tagline description.',
      taglineZh: '极简风格游戏一句话简介。',
      description: 'Full game description and introduction goes here.',
      descriptionZh: '游戏详细介绍、故事背景与核心玩法。',
      genre: ['Indie', 'Puzzle'],
      platforms: ['Steam (PC)'],
      releaseYear: '2026',
      status: 'IN_DEVELOPMENT',
      coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
      screenshots: [
        { id: 's1', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80', caption: 'Screenshot' }
      ],
      links: [
        { id: 'l1', label: 'Steam 商店页面', url: 'https://store.steampowered.com', type: 'store', primary: true }
      ],
      hasWebDemo: false
    };
    setLocalGames([...localGames, newGame]);
    setEditingGame(newGame);
  };

  const handleDeleteGame = (id: string) => {
    const filtered = localGames.filter((g) => g.id !== id);
    setLocalGames(filtered);
    if (editingGame?.id === id) {
      setEditingGame(null);
    }
  };

  const handleSaveAll = () => {
    onSaveGames(localGames);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const updateEditingField = <K extends keyof GameItem>(field: K, value: GameItem[K]) => {
    if (!editingGame) return;
    const updated = { ...editingGame, [field]: value };
    setEditingGame(updated);
    setLocalGames(localGames.map((g) => (g.id === updated.id ? updated : g)));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-zinc-900" />
            <h2 className="font-display font-bold text-lg text-zinc-900">
              {lang === 'zh' ? '工作室游戏列表管理' : 'Studio Game Manager'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Game List Sidebar */}
          <div className="space-y-3 md:border-r md:border-zinc-200 md:pr-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider">
                GAMES ({localGames.length})
              </span>
              <button
                onClick={handleAddNewGame}
                className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 hover:text-emerald-900 bg-emerald-50 px-2 py-1 rounded"
              >
                <Plus className="w-3.5 h-3.5" />
                {lang === 'zh' ? '添加游戏' : 'Add Game'}
              </button>
            </div>

            <div className="space-y-2 max-h-[50vh] overflow-y-auto">
              {localGames.map((g) => (
                <div
                  key={g.id}
                  onClick={() => setEditingGame(g)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-all ${
                    editingGame?.id === g.id
                      ? 'bg-zinc-900 text-white border-zinc-900 font-medium'
                      : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-800'
                  }`}
                >
                  <div className="truncate pr-2">
                    <span className="font-mono-code opacity-60 mr-2">{g.number}</span>
                    <span>{lang === 'zh' && g.titleZh ? g.titleZh : g.title}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteGame(g.id);
                    }}
                    className="p-1 hover:text-red-500 transition-colors text-zinc-400"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <button
                onClick={() => {
                  onResetDefault();
                  onClose();
                }}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 p-2 border border-dashed border-zinc-300 rounded-lg hover:border-zinc-400 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {lang === 'zh' ? '恢复默认作品示例' : 'Reset to Default Games'}
              </button>
            </div>
          </div>

          {/* Form Editor */}
          <div className="md:col-span-2 space-y-4">
            {editingGame ? (
              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-500 font-mono-code mb-1">ENGLISH TITLE</label>
                    <input
                      type="text"
                      value={editingGame.title}
                      onChange={(e) => updateEditingField('title', e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-500 font-mono-code mb-1">中文名称 (CHINESE TITLE)</label>
                    <input
                      type="text"
                      value={editingGame.titleZh || ''}
                      onChange={(e) => updateEditingField('titleZh', e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-zinc-500 font-mono-code mb-1">NUMBER (e.g. 01)</label>
                    <input
                      type="text"
                      value={editingGame.number}
                      onChange={(e) => updateEditingField('number', e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-500 font-mono-code mb-1">YEAR</label>
                    <input
                      type="text"
                      value={editingGame.releaseYear}
                      onChange={(e) => updateEditingField('releaseYear', e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-500 font-mono-code mb-1">STATUS</label>
                    <select
                      value={editingGame.status}
                      onChange={(e) => updateEditingField('status', e.target.value as GameItem['status'])}
                      className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 bg-white"
                    >
                      <option value="RELEASED">RELEASED (已发售)</option>
                      <option value="IN_DEVELOPMENT">IN_DEVELOPMENT (开发中)</option>
                      <option value="EARLY_ACCESS">EARLY_ACCESS (抢先体验)</option>
                      <option value="ANNOUNCED">ANNOUNCED (未公开)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-500 font-mono-code mb-1">TAGLINE (ENGLISH)</label>
                  <input
                    type="text"
                    value={editingGame.tagline}
                    onChange={(e) => updateEditingField('tagline', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 font-mono-code mb-1">中文一句话简介</label>
                  <input
                    type="text"
                    value={editingGame.taglineZh || ''}
                    onChange={(e) => updateEditingField('taglineZh', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 font-mono-code mb-1">中文详细介绍 (DESCRIPTION)</label>
                  <textarea
                    rows={3}
                    value={editingGame.descriptionZh || ''}
                    onChange={(e) => updateEditingField('descriptionZh', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 font-mono-code mb-1">COVER IMAGE URL</label>
                  <input
                    type="text"
                    value={editingGame.coverImage}
                    onChange={(e) => updateEditingField('coverImage', e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 font-mono-code"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="hasWebDemo"
                    checked={editingGame.hasWebDemo || false}
                    onChange={(e) => updateEditingField('hasWebDemo', e.target.checked)}
                    className="rounded text-zinc-900 focus:ring-zinc-900"
                  />
                  <label htmlFor="hasWebDemo" className="text-xs font-mono-code text-zinc-700">
                    开启网页即时微 Demo 演示 (Enable Interactive Web Teaser)
                  </label>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-zinc-400 text-xs font-mono-code border border-dashed border-zinc-200 rounded-xl p-6 text-center">
                <span>请在左侧选择游戏进行修改，或点击“添加游戏”新建作品。</span>
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="bg-zinc-50 px-6 py-4 border-t border-zinc-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-zinc-300 rounded-lg text-xs font-medium text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            {lang === 'zh' ? '取消' : 'Cancel'}
          </button>
          <button
            onClick={handleSaveAll}
            className="inline-flex items-center gap-2 px-5 py-2 bg-zinc-900 text-white rounded-lg text-xs font-medium hover:bg-zinc-800 transition-colors"
          >
            {savedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
            {savedSuccess ? (lang === 'zh' ? '已保存！' : 'Saved!') : lang === 'zh' ? '保存更改' : 'Save Changes'}
          </button>
        </div>

      </div>
    </div>
  );
};
