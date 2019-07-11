import axios from 'axios';

export default axios.create( {
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 43d03eeab764a0629fe42efea9118082c39bb8617d26035a68d4d289c8db44d7Z'
    }
});
