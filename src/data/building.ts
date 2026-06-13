export interface BuildItem {
  title: string;
  blurb: string;
  meta: string;
  links: { label: string; href: string }[];
}

export const building: BuildItem[] = [
  {
    title: 'FYI (Fact-check Your Information)',
    blurb: 'An open source browser extension for fact checking data driven news. It is the artifact behind my IEEE VIS 2026 paper. Readers find quantitative claims, explore the underlying data, and submit a verdict while the tool logs how they got there.',
    meta: 'TypeScript · MIT · with the DataVISards group at HKUST',
    links: [
      { label: 'Code ↗', href: 'https://github.com/DataVisards/FYI' },
      { label: 'Paper →', href: '/publications/fyi-factcheck' },
    ],
  },
  {
    title: 'Interactive AI course',
    blurb: 'A course that teaches AI fundamentals with step by step animations. I built it from scratch and use it as supplementary material for the AI course I teach at SDU.',
    meta: 'Teaching artifact · used by BSc students at SDU',
    links: [
      { label: 'Open ↗', href: 'https://phomarkon.github.io/ai101/' },
    ],
  },
  {
    title: 'SaturoLabs',
    blurb: 'My studio for products at the intersection of AI and software engineering. Three are live and in use.',
    meta: 'Shipped · claudeboyz, getproofz, dreambear',
    links: [
      { label: 'claudeboyz ↗', href: 'https://claudeboyz.com' },
      { label: 'getproofz ↗', href: 'https://getproofz.com' },
      { label: 'dreambear ↗', href: 'https://dreambear.app' },
    ],
  },
  {
    title: 'Danish AI Championship solution',
    blurb: 'My solo entry for the Danish national AI championship, where I placed top 10 against more than 50 teams. A cell classification pipeline built end to end.',
    meta: 'Jupyter · DM i AI · two top 10 finishes',
    links: [
      { label: 'Code ↗', href: 'https://github.com/phomarkon/danish-ai-competition-cell-classification-final' },
    ],
  },
];
