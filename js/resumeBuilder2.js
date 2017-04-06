// create var with private information 
var bio = {
    "name": "Britta Ente",
    "age": 39,
    "skills": ["Python", "HTML", "CSS", "Bootstrap"],
    "role": "learner of the year 2017",
    "biopic": "http://classroomclipart.com/images/gallery/Clipart/Animals/Duck_Clipart/TN_yellow-duck-clipart-6125.jpg",
    "welcomeMessage": "ne discere cessa",
    "contacts": {
        "location": "hamburg",
        "email": "ente@test.de",
        "twitter": "@ente",
        "mobile": "000899798798798",
        "github": "ndc"
    }
};

// create var with education details, schools and online courses
var education = {
    "schools": [{
        "name": "eating school",
        "location": "Hannover, Germany",
        "dates": "1978-2001",
        "degree": "fakedegree",
        "url": "fake@school.com",
        "majors": ["history of eating"],
    }],

    "onlinecourse": [{
        "title": "INPD",
        "school": "udacity",
        "dates": "2017",
        "url": "http://udacity.com/course/ud804"
    }]
};

// create var with current job and former jobs 
var work = {
    "jobs": [{
            "employer": "cremer group",
            "title": "execution",
            "location": "hamburg, Germany",
            "dates": "2003 -  future",
            "description": "paper without end"
        },
        {
            "employer": "fantasy film",
            "title": "master of desaster",
            "location": "Köln, Germany",
            "dates": "1995 -  2003",
            "description": " destroying the world"
        }
    ]
};

// create var with current and former projects 
var projects = {
    "projects": [{
            "title": "INPD",
            "dates": "2017",
            "description": "introduction into programming",
            "images": [
                "http://jscoderetreat.com/img/why-js.png",
                "http://cdn.crunchify.com/wp-content/uploads/2013/03/JSON-tutorial-in-Java-Crunchify-Tips.png"
            ]
        },
        {
            "title": "chinese",
            "dates": "2017",
            "description": "learn 120 lesson in mandarin",
            "images": [
                "https://i.vimeocdn.com/portrait/3594481_300x300",
                "http://www.alphacrc.com/wp-content/uploads/2014/07/putonghua-450x263.jpg"
            ]
        }
    ]
};






// display function for all jobs
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var fromattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(fromattedworkDescription);
    }
};


// display function for all education 
education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolname);

        var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoollocation);

        var formattedSchooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchooldates);

        var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchooldegree);

        var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolmajor);
    }


    for (var online = 0; online < education.onlinecourse.length; online++) {
        $("#education").append(HTMLschoolStart);

        var formattedonlinetitle = HTMLonlineTitle.replace("%data%", education.onlinecourse[online].title);
        $(".education-entry:last").append(formattedonlinetitle);

        var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlinecourse[online].school);
        $(".education-entry:last").append(formattedonlineschool);

        var formattedonlinedates = HTMLonlineDates.replace("%data%", education.onlinecourse[online].dates);
        $(".education-entry:last").append(formattedonlinedates);

        var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlinecourse[online].url);
        $(".education-entry:last").append(formattedonlineurl);

    }



};


// function for bio display 
bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedBiopic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
    $("#header").append(formattedWelcomeMessage);

    // footer contacts 
    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);
    //top contacts
    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);  

    if (bio.skills.length !== 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

};





// where will the client make one mouseclick???
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);

});

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);


    }

    return locationArray;
}

console.log(locationizer(work));

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);


// function for display of all projects 
projects.display = function() {
    for(var i = 0 ; i < projects.projects.length ; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        for(var j = 0 ;j < projects.projects[i].images.length ; j++) {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};



// call all functions

projects.display();
bio.display();
education.display();
work.display();

// call google map
$("#mapDiv").append(googleMap);