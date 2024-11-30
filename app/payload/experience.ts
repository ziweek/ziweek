import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '8th Army (United States)',
      positions: [
        {
          title: 'Sergeant, KATUSA (Korean Augmentation to The U.S. Army) Program, full-time',
          startedAt: '2023-07',
          endedAt: '2025-01',
          descriptions: [
            'Developed a Korean-English bilingual RAG chatbot that enables soldiers to access regulations for the US and ROK Army through multi-document retrieval, leveraging a PEFT fine-tuned sLLM with 4-bit quantization as a translation.',
            'Army Commendation Medal, signed by 8th Army Deputy Commanding General, Brigadier General Sean Crockett',
            'Chief of Staff of the Republic of Korea Army Award, in 11th Republic of Korea Army Entrepreneurship',
            '1st Place Award, presented by Governor of Jeju Province, in 2023 Jeju Island Satellite Data Utilization Competition',
          ],
          skillKeywords: ['C', 'Linux', 'Kernel', 'Security', 'Automation'],
        },
      ],
    },
    {
      title: 'Team OneClean',
      positions: [
        {
          title: 'Full-stack Developer, full-time',
          startedAt: '2022-01',
          endedAt: '2022-12',
          descriptions: [
            'Built a full-stack web application that help customers to make reservations, collaborating with designers and managers',
            '1st Place Winner in 2023 Korea University Business School Start-up Express Winter Season',
          ],
          skillKeywords: ['C', 'Linux', 'Kernel', 'Support', 'Research'],
        },
      ],
    },
    {
      title: 'KU3DS, Korea University Makerspace',
      positions: [
        {
          title: 'Frontend Developer, part-time',
          startedAt: '2022-07',
          endedAt: '2022-12',
          descriptions: [
            'Developed a web page that provides university events and map information data using Next.js, Tailwind CSS, Vercel.',
          ],
          skillKeywords: ['Next.js', 'Tailwind CSS', 'Vercel'],
        },
      ],
    },
  ],
};

export default experience;
