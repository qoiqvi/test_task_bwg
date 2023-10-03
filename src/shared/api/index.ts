import axios from "axios"

export const Api = axios.create({
	baseURL: "https://api.stackexchange.com/2.3",
	params: {
		site: "stackoverflow",
	},
	headers: {
		"access-control-allow-credential": false,
	},
	// withCredentials: true,
})
