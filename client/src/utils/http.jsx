import api from './axiosInstance';
import { getAuthHeader } from './authUtils';

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const handleResponse = async (promise) => {
    try {
        const response = await promise;
        return {
            response,
            json: response.data,
            ok: response.status >= 200 && response.status < 300
        };
    } catch (error) {
        return {
            response: error.response,
            json: error.response?.data || {},
            ok: false
        };
    }
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const createHeaders = (type = "json", customHeaders = {}) => {
    const headers = {
        Authorization: getAuthHeader(),
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ...customHeaders
    };

    const contentTypes = {
        formData: "multipart/form-data",
        json: "application/json",
        xml: "application/xml",
        text: "text/plain",
        urlencoded: "application/x-www-form-urlencoded"
    };

    if (contentTypes[type]) {
        headers["Content-Type"] = contentTypes[type];
    }
    return headers;
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const request = {
    GET: (url, type) => handleResponse(api.get(url, { headers: createHeaders(type) })),
    POST: (url, info, type) => handleResponse(api.post(url, info, { headers: createHeaders(type) })),
    PUT: (url, info, type) => handleResponse(api.put(url, info, { headers: createHeaders(type) })),
    PATCH: (url, info, type) => handleResponse(api.patch(url, info, { headers: createHeaders(type) })),
    DELETE: (url, type) => handleResponse(api.delete(url, { headers: createHeaders(type) }))
};

export default request;
