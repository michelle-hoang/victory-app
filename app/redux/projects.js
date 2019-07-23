import axios from 'axios';

export const GET_PROJECTS = 'GET_PROJECTS';

export const getProjects = projects => {
  return {
    type: GET_PROJECTS,
    projects,
  };
};

export function fetchProjects() {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get('/api/projects');
      dispatch(getProjects(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function projectReducer(state = [], action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}
