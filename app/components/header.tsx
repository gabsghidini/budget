import React from "react";
import * as S from "./styles";

export const Header = () => {
	return (
		<S.Header>
			<S.Container>
				<S.Logo>Budget</S.Logo>
				<S.NavContainer>
					<S.NavLink href="/dashboard">Dashboard</S.NavLink>
					<S.NavLink href="/categories">Categorias</S.NavLink>
					<S.NavLink href="/entries">Lançamentos</S.NavLink>
				</S.NavContainer>
			</S.Container>
		</S.Header>
	);
};
