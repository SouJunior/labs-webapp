import axiosInstance from '@/services/http.js'

function headers () {
    const token = localStorage.getItem('token');

    return {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}


async function fetchBy(uuid) {
    try {
        const response = await axiosInstance.get(
            '/squads/' + uuid, 
            { headers: headers() }
        );

        const data = response.data;

        if (data.error) {
            alert(data.error)
            return;
        } else {
            return data
        }
    }
    catch (error) {
        alert(error)
    }
}

async function post(squad) {
    try {
        const response = await axiosInstance.post(
            '/squad', 
            squad,
            { headers: headers() }
        );

        const data = response.data;

        if (data.error) {
            alert(data.error)
            return;
        } else {
            return data
        }
    }
    catch (error) {
        alert(error)
    }
}

async function put(squad) {
    try {
        const response = await axiosInstance.put(
            '/squad/' + squad.uuid, 
            squad,
            { headers: headers() }
        );

        const data = response.data;

        if (data.error) {
            alert(data.error)
            return;
        } else {
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
            '/squad/' + uuid, 
            { headers: headers() }
        );

        const data = response.data;

        if (data.error) {
            alert(data.error)
            return;
        } else {
            return data
        }
    }
    catch (error) {
        alert(error)
    }
}

export default {
    fetchBy,
    post,
    del,
    put
};
