export const updateList = (build = [], length = 5) => {
  return {
    type: "updateList",
    build: build,
    length: length
  };
};

export const settingsOn = () => {
  return {
    type: "settingsOn"
  };
};

export const updateDetails = (build) => {
  return {
    type: "updateDetails", 
    build: build
  };
}; 

export const setName = (name) => {
  return {
    type: "setName", 
    name: name
  };
};