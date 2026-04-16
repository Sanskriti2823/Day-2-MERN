// const factorial = (n) => {
      //      if (n===0){
        //        return 1 ;
          //  }
            //return n*factorial(n-1);
        //};
        //console.log(factorial(5))


       // let studentName = ["Alice","Bob","charlie"];
        //for (let name of studentName ){
          //  console.log(name);
        //}

       // let studentNames = ["Alice","Bob","charlie"];
        //let namesStartingwithA : string[] = studentNames.filter((name)=> name.startsWith("A"))

   // interface Student {
     //   name: String;
       // age: Number;
        //isEnrolled : Boolean;

    //}
    //let student: Student = {
      //  name : "Alice",
        //age: 20,
        //isEnrolled: true
    //};
    //console.log (student)

   // class Car {
     //   make ;
       // model;
        //year ;
        //constructor(make,model,year){
          //  this.make = make;
            // this.model = model;
              //this.year = year;
        //}
        //displayInfo ()


    //}

    // Spread operator
//const arr1 = [1, 2, 3];
//const arr2 = [...arr1, 4, 5];

// Object spread
//const user = { name: "John", age: 25 };
//const updatedUser = { ...user, age: 26 };

// Destructuring
//const { name, age } = user;

//const numbers = [10, 20, 30];
//const [first, second] = numbers;

//console.log(name, age, first, second);



// class Person {
//   // constructor
//   constructor(name, age) {
//     this.name = name;
//     this._age = age; // pseudo-private
//   }

//   // method
//   greet() {
//     return `Hello, my name is ${this.name}`;
//   }

//   // getter/setter (simulate controlled access)
//   get age() {
//     return this._age;
//   }

//   set age(value) {
//     if (value > 0) {
//       this._age = value;
//     }
//   }
// }

// const p1 = new Person("Alice", 22);
// console.log(p1.greet());



// import { useState } from "react";

// function FormComponent() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={formData.name}
//         onChange={handleChange}
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Enter email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormComponent;





// Mock API function
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve({ data: "API data received" });
//       } else {
//         reject("Error fetching data");
//       }
//     }, 1000);
//   });
// };

// // Usage
// fetchData()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));



// const fetchData = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Product" });
//     }, 1000);
//   });
// };

// const getData = async () => {
//   try {
//     const response = await fetchData();
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };

// getData();



// DOM program :