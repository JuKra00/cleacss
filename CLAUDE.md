# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cleacss is a CSS framework built with SCSS that provides a foundation for modern web development. The framework is designed for CSS enthusiasts who want a solid base without overwhelming utility classes.

## Development Commands

**Build the framework:**
```bash
pnpm build
```
This runs the complete build process: clean → sass compilation → minification → playground build.

**Development mode:**
```bash
pnpm dev
```
Watches SCSS files and compiles them on changes.

**Run playground with hot reload:**
```bash
pnpm playground
```
Starts both the SCSS watcher and the playground development server concurrently.

**Linting:**
```bash
pnpm lint
```
Runs stylelint on all SCSS files with PostCSS SCSS syntax.

**Individual build steps:**
- `pnpm sass` - Compile SCSS to CSS
- `pnpm minify` - Minify CSS with LightningCSS
- `pnpm clean` - Remove dist directory
- `pnpm playground:build` - Build playground for production

## Architecture

### Core Structure

The framework is organized in modular SCSS files:

- **Entry point**: `src/cleacss.scss` - imports all modules using `@use`
- **Variables**: `src/variables.scss` - imports all variable modules (colors, typography, spacing, etc.)
- **Config**: Reset styles, layers, and core configuration
- **Layout**: Grid system and flow utilities
- **Elements**: Styled components (buttons, inputs, text, titles, tables)
- **Utilities**: Helper classes (spacing, typography, alignment, visibility)

### Build Process

1. SCSS compilation via Dart Sass to untranspiled CSS
2. CSS minification and bundling with LightningCSS
3. Playground build using Vite with TypeScript

### Playground

The `playground/` directory contains a Vite-powered development environment:
- TypeScript source files including grid visualizer
- Examples for testing framework features
- Separate build configuration for library exports

### Exports

The package provides multiple exports:
- Main CSS file: `dist/cleacss.css`
- Untranspiled version: `dist/cleacss.untranspiled.css`
- Individual builds: variables, media-queries
- Source SCSS: `src/cleacss.scss`
- Playground utilities: grid-visualizer and main playground module

## Development Notes

- Uses `pnpm` as package manager
- SCSS compilation with modern CSS features (custom properties, subgrid)
- No test suite currently configured
- Stylelint for code quality
- Release management with release-it and conventional changelog