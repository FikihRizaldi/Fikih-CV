<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

// URL fallback jika gambar tidak ditemukan atau kosong
const fallbackImage = 'https://via.placeholder.com/400x200?text=Gambar+Tidak+Tersedia'

// State untuk menyimpan proyek
const projects = ref([])

// Fungsi untuk menentukan apakah gambar valid URL
function isValidImageUrl(url) {
  return typeof url === 'string' && url.startsWith('http')
}

onMounted(async () => {
  try {
    const response = await axios.get('/api/projects') // gunakan path relatif agar berjalan di Vercel
    projects.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error)
  }
})
</script>

<template>
  <section id="proyek" class="py-20 bg-gradient-to-b from-white to-slate-100">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid md:grid-cols-2 gap-12 mt-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden transform hover:-translate-y-1"
        >
          <!-- Gambar Proyek -->
          <img
            :src="isValidImageUrl(project.image) ? project.image : fallbackImage"
            :alt="`Gambar proyek ${project.title}`"
            class="w-full h-56 object-cover transition duration-300 hover:scale-105"
          />

          <!-- Konten Proyek -->
          <div class="p-6">
            <h3 class="text-2xl font-bold text-slate-800 mb-2">
              {{ project.title }}
            </h3>

            <p class="text-slate-600 mb-4 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tag Teknologi -->
            <div class="mb-4 flex flex-wrap">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="bg-indigo-100 text-indigo-700 text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Link Proyek -->
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-indigo-600 text-sm font-semibold hover:underline"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
