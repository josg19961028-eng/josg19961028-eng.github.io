<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <article
    class="project-card"
    :class="{ reverse: index % 2 === 1 }"
  >
    <div class="project-preview">
      <img
        :src="project.previews[0]"
        :alt="`${project.name} 대표 구현 화면`"
        loading="lazy"
        decoding="async"
      >

      <span class="preview-label">{{ project.name }}</span>
    </div>

    <div class="project-content">
      <div class="project-meta">
        <span>{{ project.order }}</span>
        <p>{{ project.category }}</p>
      </div>

      <h3>{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>

      <dl>
        <dt>CONTRIBUTION</dt>
        <dd>{{ project.contribution }}</dd>
      </dl>

      <ul class="tech-list" aria-label="기술 스택">
        <li
          v-for="technology in project.tech"
          :key="technology"
        >
          {{ technology }}
        </li>
      </ul>

      <div class="project-actions">
        <RouterLink :to="`/projects/${project.id}`">
          프로젝트 상세
          <span aria-hidden="true">→</span>
        </RouterLink>

        <a
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository ↗
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: grid;
  overflow: hidden;
  align-items: center;
  border: 1px solid rgb(226 232 240 / 90%);
  border-radius: 34px;
  background: #f8fafc;
  box-shadow: 0 24px 70px rgb(15 23 42 / 5%);
  grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
}

.project-card.reverse .project-preview {
  order: 2;
}

.project-preview {
  position: relative;
  overflow: hidden;
  /*
   * 시연 GIF의 원본 비율이 약 2:1이므로 이미지 영역도 같은 비율로 유지한다.
   * 고정 높이를 사용하면 데스크톱 카드에서 GIF가 과도하게 확대되거나 잘릴 수 있다.
   */
  min-height: 0;
  aspect-ratio: 2 / 1;
  align-self: center;
  margin: 14px;
  border: 1px solid #e2e8f0;
  border-radius: 26px;
  background: #e2e8f0;
}

.project-preview img {
  display: block;
  width: 100%;
  height: 100%;
  /* 원본 화면 전체가 보이도록 자르지 않고 이미지 영역 안에 맞춘다. */
  object-fit: contain;
  transition: transform 500ms ease;
}

.project-card:hover .project-preview img {
  transform: scale(1.018);
}

.preview-label {
  position: absolute;
  bottom: 18px;
  left: 18px;
  padding: 8px 12px;
  border: 1px solid rgb(255 255 255 / 70%);
  border-radius: 999px;
  background: rgb(255 255 255 / 84%);
  box-shadow: 0 8px 24px rgb(15 23 42 / 8%);
  color: #0a1b33;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  backdrop-filter: blur(14px);
}

.project-content {
  display: flex;
  padding: clamp(36px, 5vw, 68px);
  justify-content: center;
  flex-direction: column;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 15px;
}

.project-meta span {
  display: grid;
  width: 36px;
  height: 36px;
  border: 1px solid #dbe3ee;
  border-radius: 50%;
  place-items: center;
  background: #ffffff;
  color: #2563eb;
  font-size: 0.67rem;
  font-weight: 700;
}

.project-meta p {
  margin: 0;
  color: #64748b;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.project-content h3 {
  margin: 28px 0 0;
  color: #0a1b33;
  font-family: Outfit, Inter, sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1.18;
  word-break: keep-all;
}

.project-description {
  margin: 20px 0 0;
  color: #64748b;
  font-size: 0.92rem;
  line-height: 1.75;
  word-break: keep-all;
}

.project-content dl {
  margin: 27px 0 0;
  padding-top: 22px;
  border-top: 1px solid #e2e8f0;
}

.project-content dt {
  color: #94a3b8;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.11em;
}

.project-content dd {
  margin: 9px 0 0;
  color: #334155;
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.6;
  word-break: keep-all;
}

.tech-list {
  display: flex;
  margin: 23px 0 0;
  padding: 0;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
}

.tech-list li {
  padding: 6px 9px;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  background: #ffffff;
  color: #475569;
  font-size: 0.63rem;
  font-weight: 600;
}

.project-actions {
  display: flex;
  margin-top: 32px;
  align-items: center;
  gap: 20px;
}

.project-actions a {
  font-size: 0.76rem;
  font-weight: 700;
}

.project-actions a:first-child {
  display: inline-flex;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  align-items: center;
  gap: 10px;
  background: #0a152d;
  color: #ffffff;
}

.project-actions a:last-child {
  color: #64748b;
}

@media (max-width: 920px) {
  .project-card {
    grid-template-columns: 1fr;
  }

  .project-card.reverse .project-preview {
    order: initial;
  }

  .project-preview {
    min-height: auto;
    aspect-ratio: 2 / 1;
  }
}

@media (max-width: 520px) {
  .project-card {
    border-radius: 24px;
  }

  .project-preview {
    margin: 9px;
    border-radius: 19px;
  }

  .project-content {
    padding: 30px 24px 36px;
  }

  .project-actions {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
