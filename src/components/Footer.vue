<template>
  <footer class="bg-slate-900 text-slate-100 pt-16 pb-8 border-t border-ocean-600/50">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <svg
              class="w-8 h-8 text-ocean-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="font-bold text-xl">SeaWorld Ancol</span>
          </div>
          <p class="text-ocean-200 text-sm leading-relaxed max-w-md">
            Destinasi wisata edukasi dan rekreasi bawah laut terbaik di Jakarta. Nikmati keajaiban
            dunia bawah laut bersama keluarga Anda.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4 text-ocean-300">Navigasi</h3>
          <ul class="space-y-2 text-sm text-ocean-200">
            <li>
              <router-link to="/" class="hover:text-white transition-colors">Beranda</router-link>
            </li>
            <li>
              <router-link to="/wahana" class="hover:text-white transition-colors"
                >Wahana</router-link
              >
            </li>
            <li>
              <router-link to="/aktivitas" class="hover:text-white transition-colors"
                >Aktivitas</router-link
              >
            </li>
            <li>
              <router-link to="/fasilitas" class="hover:text-white transition-colors"
                >Fasilitas</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4 text-ocean-300">Kontak</h3>
          <ul class="space-y-2 text-sm text-ocean-200">
            <li class="flex items-start gap-2">
              <svg
                class="w-5 h-5 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
              <span>Jl. Lodan Timur No.7, Ancol, Jakarta Utara</span>
            </li>
            <li class="flex items-center gap-2">
              <svg
                class="w-5 h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>(6767) 857-7911</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="border-t border-ocean-600/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-sm text-ocean-300">&copy; 2024 SeaWorld Ancol. All rights reserved.</p>
        <div class="flex space-x-4">
          <a href="#" class="text-ocean-300 hover:text-ocean-200 transition-colors"
            ><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              /></svg
          ></a>
          <a href="#" class="text-ocean-400 hover:text-white transition-colors"
            ><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              /></svg
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>
