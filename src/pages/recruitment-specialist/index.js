import React from 'react';
import { useHistory } from '@docusaurus/router';
import { useEffect } from 'react';
import useRoleStore from '../../store/roleStore';

export default function RecruitmentSpecialist() {
  const history = useHistory();
  const { setActiveRole, setActiveTab } = useRoleStore();
  
  useEffect(() => {
    // Set active role and redirect to the introduction tab
    setActiveRole('recruitment-specialist');
    setActiveTab('recruitment-specialist', 'introduction');
    history.replace('/recruitment-specialist/introduction');
  }, [history, setActiveRole, setActiveTab]);
  
  return null;
}
