const yargs=require('yargs');
const data10=require('./data10');
yargs.command({
    command:'add',
    describe:"to add an item",
    builder:{
        fname:{
            describe:"to add the fname",
            demandOption:true,
            type:'string'

        },
        lname:{
            describe:"to add the lname",
            demandOption:true,
            type:'string'

        },
    },
    handler:(x)=>{
        data10.addPerson(x.id,x.fname,x.lname,x.age,x.city);

    }
    
});
yargs.command({
    command:'delete',
    describe:"to delete an item",

    handler:(x)=>{
        data10.deletePerson(x.id);

    }
    
});
yargs.command({
    command:'read',
    describe:"to read data",
    builder:{
        id:{
            describe:"to add the id",
            demandOption:true,
            type:"string"

        }
    
    },
    handler:(x)=>{
        data10.readData(x.id);

    }
    
});
yargs.command({
    command:'list',
    describe:"to list data",

    handler:(x)=>{
        data10.listData();

    }
    
});
yargs.parse();
   