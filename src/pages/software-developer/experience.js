import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import ExperienceTimeline from '../../components/ExperienceTimeline';
import styles from './styles.module.css';
import { Code, Award, Briefcase } from 'lucide-react';

export default function SoftwareDeveloperExperience() {
  const experienceData = [
    {
      title: "Senior DevOps Engineer",
      subtitle: "TechCorp Solutions",
      period: "2022 - Present",
      content: (
        <div>
          <p>Leading DevOps initiatives and cloud infrastructure optimization for enterprise clients.</p>
          <ul>
            <li>Architected and implemented CI/CD pipelines reducing deployment time by 75%</li>
            <li>Managed Kubernetes clusters serving 1M+ daily active users</li>
            <li>Implemented Infrastructure as Code using Terraform and AWS CloudFormation</li>
            <li>Led migration from monolithic to microservices architecture</li>
            <li>Mentored junior developers and conducted technical interviews</li>
          </ul>
        </div>
      ),
      tags: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Microservices"],
      icon: <Briefcase size={16} />,
      expandable: true
    },
    {
      title: "Full Stack Developer",
      subtitle: "InnovateWeb Agency",
      period: "2020 - 2022",
      content: (
        <div>
          <p>Developed and maintained web applications using modern JavaScript frameworks and cloud technologies.</p>
          <ul>
            <li>Built responsive web applications using React and Node.js</li>
            <li>Implemented RESTful APIs and GraphQL endpoints</li>
            <li>Collaborated with UX/UI designers to implement pixel-perfect interfaces</li>
            <li>Participated in agile development processes and sprint planning</li>
            <li>Optimized application performance resulting in 40% faster load times</li>
          </ul>
        </div>
      ),
      tags: ["React", "Node.js", "GraphQL", "MongoDB", "Express", "TypeScript"],
      icon: <Code size={16} />,
      expandable: true
    },
    {
      title: "Software Engineer",
      subtitle: "StartupTech Inc.",
      period: "2018 - 2020",
      content: (
        <div>
          <p>Contributed to product development and gained experience in full-stack development.</p>
          <ul>
            <li>Developed features for a SaaS platform used by 10,000+ businesses</li>
            <li>Implemented automated testing strategies increasing code coverage to 85%</li>
            <li>Collaborated with product teams to translate requirements into technical solutions</li>
            <li>Participated in code reviews and maintained coding standards</li>
          </ul>
        </div>
      ),
      tags: ["JavaScript", "Python", "PostgreSQL", "React", "Django"],
      icon: <Code size={16} />,
      expandable: true
    }
  ];

  return (
    <DashboardLayout
      role="software-developer"
      activeTab="experience"
      title="Software Developer | Experience"
      description="Shubham Narkhede's professional software development experience and career progression"
    >
      <SectionTemplate
        title="Professional Experience"
        subtitle="My journey through different roles and technologies in software development"
      >
        <ExperienceTimeline items={experienceData} />
      </SectionTemplate>
    </DashboardLayout>
  );
}