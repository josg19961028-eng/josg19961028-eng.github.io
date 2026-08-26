/*
 * Sites의 Cloudflare Worker에서 빌드된 정적 파일을 제공한다.
 * SPA 상세 경로로 직접 접속해도 index.html로 연결되도록
 * Vite 설정의 single-page-application 폴백과 함께 사용한다.
 */
export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request)
  },
}
