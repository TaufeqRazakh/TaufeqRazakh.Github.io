// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Evaluations and webpages for classes I were a teaching assistant.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "courses-csci-596-scientific-computing-and-visualization-physics-135al-physics-for-the-life-sciences",
          title: 'CSCI 596: Scientific Computing and Visualization Physics 135aL: Physics for the Life Sciences...',
          description: "",
          section: "Courses",},{id: "courses-physics-135al-physics-for-the-life-sciences",
          title: 'Physics 135aL: Physics for the Life Sciences',
          description: "",
          section: "Courses",},{id: "courses-physics-135al-physics-for-the-life-sciences",
          title: 'Physics 135aL: Physics for the Life Sciences',
          description: "",
          section: "Courses",},{id: "courses-csci-350-introduction-to-operating-systems",
          title: 'CSCI 350: Introduction to Operating Systems',
          description: "",
          section: "Courses",},{id: "courses-csci-596-scientific-computing-and-visualization",
          title: 'CSCI 596: Scientific Computing and Visualization',
          description: "",
          section: "Courses",},{id: "courses-csci-350-introduction-to-operating-systems",
          title: 'CSCI 350: Introduction to Operating Systems',
          description: "",
          section: "Courses",},{id: "courses-csci-596-scientific-computing-and-visualization",
          title: 'CSCI 596: Scientific Computing and Visualization',
          description: "",
          section: "Courses",},{id: "courses-csci-350-introduction-to-operating-systems",
          title: 'CSCI 350: Introduction to Operating Systems',
          description: "",
          section: "Courses",},{id: "news-passed-both-the-written-and-oral-parts-of-the-qualifying-examination-sparkles",
          title: 'Passed both the written and oral parts of the qualifying examination! :sparkles:',
          description: "",
          section: "News",},{id: "news-abstract-accepted-for-a-presentation-at-aps-global-physics-summit-2025",
          title: 'Abstract accepted for a presentation at APS Global Physics Summit 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},];
