import {LoginFormProps} from "../pages/SignIn/components/Login";
import {User, UserState} from "../store/ducks/user/userState";
import {instance} from "../core/axios";
import {RegisterFormProps} from "../pages/SignIn/components/Register";

type Response<T> = {
    data: T
    status: string
}

export const AuthApi = {
    async signIn(formData: LoginFormProps): Promise<UserState['data']> {
        const { data } = await instance.post<Response<UserState['data']>>('/auth/signin', { username: formData.email, password: formData.password}, {responseType: "json"})
        return data.data
    },
    async signUp(formData: RegisterFormProps): Promise<UserState['data']> {
        const { data } = await instance.post<Response<UserState['data']>>('/auth/signup',
            {
                fullname: formData.fullname,
                username: formData.username,
                email: formData.email,
                password: formData.password,
                rePassword: formData.rePassword
            }, {responseType: "json"})
        return data.data
    },
    async getMe(): Promise<UserState['data']> {
        const { data } = await instance.get<Response<UserState['data']>>('/users/me')
        return data.data
    },
    async getUserInfo(userId: string): Promise<Response<User>> {
        const { data } = await instance.get<Response<User>>('/users/' + userId);
        return data;
    },
    async getAllUser() {
        const { data } = await instance.get('/users');
        return data.data;
    },
}