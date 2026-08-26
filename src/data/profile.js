/*
 * 포트폴리오에 표시할 개발자 소개 데이터다.
 *
 * 화면 컴포넌트 안에 자기소개 문장을 직접 작성하지 않고
 * 별도 데이터 파일로 분리하면 내용 수정과 화면 디자인을
 * 서로 독립적으로 관리할 수 있다.
 */
export const profile = {
  name: 'CHO SEUNGGEUN',
  role: 'Java Backend Developer',

  /*
   * 공개 연락처와 다운로드 자료를 한곳에서 관리한다.
   * 포트폴리오 PDF를 새 버전으로 교체할 때 같은 파일명을 유지하면
   * 화면 코드를 수정하지 않아도 다운로드 자료가 갱신된다.
   */
  contact: {
    email: 'josg33@naver.com',
    portfolioFile: '/documents/CHO_SEUNGGEUN_Backend_Portfolio.pdf',
    portfolioDownloadName: 'CHO_SEUNGGEUN_Backend_Portfolio.pdf',
    github: 'https://github.com/josg19961028-eng',
  },

  /*
   * 채용 담당자가 짧은 시간 안에 성장 과정과 개발 방향을
   * 파악할 수 있도록 두 문단으로 구성한다.
   */
  introduction: [
    'Servlet/JSP 기반 MVC 프로젝트로 웹 요청 처리 흐름을 익힌 뒤, Spring Boot 협업 시스템과 전자정부프레임워크 기반 공공서비스 프로젝트로 개발 경험을 확장했습니다.',
    '예약 동시성 제어, 상태 전이, 관리자 인증과 CSRF 방어, 공공데이터 연계 및 Vector Search를 구현하며 화면 동작뿐 아니라 서버에서 데이터의 신뢰성을 보장하는 개발을 지향합니다.',
  ],

  /*
   * 네 프로젝트에서 반복적으로 적용한 개발 원칙이다.
   * 자기소개서와 기술면접에서도 활용할 수 있는 핵심 경험이다.
   */
  principles: [
    {
      title: '데이터 정합성',
      description: '트랜잭션, 행 잠금, 데이터베이스 제약조건을 활용해 중복 처리와 잘못된 상태 변경을 방지합니다.',
    },
    {
      title: '서버 중심 보안',
      description: '화면 검증에만 의존하지 않고 서버에서 인증, 권한, 입력값과 CSRF 토큰을 다시 검증합니다.',
    },
    {
      title: '운영 가능한 구조',
      description: '계층 분리, 공통 예외 응답, 환경별 설정과 비밀정보 외부화를 통해 유지보수 가능한 코드를 작성합니다.',
    },
  ],

  /*
   * 실제 업무를 통해 개발자가 갖게 된 공공서비스 관점을 정리한다.
   * 확인되지 않은 근무 기간이나 직급은 임의로 작성하지 않는다.
   */
  experiences: [
    {
      category: 'PUBLIC SERVICE',
      organization: '한국교통안전공단',
      period: '2024.10 ~ 2025.08',
      role: '인턴 · 자동차 리콜 관련 업무',
      description: '리콜 정보를 다루며 정확한 정보 처리와 선제적 안내가 국민 안전으로 이어지는 공공서비스의 책임을 배웠습니다.',
    },
    {
      category: 'PUBLIC PROJECT',
      organization: '(주)엔알에스',
      period: '2021.04 ~ 2023.07',
      role: '사업 수행 경험 · 데이터 분석 및 보고서 작성',
      description: '다양한 공공기관 업무를 수행하며 새로운 제도와 업무 영역을 학습하고, 관계자의 요구사항을 정확히 파악하는 태도를 길렀습니다.',
    },
  ],

  /*
   * 교육과 자기주도 학습을 하나의 성장 흐름으로 보여준다.
   * 단순 기술 나열보다 어떤 단계로 역량을 확장했는지 설명한다.
   */
  education: [
    {
      category: 'JAVA WEB DEVELOPMENT',
      organization: '쌍용강북교육센터',
      period: '2025.12 ~ 2026.07',
      role: 'Java 기반 웹 개발 교육과정',
      description: 'Servlet/JSP MVC부터 Spring Boot와 Oracle 연동까지 학습하고, 두 차례의 팀 프로젝트에서 사용자 기능과 관리자 기능을 구현했습니다.',
    },
    {
      category: 'SELF-DIRECTED STUDY',
      organization: '개별 학습',
      period: '2026.07 ~ 현재',
      role: 'eGovFrame · Public Data · AI',
      description: '전자정부프레임워크의 계층형 구조와 공공데이터 연계, Oracle 트랜잭션 및 Vector Search를 개인 프로젝트로 구현했습니다.',
    },
  ],
}
