import React, { useState } from 'react'

type Props = {
    activeTab: string;
    setActiveTab: (tabName: string) => void;
  };
  

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {

  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);

  return (
    <div>ProjectHeader</div>
  )
}

export default ProjectHeader