import { ref } from "vue";
import { defineStore } from "pinia";
import instance from "@/services/http.js";
import router from "@/router";

export const useAuthStore = defineStore('auth', () => {

    const axiosInstance = instance;

    const auth = ref({ name: '', email: '', token: '' });

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

                user.value = data;
                auth.value = parseJwt(token);
                // user.value =  { email: 'teste', password: '', token: token };
                // console.log('token :', parseJwt(token));

                router.push('/onboarding');
            }

        } catch (error) {
            console.log('error :', error);
            if (error.response?.status === 401) {
                alert(error.response.data)
            }
        }
    }

    function getName() {
        return auth.value.name;
    }

    async function logout() {
        localStorage.removeItem('token');
        auth.value = { name: '', email: '', token: '' };
        router.push('/login');
    }

    function $reset() {
        auth.value = { name: '', email: '', token: '' }
    }

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }

    async function updateProfile(attProfile) {
        try {
            const response = await axiosInstance.put('/user/' + auth.value.uuid, attProfile);
            const data = response.data;

            if (data.error) {
                alert(data.error)
                return;
            } else if (data.message) {
                alert(data.message)
            }
            else {
                alert('Perfil atualizado com sucesso!')
            }
        } catch (error) {
            console.log('error :', error);
            if (error.response?.status === 401) {
                alert(error.response.data)
            }
        }
    }

    return { login, logout, auth, getName, $reset, updateProfile }

},
    {
        persist: true
    }
)
