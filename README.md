# Backend API

A Node.js backend API built with Express and MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
MONGO_URI=mongodb://localhost:27017/your_database_name
PORT=5000
NODE_ENV=development
```

3. For MongoDB Atlas (cloud), use:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/your_database_name?retryWrites=true&w=majority
```

4. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## Database Connection

The application will automatically connect to MongoDB when it starts. Make sure:
- MongoDB is running locally, or
- You have a valid MongoDB Atlas connection string
- The MONGO_URI environment variable is properly set

## API Endpoints

- `GET /` - Welcome message
- `GET /superhero` - Get all superheroes
- `GET /superhero/:id` - Get superhero by ID
- `POST /superhero` - Create new superhero
- `PUT /superhero/:id` - Update superhero
- `DELETE /superhero/:id` - Delete superhero

## Troubleshooting

If you encounter database connection issues:
1. Check if MongoDB is running
2. Verify your connection string in the `.env` file
3. Ensure your IP is whitelisted (for MongoDB Atlas)
4. Check console logs for specific error messages
