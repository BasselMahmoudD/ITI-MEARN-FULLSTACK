(function (moduleName, env, implementation) {
  if (typeof  module !== "undefined" && module.exports) {
    env[moduleName] = implementation();
  } else {
    env[moduleName] = implementation();
  }
})("calculator", this, function () {
  let sum = {
    add: (x, v) => {
      return x + v;
    },
  };
  return sum;
});
