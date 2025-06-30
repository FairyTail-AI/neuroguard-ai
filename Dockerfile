FROM node:20-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY ./package.json ./package-lock.json ./

# Install dependencies
RUN npm ci

# Development image
FROM base AS development
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Start development server
CMD ["npm", "run", "dev"]

# Builder image
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set build-time variables
ARG NEXT_PUBLIC_API_URL

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Clean install to ensure all platform-specific binaries are downloaded
RUN rm -rf node_modules package-lock.json
RUN npm install

# Build application
RUN npm run build

# Production image
FROM base AS production
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000

# Copy built application
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Start production server
CMD ["node", "server.js"]