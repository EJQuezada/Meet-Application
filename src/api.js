import { mockData } from "./mock-data";
import axios from "axios";

export const getEvents = async () => {
    return mockData;
};

export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};

export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');
    const tokenCheck = accessToken && (await checkToken(accessToken));
        if (!accessToken || tokenCheck.error) {
            await localStorage.removeItem('access_token');
            const searchParams = new URLSearchParams(window.location.search);
            const code = await searchParams.get('code');
            if (!code) {
                const results = await axios.get(
                    "YOUR_SERVERLESS_GET_AUTH_URL_ENDPOINT"
                );
                const { authUrl } = results.data;
                return (window.location.href = authUrl);
            }
            return code && getToken(code);
        }
        return accessToken;
}