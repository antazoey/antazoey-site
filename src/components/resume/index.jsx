import React from 'react';
import { Document, Page } from 'react-pdf';
import style from 'styles.css';
import resumeStyle from './resume.css';

const classes = `${resumeStyle.resume} ${style.center}`;

const Resume = () => (
  <div className={classes}>
    <Document file="resume.pdf">
      <Page pageNumber={1} />
    </Document>
  </div>
);

export default Resume;
