
var bio = {
    "name": "Saranya",
    "role": "Developer",
    "contacts": {
        "mobile": "555566666",
        "email": "sss@gmail.com",
        "github": "sharangithub",
        "location": "trichy,Tamilnadu"
    },
    "welcomeMessage": "Welcome to my Portfolio Page",
    "skills": ["HTML5","CSS3","Javascript","Dotnet","Java","jQuery"],
    "biopic": "images/fry.png",
};

var education = {
    "schools": [
    {
        "name": "Shrimathi indira gandhi College",
        "location": "trichy",
        "degree": "Msc.Information technology",
        "majors": ["Computer Science","Information technology"],
        "dates": "2013 - 2015",
        "url": "http://www.sigc.edu/"
    },
    {
        "name": "Shrimathi india gandhi college",
        "location": "trichy",
        "degree": "BCA",
        "majors": ["Computer Science","computer applications"],
        "dates": "2010 - 2015",
        "url": "http://www.sigc.edu/"
    },
    {
        "name": "RSK Higher Sec. School",
        "location": "trichy",
        "degree": "12th",
        "majors": ["Science","Maths","social"],
        "dates": "2008-2010",
        "url": "http://www.rsk.edu"
    }],

    "onlineCourses": [
    {
        "title": "Front End developer",
        "school": "Udacity",
        "date": "feb,2016 - july 2016",
        "url": "https://profiles.udacity.com/?_ga=1.191526058.1657317119.1460480024"
    }]
};

var work = {
    "jobs": [
    {
        "employer": " Synergy system Solutions",
        "title": "Faculty",
        "location": "bangalore",
        "dates": "2015 - 2016",
        "description": "Teaching java ,sql for college student"
    },
    {
        "employer": "Systems Domain",
        "title": "faculty",
        "location": "bangalore",
        "dates": "2015 - 2016",
        "description": "Teaching java,dotnet,sql for college students."
    }]
};

var projects = {
    "projects": [
    {
        "title": "Sample project 1",
        "dates": "Jan 2014 - feb 2015",
        "description": "Description of my project.",
        "images": ["images/projects/pro1.png", "images/projects/pro12.png"]
    }

  ]
};


//Bio Functions //
bio.display = function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        //displaying
        $("#header").prepend(formattedName,formattedRole);
        $("#header").append(formattedPic, formattedMessage);
        //contact List//
        var formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation;
        for (var contact in bio.contacts){
            formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            formattedEmail  = HTMLemail.replace("%data%", bio.contacts.email);
            formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        }
        $("#topContacts, #footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
        // $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);

        if (bio.skills.length > 0){
            $("#header").append(HTMLskillsStart);
                // for (var i=0; i < bio.skills.length; i++){
                //     var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                //     $("#skills").append(formattedSkills);
                // }
            // for (var skill in bio.skills){
            bio.skills.forEach(function(skill){
                // if (bio.skills.hasOwnProperty(skill)) {
                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
            });
        }

};


//Work Function //
work.display = function(){
    $("#workExperience").append(HTMLworkStart);
    // for (var job in work.jobs){
    work.jobs.forEach(function(job){
        var formattedEmp = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedDesc = HTMLworkDescription.replace("%data%", job.description);
        var formatworkLoc = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry").append(formattedEmp + formattedTitle);
        $(".work-entry").append(formattedDate);
        $(".work-entry").append(formatworkLoc);
        $(".work-entry").append(formattedDesc);
    });
};

//Projects Function //
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    // for (var project in projects.projects){
    projects.projects.forEach(function(project){
        var formprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formprojectDate = HTMLprojectDates.replace("%data%", project.dates);
        var formprojectDesc = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry").append(formprojectTitle);
        $(".project-entry").append(formprojectDate);
        $(".project-entry").append(formprojectDesc);
        // for (var image in projects.projects[project].images){
        for(var i=0; i < project.images.length; i++){
             var formprojectImage = HTMLprojectImage.replace("%data%", project.images[i]);
             $(".project-entry:last").append(formprojectImage);
         }
    });
};

// //Education Function //
education.display = function()
{
    $("#education").append(HTMLschoolStart);
    // for (var school in education.schools){
    education.schools.forEach(function(school){
        var formatschoolName = HTMLschoolName.replace("%data%", school.name);
        var formatschooldeg = HTMLschoolDegree.replace("%data%", school.degree);
        var formatschoolmajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formatschooldates = HTMLschoolDates.replace("%data%", school.dates);
        var formatschoolLoc = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry").append(formatschoolName + formatschooldeg);
        $(".education-entry").append(formatschooldates);
        $(".education-entry").append(formatschoolmajor);
        $(".education-entry").append(formatschoolLoc);
    });
//};
education.displayonlinecourse = function(){
    $("#education:last").append(HTMLonlineClasses);
    $("#education:last").append(HTMLschoolStart);
    // for (var onlineCourse in education.onlineCourses){
    for (var i=0; i < education.onlineCourses.length; i++){
        var formatonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formatonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formatonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        var formatonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formatonlineTitle + formatonlineschool);
        $(".education-entry:last").append(formatonlinedates);
        $(".education-entry:last").append(formatonlineurl);
    }
};
education.displayonlinecourse();
};



//Google Map code//

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
    return newName;
}

bio.display();
education.display();
work.display();
projects.display();
//education.displayonlinecourse();
