export const validate = (schema, source = "body") => (req, res, next) => {
  const data = req[source];
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: parsed.error.flatten(),
    });
  }

  req[source] = parsed.data;
  return next();
};
