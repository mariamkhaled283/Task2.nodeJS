/////////////////////////////////////////////  (1) Add 1-7 persons   ////////////////////////////////////////
const  fs = require("fs")
const addPerson = (id, fname , lname , age , city) => {
    const allData = loadData()
    const duplicatedData = allData.filter((obj)=>{
        return obj.id === id
    })
    console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
        })

    saveAllData(allData)
}else{
    console.log("Error Duplicated Id")
}
}
//////////////////////////////////////////////////////////////////////////////
const loadData = () =>{
    
    try {
        const datajson = fs.readFileSync("dataReq.json").toString()
        return JSON.parse(datajson)
    } catch {
            return []
    }

}
////////////////////////////////////////////////////////////////////////////////
const saveAllData = (allData) => {
    const saveAllData = JSON.stringify(allData)
    fs.writeFileSync("dataReq.json" , saveAllData)
}
//////////////////////////////////////////     (2) delete id 4, 6      ////////////////////////////////

const deleteData = (id) => {
    const allData = loadData()
    const dataToKeep = allData.filter((obj) =>{
        return obj.id !== id
    })
    console.log(dataToKeep)
    saveAllData(dataToKeep)
}

///////////////////////////////////////////      (3) list         ////////////////////////////////////////////////
const listData = () =>{
    const allData = loadData()
    allData.forEach((obj) => {
        console.log(obj.fname, obj.lname, obj.city)
    })
}
///////////////////////////////      (4) read all data for only thr 5th person  /////////////////////////////
const readData = (id) => {
    const allData = loadData()
    const item = allData.find((obj)=>{
        return obj.id === 5
    })
    console.log(item)
}


module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}