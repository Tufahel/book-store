export const addCategory = () => ({
  type: 'CHECK_STATUS',
});

/* eslint-disable default-param-last */

const categoriesReducer = (state = 'Check Status', action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoriesReducer;
