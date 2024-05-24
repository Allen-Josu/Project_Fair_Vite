// request to register user

import { Base_URL } from "./baseUrl";
import { commonAPI } from "./commonApi";

export const registerUserAPI = async (reqBody) => {
    return await commonAPI("POST", `${Base_URL}/user/register`, reqBody, "");
};

export const userLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${Base_URL}/user/login`, reqBody, "");
};
