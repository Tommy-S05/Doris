import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/stylus/static/connect.styl',
                'resources/stylus/static/md_alert.styl',
                // 'resources/js/static/app.js',
                // 'resources/js/static/connect.js',
                // 'resources/js/static/md_alert.js',
            ],
            refresh: true,
        }),
    ],
    // optimizeDeps: {
    //     include: [
    //         'axios',
    //         'resources/js/static/app.js',
    //         'resources/js/static/connect.js',
    //         'resources/js/static/md_alert.js',
    //     ],
    // },
});
