<template>
    <main class="body">
        <Hero />
        <section id="que-ofrecemos" class="pb-20 flex flex-col md:items-center px-5 md:px-14">
            <Badge class="mb-5">Lo que te ofrecemos</Badge>
            <h2 class="!text-3xl font-medium text-blue max-w-xl md:text-center">Resolvemos problemas con procesos creativos.</h2>
            <div class="text-blue mt-12 grid grid-cols-6 gap-3 w-full">
                <div v-for="card in offerCards" :key="card?.id" class="bg-card border border-border-blue rounded-2xl p-6 flex flex-col gap-8 col-span-6 sm:col-span-3 sm:nth-[5]:col-span-6 lg:col-span-2 lg:nth-[4]:col-span-3 lg:nth-[5]:col-span-3">
                    <span class="bg-primary/25 w-fit flex items-center justify-center p-2.5 rounded-full border border-blue/10">
                        <Icon :name="card?.icon" size="1.5rem" class="text-primary" />
                    </span>
                    <div class="flex justify-center">
                        <img :src="`/img/${card?.image}`" alt="" class="w-28 h-28">
                    </div>
                    <p class="text-base">{{ card?.description }}</p>
                </div>
            </div>
        </section>
        <section
            id="nuestro-proceso"
            ref="container"
            class="py-20 flex flex-col items-start justify-center px-5 md:px-14 relative xl:h-screen xl:overflow-hidden"
        >
            <div class="flex flex-col md:items-center justify-center w-full">
                <Badge class="mb-5">Nuestro proceso</Badge>
                <h2 class="!text-3xl font-medium text-blue max-w-xl md:text-center">
                    Diseñamos con propósito, entregamos con impacto.
                </h2>
            </div>

            <!-- Horizontal Scroll Wrapper -->
            <div
                ref="wrapper"
                class="grid grid-cols-1 md:grid-cols-2 xl:flex gap-8 mt-24 xl:px-[25vw]"
            >
                    <div
                        v-for="card in processCards"
                        :key="card?.id"
                        class="bg-card border border-border-blue rounded-2xl p-6 flex flex-col gap-4 xl:flex-row xl:min-w-[60vw] xl:w-fit h-full"
                    >
                        <div class="flex justify-center mb-4 xl:mb-0">
                            <img :src="`/img/${card?.img_url}`" alt="" class="w-full xl:min-w-[400px] h-auto object-center object-cover rounded-2xl aspect-video">
                        </div>
                        <div class="px-6 py-8 flex flex-col justify-center">
                            <div class="mb-4">
                                <span class="bg-primary/25 w-11 h-11 flex items-center justify-center p-2.5 rounded-full border border-blue/10 mb-4">
                                    <Icon :name="card?.icon" size="1.2rem" class="text-primary" />
                                </span>
                            </div>
                            <h5 class="font-semibold cal-sans tracking-wider text-blue text-xl pb-3">{{ card?.id + '. ' + card?.process_name }}</h5>
                            <p class="text-base text-blue">{{ card?.process_description }}</p>
                        </div>
                    </div>
                </div>
            </section>

        <section id="servicios" class="pb-20 pt-12 flex flex-col md:items-center px-5 md:px-14">
            <div class="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 lg:items-center">
                <div class="flex-1">
                    <Badge class="mb-5">Nuestros Servicios</Badge>
                    <h2 class="!text-3xl font-medium text-blue">Creamos soluciones digitales que impulsan tu marca</h2>
                </div>
                <div class="flex-1 text-base font-light">
                    <p>Cada negocio es único, y por eso nuestras soluciones también lo son. En DevWorks Studio te acompañamos desde el primer clic: analizamos tu presencia en línea, entendemos tus objetivos y diseñamos un sitio web estratégico que realmente funcione para ti.
                    </p>
                </div>
            </div>
            <div class="text-blue mt-12 flex flex-col w-full gap-10">
                <div v-for="service in services" :key="service?.id" class="border border-primary/40 rounded-2xl p-10 flex flex-col gap-8">
                    <div class="flex justify-between items-center">
                        <span class="cal-sans text-2xl text-primary">0{{ service?.id }}</span>
                        <h4 class="mb-8 font-medium text-primary text-2xl">{{ service?.name }}</h4>
                    </div>
                    <span class="w-full h-[1px] bg-primary/30" />
                    <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div class="flex-1 max-w-3xl flex flex-col gap-8">
                            <p v-for="(desc, index) in service?.description" :key="index" class="text-base">{{ desc }}</p>
                            <p class="text-base text-primary/65 italic">👤 {{ service?.target_audience }}</p>
                        </div>
                        <Button href="/contacto" icon="ic:outline-whatsapp" class="w-fit h-fit mt-8">Cotizar servicio</Button>
                    </div>
                </div>
            </div>
        </section>
        <section id="proyectos" class="pb-20 pt-20 flex flex-col md:items-center px-5 md:px-14">
            <Badge class="mb-5">Nuestro Trabajo</Badge>
            <h2 class="!text-3xl font-medium text-blue max-w-xl md:text-center">Algunos de nuestros proyectos recientes</h2>
            <div class="text-blue mt-12 grid grid-cols-1 xl:grid-cols-2 gap-16 w-full">
                <div v-for="(project, index) in projects" :key="index" class="flex flex-col gap-8">
                    <div class="flex justify-center items-center p-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl overflow-hidden">
                        <img :src="`/img/${project?.image}`" alt="" class="w-auto h-96 object-contain rounded-2xl">
                    </div>
                    <div class="flex justify-between items-center">
                        <div>
                            <h4 class="text-2xl font-bold text-primary">{{ project?.title }}</h4>
                            <p class=" text-md text-gray-500">{{ project?.type }}</p>
                        </div>
                        <span class="bg-primary/25 px-6 py-2 rounded-full text-primary font-normal text-base">
                            {{ project?.category }}
                        </span>
                    </div>
                    <p class="text-base">{{ project?.description }}</p>
                    <!-- <Button :href="{project?.link}" icon-right="fa6-solid:chevron-right" class="w-fit h-fit !px-4 !py-3 mt-8">Visitar sitio</Button> -->
                </div>
            </div>
        </section>
        <div class="px-5 md:px-14">
            <span class="inline-block bg-primary/30 h-[1px] w-full my-16" />
        </div>
        <section class="pb-20 pt-20 flex flex-col md:items-center px-5 md:px-14">
            <Badge class="mb-5">Ellos ya confiaron en nosotros</Badge>
        </section>
        <div class="px-5 md:px-14">
            <span class="inline-block bg-primary/30 h-[1px] w-full my-16" />
        </div>

    </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import offerCards from '../assets/json/offer-cards.json'
