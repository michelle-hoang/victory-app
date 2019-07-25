import axios from 'axios';

const SET_PRACTICE = 'SET_PRACTICE';

export const setPractice = singlePractice => {
  return {
    type: SET_PRACTICE,
    singlePractice,
  };
};

export function fetchSinglePractice(id) {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/practices/${id}`);
      dispatch(setPractice(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export const singlePracticeReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRACTICE:
      return action.singlePractice;
    default:
      return state;
  }
};
