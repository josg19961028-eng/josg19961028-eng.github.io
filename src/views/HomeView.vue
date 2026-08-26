<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import {
  projects,
} from '../data/projects'
import {
  profile,
} from '../data/profile'

/*
 * 포트폴리오에서 실제로 다룬 기술만 표시한다.
 * 단순 로고 나열이 아니라 기술명을 명시해 경력 과장을 피한다.
 */
const technologies = [
  { name: 'Java', gradient: 'linear-gradient(135deg, #dbeafe, #93c5fd)' },
  { name: 'Spring', gradient: 'linear-gradient(135deg, #dcfce7, #86efac)' },
  { name: 'Vue 3', gradient: 'linear-gradient(135deg, #d1fae5, #6ee7b7)' },
  { name: 'Oracle', gradient: 'linear-gradient(135deg, #fee2e2, #fca5a5)' },
  { name: 'MyBatis', gradient: 'linear-gradient(135deg, #fef3c7, #fcd34d)' },
  { name: 'eGovFrame', gradient: 'linear-gradient(135deg, #e0e7ff, #a5b4fc)' },
  { name: 'Docker', gradient: 'linear-gradient(135deg, #cffafe, #67e8f9)' },
  { name: 'Vector AI', gradient: 'linear-gradient(135deg, #f3e8ff, #d8b4fe)' },
]

const capabilities = [
  {
    number: '01',
    title: 'Backend Engineering',
    description: 'Java와 Spring 기반의 계층형 구조에서 REST API와 업무 규칙을 구현합니다.',
  },
  {
    number: '02',
    title: 'Data & Transaction',
    description: 'Oracle, MyBatis, 트랜잭션과 행 잠금으로 데이터 정합성을 지킵니다.',
  },
  {
    number: '03',
    title: 'Security & Reliability',
    description: '인증·권한·입력값과 CSRF를 서버에서 검증하고 예외 응답을 표준화합니다.',
  },
  {
    number: '04',
    title: 'Public Data & AI',
    description: '공공데이터를 내부 모델로 변환하고 Vector Search로 검색 경험을 확장합니다.',
  },
]
</script>

