<template>
  <section
    class="min-h-screen py-10 md:py-0 lg:min-h-screen bg-contain 2xl:bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
    :style="{ backgroundImage: `url(${bg})` }"
>
    <div class="absolute left-0 top-0 w-full h-full bg-linear-to-b from-transparent to-white z-[2]" />
    <div class="w-full lg:min-h-screen flex items-center px-5 md:px-14 pb-14 lg:pt-[112px] max-w-[1600px] md:relative z-[10]">
        <div class="max-w-7xl flex flex-col gap-4">
            <img src="/img/hero-shape.png" alt="" class="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]  lg:w-[450px] lg:h-[450px] bottom-14 lg:bottom-auto right-5 md:right-14 lg:top-50%">
            <h1 class="text-[clamp(3.2rem,5vw,5.2rem)] font-semibold cal-sans tracking-wide text-title leading-tight max-w-4xl">
                Creamos tu sitio web con
                <span class="text-primary">propósito y resultados</span>
            </h1>
            <p class="max-w-4xl mb-10 text-lg">En DevWorks Studio, diseñamos y desarrollamos sitios web estratégicos que no solo se ven increíbles, sino que también atraen clientes y generan resultados reales.</p>
            <div class="flex flex-col md:flex-row md:items-center gap-4 mt-8">
                <Button href="/contacto" icon="ic:outline-whatsapp" class="w-fit">Trabajemos juntos</Button>
                <NuxtLink to="/contacto" class="text-primary text-lg font-medium ml-2 hover:scale-105 hover:opacity-80 transition ease-linear duration-200">Ver proyectos</NuxtLink>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import bg from '../assets/hero-bg.png'

export default {
  name: 'HeroComponent',
  setup() {
    return {
      bg
    }
  }
}
</script>
