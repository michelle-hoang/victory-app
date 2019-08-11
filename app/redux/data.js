import axios from 'axios';

const GET_DATA = 'GET_DATA';

const getData = data => ({ type: GET_DATA, data });

export const fetchData = () => async dispatch => {
  try {
    const res = await axios.get('/api/data');
    dispatch(getData(res.data));
  } catch (err) {
    console.error(err);
  }
};

export default function dataReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.data;
    default:
      return state;
  }
}
