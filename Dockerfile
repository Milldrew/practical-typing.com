# Multi-stage Dockerfile for Angular + NestJS application

# Stage 1: Build Angular application
FROM node:18-alpine AS angular-builder

WORKDIR /app/frontend

# Copy Angular package files
COPY practical-type/package*.json ./

# Install Angular dependencies
RUN npm ci

# Copy Angular source code
COPY practical-type/ ./

# Build Angular application for production
RUN npm run ng build -- --configuration production --output-path=dist

# Stage 2: Build NestJS application
FROM node:18-alpine AS nestjs-builder

WORKDIR /app/backend

# Copy NestJS package files
COPY practical-type-api/package*.json ./

# Install NestJS dependencies
RUN npm ci

# Copy NestJS source code
COPY practical-type-api/ ./

# Build NestJS application
RUN npm run build

# Stage 3: Production image
FROM node:18-alpine AS production

WORKDIR /app

# Copy NestJS package files and install production dependencies
COPY practical-type-api/package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy built NestJS application
COPY --from=nestjs-builder /app/backend/dist ./dist

# Copy built Angular application to be served by NestJS
COPY --from=angular-builder /app/frontend/dist/browser ./html-stuff/browser

# Expose port 7777
EXPOSE 7777

# Set environment variable for port
ENV PORT=7777

# Start the NestJS application
CMD ["node", "dist/main"]