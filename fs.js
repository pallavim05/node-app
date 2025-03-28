console.log("====== readFile =======");

const fs = require('fs');
fs.readFile('sample.txt', 'utf-8',(err,data) => {
    if(err)
    {
        console.error(err);
    }
     console.log(data);

});
console.log("====== writeFile =======");
const content = 'Hello, this is written to the file';
fs.writeFile('output.txt',content,'utf-8',(err)=>{
    if(err){
    console.error(err);
 }else{
    console.log("file written successfully");
    
 }
});
console.log("====== statFile =======");
const filePath = "output.txt";

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error("Error:", err);
        return;
    }
    console.log("File Size:", stats.size + " bytes");
    console.log("Is a File:", stats.isFile());
    console.log("Is a Directory:", stats.isDirectory());
    console.log("File birthtime (creation time):", stats.birthtime);
    console.log("File modification time:", stats.mtime);
});
console.log("====== appendFile =======");
const fileName = "output.txt";
const dataToAppend = "\n This data will be appended to the file.";
fs.appendFile(fileName, dataToAppend ,(err)=>{
    if(err){
        console.error(err);
        return;
        
    }
    console.log("Data has been appended to the file");
});
const filePat = "sample.txt";
fs.unlink(filePat,(err)=>{
    if(err){
        console.error(err);
        
    }
    console.log("File has been deleted");
    

});

const directoryPath = 'new_directory';
fs.mkdir(directoryPath,(err)=>{
    if(err)
        {
            console.error(err);

        }
        console.log("Directory created successfully");
        
        
});
