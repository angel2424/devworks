<template>
	<main class="body">
		<Hero :href="whatsAppUrl" />
		<section
			id="que-ofrecemos"
			class="pb-20 flex flex-col md:items-center px-5 md:px-14"
		>
			<Badge class="mb-5">Lo que te ofrecemos</Badge>
			<h2 class="!text-3xl font-medium text-blue max-w-xl md:text-center">
				Resolvemos problemas con procesos creativos.
			</h2>
			<div class="text-blue mt-12 grid grid-cols-6 gap-3 w-full">
				<div
					v-for="card in offerCards"
					:key="card?.id"
					class="bg-card border border-border-blue rounded-2xl p-6 flex flex-col gap-8 col-span-6 sm:col-span-3 sm:nth-[5]:col-span-6 lg:col-span-2 lg:nth-[4]:col-span-3 lg:nth-[5]:col-span-3"
				>
					<span
						class="bg-primary/25 w-fit flex items-center justify-center p-2.5 rounded-full border border-blue/10"
					>
						<Icon
							:name="card?.icon"
							size="1.5rem"
							class="text-primary"
						/>
					</span>
					<div class="flex justify-center">
						<img
							:src="`/img/${card?.image}`"
							alt="Imagen de oferta | Agencia en Piedras Negras, Coahuila"
							class="w-28 h-28"
						/>
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
			<div
				ref="wrapper"
				class="grid grid-cols-1 md:grid-cols-2 xl:flex gap-8 mt-24 xl:px-[25vw] will-change-transform"
			>
				<div
					v-for="card in processCards"
					:key="card?.id"
					class="bg-card border border-border-blue rounded-2xl p-6 flex flex-col gap-4 xl:flex-row xl:min-w-[60vw] xl:w-fit h-full"
				>
					<div class="flex justify-center mb-4 xl:mb-0">
						<img
							:src="`/img/${card?.img_url}`"
							alt="Proceso | Agencia de desarrollo web en Piedras Negras"
							class="w-full xl:min-w-[400px] h-auto object-center object-cover rounded-2xl aspect-video"
						/>
					</div>
					<div class="px-6 py-8 flex flex-col justify-center">
						<div class="mb-4">
							<span
								class="bg-primary/25 w-11 h-11 flex items-center justify-center p-2.5 rounded-full border border-blue/10 mb-4"
							>
								<Icon
									:name="card?.icon"
									size="1.2rem"
									class="text-primary"
								/>
							</span>
						</div>
						<h5
							class="font-semibold cal-sans tracking-wider text-blue text-xl pb-3"
						>
							{{ card?.id + ". " + card?.process_name }}
						</h5>
						<p class="text-base text-blue">{{ card?.process_description }}</p>
					</div>
				</div>
			</div>
		</section>

		<section
			id="servicios"
			class="pb-20 pt-12 flex flex-col md:items-center px-5 md:px-14"
		>
			<div
				class="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 lg:items-center"
			>
				<div class="flex-1">
					<Badge class="mb-8">Nuestros Servicios</Badge>
					<h2 class="!text-3xl font-medium text-blue">
						Creamos soluciones digitales que impulsan tu marca
					</h2>
				</div>
				<div class="flex-1 text-base font-light">
					<p>
						Cada negocio es único, y por eso nuestras soluciones también lo son.
						En DevWorks Studio te acompañamos desde el primer clic: analizamos
						tu presencia en línea, entendemos tus objetivos y diseñamos un sitio
						web estratégico que realmente funcione para ti. Nuestra meta es
						brindar el mejor servicio de diseño de sitios web para negocios en
						Piedras Negras.
					</p>
				</div>
			</div>
			<div
				class="text-blue mt-16 w-full gap-10 grid grid-cols-1 xl:grid-cols-2"
			>
				<div
					v-for="service in services"
					:key="service?.id"
					class="border border-primary/40 rounded-2xl p-10 flex flex-col gap-8"
				>
					<div class="flex justify-between items-center">
						<span class="cal-sans text-2xl text-primary"
							>0{{ service?.id }}</span
						>
						<h4 class="mb-8 font-medium text-primary text-2xl">
							{{ service?.name }}
						</h4>
					</div>
					<span class="w-full h-[1px] bg-primary/30" />
					<p
						v-for="(desc, index) in service?.description"
						:key="index"
						class="text-base"
					>
						{{ desc }}
					</p>
					<div
						class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-auto"
					>
						<div class="flex-1 max-w-3xl flex flex-col gap-8">
							<p class="text-base text-primary/65 italic">
								👤 {{ service?.target_audience }}
							</p>
						</div>
						<Button
							:href="whatsAppUrl"
							target="_blank"
							icon="ic:outline-whatsapp"
							class="w-fit h-fit mt-8"
							>Cotizar servicio</Button
						>
					</div>
				</div>
			</div>
		</section>
		<section
			id="proyectos"
			class="pb-20 pt-20 flex flex-col md:items-center px-5 md:px-14"
		>
			<Badge class="mb-5">Nuestro Trabajo</Badge>
			<h2 class="!text-3xl font-medium text-blue max-w-xl md:text-center">
				Algunos de nuestros proyectos recientes
			</h2>
			<div
				class="text-blue mt-12 grid grid-cols-1 xl:grid-cols-2 gap-16 w-full"
			>
				<div
					v-for="(project, index) in projects"
					:key="index"
					class="flex flex-col gap-8"
				>
					<div
						class="flex justify-center items-center p-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl overflow-hidden"
					>
						<img
							:src="`/img/${project?.image}`"
							:alt="project?.alt"
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
						:to="`/projects/${project?.slug}`"
						icon-right="fa6-solid:chevron-right"
						class="w-fit h-fit !px-4 !py-3 mt-8"
						@click="scrollToTop"
						>Ver proyecto</Button
					>
				</div>
			</div>
		</section>
		<div class="px-5 md:px-14">
			<span class="inline-block bg-primary/30 h-[1px] w-full mb-3 mt-16" />
		</div>
		<section class="pb-20 pt-20 flex flex-col items-center px-5 md:px-14">
			<Badge class="mb-5">Ellos ya confiaron en nosotros</Badge>
			<div class="flex flex-col xl:flex-row gap-8 mt-8">
				<img
					src="/img/logo-allende.png"
					alt="Logo de Allende, Coahuila"
					class="w-64 h-auto"
				/>
				<img
					src="/img/logo-goodmemx-piedras-negras.png"
					alt="Logo de Good Memories | Piedras Negras, Coahuila"
					class="w-64 h-auto"
				/>
			</div>
		</section>
		<div class="px-5 md:px-14">
			<span class="inline-block bg-primary/30 h-[1px] w-full mt-3 mb-16" />
		</div>
		<section
			id="contacto"
			class="pb-20 pt-20 flex flex-col xl:flex-row gap-16 xl:gap-32 items-center justify-center px-5 md:px-14"
		>
			<img
				src="/img/asterisk.png"
				alt="Asset geometrico | Piedras Negras, Coahuila | Agencia Web"
				class="w-40"
			/>
			<div class="flex flex-col gap-8">
				<h2 class="!text-5xl font-bold text-blue max-w-4xl">
					¿Listo para aumentar tu presencia en linea?
				</h2>
				<p class="text-lg font-light max-w-3xl">
					Contáctanos en Whatsapp por el siguiente botón o al numero de abajo
					para agendar la llamada inicial (sin compromiso 😉)
				</p>
				<div
					class="flex flex-col xl:flex-row items-center justify-between mt-24 gap-12"
				>
					<Button
						:href="whatsAppUrl"
						target="_blank"
						icon="ic:outline-whatsapp"
						class="w-fit h-fit !px-4 !py-3"
						>Solicita tu cotización por WhatsApp</Button
					>
					<div
						class="flex items-center flex-col md:flex-row gap-6 text-primary text-base"
					>
						<div class="flex items-center gap-3">
							<Icon
								name="ic:outline-email"
								size="1.2rem"
								class="z-10"
							/>
							<a href="mailto:contacto@devworksstudio.site"
								>contacto@devworksstudio.site</a
							>
						</div>
						<div class="flex items-center gap-2">
							<Icon
								name="ic:outline-local-phone"
								size="1.2rem"
								class="z-10"
							/>
							<a href="tel:+528781235015">(878) 123-5015</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="px-5 md:px-14">
			<span class="inline-block bg-primary/30 h-[1px] w-full mt-3 mb-16" />
		</div>
		<footer
			class="pb-20 pt-20 px-5 md:px-14 bg-no-repeat bg-center bg-cover xl:bg-contain object-center flex flex-col gap-16"
			style="background-image: url('/img/footer-bg.jpg')"
		>
			<div
				class="flex flex-col xl:flex-row items-center gap-16 justify-between px-6"
			>
				<img
					src="/img/dw-logo.svg"
					alt="DevWorks Studio | Agencia de diseño web en Piedras Negras"
					class="w-30 h-auto"
				/>
				<div class="flex items-center gap-4">
					<Button
						href="https://www.instagram.com/devworksstudio/"
						target="_blank"
						icon="mdi:instagram"
						styles="!p-3"
					/>
					<Button
						href="https://www.facebook.com/devworksstudio"
						target="_blank"
						icon="ic:outline-facebook"
						styles="!p-3"
					/>
				</div>
			</div>
			<h5 class="text-sm text-center text-gray-500">
				© {{ year }}. Todos los derechos reservados. DevWorks Studio | Agencia
				de diseño web en Piedras Negras
			</h5>
		</footer>
	</main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue"
