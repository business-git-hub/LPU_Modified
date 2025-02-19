import axios from 'axios';

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: import.meta.env.VITE_USE_CREDENTIALS === 'true',
});

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default api;

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }