export type HighlightKind = 'paper' | 'talk' | 'award' | 'job' | 'edu' | 'misc';

export interface Highlight {
  date: string;        // e.g. "MAY 2026"
  kind: HighlightKind;
  text: string;        // raw HTML allowed
  href?: string;
}

export const highlights: Highlight[] = [
  { date: 'JUN 2026', kind: 'misc',  text: 'Released <strong>Heimdall</strong>, a conformal prediction safety verifier, with open code and model weights', href: '/#thesis' },
  { date: 'JUN 2026', kind: 'paper', text: 'Paper accepted as an <strong>oral</strong> at the PhilML workshop, ICML 2026', href: '/publications/counterfactual-self-reports' },
  { date: 'JUN 2026', kind: 'paper', text: 'Two papers accepted to the Mechanistic Interpretability workshop, ICML 2026', href: '/#publications' },
  { date: 'JUN 2026', kind: 'award', text: '<strong>Best thesis in the Software Engineering programme</strong> (~100 students) at SDU, and nominated for the faculty-wide Faculty of Engineering (TEK) Best Thesis Award' },
  { date: 'MAY 2026', kind: 'award', text: 'Received grant from William Demant Fonden' },
  { date: '2026',     kind: 'award', text: 'Nominated for a Best Startup Award with DreamBear (SaturoLabs)' },
  { date: 'MAR 2026', kind: 'edu',   text: 'Accepted to the MPhil in Machine Learning and Machine Intelligence at the University of Cambridge' },
  { date: 'MAR 2026', kind: 'paper', text: 'Three papers accepted to workshops at IEEE ICSA 2026, the SAML, KDA-AI, and SAGAI workshops', href: '/#publications' },
  { date: 'MAR 2026', kind: 'misc',  text: 'Completed the Venture Capital Explorer Programme at Accelerace, Aarhus' },
  { date: 'JAN 2026', kind: 'job',   text: 'Joined the DataVISards group at HKUST as Research Collaborator' },
  { date: 'SEP 2025', kind: 'edu',   text: 'Started exchange semester at HKUST in Hong Kong' },
  { date: 'SEP 2025', kind: 'award', text: 'Top-10 in DMiAI 2025 (Danish National Championship in AI), second year running, solo' },
  { date: 'SEP 2025', kind: 'talk',  text: 'Paper presented at KES 2025 in Osaka, Japan', href: '/publications/flood-detection' },
  { date: 'OCT 2024', kind: 'award', text: 'Top-10 in DMiAI 2024 (Danish National Championship in AI)' },
  { date: 'SEP 2024', kind: 'job',   text: 'Started as Research Assistant at the Data & Intelligence Lab, SDU' },
  { date: 'DEC 2023', kind: 'award', text: 'Won the SDU Case Competition as a 1st semester student (team WeUse · <a href="https://www.sonderborgnyt.dk/virksomheden-we-use-fik-god-hjaelp-gennem-sdu-konkurrence/" target="_blank" rel="noopener">press</a>)' },
  { date: '2021',     kind: 'award', text: 'Twice decorated by the Bundeswehr, a Formal Recognition for Exemplary Service and a Performance Bonus for Outstanding Achievement' },
];
