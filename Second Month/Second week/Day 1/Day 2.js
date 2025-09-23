db.Instructors.find()
db.Instructors.find({salary:{$gt:4000}} , {firstName:1 , salary:1})
db.Instructors.find({age:{$lte:25}})
db.Instructors.find({$and:[{"address.city":"mansoura" },{$or:[{"address.stret":10} , {"address.street":14}]}]},{firstName:1 , address:1 , salary:1})
db.Instructors.find({courses:{$all:["js","jquery"]}})
db.Instructors.find({courses:{$exists:true}}).forEach((ins)=>{
    print(`${ins.firstName}  ${ins.courses.length}`);});
db.Instructors.find({firstName:{$exists:true} , lastName:{$exists:true}}).sort({firstName:1 , lastName:-1}).forEach((ins)=>{
    print(`FullName : ${ins.firstName} ${ins .lastName} , Age ${ins.age}`)
})
db.Instructors.find({$or:[{firstName:{$regex:"mohammed" , $options: "i"}} , {lastName:{$regex:"mohammed" , $options: "i"}}]})
db.Instructors.deleteOne({firstName:"ebtesam" , courses:{$size:5}})
db.Instructors.updateMany({},{$set:{active:true}})
db.Instructors.find({firstName:"mazen" , lastName:"mohammed" , courses:"EF"},{$set:{"courses.$" : "jquery"}})
db.Instructors.update({firstName:"noha" , lastName:"hesham"},{$push:{courses : "jquery"}})
db.Instructors.update({firstName:"ahmed" , lastName:"ali"},{$unset:{courses:""}})
db.Instructors.updateMany({courses:{$size:3}},{$inc:{salary:-500}})
db.Instructors.updateMany({},{$rename:{address:"FullAddress"}})
db.Instructors.update({firstName:"noha"},{$set:{"FullAddress.street":20}})