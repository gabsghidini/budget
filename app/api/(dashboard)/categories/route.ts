import { connect } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
import { Categories } from "@/app/lib/models/categories";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
	try {
		await connect();
		const categories = await Categories.find();

		return new NextResponse(JSON.stringify(categories), { status: 200 });
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				message: `Error while fetching Categories: ${error.message}`,
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

		// Valida se já existe categoria com o mesmo nome
		const alreadyExists = await Categories.find({ name: body.name });
		if (alreadyExists.length > 0) {
			return new NextResponse(
				JSON.stringify({ message: "Category already exists" }),
				{
					status: 409,
				}
			);
		}

		const category = new Categories(body);
		await category.save();

		return new NextResponse(JSON.stringify(category), { status: 201 });
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				message: `Error while creating Categories: ${error.message}`,
			}),
			{
				status: 500,
			}
		);
	}
};
