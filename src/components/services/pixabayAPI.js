import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '35210177-92e7d5da23c5a5f8bdce8ac7a';
const options = 'image_type=photo&orientation=horizontal&per_page=12';

export const fetchImages = async (searchName, page) => {
  const response = await axios.get(
    `/?q=${searchName}&page=${page}&key=${API_KEY}&${options}`
  );
  return response.data;
};
