<template>
  <div class="flex flex-wrap w-full">
    <div class="grid grid-cols-12 w-full">
      <div
        class="flex flex-wrap col-span-12 justify-between items-center bg-header-blue p-3">
        <div class="flex gap-6 items-center flex-wrap">
          <div class="flex">
            <img class="w-16" src="/img/icon.png" alt="" />
          </div>

          <div class="flex items-center">
            <span class="md:text-2xl md:flex hidden text-base text-white">
              سامانه پایش تغییرات کاربری اراضی
            </span>
          </div>
        </div>

        <NuxtLink class="flex" to="/">
          <svg
            class="md:h-[61.174px] md:w-[62.957px] w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 62.957 61.174">
            <path
              id="ic_account_circle_24px"
              d="M33.478,2C16.1,2,2,15.7,2,32.587S16.1,63.174,33.478,63.174s31.478-13.7,31.478-30.587S50.854,2,33.478,2Zm0,9.176a9.3,9.3,0,0,1,9.444,9.176,9.447,9.447,0,0,1-18.887,0A9.3,9.3,0,0,1,33.478,11.176Zm0,43.433A22.844,22.844,0,0,1,14.591,44.76c.094-6.087,12.591-9.421,18.887-9.421,6.264,0,18.793,3.334,18.887,9.421A22.844,22.844,0,0,1,33.478,54.609Z"
              transform="translate(-2 -2)"
              fill="#fdf8f8" />
          </svg>
        </NuxtLink>
      </div>

      <div
        class="flex xl:w-10/12 mb-20 p-6 lg:w-11/12 w-full w-full flex-wrap col-span-12 mx-auto mt-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inner',
}
</script>

<style scoped></style>
