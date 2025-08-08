<template>
  <header class="py-4 px-3 md:px-6 fixed top-0 z-20 w-full bg-white/60 backdrop-blur-xl shadow-sm">
    <div class="flex items-center justify-between gap-6">
      <NuxtLink to="/">
        <img src="/img/dw-logo.svg" alt="DevWorks logo" class="w-28 md:w-32 ml-4" />
      </NuxtLink>
      <nav class="hidden lg:flex items-center gap-2 bg-white rounded-full px-3 py-2">
        <NuxtLink
          v-for="(item, index) in menu"
          :key="index"
          :to="item.href"
          :class="[
            'px-5 py-2 text-sm rounded-full transition-colors duration-200 hover:bg-primary hover:text-white',
            activeSection === item.href ? 'bg-primary text-white' : ''
          ]"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <button class="lg:hidden bg-[#DBE2FA] p-2 flex items-center justify-center rounded-full text-primary/65">
            <Icon name="ic:round-menu" size="2rem" />
          </button>
        </SheetTrigger>

        <SheetContent side="left" class="w-full max-w-xs p-6 bg-white">
          <SheetHeader>
            <SheetTitle class="text-base font-semibold text-gray-700">Menú</SheetTitle>
          </SheetHeader>

          <div class="mt-6 flex flex-col gap-4">
            <NuxtLink
              v-for="(item, index) in menu"
              :key="index"
              :to="item.href"
              class="text-base text-gray-800 hover:text-primary transition-colors"
              @click="isOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import menu from '~/assets/json/menu.json'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet'

const isOpen = ref(false)
const activeSection = ref('#hero')
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = `#${entry.target.id}`
        }
      })
    },
    { threshold: 0.5 }
  )

  menu.forEach(item => {
    const section = document.querySelector(item.href)
    if (section) observer.observe(section)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>
