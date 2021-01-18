function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(str="*") {
  return function(par="special") {
    return `You are ${str + par + str}!`
  }
}


let Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

function actionApplyer(int, arr) {
  let a = int;
  arr.forEach(func => a = func(a));
  return a;
}