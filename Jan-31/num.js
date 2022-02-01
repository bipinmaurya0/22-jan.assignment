var obj = {
    "students": [
	{
	    "name": "Virat  kohli",
	    "marks": 15
	},
	{
	    "name": "Rohit Sharma",
	    "marks": 17
	},
	{
	    "name": "Shikhar",
	    "marks": 19
	},
	{
	    "name": "Kl Rahul",
	    "marks": 21
	},
	{
	    "name": "Ms Dhoni",
	    "marks": 0
	},
        {
	    "name": "Jasprit",
	    "marks": 27
	},
        {
	    "name": "Hardik Pandya",
	    "marks": 24
	},
        {
	    "name": "Aheteshwar pujara",
	    "marks": 19
	},
        {
	    "name": "Ajinkya",
	    "marks": 23
	},
    ],
};
var yourNumber = prompt("Enter the score")
var studentsLength = obj.students.length
for(var i=0;i<studentsLength;i=i+1){
    if (yourNumber <= obj.students[i].marks ){
        console.log("Name:" +obj.students[i].name)
        console.log("Marks:" +obj.students[i].marks)
    }
}