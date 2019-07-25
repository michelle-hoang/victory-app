import axios from 'axios';

export const GET_PRACTICES = 'GET_PRACTICES';
export const ADD_PRACTICE = 'ADD_PRACTICE';
export const REMOVE_PRACTICE = 'REMOVE_PRACTICE';

export const getPractices = practices => {
  return {
    type: GET_PRACTICES,
    practices,
  };
};

export const addPractice = practice => {
  return {
    type: ADD_PRACTICE,
    practice,
  };
};

export const removePractice = practiceId => {
  return {
    type: REMOVE_PRACTICE,
    practiceId,
  };
};

export function fetchPractices() {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/practices');
      dispatch(getPractices(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function postPractice(newPractice) {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/practices', newPractice);
      dispatch(addPractice(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deletePractice(practiceId) {
  return async dispatch => {
    try {
      await axios.delete(`/api/practices/${practiceId}`);
      dispatch(removePractice(practiceId));
    } catch (error) {
      console.log(error);
    }
  };
}

export function practiceReducer(state = [], action) {
  switch (action.type) {
    case GET_PRACTICES:
      return action.practices;
    case ADD_PRACTICE:
      return [...state, action.practice];
    case REMOVE_PRACTICE:
      return state.filter(practice => practice.id !== action.practiceId);
    default:
      return state;
  }
}
