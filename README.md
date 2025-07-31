#  Feedback Collection System- Frontend

A modern, responsive feedback collection system built with React.js and Node.js, featuring real-time data visualization and seamless user experience.


## ✨ Features

### 🎯 Core Functionality
- **Interactive Feedback Form** - Clean, user-friendly form with validation
- **Real-time Dashboard** - Live feedback visualization and analytics
- **Rating System** - 5-star rating system with visual indicators
- **Search & Filter** - Advanced filtering by rating and search functionality
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)

### 📊 Dashboard Features
- **Statistics Overview** - Total feedbacks and average rating display
- **Advanced Filtering** - Filter by rating (1-5 stars) and search by name/email/content
- **Real-time Updates** - Refresh functionality to get latest feedback
- **Professional Cards** - Clean, organized feedback display cards

### 🎨 Design Highlights
- **Modern UI/UX** - Apple-level design aesthetics with smooth animations
- **Gradient Themes** - Beautiful gradient backgrounds and hover effects
- **Micro-interactions** - Subtle animations and transitions
- **Mobile-First** - Fully responsive design with mobile optimization

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Airtable account (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thivagarradhakrishnan/feedbackCollectionApp-frontend.git
   cd feedbackCollectionApp-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with modern CSS features
- **Lucide React** - Beautiful, customizable icons

### Backend (Required)
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Airtable** - Cloud-based database solution

## 📁 Project Structure

```
feedback-system/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx       # Main dashboard component
│   │   ├── FeedbackCard.jsx    # Individual feedback card
│   │   └── FeedbackForm.jsx    # Feedback submission form
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   ├── styles.css             # Global styles and responsive design
│   └── index.css              # Base CSS imports
├── index.html                 # HTML template
├── package.json              # Dependencies and scripts
├── jsconfig.json             # JavaScript configuration
├── eslint.config.js          # ESLint configuration
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## 🎯 Usage

### Submitting Feedback
1. Navigate to the "Submit Feedback" tab
2. Fill in all required fields:
   - **Name** - Your full name
   - **Phone** - Contact number
   - **Email** - Email address
   - **Feedback** - Your detailed feedback
   - **Rating** - Rate from 1-5 stars
3. Click "Submit Feedback"
4. Receive confirmation message

### Viewing Dashboard
1. Click on "View Dashboard" tab
2. View statistics (total feedbacks, average rating)
3. Use search bar to find specific feedback
4. Filter by rating using the dropdown
5. Click "Refresh Data" to get latest updates

## 🔧 Configuration

### Environment Setup
The frontend expects a backend API running on `http://localhost:5000`. Make sure your backend is configured with:

- **POST** `/feedback` - Submit new feedback
- **GET** `/feedback` - Retrieve all feedbacks

### Backend Integration
Your backend should return feedback data in this format:
```json
{
  "id": "unique_id",
  "name": "User Name",
  "email": "user@example.com",
  "phone": "1234567890",
  "feedback": "Feedback content",
  "rating": 5,
  "timestamp": "2024-12-15T14:30:00.000Z"
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop** - 1200px and above
- **Tablet** - 768px to 1199px
- **Mobile** - 480px to 767px
- **Small Mobile** - 360px to 479px
- **Extra Small** - Below 360px

## 🎨 Customization

### Styling
- Modify `src/styles.css` for global styles
- Update CSS variables for color themes
- Customize component-specific styles

### Components
- **FeedbackForm.jsx** - Customize form fields and validation
- **Dashboard.jsx** - Modify dashboard layout and features
- **FeedbackCard.jsx** - Update card design and information display

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify/Vercel
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting platform
3. Configure environment variables if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Thivagar R*
- Modern feedback collection solution
- Built with ❤️ using React.js

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality
- **v1.1.0** - Added responsive design and mobile optimization
- **v1.2.0** - Enhanced dashboard with filtering and search

---

**Made with ❤️ by Thivagar R**