import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                // 'resources/css/static/connect.css',
                'resources/stylus/static/connect.styl',
                'resources/js/static/app.js',
                'resources/js/static/connect.js',
            ],
            refresh: true,
        }),
    ],
});
