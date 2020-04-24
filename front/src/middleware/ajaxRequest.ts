import { updateList, updateDetails, loading } from "../reducers/actions";
import { host } from "../helpers/constant";

export const getBuildList = (offset = 0, limit = 5) => {
  return dispatch => {

    fetch(`${host}/api/builds?offset=${offset}&limit=${limit}`)
      .then(e => e.json())
      .then( e => {
        dispatch(updateList(e.data, limit));
      })
      .catch(error => console.log(error));
  };
}

export const getBuildDetails = (number, history) => {
  return async dispatch  => {
    try {
      dispatch(loading());
      const [list, log] = await Promise.all([
        fetch(`${host}/api/builds/${number}`),
        fetch(`${host}/api/builds/${number}/logs`)
      ]);
      const [json, logJson] = await Promise.all([
        list.json(),
        log.json()
      ]);
  
      json.data.log = logJson.data;
      dispatch(updateDetails(json.data));
    } catch (error) {
      console.log(error);
      history.push(`/build`);
    }
  }
};

export const onRebuild = async (buildDetails, history) => {
  try {
    const response = await fetch(`${host}/api/builds/${buildDetails.commitHash}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(buildDetails)
    });

    const result = await response.json();

    history.push(`/build/${result.data.id}`);

  } catch (error) {
    console.log(error);
  }
};