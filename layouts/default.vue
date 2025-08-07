<template>
    <div>
        <NavBar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <slot />
          </div>
        </div>
    </div>
  </template>

  <script setup>
  import { onMounted } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import ScrollSmoother from 'gsap/ScrollSmoother'

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  })

  onMounted(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: false,
    })
  })
  </script>

  <style>
  #smooth-content {
    will-change: transform;
  }
  </style>
