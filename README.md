# BootCamp Simulator

## Description

BootCamp Simulator is a gamified way of learning Python. In the game, you play as a new Bootcamp student who is placed into a cohort with some fellow students. During your time at the Bootcamp you have 8 daily actions where you can study Python, practice coding Python through small coding exercises, socialize with members of your cohort, and relax to regain energy. Every action costs energy (with relaxing adding to your energy meter) and can have other effects. Studying Python and practicing Coding will boost your Coding progress bar, while socializing will help increase (or potentially decrease) your friendship bars. When socializing, you will be given 4 options of things to do with a randomly selected member of the cohort, where you can build the relationship by choosing things they like to do, but risk losing relationship if you choose something they don't like. Each day there is a chance for random events to occur which can either positively or negatively impact various stats.

### Structure

This repo contains one application:

- A frontend React App
- A backend Python App

### Try it yourself: _This is running an older version without the backend_

[Link to netlify](https://bootcampsim.netlify.app/)

### Features

**Core Gameplay**

- Interactive bootcamp simulation with daily actions
- Energy management system (8 actions per day)
- Study Python to increase coding skills
- Practice coding through coding challenges
- Socialize with cohort members to build relationships
- Random events that affect various stats
- Day progression system

**Technical Features**

- React frontend with modern UI
- Flask backend API with JWT authentication
- SQLite database for data persistence
- User registration and login system
- Game progress saving and loading
- Cross-origin resource sharing (CORS) support

**Current Implementation**

- ✅ User account creation and authentication
- ✅ Game state persistence between sessions
- ✅ Full bootcamp simulation gameplay
- ✅ Cohort member interaction system

### Future Features

**Enhanced Gameplay**

- Final project end game with coding challenges
- Score calculation using Coding Score with cohort friendship multiplier
- More complex random events and storylines
- Additional cohort member personalities and interactions

**UI/UX Improvements**

- Dark mode/light mode toggle
- Audio on/off settings
- Optimizing for mobile device usage
- Accessibility features for people with disabilities
- Animated buttons and smoother transitions
- Cohort member pixel art and character illustrations

**Technical Enhancements**

- PostgreSQL database option for production
- Enhanced security features
- Performance optimizations
- Comprehensive testing suite

### Documentation

[Documentation of this application can be found here.](./docs)

## Installation

### Install Node.js

If you haven't already, make sure you have node and NVM installed.

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), (`20.5.0` at
   time of writing).
   ```
   nvm install 20
   ```

### Set up the project

1. Fork this repository
2. Rename the fork
3. Clone the fork to your local machine

### How to run the application

#### Frontend Setup

1. Install dependencies from the root directory:

```bash
npm install
```

2. Start the frontend development server:

```bash
npm run dev
```

The React application will be available at `http://localhost:3000`

#### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Create a virtual environment:

```bash
python -m venv env
```

3. Activate the virtual environment:

```bash
# On macOS/Linux:
source env/bin/activate

# On Windows:
env\Scripts\activate
```

4. Install the requirements:

```bash
pip install -r requirements_flask.txt
```

5. Run the Flask application:

```bash
python app.py
```

The API will be available at `http://localhost:5001`

#### Full Application

Once both servers are running:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5001`

The application supports:

- User registration and authentication
- Game progress saving and loading
- Full bootcamp simulation gameplay

#### Troubleshooting

**Port Conflicts**

- If port 5000 is in use (common on macOS with AirPlay Receiver), the backend runs on port 5001
- If port 3000 is in use, Vite will automatically suggest an alternative port (e.g., 3001)
- To stop a process using a specific port: `lsof -ti:[PORT] | xargs kill`
- Example: `lsof -ti:5001 | xargs kill` to stop processes on port 5001

**CORS Issues**

- Backend is configured to accept requests from ports 3000 and 3001
- If frontend runs on a different port, update CORS in `backend/app.py`
- Clear browser cache if CORS errors persist

**Backend Issues**

- Ensure you're in the `backend` directory when running Flask commands
- Activate the virtual environment before installing packages
- Use `requirements_flask.txt` for the most up-to-date dependencies
- If database issues occur, delete `backend/instance/bootcampsim.db` to reset

**Frontend Issues**

- Run `npm install` if you encounter module-related errors
- Clear browser cache if authentication seems to persist incorrectly
- Check browser console for CORS or API connection errors

## Author and acknowledgment

This project was created by:
[Emily Sadler](https://github.com/EmiSadler)

Original concept by:
[Alister Ko](https://github.com/alistershko)
