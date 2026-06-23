# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation site built with VitePress, serving as a personal knowledge base and portfolio site. The site is configured for Chinese content and features a modern design with glassmorphism effects.

## Development Commands

- `npm run docs:dev` - Start development server on http://localhost:5173
- `npm run docs:build` - Build static production site
- `npm run docs:preview` - Preview production build locally

## Architecture

### VitePress Configuration
- Located in `docs/.vitepress/config.mjs`
- Chinese language (`lang: 'zh-CN'`)
- Custom sidebar generation via `auto-gen-sidebar.mjs` utility
- Base URL configured as `/docs/`
- Local search provider configured for Chinese translations

### Dynamic Sidebar System
- Auto-generated sidebars using `docs/utils/auto-gen-sidebar.mjs`
- Supports collapsible sections and automatic markdown file detection
- Filters out non-content directories (`.vitepress`, `node_modules`, etc.)
- Converts `.md` filenames to clean text labels

### Component Structure
- `docs/components/HomeHero.vue` - Hero section with:
  - Dynamic background image from `https://t.alcy.cc/ycy`
  - Hitokoto API integration for inspirational quotes
  - Glassmorphism overlay design
  - Fixed background with parallax effect

### Content Organization
- `/guide/` - General documentation guides
- `/src/` - Main content directory with:
  - `ai/` - AI-related content
  - `back/` - Backend development content
- Content is auto-discovered and organized into navigation

### Special Features
- Glassmorphism navigation styling in `docs/.vitepress/theme/style.css`
- Random background images for visual variety
- Custom search translations for Chinese users
- GitHub integration with edit links
- Automatic last updated timestamps

## Development Notes

- The site uses Vue 3 Composition API for components
- Custom elements are registered (e.g., `<HomeHero>`)
- Markdown files support line numbers and lazy image loading
- External API calls are handled with proper error boundaries