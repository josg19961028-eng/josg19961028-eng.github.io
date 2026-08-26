/*
 * 프로젝트 정보를 한 파일에서 관리한다.
 *
 * 메인 카드와 상세 화면이 같은 데이터를 사용하므로,
 * 프로젝트 설명이나 기술 스택을 수정할 때 화면별 내용이 달라지는 문제를 막을 수 있다.
 */
export const projects = [
  {
    id: 'workcare',
    order: '01',
    name: 'WorkCare',
    category: 'PERSONAL · eGovFrame Boot',
    title: '산재근로자 공공데이터·판례 AI 안내',
    description: '근로복지공단 공공데이터를 조회하고 자연어 질문과 유사한 산재 판례를 검색하는 서비스입니다.',
    contribution: '기획, 공공데이터 연계, 백엔드, Vue 화면, 벡터 검색 전체 구현',
    tech: ['Java 17', 'eGovFrame Boot', 'Vue 3', 'Oracle 26ai', 'Ollama'],
    previews: [
      '/media/workcare/public-data.gif',
      '/media/workcare/precedent-chatbot.gif',
    ],
    theme: 'workcare',
    github: 'https://github.com/josg19961028-eng/workcare-ai-guide',
  },
  {
    id: 'facility',
    order: '02',
    name: 'Facility Reservation',
    category: 'PERSONAL · eGovFrame',
    title: '공공시설 예약 및 관리자 승인 서비스',
    description: '공공시설 조회부터 예약 신청·취소, 관리자 승인·반려까지 업무 흐름을 구현한 서비스입니다.',
    contribution: '요구사항·DB 설계, 예약 트랜잭션, 관리자 보안, REST API, Vue 화면 전체 구현',
    tech: ['Java 17', 'eGovFrame', 'Spring MVC', 'MyBatis', 'Oracle', 'Vue 3'],
    previews: [
      '/media/facility/reservation-flow.gif',
    ],
    theme: 'facility',
    github: 'https://github.com/josg19961028-eng/egov-facility-reservation',
  },
  {
    id: 'teamsync',
    order: '03',
    name: 'TeamSync',
    category: 'TEAM · KANBAN BOARD',
    title: '팀 협업·업무관리 플랫폼',
    description: '캘린더, 채팅, 회의록, 칸반보드를 하나의 업무 공간에 통합한 팀 협업 서비스입니다.',
    contribution: '칸반 CRUD, 담당자·체크리스트·댓글, 검색·필터, 드래그 앤 드롭, 캘린더·보관함 연동 구현',
    tech: ['Spring Boot', 'Spring Security', 'MyBatis', 'Oracle', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    previews: [
      '/media/teamsync/overview.gif',
      '/media/teamsync/drag-and-drop.gif',
      '/media/teamsync/card-detail.gif',
    ],
    theme: 'teamsync',
    github: 'https://github.com/josg19961028-eng/teamsyncs-collaboration-platform',
  },
  {
    id: 'linkrew',
    order: '04',
    name: 'LINKREW',
    category: 'TEAM · ADMIN PAGE',
    title: '모임·재능교환 커뮤니티 플랫폼',
    description: '지역 기반 모임과 재능교환을 연결하고 운영자가 서비스 현황을 관리하는 커뮤니티입니다.',
    contribution: '관리자 회원·게시글·신고·문의·공지사항·FAQ 관리 기능 구현',
    tech: ['Servlet', 'JSP', 'JDBC', 'Oracle', 'HTML', 'CSS', 'JavaScript'],
    previews: [
      '/media/linkrew/admin-flow.gif',
      '/media/linkrew/report-management.gif',
      '/media/linkrew/user-flow.gif',
    ],
    theme: 'linkrew',
    github: 'https://github.com/josg19961028-eng/meeting-community',
  },
]

/*
 * 상세 화면에서만 사용하는 프로젝트별 심화 정보다.
 * 메인 화면의 카드 데이터와 분리해 첫 화면에서는 꼭 필요한 정보만 사용한다.
 */
const projectDetails = {
  workcare: {
    period: '2026.08',
    team: '개인 프로젝트',
    role: '기획·공공데이터 연계·백엔드·Vue·AI 검색 전체 구현',
    goal: '흩어진 산재 지원정보와 판례를 사용자가 한 화면에서 조회하고, 자연어 질문으로 유사 판례까지 탐색할 수 있도록 구성했습니다.',
    metrics: [
      { label: '공공데이터 변환', value: 'XML → JSON' },
      { label: '임베딩 차원', value: '1,024' },
      { label: '검색 방식', value: 'Vector Search' },
    ],
    features: [
      '산재 지정 의료기관·약국·재활인증 의료기관 조회',
      '사회복귀 지원기관과 산재 판례 조건 검색',
      '공공데이터 판례 수집 및 Oracle MERGE 저장',
      '자연어 질문 기반 유사 판례와 검색 근거 제공',
    ],
    architecture: [
      'Vue 3',
      'eGovFrame Boot REST API',
      'Service · Public Data Client',
      'MyBatis · Ollama bge-m3',
      'Oracle 26ai · 공공데이터 API',
    ],
    problems: [
      {
        title: '외부 XML 응답 구조가 API마다 달랐던 문제',
        problem: 'HTTP 200만 확인하면 공공데이터의 오류 코드나 서로 다른 items 구조가 그대로 서비스 계층에 전달될 수 있었습니다.',
        solution: '외부 API 전용 DTO와 Client 계층을 만들고 HTTP 상태, 결과 코드, 응답 구조를 차례로 검증한 뒤 내부 응답 DTO로 변환했습니다.',
        result: '화면은 외부 XML 구조에 의존하지 않고 일관된 JSON만 사용하도록 책임을 분리했습니다.',
      },
      {
        title: '반복 수집 시 판례와 임베딩이 중복되는 문제',
        problem: '같은 데이터를 다시 수집할 때 판례가 중복 저장되고 변경되지 않은 원문까지 다시 임베딩할 가능성이 있었습니다.',
        solution: '사건번호·법원 기준 Oracle MERGE와 원문 해시를 적용하고, 변경된 판례만 PENDING 상태로 전환해 재임베딩했습니다.',
        result: '반복 실행에도 결과가 동일한 멱등성과 불필요한 AI 연산을 줄이는 수집 흐름을 확보했습니다.',
      },
      {
        title: '키워드가 다른 유사 사고를 찾기 어려운 문제',
        problem: '단순 문자열 검색은 표현이 다른 유사 산재 사고를 충분히 찾기 어려웠습니다.',
        solution: '판례 원문을 청크로 분리하고 bge-m3로 1,024차원 벡터를 생성한 뒤 Oracle AI Vector Search로 의미 유사도를 계산했습니다.',
        result: '사용자의 자연어 사고 설명과 의미적으로 가까운 판례 및 검색 근거를 함께 제공했습니다.',
      },
    ],
    learnings: [
      '외부 API 연계에서는 HTTP 성공뿐 아니라 업무 결과 코드와 응답 구조 검증이 필요합니다.',
      '외부 DTO와 내부 응답 DTO를 분리하면 공공데이터 형식 변경의 영향 범위를 줄일 수 있습니다.',
      'AI 안내 기능은 결과 정확도뿐 아니라 근거 출처와 책임 범위 안내가 중요합니다.',
      '인증키와 DB 비밀번호를 환경변수로 분리해 저장소의 비밀정보 노출을 방지했습니다.',
    ],
    media: [
      {
        src: '/media/workcare/public-data.gif',
        title: '근로복지공단 공공데이터 통합 조회',
        description: '외부 XML 데이터를 백엔드에서 검증·변환하여 의료기관과 지원기관 정보를 일관된 화면으로 제공합니다.',
      },
      {
        src: '/media/workcare/precedent-chatbot.gif',
        title: '유사 산재 판례 검색 챗봇',
        description: '사고 내용을 자연어로 입력하면 의미가 유사한 판례와 판단 근거를 함께 보여줍니다.',
      },
    ],
  },
  facility: {
    period: '2026.08.03 ~ 2026.08.10',
    team: '개인 프로젝트',
    role: '요구사항·DB 설계·예약 트랜잭션·관리자 보안·Vue 전체 구현',
    goal: '단순 예약 CRUD를 넘어 시간 중복, 동시 요청, 상태 전이, 개인정보 노출과 관리자 인증을 서버에서 일관되게 통제했습니다.',
    metrics: [
      { label: '동시성 제어', value: 'FOR UPDATE' },
      { label: '계정 잠금 기준', value: '5회 실패' },
      { label: '접근 제어', value: 'Vue + Server' },
    ],
    features: [
      '공공시설 조회와 예약 신청·조회·취소',
      '시설 수용 인원, 시간 순서와 중복 예약 검증',
      '관리자 로그인·검색·승인·반려',
      '세션 인증, 로그인 횟수 제한과 CSRF 검증',
    ],
    architecture: [
      'Vue 3 · JSP',
      'Spring MVC Controller',
      'eGovFrame Service',
      'MyBatis Mapper',
      'Oracle Database',
    ],
    problems: [
      {
        title: '동시에 들어온 예약이 모두 중복 검사를 통과하는 문제',
        problem: '중복 건수 조회 후 INSERT만 실행하면 두 요청이 같은 시점에 조회를 통과해 동일 시설과 시간에 예약될 수 있었습니다.',
        solution: '트랜잭션 시작 후 시설 행을 SELECT FOR UPDATE로 잠그고 시설 검증, 시간 중복 검사와 INSERT를 순서대로 수행했습니다.',
        result: '같은 시설 요청은 순차 처리하고 다른 시설은 독립적으로 처리해 잠금 범위와 동시성을 함께 고려했습니다.',
      },
      {
        title: '관리자 화면 주소만 숨겨서는 API를 보호할 수 없는 문제',
        problem: 'Vue 라우터 가드만 적용하면 화면 경로나 API를 직접 호출하여 프런트엔드 검사를 우회할 수 있었습니다.',
        solution: 'Vue 라우터 가드와 Spring HandlerInterceptor를 함께 적용하고 상태 변경 요청에는 세션 기반 CSRF 토큰을 검증했습니다.',
        result: '화면 사용성과 서버 보안을 분리하고 인증되지 않은 직접 API 호출도 차단했습니다.',
      },
      {
        title: '승인·반려 요청이 동시에 처리될 수 있는 문제',
        problem: '동일한 REQUESTED 예약에 승인과 반려가 거의 동시에 요청되면 잘못된 상태 전이가 발생할 수 있었습니다.',
        solution: '예약 행 잠금, 현재 상태 검증과 STATUS = REQUESTED 조건부 UPDATE를 한 트랜잭션에서 수행했습니다.',
        result: '최초 요청만 성공하고 이후 요청은 409 Conflict로 처리하는 일관된 상태 전이를 구현했습니다.',
      },
    ],
    learnings: [
      '프런트엔드 버튼 비활성화와 서버의 동시성 제어는 서로 다른 방어 계층입니다.',
      '입력 DTO, Service 업무 규칙과 DB 제약조건을 함께 사용해야 데이터 무결성을 지킬 수 있습니다.',
      '관리자 인증에서는 실패 횟수, 세션 고정, CSRF와 사용자 열거 공격까지 함께 고려해야 합니다.',
      '예외 상세는 서버 로그에 남기고 API에는 내부 구조가 노출되지 않는 공통 오류 형식을 제공했습니다.',
    ],
    media: [
      {
        src: '/media/facility/reservation-flow.gif',
        title: '사용자 예약부터 관리자 승인까지',
        description: '시설 조회, 예약 신청·조회·취소와 관리자의 예약 검색·승인·반려 흐름을 보여줍니다.',
      },
    ],
  },
  teamsync: {
    period: '2026.06.10 ~ 2026.07.28',
    team: '교육과정 팀 프로젝트',
    role: '칸반 보드·캘린더·보관함 화면·REST API·Service·MyBatis·Oracle 연동',
    goal: '팀 일정과 대화, 회의록과 업무 현황을 하나의 공간에서 관리하며 담당 업무의 진행 상태를 시각적으로 공유하도록 구현했습니다.',
    metrics: [
      { label: '칸반 상태', value: '4단계' },
      { label: '전체 데이터 모델', value: '24개 테이블' },
      { label: '담당 영역', value: 'Kanban Board' },
    ],
    features: [
      '태그·검색어·내 담당 카드 기반 업무 조회',
      '카드와 다중 담당자·첨부파일의 트랜잭션 저장',
      '드래그 앤 드롭 업무 상태 변경과 실패 복구',
      '체크리스트·댓글·담당자 관리와 진행률 계산',
      '칸반 카드와 캘린더·보관함 간 업무 데이터 연동',
    ],
    architecture: [
      'HTML · CSS · JavaScript',
      'Bootstrap · Thymeleaf',
      'Spring Security',
      'MVC · REST Controller',
      'Service Transaction',
      'MyBatis Mapper',
      'Oracle Database',
    ],
    problems: [
      {
        title: '빠른 연속 클릭으로 카드가 중복 생성되는 문제',
        problem: '카드 등록 요청이 완료되기 전에 버튼을 반복 클릭하면 같은 카드가 여러 건 저장됐습니다.',
        solution: '요청 시작 시 requesting 상태를 기록하고 버튼과 추가 요청을 차단했으며 실패 시 원래 상태를 복구했습니다.',
        result: '불필요한 중복 요청을 줄였고 이후 DB 제약조건이나 멱등성 키 같은 서버 방어도 필요하다는 점을 학습했습니다.',
      },
      {
        title: 'URL 변경으로 다른 팀의 카드에 접근할 수 있는 문제',
        problem: '화면에서 메뉴를 숨기는 방식만으로는 사용자가 URL의 팀 번호를 변경하는 접근을 막을 수 없었습니다.',
        solution: '세션의 현재 팀, 실제 팀원 여부를 DB에서 다시 확인하고 모든 카드 쿼리에 팀 번호 조건과 서버 권한 검증을 적용했습니다.',
        result: '클라이언트 입력을 신뢰하지 않고 팀 단위 데이터 접근을 서버에서 통제했습니다.',
      },
      {
        title: '카드와 담당자가 일부만 저장될 수 있는 문제',
        problem: '카드 저장 후 다중 담당자 등록 중 오류가 발생하면 카드만 남는 부분 저장 위험이 있었습니다.',
        solution: '카드와 담당자 관계 변경을 하나의 Service 트랜잭션으로 묶고 수정 시 기존 관계를 정리한 뒤 일괄 반영했습니다.',
        result: '여러 테이블에 걸친 업무 변경의 원자성과 데이터 정합성을 확보했습니다.',
      },
    ],
    learnings: [
      'Controller–Service–Mapper 계층의 책임과 REST·AJAX 요청 흐름을 경험했습니다.',
      '카드와 담당자의 다대다 관계, 체크리스트와 댓글 관계를 직접 모델링했습니다.',
      '화면의 권한 제어는 보조 수단이며 서버에서 사용자와 팀 소속을 다시 확인해야 합니다.',
      '요청 실패 시 화면을 서버 상태로 되돌리는 사용자 피드백과 복구 흐름을 구현했습니다.',
    ],
    media: [
      {
        src: '/media/teamsync/overview.gif',
        title: 'TeamSync 서비스 흐름',
        description: '팀 홈, 일정, 회의록과 칸반보드가 연결된 협업 서비스의 전체 흐름입니다.',
      },
      {
        src: '/media/teamsync/card-create.gif',
        title: '칸반 카드 등록',
        description: '업무 제목과 설명, 담당자, 마감일과 태그를 입력해 카드를 생성합니다.',
      },
      {
        src: '/media/teamsync/drag-and-drop.gif',
        title: '드래그 앤 드롭 상태 변경',
        description: '업무 카드를 다른 단계로 이동하고 변경된 상태를 서버에 저장합니다.',
      },
      {
        src: '/media/teamsync/card-detail.gif',
        title: '카드 상세 협업 기능',
        description: '다중 담당자, 체크리스트와 댓글을 카드 단위로 관리합니다.',
      },
    ],
  },
  linkrew: {
    period: '2026.04 ~ 2026.06',
    team: '5인 팀 프로젝트',
    role: '관리자 회원·게시글·신고·문의·공지사항·FAQ 관리',
    goal: '지역 기반 모임과 재능교환 서비스를 운영자가 안전하고 효율적으로 관리할 수 있도록 통계와 상태 처리 기능을 구축했습니다.',
    metrics: [
      { label: '개발 인원', value: '5명' },
      { label: '전체 데이터 모델', value: '24개 테이블' },
      { label: '담당 영역', value: 'Admin' },
    ],
    features: [
      '회원 검색·상세 조회·정지와 탈퇴 상태 관리',
      '모임·재능·자유게시판 통합 관리',
      '신고 사유·대상별 조회, 승인·반려, 회원 제재와 처리 결과 알림',
      '문의 답변, 공지사항·FAQ CRUD와 운영 통계',
      '지도 API를 이용한 모임 장소 검색·선택과 위치 표시',
    ],
    architecture: [
      '사용자 브라우저',
      '인증·권한 Filter',
      'DispatcherServlet',
      'Action Controller',
      'DAO · JDBC',
      'Oracle · JSP View',
    ],
    problems: [
      {
        title: '신고 승인 과정에서 여러 데이터가 불일치하는 문제',
        problem: '신고 승인 시 신고 상태 갱신, 피신고 회원의 신고 누적·제재 상태 변경, 처리 결과 알림 생성 중 하나만 실패해도 운영 화면과 실제 회원 상태가 달라질 수 있었습니다.',
        solution: '신고 상태 변경, 회원별 누적 신고 반영, 제재 대상의 회원 상태 변경과 알림 INSERT를 하나의 JDBC 트랜잭션으로 묶고, 처리 중 오류가 발생하면 전체를 롤백했습니다.',
        result: '관리자가 승인·반려한 결과와 회원별 누적 신고, 제재 상태와 알림이 하나의 업무 단위로 일관되게 반영되도록 했습니다.',
      },
      {
        title: '일반 사용자가 관리자 URL에 직접 접근하는 문제',
        problem: 'JSP에서 메뉴를 숨기는 것만으로는 직접 URL 요청을 통한 관리자 기능 접근을 막을 수 없었습니다.',
        solution: '세션 사용자와 상태값을 확인하는 Servlet Filter를 /admin/* 요청에 적용하고 서버에서 권한을 다시 검증했습니다.',
        result: '표현 계층과 별개로 서버 진입 단계에서 비로그인·일반 사용자의 요청을 차단했습니다.',
      },
      {
        title: '운영자가 여러 화면을 오가야 현황을 파악하는 문제',
        problem: '회원, 게시글, 신고와 문의 데이터가 분리돼 있어 우선 처리할 업무를 빠르게 파악하기 어려웠습니다.',
        solution: 'Oracle 조건별 COUNT와 월 단위 집계 쿼리로 주요 지표와 미처리 건수를 한 대시보드에 구성했습니다.',
        result: '관리자가 서비스 현황과 처리 대상을 한 화면에서 판단할 수 있도록 정보 구조를 개선했습니다.',
      },
    ],
    learnings: [
      'Controller와 Action 매핑을 직접 구성하며 MVC 요청 처리 흐름을 이해했습니다.',
      '관리 기능에는 CRUD뿐 아니라 권한, 상태 전이와 처리 사유가 필요합니다.',
      'PreparedStatement, BCrypt와 Filter를 적용해 기본적인 웹 보안 계층을 구성했습니다.',
      '운영자가 빠르게 판단하도록 데이터를 집계하고 시각적으로 전달하는 경험을 쌓았습니다.',
    ],
    media: [
      {
        src: '/media/linkrew/user-flow.gif',
        title: '사용자 서비스 흐름',
        description: '회원가입과 로그인부터 지역 기반 모임 조회, 참여와 재능교환 기능을 보여줍니다.',
      },
      {
        src: '/media/linkrew/admin-flow.gif',
        title: '관리자 통합 관리',
        description: '회원, 게시글, 신고, 공지사항과 FAQ를 하나의 관리자 화면에서 관리합니다.',
      },
      {
        src: '/media/linkrew/report-management.gif',
        title: '신고 접수와 제재 처리',
        description: '신고 사유와 대상을 확인해 승인·반려하고, 누적 신고에 따른 회원 제재와 처리 결과 알림을 함께 반영합니다.',
      },
    ],
  },
}

/*
 * URL에서 전달된 식별값에 맞는 프로젝트를 찾는다.
 * 존재하지 않는 값이면 undefined를 반환하여 상세 화면에서 404 안내를 할 수 있다.
 */
export const getProjectById = (projectId) => {
  const project = projects.find((item) => item.id === projectId)

  return project
    ? {
        ...project,
        ...projectDetails[projectId],
      }
    : undefined
}
