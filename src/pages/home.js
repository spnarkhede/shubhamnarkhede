import React from 'react';
import Layout from '@theme/Layout';
import { HeroSection, FeaturedSection, LatestProjects, LatestBooks, ContactCTA } from '@site/src/components/HomepageFeatures';
import SkillsMatrix from '@site/src/components/SkillsMatrix';
import RecommendationsPanel from '@site/src/components/RecommendationsPanel';
import ResumeCenter from '@site/src/components/ResumeCenter';
import ContinueExploring from '@site/src/components/ContinueExploring';
import LatestArticles from '@site/src/components/LatestArticles';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Professional portfolio of Shubham Narkhede, DevOps Engineer and Full Stack Developer with expertise in UI/UX design and cloud technologies."
    >
      <main>
        <HeroSection />
        <FeaturedSection />
        <LatestProjects />
        <LatestArticles />
        <LatestBooks />
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <SkillsMatrix />
            </div>
          </div>
        </div>
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <RecommendationsPanel />
            </div>
          </div>
        </div>
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <ResumeCenter />
            </div>
          </div>
        </div>
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <ContinueExploring />
            </div>
          </div>
        </div>
        <ContactCTA />
      </main>
    </Layout>
  );
}
