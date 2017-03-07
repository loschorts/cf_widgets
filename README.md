# cf_widgets

cf_widgets is a Node/React/Redux app that simulates a small portion of the
actual Cloudflare User Dashboard.

## How To Run

0. Clone this repository.
0. Navigate to the directory in terminal.
0. `$ ./start.sh`
0. Enter your cloudflare credentials when prompted (see note below).
0. open `localhost:3000` in Chrome

Dependencies: `node`

*Note:* Your credentials are stored in ENV variables by `server.js` and
forgetten when the server process is closed. All requests originating from the
server are done via `https`.

## Features

- Node.js server receives API requests from the client and issues Cloudflare API
requests  same-origin policies.

- 

