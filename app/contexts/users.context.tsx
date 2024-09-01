"use client";
import { createContext, useMemo, useState } from "react";
import { api } from "../services/axios";
import * as i from "../interfaces/contexts";

export const UsersContext = createContext({} as i.UsersContextValue);

export const UsersProvider = ({ children }: i.Children) => {
	const [users, setUsers] = useState<i.User[]>([]);

	const createUser = async (user: i.User): Promise<void> => {
		try {
			const response = await api.post("/users", user);
			setUsers((prevUsers) => [...prevUsers, response.data]);
		} catch (error) {
			console.error(error);
		}
	};

	const readUsers = async (): Promise<void> => {
		try {
			const response = await api.get("/users");
			setUsers(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const updateUser = async (user: i.NewUser): Promise<void> => {
		try {
			const response = await api.put(`/users/${user.id}`, user);
			setUsers((prevUsers) =>
				prevUsers.map((u) => (u.id === user.id ? response.data : u))
			);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteUser = async (id: number): Promise<void> => {
		try {
			await api.delete(`/users?userId=${id}`);
			setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
		} catch (error) {
			console.error(error);
		}
	};

	return useMemo(
		() => (
			<UsersContext.Provider
				value={{
					users,
					createUser,
					readUsers,
					updateUser,
					deleteUser,
				}}
			>
				{children}
			</UsersContext.Provider>
		),
		[users, children]
	);
};
