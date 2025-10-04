import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/main.ts'],
    format: ['cjs'],
    clean: true,
    dts: true,
    target: 'es2020',
    minify: false,
    external: ['mongoose', 'graphql', '@nestjs/mongoose', '@nestjs/graphql', '@nestjs/apollo'],
    outDir: 'dist',
    splitting: false,
    keepNames: true,
    esbuildOptions(options) {
        options.platform = 'node';
    }
})