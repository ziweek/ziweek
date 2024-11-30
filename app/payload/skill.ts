import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Python',
    },
    {
      title: 'Java',
    },
    {
      title: 'Kotlin',
    },
    {
      title: 'TypeScript',
    },
  ],
};

// const kernelDevelopment: ISkill.Skill = {
//   category: 'Kernel Development',
//   items: [
//     {
//       title: 'Kernel Programming',
//     },
//     {
//       title: 'GNU Debugger',
//     },
//     {
//       title: 'Memory Management',
//     },
//     {
//       title: 'System Call Interface',
//     },
//   ],
// };

const fameworks_libraries: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'Nest.js',
    },
    {
      title: 'FastAPI',
    },
    {
      title: 'Next.js',
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'Docker',
    },
    {
      title: 'Kubernetes',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'AWS',
    },
  ],
};

// const networkSecurity: ISkill.Skill = {
//   category: 'Network Security',
//   items: [
//     {
//       title: 'iptables',
//     },
//     {
//       title: 'OpenSSH',
//     },
//     {
//       title: 'OpenSSL',
//     },
//     {
//       title: 'NACLs',
//     },
//     {
//       title: 'VPN Technologies',
//     },
//     {
//       title: 'Intrusion Detection',
//     },
//   ],
// };

const tools_IDEs: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'VS Code',
    },
    {
      title: 'IDEA',
    },
    {
      title: 'Git',
    },
    {
      title: 'Github',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    languages,
    // kernelDevelopment,
    fameworks_libraries,
    infrastructure,
    // networkSecurity,
    // misc,
    tools_IDEs,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
