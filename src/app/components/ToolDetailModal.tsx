import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Youtube, Sparkles, AlertCircle, Target, DollarSign } from "lucide-react";

interface Tool {
  id: number;
  name: string;
  category: string;
  primaryUse: string;
  superpower: string;
  limitation: string;
  bestFor: string;
  link: string;
  tutorial: string;
  pricing: string;
}

interface ToolDetailModalProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ToolDetailModal({ tool, isOpen, onClose }: ToolDetailModalProps) {
  if (!tool) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-white/20 shadow-2xl pointer-events-auto"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold mb-4">
                    {tool.category}
                  </div>

                  <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                    {tool.name}
                  </h2>

                  <p className="text-lg text-gray-300">{tool.primaryUse}</p>
                </div>

                {/* Details grid */}
                <div className="space-y-6 mb-8">
                  {/* Superpower */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-900/10 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-purple-400">Superpower</h3>
                    </div>
                    <p className="text-gray-300">{tool.superpower}</p>
                  </div>

                  {/* Limitation */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-900/10 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-orange-400" />
                      <h3 className="text-lg font-semibold text-orange-400">Limitations</h3>
                    </div>
                    <p className="text-gray-300">{tool.limitation}</p>
                  </div>

                  {/* Best For */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-900/10 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-cyan-400">Best Use Case</h3>
                    </div>
                    <p className="text-gray-300">{tool.bestFor}</p>
                  </div>

                  {/* Pricing */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-900/10 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <h3 className="text-lg font-semibold text-green-400">Pricing</h3>
                    </div>
                    <p className="text-gray-300">{tool.pricing}</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Visit {tool.name}
                  </a>
                  <a
                    href={tool.tutorial}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 font-semibold border border-red-500/30 transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                    Watch Tutorial
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
