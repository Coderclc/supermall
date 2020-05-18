function debounce(fn, delay) {
  let timer;
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
function throttle(fn, delay) {
  let timer;
  return function(...args) {
    !timer &&
      (timer = setTimeout(function() {
        fn.apply(this, args);
        timer = null;
      }, delay));
  };
}
export { debounce, throttle };
