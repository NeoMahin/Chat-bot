import axios from 'axios';

const data = new FormData();

const options = {
  method: 'POST',
  url: 'https://apiaiserg-osipchukv1.p.rapidapi.com/addContext',
  headers: {
    'x-rapidapi-key': 'Sign Up for Key',
    'x-rapidapi-host': 'ApiAIserg-osipchukV1.p.rapidapi.com'
  },
  data: data
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export default {
  getPosts: async () => {
    try {
      const response = await axios.get('/posts');
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}