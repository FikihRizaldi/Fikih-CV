<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const skills = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }

  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-cubic'
  })
})
</script>

<template>
  <section id="skill" class="py-20 bg-gradient-to-b from-white to-gray-100">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 hover:scale-[1.02] transform"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 120"
        >
          <div class="flex justify-center items-center h-16 mb-4">
            <img
              v-if="skill.iconUrl"
              :src="skill.iconUrl"
              :alt="skill.name"
              class="max-w-[40px] h-auto object-contain"
            />
          </div>
          <h3 class="text-base font-semibold text-gray-800 text-center">{{ skill.name }}</h3>
          <p class="text-sm text-gray-500 text-center">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
