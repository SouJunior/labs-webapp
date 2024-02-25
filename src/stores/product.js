import { ref } from 'vue'
import { defineStore } from 'pinia'
// import axiosInstance from '@/services/http.js'
import productRequest from '@/services/product.js'
import { useAuthStore } from './auth.js'
import router from "@/router";

export const useProductStore = defineStore('product', () => {
    const tt  = useAuthStore()
    const products = ref([])
    const product = ref({})

    async function fetchProducts() {
        products.value = await productRequest.fetchProducts()
        return products.value
    }

    async function getProductsByUuid() {
        return products.value.filter((product) => {

            return product.owner_uuid == tt.getUuid()
        })
    }

    async function getProduct(uuid) {
        product.value = await productRequest.show(uuid)

        return product.value
    }

    async function byUser(uuid) {
        products.value = await productRequest.byUser(uuid)
        return products.value
    }

    async function del(uuid) {
        products.value = await productRequest.del(uuid)
        return products.value
    }

    async function create(product) {
        console.log('product :', product);
         await productRequest.create(product)
        // return products.value
    }

    async function update(product) {
        console.log('product update:', product);
        const p =  await productRequest.update(product)
        console.log('product updated:', p);
        if (p.statusCode == 200) {
            tt.fetchProducts(tt.getUuid())

            router.push('/product/' + product.uuid);
        }
        // return products.value
    }

    return { 
        products, 
        fetchProducts,
        getProductsByUuid,
        getProduct,
        product,
        byUser,
        del,
        create,
        update
    }
}, 
    { 
        persist: true 
    }
)
