import {
  createApp,
} from 'vue'

import App from './App.vue'
import router from './router'
import './style.css'

/*
 * Vue 애플리케이션을 생성한다.
 */
const app = createApp(App)

/*
 * mount 전에 Router를 플러그인으로 등록한다.
 *
 * 이 설정이 있어야 RouterLink와 RouterView를
 * 애플리케이션 전체에서 사용할 수 있다.
 */
app.use(router)

/*
 * index.html의 #app 요소에 Vue 애플리케이션을 연결한다.
 */
app.mount('#app')