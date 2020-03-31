import {combineReducers} from "redux";
import settingsOn from "./settingsOn";
import reponame from "./reponame";
import buildList from "./buildList";
import buildDetails from "./buildDetails";

const allReducers = combineReducers({
  setting: settingsOn,
  repName: reponame,
  buildList:  buildList,
  buildDetails: buildDetails
})

export default allReducers;