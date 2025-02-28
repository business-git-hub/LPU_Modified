import axios from 'axios';

// ✅ Get API base URLs from environment variables
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const getApiBaseUrls = () => {
    return import.meta.env.VITE_API_BASE_URL?.split(",").map(url => url.trim()) || [];
};

// ✅ Function to create an Axios instance
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const createAxiosInstance = (baseURL) => {
    return axios.create({
        baseURL: baseURL,
        withCredentials: import.meta.env.VITE_USE_CREDENTIALS === 'true',
    });
};

// ✅ Array of API URLs
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const apiUrls = getApiBaseUrls();
let currentApiIndex = 0;
let api = createAxiosInstance(apiUrls[currentApiIndex]);

// ✅ Retry logic: Switch API URL if one fails
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
api.interceptors.response.use(
    response => response,
    async (error) => {
        if (error.response && error.response.status >= 500) {
            currentApiIndex = (currentApiIndex + 1) % apiUrls.length; // Rotate to the next API URL
            console.warn(`Switching API to: ${apiUrls[currentApiIndex]}`);
            api = createAxiosInstance(apiUrls[currentApiIndex]);
        }
        return Promise.reject(error);
    }
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default api;
