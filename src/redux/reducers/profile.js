import {
  GET_PROFILE_GITHUB_DATA_ERROR,
  GET_PROFILE_GITHUB_DATA_START,
  GET_PROFILE_GITHUB_DATA_SUCCESS,
  GET_PROFILE_GITHUB_REPOS_ERROR,
  GET_PROFILE_GITHUB_REPOS_START,
  GET_PROFILE_GITHUB_REPOS_SUCCESS
} from '../../consts/actionTypes';
import get from 'lodash/get';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_GITHUB_DATA_START:
      return { ...state, error: null, githubData: null };
    break;
    case GET_PROFILE_GITHUB_DATA_SUCCESS:
      return { ...state, githubData: get(action, 'githubData.data') };
    break;
    case GET_PROFILE_GITHUB_DATA_ERROR:
    break;
    return { ...state, error: true };
    default:
      return { ...state };
  }
}
