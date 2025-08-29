import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import SkillsMatrix from '../../components/SkillsMatrix';
import styles from './styles.module.css';

export default function SoftwareDeveloperTechnicalSkills() {
  return (
    <DashboardLayout
      role="software-developer"
      activeTab="technical-skills"
      title="Software Developer | Technical Skills"
      description="Comprehensive overview of Shubham Narkhede's technical skills and proficiency levels"
    >
      <SectionTemplate
        title="Technical Skills Matrix"
        subtitle="My proficiency levels across different technologies and domains"
      >
        <SkillsMatrix />
      </SectionTemplate>
    </DashboardLayout>
  );
}