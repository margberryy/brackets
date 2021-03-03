module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let brackets = {};
    let pid = [];
    for (let pair of bracketsConfig) {
      if (pair[0] === pair[1]) pid.push(pair[0]); // skip same  symbols case ?
      else brackets[pair[1]] = pair[0]; // closing->opening mapping
    }

    for (let bracket of str) {

      if (pid.indexOf(bracket) !== -1 &&
        stack.length > 0 && stack[stack.length - 1] === bracket) { // same closing symbol case
        stack.pop();
      } else if (brackets.hasOwnProperty(bracket)) { // closing symbol case
        if (stack.pop() != brackets[bracket]) {
          return false;
        }
      } else {
        stack.push(bracket)
      }
    }

    return stack.length == 0;
  };
