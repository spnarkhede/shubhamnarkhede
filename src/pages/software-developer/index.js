import React from 'react';
import { useHistory } from '@docusaurus/router';
import { useEffect } from 'react';
import useRoleStore from '../../store/roleStore';

export default function SoftwareDeveloper() {
  const history = useHistory();
  const { setActiveRole, setActiveTab } = useRoleStore();
  
  useEffect(() => {
    // Set active role and redirect to the code-samples tab (default for developers)
    setActiveRole('software-developer');
    setActiveTab('software-developer', 'code-samples');
    history.replace('/software-developer/code-samples');
  }, [history, setActiveRole, setActiveTab]);
  
  return null;
}