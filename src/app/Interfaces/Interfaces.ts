export interface User {
    username: String;
    email: String;
    token: String;
}
export interface RegisterUser {
    email: String;
    password: String;
    confirm_password: String;
}
export interface LoginUser {
    email: String;
    password: String;
}
export interface BasicResponse {
    success: String;
    message: String;
}
