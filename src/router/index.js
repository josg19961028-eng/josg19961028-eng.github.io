import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import {
  getProjectById,
} from '../data/projects'

/*
 * createRouter는 애플리케이션에서 사용할 Router 객체를 생성한다.
 *
 * URL과 화면 컴포넌트의 관계를 routes 배열에 정의한다.
 */
const router = createRouter({
  /*
   * createWebHistory를 사용하면 URL에 #이 붙지 않는다.
   *
   * 예:
   * /projects/workcare
   *
   * Cloudflare Pages 배포 시 새로고침을 지원하기 위한 설정은
   * 배포 단계에서 별도로 추가할 예정이다.
   */
  history: createWebHistory(import.meta.env.BASE_URL),

  /*
   * 상단 메뉴에서 특정 섹션으로 이동할 때는 해당 위치로 부드럽게 이동하고,
   * 상세 화면으로 전환할 때는 페이지 맨 위에서 시작한다.
   */
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
    }
  },

  routes: [
    {
      /*
       * 포트폴리오 메인 화면이다.
       */
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      /*
       * 네 프로젝트의 공통 상세 화면이다.
       *
       * :projectId 부분에는 workcare, facility 등의
       * 프로젝트 식별값이 들어간다.
       *
       * 예:
       * /projects/workcare
       * /projects/facility
       */
      path: '/projects/:projectId',
      name: 'project-detail',

      /*
       * 상세 화면은 실제 접근할 때 파일을 불러온다.
       * 이를 지연 로딩이라고 하며 초기 화면의 로딩 용량을 줄여준다.
       */
      component: () => import('../views/ProjectDetailView.vue'),

      /*
       * URL의 projectId를 컴포넌트의 props로 전달한다.
       * 컴포넌트가 Router 객체에 직접 의존하는 것을 줄일 수 있다.
       */
      props: true,
    },
  ],
})

/*
 * 경로가 바뀔 때 브라우저 제목도 현재 프로젝트에 맞게 변경한다.
 * 여러 탭을 열어 비교하는 채용 담당자가 각 페이지를 구분하기 쉬워진다.
 */
router.afterEach((to) => {
  if (to.name === 'project-detail') {
    const project = getProjectById(to.params.projectId)
    document.title = project
      ? `${project.name} | 조승근 포트폴리오`
      : '프로젝트를 찾을 수 없습니다 | 조승근 포트폴리오'
    return
  }

  document.title = '조승근 | Java Backend Developer'
})

export default router
