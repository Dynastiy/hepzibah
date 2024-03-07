<template>
  <div class="bg-gray-100 sticky top-0 shadow-sm">
    <div class="container">
      <div class="flex justify-between items-center py-6">
        <span role="button" @click="$router.push('/')">
          <img src="@/assets/img/brandLogo.svg" class="w-28 lg:block md:block hidden" alt="" />
          <img src="@/assets/img/brandIcon.svg" class="w-8 lg:hidden md:hidden block" alt="" />
        </span>
        <div class="flex gap-4 items-center">
          <ul class="flex gap-4 items-center">
            <li v-for="(item, idx) in menu" :key="idx">
              <router-link :to="'/' + item.title" class="block uppercase text-sm font-medium">
                <!-- <span class="md:hidden lg:hidden block text-[24px]">
                  <Icon :icon="item.icon" />
                </span> -->
                <span class="">{{ $t(item.title) }}</span>
              </router-link>
            </li>
          </ul>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link flex items-center gap-2 text-dark">
              <span class="flex items-center">
                <country-flag :country="selected_flag" size="medium" />
              <span class="hidden md:block lg:block">{{
                $t('selected_language', { language: selected_language })
              }}</span>
              </span>
              <Icon icon="radix-icons:caret-down" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  class="capitalize text-[16px]"
                  v-for="(lang, i) in languageArray"
                  :key="`lang${i}`"
                  :value="lang"
                >
                  <span
                    :role="lang === selected ? '' : 'button'"
                    :class="{ active: lang === selected }"
                    @click="changeLang(lang)"
                    >{{ $t(lang) }}</span
                  >
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { languages } from '@/plugin/i18n'
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      languageArray: languages,
      languagesMap: {
        english: 'english',
        french: 'french',
        spanish: 'spanish'
      },
      shortCodes: {
        english: 'US',
        french: 'FR',
        spanish: 'ES'
      }
    }
  },

  methods: {
    changeLang(value) {
      this.$store.dispatch('home/changeLocale', value)
      this.$i18n.locale = this.$store.state.home.locale
    }
  },

  computed: {
    lang: {
      get: function () {
        return this.$store.state.home.locale
      },
      set: function (newLocale) {
        this.$store.dispatch('home/changeLocale', newLocale)
      }
    },
    selected_language() {
      return this.$t(this.languagesMap[this.lang])
    },
    selected() {
      return this.lang
    },
    selected_flag() {
      return this.shortCodes[this.lang]
    }
  },
  created() {
    this.$i18n.locale = this.$store.state.home.locale
  }
}
</script>

<style>
.router-link-exact-active span {
  color: var(---secondary);
  font-weight: 600 !important;
}

.normal-flag[data-v-60be6971] {
  margin: 0 !important;
}
</style>
