<template>
  <footer class="bg-black text-white mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- Columna 1 - Marca -->
        <div>
          <h3 class="font-serif text-2xl font-bold tracking-widest uppercase mb-4">Luxe</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Moda consciente y atemporal. Prendas diseñadas para durar más que las tendencias.
          </p>
        </div>

        <!-- Columna 2 - Links -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-300">Navegación</h4>
          <ul class="flex flex-col gap-2">
            <li><RouterLink to="/"        class="text-gray-400 hover:text-white text-sm transition-colors">Home</RouterLink></li>
            <li><RouterLink to="/shop"    class="text-gray-400 hover:text-white text-sm transition-colors">Shop</RouterLink></li>
            <li><RouterLink to="/contact" class="text-gray-400 hover:text-white text-sm transition-colors">Contacto</RouterLink></li>
          </ul>
        </div>

        <!-- Columna 3 - Contacto -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-300">Contacto</h4>
          <ul class="flex flex-col gap-2 text-gray-400 text-sm">
            <li>hola@luxe.com</li>
            <li>+57 300 000 0000</li>
            <li>Medellín, Colombia</li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p class="text-gray-500 text-xs">© 2026 Luxe. Todos los derechos reservados.</p>
        <p class="text-gray-500 text-xs">Hecho con ♥ en Medellín</p>
      </div>

    </div>
  </footer>
</template>
