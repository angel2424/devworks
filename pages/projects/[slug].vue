<template>
	<main class="relative pb-24">
		<Teleport to="body">
			<div class="fixed bottom-6 right-6 z-50">
				<Button
					:href="whatsAppUrl"
					target="_blank"
					icon="ic:outline-whatsapp"
					class="w-fit border border-primary text-sm md:text-base text-white hover:text-primary px-4 py-4 rounded-full transition-all ease-linear duration-200 overflow-hidden after:bg-primary after:absolute after:z-0 after:w-full after:h-full after:top-0 after:left-0 after:rounded-full hover:after:w-0 hover:scale-105 after:transition-all after:ease-in-out after:duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
				>
					<span class="hidden sm:inline z-10">Trabajemos juntos</span>
				</Button>
			</div>
		</Teleport>
		<!-- Breadcrumbs -->
		<nav class="pt-32 pb-4 px-5 md:px-14 max-w-[1600px] mx-auto">
			<ol class="flex items-center gap-2 text-sm text-gray-500">
				<li>
					<NuxtLink
						to="/"
						class="hover:text-primary"
						>Inicio</NuxtLink
					>
				</li>
				<li>></li>
				<li>
					<NuxtLink
						to="/projects"
						class="hover:text-primary"
						>Proyectos</NuxtLink
					>
				</li>
				<li>></li>
				<li class="text-blue">{{ project.title }}</li>
			</ol>
		</nav>

		<!-- Hero Section -->
		<section class="pb-16 px-5 md:px-14 max-w-[1600px] mx-auto mt-12">
			<h1
				class="text-4xl md:text-6xl font-semibold cal-sans text-primary leading-tight"
			>
				{{ project.title }}
			</h1>
			<p class="text-xl text-gray-500 mt-3">{{ project.tagline }}</p>
			<div class="flex flex-col gap-1 flex-1 max-w-[1200px] mt-12">
				<h2 class="text-xl font-semibold text-gray-700">Sobre el cliente</h2>
				<p class="text-gray-500">{{ project.client.about }}</p>
			</div>
			<div
				class="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-y-8 xl:gap-x-8 items-start"
			>
				<!-- Hero Image -->
				<div class="col-span-2">
					<img
						:src="project.hero.image"
						alt="Hero {{ project.title }}"
						class="w-full h-auto rounded-2xl bg-white object-contain"
					/>
				</div>
				<ul
					class="bg-card border border-border-blue rounded-2xl p-6 flex flex-col gap-3"
				>
					<li
						v-for="(s, i) in project.hero.stats"
						:key="i"
						class="flex justify-between text-primary"
					>
						<span class="font-bold">{{ s.label }}</span>
						<h2 class="text-gray-500">{{ s.value }}</h2>
					</li>
				</ul>
			</div>
		</section>

		<section
			class="py-10 px-5 md:px-14 max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8"
		>
			<div class="flex flex-col gap-4 flex-1 max-w-[1200px]">
				<h2 class="text-2xl font-semibold text-gray-700">El reto</h2>
				<p class="text-gray-500">{{ project.challenge }}</p>
			</div>
		</section>

		<section class="py-16 px-5 md:px-14 max-w-[1600px] mx-auto">
			<h2 class="text-4xl font-semibold cal-sans text-primary tracking-wider">
				Proceso
			</h2>
			<ol class="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				<li
					v-for="(step, i) in project.process"
					:key="i"
					class="bg-card border border-border-blue rounded-2xl p-6 flex flex-col gap-4"
				>
					<div class="">
						<p class="text-primary text-md font-bold">0{{ i + 1 }}</p>
						<h3 class="text-xl font-semibold text-title">{{ step.title }}</h3>
					</div>
					<p class="text-blue">{{ step.description }}</p>
				</li>
			</ol>
		</section>

		<section class="py-16 px-5 md:px-14 max-w-[1600px] mx-auto">
			<h2 class="text-4xl font-semibold cal-sans text-primary tracking-wider">
				Producto final
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
				<img
					v-for="(g, i) in project.product.gallery"
					:key="i"
					:src="g"
					class="rounded-2xl bg-white object-cover w-full h-full"
				/>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
				<div
					v-for="(f, i) in project.product.features"
					:key="i"
					class="bg-card border border-border-blue rounded-2xl p-6"
				>
					<h3 class="text-xl font-semibold text-title">{{ f.title }}</h3>
					<p class="text-blue mt-2">{{ f.description }}</p>
				</div>
			</div>
			<div
				v-if="project.product.demo"
				class="mt-14 flex items-center justify-center gap-4"
			>
				<Button
					:href="project.product.demo"
					target="_blank"
					styles="!px-20 !py-3 w-fit"
					icon="fa7-solid:globe"
				>
					Ver sitio
				</Button>
			</div>
		</section>

		<section
			class="py-16 px-5 md:px-14 max-w-[1600px] mx-auto flex flex-col gap-8"
		>
			<div class="lg:col-span-2">
				<h2 class="text-4xl font-semibold cal-sans text-primary tracking-wider">
					Resultados e impacto
				</h2>
				<p class="text-blue pt-4 max-w-[1024px]">
					{{ project.results.summary }}
				</p>
				<ul
					v-if="project.results.metrics?.length"
					class="grid grid-cols-2 gap-4 mt-12"
				>
					<li
						v-for="(m, i) in project.results.metrics"
						:key="i"
						class="bg-card border border-border-blue rounded-2xl px-4 py-8 text-center flex flex-col gap-4 items-center justify-center"
					>
						<p class="text-blue text-sm">{{ m.label }}</p>
						<p class="text-3xl font-bold cal-sans trackin text-primary">
							{{ m.value }}
						</p>
					</li>
				</ul>
			</div>
			<blockquote
				v-if="project.results.testimonial"
				class="bg-card border border-border-blue rounded-2xl py-10 px-12 text-secondary text-xl font-medium flex flex-col items-center text-center gap-4"
			>
				<p class="max-w-[1024px]">"{{ project.results.testimonial.quote }}"</p>
				<p class="italic text-base font-bold text-primary">
					— {{ project.results.testimonial.author }}
				</p>
			</blockquote>
		</section>

		<!-- More Projects Section -->
		<section class="py-16 px-5 md:px-14 max-w-[1600px] mx-auto">
			<h2 class="text-4xl font-semibold cal-sans text-primary">
				Más proyectos
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
				<NuxtLink
					v-for="relatedProject in relatedProjects"
					:key="relatedProject.slug"
					:to="`/projects/${project.slug}`"
					class="flex flex-col gap-8"
				>
					<div
						class="flex justify-center items-center p-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl overflow-hidden"
					>
						<img
							:src="relatedProject.hero.image"
							:alt="relatedProject.alt"
							class="w-auto h-96 object-contain rounded-2xl"
						/>
					</div>
					<div class="flex justify-between items-center">
						<div>
							<h4 class="text-2xl font-bold text-primary">
								{{ relatedProject?.title }}
							</h4>
							<p class="text-sm text-gray-500 mt-1">
								{{ relatedProject.client.name }}
							</p>
							<p class="text-base text-blue mt-2 line-clamp-2">
								{{ relatedProject.tagline }}
							</p>
						</div>
					</div>
					<NuxtLink
						:to="`/projects/${relatedProject.slug}`"
						icon-right="fa6-solid:chevron-right"
						class="w-fit h-fit relative border border-primary text-sm md:text-base !text-white group hover:text-primary px-6 md:px-12 py-4 rounded-full transition-all ease-linear duration-200 overflow-hidden after:bg-primary after:absolute after:z-0 after:w-full after:h-full after:top-0 after:left-0 after:rounded-full hover:after:w-0 hover:scale-105 after:transition-all after:ease-in-out after:duration-300 flex items-center gap-3"
					>
						<p class="z-50 group-hover:text-primary">Ver proyecto</p>
					</NuxtLink>
				</NuxtLink>
			</div>
		</section>

		<section class="py-10 px-5 md:px-14 max-w-[1600px] mx-auto">
			<div class="flex items-center justify-between gap-4">
				<NuxtLink
					v-if="prev"
					:to="`/projects/${prev.slug}`"
					class="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-200"
				>
					<Icon
						name="ic:round-arrow-back"
						size="1.2rem"
					/>
					Proyecto anterior
				</NuxtLink>
				<div
					v-else
					class="flex-1"
				></div>

				<NuxtLink
					v-if="next"
					:to="`/projects/${next.slug}`"
					class="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-200"
				>
					Siguiente proyecto
					<Icon
						name="ic:round-arrow-forward"
						size="1.2rem"
					/>
				</NuxtLink>
				<div
					v-else
					class="flex-1"
				></div>
			</div>
		</section>

		<!-- Sticky WhatsApp CTA -->
	</main>
