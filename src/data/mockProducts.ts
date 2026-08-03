import { Product } from '../types';

const categoryImages: Record<string, number> = {
  Furniture: require('../../assets/images/categories/furniture.jpg'),
  'Hand Bag': require('../../assets/images/categories/handbag.jpg'),
  Books: require('../../assets/images/categories/books.jpg'),
  Tech: require('../../assets/images/categories/tech.jpg'),
  Travel: require('../../assets/images/categories/travel.jpg'),
  Sneakers: require('../../assets/images/categories/sneakers.jpg'),
  Wellness: require('../../assets/images/categories/wellness.jpg'),
  Office: require('../../assets/images/categories/office.jpg')
};

const productImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
  '2': 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&w=1200&q=80',
  '3': 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80',
  '4': 'https://images.unsplash.com/photo-1467043198406-dc953a3defa0?auto=format&fit=crop&w=1200&q=80',
  '5': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80',
  '6': 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
  '7': 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=80',
  '8': 'https://images.unsplash.com/photo-1548863227-3af567fc3b27?auto=format&fit=crop&w=1200&q=80',
  '9': 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
  '10': 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
  '11': 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80',
  '12': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
  '13': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
  '14': 'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=1200&q=80',
  '15': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
  '16': 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=1200&q=80',
  '17': 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=1200&q=80',
  '18': 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=80',
  '19': 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?auto=format&fit=crop&w=1200&q=80',
  '20': 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80',
  '21': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
  '22': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80',
  '23': 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80',
  '24': 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80',
  '25': 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80',
  '26': 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=1200&q=80',
  '27': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
  '28': 'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?auto=format&fit=crop&w=1200&q=80',
  '29': 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80',
  '30': 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=1200&q=80',
  '31': 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80',
  '32': 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80'
};

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: number;
}

export const categories: Category[] = [
  { id: 'Furniture', name: 'Furniture', icon: 'bed-outline', image: categoryImages.Furniture },
  { id: 'Hand Bag', name: 'Hand Bag', icon: 'bag-handle-outline', image: categoryImages['Hand Bag'] },
  { id: 'Books', name: 'Books', icon: 'book-outline', image: categoryImages.Books },
  { id: 'Tech', name: 'Tech', icon: 'laptop-outline', image: categoryImages.Tech },
  { id: 'Travel', name: 'Travel', icon: 'airplane-outline', image: categoryImages.Travel },
  { id: 'Sneakers', name: 'Sneakers', icon: 'walk-outline', image: categoryImages.Sneakers },
  { id: 'Wellness', name: 'Wellness', icon: 'fitness-outline', image: categoryImages.Wellness },
  { id: 'Office', name: 'Office', icon: 'briefcase-outline', image: categoryImages.Office },
];

