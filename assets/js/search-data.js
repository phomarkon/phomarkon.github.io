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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Academic publications and research papers spanning machine learning, computer vision, and remote sensing applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub repositories showcasing my machine learning projects and data science work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae - Phongsakon Mark Konrad. Research Assistant at SDU with experience in machine learning, software engineering, and entrepreneurship.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "My experience as a teaching assistant.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-welcome",
        
          title: "Welcome",
        
        description: "A few words on what this place is for.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/welcome/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-completed-1st-place-in-sdu-case-competition",
          title: 'Completed 1st Place in SDU Case Competition',
          description: "",
          section: "News",},{id: "news-started-my-research-assistant-position-at-sdu-under-assoiate-professor-serkan-ayvaz",
          title: 'Started my Research Assistant position at SDU under Assoiate Professor Serkan Ayvaz',
          description: "",
          section: "News",},{id: "news-achieved-top-ten-in-dmai-2024-danish-ai-competition",
          title: 'Achieved Top Ten in DMAI 2024 (Danish AI Competition).',
          description: "",
          section: "News",},{id: "news-accepted-for-exchange-at-hkust-will-be-studying-in-hong-kong-from-september-to-december-2025",
          title: 'Accepted for exchange at HKUST! Will be studying in Hong Kong from September...',
          description: "",
          section: "News",},{id: "news-participating-in-mit-global-ai-hackathon-2025",
          title: 'Participating in MIT Global AI Hackathon 2025',
          description: "",
          section: "News",},{id: "news-my-first-paper-has-been-accepted-by-kes-2025-see-you-in-osaka",
          title: 'My first paper has been accepted by KES 2025! See you in Osaka...',
          description: "",
          section: "News",},{id: "projects-projects-coming-soon",
          title: 'Projects Coming Soon',
          description: "Check back soon for updates on my current projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%68%6F%6E%67%73%61%6B%6F%6E@%6F%75%74%6C%6F%6F%6B.%64%6B", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/phongsakonmarkkonrad", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
