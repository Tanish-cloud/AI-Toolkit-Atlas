import { motion } from "motion/react";
import { X, Sparkles, AlertCircle, Target } from "lucide-react";

interface Tool {
  id: number;
  name: string;
  category: string;
  superpower: string;
  limitation: string;
  bestFor: string;
  pricing: string;
}

interface ComparisonTableProps {
  tools: Tool[];
  onRemove: (toolId: number) => void;
}

export function ComparisonTable({ tools, onRemove }: ComparisonTableProps) {
  if (tools.length === 0) return null;

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Tool Comparison</h2>
          <p className="text-gray-400">
            Comparing {tools.length} {tools.length === 1 ? "tool" : "tools"}
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${tools.length}, minmax(320px, 1fr))` }}>
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10"
                >
                  {/* Remove button */}
                  <button
                    onClick={() => onRemove(tool.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 transition-colors"
                  >
                    <X className="w-4 h-4 text-red-400" />
                  </button>

                  {/* Tool name */}
                  <h3 className="text-xl font-bold text-white mb-2 pr-10">{tool.name}</h3>
                  <p className="text-sm text-purple-400 mb-6">{tool.category}</p>

                  {/* Comparison details */}
                  <div className="space-y-6">
                    {/* Superpower */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <h4 className="text-sm font-semibold text-purple-400">Superpower</h4>
                      </div>
                      <p className="text-sm text-gray-300">{tool.superpower}</p>
                    </div>

                    {/* Limitation */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-orange-400" />
                        <h4 className="text-sm font-semibold text-orange-400">Limitations</h4>
                      </div>
                      <p className="text-sm text-gray-300">{tool.limitation}</p>
                    </div>

                    {/* Best For */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-cyan-400" />
                        <h4 className="text-sm font-semibold text-cyan-400">Best For</h4>
                      </div>
                      <p className="text-sm text-gray-300">{tool.bestFor}</p>
                    </div>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Pricing</h4>
                      <p className="text-sm text-gray-300">{tool.pricing}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
