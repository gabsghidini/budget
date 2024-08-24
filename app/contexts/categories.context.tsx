"use client";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/axios";
import * as i from "../interfaces/contexts";

export const CategoriesContext = createContext({} as i.CategoriesContextValue);

export const CategoriesProvider = ({ children }: i.Children) => {
	const [categories, setCategories] = useState<i.Category[]>([]);

	useEffect(() => {
		readCategories();
	}, []);

	const createCategory = async (category: i.Category): Promise<void> => {
		try {
			const response = await api.post("/categories", category);
			setCategories((prevCategories) => [
				...prevCategories,
				response.data,
			]);
		} catch (error) {
			console.error(error);
		}
	};

	const readCategories = async (): Promise<void> => {
		try {
			const response = await api.get("/categories");
			setCategories(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const updateCategory = async (category: i.Category): Promise<void> => {
		try {
			const response = await api.put(
				`/categories/${category.id}`,
				category
			);
			setCategories((prevCategories) =>
				prevCategories.map((c) =>
					c.id === category.id ? response.data : c
				)
			);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteCategory = async (id: number): Promise<void> => {
		try {
			await api.delete(`/categories/${id}`);
			setCategories((prevCategories) =>
				prevCategories.filter((category) => category.id !== id)
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<CategoriesContext.Provider
			value={{
				categories,
				createCategory,
				readCategories,
				updateCategory,
				deleteCategory,
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};
