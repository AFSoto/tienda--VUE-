import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { products } from '@/data/products'

export const useProductStore = defineStore('products', () => {

  // --- STATE ---
  const allProducts    = ref(products)
  const activeCategory = ref('todos')
  const searchQuery    = ref('')
  const sortBy         = ref('default') // 'default' | 'price-asc' | 'price-desc'

  // --- GETTERS ---
  const filteredProducts = computed(() => {
    let result = [...allProducts.value]

    // Filtrar por categoría
    if (activeCategory.value !== 'todos') {
      result = result.filter(p => p.category === activeCategory.value)
    }

    // Filtrar por búsqueda
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      result = result.filter(p => p.name.toLowerCase().includes(q))
    }

    // Ordenar
    if (sortBy.value === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy.value === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  })

  const getProductById = (id) => {
    return allProducts.value.find(p => p.id === Number(id))
  }

  // --- ACTIONS ---
  const setCategory = (category) => { activeCategory.value = category }
  const setSearch   = (query)    => { searchQuery.value = query }
  const setSort     = (sort)     => { sortBy.value = sort }

  return {
    allProducts,
    activeCategory,
    searchQuery,
    sortBy,
    filteredProducts,
    getProductById,
    setCategory,
    setSearch,
    setSort,
  }
})
