module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let {name, durability, enhancement} = item;

  if(enhancement < 20){
    enhancement++;
  }

  return { ...item, enhancement };
}

function fail(item) {
  let {name, durability, enhancement} = item;

  if(enhancement < 15){
    durability = durability - 5;
  } else {
    durability = durability - 10;
  }

  if(enhancement > 16){
    enhancement--;
  }

  return { ...item, durability, enhancement };
}

function repair(item) {
  let {name, durability, enhancement} = item;

  durability = 100;

  return { ...item, durability };
}

function get(item) {
  let {name, durability, enhancement} = item;

  return { ...item };
}
