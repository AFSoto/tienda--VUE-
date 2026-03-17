<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <!-- Aquí irá el Header -->

    <main>
      <RouterView />  <!-- Aquí se renderizan las vistas hijas -->
    </main>

    <!-- Aquí irá el Footer -->
  </div>
</template>
```

---

## ¿Para qué sirve MainLayout.vue?

Piénsalo así — sin layout:
```
/ → HomeView
/shop → ShopView
/cart → CartView
```

Cada vista tendría que incluir su propio Header y Footer. Si cambias el Header, lo cambias en 6 archivos.

Con layout:
```
MainLayout
├── AppHeader   ← una sola vez
├── RouterView  ← aquí cambia el contenido según la ruta
└── AppFooter   ← una sola vez
