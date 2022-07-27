<template>
  <NuxtPage/>
</template>
<script setup>
useHead({
  title: 'login',
  titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1'}
  ],
  bodyAttrs: {
    dir: 'rtl',
    "data-theme":"light"
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/icon.png' }],
  htmlAttrs: {
    lang: 'fa',
    dir: 'rtl'
  },
})
</script>