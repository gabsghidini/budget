import { Schema, model, models } from "mongoose";

// Lançamento de Entradas e Saídas
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
		category: {
			type: Schema.Types.ObjectId,
			ref: "Categories",
			required: true,
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const Entries = models.Entries || model("Entries", EntriesSchema);
