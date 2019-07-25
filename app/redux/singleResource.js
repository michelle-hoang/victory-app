import axios from 'axios';

const SET_RESOURCE = 'SET_RESOURCE';

export const setResource = singleResource => {
  return {
    type: SET_RESOURCE,
    singleResource,
  };
};

export function fetchSingleResource(id) {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/resources/${id}`);
      dispatch(setResource(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export const singleResourceReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_RESOURCE:
      return action.singleResource;
    default:
      return state;
  }
};
