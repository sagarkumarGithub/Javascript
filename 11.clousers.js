/*
------------------------------------------
                Clousers
------------------------------------------
   Function scope
   --------------
   function calculate(a,b){
       let result = a+b;
       return result;
   }
   calculate(2,5);
   console.log(result);  -> it will show error

   * We can not access a variable outside the function which is declared inside the function.
   * This is known as function scope.
   
   Lexical Scope
   ---------------
   function add(){
       let a = 4;
       function addChild(){
           console.log(a+4);
       }
       addChild();
   }
   add()

   * A child function / nested function has access to all variables which are declared inside its parent functions.
   * This is known as lexical scope.
   
   Clousers
   ---------
   function add() {
       let a = 4;
       function addChild() {
         console.log(a + 5);
        }
    return addChild;
    }

    let catchAdd = add();
    console.log(catchAdd);

    catchAdd();

   * A function is always bundles with its lexical scope forms a clousers.
   * A function which is either called, returned or removed from stack it has the acess of its lexical scope.
   * This is called clousers.
*/

function add() {
  let a = 4;
  function addChild() {
    console.log(a + 5);
  }
  return addChild;
}

let catchAdd = add();
console.log(catchAdd);

catchAdd();

