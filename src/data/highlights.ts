export type HighlightKind = 'paper' | 'talk' | 'award' | 'job' | 'edu' | 'misc';

export interface Highlight {
  date: string;        // e.g. "MAY 2026"
  kind: HighlightKind;
  text: string;        // raw HTML allowed
  href?: string;
}

export const highlights: Highlight[] = [
  { date: 'MAY 2026', kind: 'award', text: 'Received grant from William Demant Fonden' },
  { date: 'APR 2026', kind: 'edu',   text: 'Accepted to the MSc Machine Learning at the University of Tübingen' },
  { date: 'MAR 2026', kind: 'edu',   text: 'Accepted to the MPhil in Machine Learning and Machine Intelligence at the University of Cambridge' },
  { date: 'MAR 2026', kind: 'paper', text: 'Three papers accepted to workshops at IEEE ICSA 2026: SAML, KDA-AI, SAGAI', href: '/#publications' },
  { date: 'MAR 2026', kind: 'misc',  text: 'Completed the Venture Capital Explorer Programme at Accelerace, Aarhus' },
  { date: 'JAN 2026', kind: 'job',   text: 'Joined the DataVISards group at HKUST as Research Collaborator' },
  { date: 'SEP 2025', kind: 'edu',   text: 'Started exchange semester at HKUST in Hong Kong' },
  { date: 'SEP 2025', kind: 'award', text: 'Top-10 in DMiAI 2025 (Danish National Championship in AI), second year running, solo' },
  { date: 'SEP 2025', kind: 'talk',  text: 'Paper presented at KES 2025 in Osaka, Japan', href: '/publications/flood-detection' },
  { date: 'OCT 2024', kind: 'award', text: 'Top-10 in DMiAI 2024 (Danish National Championship in AI)' },
  { date: 'SEP 2024', kind: 'job',   text: 'Started as Research Assistant at the Data & Intelligence Lab, SDU' },
  { date: 'DEC 2023', kind: 'award', text: 'Won the SDU Case Competition as a 1st-semester student (team WeUse · <a href="https://www.sonderborgnyt.dk/virksomheden-we-use-fik-god-hjaelp-gennem-sdu-konkurrence/" target="_blank" rel="noopener">press</a>)' },
  { date: '2021',     kind: 'award', text: 'Twice decorated by the Bundeswehr: Formal Recognition for Exemplary Service, and a Performance Bonus for Outstanding Achievement' },
];
