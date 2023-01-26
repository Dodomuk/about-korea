import axios from "axios";

const sgisJavascriptApi = async() => { 
    try {
        const response = await axios.post('/OpenAPI3/auth/authentication.json', {
            consumer_key: import.meta.env.VITE_SGIS_SERVICE_ID,
            consumer_secret: ''
        });
    } catch (err) { 
        console.error(err);
    }
    
}

export { sgisJavascriptApi }
