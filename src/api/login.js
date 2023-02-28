import request from '@/utils/request'

export const loginByPhone = (phone, password) => request.get(`/login/cellphone?phone=${phone}&password=${password}`);
export const getCode = (phone) => request.get(`/captcha/sent?phone=${phone}`);
export const loginByEmail = (email, password) => request.get(`/login?email=${email}&password=${password}`)