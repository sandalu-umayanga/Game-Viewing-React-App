# 🎮 Game Hub

**Game Hub** is a modern, responsive web application for discovering video games. Built with React and Chakra UI, it leverages the RAWG.io API to provide a comprehensive database of games with powerful search and filtering capabilities.

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- **🔎 Instant Search**: Find your favorite games instantly with the search bar.
- **📂 Genre Filtering**: Browse games by genres like Action, RPG, Strategy, and more.
- **🎮 Platform Filtering**: Filter results by platform (PC, PlayStation, Xbox, etc.).
- **⚡ Sorting**: Sort games by Relevance, Date Added, Name, Release Date, Popularity, or Rating.
- **🌗 Dark & Light Mode**: Seamlessly switch between themes with a stunning live animated background.
- **📱 Fully Responsive**: Optimized for all devices, featuring a mobile-friendly drawer navigation.
- **📊 Rich Game Cards**: cards capable of displaying platform icons, color-coded critic scores (Metacritic style), and rating emojis.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Chakra UI v3](https://chakra-ui.com/)
- **Data Fetching**: [Axios](https://axios-http.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sandalu-umayanga/Game-Viewing-React-App.git
    cd react-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` to view the app.

## 📁 Project Structure

```
src/
├── assets/             # Images and static assets
├── components/         # Reusable UI components
│   ├── ui/             # Chakra UI wrapper components
│   ├── GameCard.tsx    # Individual game display card
│   ├── GameGrid.tsx    # Grid layout for game cards
│   ├── GenreList.tsx   # Sidebar genre filter
│   ├── NavBar.tsx      # Top navigation bar
│   └── ...
├── hooks/              # Custom React hooks (useGames, useGenres, etc.)
├── services/           # API services and configuration
├── App.tsx             # Main application component
└── main.tsx            # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
