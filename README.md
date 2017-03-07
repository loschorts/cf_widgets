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

- Node server receives API requests from the client and issues Cloudflare API
requests  same-origin policies.

- Modular Components allow for rapid construction of new dashboard tools:
	- [`card.jsx`](client/components/card.jsx): Accepts display information and a `tool` component as props and creates a new dashboard card with optional timestamp.
	- [`zone_setting_select.jsx`](client/components/select.jsx): accepts `setting` and `option` props and dispatches API PATCH requests when an option is selected.
	- [`switch.jsx`](client/components/switch.jsx): accepts a `setting` and dispatches an API PATCH request to toggle the setting `on` and `off` when clicked.

- Reusable `Card` component allows modular construction of new dashboard tools.
- Reusable `Select` component 

