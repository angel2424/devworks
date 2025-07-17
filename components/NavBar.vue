<template>
  <header class="py-4 px-3 md:px-6 fixed top-0 left-0 w-full z-20">
    <div
        class="flex justify-between items-center py-4 px-3 md:px-6 transition ease-linear duration-200 rounded-full"
        :class="scrolled ? 'bg-primary/10 backdrop-blur-xl' : 'bg-transparent'"
    >
        <NuxtLink
            to="/"
        >
            <img src="/img/dw-logo.svg" alt="">
        </NuxtLink>
        <nav
            class="bg-[#DBE2FA]/50 items-center justify-center rounded-full hidden lg:flex transition ease-linear duration-200"
            :class="scrolled ? 'bg-white' : 'bg-[#DBE2FA]/50'"
        >
          <div class="flex px-2 py-1.5 relative">
            <div
                class="absolute bg-primary rounded-full transition-all duration-300 ease-in-out z-[2]"
                :style="{
                    width: `${highlightStyle?.width}px`,
                    transform: `translateX(${highlightStyle?.left}px)`,
                    opacity: highlightStyle?.opacity,
                    top: '6px',
                    bottom: '6px',
                    left: '0'
                }"
            />
            <NuxtLink
                v-for="item, index in menu" :key="index"
                class="px-8 py-2 text-sm rounded-full z-[4] transition ease-linear duration-200"
                :class="highlightStyle?.currentSelection === index ? 'text-white' : ''"
                :to="item.href"
                @mouseenter="updateHighlight($event, index)"
                @mouseleave="clearHighlight"
            >
                {{ item.name }}
            </NuxtLink>
          </div>
        </nav>
        <button class="lg:hidden bg-[#DBE2FA] p-2 flex items-center justify-center rounded-full text-primary/65 z-[999] burger-btn" @click="toggleMenu">
          <Icon name="ic:round-menu" size="2rem" />
        </button>
        <MobileNav :is-open="isOpen" />
    </div>
  </header>
</template>

<script setup>
import menu from '../assets/json/menu.json'
import { reactive } from 'vue'
import { gsap } from 'gsap'

const isOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 10) {
            scrolled.value = true
        } else {
            scrolled.value = false
        }
    })
})

onUnmounted(() => {
    window.removeEventListener('scroll', () => {
        if(window.scrollY > 10) {
            scrolled.value = true
        } else {
            scrolled.value = false
        }
    })
})

const highlightStyle = reactive({
    width: 0,
    left: 0,
    opacity: 0,
    currentSelection: null
});
function toggleMenu() {
    isOpen.value = !isOpen.value
    const tl = gsap.timeline({ paused: true })

    tl.to('.menu', {
            clipPath: 'circle(141.2% at 100% 0)',
            duration: 0.5,
            ease: 'power1.out',
            immediateRender: false
        })
        .to('.burger-btn', {
                backgroundColor: 'white',
                duration: 0.5,
                ease: 'power1.inOut',
                delay:0.5,
                immediateRender: false
            })
        .to('.nav-items', {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power1.inOut',
                stagger: 0.2,
                delay:0.5,
                immediateRender: false
            })

       if (tl.reversed()) {
           tl.reverse();
    } else {
            tl.play();
        }

}

function updateHighlight(event, index) {
    const element = event.target

    if(element) {
        const parentRect = element.parentElement.getBoundingClientRect()
        const elementRect = element.getBoundingClientRect();

        highlightStyle.width = elementRect.width;
        highlightStyle.left = elementRect.left - parentRect.left;
        highlightStyle.opacity = 1;
        highlightStyle.currentSelection = index;
    }
}

function clearHighlight() {
    highlightStyle.opacity = 0;
    highlightStyle.currentSelection = null;
}

</script>
