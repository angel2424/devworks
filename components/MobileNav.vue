<template>
    <nav class="bg-[#DBE2FA] flex items-center justify-center fixed z-[99] menu top-0 right-0 w-full h-full menu-clip" >
        <div class="flex flex-col px-2 py-1.5 relative w-full">
            <NuxtLink
                v-for="item, index in menu" :key="index"
                class="px-2 py-4 text-3xl cal-sans rounded-full z-[4] transition ease-linear duration-200 flex-[1] text-gray-500 nav-items opacity-0 translate-y-full"
                :class="highlightStyle?.currentSelection === index ? 'text-white' : ''"
                :to="item.href"
            >
                {{ item.name }}
            </NuxtLink>
        </div>
        </nav>
</template>

<script>
import menu from '../assets/json/menu.json'

 export default {
     props: {
         isOpen: {
             type: Boolean,
             required: true
         }
     },
     emits: ['close'],
     setup() {

         return {
             menu
         }
     }
 }

</script>
