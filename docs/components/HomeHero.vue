<template>
  <div class="hero" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="hero-overlay">
      <slot></slot>
      <div class="hitokoto-container">
        <div class="hitokoto-text">{{ hitokoto }}</div>
        <div class="hitokoto-author">{{ hitokotoAuthor }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const hitokoto = ref('Loading')
const hitokotoAuthor = ref('')
const bgImage = ref('')

// 随机选择背景图片
const getRandomImage = () => {
  // 使用提供的接口
  return 'https://t.alcy.cc/ycy'
}

onMounted(() => {
  // 设置随机背景图片
  const randomImg = getRandomImage()
  bgImage.value = randomImg
  console.log('Selected background image:', randomImg)

  // 基础实现，避免复杂问题
  hitokoto.value = 'Loading...'

  // 使用setTimeout延迟加载，避免阻塞
  setTimeout(() => {
    fetch('https://v1.hitokoto.cn')
      .then(response => response.json())
      .then(data => {
        hitokoto.value = data.hitokoto
        // 设置作者，优先使用 from_who，如果为 null 则使用 from
        const author = data.from_who || data.from
        hitokotoAuthor.value = author ? `—— ${author}` : ''
      })
      .catch(() => {
        hitokoto.value = 'Loading error'
        hitokotoAuthor.value = ''
      })
  }, 1000)
})
</script>

<style>
.hero {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hitokoto-container {
  text-align: center;
  color: white;
  margin-top: 20px;
}

.hitokoto-text {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.hitokoto-author {
  font-size: 1rem;
  opacity: 0.8;
  font-style: italic;
}
</style>