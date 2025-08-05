import ProductCarousel from '../components/ProductCarousel.vue'

<template>
  <section>
    <h2 class="library-heading-item text-xl font-semibold ml-6 mb-0 mt-4">eBooks</h2>
    <ProductCarousel source="ebooks" />
  </section>
  <section>
    <h2 class="library-heading-item text-xl font-semibold ml-6 mb-0 mt-4">Magazines</h2>
    <ProductCarousel source="magazines" />
  </section>
  <section>
    <h2 class="library-heading-item text-xl font-semibold ml-6 mb-0 mt-4">Podcasts</h2>
    <ProductCarousel source="podcasts" />
  </section>
</template>

<script setup>
import ProductCarousel from '@/components/ProductCarousel.vue'
</script>