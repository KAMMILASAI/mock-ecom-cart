# 🛒 Mock E-Commerce Cart Application

A modern, full-featured e-commerce application built with React (Frontend) and Node.js/Express (Backend) featuring real product images, cart management, and checkout functionality.

## ✨ Features

### 🛍️ **Product Management**
- Browse products with real high-quality images from Unsplash
- Responsive product grid layout
- Product cards with pricing and descriptions
- Dynamic product loading from API

### 🛒 **Shopping Cart**
- Add products to cart with toast notifications
- Remove items from cart
- Update item quantities with +/- buttons
- Real-time cart total calculation
- Persistent cart state

### 💳 **Checkout Process**
- Secure checkout form with name and email validation
- Complete order processing with receipt generation
- Success/error notifications
- Cart clearing after successful purchase

### 🎨 **Modern UI/UX**
- Beautiful gradient backgrounds and animations
- Responsive design for all screen sizes
- Smooth hover effects and transitions
- Professional toast notification system
- Loading states and error handling
- React Icons integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Icons** - Beautiful icon library
- **CSS3** - Custom animations and responsive design
- **Vite** - Fast development server and build tool

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **RESTful APIs** - Clean API design
- **CORS** - Cross-origin resource sharing
- **Environment Configuration** - dotenv support

### APIs
- **Fake Store API** - Real product data with images
- **Unsplash API** - High-quality product photography
- **Custom Mock APIs** - Cart and checkout endpoints

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/KAMMILASAI/mock-ecom-cart.git
   cd mock-ecom-cart
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm start
   ```
   Backend will run on `http://localhost:5000`

3. **Frontend Setup** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application!

## 📁 Project Structure

```
mock-ecom-cart/
├── backend/                 # Express.js backend
│   ├── data/
│   │   ├── mockProducts.js  # Product data with real images
│   │   └── mockCart.js      # Cart state management
│   ├── models/
│   │   └── Product.js       # Product model
│   ├── routes/
│   │   ├── productRoutes.js # Product API endpoints
│   │   ├── cartRoutes.js    # Cart management APIs
│   │   └── checkoutRoutes.js# Checkout processing
│   ├── server.js            # Main server file
│   └── package.json
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.jsx    # Product display
│   │   │   ├── ProductsGrid.jsx   # Product grid layout
│   │   │   ├── CartView.jsx       # Shopping cart
│   │   │   ├── CheckoutModal.jsx  # Checkout form
│   │   │   └── Toast.jsx          # Notification system
│   │   ├── styles.css             # Global styles
│   │   ├── App.jsx                # Main app component
│   │   ├── api.js                 # API service functions
│   │   └── main.jsx               # App entry point
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Fetch all products with images

### Cart Management
- `GET /api/cart` - Get current cart with totals
- `POST /api/cart` - Add item to cart
- `PATCH /api/cart/:id` - Update item quantity
- `DELETE /api/cart/:id` - Remove item from cart

### Checkout
- `POST /api/checkout` - Process order with cart items

## 🎯 Features in Detail

### 🖼️ **Real Product Images**
- High-quality images from Unsplash
- Optimized 400x400px for fast loading
- Professional product photography
- Fallback images for reliability

### 🔔 **Toast Notifications**
- Success messages for cart actions
- Error handling with user-friendly messages
- Auto-dismiss after 3 seconds
- Manual close option

### 📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Beautiful on all screen sizes

### 🔒 **Error Handling**
- Comprehensive try/catch blocks
- User-friendly error messages
- Graceful fallbacks
- Network error recovery

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Fake Store API** for product data
- **Unsplash** for beautiful product images
- **React Icons** for the icon library
- **Vite** for the amazing build tool

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

**Happy Shopping! 🛒✨**

Built with ❤️ using React & Node.js
