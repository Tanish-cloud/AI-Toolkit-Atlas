import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  ConnectionLineType,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodeStyles = {
  padding: "16px 24px",
  borderRadius: "12px",
  border: "2px solid rgba(139, 92, 246, 0.5)",
  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "600",
  backdropFilter: "blur(10px)",
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "💡 Idea" },
    position: { x: 250, y: 0 },
    style: { ...nodeStyles, background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(167, 139, 250, 0.3))" },
  },
  {
    id: "2",
    data: { label: "🗺️ Relume\n(Sitemap & Wireframe)" },
    position: { x: 250, y: 100 },
    style: nodeStyles,
  },
  {
    id: "3",
    data: { label: "🎨 Framer AI\n(Design)" },
    position: { x: 100, y: 220 },
    style: nodeStyles,
  },
  {
    id: "4",
    data: { label: "🖼️ Midjourney\n(Assets)" },
    position: { x: 400, y: 220 },
    style: nodeStyles,
  },
  {
    id: "5",
    data: { label: "⚡ v0.dev\n(Components)" },
    position: { x: 250, y: 340 },
    style: nodeStyles,
  },
  {
    id: "6",
    data: { label: "💻 Cursor AI\n(Development)" },
    position: { x: 250, y: 460 },
    style: nodeStyles,
  },
  {
    id: "7",
    data: { label: "📝 Copy.ai\n(Content)" },
    position: { x: 500, y: 340 },
    style: nodeStyles,
  },
  {
    id: "8",
    type: "output",
    data: { label: "🚀 Deploy" },
    position: { x: 250, y: 580 },
    style: { ...nodeStyles, background: "linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.3))" },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { stroke: "#06b6d4", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { stroke: "#06b6d4", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" },
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { stroke: "#10b981", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { stroke: "#10b981", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { stroke: "#8b5cf6", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
  },
  {
    id: "e7-6",
    source: "7",
    target: "6",
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { stroke: "#06b6d4", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" },
  },
  {
    id: "e6-8",
    source: "6",
    target: "8",
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { stroke: "#10b981", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" },
  },
];

export function EcosystemFlow() {
  const onNodesChange = useCallback(() => {}, []);
  const onEdgesChange = useCallback(() => {}, []);

  return (
    <div className="h-[800px] w-full rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-white/10">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
        style={{
          background: "transparent",
        }}
      >
        <Background
          color="#8b5cf6"
          gap={16}
          size={1}
          style={{ opacity: 0.2 }}
        />
        <Controls
          style={{
            background: "rgba(20, 20, 30, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
          }}
        />
        <MiniMap
          nodeColor="#8b5cf6"
          maskColor="rgba(0, 0, 0, 0.6)"
          style={{
            background: "rgba(20, 20, 30, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
          }}
        />
      </ReactFlow>
    </div>
  );
}
