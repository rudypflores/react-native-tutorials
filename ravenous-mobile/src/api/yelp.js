import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer 7kt0bCSW_gpQ8jB8vP2S8HMIBb-1iCGlG_ms7JRaeD73yWNQ2XtP219Qrd_KQ3lteJySRqVlnkh1pmBy1T8V8-PnqaDObr_VvglFZmRPmDLmfLlEXMHQr79UZYxPXXYx',
    },
});