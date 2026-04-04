# Tailwind CSS & NativeWind Setup (v5 + Tailwind v4)

This project uses **NativeWind v5** integrated with **Tailwind CSS v4**.

## 1. Installation

```bash
npm install nativewind@latest tailwindcss@4.0.0 @tailwindcss/postcss@4.0.0 react-native-reanimated react-native-safe-area-context
```

## 2. PostCSS Configuration (`postcss.config.js`)

Tailwind v4 requires the separate `@tailwindcss/postcss` plugin:

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

## 3. CSS Entry Point (`global.css`)

In Tailwind v4, we use `@import` and `@source` instead of a standard `tailwind.config.js`:

```css
@import "tailwindcss";
@import "nativewind/theme";

/* Add paths to all files that contain Nativewind classes */
@source "./app/**/*.{js,jsx,ts,tsx}";
@source "./components/**/*.{js,jsx,ts,tsx}";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
```

## 4. Babel Configuration (`babel.config.js`)

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin",
    ],
  };
};
```

## 5. Metro Configuration (`metro.config.js`)

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
```

## 6. TypeScript Support (`nativewind-env.d.ts`)

```typescript
/// <reference types="nativewind/types" />
```

## Usage

You can now use standard Tailwind CSS classes on any React Native component via the `className` prop:

```tsx
<View className="flex-1 items-center justify-center bg-blue-500">
  <Text className="text-white font-bold">Hello World!</Text>
</View>
```
