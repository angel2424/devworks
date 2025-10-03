<template>
	<header
		class="py-4 px-3 md:px-6 fixed top-0 z-20 w-full bg-white/60 backdrop-blur-xl shadow-sm"
	>
		<div class="flex items-center justify-between gap-6">
			<NuxtLink to="/">
				<img
					src="/img/dw-logo.svg"
					alt="DevWorks logo | Agencia de diseño web en Piedras Negras Coahuila"
					class="w-28 md:w-32 ml-4"
				/>
			</NuxtLink>
			<nav
				class="hidden lg:flex items-center gap-2 bg-white rounded-full px-3 py-2"
			>
				<NuxtLink
					v-for="(item, index) in menu"
					:key="index"
					:to="item.href"
					@click="() => onNavClick(item, $event)"
					:class="[
						'px-5 py-2 text-sm rounded-full transition-colors duration-200 hover:bg-primary hover:text-white',
						activeSection === item.href ? 'bg-primary text-white' : '',
					]"
				>
					{{ item.name }}
				</NuxtLink>
			</nav>
			<div class="hidden lg:flex gap-2">
				<Button
					icon="fa7-brands:instagram"
					href="https://www.instagram.com/devworksstudio/"
					styles="!p-2 !w-10 !h-10 flex items-center justify-center"
					target="_blank"
				/>
				<Button
					icon="fa7-brands:facebook"
					href="https://www.facebook.com/devworksstudio"
					styles="!p-2 !w-10 !h-10 flex items-center justify-center"
					target="_blank"
				/>
			</div>
			<Sheet v-model:open="isOpen">
				<SheetTrigger as-child>
					<button
						class="lg:hidden bg-[#DBE2FA] p-2 flex items-center justify-center rounded-full text-primary/65"
					>
						<Icon
							name="ic:round-menu"
							size="2rem"
						/>
					</button>
				</SheetTrigger>

				<SheetContent
					side="left"
					class="w-full max-w-xs p-6 bg-white"
				>
					<div class="mt-12 flex flex-col gap-6 pl-2">
						<NuxtLink
							v-for="(item, index) in menu"
							:key="index"
							:to="item.href"
							class="text-xl text-gray-800 font-normal hover:text-primary hover:font-bold transition-all ease-linear duration-100"
							@click="
								() => {
									onNavClick(item, $event)
									isOpen = false
								}
							"
						>
							{{ item.name }}
						</NuxtLink>
					</div>

					<div class="flex flex-col gap-2 mt-8">
						<Button
							icon="fa7-brands:instagram"
							href="https://www.instagram.com/devworksstudio/"
							styles="flex items-center justify-center"
							target="_blank"
						>
							Instagram
						</Button>
						<Button
							icon="fa7-brands:facebook"
							href="https://www.facebook.com/devworksstudio"
							styles="flex items-center justify-center"
							target="_blank"
						>
							Facebook
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	</header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import menu from "~/assets/json/menu.json"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { useRoute, useRouter } from "vue-router"

const isOpen = ref(false)
const activeSection = ref("#hero")
let observer = null
const route = useRoute()
const router = useRouter()

function onNavClick(item, event) {
	// If clicking "Proyectos" and we are on home ("/"), smooth scroll to section
	if (item.href === "/projects" && route.path === "/") {
		event?.preventDefault()
		activeSection.value = "/projects"
		return
	} else if (item.href === "/projects" && route.path !== "/projects") {
		const section = document.querySelector("")
		if (section) {
			activeSection.value = "/projects"
		}
	}

	// From non-home routes, navigate to home with the correct hash
	if (
		item.href.startsWith("#") &&
		route.path !== "/" &&
		item.href !== "#hero"
	) {
		event?.preventDefault()
		router.push({ path: "/", hash: item.href })
		return
	} else if (item.href.startsWith("#") && route.path !== "/") {
		router.push({ path: "/" })
		activeSection.value = "#hero"
	}

	// Otherwise, proceed with normal navigation
}

onMounted(() => {
	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Map the home page `#proyectos` section to the `/projects` nav item
					if (entry.target.id === "proyectos") {
						activeSection.value = "/projects"
					} else {
						activeSection.value = `#${entry.target.id}`
					}
				}
			})
		},
		{ threshold: 0.5 }
	)

	menu.forEach((item) => {
		// Only observe sections that start with # (anchors on the same page)
		if (item.href.startsWith("#")) {
			const section = document.querySelector(item.href)
			if (section) observer.observe(section)
		}
		if (item.href === "/projects") {
			activeSection.value = "/projects"
		}
	})

	// Explicitly observe the home page projects section so that the
	// "/projects" menu item highlights while that section is in view
	const projectsSection = document.querySelector("#proyectos")
	if (projectsSection) observer.observe(projectsSection)
})

onBeforeUnmount(() => {
	if (observer) observer.disconnect()
})
</script>
