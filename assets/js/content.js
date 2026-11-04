/*
  ============================================================
  SITE CONTENT: edit this file to change what the site says.
  ============================================================

  Everything you see on the page comes from this file. You don't need
  to touch index.html, the CSS, or render.js to update your content.

  Tips for editing:
  - Text goes inside quotes: "like this". If your text has a quote mark
    in it, use a backslash before it: "the \"best\" part".
  - Every item in a list ends with a comma.
  - To ADD a project, copy one whole { ... } block in the projects list,
    paste it where you want it to appear, and change the text.
  - To HIDE something without deleting it, add  hidden: true,  to it.
  - After saving, refresh the page (or wait a minute on GitHub) to see it.
*/

window.SITE = {

  name: "Bryan Schreiner",
  location: "Portland, Oregon",

  // One sentence under your name at the top of the page.
  headline: "I build hands-on medical training: the models, the labs, and the lessons.",

  // Short paragraphs for the introduction. Add or remove paragraphs freely.
  about: [
    "I've spent over a decade at Oregon Health & Science University, first as a facilities technician in the hospital, then running day-to-day operations in the VirtuOHSU Simulation Center, and later as a medical student, student leader, and research volunteer.",
    "The work I enjoy most sits between people and equipment. That means building a training model that holds up under real use, setting up a lab so a session runs without surprises, and teaching a hands-on skill until it clicks. Along the way I co-led the design of an ECMO training manikin, first-authored a published simulation curriculum for orthopaedic residents, and taught suturing to everyone from middle school students to surgical residents.",
    "I'm now building my programming and IT skills, and I'm looking for work where medical technology, research, and leadership meet."
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/bryanschreiner/",
    github: "https://github.com/BryanCSchreiner"
  },

  // ----------------------------------------------------------
  // CURRENT PROJECTS: programming, IT, or anything in progress.
  // This section stays hidden until you add at least one item.
  // Example (remove the // at the start of each line to use it):
  //
  // { title: "Personal website", years: "2026",
  //   summary: "Designed and built this site with HTML, CSS, and JavaScript, hosted on GitHub Pages.",
  //   links: [{ label: "View the code", url: "https://github.com/BryanCSchreiner/bryancschreiner.github.io" }],
  //   tags: ["HTML", "CSS", "JavaScript"] },
  // ----------------------------------------------------------
  currentProjects: [
  ],

  // ----------------------------------------------------------
  // SELECTED WORK: finished work, shown in this order.
  // Fields: title, years, role, org, summary, details (list),
  //         outcome, links (list of { label, url }), tags (list)
  // ----------------------------------------------------------
  work: [
    {
      title: "ECMO cannulation training manikin",
      years: "2020 – 2022",
      role: "Project lead",
      org: "OHSU Division of Trauma, Critical Care & Acute Care Surgery",
      summary: "There was no way to practice ECMO cannulation during CPR (eCPR) on a manikin. With Robert Unger and faculty mentor Dr. Mackenzie Cook, I co-led building \"Mario,\" a manikin designed to arrive by ambulance, move into the trauma bay, and be worked on by surgeons, nurses, respiratory therapists, and the rest of the team.",
      details: [
        "Converted a decommissioned manikin with a compressible, closed-loop circulatory system based on research into vascular anatomy and fluid dynamics",
        "Developed reusable tissue blocks that can be cannulated under ultrasound, using 3D printing and testing new materials after early ballistics-gel blocks broke apart",
        "Built it to take chest compressions and cannulation at the same time; OHSU fellows used it to practice guidewire and cannula placement"
      ],
      outcome: "Filed a U.S. provisional patent application (May 2022). Presented at the American College of Surgeons Oregon-Washington Summit, the Portland Surgical Society, and two OHSU education symposia.",
      links: [ { label: "View the 2022 poster", url: "https://digitalcollections.ohsu.edu/record/9767" } ],
      // Add your own photo: put the file in assets/img/ and uncomment the next line.
      // image: { src: "assets/img/mario.jpg", alt: "The Mario eCPR training manikin", caption: "Mario during a cannulation session" },
      tags: ["Prototyping", "3D printing", "Simulation design"]
    },
    {
      title: "Temporal bone anatomy series for medical students",
      years: "2023 – 2024",
      role: "Development lead",
      org: "OHSU School of Medicine & Department of Otolaryngology",
      summary: "Medical students get a single day of inner and middle ear dissection before they see that anatomy again on ENT rotations. ENT faculty asked me to help close the gap.",
      details: [
        "Worked with two classmates and ENT faculty to adapt the residents' temporal bone lab into an introductory series",
        "Wrote the proposal covering learning goals, scheduling, faculty time, and use of donor tissue",
        "Opened the series to students in several interest groups, including ENT, neurosurgery, pediatrics, and anatomy"
      ],
      outcome: "Approved by the School of Medicine, the Body Donation Program, and the Simulation Steering Committee. Ran twice, with nine students per session taught by an ENT attending and two residents. Surveyed students' average confidence rose from 2.6 to 4.6 out of 5, and quiz scores from 7.4 to 8.4 out of 10. Presented at OHSU Research Week (2024).",
      links: [ { label: "Read the 2024 abstract", url: "https://digitalcollections.ohsu.edu/record/43606" } ],
      tags: ["Curriculum design", "Proposal writing", "Cross-department coordination"]
    },
    {
      title: "Simulation curricula for surgical residency programs",
      years: "2021 – 2024",
      role: "First author & research assistant",
      org: "OHSU Orthopaedics & Rehabilitation and Neurological Surgery",
      summary: "Residency programs are required to add simulation training but get little guidance on doing it affordably. I helped document two OHSU programs so other institutions can build their own.",
      details: [
        "Orthopaedics (first author): described a curriculum that serves junior and senior residents, lowers cost per resident by reusing cadaveric specimens, and works with a broad range of industry partners. I conducted the literature review, contributed to the manuscript, and created its original figures.",
        "Neurosurgery: contributed the literature review, progress reports, and manuscript writing for a guide to OHSU's skull base surgery course series, drawing on 337 course evaluations collected over six years"
      ],
      outcome: "Published in JBJS Open Access (2024) and Clinical Neurology and Neurosurgery (2023). Presented at the North American Skull Base Society annual meeting, OHSU Research Week, and the OHSU Symposium on Educational Excellence.",
      links: [
        { label: "Read the orthopaedics article", url: "https://doi.org/10.2106/JBJS.OA.23.00114" },
        { label: "Read the neurosurgery article", url: "https://doi.org/10.1016/j.clineuro.2023.107585" },
        { label: "Research Week 2022 abstract", url: "https://digitalcollections.ohsu.edu/record/9592" }
      ],
      tags: ["Research", "Scientific writing", "Figure design"]
    },
    {
      title: "Measuring surgical skill and independence",
      years: "2017 – 2020",
      role: "Thesis author & clinical evaluator",
      org: "Portland State University & OHSU",
      summary: "Two projects about putting numbers on how well surgeons in training are doing.",
      details: [
        "Honors thesis: tested whether wearable motion sensors can objectively measure arthroscopic skill, using a cadaveric shoulder model",
        "OpTrust study: observed surgical cases and rated how much independence attending surgeons gave residents across five areas: leadership, instruction, operative plan, problem-solving, and the kinds of questions asked"
      ],
      outcome: "Thesis published in Portland State University's Honors Theses collection (2017).",
      links: [ { label: "Read the thesis", url: "https://doi.org/10.15760/honors.414" } ],
      tags: ["Research", "Sensors", "Assessment"]
    }
  ],

  // ----------------------------------------------------------
  // EXPERIENCE: most recent first.
  // ----------------------------------------------------------
  experience: [
    {
      title: "Simulation Program Specialist",
      org: "VirtuOHSU Simulation Center, OHSU",
      years: "2017 – 2022",
      points: [
        "Supervised the center during skills labs and simulation events, directing volunteers and technical assistants",
        "Coached residents, medical students, and other learners as a skills instructor alongside faculty",
        "Planned events end to end: resources, schedules, volunteer recruitment and training, and lab safety",
        "Managed simulators and VR training equipment, including inventory, service agreements, and troubleshooting",
        "Followed protocols for biohazards, infection control, and cadaveric and FDA tissue handling"
      ]
    },
    {
      title: "Simulation Student Worker",
      org: "VirtuOHSU Simulation Center, OHSU",
      years: "2016 – 2017",
      points: [
        "Supported labs for central line placement, arthroscopy, general surgery skills, and ultrasound",
        "Taught suturing, knot tying, and laparoscopic technique to students, residents, and staff"
      ]
    },
    {
      title: "Student Facilities Technician",
      org: "OHSU Hospital",
      years: "2014 – 2016",
      points: [
        "Maintained clinical building systems, including medical gas lines, pneumatic tubes, plumbing, and lighting",
        "Triaged urgent work requests and served as a designated first responder",
        "Trained new technicians"
      ]
    },
    {
      title: "Backroom Associate",
      org: "Sears",
      years: "2013 – 2014",
      points: [
        "Ran the stockroom and time-sensitive customer deliveries, and trained new associates"
      ]
    }
  ],

  // ----------------------------------------------------------
  // LEADERSHIP, TEACHING & VOLUNTEERING
  // ----------------------------------------------------------
  leadership: [
    { title: "Student lead, Neurosurgery Interest Group", org: "OHSU School of Medicine", years: "2023 – 2024",
      text: "Ran a research-focused group connecting medical students with neurosurgery residents and faculty. I kept the monthly meetings on conferences, project ideas, and faculty matches, then added hands-on simulation sessions and worked with residents to revive the Brain School teaching series, recruiting the instructors and organizing each event myself." },
    { title: "Development lead, temporal bone anatomy series", org: "OHSU School of Medicine", years: "2023",
      text: "Coordinated ENT faculty, residents, and classmates, and secured approval from three university groups, to launch a new learning series." },
    { title: "Undergraduate mentor", org: "OHSU Pay It Forward", years: "2023",
      text: "Advised college students from underrepresented backgrounds on academics and preparing for health careers." },
    { title: "Instructor", org: "On Track OHSU!", years: "2017 – 2022",
      text: "Taught suturing to middle and high school students from underrepresented backgrounds." },
    { title: "Instructor", org: "Saturday Academy", years: "2017 – 2019",
      text: "Led simulation lab tours and taught basic suturing to high school students." },
    { title: "Volunteer, 700+ hours", org: "OHSU", years: "2015 – 2016",
      text: "Simulation center support, patient-unit support in surgical oncology, bone marrow transplant, neurology, and ENT, and a summer in an orthopaedic stem cell research lab." }
  ],

  // ----------------------------------------------------------
  // PUBLICATIONS & PRESENTATIONS
  // ----------------------------------------------------------
  publications: [
    { text: "Schreiner B, Unger R, Herzka AS, Friess DM, Nazir OF, Brady JM. A curricular model for simulation within orthopaedic residency training. JBJS Open Access. 2024;9(2):e23.00114.",
      url: "https://doi.org/10.2106/JBJS.OA.23.00114" },
    { text: "Pang BW, Obayashi J, Schreiner B, Unger R, McCartney S, Dingman J, Selden NR, Cetas JS, Dogan A, Ciporen JN. Innovative growth and development of a neurological surgery residency cadaveric skull base simulation training program: A single institution experience. Clinical Neurology and Neurosurgery. 2023;225:107585.",
      url: "https://doi.org/10.1016/j.clineuro.2023.107585" },
    { text: "Schreiner BC. Wearable inertial sensors allow for quantitative assessment of arthroscopic skill in a cadaveric shoulder model. University Honors Theses, Portland State University. 2017. Paper 418.",
      url: "https://doi.org/10.15760/honors.414" }
  ],

  presentations: [
    { text: "Anatomical review and introduction to the surgical approach of the temporal bone for undergraduate medical students", where: "OHSU Research Week, Portland, OR (with Kellerman H, Iyer S, Drusin M, Gantz J, Raz Y)", year: "2024",
      url: "https://digitalcollections.ohsu.edu/record/43606" },
    { text: "A curricular model for simulation within orthopaedic residency training", where: "OHSU Symposium on Educational Excellence, Portland, OR", year: "2023",
      url: "https://digitalcollections.ohsu.edu/record/41732" },
    { text: "Novel ECMO manikin development for multidisciplinary training", where: "Oral presentation, American College of Surgeons Oregon-Washington Summit, Sunriver, OR", year: "2022" },
    { text: "Novel ECMO manikin development for multidisciplinary training", where: "Oral presentation, Portland Surgical Society Scientific Session, Portland, OR", year: "2022" },
    { text: "A playbook for neurosurgical resident training in skull base surgery", where: "Oral presentation, 31st Annual North American Skull Base Society Meeting, Phoenix, AZ", year: "2022" },
    { text: "A playbook for neurosurgical resident training in skull base surgery", where: "Poster, OHSU Research Week, Portland, OR", year: "2022",
      url: "https://digitalcollections.ohsu.edu/record/9592" },
    { text: "Novel eCPR manikin updates and improvements: bringing excellence in simulation to frontline workers", where: "Poster, OHSU Symposium on Educational Excellence", year: "2022",
      url: "https://digitalcollections.ohsu.edu/record/9767" },
    { text: "Novel eCPR manikin allows for first-of-its-kind multidisciplinary simulation", where: "Poster, OHSU Symposium on Educational Excellence", year: "2021" }
  ],

  // ----------------------------------------------------------
  // AWARDS & TRAINING
  // ----------------------------------------------------------
  awards: [
    { title: "Barry Family Scholarship", org: "OHSU School of Medicine", year: "2023" },
    { title: "Magna Cum Laude, Institutional Honors", org: "Portland State University", year: "2017" },
    { title: "Phi Kappa Phi Honor Society", org: "Portland State University", year: "2017" },
    { title: "President's List", org: "Portland State University", year: "2015 – 2017" }
  ],

  certifications: [
    { title: "Good Clinical Practice, FDA focus", org: "CITI Program", year: "2022" },
    { title: "Human Subjects Research", org: "CITI Program", year: "2023" },
    { title: "Responsible Conduct of Research", org: "CITI Program", year: "2023" },
    { title: "Animal Care and Use: Working with the IACUC", org: "CITI Program", year: "2022" },
    { title: "Conflict Management Certificate Series", org: "OHSU", year: "2018" },
    { title: "Stop the Bleed", org: "OHSU", year: "2017" }
  ],

  // ----------------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------------
  education: [
    { school: "Oregon Health & Science University, School of Medicine", degree: "Doctor of Medicine (MD) program" },
    { school: "Portland State University, Honors College", degree: "Bachelor of Science in Biology, minor in Chemistry",
      notes: ["Magna cum laude"] },
    { school: "Portland Community College", degree: "Associate of Science, transfer program" }
  ]
};
