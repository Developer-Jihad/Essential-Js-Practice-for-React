// Greet Users by Using the Normal Function ---------------------------------------------
function greetUser(name) {
  const greetingMessage = `Dear ${name}, Welcome to the JavaScript World`;
  return greetingMessage;
}

console.log(greetUser("jihad"));

// Greet Users by Using the Arrow Function ---------------------------------------------
const greetWithArrow = (name) => {
  const greetingArrowMessage = `Dear ${name}, Welcome to the JavaScript Arrow Function`;
  return greetingArrowMessage;
};

console.log(greetWithArrow("JIHAD"));
