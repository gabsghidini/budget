"use client";
import { createContext, useEffect, useMemo, useState } from "react";
import { api } from "../services/axios";
import * as i from "../interfaces/contexts";

export const EntriesContext = createContext({} as i.EntriesContextValue);

export const EntriesProvider = ({ children }: i.Children) => {
	const [entries, setEntries] = useState<i.Entry[]>([]);

	useEffect(() => {
		readEntries();
	}, []);

	const createEntry = async (entry: i.Entry): Promise<void> => {
		try {
			const response = await api.post("/entries", entry);
			setEntries((prevEntries) => [...prevEntries, response.data]);
		} catch (error) {
			console.error(error);
		}
	};

	const readEntries = async (): Promise<void> => {
		try {
			const response = await api.get("/entries");
			setEntries(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const updateEntry = async (entry: i.Entry): Promise<void> => {
		try {
			const response = await api.put(`/entries/${entry._id}`, entry);
			setEntries((prevEntries) =>
				prevEntries.map((e) =>
					e._id === entry._id ? response.data : e
				)
			);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteEntry = async (id: string): Promise<void> => {
		try {
			await api.delete(`/entries?id=${id}`);

			setEntries((prevEntries) =>
				prevEntries.filter((entry) => entry._id !== id)
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<EntriesContext.Provider
			value={{
				entries,
				createEntry,
				readEntries,
				updateEntry,
				deleteEntry,
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
