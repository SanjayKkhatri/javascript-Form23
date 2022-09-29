
function gettingData() {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let cnic = document.getElementById("cnic").value;
    let language = document.getElementsByClassName("radio").value;
    let contactNo = document.getElementById("contactNo").value;
    let newPass = document.getElementById("newPass").value;
    let confirmPass = document.getElementById("confirmPass").value;
    if(newPass === confirmPass) {
        return `${confirmPass}`
    }else{
        alert("Your password must match above password")
    }
    let userData= document.getElementById("formData").innerHTML =
        `<h4>Name : ${firstName} + ${lastName}</h4><br>
        <h4>Email : ${email}</h4><br>
        <h4>CNIC : ${cnic}</h4><br>
        <h4>Language : ${language}</h4><br>
        <h4>Contact No : ${contactNo}</h4><br>
        <h4>Password : ${confirmPass}</h4>`;
        console.log(userData);
}


function userName() {
    var user = document.getElementById("name");
    var userName = document.getElementById("username");
    userName.innerHTML = `${user.value}`
    return  userName
}

let array1 = [1, 2, 3, 4, 5];
let sum = array1.reduce((a,b) => {
    return a % b;
})
console.log(sum);


for (var i=0; i<5; i++) {
    setInterval(() => {
        console.log(i)
    }, 5000);
}

for (let i=0; i<5; i++) {
    setInterval(() => {
        console.log(i)
    }, 1000);
  }

let i;
for (i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log(`The number is ${i}`);
  }, 1000);
}


let array2 = [20, 24, 25, 30];
array2.forEach(numbers => {
    console.log(numbers);
})


let array3 = [2, 5, 6, 8, 9];
let newArray = array3.map(multiply => {
    return multiply / 4;
})
document.write(newArray);


const classElection = {
    date: 'January 12'
  };
   
  console.log(classElection.place);

const iClassElection = {
    date: 'January 12'
  };
   
  console.log(deClassElection.place);


let mobile = {
    owner: 'Sanjay Khatri',
    brand: 'Samsung',
    model: 'Galaxy Note 9'
  };
   
  for (let key in mobile) {
    console.log(`${mobile[key]}`);
  }

  let mobile1 = {
    owner: 'Sanjay Khatri',
    brand: 'Samsung',
    model: 'Galaxy Note 9'
  };
   
  for (let key in mobile) {
    console.log(`${key} : ${mobile[key]}`);
  }


const name = "Sanjay Kumar";
const age = 21;
const class1 = "Web devlopement";
const student = {
    name,
    age,
    class1
}
console.log(student);


const restaurant = {
    numCustomers: 45,
    seatCapacity: 100,
    availableSeats() {
      // this refers to the restaurant object
      // and it's used to access its properties
      return this.seatCapacity - this.numCustomers;
    }
  }
  console.log(restaurant.availableSeats());

const menFactory = (name, age, breed) => {
    return {
      name: name,
      age: age,
      breed: breed,
      bark() {
        console.log('Woof!');  
      }
    };
  };

  console.log(menFactory("Talha", 21, "white", "hahahahha"))


let button = document.getElementById("btn");
let text = document.getElementById("text");
button.onclick = function(event) {
  text.innerHTML = "you clicked";
}

Example of Resolve

let promise = new Promise(function(resolve, reject) {
  let value = "water";
  resolve(value);
})
console.log(promise);


Example of Reject

let promise = new Promise(function(resolve, reject){ 

  reject(new Error("Destroyed"));
})
console.log(promise);

let promise = new Promise(function(resolve, reject){
  resolve("got water!");
});

const grandParents = () => {
  promise.then((result) => {
    console.log(`We are cooking with ${result}`);
  });
}
console.log(grandParents());

=====================================
We get a .then() method from every promise. The sole purpose of this method is to let the 
consumer know about the outcome of a promise. It accepts two functions as arguments, result and error.

promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
  );


If you are just interested in the successful outcome, you can chose to pass only one argument

promise.then(
  (result) => {
    console.log(result);
  }
);

