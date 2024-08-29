"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./styles";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Redireciona para a página de dashboard
		router.push("/dashboard");
	};

	return (
		<S.Container>
			<S.VerticalContainer>
				<S.Title>Login</S.Title>
				<S.Form onSubmit={handleSubmit}>
					<S.Label>Email:</S.Label>
					<S.Input
						type="email"
						value={email}
						onChange={handleEmailChange}
					/>
					<S.Label>Password:</S.Label>
					<S.Input
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
					<S.Button type="submit">Entrar</S.Button>
				</S.Form>
			</S.VerticalContainer>
		</S.Container>
	);
};

export default Login;
