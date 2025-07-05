<script setup lang="ts">
const navMenu = [
  {
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'How to join',
    url: '/how-to-join',
  },
  {
    id: 3,
    name: 'Contact us',
    url: '/contact-us',
  },
]
</script>

<template>
  <header class="flex items-center justify-between">
    <router-link
      to="/"
      class="flex items-center logo-container">
      <img
        src="@/assets/logo.svg"
        alt="Logo"
        width="40"
        height="40" />
      <h1 class="app-logo">VINADAO</h1>
    </router-link>

    <nav>
      <ul class="flex">
        <li
          :key="id"
          v-for="{ id, name, url } in navMenu">
          <router-link :to="url">{{ name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.logo-container {
  column-gap: 12px;

  .app-logo {
    font-size: 20px;
    white-space: pre;
    line-height: 22px;
    letter-spacing: 5px;
  }
}

header {
  padding: 24px 64px;
  z-index: 9999;
  backdrop-filter: blur(50px);
  background-color: rgba(24, 22, 22, 0.15);

  nav {
    ul {
      column-gap: 64px;
    }

    li {
      list-style: none;
      font-size: 16px;
      line-height: 23.2px;
      letter-spacing: -0.08px;
    }

    a {
      text-decoration: none;

      &:-webkit-any-link {
        color: white;
      }
    }
  }
}
</style>
