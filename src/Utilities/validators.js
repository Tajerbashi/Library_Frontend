// import _ from "lodash";
// import * as yup from "yup";

// export const required = () => {
//   return yup.string().required();
// };

// export const duplicateRole = roles => {
//   return yup.array().required();

//   // var filledRoles = _.filter(roles, role => role.roleID);
//   // return _.filter(
//   //   _.groupBy(filledRoles, role => role.roleID),
//   //   g => g.length > 1
//   // ).length > 0
//   //   ? "DUPLICATE_ROLE"
//   //   : null;
// };

// export const duplicateUser = users => {
//   var filledUsers = _.filter(users, user => user.userID);

//   return _.filter(
//     _.groupBy(filledUsers, user => user.userID),
//     g => g.length > 1
//   ).length > 0
//     ? "DUPLICATE_USER"
//     : null;
// };

// export const duplicateKey = items => {
//   var filledItems = _.filter(items, item => item.key);

//   return _.filter(
//     _.groupBy(filledItems, item => item.key),
//     item => item.length > 1
//   ).length > 0
//     ? "DUPLICATE_KEY"
//     : null;
// };
