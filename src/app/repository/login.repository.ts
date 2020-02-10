import { LoginRequest } from '../models/request/login.request';

export interface LoginRepository {
    tryLogin(login: LoginRequest);
}