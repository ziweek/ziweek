import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'TA-CO: Two Army rules, Chat Once',
      startedAt: '2024-06',
      endedAt: '2024-11',
      where: 'G37 TREX KATUSA Program, 8th Army (United States)',
      descriptions: [
        {
          content:
            'Developed a bilingual RAG chatbot delivering US Army and ROK Army regulations, to address potential language barriers and reduce confusion caused by differing regulations, utilizing Transformers, Nomic-Embed, and FAISS.',
        },
        {
          content:
            'Leveraged a quantized PEFT fine-tuned Meta/Llama 3.2-1B model as part of a translation pipeline, to address challenges in generating Korean responses based on English-only context, improving translation accuracy by 30%.',
        },
        {
          content:
            'Optimized the small LLM model by applying 4-bit quantization, to resolve prolonged runtime issues identified through LangSmith monitoring, achieving a 50% reduction in the model size without crucial performance degradation',
        },
      ],
    },
    {
      title: 'Tec_Chat: Military Guide Chatbot Utilizing RAG LLM',
      startedAt: '2024-02',
      endedAt: '2024-04',
      where:
        'Chief of Staff of the Army Award in 11th Republic of Korea Army Entrepreneurship Competition',
      descriptions: [
        {
          content:
            'Built a RAG system providing military field manuals, to empower field soldiers to independently diagnose and perform emergency repairs without relying on maintenance teams, leveraging LangChain, Mistral, and Qdrant Vector DB.',
        },
        {
          content:
            'Converted LLM into on-device with Apple CoreML, to address operational requirements in network-restricted military environments and ensure the security of sensitive military information.',
        },
      ],
    },
    {
      title:
        'Intelligent Platform for Long-Term Abandoned Vehicle Detection Utilizing Satellite Image',
      startedAt: '2023-11',
      endedAt: '2024-01',
      where: '1st Prize Winner in 2023 Jeju Island Satellite Data Utilization Competition',
      descriptions: [
        {
          content:
            'Developed using the Java Spring Framework and RabbitMQ to ensure compatibility with the Korean e-government platform, enabling future scalability for ship and aircraft detection through a microservice architecture.',
        },
        {
          content:
            'Enhanced Small Object Detection model accuracy by 20% in mAP performance metrics, through integrating a Resolution-Enhancing Model as preprocessing pipeline, with implementing Weighted Boxes Fusion ensemble.',
        },
      ],
    },
  ],
};

export default project;
