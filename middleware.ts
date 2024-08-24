import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/api/auth.middleware";

export const config = {
	matcher: "/api/:path*",
};

export const middleware = async (req: Request) => {
	const authResult = await authMiddleware(req);

	if (
		(!authResult?.isValid && req.url.includes("/api/users")) ||
		(!authResult?.isValid && req.url.includes("/api/entries")) ||
		(!authResult?.isValid && req.url.includes("/api/categories"))
	) {
		return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
			status: 401,
		});
	}

	return NextResponse.next();
};
