---
sidebar_label: 'Introduction'
sidebar_position: 1
last_update:
  date: "2024-11-04"
  author: "spnarkhede"
---
# Introduction 



import { Github, Linkedin, Mail } from 'lucide-react';

<div className="about-container">
  <div className="hero-section">
    <img className="profile-picture" src={require('../static/img/profilesquare.png').default} alt="profile"/>
    
    <div className="profile-info">
      <h1>Shubham Narkhede</h1>
      <h2>DevOps Engineer @ Robert Bosch GmbH</h2>
      
      <div className="social-links">
        <a href="https://github.com/spnarkhede" className="social-link">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/spnarkhede" className="social-link">
          <Linkedin size={20} />
        </a>
        <a href="mailto:shubhampnarkhede@gmail.com" className="social-link">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </div>

  <div className="content-section">
    <div className="about-card">
      <p>
        My name is Shubham Narkhede. I currently work for Robert Bosch GmbH as a DevOps Engineer with over 6 years of experience in full-stack development. I prefer more frontend or DevOps work, but I consider myself to be a full-stack developer. If you have ever heard the phrase "A curious mind, constantly seeking knowledge and applying it to real-world challenges," I think that phrase describes me pretty well. I like to learn new things and get my hands dirty with a little bit of everything if possible. While some people like to hyperfocus on one aspect of computing, I like to take a broader vision. I like to have a decent understanding of everything so I have a breadth of knowledge. This helps me understand the larger flow. If you understand all the little things, then the bigger picture becomes clear. I believe this is what has made me exceedingly good at debugging and solving problems over the years.
      </p>
    </div>
    <div className="about-card">
      <p>
      I have a personal interest in product designing and cloud technologies. Throughout my career at Robert Bosch, Bosch Rexroth, and Amazon, I've architected large-scale Angular applications, implemented CI/CD pipelines with 95% test coverage, and deployed solutions on AWS Cloud that improved efficiency by 30%. I've created various applications from scratch with brainstorming, UI/UX designing, prototyping and wireframing. My technical expertise spans Java, Spring Boot, Python, Angular, React, and cloud technologies, complemented by my skills in cross-functional collaboration and agile methodologies. I've mentored teams of developers, established Git workflow standards, and led end-to-end project management with a 95% on-time completion rate. My ability to translate complex requirements into intuitive interfaces has resulted in a 35% increase in user satisfaction.
      </p>
    </div>
    <div className="about-card">
      <p>
        Aside from my professional work, I believe in living a well-rounded life that fuels my creativity and problem-solving abilities. I express myself artistically through painting and sketching, finding that visual arts sharpen my design thinking and attention to detail. Music is another passion of mine; I've been learning to play the handpan, an instrument whose unique harmonics help me approach challenges with fresh perspectives. I'm an avid outdoor enthusiast who recharges through hiking and trekking adventures across Germany's diverse landscapes. My travels across Europe and Asia have exposed me to various cultures and ways of thinking, enhancing my ability to collaborate with diverse teams and understand different viewpoints. These intercultural experiences have proven invaluable in my professional life, allowing me to bridge communication gaps and build stronger relationships with colleagues and stakeholders worldwide. Long term, I aspire to work on innovative solutions that combine my technical expertise with my passion for sustainability and cultural understanding. I believe my blend of professional skills and rich personal experiences makes me not just a valuable team member, but someone who brings unique insights and a holistic approach to every project I undertake.
      </p>
    </div>
  </div>
</div>