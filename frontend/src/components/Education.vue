<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/education') // GANTI di sini
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section id="pendidikan" class="py-20 bg-gradient-to-b from-white to-slate-100">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative mt-12">
        <!-- Garis tengah -->
        <div class="absolute h-full border-l-2 border-indigo-300 left-1/2 transform -translate-x-1/2"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-12 flex justify-between items-center w-full"
        >
          <!-- Kiri -->
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="text-indigo-600 font-semibold">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-slate-800">{{ edu.institution }}</h3>
              <p class="text-slate-500">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-5 h-5 bg-indigo-600 rounded-full z-10 ring-4 ring-white"></div>
            </div>
          </div>

          <!-- Kanan -->
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-5 h-5 bg-indigo-600 rounded-full z-10 ring-4 ring-white"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <p class="text-indigo-600 font-semibold">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-slate-800">{{ edu.institution }}</h3>
              <p class="text-slate-500">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
