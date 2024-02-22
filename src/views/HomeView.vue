<template>
	<v-container
		fluid
		class="pa-0 d-flex align-center justify-center container-gap"
	>
		<div class="d-flex flex-column justify-center align-center">
			<div class="d-flex flex-column ga-6">
				<div>
					<h1 class="home-title text-left mb-2">SouJunior Labs</h1>
					<h2 class="home-subtitle text-left text-grey-darken-1 text-h4">Laboratorio de oportunidades.</h2>
				</div>
				<br>
				<div>
					<p class="home-body text-left">Em um mundo onde a tecnologia se tornou
						<br> uma ferramenta indispensável, temos uma missão única:
						<br> utilizar o poder do desenvolvimento de software
						<br> para impulsionar ações filantrópicas.
						<br><br> Nosso projeto social, "Tecnologia para o Bem",
						<br> é dedicado a criar soluções inovadoras de software
						<br> que atendam às necessidades das organizações
						<br> sem fins lucrativos e comunidades carentes.
					</p>
				</div>
			</div>
		</div>
		<div class="d-flex flex-column justify-center align-center">
			<img
				:src="imgUrl"
				width="100%"
				height="100%"
				alt="Logo SouJunior Labs"
				class="drag-none floating"
			>
		</div>
	</v-container>
</template>

<script setup>
import imgUrl from '@/assets/logo-green-transparent.png';
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
