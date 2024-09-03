import React, { useContext, useState } from "react";
import { EntriesContext } from "../contexts/entries.context";

/* Components */
import * as S from "./styles";

const Aside = () => {
	/** Contexts **/
	const { createEntry } = useContext(EntriesContext);

	/** States **/
	const [entry, setEntry] = useState("");
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("Entrada");
	const [createdBy, setCreatedBy] = useState("66c930e30ae38f99b6948a1c");

	/** Functions **/
	const handleAddEntry = (e: any) => {
		e.preventDefault();

		createEntry({
			entry,
			amount,
			category,
			createdBy,
		});

		setEntry("");
		setAmount(0);
		setCategory("Entrada");
	};

	return (
		<S.AsideContainer onSubmit={(e) => handleAddEntry(e)}>
			<S.VerticalContainer>
				<label htmlFor="entry">Descrição</label>
				<textarea onChange={(e) => setEntry(e.target.value ?? "")} />
				<small>Ex: Compras do Supermercado</small>
			</S.VerticalContainer>
			<S.HorizontalContainer>
				<S.VerticalContainer>
					<label htmlFor="">Valor</label>
					<input
						type="text"
						onChange={(e) =>
							setAmount(
								Number(e.target.value.replace(",", ".")) ?? 0
							)
						}
					/>
				</S.VerticalContainer>
				<S.VerticalContainer>
					<label htmlFor="">Categoria</label>
					<select
						onChange={(e) =>
							setCategory(e.target.value ?? "Entrada")
						}
					>
						<option value="Entrada">Entrada</option>
						<option value="Saída">Saída</option>
					</select>
				</S.VerticalContainer>
			</S.HorizontalContainer>
			<S.Button type="submit">Adicionar</S.Button>
		</S.AsideContainer>
	);
};

export default Aside;
