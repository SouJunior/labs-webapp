<template>
    <v-container class="d-flex justify-center align-center" style="height: 100%;">
        <suspense>
        <template #default>
            <ProductShow />
        </template >
        <template #fallback>
            <div>Loading...</div>
        </template>
        </suspense>
    </v-container>
</template>

<script setup>
import ProductShow from '@/components/ProductShow.vue'
</script>
