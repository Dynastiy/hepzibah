<template>
  <div>
    <AppHeader :menu="menu" />
    <div class="pb-6">
        <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/navigation/Footer.vue'
import AppHeader from '@/components/navigation/Header.vue'
export default {
  components: {
    AppFooter,
    AppHeader
  },
  data() {
    return {
      menu: [
        {
          title: 'home',
        icon: 'fluent:home-20-filled'
        },
        {
          title: 'about',
          icon: 'mdi:about'
        }
    ]
    }
  }
}
</script>

<style></style>
