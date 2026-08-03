# MyShoppy requirement analysis and implementation

## Scope interpreted from the project brief

The application is a **mobile-first e-commerce storefront for household products**. Its primary customer journey is:

`Discover → browse/search/filter → inspect product → manage cart → enter delivery information → receive confirmation`

The brief does not define administrator/staff management, backend order history, authentication, or payment processing. This submission therefore implements the explicitly defined **customer storefront experience** using mock catalog data.

## Functional requirements traceability

| Requirement | Delivered implementation |
| --- | --- |
| Product catalog | 32 products across 8 categories (Furniture, Hand Bag, Books, Tech, Travel, Sneakers, Wellness, Office). Each product includes image, name, category, price, rating, stock, and description. |
| Category browsing | Home and Categories screens let users open category-specific product results. |
| Search and filtering | Search on product name and description, category chips, maximum-price selection, and in-stock-only toggle. |
| Product details | Detail page shows image, category, price, rating, description, stock availability, and add-to-cart action. |
| Shopping cart | Add items, adjust quantity, remove items, enforce stock limits, show empty-cart state, and calculate subtotal. |
| Order placement | Checkout form validates full name, email address, 10-digit phone, street address, city, and 6-digit PIN. |
| Confirmation | Order confirmation modal shows generated reference and payable total. |
| Responsive interface | Mobile-first React Native layout supports browser and Android emulator; bottom navigation is available on key browsing screens. |
| Data handling | Mock product catalog is isolated in `src/data/mockProducts.ts`; product state and cart state are managed in separate React contexts. |
| Error handling | Product list includes a no-results view and filter reset action; cart supports empty state; checkout shows field-level validation errors; quantity controls prevent exceeding stock. |

## Architecture

- `App.tsx` — root entry point with `ProductProvider` and `CartProvider`
- `src/navigation/AppNavigator.tsx` — screen routing and bottom tab navigation
- `src/context/ProductContext.tsx` — search and filter state plus derived product list
- `src/context/CartContext.tsx` — cart items, quantity updates, totals, and clear cart action
- `src/screens/` — logical screen separation for home, categories, products, detail, cart, checkout, and order success
- `src/components/` — reusable UI components for header, buttons, product cards, cart item rows, and order summary
- `src/data/mockProducts.ts` — single source of catalog data for easy future API replacement

## Assumptions and limitations

- Currency is INR and prices are demo-only.
- Delivery is treated as free for the demo.
- No backend, authentication, payment gateway, or order persistence is included.
- Cart and checkout data persist only for the current app session.
- Product images use remote Unsplash-based URLs and need internet access to render.
- Sorting controls beyond search/filter are not implemented in the current version.

## Test checklist

- [x] Browse each main category and confirm the product list updates correctly.
- [x] Search a product term such as `sofa` and verify results, then clear filters.
- [x] Apply a maximum price filter and toggle in-stock-only.
- [x] Add an item to the cart, increase quantity, decrease quantity, and verify stock limits are enforced.
- [x] Remove all cart items to confirm the empty cart state.
- [x] Submit checkout with missing or invalid fields to verify validation errors.
- [x] Submit checkout with valid delivery details (including a valid email) and confirm the order reference appears.
