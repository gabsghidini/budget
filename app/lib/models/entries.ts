import { Schema, model, models } from "mongoose";

export const EntriesSchema = new Schema(
	{
		entry: {
			type: String,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
		category: { type: Schema.Types.ObjectId, ref: "Categories" },
		createdBy: { type: Schema.Types.ObjectId, ref: "Users" },
	},
	{
		timestamps: true,
	}
);

export const Entries = models.Entries || model("Entries", EntriesSchema);