Similarly, if you are interested in only the error, pass null as the value for the first argument.
promise.then(
  null,
  (error) => {
    console.log(error);
  }
);


let promise = new Promise(function(resolve, reject){

  setTimeout(function(){
    resolve(`Hurrah! Fetched the water`)
  },2000);
});

const grandParents = () => {
  promise.then(
    (result) => {
      console.log(`Cooking rice with the ${result}`);
    }
  )
}

console.log(grandParents());

let promise = new Promise( (resolve, reject) => {

  setTimeout(() => {
    reject(new Error(`Jack fell down and broke his crown. And Jill came tumbling after.`))
  },3000)

});

const grandParents = () => {
  promise.catch(
    (error) => {
      console.error(`OMG ${error.message}`);
    }
  )
}

console.log(grandParents())

let loading = true;
loading && console.log(`Loading...`);

promise = getPromise();

promise.finally(() => {
  loading = false;
  console.log(`Promise settled and loading is ${loading}`);
}).then(
  (result) => {
    console.log(result)
});

console.log(loading);

let promise = new Promise((resolve, reject) => {
  resolve(`Resolving a fake promise`);
})

promise.then(
  (value) => {
    console.log(value);
  }
)

console.log(promise);

let promise = new Promise((resolve, reject) => {
  reject(new Error(`Rejecting a fake promise to handle with .Catch()!`))
});

promise.catch(
  (error) => {
    console.log(error)
  }
)
console.log(promise);


setTimeout(myFunction, 3000);

function myFunction(){
  console.log("Im Here For You!");
}

setInterval(myFunction,1000);

function myFunction() {
  let time = new Date(); 
  document.getElementById("text").innerHTML = 
  time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds();
}

function myDisplayer(some) {
  document.getElementById("text").innerHTML = some;
}

function getFile(myCallBack) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallBack(this.responseText);
    }else{
      myCallBack("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);

let input = document.getElementById("input");

function abc() {
let text = document.getElementById("text");
text.innerHTML = input.value
let array = [];
for(let i = 0; i < array.length; i++) {
  array[i];
}
}


const a = () => console.log("Hello World!");
// console.log(a);
const d = a();
console.log(d);

const secondArray = new Array(4);
secondArray[0] = "JavaScript";
secondArray[1] = "Python";
secondArray[2] = "Go";
secondArray[3] = "Come";

console.log(secondArray);

const colorArr = ["red", "yellow", "blue", "green", "white", "black"];

const [first, second] = colorArr;
console.log(first, second);

let array = ["Sanjay", "Jatin", "Deepak"];
let [name, brother, little] = array;
console.log(name, brother, little);

var container = document.getElementById("container");
var div;

for(var i = 0; i < 5; i++){
    div = document.createElement("div");
    div.onclick = function() {
        alert("This is Box : " + i);
    }
    // div.innerText = "Sanjay Kumar";
    // div.append(innerText);
    container.appendChild(div);
}

const activity = function(message) {
    return `${message}`
}
console.log(activity("Hey, Sanjay Kumar Khatri..."));

const lordify = regularPerson => {
    console.log(`${regularPerson.firstName} of Karachi`)
}

const regularPerson = {
    firstName : "Sanjay kumar",
    lastName : "Khatri"
}
console.log(lordify(regularPerson));

const lordify = ({firstName}) => {
    console.log(`${firstName} in Karachi`);
}

const regularPerson = {
    firstName : "Sanjay Kumar",
    lastName : "Khatri"
}

console.log(lordify(regularPerson));

const lordify = ({spouse : {firstName}}) => {
    console.log(`${firstName} in Karachi`);
}

const regularPerson = {
    name : "Mark",
    spouse : {
        firstName : "Phill",
        lastName : "Peterson"
    }
}

console.log(lordify(regularPerson));


const arr1 = ["Sanjay", "Mark", "Dravid"];
const arr2 = ["Jatin", "Kyle", "David"];
const combine = [...arr1, ...arr2];
console.log(combine.join(", "));