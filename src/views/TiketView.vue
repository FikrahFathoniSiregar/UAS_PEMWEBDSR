<template>
  <div>
    <HeroSection
      title="Informasi & Tiket"
      subtitle="Rencanakan kunjungan Anda dengan informasi lengkap berikut"
      backgroundImage="https://image.qwenlm.ai/public_source/844fbee1-d727-415d-9cfc-6817fc6fe546/1090d805e-5d50-48f3-b853-928723c1c530.png"
    />

    <section class="bg-slate-900 mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="bg-slate-800 p-8 rounded-2xl shadow-sm border border-ocean-600/30 text-center">
          <div
            class="w-14 h-14 bg-ocean-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-ocean-300"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-100 mb-2">Jam Operasional</h3>
          <p class="text-slate-400 text-sm">Senin - Minggu</p>
          <p class="text-ocean-300 font-bold text-lg">10:00 - 20:00 WIB</p>
        </div>
        <div class="bg-slate-800 p-8 rounded-2xl shadow-sm border border-ocean-600/30 text-center">
          <div
            class="w-14 h-14 bg-ocean-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-ocean-300"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-100 mb-2">Lokasi</h3>
          <p class="text-slate-400 text-sm">Jl. Lodan Timur No.7</p>
          <p class="text-slate-400 text-sm">Ancol, Jakarta Utara</p>
        </div>
        <div class="bg-slate-800 p-8 rounded-2xl shadow-sm border border-ocean-600/30 text-center">
          <div
            class="w-14 h-14 bg-ocean-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-ocean-300"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-100 mb-2">Hubungi Kami</h3>
          <p class="text-ocean-300 font-bold text-lg">(021) 640-9006</p>
          <p class="text-slate-400 text-sm mt-1">info@seaworld-ancol.id</p>
        </div>
      </div>

      <div
        class="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden border border-ocean-600/30"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-ocean-500/10 rounded-full -mr-32 -mt-32 opacity-50"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-48 h-48 bg-ocean-400/5 rounded-full -ml-24 -mb-24 opacity-30"
        ></div>

        <div class="relative z-10">
          <div class="text-center mb-10">
            <span class="text-ocean-300 font-semibold text-sm uppercase tracking-wider"
              >Harga Tiket Masuk</span
            >
            <h2 class="text-3xl md:text-4xl font-bold mt-2">Pilih Paket Kunjungan Anda</h2>
            <p class="text-slate-300 mt-4 max-w-2xl mx-auto">
              Harga dapat berubah sewaktu-waktu. Silakan cek website resmi atau hubungi kami untuk
              informasi terbaru dan promo spesial.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div
              class="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-ocean-400/30"
            >
              <h3 class="text-xl font-bold mb-2">Tiket Dewasa</h3>
              <p class="text-slate-300 text-sm mb-4">Usia 12 tahun ke atas</p>
              <div class="text-3xl font-bold mb-4 text-ocean-300">Rp 125.000</div>
              <ul class="space-y-2 text-sm text-slate-300">
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-ocean-400"
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
                  Akses semua wahana
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-ocean-400"
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
                  Pertunjukan Feeding Show
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-ocean-400"
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
                  Akses Antasena Tunnel
                </li>
              </ul>
            </div>
            <div
              class="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-ocean-400/30"
            >
              <h3 class="text-xl font-bold mb-2">Tiket Anak</h3>
              <p class="text-slate-300 text-sm mb-4">Usia 3 - 11 tahun</p>
              <div class="text-3xl font-bold mb-4 text-ocean-300">Rp 95.000</div>
              <ul class="space-y-2 text-sm text-slate-300">
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-ocean-400"
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
                  Akses semua wahana
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-ocean-400"
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
                  Pertunjukan Feeding Show
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-ocean-400"
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
                  Akses Antasena Tunnel
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center mt-10">
            <button
              class="bg-white text-ocean-900 px-8 py-3 rounded-full font-bold hover:bg-ocean-100 transition-colors shadow-lg"
            >
              Pesan Tiket Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
</script>
