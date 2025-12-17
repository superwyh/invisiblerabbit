import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../types';
import { useLanguage } from './LanguageContext';

interface BlogOverlayProps {
  post: BlogPost;
  onClose: () => void;
}

const BlogOverlay: React.FC<BlogOverlayProps> = ({ post, onClose }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-md p-4 md:p-8"
    >
      <div 
        className="absolute inset-0 z-0" 
        onClick={onClose} 
      />
      
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        className="relative z-10 w-full max-w-3xl h-[85vh] bg-white shadow-2xl shadow-purple-900/5 rounded-3xl overflow-hidden flex flex-col border border-white"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-8 md:p-10 pb-4">
          <div>
             <span className="inline-block px-3 py-1 bg-gray-50 rounded-full text-[10px] font-mono text-gray-500 mb-4 tracking-wider">
                {t('journal.archive')} {post.id}
             </span>
             <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-2">{post.title}</h2>
             <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <Calendar size={12} />
                {post.date}
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-8 md:px-12 pb-12">
            <div className="w-12 h-[1px] bg-gray-200 mb-8" />
            
            <div className="prose prose-stone prose-lg prose-p:font-light prose-headings:font-serif prose-a:text-purple-500 max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            <div className="mt-20 pt-8 border-t border-dashed border-gray-200 text-center">
                <div className="w-2 h-2 bg-gray-200 rounded-full mx-auto" />
                <button onClick={onClose} className="mt-4 text-xs font-sans text-gray-400 hover:text-rabbit-accent transition-colors">
                   {t('journal.back')}
                </button>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogOverlay;