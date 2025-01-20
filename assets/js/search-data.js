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
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-passed-both-the-written-and-oral-parts-of-the-qualifying-examination-sparkles",
          title: 'Passed both the written and oral parts of the qualifying examination! :sparkles:',
          description: "",
          section: "News",},{id: "news-abstract-accepted-for-a-presentation-at-aps-global-physics-summit-2025",
          title: 'Abstract accepted for a presentation at APS Global Physics Summit 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},];
