import { Projects } from 'components';
import React from 'react';

const img1 = require('assets/images/student1.jpg');
const img2 = require('assets/images/student2.jpg');

const ProjectsPage = () => {
  const projects = [
    {
      name: 'Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, velit eu malesuada blandit, elit elit lacinia odio, vel imperdiet quam est ut tellus. Integer fringilla malesuada arcu, vel iaculis nibh interdum ac. Fusce viverra magna et est mattis, vel venenatis odio fringilla. Donec in felis et nisl pulvinar hendrerit. Aliquam ac eleifend mauris. Nunc vel mi varius, vestibulum elit vel, sodales nunc. Mauris a lorem eu magna facilisis feugiat. Donec efficitur lectus vitae bibendum convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Aenean eget nibh non turpis aliquam varius. Nullam eu ex vel libero bibendum laoreet. Ut luctus, nisi ac tempor posuere, augue purus bibendum risus, sed bibendum erat mi et augue.',
      tags: ['Project manager', 'English'],
      img: img1
    },
    {
      name: 'Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, velit eu malesuada blandit, elit elit lacinia odio, vel imperdiet quam est ut tellus. Integer fringilla malesuada arcu, vel iaculis nibh interdum ac. Fusce viverra magna et est mattis, vel venenatis odio fringilla. Donec in felis et nisl pulvinar hendrerit. Aliquam ac eleifend mauris. Nunc vel mi varius, vestibulum elit vel, sodales nunc. Mauris a lorem eu magna facilisis feugiat. Donec efficitur lectus vitae bibendum convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Aenean eget nibh non turpis aliquam varius. Nullam eu ex vel libero bibendum laoreet. Ut luctus, nisi ac tempor posuere, augue purus bibendum risus, sed bibendum erat mi et augue.',
      tags: ['Project manager', 'English'],
      img: img2
    }
  ]

  return (
    <Projects projects={projects} />
  )
}

export default ProjectsPage;