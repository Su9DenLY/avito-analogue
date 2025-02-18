FROM oven/bun AS builder

WORKDIR /app
COPY bun.lockb package.json ./
RUN bun install
COPY . .
RUN bun run build


FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
