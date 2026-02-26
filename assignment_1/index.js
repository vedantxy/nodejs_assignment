const express = require("express");   //Ye Express.js framework ko import karta hai.
                                     //Express ek minimal backend framework hai Node.js ke liye.  


const app = express();  //Ye ek Express application instance create karta hai.
                        // Saare routes isi app object par banenge.


const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];


app.get("/", (req, res) => {
  res.send("my name is vedant");
});



// ================================   GET /students  ==========================================

app.get("/students", (req, res) => {   //res.status(200) =>  200 = Success
  res.status(200).json(students);      //.json(students) =>  Students array ko JSON format me bhejta hai.
});



//================================   GET /students/topper  ====================================

app.get("/students/topper", (req, res) => {

  if (students.length == 0) {
    return res.status(404).json({ message: "User not found" });
  }

  const topper = students.reduce((max, i) =>
    i.cgpa > max.cgpa ? i : max
  )  //    condition      ? value_if_true : value_if_false

  // =========================================  OR  ======================================

  //   let topper = students[0];

  //  for (let i = 1; i < students.length; i++) {
  //    if (students[i].cgpa > topper.cgpa) {
  //      topper = students[i];
  //    }
  // }


  res.status(200).json(topper);
});




// ===================================   GET /students/average  ================================


app.get("/students/average", (req, res) => {

  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" })
  }

  const total = students.reduce((sum, i) => {
    return sum + i.cgpa;
  }, 0);

  const average = total / students.length;

  res.status(200).json({
    averageCGPA: Number(average.toFixed(2))
  });

});


//  ==============================  GET /students/count   ========================================


app.get("/students/count", (req, res) => {
  res.status(200).json({
    totalstudents: students.length
  })
})



// ==============================   GET /students/:id  ===========================================


app.get("/students/:id", (req, res) => {

  console.log("this is req: ", req.params);

  const userId = req.params.id;

  const user = students.find(u => u.id == userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});


//========================== GET /students/branch/:branchName  =====================================


app.get("/students/branch/:branchName", (req, res) => {

  const branchName = req.params.branchName.toUpperCase();

  const filteredStudents = students.filter(student =>
    student.branch.toUpperCase() === branchName
  );

  res.status(200).json(filteredStudents);

});




app.listen(3000, () => {
  console.log("Server started on port 3000");
});