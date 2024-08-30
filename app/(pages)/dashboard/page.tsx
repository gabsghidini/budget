"use client";
import React, { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { EntriesContext } from "../../contexts/entries.context";
import Image from "next/image";
import * as S from "./styles";
import { Header } from "@/app/components/header";

/* Components */
import { FinancialSummary } from "@/app/components/financialSummary";

const Dashboard = () => {
	const { categories } = useContext(CategoriesContext);
	const { entries } = useContext(EntriesContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (categories.length && entries.length) {
			setIsLoading(false);
		}
	}, [categories, entries]);

	if (isLoading) {
		return (
			<S.Container>
				<Image
					src="/loading.gif"
					alt="Loading"
					width={100}
					height={100}
				/>
			</S.Container>
		);
	}

	return (
		<>
			<Header />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "row",
				}}
			>
				<aside style={{ width: "10rem" }}>aside</aside>
				<FinancialSummary />
			</div>
		</>
	);
};

export default Dashboard;
