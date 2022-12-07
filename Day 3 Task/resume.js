let myResume={
    "basics":{
        "Name":"Prashanth Suseekaran",
        "Email":"prasha006@gmail.com",
        "Phone":1234567689,
        "Degree":"DME",
        "Location":{
            "address":"No16B nagamai Street Extension, Melakalkandar Kottai",
            "Pin-code":620011,
            "City":"Trichy",
            "State":"Tamil Nadu",
            "Country":"India"
        }
    },
    "Work-Experience":[
        {
            "Company":"Legacy healthcare",
            "Position":"Senior Executive",
            "Start Date":"16th Feb 2017",
            "End Date":"currently working here",
        },
    ],
    "Education":[
        {
            "Institute":"MIET Polytexhnic College,Trichy",
            "Department":"Mechanical",
            "Start Date":2010,
            "End Date":2023,
        }
    ]
}
    
for(let x in myResume){
    console.log(x+" : ",myResume[x]);
}