import axios from 'axios'

const apiServer = "http://localhost:3030"

export default function API(url, method="GET", data={}) {
    axios({
        method: method,
        url: apiServer + url,
        data: data,
    }).then((res)=> {
        // console.log(res.data)
    }).catch((error) => {
        if (error.response) {
            console.log("API Error:", error.response.data);
            console.log("API Error:", error.response.status);
            console.log("API Error:", error.response.headers);
        } else if (error.request) {
            console.log("API Error:", error.request);
        } else {
            console.log("API Error:", error.message);
        }
        console.log("API Error:", error.config);
    });
}