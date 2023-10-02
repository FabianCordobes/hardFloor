// services/priceService.js
import axios from 'axios';

const apiUrl = 'http://localhost:3001/prices';

export const getAllPrices = () => {
	return axios.get(apiUrl);
};

export const createPrice = (newData) => {
	return axios.post(apiUrl, newData);
};

export const updatePrice = (id, updatedData) => {
	return axios.put(`${apiUrl}/${id}`, updatedData);
};

export const deletePriceById = async (id) => {
	try {
		const response = await axios.delete(`${apiUrl}/${id}`);
		return response.data;
	} catch (error) {
		throw error.message;
	}
};
