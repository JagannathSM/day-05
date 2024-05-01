var resume = {
    "name":"Jagan",
    "age":"23",
    "gender":"male",
    "bloodgroup":"a(-ve)",
    "education":{
        "SSLC":{
            "school/collegename":"ijms",
            "attendence":"80%",
            "mark":{
                "totalmark":"500",
                "obtainedmark":"450"
            },
            "group":"cs"
        },
        "HSC":{
            "school/collegename":"ijms",
            "attendence":"87%",
            "mark":{
                "totalmark":"1200",
                "obtainedmark":"1050"
            },
            "group":"cs"
        },
        "ug":{
            "school/collegename":"sist",
            "attendence":"78%",
            "mark":{
                "totalmark":"10-CGPA",
                "obtainedmark":"6.8-CGPA"
            },
            "group":"engineering-cs"
        },
        "pg":{
            "school/collegename":"srm",
            "attendence":"83%",
            "mark":{
                "totalmark":"10-CGPA",
                "obtainedmark":"7.4-CGPA"
            },
            "group":"hr/operations"
        }
    },
    "personalinfo":{
        "occupation":"fsd-learner",
        "mobile":"88119023XX",
        "fathername":"magesh",
        "languageknown":{
            "write":"tamil,hindi,english",
            "read":"english,hindi,tamil",
            "speak":"english,hindi,tamil,marathi,japanese"
        },
        "passport":"yes"
    }
};


//ITERATE USING FOR LOOP


//ITERATE USING FOR IN LOOP
for(key in resume){
    console.log(resume[key]);
    console.log(`${key} : ${resume[key]}`);
}