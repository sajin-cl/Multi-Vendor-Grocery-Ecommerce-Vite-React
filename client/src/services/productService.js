import axiosInstance from "@/utils/axiosInstance";


export const getAllProducts = (params) => axiosInstance.get('/products', { params });
export const getAllCategories = () => axiosInstance.get('/categories');
export const getAllBrands = () => axiosInstance.get('/brands');

export const getProductById = (id) => axiosInstance.get(`/products/${id}`);

