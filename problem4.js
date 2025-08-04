/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.slice(-4) === ".pdf" || fileName.slice(-5) === ".docx" || fileName[0]==="#"){
    console.log("Store");
} else {
    console.log("Delete");
}