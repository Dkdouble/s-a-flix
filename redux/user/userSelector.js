import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectErrorMessage = createSelector(
  [selectUser],
  (user) => user.errorMessage
);

export const selectSignUpErrorMessage = createSelector(
  [selectUser],
  (user) => user.signUpErrorMessage
);
export const selectCurrentUserId = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.id : null)
);

export const selectCurrentUserProfiles = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser
      ? [
          currentUser.user1,
          currentUser.user2,
          currentUser.user3,
          currentUser.user4,
        ]
      : null
);

export const selectChoseProfile = createSelector([selectUser], (user) =>
  user ? user.choseProfile : null
);

// export const selectChoseProfileList = createSelector([selectUser], (user) => {
//   const profiles = [
//     ...user.currentUser.user1,
//     ...user.currentUser.user2,
//     ...user.currentUser.user3,
//     ...user.currentUser.user4,
//   ];
//   const myList = profiles[user.choseProfile].lists;
//   return myList;
// });

export const emailForSignup = createSelector(
  [selectUser],
  (user) => user.emailForSignUp
);

export const selectMyList = createSelector([selectUser], (user) =>
  user.myList ? user.myList : null
);

export const selectMyListId = createSelector([selectUser], (user) =>
  user.myList ? user.myList.map((ml) => ml.name.id) : null
);
