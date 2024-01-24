<template>
	<v-app>
		<v-app-bar
			color="transparent"
			app
			elevation="4"
		>
			<div class="w-100 d-flex align-center justify-space-between main-container">
				<a
					class="d-flex align-center logo"
					@click="navigateToHome"
				>
					<v-img
						height="36"
						width="36"
						:src="imgUrl"
						alt="Logo SouJunior"
					/>
					<h1 class="text-h5 font-weight-bold font-semibold primary-color ml-3 logo-text">SouJunior Labs</h1>
				</a>
				<div class="d-flex align-center ga-2">
					<v-icon
						v-if="currentTheme.dark"
						variant="text"
						icon="mdi-weather-night"
						size="large"
						color="purple-darken-1"
						class="mr-8 cursor-pointer"
						@click="toggleTheme"
					/>
					<v-icon
						v-if="!currentTheme.dark"
						variant="text"
						icon="mdi-white-balance-sunny"
						size="large"
						color="orange"
						class="mr-8 cursor-pointer"
						@click="toggleTheme"
					/>
					<v-btn
						variant="text"
						class="font-weight-semibold"
						:to="{ name: 'home' }"
					>
						Home
					</v-btn>
					<v-btn
						v-if="!user.getName"
						variant="text"
						class="font-weight-semibold"
						:to="{ name: 'registry' }"
					>
						Registro
					</v-btn>
					<v-btn
						v-if="!user.getName"
						variant="text"
						class="font-weight-semibold"
						:to="{ name: 'login' }"
					>
						Login
					</v-btn>
					<v-btn
						v-if="user.getName"
						variant="text"
						class="font-weight-semibold"
						:to="{ name: 'products' }"
					>
						Produtos
					</v-btn>
					<v-btn
						v-if="user.getName"
						variant="text"
						class="font-weight-semibold"
						:to="{ name: 'squads' }"
					>
						Squads
					</v-btn>
					<v-menu
						v-if="user.getName"
						open-on-hover
					>
						<template v-slot:activator="{ props }">
							<v-btn
								variant="text"
								class="font-weight-semibold"
								v-bind="props"
							>
								{{ user.getName }}
								<v-icon icon="$vuetify"></v-icon>
								<v-icon right>mdi-chevron-down</v-icon>
							</v-btn>
						</template>

						<v-list>
							<v-list-item
								link
								:to="{ name: 'profile' }"
							>
								<v-list-item-title>Profile</v-list-item-title>
							</v-list-item>
							<v-list-item
								link
								:to="{ name: 'home' }"
							>
								<v-list-item-title>Logout</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
			</div>
		</v-app-bar>

		<transition
			name="fade"
			mode="out-in"
		>
			<v-main
				class="d-flex flex-grow-1 main-container"
				style="margin-top: 64px"
			>
				<RouterView />
			</v-main>
		</transition>
	</v-app>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, RouterView } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useTheme } from 'vuetify';
import imgUrl from '@/assets/logo-green-transparent.png';

const router = useRouter();
const theme = useTheme();
const currentTheme = computed(() => theme.current.value);
const { user } = useUserStore();

const navigateToHome = () => {
	router.push({ name: 'home' })
};

function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
	localStorage.setItem('theme', theme.global.name.value);
}
</script>

<style lang="scss">
.main-container {
	margin-left: 240px;
	margin-right: 240px;
	padding: 0;

	@media (max-width: 1600px) {
		margin-left: 120px;
		margin-right: 120px;
	}
}

.primary-color {
	color: #06d7a0;
}

.logo {
	cursor: pointer;
	transition: ease-in-out 0.2s;

	&:hover {
		filter: brightness(1.25);
		transition: ease-in-out 0.2s;
	}
}

.drag-none {
	user-select: none;
	-moz-drag-over: none;
	-webkit-user-drag: none;
}

.logo-text {
	font-family: "Merriweather", serif !important;
}
</style>
