let myFunction = (function () {
  let name = ""; // private

  getName = function () {
    return name;
  };

  setName = function (newName) {
    name = newName;
  };

  return {
    getName: getName,
    setName: setName,
  };
})();

myFunction.setName("Sagar");
console.log(myFunction.getName());

console.log(myFunction.name);

