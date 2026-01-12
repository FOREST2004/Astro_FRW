<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
  console.log(`[Vue - CounterVue] Count: ${count.value}`);
};
</script>

<template>
  <div
    class="p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg text-white"
  >
    <h3 class="text-lg font-bold">Counter - Vue 3</h3>

    <div class="text-center mb-4">
      <div class="bg-white/20 p-4 rounded-lg inline-block min-w-[120px]">
        <span class="block text-4xl font-bold">{{ count }}</span>
        <span class="text-xs uppercase tracking-wider opacity-80">Count</span>
      </div>
    </div>

    <button
      @click="increment"
      class="w-full bg-white text-green-600 font-bold py-3 px-4 rounded-lg hover:bg-green-50 active:scale-95 transition-transform"
    >
      Click me
    </button>
  </div>
</template>