</template>

<script setup>
import { useRoute } from "vue-router"

const phoneNumber = "528781235015"
const whatsAppUrl = `https://wa.me/${phoneNumber}?text=%F0%9F%9A%80%20%C2%A1Hola!%20Que%20tal.%20Me%20comunico%20directamente%20de%20t%C3%BA%20sitio%20y%20%C2%A1me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20dise%C3%B1o%20web!`

function slugify(text) {
	return text
		.toString()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "")
}

const route = useRoute()
const slug = route.params.slug

const detailsImports = import.meta.glob(
	"~/assets/json/project-details/*.json",
	{ eager: true, import: "default" }
)
const projects = Object.values(detailsImports).sort(
	(a, b) => (a.order || 0) - (b.order || 0)
)

const project =
	projects.find((p) => p.slug === slug) ||
	projects.find((p) => slugify(p.title) === slug)

const currentIndex = projects.findIndex((p) => p.slug === project?.slug)
const prev = currentIndex > 0 ? { slug: projects[currentIndex - 1].slug } : null
const next =
	currentIndex < projects.length - 1
		? { slug: projects[currentIndex + 1].slug }
		: null

// Related projects (exclude current project)
const relatedProjects = projects
	.filter((p) => p.slug !== project?.slug)
	.slice(0, 2)

