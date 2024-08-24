import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const VerticalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 1rem;
`;

export const Button = styled.button`
	background-color: #4c1d95;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 0.5rem 1rem;
	margin-top: 1rem;
	cursor: pointer;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 2rem;
	margin: 0;
`;

export const Label = styled.label`
	font-size: 12px;

	margin-top: 1rem;
`;

export const Input = styled.input`
	padding: 0.5rem;
	border-radius: 5px;
	border: 1px solid #ccc;
	width: 100%;
`;
