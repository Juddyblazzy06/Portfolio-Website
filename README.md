# Modern Portfolio Website

A modern, responsive portfolio website built with React 18, featuring dark/light mode toggle, smooth animations, and a clean, professional design.

## ✨ Features

- **🌙 Dark/Light Mode Toggle** - Seamless theme switching with smooth transitions
- **🎨 Modern UI Components** - Glassmorphism effects, gradient buttons, and modern cards
- **⚡ Smooth Animations** - Powered by Framer Motion for fluid, engaging interactions
- **📱 Fully Responsive** - Optimized for all device sizes and screen orientations
- **🚀 Performance Optimized** - Lazy loading, code splitting, and optimized bundle size
- **📧 Contact Form** - Functional contact form with EmailJS integration
- **♿ Accessible** - ARIA labels, semantic HTML, and keyboard navigation support
- **🔍 SEO Optimized** - Meta tags, Open Graph, and Twitter Card support

## 🛠️ Tech Stack

- **React 18** - Latest React with hooks and concurrent features
- **React Router v6** - Client-side routing
- **Framer Motion** - Advanced animations and gestures
- **SCSS** - Enhanced CSS with variables and mixins
- **EmailJS** - Contact form functionality
- **React Icons** - Beautiful icon library
- **Particle.js** - Interactive background particles

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up EmailJS (Optional)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the credentials in `src/containers/contact/index.jsx`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── AnimatedSection/  # Animation wrapper component
│   ├── ModernCard/       # Modern card component
│   ├── ThemeToggle/      # Dark/light mode toggle
│   ├── navBar/          # Navigation component
│   └── pageHeaderContent/ # Page header component
├── containers/           # Page components
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── home/            # Home page
│   ├── portfolio/       # Portfolio page
│   ├── resume/          # Resume page
│   └── skills/          # Skills page
├── contexts/            # React contexts
│   └── ThemeContext.js  # Theme management
├── utils.js/            # Utility functions
│   └── particles.js     # Particle configuration
└── App.js              # Main app component
```

## 🎨 Customization

### Colors and Themes

The color scheme is managed through CSS variables in `src/index.css`:

```css
:root {
  --theme-background-color: #1d1d1d;
  --theme-main-color: #ffdd40;
  --theme-sub-text-color: #ffffff;
  /* ... more variables */
}
```

### Content Updates

1. **Personal Information** - Update `src/containers/about/index.jsx`
2. **Skills** - Modify `src/containers/skills/utils.js`
3. **Portfolio Projects** - Edit `src/containers/portfolio/index.jsx`
4. **Resume Data** - Update `src/containers/resume/utils.js`

### Images

Replace the placeholder images in `src/images/` with your own:
- `image1.jpg` to `image5.jpg` for portfolio projects
- Update the imports in the portfolio component

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure environment variables if needed

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React app
3. Deploy with zero configuration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [EmailJS](https://www.emailjs.com/) for contact form functionality
- [Particle.js](https://particles.js.org/) for interactive backgrounds

---

**Made with ❤️ by John Doe**