function StudentGradeGenerator(){
    let marks = 0;
    
    while (marks <=100){
    let score;
    
        if (score > 79){
            console.log("A");
        }else if(score <=79 && score >=60){
            console.log("B");
        }else if(score <=59 && score >=49){
            console.log("c");
        }else if(score <=49 && score >=40){
            console.log("D");
        }else{
            console.log("E")
        }
}
return;
}