import axios, { AxiosInstance } from "axios";

// Create an instance of Axios
export const api: AxiosInstance = axios.create({
	baseURL: "http://localhost:3000/api/",
	timeout: 50000, // Set a timeout value in milliseconds
	headers: {
		Authorization: "Bearer dasdasdadsd",
	},
});
