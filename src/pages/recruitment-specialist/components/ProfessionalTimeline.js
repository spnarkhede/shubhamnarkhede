// src/pages/recruitment-specialist/components/ProfessionalTimeline.js
import React, { useState, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { 
  Calendar, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Star,
  TrendingUp,
  TrendingDown,
  Users,
  MessageSquare,
  Eye,
  EyeOff
} from 'lucide-react';
import styles from './ProfessionalTimeline.module.css';

const MILESTONE_TYPES = {
  EDUCATION: { icon: GraduationCap, color: '#10b981', label: 'Education' },
  CAREER: { icon: Briefcase, color: '#3b82f6', label: 'Career' },
  PROJECT: { icon: Star, color: '#f59e0b', label: 'Project' },
  ACHIEVEMENT: { icon: Award, color: '#ef4444', label: 'Achievement' },
  TRAINING: { icon: TrendingUp, color: '#8b5cf6', label: 'Training' },
  CHALLENGE: { icon: TrendingDown, color: '#6b7280', label: 'Challenge' }
};

const INITIAL_MILESTONES = [
  {
    id: 1,
    year: 2014,
    title: 'Bachelor of Engineering Started',
    type: 'EDUCATION',
    position: 'above',
    description: 'Computer Science at Engineering College',
    isKeyEvent: false,
    details: {
      occasion: 'Started Bachelor of Engineering in Computer Science',
      task: 'Complete 4-year engineering degree program',
      challenge: 'Transition from junior college to engineering curriculum',
      speciality: 'Focus on computer science fundamentals and programming',
      solution: 'Dedicated study approach and practical project work',
      technologies: ['C', 'C++', 'Java', 'Data Structures', 'Algorithms'],
      results: 'Strong foundation in computer science principles'
    }
  },
  {
    id: 2,
    year: 2016,
    title: 'Entry-level Web Developer',
    type: 'CAREER',
    position: 'below',
    description: 'Started professional career with Web/Java development roles',
    isKeyEvent: false,
    details: {
      occasion: 'First professional development experience',
      task: 'Learn web development and gain industry experience',
      challenge: 'Applying academic knowledge to real-world projects',
      speciality: 'Web technologies and Java development',
      solution: 'Hands-on learning and mentorship from senior developers',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring'],
      results: 'Gained practical development experience and industry exposure'
    }
  },
  {
    id: 3,
    year: 2017,
    title: 'Food On Phone System',
    type: 'PROJECT',
    position: 'above',
    description: 'Application Developer/Intern - Major thesis project',
    isKeyEvent: true,
    details: {
      occasion: 'Developed an online food ordering web app as a major thesis project in cooperation with a private firm',
      task: 'Create a comprehensive food ordering platform with robust database integration and user-centric UI/UX under real-world deadlines',
      challenge: 'Required integrating robust database and user-centric UI/UX under real-world deadlines while meeting commercial standards',
      speciality: 'Demonstrated both technical skill and creative problem solving in a real-world commercial environment',
      solution: 'Implemented comprehensive full-stack solution with modern web technologies and database integration',
      technologies: ['Java', 'NetBeans', 'MySQL', 'JDBC', 'Glassfish', 'HTML5', 'Bootstrap', 'JavaScript'],
      results: 'Delivered a smooth, functional platform used by real customers, successfully completing thesis requirements'
    }
  },
  {
    id: 4,
    year: 2018,
    title: 'Bachelor of Engineering Completed',
    type: 'EDUCATION',
    position: 'below',
    description: 'Graduated with Computer Science degree',
    isKeyEvent: false,
    details: {
      occasion: 'Successfully completed Bachelor of Engineering degree',
      task: 'Complete final year projects and examinations',
      challenge: 'Balancing thesis project with academic requirements',
      speciality: 'Comprehensive understanding of computer science concepts',
      solution: 'Effective time management and focused preparation',
      technologies: ['Software Engineering', 'Database Systems', 'Computer Networks', 'Operating Systems'],
      results: 'Graduated with strong academic foundation ready for advanced studies'
    }
  },
  {
    id: 5,
    year: 2018,
    title: 'Master\'s in Automotive Software',
    type: 'EDUCATION',
    position: 'above',
    description: 'Started advanced studies in automotive software',
    isKeyEvent: false,
    details: {
      occasion: 'Enrolled in Master\'s program for Automotive Software Engineering',
      task: 'Specialize in automotive industry software development',
      challenge: 'Learning domain-specific automotive technologies',
      speciality: 'Automotive software systems and embedded development',
      solution: 'Combination of theoretical study and practical automotive projects',
      technologies: ['Embedded C', 'AUTOSAR', 'CAN Protocol', 'Automotive Standards', 'Real-time Systems'],
      results: 'Specialized knowledge in automotive software development'
    }
  },
  {
    id: 6,
    year: 2019,
    title: 'Software Developer at Amazon',
    type: 'ACHIEVEMENT',
    position: 'below',
    description: 'Career breakthrough - joined Amazon as Software Developer',
    isKeyEvent: true,
    details: {
      occasion: 'Achieved role at Amazon as Software Developer, working on scalable business process solutions',
      task: 'Designed and implemented large-scale tools to streamline Amazon\'s internal business processes',
      challenge: 'Required cross-functional collaboration with UX designers, product managers, and other engineers in a fast-paced environment',
      speciality: 'Working at one of the world\'s leading tech companies on systems that impact millions of users',
      solution: 'Focused on scalable code architecture and high efficiency solutions using modern technologies',
      technologies: ['Java', 'Spring Boot', 'Kotlin', 'TypeScript', 'AWS', 'Microservices'],
      results: 'Improved internal process efficiency and released products aligned with business objectives, setting a strong innovative benchmark within the team'
    }
  },
  {
    id: 7,
    year: 2020,
    title: 'Master\'s Degree Completed',
    type: 'EDUCATION',
    position: 'above',
    description: 'Completed Master\'s in Automotive Software Engineering',
    isKeyEvent: false,
    details: {
      occasion: 'Successfully completed Master\'s degree in Automotive Software Engineering',
      task: 'Complete advanced coursework and master\'s thesis',
      challenge: 'Balancing work at Amazon with academic commitments',
      speciality: 'Advanced automotive software engineering concepts',
      solution: 'Effective time management between work and studies',
      technologies: ['Advanced Embedded Systems', 'Automotive Networking', 'Safety Critical Systems', 'Software Architecture'],
      results: 'Master\'s degree with specialization in automotive software engineering'
    }
  },
  {
    id: 8,
    year: 2020,
    title: 'Bosch Rexroth Application Developer',
    type: 'CAREER',
    position: 'below',
    description: 'Joined Bosch Rexroth as Software Application Developer',
    isKeyEvent: false,
    details: {
      occasion: 'Transitioned to Bosch Rexroth as Software Application Developer',
      task: 'Develop software applications for industrial automation',
      challenge: 'Adapting to new company culture and industrial domain',
      speciality: 'Industrial automation and hydraulic systems software',
      solution: 'Applied previous experience while learning new domain expertise',
      technologies: ['Industrial Automation', 'PLC Programming', 'HMI Development', 'SCADA Systems'],
      results: 'Successful integration into Bosch ecosystem and contribution to industrial projects'
    }
  },
  {
    id: 9,
    year: 2022,
    title: 'DevOps Engineer at Bosch',
    type: 'ACHIEVEMENT',
    position: 'above',
    description: 'Promoted to DevOps Engineer - leading automation and security',
    isKeyEvent: true,
    details: {
      occasion: 'Led adoption of next-gen DevOps practices and elevated platform security at Bosch',
      task: 'Lead DevOps transformation and implement modern automation and security practices',
      challenge: 'Needed to introduce modern automation and security in an established organization with legacy systems',
      speciality: 'Pioneering DevOps transformation in a traditional automotive technology company',
      solution: 'Implemented multi-level security, optimized frameworks, and introduced automation pipelines while maintaining system stability',
      technologies: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform', 'Security Automation'],
      results: 'No reported security breaches in 2 years, raised team productivity, and fostered agile transformation across multiple teams'
    }
  }
];

const ProfessionalTimeline = () => {
  const [milestones, setMilestones] = useState(INITIAL_MILESTONES);
  const [selectedEvents, setSelectedEvents] = useState(new Set([3, 6, 9]));
  const [editingMilestone, setEditingMilestone] = useState(null);
  const [newMilestone, setNewMilestone] = useState(null);
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const [groupWorkMode, setGroupWorkMode] = useState(false);
  const [currentPresentationIndex, setCurrentPresentationIndex] = useState(0);
  const [feedbackData, setFeedbackData] = useState({});

  const timelineRef = useRef(null);

  // Memoized calculations
  const keyEvents = useMemo(() => 
    milestones.filter(m => m.isKeyEvent), 
    [milestones]
  );

  const getTimelinePosition = useCallback((year) => {
    const startYear = 2014;
    const endYear = 2024;
    const yearRange = endYear - startYear;
    return ((year - startYear) / yearRange) * 100;
  }, []);

  // Initialize key events
  React.useEffect(() => {
    setMilestones(prevMilestones => 
      prevMilestones.map(milestone => ({
        ...milestone,
        isKeyEvent: selectedEvents.has(milestone.id)
      }))
    );
  }, [selectedEvents]);

  // Timeline interaction handlers
  const handleTimelineClick = useCallback((event) => {
    if (editingMilestone || newMilestone) return;
    
    const rect = timelineRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = event.clientX - rect.left;
    const timelineWidth = rect.width - 80; // Account for margins
    const startYear = 2014;
    const endYear = 2024;
    const yearRange = endYear - startYear;
    const year = Math.round(startYear + (x / timelineWidth) * yearRange);
    
    const y = event.clientY - rect.top;
    const timelineCenter = rect.height / 2;
    const position = y < timelineCenter ? 'above' : 'below';

    setNewMilestone({
      year,
      position,
      x: x + 40, // Account for left margin
      y: y
    });
  }, [editingMilestone, newMilestone]);

  const addMilestone = useCallback((milestoneData) => {
    const newId = Math.max(...milestones.map(m => m.id), 0) + 1;
    const milestone = {
      id: newId,
      ...milestoneData,
      isKeyEvent: false,
      details: null
    };
    setMilestones(prev => [...prev, milestone]);
    setNewMilestone(null);
  }, [milestones]);

  const updateMilestone = useCallback((id, updates) => {
    setMilestones(prev => prev.map(m => 
      m.id === id ? { ...m, ...updates } : m
    ));
  }, []);

  const deleteMilestone = useCallback((id) => {
    setMilestones(prev => prev.filter(m => m.id !== id));
    setSelectedEvents(prev => new Set([...prev].filter(eventId => eventId !== id)));
  }, []);

  const toggleKeyEvent = useCallback((id) => {
    setSelectedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
        updateMilestone(id, { isKeyEvent: false, details: null });
      } else if (newSet.size < 3) {
        newSet.add(id);
        updateMilestone(id, { isKeyEvent: true });
      }
      return newSet;
    });
  }, [updateMilestone]);

  const saveEventDetails = useCallback((id, details) => {
    updateMilestone(id, { details });
  }, [updateMilestone]);

  // Group work mode handlers
  const startGroupWork = useCallback(() => {
    setGroupWorkMode(true);
    setCurrentPresentationIndex(0);
  }, []);

  const nextPresentation = useCallback(() => {
    setCurrentPresentationIndex(prev => 
      prev < keyEvents.length - 1 ? prev + 1 : prev
    );
  }, [keyEvents.length]);

  const previousPresentation = useCallback(() => {
    setCurrentPresentationIndex(prev => prev > 0 ? prev - 1 : prev);
  }, []);

  const submitFeedback = useCallback((eventId, feedback) => {
    setFeedbackData(prev => ({
      ...prev,
      [eventId]: feedback
    }));
  }, []);

  const toggleMilestoneDetails = useCallback((id) => {
    setExpandedMilestone(prev => prev === id ? null : id);
  }, []);

  const handleKeyDown = useCallback((event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }, []);

  return (
    <div className={styles.professionalTimeline} role="main" aria-label="Professional Timeline">
      {/* Simplified Header */}
      <div className={styles.timelineHeader}>
        <div className={styles.headerLeft}>
          <h3>Professional Development Timeline</h3>
          <p>My career journey from 2014 to present. Click the eye icon (👁️) next to any milestone to view detailed information.</p>
        </div>
        <div className={styles.headerControls}>
          <span className={styles.selectedCount} aria-live="polite">
            Key Events: {selectedEvents.size}/3
          </span>
          <button 
            className={styles.groupWorkButton}
            onClick={startGroupWork}
            disabled={selectedEvents.size === 0}
            title="Start group work presentation mode"
            aria-label="Start group work presentation mode"
          >
            <Users size={16} aria-hidden="true" />
            <span>Group Work</span>
          </button>
        </div>
      </div>

      {/* Minimalist Timeline Container */}
      <div 
        className={styles.timelineContainer}
        ref={timelineRef}
        onClick={handleTimelineClick}
        onKeyDown={(e) => handleKeyDown(e, () => handleTimelineClick(e))}
        role="application"
        aria-label="Interactive timeline"
        tabIndex={0}
      >
        {/* Year markers */}
        <div className={styles.yearMarkers} aria-hidden="true">
          {Array.from({ length: 11 }, (_, i) => 2014 + i).map(year => (
            <div 
              key={year} 
              className={styles.yearMarker}
              style={{ left: `${getTimelinePosition(year)}%` }}
            >
              {year}
            </div>
          ))}
        </div>

        {/* Main timeline line */}
        <div className={styles.timelineLine} aria-hidden="true" />

        {/* Simplified Milestones */}
        {milestones.map(milestone => {
          const position = getTimelinePosition(milestone.year);
          
          return (
            <div
              key={milestone.id}
              className={`${styles.milestone} ${milestone.position === 'above' ? styles.above : styles.below} ${milestone.isKeyEvent ? styles.keyEvent : ''}`}
              style={{ left: `${position}%` }}
              role="button"
              tabIndex={0}
              aria-label={`${milestone.title} in ${milestone.year}. Click to view details.`}
              onKeyDown={(e) => handleKeyDown(e, () => toggleMilestoneDetails(milestone.id))}
            >
              <div className={styles.milestoneContent}>
                <div className={styles.milestoneYear}>{milestone.year}</div>
                <div className={styles.milestoneTitle}>
                  {milestone.title}
                  <button
                    className={styles.eyeButton}
                    onClick={() => toggleMilestoneDetails(milestone.id)}
                    title={`View details for ${milestone.title}`}
                    aria-label={`View details for ${milestone.title}`}
                  >
                    👁️
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* New Milestone Form */}
        {newMilestone && (
          <NewMilestoneForm
            milestone={newMilestone}
            onSave={addMilestone}
            onCancel={() => setNewMilestone(null)}
          />
        )}
      </div>

      {/* Expanded Milestone Details */}
      {expandedMilestone && (
        <MilestoneDetailsCard
          milestone={milestones.find(m => m.id === expandedMilestone)}
          onClose={() => setExpandedMilestone(null)}
        />
      )}

      {/* Key Events Details Section - Only show if not in expanded mode */}
      {keyEvents.length > 0 && !groupWorkMode && !expandedMilestone && (
        <div className={styles.keyEventsSection} aria-labelledby="key-events-heading">
          <h3 id="key-events-heading">Key Career Events</h3>
          <div className={styles.keyEventsGrid}>
            {keyEvents.map(event => (
              <KeyEventCard
                key={event.id}
                event={event}
                onSaveDetails={saveEventDetails}
              />
            ))}
          </div>
        </div>
      )}

      {/* Group Work Mode */}
      {groupWorkMode && (
        <GroupWorkPresentation
          events={keyEvents}
          currentIndex={currentPresentationIndex}
          onNext={nextPresentation}
          onPrevious={previousPresentation}
          onSubmitFeedback={submitFeedback}
          onExit={() => setGroupWorkMode(false)}
          feedbackData={feedbackData}
        />
      )}

      {/* Edit Milestone Modal */}
      {editingMilestone && (
        <EditMilestoneModal
          milestone={editingMilestone}
          onSave={(formData) => {
            updateMilestone(editingMilestone.id, formData);
            setEditingMilestone(null);
          }}
          onCancel={() => setEditingMilestone(null)}
        />
      )}
    </div>
  );
};

// Milestone Details Card Component
const MilestoneDetailsCard = ({ milestone, onClose }) => {
  if (!milestone) return null;

  return (
    <div className={styles.milestoneDetails} role="dialog" aria-labelledby="milestone-details-title">
      <div className={styles.detailsCard}>
        <div className={styles.detailsHeader}>
          <h4 id="milestone-details-title">{milestone.title} ({milestone.year})</h4>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close details"
          >
            ✕
          </button>
        </div>
        
        {milestone.details && (
          <div className={styles.detailsContent}>
            <div className={styles.detailSection}>
              <h5>Occasion</h5>
              <p>{milestone.details.occasion}</p>
            </div>
            
            <div className={styles.detailSection}>
              <h5>Task</h5>
              <p>{milestone.details.task}</p>
            </div>
            
            <div className={styles.detailSection}>
              <h5>Challenge</h5>
              <p>{milestone.details.challenge}</p>
            </div>
            
            <div className={styles.detailSection}>
              <h5>Solution</h5>
              <p>{milestone.details.solution}</p>
            </div>
            
            <div className={styles.detailSection}>
              <h5>Technologies</h5>
              <div className={styles.techTags}>
                {milestone.details.technologies.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
            
            <div className={styles.detailSection}>
              <h5>Results</h5>
              <p>{milestone.details.results}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

MilestoneDetailsCard.propTypes = {
  milestone: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    details: PropTypes.shape({
      occasion: PropTypes.string,
      task: PropTypes.string,
      challenge: PropTypes.string,
      solution: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      results: PropTypes.string
    })
  }),
  onClose: PropTypes.func.isRequired
};

// New Milestone Form Component
const NewMilestoneForm = ({ milestone, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'CAREER',
    description: '',
    year: milestone.year,
    position: milestone.position
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (formData.year < 2012 || formData.year > 2025) {
      newErrors.year = 'Year must be between 2012 and 2025';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  return (
    <div 
      className={styles.newMilestoneForm}
      style={{ 
        left: milestone.x,
        top: milestone.y,
        transform: milestone.position === 'above' ? 'translate(-50%, -100%)' : 'translate(-50%, 0)'
      }}
      role="dialog"
      aria-labelledby="new-milestone-title"
    >
      <form onSubmit={handleSubmit}>
        <h4 id="new-milestone-title" className="sr-only">Add New Milestone</h4>
        <input
          type="text"
          placeholder="Milestone title"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          autoFocus
          aria-label="Milestone title"
          aria-invalid={!!errors.title}
        />
        {errors.title && <span className={styles.error} role="alert">{errors.title}</span>}
        
        <select
          value={formData.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
          aria-label="Milestone type"
        >
          {Object.entries(MILESTONE_TYPES).map(([key, type]) => (
            <option key={key} value={key}>{type.label}</option>
          ))}
        </select>
        
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          aria-label="Milestone description"
          aria-invalid={!!errors.description}
        />
        {errors.description && <span className={styles.error} role="alert">{errors.description}</span>}
        
        <input
          type="number"
          min="2012"
          max="2025"
          value={formData.year}
          onChange={(e) => handleInputChange('year', parseInt(e.target.value) || 2014)}
          aria-label="Year"
          aria-invalid={!!errors.year}
        />
        {errors.year && <span className={styles.error} role="alert">{errors.year}</span>}
        
        <div className={styles.formActions}>
          <button type="submit">Add</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

NewMilestoneForm.propTypes = {
  milestone: PropTypes.shape({
    year: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

// Key Event Card Component
const KeyEventCard = ({ event, onSaveDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [details, setDetails] = useState(event.details || {
    occasion: '',
    task: '',
    challenge: '',
    speciality: '',
    solution: '',
    technologies: [],
    results: ''
  });

  const handleSave = useCallback(() => {
    onSaveDetails(event.id, details);
  }, [event.id, details, onSaveDetails]);

  const addTechnology = useCallback((tech) => {
    const trimmedTech = tech.trim();
    if (trimmedTech && !details.technologies.includes(trimmedTech)) {
      setDetails(prev => ({
        ...prev,
        technologies: [...prev.technologies, trimmedTech]
      }));
    }
  }, [details.technologies]);

  const removeTechnology = useCallback((tech) => {
    setDetails(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  }, []);

  const handleTechnologyKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTechnology(e.target.value);
      e.target.value = '';
    }
  }, [addTechnology]);

  return (
    <div className={styles.keyEventCard}>
      <div className={styles.keyEventHeader}>
        <h4>{event.title}</h4>
        <button
          className={styles.expandButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
          aria-expanded={isExpanded}
        >
          {isExpanded ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
        </button>
      </div>
      
      {isExpanded && (
        <div className={styles.keyEventDetails}>
          <div className={styles.detailField}>
            <label htmlFor={`occasion-${event.id}`}>Occasion</label>
            <textarea
              id={`occasion-${event.id}`}
              value={details.occasion}
              onChange={(e) => setDetails(prev => ({ ...prev, occasion: e.target.value }))}
              placeholder="What was the occasion or context?"
            />
          </div>
          
          <div className={styles.detailField}>
            <label htmlFor={`task-${event.id}`}>Task</label>
            <textarea
              id={`task-${event.id}`}
              value={details.task}
              onChange={(e) => setDetails(prev => ({ ...prev, task: e.target.value }))}
              placeholder="What was your specific task or responsibility?"
            />
          </div>
          
          <div className={styles.detailField}>
            <label htmlFor={`challenge-${event.id}`}>Challenge</label>
            <textarea
              id={`challenge-${event.id}`}
              value={details.challenge}
              onChange={(e) => setDetails(prev => ({ ...prev, challenge: e.target.value }))}
              placeholder="What challenges did you face?"
            />
          </div>
          
          <div className={styles.detailField}>
            <label htmlFor={`speciality-${event.id}`}>Speciality</label>
            <textarea
              id={`speciality-${event.id}`}
              value={details.speciality}
              onChange={(e) => setDetails(prev => ({ ...prev, speciality: e.target.value }))}
              placeholder="What made this situation special or unique?"
            />
          </div>
          
          <div className={styles.detailField}>
            <label htmlFor={`solution-${event.id}`}>Solution Approach</label>
            <textarea
              id={`solution-${event.id}`}
              value={details.solution}
              onChange={(e) => setDetails(prev => ({ ...prev, solution: e.target.value }))}
              placeholder="How did you approach solving the challenge?"
            />
          </div>
          
          <div className={styles.detailField}>
            <label htmlFor={`technologies-${event.id}`}>Technologies Used</label>
            <div className={styles.technologiesContainer}>
              <div className={styles.technologyTags}>
                {details.technologies.map(tech => (
                  <span key={tech} className={styles.technologyTag}>
                    {tech}
                    <button 
                      type="button"
                      onClick={() => removeTechnology(tech)}
                      aria-label={`Remove ${tech}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                id={`technologies-${event.id}`}
                type="text"
                placeholder="Add technology (press Enter)"
                onKeyPress={handleTechnologyKeyPress}
                aria-label="Add technology"
              />
            </div>
          </div>
          
          <div className={styles.detailField}>
            <label htmlFor={`results-${event.id}`}>Results & Benefits</label>
            <textarea
              id={`results-${event.id}`}
              value={details.results}
              onChange={(e) => setDetails(prev => ({ ...prev, results: e.target.value }))}
              placeholder="What were the outcomes and benefits?"
            />
          </div>
          
          <button 
            className={styles.saveDetailsButton} 
            onClick={handleSave}
            type="button"
          >
            Save Details
          </button>
        </div>
      )}
    </div>
  );
};

KeyEventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    details: PropTypes.shape({
      occasion: PropTypes.string,
      task: PropTypes.string,
      challenge: PropTypes.string,
      speciality: PropTypes.string,
      solution: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      results: PropTypes.string
    })
  }).isRequired,
  onSaveDetails: PropTypes.func.isRequired
};

// Edit Milestone Modal Component
const EditMilestoneModal = ({ milestone, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: milestone.title,
    type: milestone.type,
    description: milestone.description,
    year: milestone.year,
    position: milestone.position
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (formData.year < 2012 || formData.year > 2025) {
      newErrors.year = 'Year must be between 2012 and 2025';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div 
      className={styles.modalOverlay} 
      onClick={handleOverlayClick}
      role="dialog"
      aria-labelledby="edit-milestone-title"
      aria-modal="true"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 id="edit-milestone-title">Edit Milestone</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label htmlFor="edit-title">Title</label>
            <input
              id="edit-title"
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              required
              aria-invalid={!!errors.title}
            />
            {errors.title && <span className={styles.error} role="alert">{errors.title}</span>}
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="edit-type">Type</label>
            <select
              id="edit-type"
              value={formData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
            >
              {Object.entries(MILESTONE_TYPES).map(([key, type]) => (
                <option key={key} value={key}>{type.label}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="edit-description">Description</label>
            <textarea
              id="edit-description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              aria-invalid={!!errors.description}
            />
            {errors.description && <span className={styles.error} role="alert">{errors.description}</span>}
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="edit-year">Year</label>
            <input
              id="edit-year"
              type="number"
              min="2012"
              max="2025"
              value={formData.year}
              onChange={(e) => handleInputChange('year', parseInt(e.target.value) || milestone.year)}
              required
              aria-invalid={!!errors.year}
            />
            {errors.year && <span className={styles.error} role="alert">{errors.year}</span>}
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="edit-position">Position</label>
            <select
              id="edit-position"
              value={formData.position}
              onChange={(e) => handleInputChange('position', e.target.value)}
            >
              <option value="above">Above timeline</option>
              <option value="below">Below timeline</option>
            </select>
          </div>
          
          <div className={styles.modalActions}>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditMilestoneModal.propTypes = {
  milestone: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

// Group Work Presentation Component
const GroupWorkPresentation = ({ 
  events, 
  currentIndex, 
  onNext, 
  onPrevious, 
  onSubmitFeedback, 
  onExit,
  feedbackData 
}) => {
  const [feedback, setFeedback] = useState('');
  const [questions, setQuestions] = useState({
    special: '',
    result: '',
    contribution: ''
  });

  const currentEvent = events[currentIndex];

  const handleFeedbackSubmit = useCallback(() => {
    if (!feedback.trim()) return;
    
    onSubmitFeedback(currentEvent.id, {
      feedback: feedback.trim(),
      questions,
      timestamp: new Date().toISOString()
    });
    setFeedback('');
    setQuestions({ special: '', result: '', contribution: '' });
  }, [currentEvent?.id, feedback, questions, onSubmitFeedback]);

  const handleQuestionChange = useCallback((field, value) => {
    setQuestions(prev => ({ ...prev, [field]: value }));
  }, []);

  if (!currentEvent) {
    return (
      <div className={styles.groupWorkMode} role="main" aria-label="Group work presentation">
        <div className={styles.presentationHeader}>
          <h3>Group Work Presentation</h3>
          <p>No events available for presentation.</p>
          <button onClick={onExit} className={styles.exitButton}>
            Exit Group Mode
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.groupWorkMode} role="main" aria-label="Group work presentation">
      <div className={styles.presentationHeader}>
        <h3>Group Work Presentation</h3>
        <div className={styles.presentationNav}>
          <span aria-live="polite">Event {currentIndex + 1} of {events.length}</span>
          <div className={styles.navButtons}>
            <button 
              onClick={onPrevious} 
              disabled={currentIndex === 0}
              aria-label="Previous event"
            >
              Previous
            </button>
            <button 
              onClick={onNext} 
              disabled={currentIndex === events.length - 1}
              aria-label="Next event"
            >
              Next
            </button>
            <button onClick={onExit} className={styles.exitButton}>
              Exit Group Mode
            </button>
          </div>
        </div>
      </div>

      <div className={styles.presentationContent}>
        <section className={styles.eventPresentation} aria-labelledby="current-event-title">
          <h4 id="current-event-title">{currentEvent.title}</h4>
          <p>{currentEvent.description}</p>
          
          {currentEvent.details && (
            <div className={styles.eventDetails}>
              {currentEvent.details.occasion && (
                <div className={styles.detailSection}>
                  <h5>Occasion</h5>
                  <p>{currentEvent.details.occasion}</p>
                </div>
              )}
              {currentEvent.details.challenge && (
                <div className={styles.detailSection}>
                  <h5>Challenge</h5>
                  <p>{currentEvent.details.challenge}</p>
                </div>
              )}
              {currentEvent.details.solution && (
                <div className={styles.detailSection}>
                  <h5>Solution</h5>
                  <p>{currentEvent.details.solution}</p>
                </div>
              )}
              {currentEvent.details.results && (
                <div className={styles.detailSection}>
                  <h5>Results</h5>
                  <p>{currentEvent.details.results}</p>
                </div>
              )}
              {currentEvent.details.technologies && currentEvent.details.technologies.length > 0 && (
                <div className={styles.detailSection}>
                  <h5>Technologies</h5>
                  <div className={styles.techTags}>
                    {currentEvent.details.technologies.map(tech => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        <section className={styles.interviewQuestions} aria-labelledby="interview-questions-title">
          <h4 id="interview-questions-title">Interview Practice Questions</h4>
          
          <div className={styles.questionSection}>
            <label htmlFor="question-special">What was special about this station?</label>
            <textarea
              id="question-special"
              value={questions.special}
              onChange={(e) => handleQuestionChange('special', e.target.value)}
              placeholder="Describe what made this experience unique..."
            />
          </div>
          
          <div className={styles.questionSection}>
            <label htmlFor="question-result">What was the result/benefit?</label>
            <textarea
              id="question-result"
              value={questions.result}
              onChange={(e) => handleQuestionChange('result', e.target.value)}
              placeholder="Explain the outcomes and impact..."
            />
          </div>
          
          <div className={styles.questionSection}>
            <label htmlFor="question-contribution">How did you contribute? (tasks/skills)</label>
            <textarea
              id="question-contribution"
              value={questions.contribution}
              onChange={(e) => handleQuestionChange('contribution', e.target.value)}
              placeholder="Detail your specific contributions and skills..."
            />
          </div>
        </section>

        <section className={styles.feedbackSection} aria-labelledby="feedback-section-title">
          <h4 id="feedback-section-title">Peer Feedback</h4>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Provide feedback on the presentation..."
            aria-label="Feedback input"
          />
          <button 
            className={styles.feedbackButton}
            onClick={handleFeedbackSubmit}
            disabled={!feedback.trim()}
            type="button"
          >
            <MessageSquare size={16} aria-hidden="true" />
            Submit Feedback
          </button>
          
          {feedbackData[currentEvent.id] && (
            <div className={styles.previousFeedback}>
              <h5>Previous Feedback</h5>
              <p>{feedbackData[currentEvent.id].feedback}</p>
              <small>
                Submitted: {new Date(feedbackData[currentEvent.id].timestamp).toLocaleString()}
              </small>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

GroupWorkPresentation.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    details: PropTypes.object
  })).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onSubmitFeedback: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  feedbackData: PropTypes.object.isRequired
};

ProfessionalTimeline.propTypes = {};

export default ProfessionalTimeline;
