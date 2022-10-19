export const Kodeal = {
  title: "Kodeal",
  subtitle: "코딩 입문자들을 위한 인공지능 코딩 QnA 서비스",
  period: "2021.12 ~ 2022.04",
  teams: "프론트엔드 1명, 백엔드 3명",
  github: "https://github.com/kodeal/frontEnd",
  myDevelop: {
    "메인 페이지": [
      "스크롤 애니매이션 라이브러리를 활용하여 서비스 소개 및 정보 출력 ",
      "Next.js의 preLandering을 통해 동영상 백그라운드 재생",
    ],
    "로그인 & 회원가입": [
      "로그인 성공 시 쿠키를 활용하여 사용자의 정보 저장",
      "회원가입시 이메일 인증을 통한 본인인증 구현",
    ],
    QnA: [
      "SyntaxHighlighter를 이용하여 코드의 가독성 향상",
      "Redux를 활용하여 사용자 QnA 정보 저장 및 출력",
      "Python, Javascript 중 사용자가 원하는 언어에 대한 답변을 받을 수 있도록 구현",
    ],
    "마이 페이지": [
      "Chart.js를 활용하여 사용자의 주요 질문 키워드 출력",
      "Github의 contribution 시스템을 응용하여 각 날짜마다 사용자가 어떤 질문을 했는지 볼 수 있도록 구현",
    ],
  },
  learned: [
    "Next.js는 SSR을 지원하여 서버측에서 미리 렌더링이 가능하게 할 수 있으며 SEO 최적화 기능을 지원하는 장점이 있지만, 모든 파일을 미리 컴파일 하지 않기 때문에 SPA와 달리 페이지 이동시 새로고침 현상이 일어난다.",
    "Typescript는 Javascript의 정적 타이핑을 지원하는 Superset 언어이며 이외에도 클래스를 더 효율적으로 사용할 수 있다.",
    "Babel은 최신 자바스크립트 문법을 es5 이전의 문법으로 변환하여 호환성을 높여주는 tool로 서비스 개발을 목적으로 하려면 같이 사용하는 것이 좋다.",
    "사용자 질문에 대한 답변을 받은 API 통신을 할 때 async/await으로 동기 프로그래밍을 하면 response을 받는 사이에 서비스가 멈춰있어 사용자 경험이 좋지 않으므로 로딩 컴포넌트를 활용한 비동기로 처리하는 것이 좋다.",
    "Redux는 전역으로 state를 관리할 수 있다는 장점이 있지만 새로고침을 하게 되면 Redux에 저장된 정보가 모두 사라지기 때문에 자주 사용해야 하는 정보는 브라우저의 로컬 저장소(cookie, web storage)에 저장하는 것이 더 좋다.",
  ],
};

export const Peachseoga = {
  title: "피치서가",
  subtitle: "저학습자를 위한 구독형 전자책 서비스",
  period: "2021.12 ~ 2022.02",
  teams: "프론트엔드 4명, 백엔드 2명, PM 1명",
  github: "https://github.com/Moomi98/winter-project-peachseoga",
  myDevelop: {
    "메인 페이지": [
      "useRef와 useState를 활용하여 메뉴바 사라지기 기능 구현",
      "react-slick 라이브러리를 활용하여 슬라이드 UI 동적 출력 구현",
    ],
    "프로필 페이지": [
      "cookie를 활용한 사용자 정보 활용",
      "Container 컴포넌트와 Presentational 컴포넌트의 분리 구현",
      "프로필 이미지 및 관심주제, 사용자 정보 등록 구현",
    ],
    "다중 로그인 제한": [
      "브라우저 핑거프린트를 활용하여 사용자 고유 값 생성",
      "휴대폰 인증을 활용한 본인 인증 모달 구현",
    ],
    "파일 첨부 기능 개선": [
      "Github의 contribution 시스템을 응용하여 각 날짜마다 사용자가 어떤 질문을 했는지 볼 수 있도록 구현",
    ],
  },
  learned: [
    "옵셔널 체이닝 연산자는 개발의 편리함을 가져다주지만 디버깅시 null값의 확인이 어려우므로 제한된 상황에서만 적절히 사용되어야 한다.",
    "useState는 리렌더링이 되어야 최신값으로 적용되기 때문에 setState 사용 후 바로 state 값을 이용하려 하면 최신값을 보장할 수 없다.",
    "Container 컴포넌트와 Presentational 컴포넌트로 분리 구현을 하면 기능 컴포넌트와 디자인 컴포넌트를 분리할 수 있어 모듈화가 좋다.",
    "input 태그의 onChange 메서드 구현 시 이벤트 객체에 null값을 할당하지 않으면 동일한 파일에 대해선 onChange를 감지하지 못한다.",
    "useCallback() 은 함수 메모이제이션을 위해 사용되며 자주 사용되는 함수에 대해 성능이 비약적으로 향상된다.",
  ],
};
