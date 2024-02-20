<template>

        <suspense>
            <template #default>
                <ProductList />
            </template >
            <template #fallback>
                <div>Loading...</div>
            </template>
        </suspense>
</template>

<script setup>
import ProductList from '@/components/ProductList.vue'
</script>
