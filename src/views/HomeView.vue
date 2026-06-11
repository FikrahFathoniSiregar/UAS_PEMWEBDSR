<template>
  <div>
    <HeroSection
      title="Selamat Datang di SeaWorld Ancol"
      subtitle="Eksplorasi keajaiban dunia bawah laut bersama keluarga di jantung ibu kota"
      backgroundImage="https://image.qwenlm.ai/public_source/844fbee1-d727-415d-9cfc-6817fc6fe546/1090d805e-5d50-48f3-b853-928723c1c530.png"
    />

    <section class="bg-slate-900 mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-ocean-300 font-semibold text-sm uppercase tracking-wider"
            >Tentang Kami</span
          >
          <h2 class="text-3xl md:text-4xl font-bold text-slate-100 mt-2 mb-6">
            Destinasi Wisata Edukasi Bawah Laut Terlengkap
          </h2>
          <p class="text-slate-300 leading-relaxed mb-4">
            Sea World Indonesia adalah destinasi wisata edukasi dan rekreasi bawah laut yang
            menawarkan ragam koleksi biota air tawar serta laut melalui berbagai akuarium modern di
            kawasan Ancol, Jakarta Utara.
          </p>
          <p class="text-slate-300 leading-relaxed">
            Tempat ini menyediakan paket petualangan lengkap mulai dari wahana terowongan kaca,
            layanan pertunjukan interaktif, hingga fasilitas penunjang yang sangat nyaman bagi para
            pengunjung.
          </p>
        </div>
        <div class="relative">
          <img
            src="/src/assets/terowongan.jpg"
            alt="Shark Aquarium"
            class="rounded-2xl shadow-xl w-full object-cover h-80"
          />
          <div
            class="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl shadow-lg hidden md:block border border-ocean-600/30"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-ocean-500 rounded-full flex items-center justify-center text-slate-900 font-bold"
              >
                80m
              </div>
              <div>
                <p class="text-xs text-slate-400">Panjang Terowongan</p>
                <p class="font-bold text-slate-100">Antasena Tunnel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-900 py-16 border-y border-ocean-600/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-ocean-300 font-semibold text-sm uppercase tracking-wider"
            >Keunggulan Kami</span
          >
          <h2 class="text-3xl font-bold text-slate-100 mt-2">Mengapa Memilih SeaWorld Ancol?</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'/>"
            title="Eksplorasi Mendalam"
            description="Nikmati suasana petualangan bawah air dengan replika ekosistem perairan yang kaya akan keanekaragaman hayati."
          />
          <FeatureCard
            icon="<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'/>"
            title="Edukasi Interaktif"
            description="Penataan area akuarium yang rapi serta suasana edukatif yang menyenangkan untuk liburan keluarga atau rombongan sekolah."
          />
          <FeatureCard
            icon="<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'/>"
            title="Konservasi Laut"
            description="Pelajari pentingnya menjaga kelestarian laut secara interaktif sambil menikmati keindahan panorama samudera."
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import FeatureCard from '../components/FeatureCard.vue'
</script>
