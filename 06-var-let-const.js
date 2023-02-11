/*
----------------------------------------------
              Let & Const
---------------------------------------------- 
      -> Temporaly Dead Zone
      -> Block Scope
      -> Variable Shadowing (Leagal or Ileagal) 
      -> var/let/const
----------------------------------------------      
*/
/*
------------
    let
------------
 * let and const are two ways to declare variables.
 * let can not be declare again but var can be declared again.
 
*/
// console.log("hello");  -> it will execute
console.log("varname"); //-> it will show error
let varname;
console.log(varname);
varname = 10;
varname = 20;
console.log(varname);
//  let varname; -> it will show error

// * in the initial it will show error during global execution context.

/*
-----------------------
   Temporaly Dead Zone 
 ----------------------
 * after declaration we can acces varible that contains undefined value.
 * you can not access variable without initialization.
   -> in this case code executes but you can not acces variable inside TDZ
 * Area before starting file to area before declaration of the variabe is.
   known as temporaly dead zone
 * before declation it does not contain undefined rather than it will show 
   error. 
  
*/

/*
-------------
    Const 
-------------

 * you have to assign some value after declaration.
   -> const varname; -> it will show error.
 * you can nither redeclare nor reassign.
   -> rest all feature is similar as let. 
 * const varname = 10;  
  
*/

/*
-------------------
    Block Scope 
-------------------

 * block area under {}. (used in function , if-else)
 * let and const is dependent on block.
 * new memory is allocated for block scoped variable in new block.
  
*/

/*
----------------------------------------
    Variable Shadowing(leagal/Ileagal) 
----------------------------------------

 * Suppose there is a varible declared outside a block and same is
   variable is declared inside block then inside varible will shaow
   the outside varible and show its own value.
  
*/

// Leagal shadow
let fruits = "apple";
console.log(fruits);
{
  const fruits = "orange"; // it will show outside declared variable.
  console.log(fruits);
}

/*
  Ileagal showdow 
  ---------------
  if outside block we declare let and inside we try to shadow with var
  then it will show error.
*/

let fruits = "apple";
console.log(fruits);
{
  var fruits = "orange"; // it will show outside declared variable.
  console.log(fruits);
}

/*
   ( var / let / const ) table
   ---------------------------

  -> SCOPE
  ----------
  var -> function
  let -> block
  const -> block

  -> REASSIGN
  -------------
  var -> reassign
  let -> reassign
  const -> not-reassign

  -> REDECLARE
  --------------
  var -> redeclare
  let -> not-redeclare
  const -> not-redeclare

  -> TDZ(Temporal dead zone)
  ----------------------------
  var -> not-TDZ
  let -> TDZ
  const -> TDZ
*/