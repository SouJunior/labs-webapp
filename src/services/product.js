import axiosInstance from '@/services/http.js'
import productService from '@/services/product.js'

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

async function create(product) {
    console.log('service :', product);
    try {
        const response = await axiosInstance.post(
            '/product', 
            { 
                name: product.name,
                description: product.description,
                owner_uuid: product.owner_uuid,
            },
            { headers: headers() }
        );

        let data = response.data;

        if (data.error) {
            // alert(data.error)
            return;
        } else {
            return data = { ...data, statusCode: response.status }
        }
    }
    catch (error) {
            alert(error)
    }
}

async function update(product) {
    console.log('service update:', product);
    try {
        const response = await axiosInstance.put(
            '/product/' + product.uuid, 
            { 
                name: product.name,
                description: product.description,
            },
            { headers: headers() }
        );

        let data = response.data;

        if (data.error) {
            // alert(data.error)
            return;
        } else {
            return data = { ...data, statusCode: response.status }
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
        const response = await axiosInstance.delete(
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
    del,
    create,
    update
};
