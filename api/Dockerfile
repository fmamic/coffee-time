# Use official nodejs image version 8 as a base layer
FROM node

# Create app directory
WORKDIR /usr/src/app

# Copy packge json to the working directory and run npm install to
# pull all the dependencies
COPY package*.json ./
RUN npm install

# Copy the source code to the working directory
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
