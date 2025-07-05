<script setup lang="ts">
interface NavItem {
  id: number
  name: string
  url: string
}

interface SocialItem extends NavItem {
  icon: string
}

const navMenu: NavItem[] = [
  {
    id: 1,
    name: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    id: 2,
    name: 'Terms and Conditions',
    url: '/terms-and-conditions',
  },
  {
    id: 3,
    name: 'Disclaimer',
    url: '/disclaimer',
  },
]

const navMenuSocial: SocialItem[] = [
  {
    id: 4,
    url: '#',
    name: 'Instagram',
    icon: 'instagram',
  },
  {
    id: 5,
    url: '#',
    name: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    id: 6,
    url: '#',
    name: 'Twitter',
    icon: 'icon-x',
  },
  {
    id: 7,
    url: '#',
    name: 'Tiktok',
    icon: 'tiktok',
  },
]

const icons = import.meta.glob('@/assets/*.svg', { eager: true, as: 'url' })

const getIcon = (icon: string) => {
  return icons[`/src/assets/${icon}.svg`]
}
</script>

<template>
  <footer class="flex items-center justify-between">
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

    <nav>
      <ul class="flex">
        <li
          :key="id"
          v-for="{ id, url, name, icon } in navMenuSocial">
          <router-link :to="url">
            <img
              :src="getIcon(icon)"
              :alt="name" />
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>
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

footer {
  padding: 64px;
  background-color: var(--footer-color-background);

  nav {
    ul {
      column-gap: 24px;
    }

    li {
      list-style: none;
      font-size: 14px;
      line-height: 14px;
    }
  }
}
</style>
