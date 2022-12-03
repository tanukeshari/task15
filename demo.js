class Student{
    constructor(name, age, marks)
{
    this.name= name;
    this.age= age;
    this.marks = marks;
}
setPlacementAge(minPlacementAge){
    console.log(this);
    return (minMarks)=>{

    
    console.log(`inside eligibleForCurrentCompany` ,this);

    if(this.marks > minMarks && this.age > minPlacementAge){
console.log(this.name + "is ready for placement");
    }
    else{
console.log(this.name + "is not ready for placement");
}
    }
 }
}



const tanu= new Student('tanu', 23, 80);
const ashi =new Student('ashi', 25, 60);

tanu.setPlacementAge(18)(40);