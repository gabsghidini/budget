import { connect } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
import { Entries } from "@/app/lib/models/entries";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
	try {
		await connect();
		const entries = await Entries.find();

		return new NextResponse(JSON.stringify(entries), { status: 200 });
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				message: `Error while fetching Entries: ${error.message}`,
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

		const entry = new Entries(body);
		await entry.save();

		return new NextResponse(JSON.stringify(entry), { status: 201 });
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				message: `Error while creating Entries: ${error.message}`,
			}),
			{
				status: 500,
			}
		);
	}
};

export const DELETE = async (req: Request) => {
	try {
		const { id } = await req.json();
		await connect();

		const entry = await Entries.findByIdAndDelete(ObjectId(id));

		if (!entry) {
			return new NextResponse(
				JSON.stringify({
					message: `Entry with id ${id} not found`,
				}),
				{
					status: 404,
				}
			);
		}

		return new NextResponse(JSON.stringify(entry), { status: 200 });
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				message: `Error while deleting Entries: ${error.message}`,
			}),
			{
				status: 500,
			}
		);
	}
};
