import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: "./index.html",
                blog: "./blog.html",
                contact: "./contact.html"
            },
        },
    },
    server: {
        port: 3000
    },
});