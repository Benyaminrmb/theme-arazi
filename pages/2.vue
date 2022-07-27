<template>
  <NuxtLayout :name="`inner`">
    <app-step-box />

    <div class="flex flex-wrap gap-2 w-full mt-10">
      <h2 class="text-3xl text-header-blue">بارگذاری تصویر</h2>
      <span class="text-sm w-full flex flex-wrap text-gray-600">
        در این بخش کاربر باید دو تصویر ماهواره ای یا هوایی از یک منطقه در بازه
        زمانی مورد نظر را انتخاب نماید.
      </span>
    </div>

    <div class="has-two-boxes">
      <div class="item">
        <span class="text-xl font-bold"> انتخاب تصویر اول </span>
        <span
          class="muted-text">
          <span class="flex w-full justify-center">
            کاربر با کلیک کردن بر روی این جعبه میتواند تصویر
          </span>
          <span class="flex">موردنظر در </span>
          <span class="flex font-bold">ابتدای بازه زمانی </span>
          <span class="flex">را انتخاب نماید</span>
        </span>
      </div>
      <div class="item">
        <span class="text-xl font-bold"> انتخاب تصویر دوم </span>
        <span
          class="muted-text">
          <span class="flex w-full justify-center">
            کاربر با کلیک کردن بر روی این جعبه میتواند تصویر
          </span>
          <span class="flex">موردنظر در </span>
          <span class="flex font-bold">انتهای بازه زمانی </span>
          <span class="flex">را انتخاب نماید</span>
        </span>
      </div>
    </div>

    <div class="flex flex-wrap w-full mt-20 justify-center">
      <button class="btn-green px-16 p-2">
        بارگذاری تصاویر
      </button>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  name: '2',
}
</script>

<style scoped></style>
