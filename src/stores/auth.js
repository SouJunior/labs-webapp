import { ref } from "vue";
import { defineStore } from "pinia";
import instance from "@/services/http.js";
import productService from "@/services/product.js";
import squadService from "@/services/squad.js";
import router from "@/router";
import { useSnackbarStore } from "@/stores/snackbar.js";

export const useAuthStore = defineStore('auth', () => {

    const axiosInstance = instance;

    const auth = ref({ name: '', email: '', cidade: '', estado:'', linkedin:'', discord:'',  uuid: '', iat: '' });
    const products = ref([]);
    const squads = ref([]);
    const useSnackbar = useSnackbarStore();

    async function login(user) {
        try {
            const response = await axiosInstance.post('/login', user);
            const data = response.data;

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: "error",
                    timeout: 3000,
                  });
                  return;
            } else {
                const token = data.token;

                const user = data.user;

                localStorage.setItem('token', token);

                localStorage.setItem('user', JSON.stringify(user));

                auth.value = user;

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
                useSnackbar.showSnackbar({
                    text: error.response?.data?.message || error.message,
                    color: "error",
                    timeout: 3000,
                });
            }
        }
    }

    async function loginByToken() {
        const user = localStorage.getItem('user');

        try {
            auth.value = JSON.parse(user);

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
                useSnackbar.showSnackbar({
                    text: error.response?.data?.message || error.message,
                    color: "error",
                    timeout: 3000,
                });
            }

            localStorage.removeItem('token');
            localStorage.removeItem('user');

            router.push('/');
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
        localStorage.removeItem('user');
        $reset();
        router.push('/');
    }

    function $reset() {
        auth.value = { name: '', email: '', cidade: '', estado: '', linkedin: '', discord: '', uuid: '', iat: '' };
        products.value = [];
        squads.value = [];
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
            const updatedUser = profile;
    
            auth.value = { ...auth.value, ...updatedUser };

            localStorage.setItem('user', JSON.stringify(auth.value));
    
            useSnackbar.showSnackbar({
                text: response.data.message,
                color: "success",
                timeout: 3000,
            });
        } catch (error) {
            useSnackbar.showSnackbar({
                text: error.response?.data?.error || error.message,
                color: "error",
                timeout: 3000,
            });
        }
    }      

    function getRole() {
        return auth.value.permission.charAt(0).toUpperCase() + auth.value.permission.slice(1)
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
        loginByToken,
        getRole
    }

},
    {
        persist: true
    }
)