// Structured Data
const structuredData = project
	? {
			"@context": "https://schema.org",
			"@type": "CreativeWork",
			name: project.title,
			description: project.tagline,
			image: project.hero.image,
			url: `https://devworksstudio.site/projects/${project.slug}`,
			author: {
				"@type": "Organization",
				name: "DevWorks Studio",
				url: "https://devworksstudio.site",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Piedras Negras",
					addressRegion: "Coahuila",
					addressCountry: "MX",
				},
			},
			provider: {
				"@type": "Service",
				name: "Diseño y Desarrollo Web",
				provider: {
					"@type": "Organization",
					name: "DevWorks Studio",
				},
			},
			about: {
				"@type": "Thing",
				name: project.client.name,
			},
			dateCreated: new Date().toISOString(),
			inLanguage: "es-MX",
	  }
	: null

useHead({
	title: project
		? `${project.title} | DevWorks Studio`
		: "Proyecto | DevWorks Studio",
	meta: [
		{
			name: "description",
			content: project?.tagline || "Caso de estudio de proyecto",
		},
		{
			name: "keywords",
			content: `diseño web, desarrollo web, ${project?.client.name}, ${project?.title}, Piedras Negras, Coahuila`,
		},
		{
			property: "og:title",
			content: project
				? `${project.title} | DevWorks Studio`
				: "Proyecto | DevWorks Studio",
		},
		{ property: "og:description", content: project?.tagline || "" },
		{
			property: "og:image",
			content: project?.hero?.image || "/img/og-diseño-web-piedrasnegras.png",
		},
		{
			property: "og:url",
			content: `https://devworksstudio.site/projects/${slug}`,
		},
		{ property: "og:type", content: "article" },
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "twitter:title",
			content: project
				? `${project.title} | DevWorks Studio`
				: "Proyecto | DevWorks Studio",
		},
		{ name: "twitter:description", content: project?.tagline || "" },
		{
			name: "twitter:image",
			content: project?.hero?.image || "/img/og-diseño-web-piedrasnegras.png",
		},
	],
	script: structuredData
		? [
				{
					type: "application/ld+json",
					children: JSON.stringify(structuredData),
				},
		  ]
		: [],
})
</script>

<style scoped>
.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
