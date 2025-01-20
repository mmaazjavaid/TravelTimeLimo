import mongoose from 'mongoose';

const connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URI);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
};

export default connectToDatabase;
