import { connect } from "@/app/lib/db";
import { Users } from "@/app/lib/models/users";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
	try {
		await connect();
		const users = await Users.find();

		return new NextResponse(JSON.stringify(users), { status: 200 });
	} catch (err: any) {
		return new NextResponse(
			JSON.stringify({
				message: `Error while fetching Users: ${err.message}`,
			}),
			{
				status: 500,
			}
		);
	}
};

export const POST = async (req: Request) => {
	try {
		const body = await req.json();
		await connect();

		// Valida se já existe usuário com o mesmo username
		const alreadyExists = await Users.find({ username: body.username });
		if (alreadyExists.length > 0) {
			return new NextResponse(
				JSON.stringify({ message: "User already exists" }),
				{
					status: 409,
				}
			);
		}

		if (!body.isAdmin) {
			body.isAdmin = false;
		}

		const user = new Users(body);
		await user.save();

		return new NextResponse(JSON.stringify(user), { status: 201 });
	} catch (err: any) {
		return new NextResponse(
			JSON.stringify({
				message: `Error while creating Users: ${err.message}`,
			}),
			{
				status: 500,
			}
		);
	}
};

export const PATCH = async (req: Request) => {
	try {
		const body = await req.json();
		const { userId, newUsername } = body;
		await connect();

		if (!userId || !newUsername) {
			return new NextResponse(
				JSON.stringify({
					message: "Please provide a userId and a newUsername",
				}),
				{ status: 400 }
			);
		}

		if (!Types.ObjectId.isValid(userId)) {
			return new NextResponse(
				JSON.stringify({ message: "Invalid userId" }),
				{
					status: 400,
				}
			);
		}

		const user = await Users.findOneAndUpdate(
			{ _id: new ObjectId(userId) },
			{ username: newUsername },
			{ new: true }
		);

		if (!user) {
			return new NextResponse(
				JSON.stringify({ message: "User not found" }),
				{
					status: 404,
				}
			);
		}

		return new NextResponse(JSON.stringify(user), { status: 200 });
	} catch (err: any) {
		return new NextResponse(
			JSON.stringify({
				message: `Error while updating Users: ${err.message}`,
			}),
			{
				status: 500,
			}
		);
	}
};

export const DELETE = async (req: Request) => {
	try {
		const { searchParams } = new URL(req.url);
		const userId = searchParams.get("userId");

		if (!userId) {
			return new NextResponse(
				JSON.stringify({ message: "Please provide a userId" }),
				{
					status: 400,
				}
			);
		}

		if (!Types.ObjectId.isValid(userId)) {
			return new NextResponse(
				JSON.stringify({ message: "Invalid userId" }),
				{
					status: 400,
				}
			);
		}

		await connect();
		const user = await Users.findByIdAndDelete(new Types.ObjectId(userId));

		if (!user) {
			return new NextResponse(
				JSON.stringify({ message: "User not found" }),
				{
					status: 404,
				}
			);
		}

		return new NextResponse(null, { status: 204 });
	} catch (err: any) {
		return new NextResponse(
			JSON.stringify({
				message: `Error while deleting Users: ${err.message}`,
			}),
			{
				status: 500,
			}
		);
	}
};
