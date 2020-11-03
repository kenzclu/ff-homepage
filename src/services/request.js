import Axios from "axios"

const request = async (params) => {
    try {
        const { status, headers, data } = await Axios.request(params)
        return { status, headers, data }
    } catch (err) {
        throw err
    }
}

const post = async (params) => {
    return request({
        method: 'post',
        url: params.url,
        headers: params.headers,
        data: params.body
    })
}

export const sendEmail = async (data) => {
    const response = await post({
        url: '/send',
        body: data
    })
    return response.data
}
