// Nested AI landscape: 3 macro modalities, each containing labelled sub-areas.
// Coordinate space 1200 x 880.
import type { ClusterKey } from './publications';

export type BlobKind = 'macro' | 'sub';

export interface BlobSpec {
  key: ClusterKey;
  label: string;
  kind: BlobKind;
  path: string;
  labelXY: [number, number];
}

export interface NodeSpec {
  id: string;
  pubSlug?: string;
  topic?: string;
  cluster: ClusterKey;          // drives the node colour
  x: number;
  y: number;
  featured?: boolean;
  href?: string;                // clickable node that is not a publication (e.g. thesis)
  label?: string;               // display label for non-publication nodes
  tip?: string;                 // native tooltip text for href nodes
}

export type EdgeSpec = [string, string];

// We add colour tokens for the macro contours via existing cluster vars:
//   Language Models  -> reuse var(--c-interp)  (deep blue-grey)
//   Computer Vision  -> reuse var(--c-medical) (rose)
// Sub-area inner outlines use their sub-cluster colour.
//
// Layout sketch:
//   ┌────────── Language Models (macro) ──────────┐
//   │ Mech Interp │  Safety & Audit               │
//   │             │                               │
//   │  AI Agents & Software Systems  (bottom band)│
//   └─────────────────────────────────────────────┘
//   ┌── Computer Vision ──┐
//   │ Medical │ Remote Sensing │
//   └─────────────────────┘

export const blobs: BlobSpec[] = [
  // Macro 1: Language Models — widened bottom to fully contain the AI Agents sub-area
  {
    key: 'interp', kind: 'macro', label: 'Language Models', labelXY: [600, 32],
    path: 'M 50,300 C 50,95 240,50 600,50 C 960,50 1150,95 1150,300 C 1150,540 1110,580 600,580 C 90,580 50,540 50,300 Z',
  },
  // Sub-area: Mechanistic Interpretability (inside Language Models, top-left)
  {
    key: 'interp', kind: 'sub', label: 'Mechanistic Interpretability', labelXY: [280, 102],
    path: 'M 95,135 C 95,105 175,90 280,90 C 400,90 510,105 510,140 C 510,290 480,365 285,365 C 145,365 95,300 95,135 Z',
  },
  // Sub-area: Safety, Audit & Evaluation (inside Language Models, top-right)
  {
    key: 'safety', kind: 'sub', label: 'Safety, Audit & Evaluation', labelXY: [905, 102],
    path: 'M 700,135 C 700,105 800,90 905,90 C 1015,90 1110,105 1110,140 C 1110,290 1060,365 880,365 C 740,365 700,300 700,135 Z',
  },
  // Sub-area: AI Agents & Software Systems — label sits ABOVE the sub-blob so it doesn't clash with the AI Agents chip inside
  {
    key: 'arch', kind: 'sub', label: 'AI Agents & Software Systems', labelXY: [600, 388],
    path: 'M 180,425 C 180,400 310,400 600,400 C 890,400 1020,400 1020,425 C 1020,485 910,535 600,535 C 290,535 180,485 180,425 Z',
  },

  // Macro 2: Computer Vision — bumped down to leave clear gap below Language Models macro
  {
    key: 'medical', kind: 'macro', label: 'Computer Vision', labelXY: [410, 622],
    path: 'M 50,740 C 50,660 180,640 410,640 C 640,640 770,660 770,740 C 770,820 630,855 410,855 C 190,855 50,820 50,740 Z',
  },
  // Sub-area: Medical Imaging
  {
    key: 'medical', kind: 'sub', label: 'Medical Imaging', labelXY: [220, 680],
    path: 'M 90,748 C 90,705 140,685 220,685 C 305,685 360,705 360,748 C 360,798 290,830 220,830 C 145,830 90,798 90,748 Z',
  },
  // Sub-area: Remote Sensing & Agriculture
  {
    key: 'applied', kind: 'sub', label: 'Remote Sensing & Agriculture', labelXY: [580, 680],
    path: 'M 420,748 C 420,705 480,685 580,685 C 680,685 740,705 740,748 C 740,798 665,830 580,830 C 490,830 420,798 420,748 Z',
  },

];

