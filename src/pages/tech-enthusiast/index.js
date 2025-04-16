import React from 'react';
import { useHistory } from '@docusaurus/router';
import { useEffect } from 'react';
import useRoleStore from '../../store/roleStore';

export default function TechEnthusiast() {
  const history = useHistory();
  const { setActiveRole, setActiveTab } = useRoleStore();
  
  useEffect(() => {
    // Set active role and redirect to the introduction tab
    setActiveRole('tech-enthusiast');
    setActiveTab('tech-enthusiast', 'introduction');
    history.replace('/tech-enthusiast/introduction');
  }, [history, setActiveRole, setActiveTab]);
  
  return null;
}
