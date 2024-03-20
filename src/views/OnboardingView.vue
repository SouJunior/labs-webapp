<template>
	<v-container
		fluid
		class="pa-0 d-flex align-center justify-center container-gap"
	>
        <suspense>
            <template #default>
                <OnboardingPage />
            </template >
            <template #fallback>
                <v-progress-circular color="primary" indeterminate></v-progress-circular>
            </template>
        </suspense>
	</v-container>
</template>

<script setup>
import  OnboardingPage  from '@/components/OnboardingPage.vue';


</script>

<style scoped>
.floating {
	animation: float 6s ease-in-out infinite;
	filter: drop-shadow(0 0 15px #06d7a033);
}

@keyframes float {

	0%,
	100% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-20px);
	}
}

.container-gap {
	gap: 120px;
}

.home-title {
	font-family: "Radio Canada", serif !important;
	font-size: 3.6rem;
}

.home-body {
	font-size: 1.4rem;
	font-weight: 300;
}
</style>
