import { Schema, model, models } from "mongoose";

// Categorias de gastos, como "Alimentação", "Transporte", "Moradia", etc.
export const CategorySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const Categories =
	models.Categories || model("Categories", CategorySchema);
