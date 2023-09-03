//funciones
import instanceHTTP from "./instanceApi";

export const getAllUsers = (idPage) => {
    return instanceHTTP.get(`users?page=${idPage}`);
};

export const getUserDetail = (id) => {
    return instanceHTTP.get(`users/${id}`);
};