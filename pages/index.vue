<template>
<!--  <NuxtLayout :name="`default`">-->
    <div class="w-full flex flex-wrap">
    <div class="w-screen h-screen bg-red-500 flex flex-wrap">
      <div class="absolute w-full h-screen top-0 right-0">
        <div class="grid grid-cols-12 w-full p-4 items-center">
          <div class="flex gap-6 text-white flex-wrap col-span-6 col-start-4 justify-center">
            <h1 class="text-4xl w-full text-center">
              سامانه پایش تغییرات کاربری اراضی
            </h1>
            <span>
              (ستکا)
            </span>
          </div>
          <div class="flex justify-end flex-wrap col-span-3">
            <img class="w-3/12" src="/img/logo.png" alt="">
          </div>
        </div>

        <div class="absolute w-full bottom-10 right-0">

          <div class="flex flex-wrap justify-center">
            <div class="grid gap-4 grid-cols-12 border justify-center border-gray-700 w-3/12 p-2 backdrop-blur-md bg-gray/30">
              <span class="text-cyan-500 text-center text-xl col-span-12">
                ورود کاربر
              </span>

              <div class="flex flex-wrap w-full">
                <input type="text" class="input">
              </div>

            </div>
          </div>
        </div>
      </div>



      <img class="w-full h-full object-cover" src="/img/bg1.jpg" alt="">
    </div>
    </div>
<!--  </NuxtLayout>-->
</template>
