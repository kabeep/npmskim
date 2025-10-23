import { defineConfig } from '@rslib/core';

export default defineConfig({
    lib: [
        {
            format: 'esm',
            syntax: ['node 18'],
            dts: {
                bundle: true,
                tsgo: true,
            },
        },
        {
            format: 'cjs',
            syntax: ['node 18'],
        },
    ],
});
