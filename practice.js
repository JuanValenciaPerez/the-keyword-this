//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //gives you the ability refernce a method of an object

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // apply, call, bind, window

  // 3) What is the difference between call and apply?

      //Answer
      // Apply is mostly used to invoke methods and use arrays as arguements
      // were call is regular data seperated by commas. 
      
  // 4) What does .bind do?

      //Answer
    // binds to a method to be able to invoce it later. 

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: 'Username',
  email: 'Email',
  getUsername: function() {
    return this.username; 
  }
}


//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year) {
  this.make = make;
  this.mosel = model;
  this.year = year;
  this.property = 0;
  this.moveCar = function () {
    return this.property += 10;
  }
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.


// Car.prototype.moveCar = function() {
//       this.property += 10;
//   }
//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

getYear.call(prius);
getYear.apply(mustang);

var callMustang = getYear.bind(mustang);
callMustang();

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
  // Since the console.log points to this.username it will go to window, it would have to point to
  // this.myUser.username to point to the above object.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
setTimeout(getMyUsername.bind(myUser), 5000);