import { ref } from "vue";
import { defineStore } from "pinia";
import instance from "@/services/http.js";
import productService from "@/services/product.js";
import squadService from "@/services/squad.js";
import router from "@/router";

export const useAuthStore = defineStore('auth', () => {

    const axiosInstance = instance;

    const auth = ref({ name: '', email: '', uuid: '', iat: '' });
    const products = ref([]);
    const squads = ref([]);

    async function login( user ) {
        try {
            const response = await axiosInstance.post('/login', user);
            const data = response.data;

            if (data.error) {
                alert(data.error)
                return;
            } else {
                const token = data.token;

                localStorage.setItem('token', token);

                auth.value = parseJwt(token);

                await fetchProducts(auth.value.uuid);

                await fetchSquads(products.value[0].uuid);

                router.push('/onboarding');
            }

        } catch (error) {
            console.log('error :', error);
            if (error.response?.status === 401){
                alert(error.response.data)
            }
        }
    }

    async function fetchProducts(uuid) {
        products.value = await productService.byUser(uuid)
        return products.value
    }

    async function fetchSquads(uuid) {
        squads.value = await squadService.fetchBy(uuid)
        return squads.value
    }

    function getName() {
        return auth.value.name;
    }

    function getUuid() {
        return auth.value.uuid;
    }

    async function logout() {
        localStorage.removeItem('token');
        auth.value = { name: '', email: '', token: '' };
        router.push('/');
    }

    function $reset() {
        auth.value = { name: '', email: '', token: '' }
    }

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        console.log('jsonPayload :', JSON.parse(jsonPayload));
        return JSON.parse(jsonPayload);
    }

    return { 
        login, 
        logout, 
        auth, 
        getName, 
        getUuid, 
        $reset, 
        products,
        fetchProducts,
        fetchSquads, 
        squads
    }

},
    { 
        persist: true 
    }
)
