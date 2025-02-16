import { apiClient } from "./client";
import {AdFormData, AdItem} from "@/types/adTypes";
import {AxiosResponse} from "axios";

export const getAllAds = async (): Promise<AdItem[]> => {
    const response: AxiosResponse<AdItem[]> = await apiClient.get("/items");
    return response.data;
};

export const getAdById = async (id: number): Promise<AdItem> => {
    const response: AxiosResponse<AdItem> = await apiClient.get(`/items/${id}`);
    return response.data;
};

export const createAd = async (ad: AdFormData): Promise<AdItem> => {
    const response: AxiosResponse<AdItem> = await apiClient.post("/items", ad);
    return response.data;
};

export const updateAd = async (id: number, ad: Partial<AdFormData>): Promise<AdItem> => {
    const response: AxiosResponse<AdItem> = await apiClient.put(`/items/${id}`, ad);
    return response.data;
};

export const deleteAd = async (id: number): Promise<void> => {
    await apiClient.delete(`/items/${id}`);
};