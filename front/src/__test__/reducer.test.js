import store from "../store";
import * as action from "../reducers/actions";

describe("reducer", () => {

  it("redux UpdateSetting", () => {
      store.dispatch(action.settingsOn());

      expect(store.getState().setting).toBe("/build");
  });

  it("redux setName", () => {
    store.dispatch(action.setName("MoksS/githubRep"));

    expect(store.getState().repName).toBe("MoksS/githubRep");
  });

  it("redux updateList", () => {
    // если длина массима будет больше 4, то тест упадет
    // это finish нужен для того, чтобы прятать кнопку showmore на странице билдов, если билды закончились
    store.dispatch(action.updateList(["build1", "build2", "build3"]));

    expect(store.getState().buildList).toEqual({ 
      build: ["build1", "build2", "build3"],
      finish: true
    });
  });

  it("updateDetails", () => {
    store.dispatch(action.updateDetails({
      status: "Success",
      buildNumber: 14,
      commitMessage: "commit",
      branchName: "master",
      author: "MoksS",
      hash: "asdasd",
    }));

    expect(store.getState().buildDetails).toEqual({
      status: "Success",
      buildNumber: 14,
      commitMessage: "commit",
      branchName: "master",
      author: "MoksS",
      hash: "asdasd",
      loading: false
    })
  });

  it("redux update loading", () => {
    store.dispatch(action.loading());

    expect(store.getState().buildDetails.loading).toBe(true);
  });

});