<template>
  <nav
    class="bg-slate-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-ocean-600/50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center gap-2">
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
            <span class="font-bold text-xl text-slate-50"
              >SeaWorld <span class="text-ocean-300">Ancol</span></span
            >
          </router-link>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-sm font-medium transition-colors duration-200"
            :class="
              isActive(item.path)
                ? 'text-ocean-300 border-b-2 border-ocean-300 pb-1'
                : 'text-slate-300 hover:text-ocean-300'
            "
          >
            {{ item.name }}
          </router-link>
          <router-link
            to="/tiket"
            class="bg-ocean-400 text-slate-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-ocean-300 transition-colors shadow-md hover:shadow-lg"
          >
            Beli Tiket
          </router-link>
        </div>

        <div class="md:hidden flex items-center">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="text-slate-300 hover:text-ocean-300 focus:outline-none"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-slate-800 border-t border-ocean-600/50">
      <div class="px-4 pt-2 pb-4 space-y-1">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          @click="isMenuOpen = false"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="
            isActive(item.path)
              ? 'text-ocean-300 bg-ocean-900/30'
              : 'text-slate-300 hover:text-ocean-300 hover:bg-ocean-900/20'
          "
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()

const menuItems = [
  { name: 'Beranda', path: '/' },
  { name: 'Wahana', path: '/wahana' },
  { name: 'Aktivitas', path: '/aktivitas' },
  { name: 'Fasilitas', path: '/fasilitas' },
  { name: 'Tiket & Info', path: '/tiket' },
]

const isActive = (path) => route.path === path
</script>
