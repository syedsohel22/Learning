//Typescript

// class
//type 
// interface
// enum
// tuple 
// Union 
// generic function (advance js)



class emp {

    name : string
   readonly email : string

    constructor(name : string , email : string){
        this.name = name;
        this.email = email

    }
}

let emp1 = new emp( "Vivek"  , "vivek@gamil.com");

emp1.email = "gagan@gmail.com"






type UserId  = number


// male female other  --> fixed

// enum ?

enum Gender {
    Male ,
    Female , 
    Others 
}

// tuple ?   [string | boolean , string , number]  = [Role , Level , Comm. Level(1-5) ]


enum Role {
    FSD = "FSD",
    FRONTEND = "FRONTEND",
    NXM = "NXM",
    JAVA = "JAVA"
}

type Expertise = [ Role ,
                        "BASIC" | "MEDIUM" | "ADVANCE" ,
                             1 | 2 | 3 | 4 | 5        ]

enum BloodGroup {
    A = "A",
    B = "B",
    Opostive = "O+",
    Onegative = "O-"    
 }

type employee = {
   readonly id : UserId,
    name : string ,
    gender : Gender,
    married : boolean,
    bloodGroup : BloodGroup,
    expertise : Expertise
}

let obj : employee = {

    id  : 1,
    name   : "vivek" ,
    gender : Gender.Male,
    married : false,
    bloodGroup : BloodGroup.A,
    expertise : [Role.FSD,"ADVANCE",1]

}

obj.name = "vikas"

console.log(obj)