export interface TimelineItem {
  org: string;
  role: string;
  when: string;
  position: 'up' | 'down';
  future?: boolean;
  note?: string;
}

export const timeline: TimelineItem[] = [
  { org: 'Bundeswehr',        role: 'Staff Duty Soldier · Twice decorated', when: 'Oct 2017 – Sep 2021', position: 'up' },
  { org: 'Yeager GmbH',       role: 'Co-Founder & Co-CEO',                 when: 'Nov 2022 – Jun 2024', position: 'down' },
  { org: 'SDU',                role: 'BSc in Engineering (Software)',       when: '2023 – 2026',         position: 'up' },
  { org: 'Tutora',             role: 'CTO & Co-Founder',                    when: 'Jun – Nov 2024',      position: 'down' },
  { org: 'SDU D&I Lab',        role: 'Research Assistant',                  when: 'Sep 2024 – Dec 2025', position: 'up' },
  { org: 'HKUST',              role: 'Exchange · CS & AI',                  when: 'Sep – Dec 2025',      position: 'down' },
  { org: 'HKUST DataVISards',  role: 'Research Collaborator',               when: 'Dec 2025 – now',      position: 'up' },
  { org: 'SDU',                role: 'Research Collaborator & TA',           when: 'Jan 2026 – now',      position: 'down' },
  { org: 'SaturoLabs',         role: 'Founder',                             when: 'Jan 2026 – now',      position: 'up' },
  { org: 'Cambridge',          role: 'MPhil ML & Machine Intelligence',      when: 'Oct 2026',            position: 'down', future: true, note: 'Admitted' },
];
