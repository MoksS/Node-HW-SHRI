export const updateList = (build = []) => {
  return {
    type: "updateList",
    build: build
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