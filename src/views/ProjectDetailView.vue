<script setup>
import {
  computed,
} from 'vue'

import {
  getProjectById,
  projects,
} from '../data/projects'

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
})

/*
 * URL의 식별값을 공통 프로젝트 데이터와 연결한다.
 * 등록되지 않은 값이면 아래 템플릿에서 별도의 404 안내를 표시한다.
 */
const project = computed(() => getProjectById(props.projectId))

/*
 * 상세 페이지 하단에서 다음 프로젝트로 자연스럽게 이동하도록
 * 현재 프로젝트의 다음 순서 데이터를 계산한다.
 */
const nextProject = computed(() => {
  const currentIndex = projects.findIndex((item) => item.id === props.projectId)

  if (currentIndex < 0) {
    return projects[0]
  }

  return projects[(currentIndex + 1) % projects.length]
})
</script>

<template>
  <main
    v-if="project"
    class="project-detail"
  >
    <section
      class="detail-hero"
      :class="`theme-${project.theme}`"
    >
      <div class="detail-shell hero-shell">
        <RouterLink
          class="back-link"
          to="/#projects"
        >
          <span aria-hidden="true">←</span>
          전체 프로젝트
        </RouterLink>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">{{ project.category }}</p>
            <h1>{{ project.title }}</h1>
            <p class="hero-description">{{ project.description }}</p>

            <div class="hero-actions">
              <a
                class="repository-button"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository ↗
              </a>
              <a
                class="section-link"
                href="#demo"
              >
                구현 화면 보기 ↓
              </a>
            </div>
          </div>

          <dl class="project-facts">
            <div>
              <dt>기간</dt>
              <dd>{{ project.period }}</dd>
            </div>
            <div>
              <dt>형태</dt>
              <dd>{{ project.team }}</dd>
            </div>
            <div>
              <dt>담당</dt>
              <dd>{{ project.role }}</dd>
            </div>
            <div>
              <dt>기술</dt>
              <dd>{{ project.tech.join(' · ') }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section
      class="metric-section"
      aria-label="프로젝트 핵심 수치"
    >
      <div class="detail-shell metric-grid">
        <article
          v-for="metric in project.metrics"
          :key="metric.label"
        >
          <span>{{ metric.label }}</span>
          <strong>{{ metric.value }}</strong>
        </article>
      </div>
    </section>

    <section class="detail-shell overview-section">
      <div class="section-index">
        <span>01</span>
        <p>PROJECT OVERVIEW</p>
      </div>

      <div class="overview-content">
        <div>
          <p class="section-kicker">WHY THIS PROJECT</p>
          <h2>무엇을 구현했나요?</h2>
          <p class="goal-description">{{ project.goal }}</p>
        </div>

        <div class="feature-panel">
          <p class="section-kicker">CORE FEATURES</p>
          <ul>
            <li
              v-for="feature in project.features"
              :key="feature"
            >
              <span aria-hidden="true">✓</span>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="architecture-section">
      <div class="detail-shell">
        <header class="section-heading">
          <div class="section-index">
            <span>02</span>
            <p>ARCHITECTURE</p>
          </div>
          <div>
            <p class="section-kicker">REQUEST & DATA FLOW</p>
            <h2>요청과 데이터는 이렇게 흐릅니다.</h2>
          </div>
        </header>

        <ol class="architecture-flow">
          <li
            v-for="(layer, index) in project.architecture"
            :key="layer"
          >
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ layer }}</strong>
          </li>
        </ol>
      </div>
    </section>

    <section class="detail-shell problem-section">
      <header class="section-heading">
        <div class="section-index">
          <span>03</span>
          <p>PROBLEM SOLVING</p>
        </div>
        <div>
          <p class="section-kicker">KEY ENGINEERING DECISIONS</p>
          <h2>핵심 문제를 이렇게 해결했습니다.</h2>
        </div>
      </header>

      <div class="problem-list">
        <article
          v-for="(problem, index) in project.problems"
          :key="problem.title"
          class="problem-card"
        >
          <span class="problem-order">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ problem.title }}</h3>

          <dl>
            <div>
              <dt>문제</dt>
              <dd>{{ problem.problem }}</dd>
            </div>
            <div>
              <dt>해결</dt>
              <dd>{{ problem.solution }}</dd>
            </div>
            <div>
              <dt>결과</dt>
              <dd>{{ problem.result }}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>

    <section
      id="demo"
      class="demo-section"
    >
      <div class="detail-shell">
        <header class="section-heading demo-heading">
          <div class="section-index">
            <span>04</span>
            <p>IMPLEMENTATION</p>
          </div>
          <div>
            <p class="section-kicker">FEATURE DEMO</p>
            <h2>직접 구현한 화면입니다.</h2>
          </div>
        </header>

        <div class="demo-list">
          <figure
            v-for="media in project.media"
            :key="media.src"
            class="demo-card"
          >
            <div class="media-frame">
              <!--
                상세 페이지 진입 시 모든 대용량 GIF를 즉시 내려받지 않도록
                loading=lazy를 적용해 현재 화면과 가까운 이미지부터 요청한다.
              -->
              <img
                :src="media.src"
                :alt="`${project.name} ${media.title} 시연`"
                loading="lazy"
                decoding="async"
              >
            </div>
            <figcaption>
              <strong>{{ media.title }}</strong>
              <p>{{ media.description }}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="detail-shell learning-section">
      <div class="section-index">
        <span>05</span>
        <p>WHAT I LEARNED</p>
      </div>

      <div class="learning-content">
        <div>
          <p class="section-kicker">GROWTH</p>
          <h2>구현을 통해 배운 점</h2>
        </div>

        <ul>
          <li
            v-for="learning in project.learnings"
            :key="learning"
          >
            {{ learning }}
          </li>
        </ul>
      </div>
    </section>

    <section class="next-project-section">
      <div class="detail-shell next-project-inner">
        <div>
          <p>NEXT PROJECT</p>
          <strong>{{ nextProject.name }}</strong>
          <span>{{ nextProject.title }}</span>
        </div>

        <RouterLink :to="`/projects/${nextProject.id}`">
          다음 프로젝트 보기
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>
  </main>

  <main
    v-else
    class="not-found"
  >
    <p>404 · PROJECT NOT FOUND</p>
    <h1>프로젝트를 찾을 수 없습니다.</h1>
    <span>주소를 확인하거나 전체 프로젝트 목록으로 돌아가 주세요.</span>
    <RouterLink to="/#projects">전체 프로젝트 보기</RouterLink>
  </main>