import { useRoute } from "vue-router"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import offerCards from "../assets/json/offer-cards.json"
import processCards from "../assets/json/process-cards.json"
import services from "../assets/json/services.json"
import baseProjects from "../assets/json/projects.json"

const date = new Date()
const year = date.getFullYear()

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

const projects = baseProjects.map((p) => ({
	...p,
	slug: slugify(p.title),
}))

const scrollToTop = () => {
	// Set navigation flag for the target page
	if (process.client) {
		sessionStorage.setItem("nuxt-navigation", "true")
		console.log(
			"Navigation flag set:",
			sessionStorage.getItem("nuxt-navigation")
		)
	}
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
})

// Ensure hash navigation from other routes scrolls to the right section with header offset
const route = useRoute()
onMounted(() => {
	if (route.hash) {
		const start = performance.now()
		const maxWaitMs = 1500
		const tryScroll = () => {
			const target = document.querySelector(route.hash)
			if (target) {
				const header = document.querySelector("header")
				const headerHeight = header?.getBoundingClientRect().height ?? 0
				const top =
					target.getBoundingClientRect().top +
					window.scrollY -
					(headerHeight + 8)
				window.scrollTo({ top, left: 0, behavior: "smooth" })
				return
			}
			if (performance.now() - start < maxWaitMs) {
				requestAnimationFrame(tryScroll)
			}
		}
		requestAnimationFrame(tryScroll)
	}
})

