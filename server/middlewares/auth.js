import asyncHandler from "./asyncHandler.js";
import jwt from "jsonwebtoken";

const auth = asyncHandler(async function (req, res, next) {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return next(401, "Authentication missing, Please login to access resource");
  }

  const verifiedData = jwt.verify(accessToken, process.env.JWT_SECRET);

  //   console.log("verifiedData:", verifiedData);

  req.user = verifiedData.user;

  next();
});

export default auth;
