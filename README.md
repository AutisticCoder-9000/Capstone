# MyShoppy Capstone

MyShoppy is a mobile-first Expo and React Native e-commerce storefront. It supports the full shopper flow from discovery to checkout confirmation using a mock catalog and client-side state management.

## Current implementation summary

- 8 lifestyle categories with local raster category banners
- 32 products with product-specific web images (one unique image per product label)
- Home, Categories, Product Listing, Product Detail, Cart, Checkout, and Order Success experiences
- Search, filtering, stock-aware cart behavior, checkout validation, and order confirmation
- Wireframe-driven UI tuning for category card sizing, image fit, spacing, and alignment

## Tech stack

- Expo
- React Native
- React
- TypeScript

## Run locally

1. Install dependencies:

```powershell
npm install
```

2. Start development server:

```powershell
npm start
```

3. Launch on target:

- Web:

```powershell
npm run web
```

- Android:

```powershell
npm run android
```

Optional tunnel mode for Android/emulator networking issues:

```powershell
npx expo start --tunnel
```

## Project structure

- App.tsx: root composition with ProductProvider and CartProvider
- src/navigation/AppNavigator.tsx: app navigation flow and bottom tabs
- src/context/ProductContext.tsx: query/category/price/availability filtering state
- src/context/CartContext.tsx: cart item management, totals, and stock guards
- src/data/mockProducts.ts: categories, products, images, and price metadata
- src/screens/: Home, Categories, ProductList, ProductDetail, Cart, Checkout, OrderSuccess
- src/components/: reusable cards, grid, header, cart rows, summary, controls
- src/utils/validators.ts: checkout form validation
- src/styles/: global style tokens and theme colors

## Functionality delivered

### 1) Catalog and discovery

- Category browsing from Home and Categories pages
- Category-to-product navigation with pre-applied category filter
- Product list with labels, pricing, ratings, stock indicators, and add-to-cart actions

### 2) Product media

- Category images use local raster assets from assets/images/categories
- Product images use web-sourced, label-specific URLs (no SVG dependency)
- Product cards, detail view, and cart rows render the same product image source consistently

### 3) Search and filtering

- Text search over product name and description
- Category chip filter
- Maximum price filter
- In-stock-only toggle
- No-results state with filter reset path

### 4) Product detail

- Full product information (image, category, name, price, rating, stock, description)
- Add-to-cart with stock-aware behavior

### 5) Cart management

- Add item
- Increase/decrease quantity
- Remove item
- Stock ceiling enforcement (cannot exceed available stock)
- Subtotal calculation and empty cart state

### 6) Checkout and confirmation

- Delivery form fields: full name, email, phone, address, city, PIN code
- Field-level validation:
	- valid email format
	- 10-digit phone number
	- minimum-length address
	- required city
	- 6-digit PIN code
- Order confirmation modal with generated order reference and payable total

### 7) UI and layout work completed

- Mobile-first responsive layout on web and Android targets
- Category screen card/image fit corrections for width containment
- Category grid spacing and alignment tuning to match wireframe intent

## Functional requirement coverage

The following checklist reflects implemented status against expected storefront requirements and deliverables.

- [x] Product catalog with categories and detailed product metadata
- [x] Category browsing flow
- [x] Search and filter workflow
- [x] Product detail screen
- [x] Cart management with quantity controls and subtotal
- [x] Checkout with form validation
- [x] Order confirmation feedback
- [x] Mobile-first UI with reusable component architecture
- [x] Consistent product media (unique product image per product)
- [x] Wireframe alignment pass for categories layout and image fit

## Deliverables status

- [x] Working Expo app with web and Android scripts
- [x] Organized codebase with separated screens, components, contexts, styles, and utilities
- [x] Mock data source with scalable product structure
- [x] Documented setup and feature list
- [x] Requirement-to-implementation traceability (this README section)

## Known limitations

- No backend or database integration
- No authentication or user profile management
- No payment gateway (checkout is demo flow)
- Cart and order state are in-memory only for current runtime session
- Product web images require internet connectivity

## Verification checklist

- Open Home and confirm category and featured-product rendering
- Open Categories and verify card images fit within card bounds without overflow
- Open Products and verify search, chips, max-price, and in-stock-only filters
- Add products to cart, adjust quantities, and verify stock-limited behavior
- Complete checkout with invalid and valid data to verify validation and success modal
- Confirm each product label is paired with a distinct product image
