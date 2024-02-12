import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axiosInstance from '@/services/http.js'

export const useProductStore = defineStore('product', () => {

    async function getProducts() {
        try {
            const response = await axiosInstance.get('/products/');
            const data = response.data;

            if (data.error) {
                alert(data.error)
                return;
            } else if (data.message) {
                alert(data.message)
            }
            else {
                products.value = data
            }
        }
        catch (error) {
            if (error.response.status === 401 || error.response.status === 422 || error.response.status === 404 || error.response.status === 500) {
                alert(error.response.data)
            }
        }
    }

    const products = ref({
        name: '',
        email: ''
    })


    return { 
        products, 
        getProducts
    }
}, 
    { 
        persist: true 
    }
)
