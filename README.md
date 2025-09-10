# 🏕️ The Wild Oasis

> _A modern hotel management system for boutique accommodations_

**The Wild Oasis** is a comprehensive internal hotel management application designed for small boutique hotels with luxury wooden cabins. This powerful system streamlines operations by providing hotel employees with intuitive tools to manage bookings, cabins, guests, and daily operations.

---

## ✨ Features

### 🏠 **Cabin Management**

- Complete cabin inventory with photos, names, capacity, and pricing
- Real-time availability tracking and discount management
- Cabin creation, editing, and maintenance scheduling

### 📋 **Booking System**

- Comprehensive booking management with arrival/departure tracking
- Guest data management with status updates
- Payment processing and confirmation handling
- Check-in/check-out workflow automation

### 👥 **Guest Experience**

- Detailed guest profiles and preferences
- Breakfast service management and pricing
- Special requests and accommodation tracking
- Guest communication history

### 📊 **Analytics Dashboard**

- Real-time hotel statistics and occupancy rates
- Revenue tracking with daily, monthly, and yearly views
- Recent booking trends and guest analytics
- Performance metrics for informed decision-making

### 🔐 **User Management**

- Secure authentication system for hotel employees
- Role-based access control
- User profile management and settings
- Password security and account management

### ⚙️ **Administrative Tools**

- Hotel settings configuration (breakfast prices, booking limits)
- System-wide preferences and customization
- Dark mode support for comfortable usage
- Application-wide settings management

---

## 🛠️ Technology Stack

### **Frontend Framework**

- **React** - Modern component-based UI development
- **React Router** - Client-side routing and navigation
- **Styled Components** - Component-scoped CSS styling

### **State Management**

- **React Query** - Server state management and caching
- **Context API** - Local UI state management (Dark mode, user context)

### **Backend & Database**

- **Supabase** - Backend-as-a-Service providing:
  - PostgreSQL database
  - Real-time subscriptions
  - Authentication & authorization
  - File storage for cabin images

### **Form Management**

- **React Hook Form** - Efficient form handling and validation

### **Development Tools**

- **React Query Devtools** - State debugging and inspection
- **React Hot Toast** - User notifications and feedback
- **Date-fns** - Date manipulation and formatting

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0 or higher)
- npm or yarn package manager
- Supabase account for backend services

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/the-wild-oasis.git
   cd the-wild-oasis
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   REACT_APP_SUPABASE_URL=your_supabase_project_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 📱 Application Structure

The application follows a well-organized feature-based architecture:

```
src/
├── components/          # Reusable UI components
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── pages/              # Route components
├── services/           # API integration layer
├── styles/             # Global styles and themes
├── ui/                 # Layout and common UI elements
└── utils/              # Utility functions and helpers
```

### **Key Pages**

- **Dashboard** (`/dashboard`) - Overview and statistics
- **Bookings** (`/bookings`) - Booking management interface
- **Cabins** (`/cabins`) - Cabin inventory management
- **Guests** (`/guests`) - Guest information system
- **Settings** (`/settings`) - Application configuration
- **Account** (`/account`) - User profile management

---

## 🔐 Authentication & Security

The application implements robust security measures:

- **Protected Routes** - All main functionality requires authentication
- **Supabase Authentication** - Secure user management
- **Role-based Access** - Different permission levels for staff
- **Secure API Integration** - All database operations through Supabase RLS

### Login System

Hotel employees must authenticate to access the system. New user registration is restricted to ensure security.

---

## 💾 Database Schema

The application uses a PostgreSQL database with the following core entities:

- **Cabins** - Hotel room inventory
- **Bookings** - Reservation records
- **Guests** - Customer information
- **Settings** - Application configuration
- **Users** - Employee accounts

---

## 🎨 User Experience

### **Design Philosophy**

- Clean, professional interface suitable for hotel staff
- Intuitive navigation with clear visual hierarchy
- Responsive design for various screen sizes
- Dark/light mode support for user preference

### **Performance Optimizations**

- React Query caching for instant data access
- Optimistic updates for seamless user experience
- Lazy loading and code splitting
- Efficient re-rendering with proper state management

---

## 🔧 Development Features

### **Developer Experience**

- Hot module replacement for rapid development
- React Query DevTools for state inspection
- Comprehensive error handling and user feedback
- TypeScript-ready architecture (if migrating)

### **Code Quality**

- Component-based architecture for reusability
- Custom hooks for logic separation
- Consistent naming conventions
- Modular service layer for API interactions

---

## 🚀 Future Enhancements

### **Planned Features**

- **Customer-facing booking website** - Public interface for direct bookings
- **Mobile application** - Native iOS/Android apps for staff
- **Advanced reporting** - Detailed analytics and business intelligence
- **Multi-property support** - Manage multiple hotel locations
- **Integration APIs** - Connect with third-party booking platforms

### **Technical Improvements**

- Migration to TypeScript for enhanced type safety
- Progressive Web App (PWA) capabilities
- Advanced caching strategies
- Performance monitoring and analytics

---

## 🤝 Contributing

We welcome contributions to The Wild Oasis! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**

- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## 🙏 Acknowledgments

- **Jonas Schmedtmann** - Course instructor and project guidance
- **Supabase Team** - Excellent backend-as-a-service platform
- **React Community** - Outstanding ecosystem and documentation
- **Open Source Contributors** - All the amazing libraries that made this possible

---

## 📞 Contact

**Project Developer**: Mohamed Tamer Nassr

- 📧 Email: mohamed.tamer.nassr@gmail.com
- 💼 LinkedIn: (https://www.linkedin.com/in/mohamed-tamer-nassr)

- 🌐 The Demo: (https://webosis.netlify.app)

---

_Built with ❤️ for the hospitality industry_
