import axiosInstance from "@/utils/axiosInstance";

export const getSellerProducts = () => axiosInstance.get('/seller/products');
export const getSellerDashboard = () => axiosInstance.get('/seller/dashboard');
export const getSellerEarnings = () => axiosInstance.get('/seller/earnings');
export const getSellerOrders = () => axiosInstance.get('/seller/orders');

export const updateOrderedItemStatus = (orderId, itemId, status) =>
  axiosInstance.patch(`/seller/orders/${orderId}/item/${itemId}/status`, { status });

export const getSellerProfile = () => axiosInstance.get('/seller/profile');
export const updateSellerProfile = (data) => axiosInstance.patch('/seller/profile', data);

export const deleteProduct = (id) => axiosInstance.delete(`/products/${id}`);
export const addProduct = (formData) => axiosInstance.post('/products', formData);
export const updateProduct = (id, formData) => axiosInstance.patch(`/products/${id}`, formData);