export const nodes: NodeSpec[] = [
  // === Mechanistic Interpretability sub-area ===
  { id: 'mech-interp', topic: 'Mechanism', cluster: 'interp', x: 285, y: 142 },
  { id: 'path-already-walked',         pubSlug: 'path-already-walked',         cluster: 'interp', x: 425, y: 195, featured: true },
  { id: 'decoded-but-unused',          pubSlug: 'decoded-but-unused',          cluster: 'interp', x: 285, y: 235, featured: true },
  { id: 'counterfactual-self-reports', pubSlug: 'counterfactual-self-reports', cluster: 'interp', x: 290, y: 330, featured: true },

  // === Safety, Audit & Evaluation sub-area ===
  { id: 'audit', topic: 'Auditing', cluster: 'safety', x: 905, y: 142 },
  { id: 'open-box-fallacy',  pubSlug: 'open-box-fallacy',  cluster: 'safety', x: 775, y: 195, featured: true },
  { id: 'acceptance-cards',  pubSlug: 'acceptance-cards',  cluster: 'safety', x: 1030, y: 195, featured: true },
  { id: 'heimdall', label: 'Heimdall', href: '/#thesis', tip: 'BSc thesis. A conformal verifier that gates LLM bidding agents against the grid, with code and weights released.', cluster: 'safety', x: 1035, y: 300, featured: true },

  // === AI Agents & Software Systems sub-area ===
  { id: 'ai-agents', topic: 'AI Agents', cluster: 'arch', x: 600, y: 425 },
  { id: 'vibe-architecting',         pubSlug: 'vibe-architecting',         cluster: 'arch', x: 290, y: 485, featured: true },
  { id: 'cake',                      pubSlug: 'cake',                      cluster: 'arch', x: 600, y: 490, featured: true },
  { id: 'agentic-hybrid-retrieval',  pubSlug: 'agentic-hybrid-retrieval',  cluster: 'arch', x: 920, y: 485, featured: true },

  // === Medical Imaging ===
  { id: 'segmentation', topic: 'Segmentation', cluster: 'medical', x: 220, y: 720 },
  { id: 'small-organ-segmentation', pubSlug: 'small-organ-segmentation', cluster: 'medical', x: 220, y: 790, featured: true },

  // === Remote Sensing & Agriculture ===
  { id: 'remote-sensing', topic: 'Remote Sensing', cluster: 'applied', x: 580, y: 720 },
  { id: 'flood-detection',     pubSlug: 'flood-detection',     cluster: 'applied', x: 490, y: 785, featured: true },
  { id: 'fruit-hyperspectral', pubSlug: 'fruit-hyperspectral', cluster: 'applied', x: 670, y: 805, featured: true },

];

// Semantic edges (paper-to-paper and paper-to-topic).
export const edges: EdgeSpec[] = [
  // inside Mech Interp
  ['mech-interp', 'decoded-but-unused'],
  ['mech-interp', 'counterfactual-self-reports'], ['mech-interp', 'path-already-walked'],
  ['decoded-but-unused', 'counterfactual-self-reports'],

  // inside Safety
  ['audit', 'acceptance-cards'],
  ['audit', 'open-box-fallacy'],
  ['audit', 'heimdall'], ['heimdall', 'acceptance-cards'],

  // interp ↔ safety
  ['path-already-walked', 'open-box-fallacy'],

  // inside AI Agents
  ['ai-agents', 'vibe-architecting'], ['ai-agents', 'cake'], ['ai-agents', 'agentic-hybrid-retrieval'],
  ['vibe-architecting', 'cake'],

  // arch ↔ safety / audit
  ['vibe-architecting', 'open-box-fallacy'],

  // CV
  ['segmentation', 'small-organ-segmentation'],
  ['segmentation', 'flood-detection'],
  ['remote-sensing', 'flood-detection'], ['remote-sensing', 'fruit-hyperspectral'],
  ['flood-detection', 'fruit-hyperspectral'],
];

export const SVG_W = 1200;
export const SVG_H = 880;
