# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files separately for caching
COPY ./server/package.json ./server/package-lock.json ./server/
COPY ./client/package.json ./client/package-lock.json ./client/

# Install dependencies for server and client
RUN npm install --legacy-peer-deps --prefix ./server
RUN npm install --legacy-peer-deps --prefix ./client

# Copy the rest of the project
COPY . .

# Build the client (adjust if needed)
RUN npm run build --prefix ./client

# Stage 2: Runtime
FROM node:18-alpine AS runtime

WORKDIR /app


# Install Nginx
RUN apk add --no-cache nginx

# Copy the built files from the builder stage
COPY --from=builder /app/server /app/server
COPY --from=builder /app/client /app/client


# Expose port 8081 server
EXPOSE 8081

# Copy the entrypoint script and ensure it’s executable
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set the entrypoint so the script runs when the container starts
ENTRYPOINT ["/entrypoint.sh"]
