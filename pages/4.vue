<template>
  <NuxtLayout :name="`inner`">
    <app-step-box />

    <div class="flex flex-wrap gap-2 w-full mt-10">
      <h2 class="text-3xl text-header-blue">شناسایی کاربری زمین</h2>
      <span class="text-sm w-full flex flex-wrap text-gray-600">
        .در این بخش کاربر باید کلاس کاربری های موردنظر را انتخاب نماید
      </span>
    </div>

    <div class="has-one-box">
      <div class="item-solid relative">
        <span class="text-xl absolute p-3 px-5 -top-7 -right-5 bg-body-gray"
          >کلاس کاربری</span
        >

        <div class="grid w-full xl:grid-cols-3 md:grid-cols-2 gap-6">
          <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
            <div class="flex flex-col gap-2 flex-wrap">
              <input
                type="radio"
                name="check_radio"
                class="w-[38px] h-[24px]"
                id="check_number_one" />
              <span class="w-[38px] h-[25px] bg-[#FF0000]"></span>
            </div>

            <div class="flex flex-col gap-1 flex-wrap">
              <label class="text-gray-500" for="check_number_one">
                تصحیحات رادیومتریک
              </label>
              <span class="text-sm text-gray-500">
                ساختمان‌ها، سوله و سایر سازه‌ها</span
              >
            </div>
          </div>
          <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
            <div class="flex flex-col gap-2 flex-wrap">
              <input
                type="radio"
                name="check_radio"
                class="w-[38px] h-[24px]"
                id="check_number_two" />
              <span class="w-[38px] h-[25px] bg-green-700"></span>
            </div>

            <div class="flex flex-col gap-1 flex-wrap">
              <label class="text-gray-500" for="check_number_two"> درخت </label>
              <span class="text-sm text-gray-500">
                تک درخت، باغات و سایر درختان بلند قد
              </span>
            </div>
          </div>
          <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
            <div class="flex flex-col gap-2 flex-wrap">
              <input
                type="radio"
                name="check_radio"
                class="w-[38px] h-[24px]"
                id="check_number_three" />
              <span class="w-[38px] h-[25px] bg-blue-700"></span>
            </div>

            <div class="flex flex-col gap-1 flex-wrap">
              <label class="text-gray-500" for="check_number_three">
                بایر
              </label>
              <span class="text-sm text-gray-500">
                زمین های بدون ساختمان و کشت
              </span>
            </div>
          </div>

          <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
            <div class="flex flex-col gap-2 flex-wrap">
              <input
                type="radio"
                name="check_radio"
                class="w-[38px] h-[24px]"
                id="check_number_four" />
              <span class="w-[38px] h-[25px] bg-[#00FF00]"></span>
            </div>

            <div class="flex flex-col gap-1 flex-wrap">
              <label class="text-gray-500" for="check_number_four">
                زمین های کشاورزی
              </label>
              <span class="text-sm text-gray-500">
                زمین های دارای گیاه، چمن و سایر گیاهان کوتاه قد
              </span>
            </div>
          </div>

          <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
            <div class="flex flex-col gap-2 flex-wrap">
              <input
                type="radio"
                name="check_radio"
                class="w-[38px] h-[24px]"
                id="check_number_five" />
              <span class="w-[38px] h-[25px] bg-cyan-400"></span>
            </div>

            <div class="flex flex-col gap-1 flex-wrap">
              <label class="text-gray-500" for="check_number_five"> آب </label>
              <span class="text-sm text-gray-500">
                رودخانه، دریا، دریاچه و حوضچه های طبیعی
              </span>
            </div>
          </div>

          <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
            <div class="flex flex-col gap-2 flex-wrap">
              <input
                type="radio"
                name="check_radio"
                class="w-[38px] h-[24px]"
                id="check_number_six" />
              <span class="w-[38px] h-[25px] bg-[#FFFF00]"></span>
            </div>

            <div class="flex flex-col gap-1 flex-wrap">
              <label class="text-gray-500" for="check_number_six"> راه </label>
              <span class="text-sm text-gray-500">
                بزرگراه، حیابان و کوچه های عریض
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap w-full mt-20 justify-center">
      <button class="btn-green px-16 p-2">شناسایی کاربری اراضی</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'شناسایی کاربری زمین',
})
</script>

<style scoped></style>
