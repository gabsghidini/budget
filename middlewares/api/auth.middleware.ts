export const validate = (token: any) => {
	const validToken = true;

	if (!validToken || !token) {
		return false;
	}

	return true;
};

export const authMiddleware = async (req: Request) => {
	const token = req.headers.get("authorization")?.split(" ")[1];

	return { isValid: validate(token) };
};
