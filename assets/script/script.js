console.log("we're here!");

// ===========
// Skills
// ===========
const skills = {
    1 : {
        name : "HTML",
        years : 3
    },
    2 : {
        name : "CSS",
        years : 3
    },
    3 : {
        name : "Python",
        years : 3
    },
    4 : {
        name : "C#",
        years : 1
    },
    5 : {
        name : "Java",
        years : 2
    },
    6 : {
        name : "JS",
        years : 3
    },
    7 : {
        name : "C++",
        years : 3
    },
    8 : {
        name : "Markdown",
        years : 2
    },
    9 : {
        name : "Flask",
        years : 3
    },
    10 : {
        name : "Bcrypt",
        years : 2
    },
    11 : {
        name : "Node.js",
        years : 2
    },
    12 : {
        name : "React",
        years : 2
    },
    13 : {
        name : "Mongoose",
        years : 2
    },
    14 : {
        name : "MongoDb",
        years : 2
    },
    15 : {
        name : "MySQL",
        years : 2
    },
    16 : {
        name : "Entity Framework",
        years : 1
    },
    17 : {
        name : "ASP.NET Core",
        years : 1
    },
    18 : {
        name : "MERN",
        years : 2
    },
    19 : {
        name : "Git",
        years : 2.5
    },
    20 : {
        name : "Github",
        years : 2.5
    },
    21 : {
        name : "Express",
        years : 2
    },
    22 : {
        name : "JSON",
        years : 2
    },
    23 : {
        name : "Jinja2",
        years : 2
    },
    24 : {
        name : "ASP.Net Razor",
        years : 2
    },
    25 : {
        name : "Full Stack Development",
        years : 2
    },
    26 : {
        name : "MVC",
        years : 2
    },
    27 : {
        name : "Agile",
        years : 1
    },
    28 : {
        name : "Object Oriented Programming",
        years : 3
    },
    29 : {
        name : "Web Development",
        years : 2
    },
    30 : {
        name : "VS Code",
        years : 2
    },
    31 : {
        name : "Spring Boot",
        years : 2
    },
    32 : {
        name : "Bootstrap",
        years : 2
    },
    33 : {
        name : "Sass",
        years : 2
    },
    34 : {
        name : "Postman",
        years : 2
    },
    35 : {
        name : "Sales Analytics",
        years : 2
    },
    36 : {
        name : "Consultation",
        years : 2
    },
    37 : {
        name : "Franchise Management",
        years : 2
    },
    38 : {
        name : "Marketing",
        years : 3
    },
    39 : {
        name : "Customer Service",
        years : 12
    },
    40 : {
        name : "Scheduling",
        years : 2
    },
    41 : {
        name : "Teamwork",
        years : 15
    },
    42 : {
        name : "Team Building",
        years : 15
    },
    43 : {
        name : "Leadership",
        years : 3
    },
    44 : {
        name : "Organization",
        years : 17
    },
    45 : {
        name : "Management",
        years : 2
    },
    46 : {
        name : "Data Analytics",
        years : 2
    },
    40 : {
        name : "Hospitality Management",
        years : 8
    },
}
for(const [key, value] of Object.entries(skills)) {
    
    // creating new div element\
    const parentDiv = document.createElement("div")
    parentDiv.className = "d-flex jc-start ai-center g-5 w-25"
    const divYear = document.createElement("div")
    divYear.className = "skillYear p-1"
    const divName = document.createElement("div")
    divName.className = "skillName p-1"

    // getting content
    var elName = value.name
    var elYear = value.years

    divYear.innerText = elYear;
    divName.innerText = elName;

    const current = document.getElementById("skills")
    parentDiv.append(divYear)
    parentDiv.append(divName)
    current.append(parentDiv)
    // el = document.createElement("li");

}


// ===========
// Scroll Speed
// ===========
jQuery(document).ready(function() {
    
    jQuery('.to-id').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#scrollID').position().top}, 1000);
        return false;
    })
});
