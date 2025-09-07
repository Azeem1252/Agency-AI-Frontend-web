# Agency.ai - Modern Digital Agency Website

A sleek, responsive, and high-performance landing page for a digital marketing agency, built with **React**, featuring smooth animations, a dark/light mode toggle, and a functional contact form. This project was created for learning purposes by following a YouTube tutorial, helping me explore modern web development techniques with React and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-%2338B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.2-%23005FEE?logo=framer)
## ✨ Features

- **Modern UI/UX Design:** Clean and professional layout prioritizing user experience.
- **Fully Responsive:** Optimized for seamless performance across desktop, tablet, and mobile devices.
- **Dark/Light Mode:** Smooth theme switching with persistent user preferences using local storage.
- **Smooth Animations:** Engaging page transitions and scroll effects powered by Framer Motion.
- **Functional Contact Form:** Integrated with Web3Forms for efficient lead capture.
- **Interactive Components:** Hover effects on service cards for a dynamic user experience.
- **Performance Optimized:** Built with React best practices for fast load times and smooth interactions.

## 🛠️ Tech Stack

- **Framework:** React
- **Styling:** Tailwind CSS
- **Animations:** Motion.Dev
- **Icons/Images:** Local SVGs and image assets
- **Form Handling:** Web3Forms
- **Notifications:** React Hot Toast

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 16 or higher
- Package manager: **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Azeem1252/Agency-AI-Frontend-web
   cd agency-ai-website
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in Browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal) to view the website.

## 📦 Project Structure

```
src/
├── assets/
│   └── assets.js          # Exports images and icons
├── components/
│   ├── ContactUs.jsx      # Contact form with Web3Forms integration
│   ├── Footer.jsx         # Footer with newsletter signup
│   ├── Hero.jsx           # Hero section with call-to-action
│   ├── NavBar.jsx         # Navigation bar with theme toggle
│   ├── OurWork.jsx        # Portfolio showcase section
│   ├── Service_card.jsx   # Reusable service card with hover effects
│   ├── Services.jsx       # Services overview section
│   ├── Teams.jsx          # Team members showcase
│   ├── Title.jsx          # Reusable section title component
│   ├── TrustedBy.jsx      # Client logos section
│   └── themetogglebutn.jsx # Theme toggle button logic
└── App.jsx                # Main app component
```

## ⚙️ Configuration

### Contact Form (Web3Forms)

To enable the contact form in `ContactUs.jsx`, configure it with a Web3Forms access key:

1. Sign up for a free account at Web3Forms.

2. Retrieve your access key from the Web3Forms dashboard.

3. Update the access key in `ContactUs.jsx`:

   ```jsx
   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
   ```

4. Customize form settings and redirects in the Web3Forms dashboard.

## 🎨 Customization

- **Content:** Modify text, images, and links in the respective component files under `src/components/`.
- **Styling:** Adjust Tailwind CSS classes in components to change the design.
- **Colors:** The primary color is `#5044e5`. Update this in Tailwind classes for rebranding.
- **Theme:** Customize dark mode styles using the `dark:` prefix in `tailwind.config.js`.

## 📜 Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production.
- `npm run preview` - Previews the production build locally.

## 🌐 Live Demo

\[Add your live demo link here after deployment\]

## 📝 Learning Journey

This project was built as part of my learning journey, following a YouTube tutorial to deepen my understanding of React, Tailwind CSS, and modern web development practices. It was a fantastic opportunity to explore component-based architecture, responsive design, and third-party integrations like Web3Forms.


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page to get started.

---

**Built with ❤️ using React and Tailwind CSS.**
