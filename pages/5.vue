<template>
  <NuxtLayout :name="`inner`">
    <app-step-box />

    <div class="has-two-boxes">
      <div class="flex flex-wrap w-full">
        <img src="/img/img1.png" alt="" class="flex w-full">
      </div>
      <div class="flex flex-wrap w-full">
        <img src="/img/img1.png" alt="" class="flex w-full">
      </div>
    </div>

    <div class="has-one-box">
      <div class="item-solid relative">
        <span class="text-xl absolute p-3 px-5 -top-7 -right-5 bg-body-gray"
          >راهنما نقشه</span
        >

        <div class="grid w-full xl:grid-cols-6 md:grid-cols-3 gap-6">
          <div
            class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center justify-center">
            <div class="flex gap-1 flex-wrap gap-3">
              <span class="w-[38px] h-[25px] bg-[#FF0000]"></span>
              <span class="text-sm text-gray-500"> سازه های عمرانی </span>
            </div>
          </div>
          <div
            class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center justify-center">
            <div class="flex gap-1 flex-wrap gap-3">
              <span class="w-[38px] h-[25px] bg-green-700"></span>
              <span class="text-sm text-gray-500"> درختان و باغات </span>
            </div>
          </div>
          <div
            class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center justify-center">
            <div class="flex gap-1 flex-wrap gap-3">
              <span class="w-[38px] h-[25px] bg-blue-700"></span>
              <span class="text-sm text-gray-500"> زمین های بایر </span>
            </div>
          </div>

          <div
            class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center justify-center">
            <div class="flex gap-1 flex-wrap gap-3">
              <span class="w-[38px] h-[25px] bg-[#00FF00]"></span>
              <span class="text-sm text-gray-500"> زمین های کشاورزی </span>
            </div>
          </div>

          <div
            class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center justify-center">
            <div class="flex gap-1 flex-wrap gap-3">
              <span class="w-[38px] h-[25px] bg-cyan-400"></span>
              <span class="text-sm text-gray-500"> آب </span>
            </div>
          </div>

          <div
            class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center justify-center">
            <div class="flex gap-1 flex-wrap gap-3">
              <span class="w-[38px] h-[25px] bg-[#FFFF00]"></span>
              <span class="text-sm text-gray-500"> راه ها </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap w-full mt-20 justify-center">
      <button class="btn-green px-16 p-2">شناسایی تغییرات کاربری</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'شناسایی کاربری اراضی',
})
</script>

<style scoped></style>