import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
    count.value++
    count.value++
    count.value++
    count.value++
    count.value++
    count.value++
    count.value++
<<<<<<< HEAD
    count.value++
    count.value++
    
=======
>>>>>>> 23e5a0a (test1)
  }

  return { count, doubleCount, increment }
})
