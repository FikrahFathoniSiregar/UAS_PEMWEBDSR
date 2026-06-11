<template>
  <div>
    <HeroSection
      title="Aktivitas & Pertunjukan"
      subtitle="Saksikan aksi spektakuler dan ikuti pengalaman edukatif yang tak terlupakan"
      :backgroundImage="aktivitasImg"
    />

    <section class="bg-slate-900 mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div
        class="bg-slate-800 rounded-3xl shadow-lg overflow-hidden mb-16 border border-ocean-600/30"
      >
        <div class="grid md:grid-cols-2">
          <div class="relative h-64 md:h-auto">
            <img
              :src="feedingShowImg"
              alt="Feeding Show"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div class="p-8 md:p-12 flex flex-col justify-center">
            <span class="text-ocean-300 font-semibold text-sm uppercase tracking-wider mb-2"
              >Highlight Utama</span
            >
            <h2 class="text-3xl font-bold text-slate-100 mb-4">Feeding Show</h2>
            <p class="text-slate-300 leading-relaxed mb-6">
              Layanan hiburan ikonik berupa pertunjukan pemberian makan ikan secara langsung (live
              feeding) oleh penyelam profesional di dalam akuarium raksasa. Atraksi ini dijadwalkan
              setiap hari untuk beberapa jenis biota.
            </p>
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-slate-500">
                <svg
                  class="w-5 h-5 text-ocean-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Gerombolan ikan di akuarium utama</span>
              </div>
              <div class="flex items-center gap-3 text-slate-500">
                <svg
                  class="w-5 h-5 text-ocean-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Hiu predator yang gagah</span>
              </div>
              <div class="flex items-center gap-3 text-slate-500">
                <svg
                  class="w-5 h-5 text-ocean-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Piranha dan Arapaima</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mb-12">
        <span class="text-ocean-300 font-semibold text-sm uppercase tracking-wider"
          >Layanan Edukasi</span
        >
        <h2 class="text-3xl font-bold text-slate-100 mt-2">Pengalaman Interaktif</h2>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(activity, index) in activities"
          :key="index"
          class="bg-slate-800 p-8 rounded-2xl border border-ocean-600/30"
        >
          <div
            class="w-12 h-12 bg-ocean-500/20 rounded-xl flex items-center justify-center mb-4 text-ocean-300"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              v-html="activity.icon"
            ></svg>
          </div>
          <h3 class="text-xl font-bold text-slate-100 mb-2">{{ activity.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed">{{ activity.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import aktivitasImg from '../assets/aktivitas.jpg'
import feedingShowImg from '../assets/feeding_show.jpeg'

const activities = ref([
  {
    title: 'Kolam Sentuh (Touchpool)',
    description:
      'Berinteraksi langsung dan menyentuh bintang laut atau penyu secara aman. Pengalaman tak terlupakan bagi anak-anak dan dewasa.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'/>",
  },
  {
    title: 'Jellyfish Sphere',
    description:
      'Saksikan ubur-ubur bercahaya yang menari anggun di bawah lampu khusus, menciptakan suasana magis yang menenangkan.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'/>",
  },
  {
    title: 'Magic Aquarium',
    description:
      'Wahana interaktif untuk mewarnai biota secara digital. Gambar Anda akan hidup dan berenang di akuarium virtual.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'/>",
  },
  {
    title: 'Museum Misteri Laut Dalam',
    description:
      'Kunjungi museum yang berisi biota yang diawetkan untuk mempelajari keanekaragaman hayati laut dalam secara ilmiah.',
    icon: "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'/>",
  },
])
</script>
