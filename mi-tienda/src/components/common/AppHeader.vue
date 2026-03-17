<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const navLinks = [
  { name: 'Home',    to: '/' },
  { name: 'Shop',    to: '/shop' },
  { name: 'Contact', to: '/contact' },
]

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- LOGO -->
        <RouterLink to="/" class="font-serif text-2xl font-bold tracking-widest uppercase">
          Luxe
        </RouterLink>

        <!-- NAV DESKTOP -->
        <nav class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium tracking-wide uppercase text-gray-600 hover:text-black transition-colors"
            :class="{ 'text-black border-b-2 border-black': route.path === link.to }"
          >
            {{ link.name }}
          </RouterLink>
        </nav>

        <!-- ICONOS DERECHA -->
        <div class="flex items-center gap-4">

          <!-- Icono buscar -->
          <button class="text-gray-600 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
            </svg>
          </button>

          <!-- Icono carrito -->
          <RouterLink to="/cart" class="relative text-gray-600 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <!-- Badge contador del carrito -->
            <span class="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </RouterLink>

          <!-- Hamburger mobile -->
          <button
            class="md:hidden text-gray-600 hover:text-black transition-colors"
            @click="toggleMenu"
          >
            <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

        </div>
      </div>
    </div>

    <!-- NAV MOBILE -->
    <div v-if="menuOpen" class="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="text-sm font-medium uppercase tracking-wide text-gray-600 hover:text-black transition-colors"
        @click="menuOpen = false"
      >
        {{ link.name }}
      </RouterLink>
    </div>

  </header>
</template>
