module.exports = (user) => {

  let newUser = { 
    phone: user.phone,
    password: user.password,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    isActive: user.isActive,
    isDeleted: user.isDeleted,
    userType: user.userType,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    mobileNo: user.mobileNo,
    resetPasswordLink: user.resetPasswordLink,
    loginRetryLimit: user.loginRetryLimit,
    loginReactiveTime: user.loginReactiveTime,
  };

  // remove undefined values
  Object.keys(newUser).forEach(key => newUser[key] === undefined && delete newUser[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newUser) => {
   *   if (!newUser.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newUser) 
   */

  return Object.freeze(newUser);
};
