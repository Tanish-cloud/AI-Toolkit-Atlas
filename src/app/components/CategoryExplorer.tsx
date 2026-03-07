import { motion } from "motion/react";
import { Code, Palette, Zap, Image, FileText, Layers } from "lucide-react";

interface Category {
  name: string;
  icon: typeof Code;
  color: string;
  count: number;
}

interface CategoryExplorerProps {
  onCategorySelect: (category: string) => void;
  categories: Category[];
}

const categoryIcons: Record<string, typeof Code> = {
  "Web Design AI": Palette,
  "Code Generation": Code,
  "Design-to-Code": Zap,
  "Assets & Visuals": Image,
  "Copy & Content": FileText,
  "Design Tools": Layers,
};

export function CategoryExplorer({ onCategorySelect, categories }: CategoryExplorerProps) {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-400">
            Discover AI tools organized by their primary use case
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.name] || Code;
            return (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategorySelect(category.name)}
                className="relative group p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-white/10 hover:border-white/20 transition-all duration-300 text-left overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${category.color} blur-xl`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} mb-4 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">{category.name}</h3>

                  <p className="text-sm text-gray-400">
                    {category.count} {category.count === 1 ? "tool" : "tools"} available
                  </p>

                  {/* Arrow indicator */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