<template>
  <main class="home-page">
    <section id="top" class="hero-shell" aria-labelledby="hero-title">
      <!-- 사용자가 제공한 밝은 영상을 장식 배경으로 사용한다. -->
      <div class="hero-video" aria-hidden="true">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          autoplay
          loop
          muted
          playsinline
        />
      </div>

      <div class="hero-content">
        <p class="hero-kicker">CHO SEUNGGEUN · JAVA BACKEND DEVELOPER</p>
        <h1 id="hero-title">
          Foundation of<br>
          reliable digital services
        </h1>
        <p class="hero-description">
          데이터 정합성과 운영 안정성을 바탕으로 공공서비스의 업무 규칙을 구현하고,
          외부 데이터와 AI 검색까지 연결하는 백엔드 개발자입니다.
        </p>
        <div class="hero-actions">
          <a class="hero-button" href="#projects">
            프로젝트 보기
            <span aria-hidden="true">↘</span>
          </a>

          <!--
            웹 포트폴리오의 핵심 내용을 15장으로 정리한 PDF를 제공한다.
            이력서는 지원 기업의 양식에 맞춰 별도로 제출한다.
          -->
          <a
            class="resume-button"
            :href="profile.contact.portfolioFile"
            :download="profile.contact.portfolioDownloadName"
          >
            포트폴리오 PDF
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div class="floating-nav-wrap">
        <nav class="floating-nav" aria-label="메인 페이지 메뉴">
          <a class="nav-logo" href="#top" aria-label="페이지 맨 위로 이동">✦</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a class="nav-contact" href="#contact">
            Get in touch
            <span aria-hidden="true">›</span>
          </a>
        </nav>
      </div>
    </section>

    <!-- 순수 CSS 애니메이션으로 동작하는 기술 스택 마키다. -->
    <section class="tech-marquee" aria-label="주요 기술 스택">
      <div class="marquee-track">
        <template
          v-for="repeatIndex in 2"
          :key="repeatIndex"
        >
          <div
            v-for="technology in technologies"
            :key="`${repeatIndex}-${technology.name}`"
            class="tech-card"
          >
            <span
              class="tech-gradient"
              :style="{ background: technology.gradient }"
            />
            <strong>{{ technology.name }}</strong>
          </div>
        </template>
      </div>
    </section>

    <section
      id="about"
      class="content-section about-section"
      aria-labelledby="about-title"
    >
      <div class="section-intro">
        <p>ABOUT ME</p>
        <h2 id="about-title">기능 구현을 넘어<br>신뢰할 수 있는 서비스를 만듭니다.</h2>
      </div>

      <div class="about-body">
        <div class="about-copy">
          <p
            v-for="paragraph in profile.introduction"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="principle-grid">
          <article
            v-for="(principle, index) in profile.principles"
            :key="principle.title"
          >
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      id="capabilities"
      class="content-section capability-section"
      aria-labelledby="capability-title"
    >
      <header class="wide-heading">
        <p>CORE CAPABILITIES</p>
        <h2 id="capability-title">기술을 업무 문제 해결에 연결합니다.</h2>
      </header>

      <ol class="capability-list">
        <li
          v-for="capability in capabilities"
          :key="capability.number"
        >
          <span>{{ capability.number }}</span>
          <div>
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section
      id="experience"
      class="content-section experience-section"
      aria-labelledby="experience-title"
    >
      <header class="wide-heading">
        <p>EXPERIENCE &amp; EDUCATION</p>
        <h2 id="experience-title">공공서비스를 이해하고 개발 역량으로 연결했습니다.</h2>
      </header>

      <div class="experience-grid">
        <article class="experience-column">
          <p class="column-title">01 · WORK EXPERIENCE</p>
          <ol>
            <li
              v-for="experience in profile.experiences"
              :key="experience.organization"
            >
              <span>{{ experience.category }}</span>
              <h3>{{ experience.organization }}</h3>
              <strong>{{ experience.period }} · {{ experience.role }}</strong>
              <p>{{ experience.description }}</p>
            </li>
          </ol>
        </article>

        <article class="experience-column">
          <p class="column-title">02 · LEARNING JOURNEY</p>
          <ol>
            <li
              v-for="course in profile.education"
              :key="course.organization"
            >
              <span>{{ course.category }}</span>
              <h3>{{ course.organization }}</h3>
              <strong>{{ course.period }} · {{ course.role }}</strong>
              <p>{{ course.description }}</p>
            </li>
          </ol>
        </article>
      </div>
    </section>

    <section
      id="projects"
      class="content-section project-section"
      aria-labelledby="project-title"
    >
      <header class="wide-heading project-heading">
        <p>SELECTED PROJECTS</p>
        <h2 id="project-title">문제를 발견하고 코드로 해결했습니다.</h2>
        <span>
          화면 시연뿐 아니라 담당 기능, 데이터 구조와 핵심 문제 해결 과정을 상세 페이지에 정리했습니다.
        </span>
      </header>

      <div class="project-list">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>
    </section>

    <footer
      id="contact"
      class="contact-section"
    >
      <div>
        <p>CONTACT</p>
      </div>

      <div class="contact-links">
        <a
          class="contact-primary"
          :href="`mailto:${profile.contact.email}`"
        >
          {{ profile.contact.email }}
          <span aria-hidden="true">↗</span>
        </a>

        <a
          :href="profile.contact.portfolioFile"
          :download="profile.contact.portfolioDownloadName"
        >
          포트폴리오 PDF
          <span aria-hidden="true">↓</span>
        </a>

        <a
          :href="profile.contact.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.home-page {
  overflow-x: clip;
  padding: 24px 24px 48px;
  background: #f9fafb;
  color: #0a1b33;
}

.hero-shell {
  position: relative;
  display: flex;
  overflow: hidden;
  width: min(1400px, 100%);
  height: 600px;
  margin: 0 auto;
  border: 1px solid rgb(226 232 240 / 50%);
  border-radius: 48px;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 40px 100px -20px rgb(0 0 0 / 3%);
}

.hero-video {
  position: absolute;
  z-index: 0;
  overflow: hidden;
  inset: 0;
  pointer-events: none;
  user-select: none;
}

.hero-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 1s;
}

.hero-content {
  position: relative;
  z-index: 20;
  display: flex;
  padding: 58px clamp(32px, 5vw, 64px) 130px;
  align-items: flex-start;
  flex: 1;
  flex-direction: column;
  animation: content-in 700ms ease both;
}

