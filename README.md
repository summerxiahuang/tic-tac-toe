# Tic-Tac-Toe Game

A modern, optimized tic-tac-toe game built with React featuring beautiful styling and time travel functionality.

## 🎮 Live Demo

Play the game: [https://summerxiahuang.github.io/tic-tac-toe](https://summerxiahuang.github.io/tic-tac-toe)

## ✨ Features

- 🎨 **Modern Design**: Beautiful glass morphism UI with gradient backgrounds
- ⚡ **Performance Optimized**: Uses React hooks (useCallback, useMemo, React.memo) for optimal performance
- 🕰️ **Time Travel**: Go back to any previous move and create alternate game histories
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🎯 **Accessibility**: Keyboard navigation and focus states included

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/summerxiahuang/tic-tac-toe.git
cd tic-tac-toe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Deploys the app to GitHub Pages. This command:
- Automatically builds the app for production
- Pushes the built files to the `gh-pages` branch
- Publishes your app to GitHub Pages

## 🌐 Deployment to GitHub Pages

### Step 1: Install gh-pages Package
```bash
npm install --save-dev gh-pages
```

### Step 2: Configure package.json
Add these configurations to your `package.json`:

```json
{
  "homepage": "https://your-username.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

**Important**: Replace `your-username` and `your-repo-name` with your actual GitHub username and repository name.

### Step 3: Commit and Push Changes
```bash
git add package.json
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

### Step 5: Configure GitHub Pages Source
1. Go to your GitHub repository
2. Click **Settings** (tab at the top)
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select **"Deploy from a branch"**
5. Choose branch: **`gh-pages`**
6. Click **Save**

### Step 6: Wait for Deployment
- Deployment usually takes 2-5 minutes
- Check the **Actions** tab for deployment status
- Your app will be live at: `https://your-username.github.io/your-repo-name`

### For Future Updates
Whenever you make changes to your app:
```bash
git add .
git commit -m "Your update message"
git push origin main
npm run deploy
```

## 🏗️ Project Structure

```
src/
├── App.js          # Main app component
├── App.css         # Main app styles
├── Game.js         # Game logic and state management
├── Board.js        # Game board component
├── Square.js       # Individual square component
├── index.js        # App entry point
└── index.css       # Global styles
```

## 🛠️ Technologies Used

- **React 19.1.0** - UI library
- **Create React App** - Build tool and development environment
- **CSS3** - Modern styling with gradients and animations
- **GitHub Pages** - Hosting platform

## 🎯 Game Features Explained

### Time Travel
- Click any move in the history to go back to that point
- Make new moves from any previous position
- Creates alternate game timelines

### Performance Optimizations
- **useCallback**: Prevents unnecessary re-renders of event handlers
- **useMemo**: Memoizes expensive calculations and component lists
- **React.memo**: Prevents re-rendering of components when props haven't changed

### Responsive Design
- Adapts to different screen sizes
- Touch-friendly on mobile devices
- Maintains visual appeal across all platforms

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Inspired by the React tutorial
- Styled with modern CSS techniques
