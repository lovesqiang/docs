<script setup>
import {ref, onMounted} from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const activeCategory = ref('')
// 增加移动端状态
const isMobile = ref(false)

// 跳转到对应分类
const scrollToCategory = (name) => {
  activeCategory.value = name
  const target = document.getElementById(name.toLowerCase().replace(/\s+/g, '-'))
  if (target) {
    target.scrollIntoView({behavior: 'smooth', block: 'start'})
    // 更新 URL hash
    history.replaceState(null, null, `#${name}`)
  }
}

// 滚动监听
onMounted(() => {
// 移动端检测
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeCategory.value = entry.target.id.replace(/-/g, ' ') // 修复替换所有连字符
      }
    })
  }, {
    rootMargin: '-50px 0px -50% 0px',
    threshold: 0
  })

  props.categories.forEach(cat => {
    const element = document.getElementById(cat.name.toLowerCase().replace(/\s+/g, '-'))
    if (element) observer.observe(element)
  })
})
</script>

<template>
  <div class="layout-container">
    <!-- 左侧导航 -->
    <nav class="side-nav">
      <div class="nav-header">分类导航</div>
      <ul class="nav-list">
        <li
            v-for="category in categories"
            :key="category.name"
            :class="{ active: activeCategory === category.name }"
            @click="scrollToCategory(category.name)"
        >
          {{ category.name }}
        </li>
      </ul>
    </nav>

    <!-- 内容区域 -->
    <div class="content-container">
      <div
          v-for="category in categories"
          :key="category.name"
          class="category"
          :id="category.name.toLowerCase().replace(/\s+/g, '-')"
      >
        <h2 class="category-title">{{ category.name }}</h2>
        <div class="cards-grid">
          <a
              v-for="link in category.links"
              :href="link.url"
              target="_blank"
              class="card"
          >
            <div class="top-row">
              <div class="icon-wrapper">
                <img
                    :src="link.icon"
                    :alt="link.name + ' icon'"
                    class="icon-img"
                >
              </div>
              <span class="name">{{ link.name }}</span>
            </div>
            <p class="desc">{{ link.desc }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.layout-container {
  display: flex;
  gap: 1rem; /* 增加容器间距 */
  padding-left: 240px; /* 减少左侧间距 */
}

.side-nav {
  position: fixed;
  left: 1.5rem; /* 向右微调 */
  top: 6rem; /* 根据实际 header 高度调整 */
  width: 200px;
  background: var(--vp-c-bg);
  padding: 0.5rem 0;
  z-index: 100;
  /* 移除边框和阴影 */
  border: none;
  box-shadow: none;
  /* 添加右侧分割线 */
  border-right: 1px solid var(--vp-c-divider);
  height: calc(100vh - 100px); /* 动态高度 */
  overflow-y: auto; /* 允许滚动 */
  /* 隐藏所有浏览器滚动条 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.nav-header {
  font-size: 0.96rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: transform 0.2s;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

.nav-list li {
  padding: 0.6rem 1.2rem;
  margin: 0.25rem 0;
  border-radius: 6px;
  transition: all 0.2s;
  position: relative;
}


.nav-list li:hover {
  background: var(--vp-c-default-soft);
}

.nav-list li.active {
  position: relative;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  font-weight: 500;
}

.nav-list li.active::before {
  content: '';
  position: absolute;
  right: -1px; /* 对齐分割线 */
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 40%;
  background: var(--vp-c-brand);
}

.content-container {
  flex: 1;
  padding: 2rem 2rem 4rem 3rem; /* 增加左侧内边距 */
  max-width: 1440px; /* 限制最大宽度 */
  margin: 0 auto; /* 居中显示 */
}

.category {
  scroll-margin-top: 100px; /* 防止标题被导航遮挡 */
  margin-bottom: 2rem;
}

.category-title {
  color: var(--vp-c-text-1);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(var(--vp-c-black), 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  color: inherit;
  min-height: 100px;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.top-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.icon-wrapper {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 图片图标样式 */
.icon-img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--vp-c-text-1);
  line-height: 1.1;
}

.desc {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 新增移动端样式 */
@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
    padding-left: 0;
    gap: 0;
  }

  .side-nav {
    position: static;
    width: 100%;
    height: auto;
    border-right: none;
    padding: 0.5rem 1rem;
    background: var(--vp-c-bg-soft);
    border-bottom: 1px solid var(--vp-c-divider);
  }

  .nav-header {
    display: none;
  }

  .nav-list {
    display: flex;
    overflow-x: auto;
    padding: 0.5rem 0;
    -webkit-overflow-scrolling: touch;
  }

  .nav-list li {
    flex-shrink: 0;
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
    font-size: 0.9rem;
  }

  .nav-list li.active::before {
    content: none;
  }

  .nav-list li.active {
    background: var(--vp-c-brand-soft);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .content-container {
    padding: 1rem;
  }

  .category-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .card {
    min-height: auto;
    padding: 0.8rem;
  }

  .top-row {
    gap: 0.75rem;
  }

  .icon-wrapper {
    width: 28px;
    height: 28px;
  }

  .icon {
    font-size: 16px;
  }

  .name {
    font-size: 0.95rem;
  }

  .desc {
    font-size: 0.8rem;
  }
}

/* 优化移动端滚动条隐藏 */
@media (max-width: 768px) {
  .nav-list::-webkit-scrollbar {
    display: none;
  }
}

</style>