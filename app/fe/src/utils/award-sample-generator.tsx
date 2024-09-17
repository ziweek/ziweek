const dataset = [
  {
    title: "밤샘의 챔피언상",
    winner: "김야근",
    description:
      "별이 빛나는 밤에도 일을 놓지 않는 당신의 열정에 감사를 담아 이 상을 드립니다.",
    publisher: "야근 근절 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "커피 애호가상",
    winner: "이카페",
    description:
      "매일 아침 당신의 책상 위에서 빛나는 커피잔에게 이 상을 드립니다.",
    publisher: "카페인 중독자 협회",
    date: "2024년 7월 24일",
  },
  {
    title: "점심시간 장인상",
    winner: "박점심",
    description:
      "점심시간마다 최고의 맛집을 찾아내는 당신의 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "맛집 탐방 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "회의의 달인상",
    winner: "정회의",
    description:
      "끝없는 회의에도 굴하지 않는 당신의 인내심에 감사를 담아 이 상을 드립니다.",
    publisher: "회의 혁신 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "지각왕상",
    winner: "최지각",
    description:
      "항상 독특한 이유로 지각하는 당신의 창의력에 감사를 담아 이 상을 드립니다.",
    publisher: "시간 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "야근의 신상",
    winner: "신야근",
    description:
      "야근을 예술의 경지로 끌어올린 당신의 열정에 감사를 담아 이 상을 드립니다.",
    publisher: "야근 근절 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "휴가의 달인상",
    winner: "강휴가",
    description:
      "휴가 계획을 세우는 당신의 철저한 준비성에 감사를 담아 이 상을 드립니다.",
    publisher: "휴가 장려 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "인터넷 탐색왕상",
    winner: "인터넷",
    description:
      "일과 시간에 상관없이 인터넷을 자유자재로 탐색하는 당신의 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "인터넷 중독 협회",
    date: "2024년 7월 24일",
  },
  {
    title: "책상 정리왕상",
    winner: "정리왕",
    description:
      "늘 깔끔하게 정리된 책상 위에서 빛나는 당신의 정리정돈 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "정리 정돈 협회",
    date: "2024년 7월 24일",
  },
  {
    title: "아이디어 뱅크상",
    winner: "이아이디어",
    description:
      "끝없는 아이디어로 회의를 빛내는 당신의 창의력에 감사를 담아 이 상을 드립니다.",
    publisher: "창의성 증진 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "문서왕상",
    winner: "문서기",
    description:
      "문서 작성에 탁월한 능력을 발휘하는 당신에게 이 상을 드립니다.",
    publisher: "문서 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "다이어트 실패상",
    winner: "김다이어트",
    description:
      "매번 다이어트 실패에도 굴하지 않는 당신의 의지에 감사를 담아 이 상을 드립니다.",
    publisher: "다이어트 연구소",
    date: "2024년 7월 24일",
  },
  {
    title: "신입생 환영상",
    winner: "신입사원",
    description:
      "신입사원으로서의 열정과 성실함에 감사를 담아 이 상을 드립니다.",
    publisher: "인사관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "칼퇴근상",
    winner: "칼퇴근",
    description:
      "정시 퇴근을 지키는 당신의 철저한 시간 관리에 감사를 담아 이 상을 드립니다.",
    publisher: "시간 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "웃음 유발자상",
    winner: "유머러스",
    description:
      "항상 밝은 웃음으로 분위기를 즐겁게 만드는 당신에게 이 상을 드립니다.",
    publisher: "사내 분위기 개선 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "매너왕상",
    winner: "매너왕",
    description:
      "항상 예의 바른 태도로 주위를 배려하는 당신에게 이 상을 드립니다.",
    publisher: "매너 향상 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "정시 출근왕상",
    winner: "정출근",
    description:
      "항상 정시에 출근하는 당신의 성실함에 감사를 담아 이 상을 드립니다.",
    publisher: "근태 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "행운의 주인공상",
    winner: "행운아",
    description: "항상 행운이 함께하는 당신에게 이 상을 드립니다.",
    publisher: "행운 증진 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "보물찾기왕상",
    winner: "보물찾기",
    description:
      "사내에서 잃어버린 물건을 찾아내는 당신의 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "사내 보물찾기 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "회의 지연왕상",
    winner: "지연자",
    description:
      "항상 회의를 지연시키는 당신의 독특한 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "회의 개선 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "가십왕상",
    winner: "가십러",
    description:
      "항상 최신 가십을 전하는 당신의 정보력에 감사를 담아 이 상을 드립니다.",
    publisher: "정보 공유 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "책읽기왕상",
    winner: "책벌레",
    description:
      "항상 책을 가까이하는 당신의 지적 호기심에 감사를 담아 이 상을 드립니다.",
    publisher: "독서 장려 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "미소천사상",
    winner: "미소녀",
    description:
      "항상 미소를 잃지 않는 당신의 긍정적인 에너지에 감사를 담아 이 상을 드립니다.",
    publisher: "긍정 에너지 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "야식왕상",
    winner: "야식러",
    description:
      "항상 야식을 즐기는 당신의 미식가 정신에 감사를 담아 이 상을 드립니다.",
    publisher: "미식가 협회",
    date: "2024년 7월 24일",
  },
  {
    title: "신속처리왕상",
    winner: "신속처리",
    description:
      "항상 업무를 신속하게 처리하는 당신의 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "업무 효율화 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "다이어트 성공상",
    winner: "성공자",
    description:
      "다이어트에 성공한 당신의 노력에 감사를 담아 이 상을 드립니다.",
    publisher: "건강 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "다정다감상",
    winner: "다정자",
    description:
      "항상 다정하게 주위를 배려하는 당신의 따뜻한 마음에 감사를 담아 이 상을 드립니다.",
    publisher: "사내 친목 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "열정의 아이콘상",
    winner: "열정러",
    description:
      "항상 열정적으로 일하는 당신의 뜨거운 마음에 감사를 담아 이 상을 드립니다.",
    publisher: "사내 열정 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "다재다능상",
    winner: "다재다능",
    description:
      "여러 방면에서 재능을 발휘하는 당신에게 감사를 담아 이 상을 드립니다.",
    publisher: "사내 재능 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "문서왕상",
    winner: "문서기",
    description:
      "문서 작성에 탁월한 능력을 발휘하는 당신에게 이 상을 드립니다.",
    publisher: "문서 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "다이어트 실패상",
    winner: "김다이어트",
    description:
      "매번 다이어트 실패에도 굴하지 않는 당신의 의지에 감사를 담아 이 상을 드립니다.",
    publisher: "다이어트 연구소",
    date: "2024년 7월 24일",
  },
  {
    title: "신입생 환영상",
    winner: "신입사원",
    description:
      "신입사원으로서의 열정과 성실함에 감사를 담아 이 상을 드립니다.",
    publisher: "인사관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "칼퇴근상",
    winner: "칼퇴근",
    description:
      "정시 퇴근을 지키는 당신의 철저한 시간 관리에 감사를 담아 이 상을 드립니다.",
    publisher: "시간 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "웃음 유발자상",
    winner: "유머러스",
    description:
      "항상 밝은 웃음으로 분위기를 즐겁게 만드는 당신에게 이 상을 드립니다.",
    publisher: "사내 분위기 개선 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "매너왕상",
    winner: "매너왕",
    description:
      "항상 예의 바른 태도로 주위를 배려하는 당신에게 이 상을 드립니다.",
    publisher: "매너 향상 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "정시 출근왕상",
    winner: "정출근",
    description:
      "항상 정시에 출근하는 당신의 성실함에 감사를 담아 이 상을 드립니다.",
    publisher: "근태 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "행운의 주인공상",
    winner: "행운아",
    description: "항상 행운이 함께하는 당신에게 이 상을 드립니다.",
    publisher: "행운 증진 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "보물찾기왕상",
    winner: "보물찾기",
    description:
      "사내에서 잃어버린 물건을 찾아내는 당신의 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "사내 보물찾기 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "회의 지연왕상",
    winner: "지연자",
    description:
      "항상 회의를 지연시키는 당신의 독특한 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "회의 개선 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "가십왕상",
    winner: "가십러",
    description:
      "항상 최신 가십을 전하는 당신의 정보력에 감사를 담아 이 상을 드립니다.",
    publisher: "정보 공유 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "책읽기왕상",
    winner: "책벌레",
    description:
      "항상 책을 가까이하는 당신의 지적 호기심에 감사를 담아 이 상을 드립니다.",
    publisher: "독서 장려 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "미소천사상",
    winner: "미소녀",
    description:
      "항상 미소를 잃지 않는 당신의 긍정적인 에너지에 감사를 담아 이 상을 드립니다.",
    publisher: "긍정 에너지 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "야식왕상",
    winner: "야식러",
    description:
      "항상 야식을 즐기는 당신의 미식가 정신에 감사를 담아 이 상을 드립니다.",
    publisher: "미식가 협회",
    date: "2024년 7월 24일",
  },
  {
    title: "신속처리왕상",
    winner: "신속처리",
    description:
      "항상 업무를 신속하게 처리하는 당신의 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "업무 효율화 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "다이어트 성공상",
    winner: "성공자",
    description:
      "다이어트에 성공한 당신의 노력에 감사를 담아 이 상을 드립니다.",
    publisher: "건강 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "다정다감상",
    winner: "다정자",
    description:
      "항상 다정하게 주위를 배려하는 당신의 따뜻한 마음에 감사를 담아 이 상을 드립니다.",
    publisher: "사내 친목 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "열정의 아이콘상",
    winner: "열정러",
    description:
      "항상 열정적으로 일하는 당신의 뜨거운 마음에 감사를 담아 이 상을 드립니다.",
    publisher: "사내 열정 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "다재다능상",
    winner: "다재다능",
    description:
      "여러 방면에서 재능을 발휘하는 당신에게 감사를 담아 이 상을 드립니다.",
    publisher: "사내 재능 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "발견왕상",
    winner: "발견자",
    description:
      "항상 새로운 아이디어와 기회를 발견하는 당신에게 감사를 담아 이 상을 드립니다.",
    publisher: "창의력 증진 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "비밀 유지왕상",
    winner: "비밀자",
    description:
      "항상 비밀을 잘 지키는 당신의 신뢰성에 감사를 담아 이 상을 드립니다.",
    publisher: "신뢰 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "사내 탐정상",
    winner: "탐정자",
    description:
      "항상 사내 정보를 잘 수집하는 당신의 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "정보 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "최고의 팀플레이어상",
    winner: "팀플러",
    description:
      "항상 팀워크를 중요시하는 당신의 협력 정신에 감사를 담아 이 상을 드립니다.",
    publisher: "팀워크 향상 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "청결왕상",
    winner: "청결자",
    description:
      "항상 청결을 유지하는 당신의 깔끔함에 감사를 담아 이 상을 드립니다.",
    publisher: "위생 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "스마일메이커상",
    winner: "스마일러",
    description:
      "항상 웃음을 전하는 당신의 긍정적인 에너지에 감사를 담아 이 상을 드립니다.",
    publisher: "사내 분위기 개선 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "문제 해결사상",
    winner: "해결사",
    description:
      "항상 문제를 해결하는 당신의 뛰어난 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "문제 해결 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "타임매니저상",
    winner: "타임매니저",
    description:
      "시간을 효율적으로 관리하는 당신의 능력에 감사를 담아 이 상을 드립니다.",
    publisher: "시간 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "최고의 리더상",
    winner: "리더",
    description:
      "항상 뛰어난 리더십을 발휘하는 당신에게 감사를 담아 이 상을 드립니다.",
    publisher: "리더십 증진 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "창의력 끝판왕상",
    winner: "창의력자",
    description:
      "항상 창의적인 아이디어로 업무를 혁신하는 당신에게 감사를 담아 이 상을 드립니다.",
    publisher: "창의력 향상 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "신뢰의 아이콘상",
    winner: "신뢰자",
    description:
      "항상 신뢰를 바탕으로 업무를 수행하는 당신에게 감사를 담아 이 상을 드립니다.",
    publisher: "신뢰 관리 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "에너자이저상",
    winner: "에너자이저",
    description:
      "항상 에너지 넘치는 모습으로 사내 분위기를 밝히는 당신에게 감사를 담아 이 상을 드립니다.",
    publisher: "사내 활력 증진 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "행복 전도사상",
    winner: "행복자",
    description:
      "항상 행복을 전파하는 당신의 긍정적인 마인드에 감사를 담아 이 상을 드립니다.",
    publisher: "행복 증진 위원회",
    date: "2024년 7월 24일",
  },
  {
    title: "다이어트 성공상",
    winner: "성공자",
    description:
      "다이어트에 성공한 당신의 노력에 감사를 담아 이 상을 드립니다.",
    publisher: "건강 관리 위원회",
    date: "2024년 7월 24일",
  },
];

function AwardVertical(props: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={300}
      id="award"
      className="relative w-[300px] aspect-[5/7] flex flex-col justify-center items-center p-8 py-10 h-[420px]"
    >
      <div
        className="relative grid grid-cols-3 grid-rows-4 h-full gap-4 content-between z-10"
        style={{
          gridTemplateRows: "auto auto 1fr auto",
        }}
      >
        <p className="col-span-3 w-full text-center text-xl font-light">
          {props.awardOption.awardValues.title}
        </p>
        <p className="col-span-3 w-full text-right text-md font-light">
          {props.awardOption.awardValues.winner}
        </p>
        <p className="col-span-3 w-full text-center self-center text-lg font-light">
          {props.awardOption.awardValues.description}
        </p>
        <div className="flex flex-col w-full items-center col-span-3">
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.publisher}
          </p>
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.date}
          </p>
        </div>
      </div>
      <div
        className="absolute w-[200%] scale-50 z-0 aspect-[5/7] bg-contain flex flex-col justify-center items-center p-8 py-10 border-2 drop-shadow-sm"
        style={{
          backgroundImage: `url(/images/award-template-1.png)`,
        }}
      ></div>
    </div>
  );
}
