const TOKEN_KEY = 'session-token';
const TOKEN_EXPIRY_KEY = 'token-expiry';
const REFRESH_TOKEN_KEY = 'refresh-token';
const TOKEN_TYPE_KEY = 'token-type';

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const getToken = () => localStorage.getItem(TOKEN_KEY) || getCookie(TOKEN_KEY);

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const setToken = (token, refreshToken, expiresIn = 3600, tokenType = 'Bearer') => {
    if (!token) return;

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    const expiryTime = Date.now() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_TYPE_KEY, tokenType);
    localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());

    if (refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }

    setCookie(TOKEN_KEY, token, {
        secure: true,
        sameSite: 'Strict',
        path: '/',
        expires: new Date(expiryTime)
    });
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const clearAuthData = () => {
    [TOKEN_KEY, TOKEN_EXPIRY_KEY, REFRESH_TOKEN_KEY, TOKEN_TYPE_KEY].forEach(key => localStorage.removeItem(key));
    deleteCookie(TOKEN_KEY);
};

export const isAuthenticated = () => !!getToken() && isTokenValid();

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const isTokenValid = () => {
    const expiryTime = localStorage.getItem(TOKEN_EXPIRY_KEY);
    return expiryTime ? Date.now() < parseInt(expiryTime) : false;
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const getAuthHeader = () => {
    const token = getToken();
    const tokenType = localStorage.getItem(TOKEN_TYPE_KEY) || 'Bearer';
    return token ? `${tokenType} ${token}` : '';
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const getCookie = (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const setCookie = (name, value, options = {}) => {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (options.expires) cookie += `; expires=${options.expires.toUTCString()}`;
    if (options.path) cookie += `; path=${options.path}`;
    if (options.secure) cookie += '; secure';
    if (options.sameSite) cookie += `; samesite=${options.sameSite}`;
    document.cookie = cookie;
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const deleteCookie = (name) => {
    document.cookie = `${name}=; max-age=0; path=/`;
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default {
    getToken,
    getCookie,
    setToken,
    clearAuthData,
    getAuthHeader,
    isAuthenticated,
    isTokenValid
};
