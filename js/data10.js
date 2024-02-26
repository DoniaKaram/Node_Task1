const fs=require('fs');
const addPerson=(id,fname,lname,age,city)=>{
const allData=loadData();
const duplicateData=allData.filter((item)=>{
  return  item.id===id
});
if(duplicateData.length==0)
{
    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        age:age,
        city:city
        });
        saveAllData(allData);
}
else
{
    console.log("Duplicated");
}


};
const deletePerson=(id)=>{
    const allData=loadData();
    const dataToKeep=allData.filter((item)=>{
      return  item.id!==id
    });
    saveAllData(dataToKeep);
    console.log(dataToKeep);
    console.log('You have deleted an item');
};
const loadData=()=>{
   
    try{
        const DataJson=fs.readFileSync('data10.json').toString();
        return JSON.parse(DataJson);
    }
    catch{
        return [];
    }

};
const saveAllData=(allData)=>{
const Data=JSON.stringify(allData);
fs.writeFileSync('data10.json',Data);
};
const readData=(id)=>{
    const allData=loadData();
    const dataToRead=allData.find((item)=>{
        return  item.id==id
      });
      if(dataToRead)
      {
        console.log(dataToRead.fname);
      }
      else
      {
        console.log('not found');
      }

}   
const listData=()=>{
    const allData=loadData();
    allData.forEach((item) => {
        console.log(item.fname,item.lname,item.city,item.age);
    });
      
} 
module.exports={
    addPerson,
    deletePerson,
    readData,
    listData
}