export const mockProducts: Product[] = [
  { id: '1', name: 'Modular Sofa', category: 'Furniture', price: 24999, rating: 4.8, stock: 5, image: productImages['1'], description: 'Contemporary upholstered sofa for living room comfort.' },
  { id: '2', name: 'Oak Coffee Table', category: 'Furniture', price: 8999, rating: 4.5, stock: 7, image: productImages['2'], description: 'Minimal coffee table with storage shelf.' },
  { id: '3', name: 'Wall Shelving Unit', category: 'Furniture', price: 12999, rating: 4.6, stock: 6, image: productImages['3'], description: 'Open wall shelving with neat industrial style.' },
  { id: '4', name: 'Velvet Accent Chair', category: 'Furniture', price: 10999, rating: 4.7, stock: 8, image: productImages['4'], description: 'Plush chair to elevate your reading nook.' },
  { id: '5', name: 'Leather Tote', category: 'Hand Bag', price: 3599, rating: 4.7, stock: 12, image: productImages['5'], description: 'Spacious leather tote with internal pockets.' },
  { id: '6', name: 'Crossbody Satchel', category: 'Hand Bag', price: 2199, rating: 4.5, stock: 10, image: productImages['6'], description: 'Compact crossbody bag for day-to-day essentials.' },
  { id: '7', name: 'Evening Clutch', category: 'Hand Bag', price: 2799, rating: 4.4, stock: 8, image: productImages['7'], description: 'Elegant clutch with brass hardware finishing.' },
  { id: '8', name: 'Canvas Shopper', category: 'Hand Bag', price: 1799, rating: 4.6, stock: 15, image: productImages['8'], description: 'Casual shopper bag for weekend errands.' },
  { id: '9', name: 'Bestseller Novel Set', category: 'Books', price: 1499, rating: 4.9, stock: 18, image: productImages['9'], description: 'Pack of three popular fiction novels.' },
  { id: '10', name: 'Travel Journal', category: 'Books', price: 799, rating: 4.6, stock: 20, image: productImages['10'], description: 'Hardcover travel journal with lined pages.' },
  { id: '11', name: 'Coffee Table Book', category: 'Books', price: 2199, rating: 4.7, stock: 14, image: productImages['11'], description: 'Large-format book for home decor inspiration.' },
  { id: '12', name: 'Desk Planner', category: 'Books', price: 1299, rating: 4.5, stock: 22, image: productImages['12'], description: 'Weekly desk planner with goal tracking.' },
  { id: '13', name: 'Wireless Headphones', category: 'Tech', price: 5499, rating: 4.8, stock: 11, image: productImages['13'], description: 'Noise-canceling headphones with premium sound.' },
  { id: '14', name: 'Portable Speaker', category: 'Tech', price: 3299, rating: 4.6, stock: 9, image: productImages['14'], description: 'Portable Bluetooth speaker with deep bass.' },
  { id: '15', name: 'Smart Watch', category: 'Tech', price: 7999, rating: 4.7, stock: 5, image: productImages['15'], description: 'Fitness-ready smart watch with heart rate tracking.' },
  { id: '16', name: 'Wireless Charger', category: 'Tech', price: 2399, rating: 4.4, stock: 14, image: productImages['16'], description: 'Fast charging pad for multiple devices.' },
  { id: '17', name: 'Rolling Suitcase', category: 'Travel', price: 6499, rating: 4.5, stock: 10, image: productImages['17'], description: 'Durable carry-on suitcase with spinner wheels.' },
  { id: '18', name: 'Travel Backpack', category: 'Travel', price: 2899, rating: 4.4, stock: 12, image: productImages['18'], description: 'Lightweight travel backpack with laptop sleeve.' },
  { id: '19', name: 'Packing Cubes', category: 'Travel', price: 999, rating: 4.3, stock: 22, image: productImages['19'], description: 'Set of travel packing cubes for organized luggage.' },
  { id: '20', name: 'Noise Mask', category: 'Travel', price: 799, rating: 4.2, stock: 16, image: productImages['20'], description: 'Comfortable sleep mask for flights and hotels.' },
  { id: '21', name: 'Running Sneakers', category: 'Sneakers', price: 4599, rating: 4.7, stock: 8, image: productImages['21'], description: 'Lightweight running sneakers with breathable mesh.' },
  { id: '22', name: 'Everyday Trainers', category: 'Sneakers', price: 3999, rating: 4.5, stock: 13, image: productImages['22'], description: 'Casual trainers for all-day comfort.' },
  { id: '23', name: 'Sport Sneakers', category: 'Sneakers', price: 4799, rating: 4.6, stock: 10, image: productImages['23'], description: 'Sport sneakers with cushioned support.' },
  { id: '24', name: 'High-Top Sneakers', category: 'Sneakers', price: 5199, rating: 4.5, stock: 7, image: productImages['24'], description: 'Stylish high-top sneakers built for street comfort.' },
  { id: '25', name: 'Aroma Diffuser', category: 'Wellness', price: 2199, rating: 4.7, stock: 12, image: productImages['25'], description: 'Ultrasonic diffuser with essential oil mist.' },
  { id: '26', name: 'Yoga Mat', category: 'Wellness', price: 1699, rating: 4.8, stock: 16, image: productImages['26'], description: 'Non-slip yoga mat for daily workouts.' },
  { id: '27', name: 'Wellness Tea Set', category: 'Wellness', price: 899, rating: 4.6, stock: 20, image: productImages['27'], description: 'Relaxing herbal tea set for evening rituals.' },
  { id: '28', name: 'Meditation Cushion', category: 'Wellness', price: 1299, rating: 4.5, stock: 10, image: productImages['28'], description: 'Supportive cushion for meditation and stretching.' },
  { id: '29', name: 'Ergonomic Desk Chair', category: 'Office', price: 10999, rating: 4.7, stock: 6, image: productImages['29'], description: 'Comfortable office chair with lumbar support.' },
  { id: '30', name: 'Desk Lamp', category: 'Office', price: 2499, rating: 4.5, stock: 9, image: productImages['30'], description: 'Adjustable LED desk lamp with dimmer control.' },
  { id: '31', name: 'Laptop Stand', category: 'Office', price: 1599, rating: 4.6, stock: 14, image: productImages['31'], description: 'Portable laptop stand for ergonomic work.' },
  { id: '32', name: 'Stationery Set', category: 'Office', price: 799, rating: 4.4, stock: 18, image: productImages['32'], description: 'Premium desk stationery set with notebooks.' }
];

export const maxProductPrice = Math.max(...mockProducts.map((product) => product.price));
