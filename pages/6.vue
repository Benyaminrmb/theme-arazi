<template>
  <NuxtLayout :name="`inner`">
    <app-step-box />

    <div class="flex flex-wrap w-full">
      <div class="md:grid flex flex-wrap w-full gap-6 md:grid-cols-12 ">
        <div class="block flex-wrap w-full col-span-4">
          <div class="has-one-box mt-1">
            <div class="item-solid relative">
              <span
                class="text-xl absolute p-3 px-5 -top-7 -right-5 bg-body-gray"
                >راهنما نقشه</span
              >

              <div
                class="grid w-full xl:grid-cols-2 justify-center md:grid-cols-1 gap-6">
                <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
                  <div class="flex gap-1 flex-wrap gap-3">
                    <span class="w-[38px] h-[25px] bg-[#FF0000]"></span>
                    <span class="text-sm text-gray-500"> سازه های عمرانی </span>
                  </div>
                </div>
                <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
                  <div class="flex gap-1 flex-wrap gap-3">
                    <span class="w-[38px] h-[25px] bg-green-700"></span>
                    <span class="text-sm text-gray-500"> درختان و باغات </span>
                  </div>
                </div>
                <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
                  <div class="flex gap-1 flex-wrap gap-3">
                    <span class="w-[38px] h-[25px] bg-blue-700"></span>
                    <span class="text-sm text-gray-500"> زمین های بایر </span>
                  </div>
                </div>

                <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
                  <div class="flex gap-1 flex-wrap gap-3">
                    <span class="w-[38px] h-[25px] bg-[#00FF00]"></span>
                    <span class="text-sm text-gray-500">
                      زمین های کشاورزی
                    </span>
                  </div>
                </div>

                <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
                  <div class="flex gap-1 flex-wrap gap-3">
                    <span class="w-[38px] h-[25px] bg-cyan-400"></span>
                    <span class="text-sm text-gray-500"> آب </span>
                  </div>
                </div>

                <div class="flex flex-wrap w-full gap-x-6 gap-y-2 items-center">
                  <div class="flex gap-1 flex-wrap gap-3">
                    <span class="w-[38px] h-[25px] bg-[#FFFF00]"></span>
                    <span class="text-sm text-gray-500"> راه ها </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-14 w-full  col-span-8">
          <img src="/img/img1.png" alt="" class="flex  w-full" />
        </div>
      </div>
    </div>


    <div class="flex flex-wrap w-full mt-20 justify-center">
      <button class="btn-pdf px-16 gap-6 p-2">
        <span>
          <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.554 43.264">
            <path id="ic_cloud_download_24px" d="M43.984,20.332C42.438,11,35.551,4,27.277,4,20.708,4,15,8.435,12.161,14.924,5.319,15.789,0,22.684,0,31.04c0,8.95,6.115,16.224,13.638,16.224h29.55c6.274,0,11.365-6.057,11.365-13.52C54.554,26.605,49.894,20.819,43.984,20.332Zm-5.342,8L27.277,41.856,15.911,28.336h6.819V17.52h9.092V28.336Z" transform="translate(0 -4)" fill="#fff"/>
          </svg>
        </span>
        <span>دریافت نقشه تغییرات</span>

      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'دریافت نقشه تغییرات',
})
</script>

<style scoped></style>
