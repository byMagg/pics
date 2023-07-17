import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zsCSL4UBOI7fSkl-nvtnmDASOJu5_SR-SYBPG6uJivg'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
}

export default searchImages;