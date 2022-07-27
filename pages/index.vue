<template>

  <div class="w-full flex flex-wrap">
    <div class="w-screen h-screen bg-red-500 flex flex-wrap">
      <div class="absolute w-full h-screen top-0 right-0">
        <div class="grid grid-cols-12 w-full p-4 items-center">
          <div
            class="flex gap-6 text-white flex-wrap col-span-6 col-start-4 justify-center">
            <h1 class="text-xl xl:text-4xl lg:text-2xl md:text-2xl sm:text-2xl w-full text-center">
              سامانه پایش تغییرات کاربری اراضی
            </h1>
            <span> (ستکا) </span>
          </div>
          <div class="flex justify-end flex-wrap col-span-3">
            <img class="w-3/12" src="/img/logo.png" alt="" />
          </div>
        </div>

        <div class="absolute w-full bottom-10 right-0">
          <div class="flex flex-wrap justify-center">
            <div
              class="grid gap-3 grid-cols-12 px-12 border justify-center border-gray-700 w-full sm:w-8/12 md:w-5/12 lg:w-4/12 xl:w-3/12 py-3 backdrop-blur-md bg-gray/30">
              <span
                class="text-cyan-500 mb-4 mt-3 text-center text-2xl col-span-12">
                ورود کاربر
              </span>

              <div class="flex flex-wrap w-full col-span-12">
                <input
                  type="text"
                  placeholder="نام کاربری"
                  class="input flex w-full" />
              </div>
              <div class="flex flex-wrap w-full mt-3 col-span-12">
                <input
                  type="text"
                  placeholder="رمز عبور"
                  class="input flex w-full" />
              </div>
              <div class="flex flex-wrap w-full col-span-12 justify-between">
                <div class="flex flex-wrap">
                  <span class="font-thin text-cyan-500">ثبت نام</span>
                </div>
                <div class="flex flex-wrap">
                  <span class="font-thin text-cyan-500">فراموشی رمز</span>
                </div>
              </div>
              <div class="flex flex-wrap w-full col-span-12 justify-center">
                <div class="flex flex-wrap">
                  <div class="rounded-full bg-cyan-500 border border-gray-700 p-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="47.939" height="49.601" viewBox="0 0 47.939 49.601">
                      <line id="Line_1" data-name="Line 1" x1="43" transform="translate(4.939 25.713)" fill="none" stroke="#caeaeb" stroke-width="8"/>
                      <line id="Line_2" data-name="Line 2" x1="24" y2="26" transform="translate(2.939 2.713)" fill="none" stroke="#caeaeb" stroke-width="8"/>
                      <line id="Line_3" data-name="Line 3" x1="24" y1="23" transform="translate(2.939 23.713)" fill="none" stroke="#caeaeb" stroke-width="8"/>
                    </svg>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img class="w-full h-full object-cover" src="/img/bg1.jpg" alt="" />
    </div>
  </div>

</template>
