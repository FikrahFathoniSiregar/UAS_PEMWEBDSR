<template>
  <div class="bg-slate-800 p-6 rounded-2xl shadow-sm border border-ocean-600/30 card-hover">
    <div
      class="w-12 h-12 bg-ocean-900/30 rounded-xl flex items-center justify-center mb-4 text-ocean-300"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        v-html="icon"
      ></svg>
    </div>
    <h3 class="text-lg font-bold text-slate-100 mb-2">{{ title }}</h3>
    <p class="text-slate-400 text-sm leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  description: String,
})
</script>
