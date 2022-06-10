let mark =prompt("enter the mark");
console.log("mark"+mark)
function grade(x){
var x,y;

if (x > 90) {
    y= "o grade"
}
else if (x > 80) {
    y="a+ grade";
}
else if (x > 70 ) {
    y="a grade";
}
else if (x >60 ) {
    y="b+ grade";
}
else if (x > 50) {
    y="b grade";
}

else 
{
    y="fail";

} 
return y;
}
var grade2= grade(mark);
console.log(grade2);

  