import axios from 'axios';
import { selector } from 'recoil';

let isApiCall = false;

export const accessKey = selector({
  key: 'accessKey',
  get: async ({ get }) => {
    try {
      if (!isApiCall) {
        const res = axios
          .get(
            `${
              import.meta.env.VITE_SGIS_URL
            }/OpenAPI3/auth/authentication.json`,
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
        isApiCall = true;
        return res;
      }
    } catch (error) {
      throw error;
    }
  },
});