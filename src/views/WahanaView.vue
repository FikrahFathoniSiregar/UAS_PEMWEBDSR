<template>
  <div>
    <HeroSection
      title="Wahana Eksplorasi Utama"
      subtitle="Temukan keajaiban biota laut dan air tawar di berbagai akuarium modern kami"
      backgroundImage="https://image.qwenlm.ai/public_source/844fbee1-d727-415d-9cfc-6817fc6fe546/1a3b12aa5-17bd-4fbf-92e1-a00eddf8721a.png"
    />

    <section class="bg-slate-900 mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(wahana, index) in wahanaList"
          :key="index"
          class="bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-ocean-600/30 card-hover"
        >
          <div class="h-48 bg-ocean-900/40 flex items-center justify-center text-ocean-300">
            <svg
              class="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              v-html="wahana.icon"
            ></svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-100 mb-2">{{ wahana.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ wahana.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'

const wahanaList = ref([
  {
    title: 'Antasena Tunnel',
    description:
      'Terowongan kaca bawah air sepanjang 80 meter dengan eskalator berjalan yang membuat Anda serasa berjalan di dasar laut.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'/>",
  },
  {
    title: 'Main Aquarium',
    description:
      'Akuarium raksasa yang menampung jutaan liter air, menampilkan ekosistem laut yang megah dan beragam.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9'/>",
  },
  {
    title: 'Shark Aquarium',
    description:
      'Memamerkan berbagai jenis hiu seperti hiu sirip hitam dan hiu kepala martil dalam habitat yang luas.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M13 10V3L4 14h7v7l9-11h-7z'/>",
  },
  {
    title: 'Touchpool (Kolam Sentuh)',
    description:
      'Berinteraksi langsung dan menyentuh bintang laut atau penyu secara aman di area kolam sentuh yang interaktif.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'/>",
  },
  {
    title: 'Jellyfish Sphere',
    description:
      'Menampilkan ubur-ubur bercahaya yang menari di bawah lampu khusus, menciptakan suasana magis dan menenangkan.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'/>",
  },
  {
    title: 'Magic Aquarium',
    description:
      'Wahana interaktif untuk mewarnai biota laut secara digital dan melihat hasil warna Anda berenang di akuarium.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'/>",
  },
  {
    title: 'Museum Misteri Laut Dalam',
    description:
      'Museum yang berisi koleksi biota laut yang diawetkan, memberikan wawasan ilmiah tentang kehidupan laut dalam.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'/>",
  },
])
</script>
