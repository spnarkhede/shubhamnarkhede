import React from 'react';
import { useHistory } from '@docusaurus/router';
import { useEffect } from 'react';
import useRoleStore from '../../store/roleStore';

export default function GrowthPartner() {
  const history = useHistory();
  const { setActiveRole, setActiveTab } = useRoleStore();
  
  useEffect(() => {
    // Set active role and redirect to the introduction tab
    setActiveRole('growth-partner');
    setActiveTab('growth-partner', 'introduction');
    history.replace('/growth-partner/introduction');
  }, [history, setActiveRole, setActiveTab]);
  
  return null;
}
