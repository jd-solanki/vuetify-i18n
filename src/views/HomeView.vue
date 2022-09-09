<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' })
import { useLocale } from 'vuetify';

const { current } = useLocale()

const changeLocale = (val: string) => {
  locale.value = val
  console.log('current.value :>> ', current.value);
}

// ====

const enableI18n = ref(true)
const hideTitleAndBadge = ref(false)
const badgeContent = 'Pages'
const badgeClass = 'bg-error'

const dynamicI18nProps = computed(() => (key: string, tag = 'span') => {
  if (enableI18n.value) {
    return {
      keypath: key,
      tag,
      scope: 'global',
    }
  }

  return {}
})
</script>

<template>
  <main>
    <h1>You are on home page</h1>

    <br>

    <i18n-t keypath="Pages" scope="global" tag="span"></i18n-t>

    <br>
    <br>

    <div>
      <v-btn color="primary" @click="changeLocale('en')">EN</v-btn>
      <v-btn color="primary" @click="changeLocale('fr')">FR</v-btn>
    </div>

    <!--  -->
    <Component
      :is="enableI18n ? 'i18n-t' : 'span'"
      v-if="badgeContent"
      v-show="!hideTitleAndBadge"
      key="badge"
      class="nav-item-badge"
      :class="badgeClass"
      v-bind="dynamicI18nProps(badgeContent, 'span')"
    >
      {{ badgeContent }}
    </Component>

    <!--  -->
    <VSelect
        id="route-transition"
        :items="['one', 'two']"
      />
  </main>
</template>
