import axios from 'axios';

export const GET_RESOURCES = 'GET_RESOURCES';
export const ADD_RESOURCE = 'ADD_RESOURCE';
export const REMOVE_RESOURCE = 'DELETE_RESOURCE';

export const getResources = resources => {
  return {
    type: GET_RESOURCES,
    resources,
  };
};

export const addResource = resource => {
  return {
    type: ADD_RESOURCE,
    resource,
  };
};

export const removeResource = resourceId => {
  return {
    type: REMOVE_RESOURCE,
    resourceId,
  };
};

export function fetchResources() {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/resources');
      dispatch(getResources(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function postResource(newResource) {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/resources', newResource);
      dispatch(addResource(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteResource(resourceId) {
  return async dispatch => {
    try {
      await axios.delete(`/api/cookies/${resourceId}`);
      dispatch(removeResource(resourceId));
    } catch (error) {
      console.log(error);
    }
  };
}

export function resourceReducer(state = [], action) {
  switch (action.type) {
    case GET_RESOURCES:
      return action.resources;
    case ADD_RESOURCE:
      return [...state, action.resource];
    case REMOVE_RESOURCE:
      return state.filter(resource => resource.id !== action.resourceId);
    default:
      return state;
  }
}
