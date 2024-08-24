import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	background-color: var(--slate-900);
`;

export const VerticalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 1rem;
`;

export const Button = styled.button`
	background-color: var(--violet-900);
	color: white;
	font-weight: bold;
	border: none;
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;
	margin: 1rem 0 0 0;
	cursor: pointer;

	width: 100%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 100%;
	min-width: 18rem;
`;

export const Title = styled.h1`
	font-size: 2rem;
	margin: 0;

	color: var(--white);
`;

export const Label = styled.label`
	color: var(--white);
	font-size: 12px;

	margin-top: 1rem;
`;

export const Input = styled.input`
	padding: 0.5rem 0;
	border-radius: 0.25rem;
	border: 1px solid #ccc;
	width: 100%;
`;
