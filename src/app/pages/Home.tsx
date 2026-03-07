import { useState, useMemo, useRef } from "react";
import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { CategoryExplorer } from "../components/CategoryExplorer";
import { SearchFilter } from "../components/SearchFilter";
import { ToolCard } from "../components/ToolCard";
import { ToolDetailModal } from "../components/ToolDetailModal";
import { ComparisonTable } from "../components/ComparisonTable";
import { EcosystemFlow } from "../components/EcosystemFlow";
import { Network, ArrowRight } from "lucide-react";
import toolsData from "../data/tools.json";

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

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comparisonTools, setComparisonTools] = useState<Tool[]>([]);
  const [showEcosystem, setShowEcosystem] = useState(false);

  const toolsRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);

  const tools = toolsData as Tool[];

  // Get unique categories with counts
  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();
    tools.forEach((tool) => {
      categoryMap.set(tool.category, (categoryMap.get(tool.category) || 0) + 1);
    });

    return Array.from(categoryMap.entries()).map(([name, count]) => ({
      name,
      count,
      icon: name,
      color:
        name === "Web Design AI"
          ? "from-purple-500 to-pink-500"
          : name === "Code Generation"
          ? "from-cyan-500 to-blue-500"
          : name === "Design-to-Code"
          ? "from-green-500 to-teal-500"
          : name === "Assets & Visuals"
          ? "from-orange-500 to-red-500"
          : name === "Copy & Content"
          ? "from-yellow-500 to-orange-500"
          : "from-indigo-500 to-purple-500",
    }));
  }, [tools]);

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.superpower.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.bestFor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === null || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [tools, searchQuery, selectedCategory]);

  const handleExploreClick = () => {
    toolsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    toolsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleToolClick = (tool: Tool) => {
    setSelectedTool(tool);
    setIsModalOpen(true);
  };

  const handleCompareToggle = (tool: Tool) => {
    setComparisonTools((prev) => {
      const exists = prev.find((t) => t.id === tool.id);
      if (exists) {
        return prev.filter((t) => t.id !== tool.id);
      } else {
        if (prev.length >= 4) {
          return prev;
        }
        return [...prev, tool];
      }
    });
  };

  const handleViewEcosystem = () => {
    setShowEcosystem(true);
    setTimeout(() => {
      ecosystemRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] dark">
      {/* Hero Section */}
      <Hero onExploreClick={handleExploreClick} />

      {/* Category Explorer */}
      <CategoryExplorer categories={categories} onCategorySelect={handleCategorySelect} />

      {/* Ecosystem Workflow Button */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewEcosystem}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-green-500/20 border border-purple-500/30 hover:border-purple-500/50 text-white font-semibold transition-all duration-300 backdrop-blur-sm"
          >
            <Network className="w-6 h-6" />
            View AI Ecosystem Workflow
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Search and Filter */}
      <div ref={toolsRef}>
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories.map((c) => c.name)}
        />
      </div>

      {/* Comparison Table */}
      {comparisonTools.length > 0 && (
        <ComparisonTable
          tools={comparisonTools}
          onRemove={(id) => setComparisonTools((prev) => prev.filter((t) => t.id !== id))}
        />
      )}

      {/* Tools Grid */}
      <div className="py-12 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          {comparisonTools.length < 4 && (
            <div className="mb-8 text-center">
              <p className="text-gray-400">
                💡 Select up to 4 tools to compare •{" "}
                <span className="text-purple-400">
                  {comparisonTools.length}/4 selected
                </span>
              </p>
            </div>
          )}

          {filteredTools.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400">No tools found matching your search</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  onClick={() => handleToolClick(tool)}
                  onCompareToggle={handleCompareToggle}
                  isSelected={comparisonTools.some((t) => t.id === tool.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Ecosystem Flow */}
      {showEcosystem && (
        <div ref={ecosystemRef} className="py-12 px-4 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Ecosystem Workflow
              </h2>
              <p className="text-lg text-gray-400">
                See how AI tools connect in a modern web development workflow
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <EcosystemFlow />
            </motion.div>
          </div>
        </div>
      )}

      {/* Tool Detail Modal */}
      <ToolDetailModal tool={selectedTool} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            AI Web Toolkit Atlas • Curated collection of 22 AI tools for modern web development
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, Tailwind CSS, and Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
