import mongoose from "mongoose";

let uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@budget.ksmop.mongodb.net/?retryWrites=true&w=majority`;

export const connect = async () => {
	const state = await mongoose.connection.readyState;

	if (state === 1) {
		return console.log("Already connected to MongoDB");
	}

	if (state === 2) {
		return console.log("Connecting to MongoDB");
	}

	try {
		console.log("Attempting to connect to MongoDB with URI:", uri);
		await mongoose.connect(uri, {
			dbName: "budget",
			bufferCommands: true,
		});
		console.log("Connected to MongoDB! 😎");
	} catch (error) {
		console.error("Failed to connect to MongoDB:", error);
	}
};