</template>

<style scoped>
/* 네 프로젝트가 같은 정보 구조와 시각적 위계를 사용하도록 구성한다. */
.project-detail {
  background: #ffffff;
}

.detail-shell {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.detail-hero {
  position: relative;
  overflow: hidden;
  color: #ffffff;
}

.detail-hero::before,
.detail-hero::after {
  position: absolute;
  border-radius: 50%;
  content: '';
  pointer-events: none;
}

.detail-hero::before {
  top: -320px;
  right: -180px;
  width: 680px;
  height: 680px;
  border: 1px solid rgb(255 255 255 / 16%);
}

.detail-hero::after {
  bottom: -240px;
  left: -100px;
  width: 450px;
  height: 450px;
  background: rgb(255 255 255 / 6%);
}

.theme-workcare {
  background: linear-gradient(135deg, #122f6a, #2862c7 72%, #4a86e8);
}

.theme-facility {
  background: linear-gradient(135deg, #174d60, #277e95 72%, #5baaba);
}

.theme-teamsync {
  background: linear-gradient(135deg, #3b1d78, #6840bb 72%, #956dde);
}

.theme-linkrew {
  background: linear-gradient(135deg, #104d86, #207ec4 72%, #50adeb);
}

.hero-shell {
  position: relative;
  z-index: 1;
  padding: 48px 0 clamp(80px, 10vw, 132px);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: rgb(255 255 255 / 78%);
  font-size: 0.86rem;
  font-weight: 800;
}

.hero-grid {
  display: grid;
  margin-top: clamp(70px, 10vw, 126px);
  align-items: end;
  gap: clamp(50px, 9vw, 110px);
  grid-template-columns: minmax(0, 1.3fr) minmax(310px, 0.7fr);
}

.eyebrow,
.section-kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.eyebrow {
  color: rgb(255 255 255 / 72%);
}

.hero-copy h1 {
  max-width: 800px;
  margin: 22px 0 0;
  font-size: clamp(2.8rem, 6.2vw, 5.8rem);
  letter-spacing: -0.065em;
  line-height: 1.08;
  word-break: keep-all;
}

.hero-description {
  max-width: 700px;
  margin: 30px 0 0;
  color: rgb(255 255 255 / 78%);
  font-size: 1.06rem;
  line-height: 1.9;
  word-break: keep-all;
}

.hero-actions {
  display: flex;
  margin-top: 38px;
  align-items: center;
  gap: 24px;
}

.repository-button {
  display: inline-flex;
  min-height: 50px;
  padding: 0 20px;
  border-radius: 10px;
  align-items: center;
  background: #ffffff;
  color: #17366e;
  font-size: 0.88rem;
  font-weight: 850;
}

.section-link {
  color: rgb(255 255 255 / 84%);
  font-size: 0.88rem;
  font-weight: 800;
}

.project-facts {
  margin: 0;
  padding: 8px 0;
  border-top: 1px solid rgb(255 255 255 / 24%);
  border-bottom: 1px solid rgb(255 255 255 / 24%);
}

.project-facts > div {
  display: grid;
  padding: 17px 0;
  gap: 20px;
  grid-template-columns: 52px 1fr;
}

.project-facts dt {
  color: rgb(255 255 255 / 54%);
  font-size: 0.72rem;
  font-weight: 800;
}

.project-facts dd {
  margin: 0;
  font-size: 0.86rem;
  font-weight: 750;
  line-height: 1.55;
}

.metric-section {
  border-bottom: 1px solid var(--color-border);
  background: #ffffff;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.metric-grid article {
  padding: 34px 36px;
}

.metric-grid article + article {
  border-left: 1px solid var(--color-border);
}

.metric-grid span,
.metric-grid strong {
  display: block;
}

.metric-grid span {
  color: var(--color-text-tertiary);
  font-size: 0.72rem;
  font-weight: 800;
}

.metric-grid strong {
  margin-top: 9px;
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  letter-spacing: -0.04em;
}

.overview-section,
.problem-section,
.learning-section {
  padding: clamp(84px, 10vw, 138px) 0;
}

.section-index {
  display: flex;
  align-items: center;
  gap: 14px;
}

.section-index span {
  display: grid;
  width: 42px;
  height: 42px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  place-items: center;
  color: var(--color-primary);
  font-size: 0.72rem;
  font-weight: 900;
}

.section-index p {
  margin: 0;
  color: var(--color-text-tertiary);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.14em;
}

.overview-content {
  display: grid;
  margin-top: 54px;
  gap: clamp(50px, 9vw, 110px);
  grid-template-columns: minmax(0, 1fr) minmax(330px, 0.8fr);
}

.section-kicker {
  color: var(--color-primary);
}

.overview-content h2,
.section-heading h2,
.learning-content h2 {
  margin: 15px 0 0;
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: -0.055em;
  line-height: 1.2;
  word-break: keep-all;
}

.goal-description {
  max-width: 690px;
  margin: 28px 0 0;
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  line-height: 1.95;
  word-break: keep-all;
}

.feature-panel {
  padding: 34px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background: var(--color-surface-secondary);
}

.feature-panel ul {
  display: grid;
  margin: 24px 0 0;
  padding: 0;
  gap: 18px;
  list-style: none;
}

.feature-panel li {
  display: grid;
  align-items: start;
  gap: 12px;
  grid-template-columns: 22px 1fr;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.65;
}

.feature-panel li span {
  display: grid;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  place-items: center;
  background: rgb(36 88 184 / 10%);
  color: var(--color-primary);
  font-size: 0.7rem;
}

.architecture-section,
.demo-section {
  padding: clamp(84px, 10vw, 138px) 0;
  background: #f5f7fb;
}

.section-heading {
  display: grid;
  align-items: end;
  gap: 50px;
  grid-template-columns: minmax(180px, 0.35fr) minmax(0, 1fr);
}

.architecture-flow {
  display: grid;
  margin: 62px 0 0;
  padding: 0;
  align-items: stretch;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  list-style: none;
}

.architecture-flow li {
  position: relative;
  min-height: 152px;
  padding: 28px 24px;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
  background: #ffffff;
}

.architecture-flow li:first-child {
  border-radius: 16px 0 0 16px;
}

.architecture-flow li:last-child {
  border-right: 1px solid var(--color-border);
  border-radius: 0 16px 16px 0;
}

.architecture-flow li:not(:last-child)::after {
  position: absolute;
  z-index: 1;
  top: 50%;
  right: -12px;
  display: grid;
  width: 24px;
  height: 24px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  place-items: center;
  background: #ffffff;
  color: var(--color-primary);
  content: '→';
  font-size: 0.7rem;
  transform: translateY(-50%);
}

.architecture-flow span,
.architecture-flow strong {
  display: block;
}

.architecture-flow span {
  color: var(--color-primary);
  font-size: 0.68rem;
  font-weight: 900;
}

.architecture-flow strong {
  margin-top: 28px;
  font-size: 0.88rem;
  line-height: 1.55;
  word-break: keep-all;
}

.problem-list {
  display: grid;
  margin-top: 62px;
  gap: 22px;
}

.problem-card {
  position: relative;
  display: grid;
  padding: clamp(30px, 5vw, 54px);
  border: 1px solid var(--color-border);
  border-radius: 22px;
  background: #ffffff;
  grid-template-columns: 72px minmax(240px, 0.7fr) minmax(0, 1.3fr);
  box-shadow: 0 18px 48px rgb(31 58 109 / 6%);
}

.problem-order {
  color: var(--color-primary);
  font-size: 0.74rem;
  font-weight: 900;
}

.problem-card h3 {
  margin: 0;
  padding-right: 42px;
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  letter-spacing: -0.04em;
  line-height: 1.45;
  word-break: keep-all;
}

.problem-card dl {
  display: grid;
  margin: 0;
  gap: 22px;
}

.problem-card dl > div {
  display: grid;
  gap: 16px;
  grid-template-columns: 42px 1fr;
}

.problem-card dt {
  color: var(--color-text-tertiary);
  font-size: 0.75rem;
  font-weight: 850;
}

.problem-card dd {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.75;
  word-break: keep-all;
}

.demo-heading {
  color: var(--color-text-primary);
}

.demo-list {
  display: grid;
  margin-top: 62px;
  gap: 38px;
}

.demo-card {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--color-border);
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 24px 65px rgb(31 58 109 / 9%);
}

.media-frame {
  overflow: hidden;
  border-bottom: 1px solid var(--color-border);
  background: #e9eef6;
  aspect-ratio: 1200 / 571;
}

.media-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.demo-card figcaption {
  display: grid;
  padding: 28px 32px;
  align-items: start;
  gap: 24px;
  grid-template-columns: minmax(220px, 0.55fr) minmax(0, 1fr);
}

.demo-card figcaption strong {
  font-size: 1.05rem;
}

.demo-card figcaption p {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
}

.learning-section {
  display: grid;
  gap: 50px;
  grid-template-columns: minmax(180px, 0.35fr) minmax(0, 1fr);
}

.learning-content {
  display: grid;
  gap: 46px;
  grid-template-columns: minmax(240px, 0.75fr) minmax(0, 1.25fr);
}

.learning-content ul {
  display: grid;
  margin: 0;
  padding: 0;
  gap: 0;
  list-style: none;
}

.learning-content li {
  position: relative;
  padding: 18px 0 18px 26px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  line-height: 1.75;
  word-break: keep-all;
}

.learning-content li::before {
  position: absolute;
  top: 27px;
  left: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary);
  content: '';
}

.next-project-section {
  background: #15254a;
  color: #ffffff;
}

.next-project-inner {
  display: flex;
  min-height: 260px;
  padding: 50px 0;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

.next-project-inner p,
.next-project-inner strong,
.next-project-inner span {
  display: block;
}

.next-project-inner p {
  margin: 0 0 15px;
  color: #8eb6ff;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.next-project-inner strong {
  font-size: clamp(1.7rem, 3vw, 2.8rem);
  letter-spacing: -0.045em;
}

.next-project-inner div > span {
  margin-top: 8px;
  color: #aebbd2;
}

.next-project-inner a {
  display: inline-flex;
  min-height: 50px;
  padding: 0 20px;
  border: 1px solid rgb(255 255 255 / 24%);
  border-radius: 10px;
  align-items: center;
  gap: 14px;
  font-size: 0.88rem;
  font-weight: 850;
}

.not-found {
  display: flex;
  width: min(900px, calc(100% - 48px));
  min-height: calc(100vh - 72px);
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.not-found p {
  margin: 0;
  color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.not-found h1 {
  margin: 20px 0 0;
  font-size: clamp(2.5rem, 6vw, 5rem);
  letter-spacing: -0.055em;
}

.not-found > span {
  margin-top: 18px;
  color: var(--color-text-secondary);
}

.not-found a {
  margin-top: 34px;
  color: var(--color-primary);
  font-weight: 850;
}

@media (max-width: 900px) {
  .hero-grid,
  .overview-content,
  .section-heading,
  .learning-section,
  .learning-content {
    grid-template-columns: 1fr;
  }

  .project-facts {
    max-width: 620px;
  }

  .architecture-flow {
    gap: 12px;
    grid-template-columns: repeat(2, 1fr);
  }

  .architecture-flow li,
  .architecture-flow li:first-child,
  .architecture-flow li:last-child {
    border: 1px solid var(--color-border);
    border-radius: 14px;
  }

  .architecture-flow li::after {
    display: none !important;
  }

  .problem-card {
    grid-template-columns: 54px 1fr;
  }

  .problem-card dl {
    margin-top: 30px;
    grid-column: 2;
  }
}

@media (max-width: 620px) {
  .detail-shell,
  .not-found {
    width: min(100% - 32px, 1180px);
  }

  .hero-shell {
    padding-top: 32px;
  }

  .hero-grid {
    margin-top: 64px;
  }

  .hero-copy h1 {
    font-size: clamp(2.35rem, 12vw, 3.5rem);
  }

  .hero-actions,
  .next-project-inner {
    align-items: flex-start;
    flex-direction: column;
  }

  .metric-grid {
    grid-template-columns: 1fr;
  }

  .metric-grid article {
    padding: 24px 0;
  }

  .metric-grid article + article {
    border-top: 1px solid var(--color-border);
    border-left: 0;
  }

  .architecture-flow {
    grid-template-columns: 1fr;
  }

  .problem-card {
    padding: 28px 24px;
    grid-template-columns: 1fr;
  }

  .problem-card h3 {
    margin-top: 14px;
    padding-right: 0;
  }

  .problem-card dl {
    margin-top: 28px;
    grid-column: 1;
  }

  .problem-card dl > div {
    gap: 8px;
    grid-template-columns: 1fr;
  }

  .demo-card figcaption {
    padding: 24px;
    grid-template-columns: 1fr;
  }

  .next-project-inner {
    min-height: 310px;
    justify-content: center;
  }
}
</style>
