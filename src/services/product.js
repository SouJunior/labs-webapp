import axiosInstance from '@/services/http.js'

function headers () {
    const token = localStorage.getItem('token');

    return {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}


async function fetchProducts() {
    try {
        const response = await axiosInstance.get(
            '/products/', 
            { headers: headers() }
        );

        const data = response.data;

        if (data.error) {
            alert(data.error)
            return;
        } else if (data.message) {
            alert(data.message)
        }
        else {
            return data
        }
    }
    catch (error) {
            alert(error)
    }
}

async function show (uuid) {
    try {
        const response = await axiosInstance.get(
            '/product/' + uuid, 
            { headers: headers() }
        );

        const data = response.data;

        if (data.error) {
            alert(data.error)
            return;
        }
        else {
            return data
        }
    }
    catch (error) {
        alert(error)
    }
}

async function byUser(uuid) {
    try {
        const response = await axiosInstance.get(
            '/products/' + uuid, 
            { headers: headers() }
        );

        const data = response.data;

        if (data.error) {
            alert(data.error)
            return;
        }
        else {
            return data
        }
    }
    catch (error) {
        alert(error)
    }
}

async function del(uuid) {
    try {
        const response = await axiosInstance.get(
            '/product/' + uuid, 
            { headers: headers() }
        );

        const data = response.data;

        if (data.error) {
            alert(data.error)
            return;
        }
        else {
            return data
        }
    }
    catch (error) {
        alert(error)
    }
}

export default {
    fetchProducts,
    show,
    byUser,
    del
};
