export type planetsState = {
  name: string;
};

export const planetsReducer = (
  state: planetsState = { name: "" },
  action: any
) => {
  if (action) console.log("Action", action);
  return state;
};
