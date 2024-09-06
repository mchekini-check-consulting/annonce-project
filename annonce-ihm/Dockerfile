# Stage 1: Build an Angular Docker Image
FROM node as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build
# Stage 2, use the compiled app, ready for production with Nginx
FROM nginx
COPY --from=build /app/dist/annonce-ihm/browser /usr/share/nginx/html
