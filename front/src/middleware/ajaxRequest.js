import { updateList } from "../reducers/actions";
import { host } from "../helpers/constant";

export const getBuildList = (offset = 0, limit = 5) => {
  return (dispatch, getState) => {

    fetch(`${host}/api/builds?offset=${offset}&limit=${limit}`)
      .then(e => e.json())
      .then( e => {
        dispatch(updateList(e.data, limit));
      })
      .catch(error => console.log(error));
  };
}