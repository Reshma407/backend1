import User from "../model/user.model.js";




const authorizeRoles = (...roles) => {
    console.log(roles)
  return async (req, res, next) => {
    const user = await User.findById(req.user.id);
    console.log("user information ",user)
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({
        message: "Access Denied",
      });
    }
    next();
  };
};

export { authorizeRoles };