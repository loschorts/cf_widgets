# cf_widgets

cf_widgets is a Node/React/Redux app that simulates a small portion of the actual Cloudflare User Dashboard.

## How To Run

0. Clone this repository.
0. Navigate to the directory in terminal.
0. `$ ./start.sh`
0. Enter your cloudflare credentials when prompted (see note below).
0. open `localhost:3000` in Chrome

Dependencies: `node`

*Note:* Your credentials are stored in ENV variables by `server.js` and forgetten when the server process is closed. All requests originating from the server are done via `https`.

## Features

- **Node server** receives API requests from the client and issues Cloudflare API
requests to avoid same-origin policies encountered when issuing directly from client.

- **Modular Components** allow for rapid construction of new dashboard tools:
	- [`card.jsx`](client/components/card.jsx): Accepts display information and a `tool` component as props and creates a new dashboard card with optional timestamp showing time since last modification.
	- [`zone_setting_select.jsx`](client/components/select.jsx): accepts `setting` and `option` props and dispatches API PATCH requests when an option is selected.
	- [`switch.jsx`](client/components/switch.jsx): accepts a `setting` and dispatches an API PATCH request to toggle the setting `on` and `off` when clicked.

- **Rollback-able tools:** Setting values (`off`, `on`, `flexible`, etc) are stored in a **Redux store with Undo**, allowing tools to optimistically update when user input is received but roll back if their API requests fail.

- [`nav_bar.jsx`](client/components/nav_bar.jsx) + [`button.jsx`](client/components/button.jsx): Navigate between panels via `react-router` `Links`.
- [`errors.jsx`](client/components/errors.jsx): Temporary screen-bottom pop-up triggered whenever network requests fail; displays Cloudflare Error code and message if provided, and if not, shows HTTP response code and message.

