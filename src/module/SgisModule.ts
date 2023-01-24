import axios from "axios";

const sgisJavascriptApi = async() => { 
    try {
        const response = await axios.post('https://sgisapi.kostat.go.kr/OpenAPI3/auth/javascriptAuth.json', {
            consumer_key: process.env.REACT_APP_SERVICE_ID 
        });
    } catch (err) { 
        console.error(err);
    }
    
}

export { sgisJavascriptApi }
