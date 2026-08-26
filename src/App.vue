<script setup>
/*
 * RouterView는 현재 URL과 일치하는 화면 컴포넌트를 표시한다.
 *
 * /                       → HomeView
 * /projects/workcare      → ProjectDetailView
 * /projects/facility      → ProjectDetailView
 */
import {
  RouterView,
} from 'vue-router'
import {
  useRoute,
} from 'vue-router'

import SiteHeader from './components/SiteHeader.vue'

/*
 * 메인 화면은 영상 히어로 내부의 플로팅 내비게이션을 사용한다.
 * 프로젝트 상세 화면에서는 기존 상단 내비게이션을 유지한다.
 */
const route = useRoute()
</script>

<template>
  <SiteHeader v-if="route.name !== 'home'" />
  <RouterView />
</template>
