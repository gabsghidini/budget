import React, { useContext, useEffect, useState } from "react";
import { EntriesContext } from "../contexts/entries.context";
import * as S from "./styles";
import { CategoriesContext } from "../contexts/categories.context";

export const FinancialSummary = () => {
	const { entries } = useContext(EntriesContext);
	const { categories } = useContext(CategoriesContext);
	const [entriesList, setEntriesList] = useState(entries);
	const total = entries.reduce((acc, item) => {
		return item.entry === "income"
			? acc + (item.amount ?? 0)
			: acc - (item.amount ?? 0);
	}, 0);

	useEffect(() => {
		// Logs categories INTO entries
		setEntriesList(() =>
			entries.map((entry) => {
				const category = categories.find(
					(category) => category.id === entry.category
				);
				return {
					...entry,
					category: category?.name ?? "Sem categoria",
				};
			})
		);
	}, []);

	return (
		<div>
			<S.FinancialNav>
				<h2>Resumo Financeiro</h2>
				<ul>
					<li>Todos</li>
					<li>Entradas</li>
					<li>Saídas</li>
				</ul>
			</S.FinancialNav>
			<S.FinancialSummaryContainer>
				{entriesList.map((entry) => (
					<S.FinancialCard
						key={entry.id}
						isActive={entry.category === "Entrada"}
					>
						<aside>
							<S.FinancialCardTitle>
								{entry.entry}
							</S.FinancialCardTitle>
							<span>{entry.category}</span>
						</aside>
						<p>{entry.amount}</p>
						<button>Delete</button>
					</S.FinancialCard>
				))}
			</S.FinancialSummaryContainer>
		</div>
	);
};
