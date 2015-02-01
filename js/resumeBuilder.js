var bio = {
    "name": "Chaker Ben Hammouda",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+216 20 683 118",
        "email": "benhammouda.chaker@gmail.com",
        "github": "bh-chaker",
        "location": "El May Djerba, Tunisia",
    },
    "welcomeMsg": "Welcome to my résumé!",
    "skills": ["PHP", "Python", "JavaScript", "HTML", "CSS"],
    "bioPic": "images/chaker_2011.png"
}
bio.display = function (){
    var headerRole = HTMLheaderRole.replace('%data%', this.role);
    var headerName = HTMLheaderName.replace('%data%', this.name);
    var bioPic = HTMLbioPic.replace('%data%', this.bioPic);
    var welcomeMsg = HTMLWelcomeMsg.replace('%data%', this.welcomeMsg);

    $('#header').prepend(headerRole);
    $('#header').prepend(headerName);
    $('#header').append(bioPic);
    $('#header').append(welcomeMsg);

    if (this.skills){
        $('#header').append(HTMLskillsStart);
        for (var i in this.skills){
            var skill = HTMLskills.replace('%data%', this.skills[i]);
            $('#skills').append(skill);
        }
    }

    for (var contact in this.contacts){
        var data = this.contacts[contact];
        var contactGeneric = HTMLcontactGeneric.replace('%contact%', contact);
        contactGeneric = contactGeneric.replace('%data%', data);
        $('#topContacts').append(contactGeneric);
        $('#footerContacts').append(contactGeneric);
    }
}

var education = {
    "schools": [
        {
            "name": "SupCom",
            "location": "El Ghazela, Ariana, Tunisia",
            "degree": "Bachelor",
            "majors": ["Electrical Engineer"],
            "dates": 2013,
            "url": "http://www.supcom.mincom.tn"
        }
    ],
    "onlineCourses": [
        {
            "title": "Machine Learning",
            "school": "Stanford University",
            "dates": 2011,
            "url": "http://www.ml-class.org/"
        },
        {
            "title": "Introduction to Databases",
            "school": "Stanford University",
            "dates": 2012,
            "url": "http://www.db-class.org/"
        },
        {
            "title": "C++ For C Programmers",
            "school": "University of California, Santa Cruz",
            "dates": 2013,
            "url": "https://www.coursera.org/"
        },
        {
            "title": "Machine Learning",
            "school": "Stanford University",
            "dates": 2013,
            "url": "https://www.coursera.org/"
        },
        {
            "title": "Computing for Data Analysis",
            "school": "Johns Hopkins University",
            "dates": 2014,
            "url": "https://www.coursera.org/"
        },
        {
            "title": "Heterogeneous Parallel Programming",
            "school": "University of Illinois at Urbana-Champaign",
            "dates": 2014,
            "url": "https://www.coursera.org/"
        },
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com"
        },
        {
            "title": "Data Wrangling with MongoDB",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com"
        },
    ]
};
education.display = function (){
    for (var i in this.schools){
        var school = this.schools[i];
        $("#education").append(HTMLschoolStart);

        var schoolName = HTMLschoolName.replace("%data%", school.name);
        var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var schoolHeader = $(schoolName + schoolDegree);
        var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        schoolHeader.attr("href", school.url);

        $(".education-entry:last").append(schoolHeader);
        $(".education-entry:last").append(schoolDates);
        $(".education-entry:last").append(schoolLocation);
        for (var j in school.majors){
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[j]));
        }
    }
    if (this.onlineCourses){
        $("#education").append(HTMLonlineClasses);
    }
    for (var i in this.onlineCourses){
        $("#education").append(HTMLschoolStart);
        var onlineCourse = this.onlineCourses[i];

        var onlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

        var courseHeader = $(onlineTitle + onlineSchool);
        courseHeader.attr("href", onlineCourse.url);

        $(".education-entry:last").append(courseHeader);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));

        courseUrl = $(HTMLonlineURL.replace("%data%", onlineCourse.url));
        courseUrl.attr("href", onlineCourse.url);
        $(".education-entry:last").append(courseUrl);
    }
}

