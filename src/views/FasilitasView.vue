<template>
  <div>
    <HeroSection
      title="Fasilitas Lengkap"
      subtitle="Nikmati kenyamanan terbaik selama berkunjung ke SeaWorld Ancol"
      backgroundImage="https://image.qwenlm.ai/public_source/844fbee1-d727-415d-9cfc-6817fc6fe546/1f4dc3531-a204-41e8-8a8a-cf17cbac2f53.png"
    />

    <section class="bg-slate-900 mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Demi Kenyamanan Wisatawan</h2>
        <p class="text-slate-300">
          Area ini sudah dilengkapi dengan berbagai fasilitas penunjang yang sangat nyaman,
          memastikan pengalaman berkunjung Anda dan keluarga berjalan dengan lancar dan
          menyenangkan.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(facility, index) in facilities"
          :key="index"
          class="bg-slate-800 p-6 rounded-2xl shadow-sm border border-ocean-600/30 flex items-start gap-4 card-hover"
        >
          <div
            class="w-12 h-12 bg-ocean-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-ocean-300"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              v-html="facility.icon"
            ></svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-100 mb-1">{{ facility.title }}</h3>
            <p class="text-slate-400 text-sm">{{ facility.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'

const facilities = ref([
  {
    title: 'Toko Suvenir Resmi',
    description: 'Beli oleh-oleh bertema laut yang unik dan menarik untuk kenang-kenangan.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'/>",
  },
  {
    title: 'Area Kantin (Food Court)',
    description: 'Berbagai pilihan kuliner lezat dengan harga terjangkau untuk mengisi energi.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'/>",
  },
  {
    title: 'Mushola',
    description: 'Ruang ibadah yang bersih dan nyaman tersedia untuk pengunjung Muslim.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'/>",
  },
  {
    title: 'Ruang P3K',
    description: 'Fasilitas kesehatan darurat siap membantu jika terjadi keadaan tidak diinginkan.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'/>",
  },
  {
    title: 'Toilet Bersih',
    description: 'Fasilitas toilet yang terawat dan bersih tersebar di berbagai titik area.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'/>",
  },
  {
    title: 'Lokasi Strategis & Parkir',
    description: 'Dekat dengan area parkir kendaraan di dalam kawasan rekreasi Ancol yang luas.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'/>",
  },
])
</script>
