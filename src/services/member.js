import axiosInstance from '@/services/http.js'

function headers () {
    const token = localStorage.getItem('token');

    return {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}

async function fetchBy(uuidSquad) {
    try {
        const response = await axiosInstance.get(
            '/squad/' + uuidSquad + '/members', 
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

async function create(uuidSquad) {
    try {
        const response = await axiosInstance.post(
            '/squad/' + uuidSquad + '/members', 
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

async function update(uuidSquad, uuidMember) {
    try {
        const response = await axiosInstance.put(
            '/squad/' + uuidSquad + '/members/' + uuidMember, 
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

async function del(uuidSquad, uuidMember) {
    try {
        const response = await axiosInstance.get(
            '/squad/' + uuidSquad + '/members/' + uuidMember, 
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
    del,
    create, 
    update
};
