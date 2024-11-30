import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 제 이름은 김지욱입니다.',
    '저는 혁신적인 자연어 생성 기술을 통해 글로벌 접근성을 향상시키는 다국어 AI 시스템 개발에 열정을 가지고 있습니다. 기계 학습, 자연어 처리 알고리즘, 프로그래밍 분야에서의 전문 지식을 활용하여 텍스트 생성 기술과 확장 가능한 국제화 솔루션의 발전에 기여하는 것을 목표로 하고 있습니다.',
    '저는 이중언어 챗봇 시스템 구축 경험이 있으며, 검색 증강 생성(RAG), 토크나이제이션, 경량 LLM 미세 조정 등 최적화된 언어 모델 개발을 위한 기술을 활용해 왔습니다. 학문적 배경과 확장 가능한 소프트웨어 엔지니어링 및 언어 처리 분야에서의 산업 경험을 바탕으로, 전 세계 사용자들에게 포괄적이고 혁신적인 NLP 솔루션을 제공하기 위해 최선을 다하고 있습니다.',
    '저는 협업 환경에서 도전을 즐기며, 다양한 기술 및 사용자 중심 목표를 효과적으로 달성하기 위해 지속적으로 배우고 성장하고자 합니다.',
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
