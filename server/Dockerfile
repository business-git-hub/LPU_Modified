# Use official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire backend project
COPY . .

# Expose backend port
EXPOSE 5000

# Use environment variables
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]
