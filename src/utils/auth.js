export function getToken() {
    return sessionStorage.getItem('token');
}

export function setToken(token) {
    return sessionStorage.setItem('token', token);
}
