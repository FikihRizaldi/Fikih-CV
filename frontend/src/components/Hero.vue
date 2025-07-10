<script setup>
import { onMounted } from 'vue'
import Typed from 'typed.js'

onMounted(() => {
  new Typed('#typed-name', {
    strings: ['Muhamad Fikih Rizaldi'],
    typeSpeed: 80,
    startDelay: 300,
    showCursor: true,
    cursorChar: '|'
  })
})
</script>



<template>
  <section
    id="profil"
    class="w-full px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-16 bg-gradient-to-br from-indigo-100 via-white to-purple-100"
  >
    <!-- LEFT: Text -->
    <div class="md:w-1/2 text-center md:text-left px-6 md:px-16">
      <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
        Halo, Saya <span id="typed-name" class="text-indigo-600"></span>
      </h1>

      <p class="text-lg sm:text-xl text-gray-600 mb-8 animate-fade-in" style="animation-delay: 0.5s">
        Mahasiswa Teknik Informatika yang antusias membangun aplikasi web modern dengan teknologi
        terbaik.
      </p>

      <a
        href="#kontak"
        class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
      >
        Hubungi Saya →
      </a>
    </div>

    <!-- RIGHT: Image -->
    <div class="md:w-1/2 flex justify-center animate-fade-in" style="animation-delay: 0.6s">
      <img
        src="https://avatars.githubusercontent.com/u/162108695?v=4"
        alt="Foto Profil"
        class="w-72 h-72 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl ring-4 ring-indigo-300 transition duration-300"
      />
    </div>
  </section>
</template>
