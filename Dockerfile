# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files separately for caching
COPY ./server/package.json ./server/
COPY ./client/package.json ./client/

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

# Install Nginx and other dependencies
RUN apk add --no-cache nginx

# Copy the built files from the builder stage
COPY --from=builder /app/server /app/server
COPY --from=builder /app/client/build /usr/share/nginx/html  # Ensure frontend is served

# Copy Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose server and frontend ports
EXPOSE 8000
EXPOSE 80

# Copy and set permissions for the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Start the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
