import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    const backendHost = process.env.BACKEND_HOST || env.BACKEND_HOST || 'localhost';
    console.log('🔧 Using backend host:', backendHost);

    return {
        plugins: [
            react(),
            tailwindcss(),
        ],
        define: {
            'process.env': {}, // предотвращает ошибки Vite с process.env
        },
        server: {
            proxy: {
                '/api': {
                    target: `http://${backendHost}:8080`,
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
    };
});
