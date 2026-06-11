<template>
  <div class="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-ocean-900/80 via-ocean-800/60 to-ocean-900/80"
    ></div>
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">{{ title }}</h1>
      <p class="text-lg md:text-xl text-ocean-100 max-w-2xl mx-auto drop-shadow-md">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  backgroundImage: String,
})
</script>
