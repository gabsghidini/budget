import styled from "styled-components";
import Link from "next/link";

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
