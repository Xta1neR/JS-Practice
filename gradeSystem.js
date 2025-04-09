let marks = 50;

function gradingSystem(marks){
   if(marks>= 90){
       console.log("A+");
   }
   else if(marks >= 80){
    console.log("A");
   }
   else if(marks >= 70){
    console.log("B+");
   }
   else if(marks >= 60){
    console.log("B");
   }
   else if(marks >= 50){
    console.log("C+");
   }
   else if(marks >= 40){
    console.log("C");
   }
   else{
    console.log("F");
   }
}

gradingSystem(marks);