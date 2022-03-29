const CHECK_STATUS = 'checkStatus';
const initialData = [];

export const addCategory = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initialData, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoriesReducer;
