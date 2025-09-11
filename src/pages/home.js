import React from 'react';
import Layout from '@theme/Layout';
import { HeroSection } from '@site/src/components/HomepageFeatures';
import SkillsMatrix from '@site/src/components/SkillsMatrix';
import RecommendationsPanel from '@site/src/components/RecommendationsPanel';
import ResumeCenter from '@site/src/components/ResumeCenter';
import ContinueExploring from '@site/src/components/ContinueExploring';

// Simple placeholder components for missing exports
const FeaturedSection = () => (
  <div className="container margin-top--xl margin-bottom--xl">
    <div className="row">
      <div className="col col--10 col--offset-1">
        <h2>Featured Work</h2>
        <p>Explore my latest projects and achievements</p>
      </div>
    </div>
  </div>
);

const LatestProjects = () => (
  <div className="container margin-top--xl margin-bottom--xl">
    <div className="row">
      <div className="col col--10 col--offset-1">
        <h2>Latest Projects</h2>
        <p>Recent work and technical implementations</p>
      </div>
    </div>
  </div>
);

const LatestBooks = () => (
  <div className="container margin-top--xl margin-bottom--xl">
    <div className="row">
      <div className="col col--10 col--offset-1">
        <h2>Latest Book Reviews</h2>
        <p>Books that have influenced my thinking</p>
      </div>
    </div>
  </div>
);

const ContactCTA = () => (
  <div className="container margin-top--xl margin-bottom--xl">
    <div className="row">
      <div className="col col--10 col--offset-1">
        <h2>Let's Connect</h2>
        <p>Ready to collaborate? Get in touch!</p>
      </div>
    </div>
  </div>
);

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