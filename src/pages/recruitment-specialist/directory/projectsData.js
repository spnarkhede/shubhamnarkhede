// Projects data for recruitment-specialist role
export const companyProjects = {
  featured: {
    title: "Connected Charging Cable (CCC)",
    date: "2022 - Present",
    company: "Robert Bosch GmbH",
    description: "Led the development of a comprehensive management system for electric vehicle charging infrastructure. The system provides real-time monitoring, user management, and analytics capabilities for charging stations across Europe.",
    longDescription: "The Connected Charging Cable (CCC) project is a flagship initiative at Robert Bosch GmbH that revolutionizes how electric vehicle charging infrastructure is managed. As the lead developer, I architected and implemented a scalable solution that handles thousands of concurrent connections while providing real-time monitoring, user management, payment processing, and analytics capabilities. The system integrates with multiple third-party services and employs a microservices architecture for maximum flexibility and resilience.",
    technologies: ["Angular", "Node.js", "AWS", "Docker", "Kubernetes", "Microservices", "CI/CD", "Playwright"],
    achievements: [
      "Reduced deployment time by 75% across development teams",
      "Handles 10,000+ concurrent charging sessions",
      "Improved system reliability by 60%",
      "Integrated with 15+ third-party payment providers"
    ],
    image: "/img/projects/ccc-project.jpg",
    demoLink: "https://example.com/ccc-demo",
    codeLink: null, // Company proprietary
  },
  
  projects: [
    {
      title: "Charge Point Management System",
      date: "2022 - Present",
      company: "Robert Bosch GmbH",
      description: "Developed a comprehensive management system for electric vehicle charging points with monitoring and analytics capabilities.",
      longDescription: "The Charge Point Management System (CPMS) is a sophisticated platform designed to monitor, manage, and analyze electric vehicle charging infrastructure. I led the development of this system, which includes features such as real-time status monitoring, predictive maintenance alerts, usage analytics, and integration with payment systems. The platform supports both DC and AC charging stations and complies with OCPP standards for maximum compatibility.",
      technologies: ["React", "TypeScript", "Docker", "CI/CD", "Azure", "REST APIs", "OCPP Protocol"],
      achievements: [
        "Supports 500+ charging stations across Europe",
        "Reduced maintenance costs by 40%",
        "99.9% uptime achieved",
        "OCPP 2.0.1 compliance implemented"
      ],
      image: "/img/projects/cpms-project.jpg",
      demoLink: "https://example.com/cpms-demo",
      codeLink: null,
    },
    {
      title: "Support Portal 2.0",
      date: "2023 - Present",
      company: "Robert Bosch GmbH",
      description: "Redesigned and enhanced the support portal with improved user interface and streamlined ticket management system.",
      longDescription: "Support Portal 2.0 represents a complete overhaul of the customer support experience at Robert Bosch GmbH. I led the UI/UX redesign process, conducting user research and creating wireframes and prototypes in Figma before implementing the new design. The portal features an intuitive ticket management system, knowledge base integration, automated routing, and real-time status updates. The redesign resulted in a 40% reduction in ticket resolution time and significantly improved customer satisfaction scores.",
      technologies: ["UI/UX", "Angular", "Figma", "Azure", "Node.js", "MongoDB"],
      achievements: [
        "40% reduction in ticket resolution time",
        "Customer satisfaction increased by 35%",
        "Automated 60% of routine support tasks",
        "Multi-language support for 12 languages"
      ],
      image: "/img/projects/support-portal.jpg",
      demoLink: "https://example.com/support-portal-demo",
      codeLink: null,
    },
    {
      title: "DC-MH/SDI Tool Overview",
      date: "2020 - 2022",
      company: "Bosch Rexroth AG",
      description: "Created a comprehensive dashboard for the Area Sales and Distribution department to visualize key metrics and streamline decision-making processes.",
      longDescription: "The DC-MH/SDI Tool Overview is a centralized dashboard that provides real-time visibility into sales and distribution metrics for the management team. I designed and developed this tool to consolidate data from multiple sources, creating a single source of truth for decision-making. The dashboard includes interactive visualizations, customizable reports, and automated alerts for key performance indicators. This tool has become essential for strategic planning and has contributed to a 15% increase in operational efficiency.",
      technologies: ["Angular", "D3.js", "Azure", "REST APIs", "SQL"],
      achievements: [
        "15% increase in operational efficiency",
        "Consolidated data from 10+ sources",
        "Real-time dashboard visualization",
        "Automated KPI alerts implemented"
      ],
      image: "/img/projects/dc-mh-sdi-tool.jpg",
      demoLink: "https://example.com/dc-mh-sdi-demo",
      codeLink: null,
    },
    {
      title: "Smart Project Management (SPM) v3.0",
      date: "2021 - 2022",
      company: "Bosch Rexroth AG",
      description: "Completely redesigned the Smart Project Management platform with a focus on scalability, performance, and enhanced collaboration features.",
      longDescription: "SPM Version 3.0.0 was a ground-up redesign of the Smart Project Management platform, focusing on enterprise-scale deployment. I led the architecture and development of this version, which introduced real-time collaboration features, advanced permission management, and comprehensive audit logging. The system was rebuilt using a microservices architecture to improve scalability and resilience. This version also introduced AI-assisted project planning and risk assessment tools, helping project managers identify potential issues before they impact timelines.",
      technologies: ["Angular", "Node.js", "Microservices", "Kubernetes", "PostgreSQL", "AI/ML", "WebRTC"],
      achievements: [
        "16% increase in sales efficiency",
        "Supports 1000+ concurrent users",
        "AI-powered project risk assessment",
        "Real-time collaboration features"
      ],
      image: "/img/projects/spm-v3-project.jpg",
      demoLink: "https://example.com/spm-v3-demo",
      codeLink: null,
    },
    {
      title: "Virtual Streaming Conference Platform",
      date: "2020 - 2021",
      company: "Bosch Rexroth AG",
      description: "Built a digital environment for remote collaboration and engagement during the COVID-19 pandemic.",
      longDescription: "In response to the COVID-19 pandemic, I developed a Virtual Streaming Conference Platform to enable remote participation in company events and conferences. The platform features high-quality video streaming, interactive Q&A sessions, breakout rooms, and networking opportunities. I implemented a custom solution for presenter management, allowing seamless transitions between speakers and multimedia content. The platform successfully hosted several major company events with thousands of concurrent participants from around the world.",
      technologies: ["WebRTC", "Node.js", "Angular", "MongoDB", "Media Streaming", "WebSockets"],
      achievements: [
        "Hosted 10+ major company events",
        "Supported 5000+ concurrent participants",
        "99.5% uptime during critical events",
        "Reduced event costs by 70%"
      ],
      image: "/img/projects/vscp-project.jpg",
      demoLink: "https://example.com/vscp-demo",
      codeLink: null,
    },
    {
      title: "Amazon Internal Tools",
      date: "2019 - 2020",
      company: "Amazon",
      description: "Designed and implemented Amazon-scale tools to facilitate internal business operations, focusing on efficiency and scalability.",
      longDescription: "During my time at Amazon, I developed several high-scale internal tools that streamlined business operations across multiple departments. These tools were designed to handle Amazon's massive data volumes and strict performance requirements. I worked closely with product managers and UX designers to create intuitive interfaces for complex workflows, while implementing robust backend services using Java and Spring Boot. These projects gave me valuable experience in building systems that can scale to millions of users and petabytes of data, with stringent reliability and security requirements.",
      technologies: ["Java", "Spring Boot", "Kotlin", "AWS", "Microservices", "DynamoDB", "Lambda"],
      achievements: [
        "Processed 10M+ operations daily",
        "99.99% uptime SLA maintained",
        "Reduced operational costs by 25%",
        "Supports millions of concurrent users"
      ],
      image: "/img/projects/amazon-tools.jpg",
      demoLink: null,
      codeLink: null,
    }
  ]
};

