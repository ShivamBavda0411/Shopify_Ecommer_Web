# Solved Errors Documentation

This document lists all the errors found and resolved in the E-commerce frontend project.

## 1. Missing Dependency: `react-router-dom`
- **Error**: The project used `BrowserRouter`, `Routes`, `Route`, and `Link` from `react-router-dom`, but the package was not installed in `package.json`.
- **Symptoms**: `npm run dev` failed with "Failed to resolve import 'react-router-dom'".
- **Solution**: Installed `react-router-dom` using `npm i react-router-dom`.

## 2. Missing Context Provider in `main.jsx`
- **Error**: `ShopContextProvider` was defined but not used to wrap the `<App />` component in the entry point.
- **Symptoms**: The application displayed a blank screen because `useContext(ShopContext)` returned `null`, causing crashes when components tried to destructure properties or call methods on it.
- **Solution**: Wrapped the `<App />` component with `<ShopContextProvider>` in `src/main.jsx`.

## 3. Broken Cart Initialization Logic
- **Error**: `getDefaultCart` initialized the cart based on `all_product.length`. Since product IDs are not strictly sequential (e.g., jumping to ID 35), many products were not represented in the initial state.
- **Symptoms**: Adding certain items to the cart resulted in `NaN` (Not a Number) values or the cart count not updating correctly.
- **Solution**: Refactored `getDefaultCart` to iterate through the actual products and use their IDs as keys. Added safety checks in `addToCart` to handle missing IDs gracefully.

## 4. Inconsistent Function Naming
- **Error**: The context exported `addTocart` (lowercase 'c'), while components sometimes expected `addToCart`.
- **Symptoms**: Potential "is not a function" errors or inconsistencies in code readability.
- **Solution**: Renamed the function to `addToCart` globally (in the context and all consuming components).

## 5. Immediate Execution of `window.scrollTo`
- **Error**: In `Item.jsx`, `onClick={window.scrollTo(0,0)}` was used. This executes the function immediately during every render instead of when clicked.
- **Symptoms**: The page would constantly jump to the top during navigation or re-renders.
- **Solution**: Changed to an arrow function: `onClick={() => window.scrollTo(0,0)}`.

## 6. Missing Unique Key Props
- **Error**: `ShopCategory.jsx` used array index `i` as a key, and `CartItems.jsx` was missing keys on wrapper divs.
- **Symptoms**: React console warnings and potential performance/rendering issues during list updates.
- **Solution**: Updated both files to use `item.id` as the unique key.

## 7. Potential Crash in `getTotalCartAmount`
- **Error**: The function assumed `all_product.find()` would always return a product.
- **Symptoms**: If a product ID in the cart was somehow invalid, the app would crash.
- **Solution**: Added a safety check `if (itemInfo)` before accessing its properties.
