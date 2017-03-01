export const getUserDetails = () => {
	return fetch("api/user").then(r => r.json());
};


const errCb = err => console.log('request failed', err);