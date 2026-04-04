# GEMINI.md - Project Context

## Project Overview
This is a modern **React Native** mobile application built using the **Expo** framework. It leverages **Expo Router** for file-based navigation and **NativeWind** (Tailwind CSS for React Native) for styling.

### Key Technologies
- **Framework**: Expo (SDK 54+)
- **Routing**: Expo Router (v6+) with Typed Routes enabled.
- **Styling**: NativeWind (v5 preview) / Tailwind CSS.
- **UI Architecture**: React Native (React 19).
- **Language**: TypeScript.
- **Features**: New Architecture enabled, React Compiler enabled (experimental).

### Directory Structure
- `app/`: Contains the application's routes and layouts (Expo Router).
  - `_layout.tsx`: Root layout configuration.
  - `index.tsx`: Main entry screen.
- `assets/`: Static assets such as images and fonts.
- `scripts/`: Utility scripts (e.g., `reset-project.js`).
- `global.css`: Entry point for NativeWind styles.
- `tailwind.config.js`: Tailwind CSS configuration.
- `metro.config.js`: Metro bundler configuration integrated with NativeWind.

## Building and Running
The following commands are defined in `package.json`:

- **Start Development Server**: `npm start` (or `npx expo start`)
- **Run on Android**: `npm run android`
- **Run on iOS**: `npm run ios`
- **Run on Web**: `npm run web`
- **Linting**: `npm run lint`
- **Reset Project**: `npm run reset-project` (moves starter code to `app-example` and clears `app/`)

## Development Conventions
- **Routing**: Follow Expo Router's file-based routing conventions within the `app/` directory.
- **Styling**: Use Tailwind CSS classes via the `className` prop on components. Ensure new file paths are added to `tailwind.config.js` if they fall outside the current content glob.
- **TypeScript**: Strictly use TypeScript for all components and utilities.
- **Icons**: Use `@expo/vector-icons` for iconography.
- **Animations**: `react-native-reanimated` is installed and available for high-performance animations.
- **Safe Areas**: Use `react-native-safe-area-context` to handle notches and system UI overlays.
