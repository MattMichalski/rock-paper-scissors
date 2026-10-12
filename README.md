# Rock Paper Scissors

🎮 **[Play the game](https://mattmichalski.github.io/rock-paper-scissors/browser/rockPaperScissors.html)**

Two JavaScript rock-paper-scissors games built with object-oriented programming —
a console version and a full browser version — played against the computer, first
to 10 wins.

## What's inside

- `console/` — automated console simulation (`node rps.js`)
- `browser/` — interactive browser game (open `rockPaperScissors.html`)

## Features

- First to 10 wins takes the match
- Win/loss/draw tracking across rounds
- `Player` class encapsulating name, wins, losses, draws, and score
- Browser version builds its entire UI programmatically with
  `document.createElement` (no static game markup)
- Name registration with empty-input guard, live scoreboard, and end screens
  with Play Again / Close

## Tech

- Vanilla JavaScript (no frameworks)
- HTML / CSS (Bootstrap classes in the browser version)
- OOP: game and player modeled as classes

## Run it

Console version (requires [Node.js](https://nodejs.org)):

```bash
node console/rps.js
```

Browser version — no build step needed:

1. Clone the repo
2. Open `browser/rockPaperScissors.html` in a browser
   (or serve the folder with any static server, e.g. `npx serve browser`)

Or play the live demo via GitHub Pages: https://mattmichalski.github.io/rock-paper-scissors/browser/rockPaperScissors.html

## What this project shows

Object-oriented design in JavaScript, game-state management, and round/score
logic — plus programmatic DOM construction, the building blocks of interactive
apps.
