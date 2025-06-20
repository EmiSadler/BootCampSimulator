# BootCamp Simulator

## Description

BootCamp Simulator is a gamified way of learning Python. In the game, you play as a new Bootcamp student who is placed into a cohort with some fellow students. During your time at the Bootcamp you have 8 daily actions where you can study Python, practice coding Python through small coding exercises, socialize with members of your cohort, and relax to regain energy. Every action costs energy (with relaxing adding to your energy meter) and can have other effects. Studying Python and practicing Coding will boost your Coding progress bar, while socializing will help increase (or potentially decrease) your friendship bars. When socializing, you will be given 4 options of things to do with a randomly selected member of the cohort, where you can build the relationship by choosing things they like to do, but risk losing relationship if you choose something they don't like. Each day there is a chance for random events to occur which can either positively or negatively impact various stats.

### Structure

This repo contains one application:

- A frontend React App
- A backend Python App

### Try it yourself:

[Link to netlify](https://bootcampsim.netlify.app/)

### Features

- Dark mode/light mode
- Audio on/off
- How to Play modal
- Difficulty selector (easy/hard)
  - Easy mode: always shows cast, 30 second timer
  - Hard mode: only shows cast on first film, 20 second timer
- Start game button
- Fetches initial film from API
- Input box for player to name a movie with overlapping cast member
- Auto complete dropdown box
- Dropdown box can be navigated using keyboard arrows and enter or trackpad/mouse
- Timer to track turn length
- End of game modal to show score and play again button
- Can navigate back to home page using logo

### Future Features

**Accounts**

- Users can create an account
- Users can login
- Game state will persist between sessions so users don't lose their games

**End Game**

- A final project end game where player is presented with a coding challenge
- Score is calculated by Coding Score with a cohort friendship level multiplier

**Styling and misc.**

- Optimising for use on a mobile device
- Accessibility features for people with disabilities
- Animated buttons
- Refining the UX/UI
- Dark mode/light mode
- Cohort pixel art

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
3. Clone the fork to their local machine

### How to run the server and use the app

1. Start the server application from the root directory in dev mode:

```
; npm run dev
```

You should now be able to open your browser and go to the
`http://localhost:3000` to get to the homepage and start exploring the application.

### Set up the backend

1. Create a virtual environment

```
python -m venv env
source env/bin/activate
```

2. Install the requirements

```
pip install -r requirements.txt
```

3. Run the application

```
uvicorn app:app --reload
```

## Author and acknowledgment

This project was created by:
[Emily Sadler](https://github.com/EmiSadler)

Original concept by:
[Alister Ko](https://github.com/alistershko)