.hero-kicker,
.section-intro > p,
.wide-heading > p,
.contact-section > div > p {
  margin: 0;
  color: #64748b;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.hero-content h1 {
  max-width: 700px;
  margin: 24px 0 0;
  color: #0a1b33;
  font-family: Outfit, Inter, sans-serif;
  font-size: clamp(2.65rem, 5vw, 3.5rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1.06;
}

.hero-description {
  max-width: 590px;
  margin: 23px 0 0;
  color: #64748b;
  font-size: 0.92rem;
  line-height: 1.75;
  word-break: keep-all;
}

.hero-actions {
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-button,
.resume-button {
  display: inline-flex;
  min-height: 46px;
  padding: 0 21px;
  border-radius: 999px;
  align-items: center;
  gap: 12px;
  background: #0a152d;
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 700;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.resume-button {
  border: 1px solid rgb(203 213 225 / 80%);
  background: rgb(255 255 255 / 88%);
  box-shadow: 0 8px 24px rgb(15 23 42 / 5%);
  color: #0a1b33;
  backdrop-filter: blur(14px);
}

.hero-button:hover,
.resume-button:hover {
  box-shadow: 0 12px 28px rgb(10 21 45 / 18%);
  transform: scale(1.035);
}

.floating-nav-wrap {
  position: absolute;
  z-index: 30;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.floating-nav {
  display: flex;
  padding: 6px;
  border: 1px solid rgb(226 232 240 / 40%);
  border-radius: 999px;
  align-items: center;
  gap: 4px;
  background: rgb(255 255 255 / 90%);
  box-shadow: 0 12px 40px rgb(0 0 0 / 8%);
  backdrop-filter: blur(24px);
  animation: nav-in 650ms 250ms ease both;
}

.floating-nav > a:not(.nav-logo):not(.nav-contact) {
  padding: 10px 13px;
  color: #64748b;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
}

.floating-nav > a:hover {
  color: #0a1b33;
}

.nav-logo {
  display: grid;
  width: 36px;
  height: 36px;
  border: 1px solid #f1f5f9;
  border-radius: 50%;
  place-items: center;
  background: #ffffff;
  box-shadow: 0 2px 8px rgb(15 23 42 / 6%);
}

.nav-contact {
  display: inline-flex;
  min-height: 38px;
  padding: 0 18px;
  border: 1px solid rgb(203 213 225 / 60%);
  border-radius: 999px;
  align-items: center;
  gap: 7px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgb(15 23 42 / 5%);
  color: #0a1b33;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
}

.tech-marquee {
  width: min(1400px, 100%);
  margin: 40px auto 0;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 14px;
  animation: marquee 36s linear infinite;
  will-change: transform;
}

.tech-marquee:hover .marquee-track {
  animation-play-state: paused;
}

.tech-card {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 160px;
  height: 96px;
  border: 1px solid rgb(203 213 225 / 60%);
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  background: #ffffff;
  box-shadow: 0 2px 8px rgb(15 23 42 / 5%);
  transition: border-color 180ms ease;
}

.tech-card:hover {
  border-color: #94a3b8;
}

.tech-gradient {
  position: absolute;
  opacity: 0;
  inset: 0;
  transform: scale(1.5);
  transition: opacity 250ms ease, transform 250ms ease;
}

.tech-card:hover .tech-gradient {
  opacity: 1;
  transform: scale(1);
}

.tech-card strong {
  position: relative;
  z-index: 1;
  color: #334155;
  font-family: Outfit, Inter, sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
}

.content-section,
.contact-section {
  width: min(1280px, 100%);
  margin: 0 auto;
}

.about-section {
  display: grid;
  padding: clamp(100px, 12vw, 160px) 0;
  gap: clamp(52px, 8vw, 110px);
  grid-template-columns: minmax(280px, 0.7fr) minmax(0, 1.3fr);
}

.section-intro h2,
.wide-heading h2 {
  margin: 17px 0 0;
  font-family: Outfit, Inter, sans-serif;
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1.14;
  word-break: keep-all;
}

.section-intro h2 {
  font-size: clamp(2.25rem, 4.5vw, 4rem);
}

.about-copy {
  display: grid;
  gap: 14px;
}

.about-copy p {
  margin: 0;
  color: #64748b;
  font-size: 1rem;
  line-height: 1.85;
  word-break: keep-all;
}

.principle-grid {
  display: grid;
  margin-top: 34px;
  gap: 12px;
  grid-template-columns: repeat(3, 1fr);
}

.principle-grid article {
  min-height: 210px;
  padding: 25px;
  border: 1px solid rgb(226 232 240 / 80%);
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 18px 50px rgb(15 23 42 / 4%);
}

.principle-grid article > span,
.experience-column > ol > li > span {
  color: #2563eb;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.principle-grid h3 {
  margin: 27px 0 11px;
  font-size: 1.05rem;
}

.principle-grid p {
  margin: 0;
  color: #64748b;
  font-size: 0.82rem;
  line-height: 1.7;
  word-break: keep-all;
}

.capability-section,
.experience-section,
.project-section {
  padding: clamp(88px, 10vw, 138px) clamp(28px, 5vw, 68px);
  border: 1px solid rgb(226 232 240 / 72%);
  border-radius: 40px;
  background: #ffffff;
  box-shadow: 0 30px 80px rgb(15 23 42 / 3%);
}

.experience-section,
.project-section {
  margin-top: 28px;
}

.wide-heading {
  display: grid;
  align-items: end;
  gap: 50px;
  grid-template-columns: 0.48fr 1fr;
}

.wide-heading h2 {
  font-size: clamp(2.3rem, 4.8vw, 4.4rem);
}

.capability-list {
  margin: 68px 0 0;
  padding: 0;
  border-top: 1px solid #e2e8f0;
  list-style: none;
}

.capability-list > li {
  display: grid;
  padding: 34px 0;
  border-bottom: 1px solid #e2e8f0;
  align-items: center;
  gap: 40px;
  grid-template-columns: 80px 1fr;
}

.capability-list > li > span {
  color: #cbd5e1;
  font-family: Outfit, sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
}

.capability-list h3 {
  margin: 0;
  font-family: Outfit, sans-serif;
  font-size: 1.35rem;
  font-weight: 500;
}

.capability-list p {
  margin: 9px 0 0;
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.65;
}

.experience-grid {
  display: grid;
  margin-top: 64px;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
}

.experience-column {
  padding: 30px;
  border: 1px solid #e2e8f0;
  border-radius: 26px;
  background: #f8fafc;
}

.column-title {
  margin: 0;
  color: #64748b;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.experience-column > ol {
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.experience-column > ol > li {
  padding: 26px 0;
  border-top: 1px solid #e2e8f0;
}

.experience-column h3 {
  margin: 9px 0 0;
  font-size: 1.2rem;
}

.experience-column strong {
  display: block;
  margin-top: 6px;
  font-size: 0.82rem;
}

.experience-column > ol > li > p {
  margin: 15px 0 0;
  color: #64748b;
  font-size: 0.84rem;
  line-height: 1.7;
  word-break: keep-all;
}

.project-heading > span {
  display: block;
  max-width: 640px;
  margin: 30px 0 0 auto;
  color: #64748b;
  line-height: 1.75;
  word-break: keep-all;
}

.project-list {
  display: grid;
  margin-top: 66px;
  gap: 24px;
}

.contact-section {
  display: flex;
  margin-top: 28px;
  padding: clamp(54px, 7vw, 86px);
  border: 1px solid rgb(191 219 254 / 70%);
  border-radius: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 42px;
  background: linear-gradient(135deg, #eff6ff, #f5f3ff 58%, #ffffff);
}

.contact-section > div > p {
  color: #0a1b33;
  font-family: Outfit, Inter, sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1;
}

.contact-links {
  display: flex;
  max-width: 520px;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 9px;
}

.contact-links > a {
  display: inline-flex;
  min-height: 50px;
  padding: 0 21px;
  border: 1px solid rgb(203 213 225 / 80%);
  border-radius: 999px;
  align-items: center;
  gap: 12px;
  background: rgb(255 255 255 / 82%);
  color: #0a1b33;
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
  transition: border-color 180ms ease, transform 180ms ease;
}

.contact-links > a:hover {
  border-color: #94a3b8;
  transform: translateY(-2px);
}

.contact-links > .contact-primary {
  border-color: #0a152d;
  background: #0a152d;
  color: #ffffff;
}

@keyframes content-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes nav-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 900px) {
  .about-section,
  .wide-heading,
  .experience-grid {
    grid-template-columns: 1fr;
  }

  .principle-grid {
    grid-template-columns: 1fr;
  }

  .principle-grid article {
    min-height: auto;
  }

  .project-heading > span {
    margin-left: 0;
  }
}

@media (max-width: 620px) {
  .home-page {
    padding: 12px 12px 24px;
  }

  .hero-shell {
    height: 620px;
    border-radius: 30px;
  }

  .hero-content {
    padding: 44px 24px 150px;
  }

  .hero-content h1 {
    font-size: 2.55rem;
  }

  .floating-nav-wrap {
    bottom: 28px;
    width: calc(100% - 28px);
  }

  .floating-nav {
    justify-content: center;
  }

  .floating-nav > a:not(.nav-logo):not(.nav-contact) {
    padding-right: 7px;
    padding-left: 7px;
  }

  .nav-contact {
    padding: 0 12px;
  }

  .tech-card {
    width: 138px;
    height: 82px;
  }

  .about-section {
    padding: 88px 10px;
  }

  .capability-section,
  .experience-section,
  .project-section,
  .contact-section {
    padding: 58px 24px;
    border-radius: 28px;
  }

  .capability-list > li {
    align-items: start;
    gap: 18px;
    grid-template-columns: 50px 1fr;
  }

  .capability-list > li > span {
    font-size: 1.7rem;
  }

  .experience-column {
    padding: 22px;
  }

  .contact-section {
    align-items: flex-start;
    flex-direction: column;
  }

  .contact-links {
    width: 100%;
    justify-content: flex-start;
  }

  .contact-links > a {
    min-height: 46px;
    padding: 0 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-content,
  .floating-nav,
  .marquee-track {
    animation: none;
  }
}
</style>
