export const errorHandler = (error, _req, res, _next) => {
  const statusCode = error.name === "ValidationError" ? 400 : 500;

  res.status(statusCode).json({
    success: false,
    message: error.message || "Internal server error",
    ...(process.env.NODE_ENV !== "production" ? { stack: error.stack } : {}),
  });
};
