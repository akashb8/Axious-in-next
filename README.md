# 🚀 Modern User Directory & Community Posts App

A premium, fully-responsive web application built with **Next.js**, **React**, and **Tailwind CSS**. This project fetches data from JSONPlaceholder and presents it through a beautifully crafted, modern user interface featuring glassmorphism, smooth micro-animations, and full dark-mode support.

## ✨ Features

- **Modern UI/UX**: Premium aesthetic with gradient backgrounds, glassmorphic elements, and soft shadows.
- **Dark Mode Support**: Seamless transition between light and dark themes based on system preferences.
- **Server-Side Rendering (SSR)**: Utilizes Next.js App Router for optimal performance and SEO.
- **Responsive Design**: Flawless experience across mobile, tablet, and desktop devices.
- **Custom Scrollbars**: Custom-styled scrollbars that adapt to your theme.
- **TypeScript**: Strictly typed for better developer experience and reliability.

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Library**: React
- **Styling**: Tailwind CSS
- **Data Fetching**: Axios
- **Language**: TypeScript

## 📂 Folder Structure

```text
📦 myapp
├── 📁 public               # Static assets like images and icons
├── 📁 src
│   ├── 📁 app              # Next.js App Router configuration
│   │   ├── 📁 components   # Route: /components (Community Posts feed)
│   │   │   └── 📄 page.tsx # Posts page implementation
│   │   ├── 📄 globals.css  # Global styles and Tailwind configuration
│   │   ├── 📄 layout.tsx   # Root layout wrapping the application
│   │   └── 📄 page.tsx     # Route: / (Home - User Directory dashboard)
│   └── 📁 types            # TypeScript definitions
│       └── 📄 type.ts      # Interfaces for User and Post data
├── 📄 next.config.ts       # Next.js configuration
├── 📄 package.json         # Project dependencies and scripts
└── 📄 tsconfig.json        # TypeScript configuration
```

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd myapp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the result!

## 📸 Previews

*Experience dynamic hover states, glassmorphic cards, and a premium aesthetic directly in your browser!*

---
*Built with ❤️ using Next.js & Tailwind CSS*
