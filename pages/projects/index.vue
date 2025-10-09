<template>
	<main>
		<section class="flex flex-col gap-8 mb-12 pt-40 px-5 md:px-14">
			<h1 class="text-4xl md:text-6xl font-semibold cal-sans text-primary">
				Proyectos
			</h1>
			<p class="text-blue max-w-2xl">
				Explora nuestro trabajo reciente. Cada proyecto está diseñado con
				estrategia, cuidado en los detalles y enfoque en resultados.
			</p>
		</section>

		<section class="pb-20 flex flex-col md:items-center px-5 md:px-14">
			<div
				class="text-blue mt-12 grid grid-cols-1 xl:grid-cols-2 gap-16 w-full"
			>
				<NuxtLink
					v-for="project in projectCards"
					:key="project.slug"
					:to="`/projects/${project.slug}`"
					@click="scrollToTop"
					class="flex flex-col gap-8"
				>
					<div
						class="flex justify-center items-center p-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl overflow-hidden"
					>
						<img
							:src="project.image"
							:alt="project.alt"
							class="w-auto h-96 object-contain rounded-2xl"
						/>
					</div>
					<div class="flex justify-between items-center">
						<div>
							<h4 class="text-2xl font-bold text-primary">
								{{ project?.title }}
							</h4>
							<p class="text-md text-gray-500">{{ project?.type }}</p>
						</div>
						<span
							class="bg-primary/25 px-6 py-2 rounded-full text-primary font-normal text-base"
						>
							{{ project?.category }}
						</span>
					</div>
					<p class="text-base">{{ project?.description }}</p>
					<Button
						:to="`/projects/${project.slug}`"
						icon-right="fa6-solid:chevron-right"
						class="w-fit h-fit !px-4 !py-3 mt-8"
						@click="scrollToTop"
						>Ver proyecto</Button
					>
				</NuxtLink>
			</div>
		</section>
	</main>
</template>

<script setup>
import { onMounted } from "vue"
import baseProjects from "~/assets/json/projects.json"

function slugify(text) {
	return text
		.toString()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "")
}

const projectCards = baseProjects.map((p) => ({
	slug: slugify(p.title),
	image: `/img/${p.image}`,
	title: p.title,
	description: p.description,
	alt: p.alt,
	category: p.category,
	type: p.type,
}))

const scrollToTop = () => {
	// Set navigation flag for the target page
	if (process.client) {
		sessionStorage.setItem("nuxt-navigation", "true")
	}
}

useHead({
	title: "Proyectos | DevWorks Studio",
	meta: [
		{
			name: "description",
			content:
				"Casos de estudio de diseño y desarrollo web realizados por DevWorks Studio. Explora nuestro trabajo reciente y descubre cómo ayudamos a negocios en Piedras Negras.",
		},
		{
			name: "keywords",
			content:
				"proyectos web, casos de estudio, diseño web Piedras Negras, desarrollo web Coahuila, portafolio DevWorks Studio",
		},
		{
			property: "og:title",
			content: "Proyectos | DevWorks Studio",
		},
		{
			property: "og:description",
			content:
				"Casos de estudio de diseño y desarrollo web realizados por DevWorks Studio.",
		},
		{
			property: "og:image",
			content: "https://devworksstudio.s3.us-east-2.amazonaws.com/og_image.png",
		},
		{
			property: "og:url",
			content: "https://devworksstudio.site/projects",
		},
		{
			property: "og:type",
			content: "website",
		},
	],
	script: [
		{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: "Proyectos | DevWorks Studio",
				description:
					"Casos de estudio de diseño y desarrollo web realizados por DevWorks Studio",
				url: "https://devworksstudio.site/projects",
				mainEntity: {
					"@type": "ItemList",
					itemListElement: projectCards.map((project, index) => ({
						"@type": "ListItem",
						position: index + 1,
						item: {
							"@type": "CreativeWork",
							name: project.title,
							description: project.description,
							url: `https://devworksstudio.site/projects/${project.slug}`,
							image: project.image,
						},
					})),
				},
			}),
		},
	],
})
</script>
