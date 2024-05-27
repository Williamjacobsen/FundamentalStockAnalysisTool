const CheckForNull = (...args) => {
  return args.some((arg) => arg === null);
};

export default CheckForNull;
