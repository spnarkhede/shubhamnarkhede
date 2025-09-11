import { create } from 'zustand';

// Create a store for managing role-related state
const useRoleStore = create((set) => ({
  // Current selected role
  activeRole: null,
  
  // Current active tab for each role dashboard
  activeTab: {
    'recruitment-specialist': 'introduction',
    'software-developer': 'introduction',
    'tech-enthusiast': 'introduction',
    'curious-visitor': 'introduction',
    'growth-partner': 'introduction',
    'investigator': 'case-experience',
    'adventurer': 'personal-growth'
  },
  
  // Actions to update state
  setActiveRole: (role) => set({ activeRole: role }),
  
  setActiveTab: (role, tab) => set((state) => ({
    activeTab: {
      ...state.activeTab,
      [role]: tab
    }
  })),
  
  // Role configuration data
  roles: {
    'recruitment-specialist': {
      title: 'Recruitment Specialist',
      description: 'Information tailored for hiring managers and recruiters',
      theme: 'light',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'experience', label: 'Experience' },
        { id: 'resume', label: 'Resume Download' },
        { id: 'skills', label: 'Skills & Certifications' },
        { id: 'personality', label: 'Personality Insights' },
        { id: 'recommendations', label: 'Recommendations' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
        { id: 'continue-watching', label: 'Continue Watching' }
      ]
    },
    'software-developer': {
      title: 'Software Developer',
      description: 'Technical information for developers and engineers',
      theme: 'code',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'code-samples', label: 'Code Samples' },
        { id: 'contact', label: 'Contact' }
      ]
    },
    'tech-enthusiast': {
      title: 'Tech Enthusiast',
      description: 'Technical insights and development resources',
      theme: 'tech',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'articles', label: 'Articles' },
        { id: 'projects', label: 'Projects' },
        { id: 'code-samples', label: 'Code Samples' },
        { id: 'resources', label: 'Resources' }
      ]
    },
    'curious-visitor': {
      title: 'Curious Visitor',
      description: 'Explore my journey and discoveries',
      theme: 'curious',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'articles', label: 'Articles' },
        { id: 'books', label: 'Books' },
        { id: 'experience', label: 'Experience' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
      ]
    },
    'growth-partner': {
      title: 'Growth Partner',
      description: 'Collaboration and partnership opportunities',
      theme: 'growth',
      tabs: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'art-gallery', label: 'Art Gallery' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
      ]
    },
    'investigator': {
      title: 'Investigator',
      description: 'Detailed case studies and analytical information',
      theme: 'dark',
      tabs: [
        { id: 'case-experience', label: 'Case Experience' },
        { id: 'investigative-skills', label: 'Investigative Skills' },
        { id: 'reports', label: 'Reports' },
        { id: 'certifications', label: 'Certifications' }
      ]
    },
    'adventurer': {
      title: 'Adventurer',
      description: 'Creative journey and personal growth',
      theme: 'adventure',
      tabs: [
        { id: 'personal-growth', label: 'Personal Growth' },
        { id: 'skill-visualizations', label: 'Skill Visualizations' },
        { id: 'adventure-reports', label: 'Adventure Reports' },
        { id: 'art-gallery', label: 'Art Gallery' },
        { id: 'contact', label: 'Contact' }
      ]
    }
  }
}));

export default useRoleStore;