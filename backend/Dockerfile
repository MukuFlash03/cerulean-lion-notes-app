# Use the latest official Node.js 20.13.0 image
FROM node:20.13.0

# Set the working directory
WORKDIR /app/backend

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5550

# Command to run the backend server
CMD ["npm", "start"]
