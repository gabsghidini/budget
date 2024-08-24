import { Schema, model, models } from "mongoose";

export const UserSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		isAdmin: {
			type: Boolean,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

export const Users = models.Users || model("Users", UserSchema);
