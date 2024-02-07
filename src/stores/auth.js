import { defineStore } from "pinia";
import instance from "@/services/http.js";
import router from "@/router";
export const useAuthStore = defineStore('auth', () => {

    const axiosInstance = instance;

    async function login( user ) {
        try {
            const response = await axiosInstance.post('/login', user
            );
            const data = response.data;

            // se houver um retorno de erro, imprime o erro e cancela o login
            if (data.error) {
                alert(data.error)
                return;
            } else {
                // salva o token no localstorage
                localStorage.setItem('token', data.token);
                // redireciona para a página de produtos
                router.push('/products');
            }

        } catch (error) {
            // imprime para o usuário o erro de validação
            if (error.response.status === 401 || error.response.status === 422 || error.response.status === 404 || error.response.status === 500){
                alert(error.response.data)
            }
        }
    }

    async function logout() {
        localStorage.removeItem('token');
        router.push('/login');
    }

    return { login, logout }

})