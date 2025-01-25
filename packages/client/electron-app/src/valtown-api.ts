import axios, { AxiosResponse } from 'axios';

// Define the base URL for the Valtown API
const BASE_URL = 'https://api.valtown.com';

// Function to handle API errors
const handleApiError = (error: any): void => {
    if (axios.isAxiosError(error)) {
        console.error('API Error:', error.response?.data || error.message);
    } else {
        console.error('Unexpected Error:', error);
    }
};

// Function to get data from a specific endpoint
export const getDataFromEndpoint = async (endpoint: string): Promise<any> => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};

// Function to post data to a specific endpoint
export const postDataToEndpoint = async (endpoint: string, data: any): Promise<any> => {
    try {
        const response: AxiosResponse = await axios.post(`${BASE_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};

// Additional functions for other HTTP methods (PUT, DELETE) can be added similarly
