function SpeedDetector(){
let speed;
if (speed <=70){
    console.log("Ok")
}else{
//for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the 
//total number of demerit points
const points = [75, 80, 85, 90, 95, 100];

for (let points of speed) {
  points += 1;
  console.log("points: "points);
}
}
return;
}