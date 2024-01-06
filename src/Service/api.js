import axios from 'axios';

const baseURL = 'https://www.ag-grid.com/example-assets';
// create a user by admin
export const getSpaceMissionData = async() => {
    try {
        return await axios.get(`${baseURL}/space-mission-data.json`);
    } catch (error) {
        return error.response
    }
}