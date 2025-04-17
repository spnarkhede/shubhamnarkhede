import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Book, Video, Globe } from 'lucide-react';

export default function TechEnthusiastResources() {
  const resources = {
    "Books": [
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        description: "A handbook of agile software craftsmanship that has helped me establish solid coding practices and principles.",
        link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
      },
      {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        description: "An excellent resource for understanding the principles behind reliable, scalable, and maintainable systems.",
        link: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"
      },
      {
        title: "Building Microservices",
        author: "Sam Newman",
        description: "A comprehensive guide to designing fine-grained systems that has informed my approach to service architecture.",
        link: "https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1492034029"
      },
      {
        title: "Patterns of Enterprise Application Architecture",
        author: "Martin Fowler",
        description: "A valuable reference for understanding architectural patterns that I frequently apply in my work.",
        link: "https://www.amazon.com/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420"
      }
    ],
    "Courses & Tutorials": [
      {
        title: "Advanced React Patterns",
        author: "Kent C. Dodds",
        description: "A deep dive into advanced React patterns that has significantly improved my component design.",
        link: "https://frontendmasters.com/courses/advanced-react-patterns/"
      },
      {
        title: "AWS Certified DevOps Engineer Professional",
        author: "A Cloud Guru",
        description: "Comprehensive training that helped me master DevOps practices on AWS.",
        link: "https://acloudguru.com/course/aws-certified-devops-engineer-professional"
      },
      {
        title: "Microservices with Node.js and React",
        author: "Stephen Grider",
        description: "A practical course on building microservices that provided valuable hands-on experience.",
        link: "https://www.udemy.com/course/microservices-with-node-js-and-react/"
      },
      {
        title: "Kubernetes for Developers",
        author: "Nigel Poulton",
        description: "An excellent introduction to Kubernetes that helped me understand container orchestration.",
        link: "https://www.pluralsight.com/courses/kubernetes-developers-core-concepts"
      }
    ],
    "Blogs & Newsletters": [
      {
        title: "Martin Fowler's Blog",
        author: "Martin Fowler",
        description: "A treasure trove of insights on software architecture and design that I regularly reference.",
        link: "https://martinfowler.com/"
      },
      {
        title: "Overreacted",
        author: "Dan Abramov",
        description: "Deep dives into React that have helped me understand its inner workings and best practices.",
        link: "https://overreacted.io/"
      },
      {
        title: "The Pragmatic Engineer",
        author: "Gergely Orosz",
        description: "Practical insights on engineering leadership and scaling teams that inform my approach to collaboration.",
        link: "https://blog.pragmaticengineer.com/"
      },
      {
        title: "JavaScript Weekly",
        author: "Cooperpress",
        description: "A weekly newsletter that helps me stay current with JavaScript ecosystem developments.",
        link: "https://javascriptweekly.com/"
      }
    ],
    "Tools & Libraries": [
      {
        title: "React Query",
        author: "Tanner Linsley",
        description: "A data fetching library that has revolutionized how I handle server state in React applications.",
        link: "https://react-query.tanstack.com/"
      },
      {
        title: "Terraform",
        author: "HashiCorp",
        description: "An infrastructure as code tool that has become essential for my cloud resource management.",
        link: "https://www.terraform.io/"
      },
      {
        title: "Docker",
        author: "Docker, Inc.",
        description: "Containerization technology that has transformed how I package and deploy applications.",
        link: "https://www.docker.com/"
      },
      {
        title: "GitHub Actions",
        author: "GitHub",
        description: "CI/CD solution that has streamlined my automation workflows and deployment processes.",
        link: "https://github.com/features/actions"
      }
    ]
  };

  return (
    <DashboardLayout
      role="tech-enthusiast"
      activeTab="resources"
      title="Tech Enthusiast | Resources"
      description="Curated technical resources, tools, and learning materials recommended by Shubham Narkhede"
    >
      <SectionTemplate
        title="Technical Resources"
        subtitle="Curated resources that have shaped my technical knowledge and approach"
      >
        <p className={styles.resourcesIntro}>
          Below is a collection of resources that have significantly influenced my technical development 
          and continue to be valuable references in my work. I've organized them by category to help you 
          find resources relevant to your interests.
        </p>
        
        <SectionTemplate
          title="Books"
          subtitle="Essential reading for software developers"
          withBackground={true}
          className={styles.resourceCategory}
        >
          <div className={styles.resourcesGrid}>
            {resources["Books"].map((resource, index) => (
              <div key={index} className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <Book size={20} />
                </div>
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceAuthor}>by {resource.author}</p>
                <p className={styles.resourceDescription}>{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.resourceLink}
                >
                  <LinkIcon size={14} />
                  View Book
                </a>
              </div>
            ))}
          </div>
        </SectionTemplate>
        
        <SectionTemplate
          title="Courses & Tutorials"
          subtitle="Learning resources for practical skills development"
          className={styles.resourceCategory}
        >
          <div className={styles.resourcesGrid}>
            {resources["Courses & Tutorials"].map((resource, index) => (
              <div key={index} className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <Video size={20} />
                </div>
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceAuthor}>by {resource.author}</p>
                <p className={styles.resourceDescription}>{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.resourceLink}
                >
                  <LinkIcon size={14} />
                  View Course
                </a>
              </div>
            ))}
          </div>
        </SectionTemplate>
        
        <SectionTemplate
          title="Blogs & Newsletters"
          subtitle="Staying current with industry trends and best practices"
          withBackground={true}
          className={styles.resourceCategory}
        >
          <div className={styles.resourcesGrid}>
            {resources["Blogs & Newsletters"].map((resource, index) => (
              <div key={index} className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <Globe size={20} />
                </div>
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceAuthor}>by {resource.author}</p>
                <p className={styles.resourceDescription}>{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.resourceLink}
                >
                  <LinkIcon size={14} />
                  Visit Site
                </a>
              </div>
            ))}
          </div>
        </SectionTemplate>
        
        <SectionTemplate
          title="Tools & Libraries"
          subtitle="Essential software for modern development"
          className={styles.resourceCategory}
        >
          <div className={styles.resourcesGrid}>
            {resources["Tools & Libraries"].map((resource, index) => (
              <div key={index} className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <div className={styles.toolIcon}>{resource.title.charAt(0)}</div>
                </div>
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceAuthor}>by {resource.author}</p>
                <p className={styles.resourceDescription}>{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.resourceLink}
                >
                  <LinkIcon size={14} />
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </SectionTemplate>
      </SectionTemplate>

      <SectionTemplate
        title="Learning Approach"
        subtitle="My philosophy on continuous learning and skill development"
      >
        <div className={styles.learningApproachSection}>
          <p className={styles.learningIntro}>
            Continuous learning is essential in the rapidly evolving field of technology. Here's my approach 
            to staying current and continuously improving my skills:
          </p>
          
          <div className={styles.learningPrinciples}>
            <div className={styles.learningPrinciple}>
              <h3>Depth Over Breadth</h3>
              <p>
                While I maintain awareness of many technologies, I focus on developing deep expertise in a core 
                set of tools and frameworks. This allows me to solve complex problems effectively rather than 
                having only surface-level knowledge across too many areas.
              </p>
            </div>
            
            <div className={styles.learningPrinciple}>
              <h3>Practice-Based Learning</h3>
              <p>
                I believe in learning by doing. For each new technology or concept, I create practical projects 
                that apply what I'm learning. This hands-on approach helps solidify understanding and reveals 
                the nuances that theory alone cannot provide.
              </p>
            </div>
            
            <div className={styles.learningPrinciple}>
              <h3>Teaching and Sharing</h3>
              <p>
                Explaining concepts to others is one of the best ways to deepen understanding. I regularly write 
                technical articles, contribute to documentation, and mentor junior developers as a way to reinforce 
                my own knowledge while giving back to the community.
              </p>
            </div>
            
            <div className={styles.learningPrinciple}>
              <h3>Deliberate Exploration</h3>
              <p>
                I dedicate time each week to explore new technologies and approaches outside my immediate needs. 
                This deliberate exploration helps me discover innovative solutions and keeps me from becoming 
                too entrenched in familiar patterns.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Recommended Reading"
        subtitle="Current technical books on my reading list"
        withBackground={true}
      >
        <div className={styles.currentReadingList}>
          <div className={styles.currentBook}>
            <h3>Fundamentals of Software Architecture</h3>
            <p className={styles.bookAuthor}>by Mark Richards & Neal Ford</p>
            <p className={styles.bookDescription}>
              An exploration of software architecture fundamentals with a focus on practical application 
              and modern approaches. I'm particularly interested in the chapters on architecture characteristics 
              and architectural decisions.
            </p>
          </div>
          
          <div className={styles.currentBook}>
            <h3>Rust for Rustaceans</h3>
            <p className={styles.bookAuthor}>by Jon Gjengset</p>
            <p className={styles.bookDescription}>
              A deep dive into intermediate and advanced Rust programming. As I explore Rust for performance-critical 
              applications, this book provides valuable insights into the language's unique features and idioms.
            </p>
          </div>
          
          <div className={styles.currentBook}>
            <h3>Database Internals</h3>
            <p className={styles.bookAuthor}>by Alex Petrov</p>
            <p className={styles.bookDescription}>
              A comprehensive look at the internals of database management systems. Understanding how databases 
              work under the hood helps me make better design decisions and optimize database usage in my applications.
            </p>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
