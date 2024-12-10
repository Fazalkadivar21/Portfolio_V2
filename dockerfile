# Use an official Node.js runtime as a base image
FROM node:20-alpine

# Set working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build

# Expose port 3000 for the Vite server
EXPOSE 5173 

# Command to start the app
CMD ["npm", "run", "dev"]
