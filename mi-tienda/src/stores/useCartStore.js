import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {

  // --- STATE ---
  const items = ref([]) // [{ product, size, quantity }]

  // --- GETTERS ---
  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const subtotal = computed(() =>
    items.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  )

  const isEmpty = computed(() => items.value.length === 0)

  // --- ACTIONS ---
  const addItem = (product, size, quantity = 1) => {
    // Si ya existe el mismo producto con la misma talla, suma cantidad
    const existing = items.value.find(
      i => i.product.id === product.id && i.size === size
    )
    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({ product, size, quantity })
    }
  }

  const removeItem = (productId, size) => {
    items.value = items.value.filter(
      i => !(i.product.id === productId && i.size === size)
    )
  }

  const updateQuantity = (productId, size, quantity) => {
    const item = items.value.find(
      i => i.product.id === productId && i.size === size
    )
    if (item) {
      if (quantity <= 0) {
        removeItem(productId, size)
      } else {
        item.quantity = quantity
      }
    }
  }

  const clearCart = () => { items.value = [] }

  return {
    items,
    totalItems,
    subtotal,
    isEmpty,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }
})