useHead({
	title: "Diseño Web en Piedras Negras | DevWorks Studio",
	meta: [
		{
			name: "description",
			content:
				"Agencia especializada en diseño de páginas web en Piedras Negras. Creamos sitios personalizados, responsivos y optimizados para negocios locales.",
		},
		{
			name: "keywords",
			content:
				"Diseño web Piedras Negras, agencia web Piedras Negras, desarrollo web Piedras Negras, páginas web para negocios, sitios web Coahuila, diseño personalizado de sitios, mantenimiento web",
		},
		{
			name: "author",
			content: "DevWorks Studio",
		},
		{
			property: "og:title",
			content: "Diseño Web en Piedras Negras | DevWorks Studio",
		},
		{
			property: "og:description",
			content:
				"Sitios web personalizados que generan resultados reales para negocios en Piedras Negras. Solicita tu demo gratuito.",
		},
		{
			property: "og:image",
			content: "https://devworksstudio.s3.us-east-2.amazonaws.com/og_image.png",
		},
		{
			property: "og:url",
			content: "https://devworksstudio.site",
		},
		{
			property: "og:type",
			content: "website",
		},
	],
	link: [
		{
			rel: "canonical",
			href: "https://devworksstudio.site",
		},
	],
	script: [
		{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebDesignService",
				name: "DevWorks Studio",
				image: "https://devworksstudio.s3.us-east-2.amazonaws.com/og_image.png",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Piedras Negras",
					addressRegion: "Coahuila",
					addressCountry: "MX",
				},
				url: "https://devworksstudio.site",
				telephone: "+528781235015",
				email: "info@devworksstudio.site",
				description:
					"Diseño de páginas web en Piedras Negras. Creamos sitios modernos, responsivos y efectivos para negocios locales.",
				areaServed: {
					"@type": "Place",
					name: "Piedras Negras, Coahuila",
				},
				hasMap: "https://goo.gl/maps/zZexample",
				contactPoint: {
					"@type": "ContactPoint",
					telephone: "+52-878-123-5015",
					contactType: "Customer Service",
					availableLanguage: ["Spanish", "English"],
				},
				sameAs: [
					"https://www.instagram.com/devworksstudio",
					"https://www.facebook.com/devowrksstudio",
				],
			}),
		},
	],
})

const container = ref(null)
const wrapper = ref(null)

let animation = null

onMounted(() => {
	nextTick(() => {
		if (window.innerWidth >= 1280) {
			requestAnimationFrame(() => {
				const scrollLength = wrapper.value.scrollWidth - window.innerWidth

				animation = gsap.to(wrapper.value, {
					x: `-${scrollLength}px`,
					ease: "none",
					scrollTrigger: {
						trigger: container.value,
						start: "top top",
						end: `+=${scrollLength}`,
						scrub: 0.2,
						pin: true,
						anticipatePin: 1,
						// markers: true,
					},
				})
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
