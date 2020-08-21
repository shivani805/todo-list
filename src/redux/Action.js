export const texting = (newtext) => {
  return {
    type: "TEXT",
    newtext: newtext,
  };
};
export const showdata = (changetext) => {
  return {
    type: "CHANGETEXT",
    changetext: changetext,
  };
};
export const AllToggle = (id) => {
  return {
    type: "TOGGLEONE",
    id: id,
  };
};
export const CompleteToggle = (id) => {
  return {
    type: "TOGGLETWO",
    id: id,
  };
};
