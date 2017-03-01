export const getUserDetails = () => {
	return fetch("api/user").then(r => r.json()).catch(errCb);
};


const errCb = err => console.log('request failed', err);