const throttle = async (func, delay) => {
  let timerId;
  console.log(typeof func)
  const throttleFunc = () => {
    if (timerId) return;
    timerId = setTimeout(() => {
      func();
      timerId = undefined;
    }, delay);
  }
  return throttleFunc();
}

export { throttle };
