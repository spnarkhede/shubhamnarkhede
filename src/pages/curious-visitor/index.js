import React from 'react';
import { useHistory } from '@docusaurus/router';
import { useEffect } from 'react';
import useRoleStore from '../../store/roleStore';

export default function CuriousVisitor() {
  const history = useHistory();
  const { setActiveRole, setActiveTab } = useRoleStore();
  
  useEffect(() => {
    // Set active role and redirect to the introduction tab
    setActiveRole('curious-visitor');
    setActiveTab('curious-visitor', 'introduction');
    history.replace('/curious-visitor/introduction');
  }, [history, setActiveRole, setActiveTab]);
  
  return null;
}
