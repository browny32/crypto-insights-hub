# Theme Toggle Implementation Plan

Implement a theme switching mechanism for the CryptoPulse application to allow users to toggle between Light and Dark modes.

## 1. Theme Provider
- Create `src/components/ThemeProvider.tsx` to manage the theme state ('light', 'dark', 'system').
- Use `localStorage` to persist the user's preference.
- Apply the `.dark` class to the `document.documentElement` based on the theme state.

## 2. Integration in App
- Wrap the main application structure in `src/App.tsx` with the `ThemeProvider`.

## 3. Theme Toggle UI
- Create `src/components/layout/ThemeToggle.tsx` using `lucide-react` icons (Sun, Moon) and `shadcn/ui` Button.
- Integrate the `ThemeToggle` into the `Navbar` (in `src/components/layout/Navbar.tsx`).

## 4. Styling Verification
- Ensure `src/index.css` has appropriate dark mode variable overrides (already present).
- Verify that standard shadcn/ui components use these variables for automatic theme switching.

## 5. Validation
- Run `validate_build` to ensure no TypeScript or build errors.
