import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


// Hook for searching api and handling errors
export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Search Yelp API
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'chicago',
                }
            });
            setResults(response.data.businesses);
        } catch(err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Run function only one time when rendered
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};