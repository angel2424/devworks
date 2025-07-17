<template>
  <div class="border border-primary/70 text-sm px-12 py-2 rounded-full w-fit">
    <p class="text-primary/70 uppercase">
        <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'BadgeComponent'
}
</script>
