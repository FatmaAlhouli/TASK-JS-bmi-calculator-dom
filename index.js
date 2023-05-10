function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const hightInMeter= height/100 ;
  const BMI = math.round (weight/ (height*height));
  let message ;


  if (BMI <= 18.5  ) {message ("underwhight");
    
   }
   else if 
   (BMI <= 24.9 ) {message ("Healthy Weight");
  }
   else if 
    (BMI <=25.0  ) {message ("Overweight");
}
else if  
 (BMI <=30.0  ) {message ("OAbove Obesity");
}
else console.log ("erorr");

 






if 
(age = 19 & IBM <=24  ) {console.log ("you'r age is between 19 - 24 years old","and healthy");
}
else if 
(age =20 & IBM <= 25  ) {console.log ("you'r age is between 25 - 34 years old","and healthy");
}
else if 
(age =21 & IBM <=26  ) {console.log ("you'r age is between 35 - 44 years old","and healthy");
}
else if  
(age =22 & IBM <=27  ) {console.log ("you'r age is between 45 - 54 years old","and healthy");
}
else if  
(age =23 & IBM <=28  ) {console.log ("you'r age is between 55 - 64 years old","and healthy");
}
else if  
(age =24 & IBM <=29  ) {console.log ("you'r age is between 65 and above","and healthy");
}
else console.log ("not healty"); 

}
