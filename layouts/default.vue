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
  useHead({
    link: [
        {
            rel: 'preload',
            as: 'style',
            href: '/_nuxt/entry.D2QyyOHI.css',
        },
        {
            rel: 'preload',
            as: 'image',
            href: '/img/hero-bg.png',
            fetchpriority: 'high',
        },
        {
            rel: 'preconnect',
            href: 'https://api.iconify.design',
            crossorigin
        },
        {
            rel: 'icon',
            href: '/favicon.svg',
            media: '(prefers-color-scheme: light)',
            type: 'image/svg+xml'
        },
        {
            rel: 'icon',
            href: '/favicon.svg',
            media: '(prefers-color-scheme: dark)',
            type: 'image/svg+xml'
        }
    ],

  })

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
