# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port your Express app runs on
EXPOSE 5000

# Start the app
CMD ["npm", "run", "dev"]
