<script setup>
const props = defineProps({
  name: String,
  iconName: String,
});
</script>

<template>
  <div
    class="flex justify-between rounded-[5px] border-[1px] border-[#D9D9D9] px-[15px] py-2"
  >
    <div class="flex items-center">
      <div class="mr-4 text-[#B9B9B9]">
        <svg
          width="30"
          height="30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.938 22.5-7.126-7.125 1.782-1.781 5.343 5.344 11.47-11.47 1.78 1.782-13.25 13.25Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p class="text mr-7 w-[214px] text-base">{{ name }}</p>
      <img :src="`/icons/${iconName}.svg`" :alt="name" />
    </div>
    <div class="flex items-center">
      <p class="mr-20 font-medium underline">Выбрать из списка</p>
      <div class="">
        <svg
          width="40"
          height="40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m25.626 20-10 10-1.792-1.792L22.084 20l-8.208-8.208L15.667 10l9.959 10Z"
            fill="#000"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