export const personalProjects = {
  featured: {
    title: "Portfolio Website & Multi-Role Experience",
    date: "2024 - Present",
    description: "A sophisticated portfolio website built with Docusaurus 3, featuring multiple visitor experiences and role-based navigation system.",
    longDescription: "This portfolio website showcases an innovative approach to presenting professional information through role-based experiences. Built with Docusaurus 3 and React 18, it features four distinct visitor journeys (Recruitment Specialist, Software Developer, Investigator, and Adventurer), each tailored to different audiences. The site includes advanced state management with Zustand, responsive design, and interactive components that demonstrate both technical skills and creative problem-solving.",
    technologies: ["Docusaurus 3", "React 18", "Zustand", "CSS Modules", "JavaScript", "Responsive Design"],
    achievements: [
      "4 distinct role-based experiences",
      "Responsive design across all devices",
      "Advanced state management implementation",
      "Interactive UI components"
    ],
    image: "/img/projects/portfolio-website.jpg",
    demoLink: "https://spnarkhede.github.io",
    codeLink: "https://github.com/spnarkhede/portfolio",
  },
  
  projects: [
    {
      title: "DevOps Automation Toolkit",
      date: "2023 - Present",
      description: "A comprehensive collection of automation scripts and tools for DevOps workflows, CI/CD pipelines, and infrastructure management.",
      longDescription: "This toolkit is a personal project aimed at streamlining common DevOps tasks through automation. It includes Docker compose files for development environments, Kubernetes deployment templates, monitoring configurations, and CI/CD pipeline templates for various platforms. The project demonstrates proficiency in infrastructure as code, containerization, and modern DevOps practices.",
      technologies: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Prometheus", "Grafana"],
      achievements: [
        "50+ reusable automation scripts",
        "Multi-cloud deployment support",
        "Comprehensive monitoring setup",
        "Documentation and tutorials included"
      ],
      image: "/img/projects/devops-toolkit.jpg",
      demoLink: null,
      codeLink: "https://github.com/spnarkhede/devops-toolkit",
    },
    {
      title: "React Component Library",
      date: "2023",
      description: "A modern, accessible React component library with TypeScript support, comprehensive testing, and Storybook documentation.",
      longDescription: "This component library was built to demonstrate modern React development practices and create reusable UI components. It features TypeScript for type safety, comprehensive unit and integration tests, Storybook for component documentation, and accessibility compliance. The library includes form components, data display components, navigation elements, and utility hooks.",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "Testing Library", "Rollup", "CSS-in-JS"],
      achievements: [
        "40+ reusable components",
        "100% TypeScript coverage",
        "WCAG 2.1 AA compliance",
        "Comprehensive Storybook documentation"
      ],
      image: "/img/projects/react-library.jpg",
      demoLink: "https://spnarkhede-components.netlify.app",
      codeLink: "https://github.com/spnarkhede/react-component-library",
    },
    {
      title: "Microservices E-commerce Platform",
      date: "2022 - 2023",
      description: "A full-stack e-commerce platform built with microservices architecture, featuring user management, product catalog, and payment processing.",
      longDescription: "This project demonstrates a complete microservices architecture implementation for an e-commerce platform. It includes separate services for user authentication, product management, order processing, payment integration, and notification systems. The platform features a React frontend, Node.js microservices, Docker containerization, and Kubernetes orchestration.",
      technologies: ["Node.js", "React", "MongoDB", "Redis", "Docker", "Kubernetes", "RabbitMQ", "Stripe API"],
      achievements: [
        "6 independent microservices",
        "Event-driven architecture",
        "Payment gateway integration",
        "Real-time order tracking"
      ],
      image: "/img/projects/ecommerce-platform.jpg",
      demoLink: "https://ecommerce-demo.spnarkhede.dev",
      codeLink: "https://github.com/spnarkhede/microservices-ecommerce",
    },
    {
      title: "Machine Learning Price Predictor",
      date: "2022",
      description: "A machine learning application that predicts real estate prices using Python, scikit-learn, and Flask with a React frontend.",
      longDescription: "This project combines machine learning with web development to create a practical price prediction tool. The backend uses Python with scikit-learn for the ML model, Flask for the API, and includes data preprocessing, feature engineering, and model evaluation. The frontend is built with React and provides an intuitive interface for users to input property details and receive price predictions.",
      technologies: ["Python", "scikit-learn", "Flask", "React", "Pandas", "NumPy", "Matplotlib", "SQL"],
      achievements: [
        "85% prediction accuracy",
        "Interactive data visualization",
        "RESTful API implementation",
        "Comprehensive data analysis"
      ],
      image: "/img/projects/ml-predictor.jpg",
      demoLink: "https://price-predictor.spnarkhede.dev",
      codeLink: "https://github.com/spnarkhede/ml-price-predictor",
    },
    {
      title: "Task Management Progressive Web App",
      date: "2021 - 2022",
      description: "A full-featured task management PWA with offline support, real-time synchronization, and collaborative features.",
      longDescription: "This progressive web app demonstrates modern web technologies including service workers, offline functionality, and real-time collaboration. Built with React and Node.js, it features user authentication, project management, task assignment, real-time updates using WebSockets, and works seamlessly offline with data synchronization when reconnected.",
      technologies: ["React", "Node.js", "Socket.io", "PWA", "Service Workers", "IndexedDB", "JWT", "MongoDB"],
      achievements: [
        "Full offline functionality",
        "Real-time collaboration",
        "Cross-platform compatibility",
        "Push notification support"
      ],
      image: "/img/projects/task-manager-pwa.jpg",
      demoLink: "https://tasks.spnarkhede.dev",
      codeLink: "https://github.com/spnarkhede/task-manager-pwa",
    },
    {
      title: "Open Source Contribution Tracker",
      date: "2021",
      description: "A web application that tracks and visualizes open source contributions across multiple platforms with GitHub integration.",
      longDescription: "This project helps developers track their open source contributions across different platforms. It integrates with GitHub API to fetch contribution data, provides visualization of activity patterns, tracks repository statistics, and generates contribution reports. The application demonstrates API integration, data visualization, and modern web development practices.",
      technologies: ["Vue.js", "Node.js", "GitHub API", "Chart.js", "Express", "PostgreSQL", "OAuth"],
      achievements: [
        "Multi-platform integration",
        "Interactive data visualization",
        "Automated report generation",
        "OAuth authentication"
      ],
      image: "/img/projects/contribution-tracker.jpg",
      demoLink: "https://contributions.spnarkhede.dev",
      codeLink: "https://github.com/spnarkhede/contribution-tracker",
    }
  ]
};

// Add default export to fix build error
export default {
  companyProjects,
  personalProjects
};
