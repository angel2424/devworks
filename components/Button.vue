<template>
    <NuxtLink
        :to="href"
        class="relative border border-primary text-base text-white hover:text-primary px-12 py-4 rounded-full transition-all ease-linear duration-200 overflow-hidden after:bg-primary after:absolute after:z-0 after:w-full after:h-full after:top-0 after:left-0 after:rounded-full hover:after:w-0 hover:scale-105 after:transition-all after:ease-in-out after:duration-300 flex items-center gap-3"
    >
        <Icon v-if="icon" :name="icon" size="1.2rem" class="z-10" />
        <p class="z-10" ><slot /></p>
        <Icon v-if="iconRight" :name="iconRight" size="1.2rem" class="z-10" />
    </NuxtLink>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        href: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false,
            default: null
        },
        iconRight: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>
