/////////////////////////////////////////////  (1) Add 1-7 persons   ////////////////////////////////////////
const yargs = require("yargs")
const dataReq = require("./dataReq")

yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
       dataReq.addPerson(x.id , x.fname , x.lname , x.age , x.city)
    }
 })
//////////////////////////////////////////     (2) delete id 4, 6      ////////////////////////////////
yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        dataReq.deleteData(x.id)
    }
 })

///////////////////////////////////////////      (3) list         ////////////////////////////////////////////////
yargs.command({
    command : "list",
    describe : "List Data",
    handler : () =>{
        dataReq.listData()
    }
})
///////////////////////////////      (4) read all data for only thr 5th person  /////////////////////////////

 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        dataReq.readData (x.id)
    }
 })
 
yargs.parse() 