const error = function (err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  let stack;

  if (process.env.NODE_ENV !== "production") {
    stack = err.stack;
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    stack,
  });
};

export default error;
