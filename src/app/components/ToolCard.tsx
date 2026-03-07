import { motion } from "motion/react";
import { ExternalLink, Youtube, Sparkles } from "lucide-react";

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

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
  onCompareToggle?: (tool: Tool) => void;
  isSelected?: boolean;
}

const categoryColors: Record<string, string> = {
  "Web Design AI": "from-purple-500 to-pink-500",
  "Code Generation": "from-cyan-500 to-blue-500",
  "Design-to-Code": "from-green-500 to-teal-500",
  "Assets & Visuals": "from-orange-500 to-red-500",
  "Copy & Content": "from-yellow-500 to-orange-500",
  "Design Tools": "from-indigo-500 to-purple-500",
};

export function ToolCard({ tool, onClick, onCompareToggle, isSelected }: ToolCardProps) {
  const categoryColor = categoryColors[tool.category] || "from-gray-500 to-gray-600";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

      {/* Card */}
      <div
        onClick={onClick}
        className="relative h-full p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 group-hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col"
      >
        {/* Category tag */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${categoryColor} text-white text-xs font-semibold`}
          >
            <Sparkles className="w-3 h-3" />
            {tool.category}
          </div>

          {onCompareToggle && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCompareToggle(tool);
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                isSelected
                  ? "bg-green-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {isSelected ? "Selected" : "Compare"}
            </button>
          )}
        </div>

        {/* Tool name */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
          {tool.name}
        </h3>

        {/* Superpower */}
        <div className="mb-4 flex-grow">
          <p className="text-sm font-semibold text-purple-400 mb-1">⚡ Superpower</p>
          <p className="text-sm text-gray-300 line-clamp-3">{tool.superpower}</p>
        </div>

        {/* Best for */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-cyan-400 mb-1">🎯 Best For</p>
          <p className="text-sm text-gray-300 line-clamp-2">{tool.bestFor}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-white/10">
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Tool
          </a>
          <a
            href={tool.tutorial}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 text-sm font-semibold transition-colors"
          >
            <Youtube className="w-4 h-4" />
            Tutorial
          </a>
        </div>
      </div>
    </motion.div>
  );
}
