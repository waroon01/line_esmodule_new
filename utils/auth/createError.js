const createError = (code, msg) => {
  const error = new Error(msg);
  error.code = code;
  console.log(error)
  throw error;
};

export default createError;