var work = {
    "jobs": [
        {
            "employer": "CodinTek",
            "title": "Embedded Systems Engineer",
            "location": "El Ghazela, Ariana, Tunisia",
            "url": "http://www.codintek.com/",
            "dates": "November 01, 2013 - April 30, 2014",
            "description": "My first job after graduating from Electrical Engineer School. " +
                "I worked on various projects, my main three tasks where:<br>" +
                "<ol><li>Algorithm design with Matlab: Topology Explorer project.</li>"+
                "<li>Signal processing with FPGA: PLC Channel Emulator.</li>"+
                "<li>Programming Microcontrollers & Android: NMIHD Tools.</li></ol>"+
                "<a href='http://www.codintek.com/'>Company Website</a><br>"
        },
        {
            "employer": "Working Software",
            "title": "OO PHP 5.x Developer",
            "location": "Remote - Sydney, Australia",
            "url": "http://www.workingsoftware.com.au/",
            "dates": "April 01, 2014 - January 31, 2014",
            "description": "I worked as a remote PHP Developer.<br>"+
                "Here is what I was working on:<br>"+
                "- PHP: 50%<br>"+
                "- JavaScript: 25%<br>"+
                "- HTML/CSS: 10%<br>"+
                "- Deployment and testing: 15%<br>"+
                "There isn't a specific project that I worked on during 10 months. "+
                "I had collaborated on several projects.<br>"+
                "The project that worked on the most is EYEON project (cf projects section)."+
                "<a href='http://www.workingsoftware.com.au/'>Company Website</a><br>"
        },
        {
            "employer": "Working Software",
            "title": "Developer Operations",
            "location": "Remote - Sydney, Australia",
            "dates": "February 01, 2014 - Future",
            "description": "Since February, I moved to a position of Developer Operations.<br>"+
                "In our organisation, Developer Operations is across between "+
                "\"lead developer\" and \"systems administrator\".<br>"+
                "The skills required by this position are:<br>"+
                "- PHP<br>"+
                "- MySQL<br>"+
                "- Linux administration and shell scripting<br>"+
                "- Nginx/Apache<br>"+
                "- Regular expressions<br>"+
                "- Web security<br>"+
                "- Quality assurance and testing<br>"+
                "- HTML/CSS/JavaScript"+
                "- git<br>"+
                "I was able to get this postiion, essentially because I have a broad knowledge "+
                "across all facets of web development.<br>I don't need to work with each of these "+
                "technologies every day (and I don't need to be an expert in every single one "+
                "of them);<br>however, I need to understand them all and be a confident, independent "+
                "learner who can acquire skills and solve problems independently. "+
                "<a href='http://www.workingsoftware.com.au/'>Company Website</a><br>"
        }
    ]
};
work.display = function (){
    for (var i in this.jobs){
        var job = this.jobs[i];
        $('#workExperience').append(HTMLworkStart);
        var workEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var workTitle = HTMLworkTitle.replace('%data%', job.title);
        $('.work-entry:last').append(workEmployer + workTitle);
        $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
    }
}

var projects = {
    "projects":[
        {
            "title": "PLC Channel Emulator",
            "dates": "2014",
            "description": "PLC Channel Emulator is an emulator for power-line "+
                "communication channels.<br>"+
                "Concretely, it implements three functions :<br>"+
                "- Filter to emulate the channel response.<br>"+
                "- LFSR Counter to emulate stationary noise.<br>"+
                "- Module for impulsive noise.<br>"+
                "These modules run at a frequency of 200 MHz and can "+
                "be configured via a GUI over a serial port from the PC.<br>"+
                "<b>Languages used: VHDL, C++, Qt</b>",
            "images": ["images/PLC_1.jpg", "images/PLC_2.jpg"]
        },
        {
            "title": "NMIHD Tools",
            "dates": "2013",
            "description": "NMIHD Tools is an Android App that helps service "+
                "technicians of Orange France during their interventions.<br>"+
                "My main contribution was the implementation of automated data "+
                "collection from MTTLite and Modem via Telnet.<br>"+
                "The data collected is information about the DSL line "+
                "(data rate, crc, fec, snr, hlog, qln...).<br>"+
                "The data is then used to fill a form and also to display "+
                "useful plots that are functions of the tone number (snr, hlog and qln).<br>"+
                "<b>Languages used: Java (Android SDK), C</b>",
            "images": ["images/NMIHD_1.png", "images/NMIHD_2.png"]
        },
        {
            "title": "Topology Explorer",
            "dates": "2013-2014",
            "description": "Design of an algorithm for the diagnosis of the phone "+
                "home network to help service technician identify the Home Network "+
                "topology and find defects, instantly and reliably.<br>"+
                "The device analyses the reflected signal to extract information "+
                "about the topology. Then it displays the exact topology architecture "+
                "(plugs, distance, etc.) and defect locations (like the RC 3 pins units) "+
                "on the screen.<br>"+
                "<b>Languages used: Matlab",
            "images": ["images/TopologyExplorer.png"]
        },
        {
            "title": "EYEON",
            "dates": "2014-2015",
            "description": "EYEON is an independent property information business.<br>"+
                "While working at WorkingSoftware, I developed parts of the EYEON website.<br>"+
                "The main challenges I had to work on:<br>"+
                "- Create a custom booking system using "+
                "<a href='http://fullcalendar.io/' style='display:inline;'>FullCalendar</a> "+
                "JavaScript plugin and <a href='https://github.com/google/google-api-php-client/'"+
                " style='display:inline;'>Google API PHP client</a> to save data to Google "+
                "Calendar service.<br>"+
                "- Create a payment page and integrate NAB XML API in PHP backend (NAB: "+
                "National Australia Bank).<br>"+
                "- Custom mini-ERP for Admin user: managing clients, reports, transactions,.. .",
            "images": ["images/EyeOn_1.png", "images/EyeOn_2.png", "images/EyeOn_3.png"]
        }
    ]
};
projects.display = function (){
    for (var i in this.projects){
        var project = this.projects[i];
        var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var projectDates = HTMLprojectDates.replace("%data%", project.dates);
        var projectDescription = HTMLprojectDescription.replace("%data%", project.description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(projectTitle);
        $(".project-entry:last").append(projectDates);
        $(".project-entry:last").append(projectDescription);

        for (var j in project.images){
            var projectImage = HTMLprojectImage.replace("%data%", project.images[j]);
            $(".project-entry:last").append(projectImage);
        }
    }
};


bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);

$(document).on("click", ".preview-img", function (){
    $("#previewModal").find("img").attr("src", $(this).attr("src"));
    $("#previewModal").find("img").attr("alt", $(this).attr("alt"));
    window.location.href = "#previewModal";
});

$(document).on("click", "#previewModal", function (){
    window.location.href = "#close";
});