import React from 'react';
import { Hero } from '../components/Hero';
import { CandidateIntro } from '../components/CandidateIntro';
import { PolicyOverview } from '../components/PolicyOverview';
import { VisionStatement } from '../components/VisionStatement';
import { FeedbackForm } from '../components/FeedbackForm';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CandidateIntro />
      <PolicyOverview />
      <VisionStatement />
      {/* <FeedbackForm /> */}
    </>
  );
};