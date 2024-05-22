import React from 'react';
import Card from '../utils/Card';

const Placement = () => {
  return (
    <section>
      <h2 className="heading-primary--main white-head2" id="placement">Placement Info</h2>
      <div className="content">
        <Card year="2023" />
        <Card year="2022" />
        <Card year="2021" />
        <Card year="2020" />
        <Card year="2019" />
        <Card year="2018" />
      </div>
    </section>
  );
};

export default Placement;
