<template>
  <section
    id="hero"
    class="relative min-h-screen pt-32 pb-16 md:py-0 h-full bg-contain xl:bg-cover bg-center bg-no-repeat flex items-center justify-center"
    :style="{ backgroundImage: `url(${bg})` }"
>

    <div class="w-full h-full flex items-center px-5 md:px-14 pb-14 lg:pt-[112px] max-w-[1600px] md:relative z-[10]">
        <div class="max-w-7xl flex flex-col gap-4">
            <NuxtImg src="/img/hero-shape.png" format="webp" alt="Imagen de degradado | Piedras Negras" class="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]  lg:w-[450px] lg:h-[450px] bottom-14 lg:bottom-auto right-5 md:right-14 lg:top-50%" />
            <h1 class="text-primary text-xl font-medium">Diseño Web en Piedras Negras para Negocios Locales</h1>
            <h2 class="text-[clamp(3.2rem,7vw,5.2rem)] font-semibold cal-sans tracking-wide text-title leading-tight max-w-4xl">
                Creamos tu sitio web con
                <span class="text-primary">propósito y resultados</span>
            </h2>
            <p class="max-w-4xl mb-10 text-lg">En DevWorks Studio, diseñamos y desarrollamos sitios web estratégicos que no solo se ven increíbles, sino que también atraen clientes y generan resultados reales.</p>
            <div class="flex flex-col md:flex-row md:items-center gap-4 mt-8">
                <Button :href="href" target="_blank" icon="ic:outline-whatsapp" class="w-fit">Solicita tu cotización por WhatsApp</Button>
                <NuxtLink to="#proyectos" class="text-primary text-lg font-medium ml-2 hover:scale-105 hover:opacity-80 transition ease-linear duration-200">Ver proyectos</NuxtLink>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import bg from '../assets/hero-bg.png'

export default {
  name: 'HeroComponent',
    props: {
    href: {
      type: String,
      default: '/',
    },
  },
  setup() {
    return {
      bg
    }
  },
}
</script>
