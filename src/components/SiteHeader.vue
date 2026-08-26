<script setup>
import {
  profile,
} from '../data/profile'
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink
        class="brand"
        to="/"
        aria-label="CHO SEUNGGEUN 포트폴리오 홈"
      >
        <span class="brand-mark">CSG.</span>
        <span class="brand-text">BACKEND DEVELOPER</span>
      </RouterLink>

      <nav
        class="site-nav"
        aria-label="주요 메뉴"
      >
        <RouterLink to="/#about">About</RouterLink>
        <RouterLink to="/#capabilities">Capabilities</RouterLink>
        <RouterLink to="/#experience">Experience</RouterLink>
        <RouterLink to="/#projects">Projects</RouterLink>
        <RouterLink to="/#contact">Contact</RouterLink>
      </nav>

      <div class="header-actions">
        <!--
          download 속성을 사용하면 PDF가 새 화면에 열리는 대신
          지원자가 지정한 파일명으로 저장되도록 안내할 수 있다.
        -->
        <a
          class="resume-link"
          :href="profile.contact.portfolioFile"
          :download="profile.contact.portfolioDownloadName"
        >
          Portfolio PDF
          <span aria-hidden="true">↓</span>
        </a>

        <!--
          새 창으로 여는 외부 링크에는 noopener와 noreferrer를 적용한다.
          외부 페이지가 원래 포트폴리오 창에 접근하는 위험을 줄이기 위한 설정이다.
        -->
        <a
          class="github-link"
          :href="profile.contact.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  z-index: 100;
  top: 0;
  border-bottom: 1px solid rgb(215 226 234 / 12%);
  background: rgb(12 12 12 / 82%);
  color: #d7e2ea;
  backdrop-filter: blur(18px);
}

.header-inner {
  display: flex;
  width: min(1440px, calc(100% - 48px));
  min-height: 74px;
  margin: 0 auto;
  align-items: center;
  gap: 34px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  background: linear-gradient(135deg, #eef5f8, #7f8795);
  background-clip: text;
  color: transparent;
  font-size: 1.25rem;
  font-weight: 900;
  letter-spacing: -0.06em;
}

.brand-text {
  color: rgb(215 226 234 / 58%);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
}

.site-nav {
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: clamp(18px, 2.4vw, 34px);
  color: #d7e2ea;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-nav a,
.resume-link,
.github-link {
  transition: opacity 180ms ease;
}

.site-nav a:hover,
.resume-link:hover,
.github-link:hover {
  opacity: 0.68;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.resume-link,
.github-link {
  display: inline-flex;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid rgb(215 226 234 / 32%);
  border-radius: 999px;
  align-items: center;
  gap: 7px;
  color: #d7e2ea;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 940px) {
  .site-nav {
    display: none;
  }

  .header-actions {
    margin-left: auto;
  }
}

@media (max-width: 520px) {
  .header-inner {
    width: min(100% - 28px, 1440px);
    min-height: 64px;
  }

  .brand-text {
    display: none;
  }

  .resume-link,
  .github-link {
    min-height: 36px;
    padding: 0 12px;
    font-size: 0.68rem;
  }
}
</style>
