<template>
	<NuxtLink
		:href="href"
		:to="to"
		:target="target"
		@click="$emit('click')"
		class="relative border border-primary text-sm md:text-base text-white hover:text-primary px-6 md:px-12 py-4 rounded-full transition-all ease-linear duration-200 overflow-hidden after:bg-primary after:absolute after:z-0 after:w-full after:h-full after:top-0 after:left-0 after:rounded-full hover:after:w-0 hover:scale-105 after:transition-all after:ease-in-out after:duration-300 flex items-center gap-3"
		:class="styles"
	>
		<Icon
			v-if="icon"
			:name="icon"
			size="1.2rem"
			class="z-10"
		/>
		<p
			v-if="$slots.default"
			class="z-10"
		>
			<slot />
		</p>
		<Icon
			v-if="iconRight"
			:name="iconRight"
			size="1.2rem"
			class="z-10"
		/>
	</NuxtLink>
</template>

<script>
export default {
	name: "ButtonComponent",
	emits: ['click'],
	props: {
		href: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: false,
			default: null,
		},
		icon: {
			type: String,
			required: false,
			default: null,
		},
		iconRight: {
			type: String,
			required: false,
			default: null,
		},
		target: {
			type: String,
			required: false,
			default: "_self",
		},
		styles: {
			type: String,
			required: false,
			default: "",
		},
	},
}
</script>
