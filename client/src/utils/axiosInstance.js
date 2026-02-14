import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});



axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.authorization = `Bearer ${token}`;

    return config;
  },
  (error) => { return Promise.reject(error) }
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = "something went wrong!";

    if (!window.navigator.onLine) {
      message = "Check your internet connection"
    }
    else if (!error.response) {
      message = "Server is down. Please try again later!";
    }
    else if (error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      message = "Session expired. Please login again!";
    }
    else {
      message = error.response.data?.error || "Server Error!";
    }
    return Promise.reject(message);
  }
);

export default axiosInstance;