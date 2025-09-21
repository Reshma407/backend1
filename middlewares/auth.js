import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    res.status(401).json({
      message: "No token passed",
    });
  }
  try {
    const decoded = jwt.verify(token, "jwtsecret");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
}

export { auth };