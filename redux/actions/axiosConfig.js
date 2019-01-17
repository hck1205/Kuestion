export default function axiosConfig(method, url, key = "", name = "", data = "") {
    let config = {
        url: url,
        method: method,
        proxy: {
            host: '127.0.0.1',
            port: 3000,
        },
        responseType: 'json',
        data: data,
    }

    return config
}