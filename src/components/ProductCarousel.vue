<template>
  <div class="overflow-x-auto no-scrollbar">
    <div class="flex space-x-0">
      <div
          v-for="(product, index) in products"
          :key="index"
          class="min-w-10 flex-shrink-0 text-center"
      >
        <div :class="['w-36 m-2 overflow-hidden rounded shadow', aspectClass]">
          <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-full object-cover object-center"
          />
        </div>
        <p class="mt-2 text-sm text-gray-700">{{ product.progress }}% read</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  source: String
})

const products = ref([])

const aspectClass = computed(() => {
  return props.source === 'podcasts' ? 'aspect-[1]' : 'aspect-[0.63]'
})

onMounted(async () => {
  const response = await fetch("src/data/" + props.source + ".json")
  products.value = await response.json()
})
</script>