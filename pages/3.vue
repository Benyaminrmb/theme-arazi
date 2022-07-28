<template>
  <NuxtLayout :name="`inner`">
    <app-step-box />

    <div class="flex flex-wrap gap-2 w-full mt-10">
      <h2 class="text-3xl text-header-blue">پیش پردازش</h2>
      <span class="text-sm w-full flex flex-wrap text-gray-600">
        .در این بخش کاربر باید پیش پردازش های موردنظر را انتخاب نماید
      </span>
    </div>

    <div class="has-two-boxes">
      <div class="item-solid relative">

        <span class="text-xl absolute p-3 px-5 -top-7 -right-5 bg-body-gray">تصویر اول </span>

        <div class="flex flex-wrap gap-6">
          <div class="flex w-full gap-6 items-center">
            <input type="checkbox"
                   id="check_number_one"
                   class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label class="text-gray-500 " for="check_number_one">
              تصحیحات رادیومتریک
            </label>
          </div>
          <div class="flex w-full gap-6 items-center">
            <input type="checkbox"
                   id="check_number_two"
                   class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label class="text-gray-500 " for="check_number_two">
              تصحیحات ژئومتریک
            </label>
          </div>
        </div>

      </div>
      <div class="item-solid relative">
        <span class="text-xl absolute p-3 px-5 -top-7 -right-5 bg-body-gray">تصویر دوم</span>

        <div class="flex flex-wrap gap-6">
          <div class="flex w-full gap-6 items-center">
            <input type="checkbox"
                   id="check_number_three"
                   class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label class="text-gray-500 " for="check_number_three">
              تصحیحات رادیومتریک
            </label>
          </div>
          <div class="flex w-full gap-6 items-center">
            <input type="checkbox"
                   id="check_number_four"
                   class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label class="text-gray-500 " for="check_number_four">
              تصحیحات ژئومتریک
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap w-full mt-20 justify-center">
      <button class="btn-green px-16 p-2">
        اعمال پیش پردازش
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'پیش پردازش',
})
</script>

<style scoped></style>
