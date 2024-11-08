import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
    
=======
>>>>>>> 23e5a0a (test1)
=======
>>>>>>> 511ab95 (first commit)
  }

  return { count, doubleCount, increment }
})
