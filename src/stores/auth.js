import { ref } from "vue";
import { defineStore } from "pinia";
import instance from "@/services/http.js";
import productService from "@/services/product.js";
import squadService from "@/services/squad.js";
import router from "@/router";
import { useSnackbarStore } from "@/stores/snackbar.js";

export const useAuthStore = defineStore('auth', () => {

    const axiosInstance = instance;

    const auth = ref({ name: '', email: '', uuid: '', iat: '' });
    const products = ref([]);
    const squads = ref([]);
    const useSnackbar = useSnackbarStore();

    async function login(user) {
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

                if (products.value.length > 0) {
                    await fetchSquads(products.value[0].uuid);
                }

                useSnackbar.showSnackbar({
                    text: 'Bem vindo! ' + auth.value.name,
                    color: 'success',
                    timeout: 3000
                })

                router.push('/onboarding');
            }

        } catch (error) {
            if (error.response?.status === 401) {
                alert(error.response.data)
            }
        }
    }

    async function loginByToken() {

        const token = localStorage.getItem('token');

        try {
            auth.value = parseJwt(token);

            await fetchProducts(auth.value.uuid);

            if (products.value.length > 0) {
                await fetchSquads(products.value[0].uuid);
            }

            useSnackbar.showSnackbar({
                text: 'Bem vindo! ' + auth.value.name,
                color: 'success',
                timeout: 3000
            })

        } catch (error) {
            if (error.response?.status === 401) {
                alert(error.response.data)
            }
        }
    }

    async function fetchProducts(uuid) {
        products.value = await productService.byUser(uuid)
        return products.value
    }

    function setProducts(products) {
        products.value = products
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
        $reset();
        router.push('/');
    }

    function $reset() {
        auth.value = { name: '', email: '', token: '' }
        products.value = []
        squads.value = []
    }

    function squadReset() {
        squads.value = []
    }

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        console.log('jsonPayload :', JSON.parse(jsonPayload));
        return JSON.parse(jsonPayload);
    }

    function getSquad() {
        if (squads.value.length === 0) {
            return false;
        }

        return squads.value[0];
    }

    function getProduct() {
        if (products.value.length === 0) {
            return false;
        }

        return products.value[0];
    }

    async function updateProfile(profile) {
        try {
            const response = await axiosInstance.put('/user/' + auth.value.uuid, profile);

            const data = response.data;

            alert(data.message)
        } catch (error) {
            alert(error.message)
        }
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
        squads,
        getSquad,
        getProduct,
        updateProfile,
        setProducts,
        squadReset,
        loginByToken
    }

},
    {
        persist: true
    }
)
