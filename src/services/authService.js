import { post, get } from '../api/api';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function login(email, password) {
    return await post(endpoints.login, { email, password });
};

export async function register(email, password) {
    return await post(endpoints.register, { email, password });
};

export function logout() {
    get(endpoints.logout);
};