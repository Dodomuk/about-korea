import axios from 'axios';

export async function getAccessKey() {
  try {
    const res = await axios
      .get(
        `${import.meta.env.VITE_SGIS_URL}/OpenAPI3/auth/authentication.json`,
        {
          params: {
            consumer_key: import.meta.env.VITE_SGIS_SERVICE_ID,
            consumer_secret: import.meta.env.VITE_SGIS_API_KEY,
          },
        },
      )
      .then((response) => {
        console.log('응답부', response.data);
        return response.data.result.accessToken as string;
      });
    return res;
  } catch (error) {
    throw error;
  }
}
