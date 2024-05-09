FROM node:20.13.0

WORKDIR /app/backend

# Copy package.json and package-lock.json to the working directory
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the application code
COPY backend/ .

# Expose the port the app runs on
EXPOSE 8000

# Command to run the backend server
CMD ["npm", "start"]
