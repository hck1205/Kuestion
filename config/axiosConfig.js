import serverConfig from './serverConfig'

const { ADDR, PORT } = serverConfig

export default function axiosConfig(method, url, data = "", key = "", name = "") {
    let config = {
        url: url,
        method: method,
        proxy: {
            host: ADDR,
            port: PORT,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Methods': 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'expatik-api-key': key,
            'expatik-api-name': name,
        },
        responseType: 'json',
        data: data,
    }

    return config
}
