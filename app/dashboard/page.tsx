"use client";
import React, { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import { EntriesContext } from "../contexts/entries.context";

const Dashboard = () => {
	const { categories } = useContext(CategoriesContext);
	const { entries } = useContext(EntriesContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (categories.length && entries.length) {
			setIsLoading(false);
		}
	}, [categories, entries]);

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<div>
			<h1>Dashboard</h1>
			<h2>Categorias</h2>
			<p>Categorias: {categories.length}</p>
			{categories.map((category) => (
				<div key={category.id}>
					<p>{category.name}</p>
					<p>{category.description}</p>
				</div>
			))}
			<h2>Entradas</h2>
			<p>Entradas: {entries.length}</p>
			{entries.map((entry) => (
				<div key={entry.id}>
					<p>{entry.entry}</p>
					<p>{entry.amount}</p>
					<p>{entry.category}</p>
				</div>
			))}
		</div>
	);
};

export default Dashboard;
