const Sleep = async (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), ms);
  });
};

export default Sleep;
