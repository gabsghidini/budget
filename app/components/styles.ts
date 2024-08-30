import styled from "styled-components";
import Link from "next/link";

/* Header */

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	background-color: #fafafa;

	box-shadow: #dddddd 1px 1px 5px 1px;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 75rem;
`;

export const Logo = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	font-family: "Lobster", "Inter", sans-serif;
`;

export const NavLink = styled(Link)`
	margin-left: 1rem;
	font-size: 1rem;
	font-weight: bold;
	text-decoration: none;
	color: var(--slate-900);
`;

export const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	max-width: 80%;
`;

/* Financial Summary */
export const FinancialSummaryContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 1rem;
		border-radius: 0.25rem;
		margin: 0.5rem 0;
	}
`;

export const FinancialNav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	h2 {
		font-size: 1rem;
		font-weight: bold;
		color: var(--slate-500);
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		li {
			list-style: none;
			cursor: pointer;
			background-color: var(--slate-200);
			padding: 0.5rem;
			border-radius: 0.25rem;
			font-weight: 500;
			font-size: 0.75rem;
		}

		li:hover {
			background-color: var(--pink-700);
			color: var(--white);
		}
	}
`;

export const FinancialCard = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const FinancialCardTitle = styled.h3`
	font-size: 1rem;
	font-weight: bold;
	color: var(--slate-900);
`;
