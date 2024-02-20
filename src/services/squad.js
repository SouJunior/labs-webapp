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

export default {
    fetchBy,
};
