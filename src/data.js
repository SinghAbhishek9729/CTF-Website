export const eventConfig = {
  eventName: 'CYBER INVADERS CTF',
  collegeName: 'NIET Greater Noida',
  date: '[EVENT DATE]',
  venue: '[VENUE]',
  format: '[FORMAT]',
  year: '2026',
  registrationOpen: true,
  teamSize: 4,
  challengeCount: '[--]',
  contactEmail: '[EVENT EMAIL]',
};

export const navigationItems = [
  { label: 'Event', href: '/#event' },
  { label: 'Challenges', href: '/#challenges' },
  { label: 'Rules', href: '/#rules' },
  { label: 'Timeline', href: '/#workflow' },
];

export const challengeCategories = [
  ['01', 'Web Security', 'solar:code-linear'],
  ['02', 'Cryptography', 'solar:lock-keyhole-linear'],
  ['03', 'Digital Forensics', 'solar:magnifer-linear'],
  ['04', 'Reverse Engineering', 'solar:command-linear'],
  ['05', 'OSINT', 'solar:radar-2-linear'],
  ['06', 'Network Security', 'solar:server-square-linear'],
];

export const benefits = [
  ['01', 'Think like', 'an attacker'],
  ['02', 'Defend like', 'an engineer'],
  ['03', 'Solve under', 'pressure'],
  ['04', 'Learn through', 'challenge'],
];

export const workflowSteps = ['Register', 'Build your team', 'Enter the arena', 'Solve challenges', 'Capture flags', 'Climb the leaderboard'];

export const rules = [
  'Respect the competition infrastructure.',
  'Only attack systems explicitly included in the competition.',
  'Do not disrupt other participants.',
  'Do not attack external infrastructure.',
  'Follow flag submission requirements.',
  'Follow organizer instructions.',
];

export const socialLinks = [
  ['Instagram', '#'],
  ['LinkedIn', '#'],
  ['GitHub', '#'],
  ['Email', `mailto:${eventConfig.contactEmail}`],
];