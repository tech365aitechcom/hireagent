# Use the node image
FROM node:20

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clean npm cache and install necessary packages
RUN npm cache clean --force && npm install --legacy-peer-deps

# Install @swc/helpers in case it's missing
RUN npm install --save-dev @swc/helpers

# Copy the rest of the application code
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the port
EXPOSE 3008

# Start the application
CMD ["npm", "start"]
