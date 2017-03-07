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

- **Node Express server** receives API requests from the client and issues Cloudflare API requests to avoid same-origin policies encountered when issuing Cloudflare requests directly from client.

- **Modular Components** allow for rapid construction of new dashboard tools:
	- [`card.jsx`](client/components/card.jsx): Accepts display information and a `tool` component as props and creates a new dashboard card with optional timestamp showing time since last modification.
	- [`zone_setting_select.jsx`](client/components/select.jsx): accepts `setting` and `option` props and dispatches API PATCH requests when an option is selected.
	- [`switch.jsx`](client/components/switch.jsx): accepts a `setting` and dispatches an API PATCH request to toggle the setting `on` and `off` when clicked.

- **Rollback-able tools:** Setting values (`off`, `on`, `flexible`, etc) are stored in a **Redux store with Undo**, allowing tools to optimistically update when user input is received but roll back if their API requests fail. See [`reducers/zone_settings.js`](client/reducers/zone_settings.js) and [`actions/zone_settings.js`](client/actions/zone_settings.js).

- [`errors.jsx`](client/components/errors.jsx): Temporary screen-bottom pop-up triggered whenever network requests fail; displays Cloudflare Error code and message if provided, and if not, shows HTTP response code and message.

- [`nav_bar.jsx`](client/components/nav_bar.jsx) + [`button.jsx`](client/components/button.jsx): Navigation panel implemented via `react-router` `Links`.

## Design Choices

- **Libraries**: Starting with the assumptions that:

	0. User input would alter application state frequently and 

	0. application state would be shared across multiple views/components, 

I opted for a React/Redux frontend. React allows for rapid DOM manipulation, and Redux centralizes application state, making it easy for multiple components to read/update shared information.

- **Node Express server**: I created a lightweight server to wrap client-side API requests to get around same-origin browser restrictions. I chose Node because:

	0. It's lightweight and easily configurable compared to a full-fledge web framework like Ruby on Rails.

	0. Shared language conventions between back/front end code reduces API friction.

	0. I wanted to try Node Express.

- **Credential storage**: I opted store user cloudflare credentials server-side via ENV vars. This was done because 

	0. Session storage on the front-end would add development overhead, while not promoting the objective of demonstrating UX development skills

	0. Adding TLS to ensure security would also slow down development time (although this could be done relatively faster via cloudflare)

