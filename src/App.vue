<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    <Navbar />

    <main class="flex-grow">
      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
