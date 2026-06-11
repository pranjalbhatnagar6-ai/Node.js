const fs = require('fs');

// To write Files
// fs.writeFileSync("Files/apple.txt","It is a fruit");

// To delete Files
// fs.unlinkSync("Files/apple.txt") //to delete files use unlinkSync.

// To Read Files
// const readData = fs.readFileSync("Files/apple.txt","utf-8");
// console.log(readData);

// To add data in file
// fs.appendFileSync("Files/apple.txt"," and this is good for health");


const operation = process.argv[2];
if(operation=='write'){
    const name = process.argv[3];
    const content = process.argv[4];
    const fulName="Files/"+name+".txt"
    fs.writeFileSync(fulName,content)
    // console.log(operation,name,content);
}else if(operation=='read'){
    const name = process.argv[3];
    const fullName = "files/"+name+".txt"
    let data = fs.readFileSync(fullName,"utf-8");
    console.log(data);
}else if(operation=='update'){
    const name = process.argv[3];
    const content = process.argv[4];
    const fulName="Files/"+name+".txt"
    let data = fs.appendFileSync(fulName, content);
    console.log(data);
}else if(operation=='delete'){
    const name = process.argv[3];
    const fullName="files/"+name+".txt"
    fs.unlinkSync(fullName);
}else{
    console.log("operation not found");
}
