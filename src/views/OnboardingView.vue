<template>
	<v-container
		fluid
		class="pa-0 d-flex align-center justify-center container-gap"
	>
		<div class="d-flex flex-column justify-center align-center">
			<div class="d-flex flex-column ga-6">
				<div>
					<h1 class="home-title text-left mb-2">Seja Bem vindo(a) ao Labs</h1>
					<h2 class="home-subtitle text-left text-grey-darken-1 text-h4">Laboratorio de oportunidades</h2>
				</div>
				<br>
				<div>
                    Voce ainda não cadastrou o seu Produto,
					<v-btn
						variant="text"
						class="font-weight-semibold"
						:to="{ name: 'product-create' }"
					>
						cadastre agora
					</v-btn><br />
                    Você ainda não cadastrou o sua Squad, cadastre agora.
					<v-btn
						variant="text"
						class="font-weight-semibold"
						:to="{ name: 'squad-create' }"
					>
						cadastre agora
					</v-btn><br />
				</div>
			</div>
		</div>
	</v-container>
</template>

<script setup>
import { useProductStore } from "@/stores/product";

const product = useProductStore();

product.getProducts();
console.log('product', import.meta.env.API_URL);

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
	font-family: "Merriweather", serif !important;
	font-size: 3.6rem;
}

.home-body {
	font-size: 1.4rem;
	font-weight: 300;
}
</style>