import processCards from '../assets/json/process-cards.json'
import services from '../assets/json/services.json'
import projects from '../assets/json/projects.json'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "DevWorks Studio",
        "image": "https://devworks-studio.netlify.app/your-logo-or-cover.jpg",
        "url": "https://devworks-studio.netlify.app",
        "description": "Diseño web profesional, UI/UX y desarrollo para negocios en Piedras Negras. Rápido, personalizado y enfocado en generar clientes.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Piedras Negras",
          "addressRegion": "Coahuila",
          "addressCountry": "MX"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Piedras Negras, Coahuila"
        },
        "hasMap": "https://goo.gl/maps/zZexample",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+52-1-878-382-1281",
          "contactType": "Customer Service",
          "availableLanguage": ["Spanish", "English"]
        },
        "sameAs": [
          "https://www.instagram.com/devworksstudio",
          "https://www.facebook.com/devowrksstudio"
        ]
      })
    }
  ]
})

const container = ref(null)
const wrapper = ref(null)

let animation = null

onMounted(() => {
  nextTick(() => {
    if (window.innerWidth >= 1280) {

      // Calculate full horizontal scroll
      const scrollLength = wrapper.value.scrollWidth - window.innerWidth
      console.log(scrollLength)

      animation = gsap.to(wrapper.value, {
        x: `-${scrollLength}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: container.value,
          start: 'top top',
          end: `+=${scrollLength}`,
          scrub: 0.2,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
      })
    }
  })
})

onBeforeUnmount(() => {
  if (animation) {
    animation.scrollTrigger?.kill()
    animation.kill()
  }
})
</script>
