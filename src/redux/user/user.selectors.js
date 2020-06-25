import { createSelector } from 'reselect';

const selectUserState = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserState],
  (user) => user.currentUser
);
