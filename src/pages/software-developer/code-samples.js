import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Code, ExternalLink, GitHub, Copy, Check } from 'lucide-react';

export default function SoftwareDeveloperCodeSamples() {
  const [copiedCode, setCopiedCode] = useState(null);

  const codeSamples = [
    {
      id: 'react-hook',
      title: 'Custom React Hook for API State Management',
      description: 'A reusable hook that manages loading, error, and data states for API calls with automatic retries.',
      language: 'typescript',
      tags: ['React', 'TypeScript', 'Custom Hooks'],
      code: `import { useState, useEffect, useCallback } from 'react';

interface UseApiStateOptions {
  retries?: number;
  retryDelay?: number;
}

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  retry: () => void;
}

export function useApiState<T>(
  apiCall: () => Promise<T>,
  options: UseApiStateOptions = {}
): ApiState<T> {
  const { retries = 3, retryDelay = 1000 } = options;
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
    retry: () => {},
  });

  const executeApiCall = useCallback(async (attemptCount = 0) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const data = await apiCall();
      setState(prev => ({ ...prev, data, loading: false }));
    } catch (error) {
      if (attemptCount < retries) {
        setTimeout(() => executeApiCall(attemptCount + 1), retryDelay);
      } else {
        setState(prev => ({ 
          ...prev, 
          error: error instanceof Error ? error.message : 'An error occurred',
          loading: false 
        }));
      }
    }
  }, [apiCall, retries, retryDelay]);

  const retry = useCallback(() => {
    executeApiCall(0);
  }, [executeApiCall]);

  useEffect(() => {
    executeApiCall(0);
  }, [executeApiCall]);

  return { ...state, retry };
}`,
      githubUrl: 'https://github.com/spnarkhede/react-hooks',
      liveDemo: 'https://codesandbox.io/s/api-state-hook'
    },
    {
      id: 'docker-compose',
      title: 'Multi-Stage Docker Build with Health Checks',
      description: 'Production-ready Docker configuration with multi-stage builds, health checks, and security best practices.',
      language: 'dockerfile',
      tags: ['Docker', 'DevOps', 'Production'],
      code: `# Multi-stage build for Node.js application
        FROM node:18-alpine AS base
        WORKDIR /app
        COPY package*.json ./
        RUN npm ci --only=production && npm cache clean --force

        FROM node:18-alpine AS build
        WORKDIR /app
        COPY package*.json ./
        RUN npm ci
        COPY . .
        RUN npm run build

        FROM node:18-alpine AS production
        # Create non-root user
        RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

        WORKDIR /app

        # Copy production dependencies
        COPY --from=base /app/node_modules ./node_modules
        COPY --from=build --chown=nextjs:nodejs /app/dist ./dist
        COPY --from=build --chown=nextjs:nodejs /app/public ./public

        USER nextjs

        EXPOSE 3000

        # Health check
        HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
        CMD curl -f http://localhost:3000/health || exit 1

        CMD ["node", "dist/server.js"]`,
      githubUrl: 'https://github.com/spnarkhede/docker-configs',
      liveDemo: null
    },
    {
      id: 'graphql-resolver',
      title: 'GraphQL Resolver with DataLoader Pattern',
      description: 'Efficient GraphQL resolver implementation using DataLoader to solve the N+1 query problem.',
      language: 'javascript',
      tags: ['GraphQL', 'DataLoader', 'Performance'],
      code: `import DataLoader from 'dataloader';
        import { User, Post } from '../models';

        // Create DataLoader instances for batching
        const userLoader = new DataLoader(async (userIds) => {
        const users = await User.findByIds(userIds);
        return userIds.map(id => users.find(user => user.id === id) || null);
        });

        const postsByUserLoader = new DataLoader(async (userIds) => {
        const posts = await Post.findByUserIds(userIds);
        return userIds.map(userId => 
            posts.filter(post => post.userId === userId)
        );
        });

        export const resolvers = {
        Query: {
            user: (_, { id }) => userLoader.load(id),
            users: () => User.findAll(),
        },
        
        User: {
            posts: (user) => postsByUserLoader.load(user.id),
            
            // Complex field with caching
            fullName: (user, _, { dataSources }) => {
            return dataSources.userAPI.getFullName(user.id);
            }
        },
        
        Post: {
            author: (post) => userLoader.load(post.userId),
            
            // Computed field with business logic
            isRecent: (post) => {
            const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
            return new Date(post.createdAt) > oneWeekAgo;
            }
        }
        };

        // Clear cache on mutations to ensure data consistency
        export const clearCache = () => {
        userLoader.clearAll();
        postsByUserLoader.clearAll();
        };`,
      githubUrl: 'https://github.com/spnarkhede/graphql-api',
      liveDemo: 'https://graphql-demo.spnarkhede.dev'
    }
  ];

  const handleCopyCode = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <DashboardLayout
      role="software-developer"
      activeTab="code-samples"
      title="Software Developer | Code Samples"
      description="Code samples and technical implementations by Shubham Narkhede"
    >
      <SectionTemplate
        title="Code Samples"
        subtitle="Examples of my coding style, technical solutions, and best practices"
      >
        <div className={styles.codeSamplesContainer}>
          {codeSamples.map((sample) => (
            <div key={sample.id} className={styles.codeCard}>
              <div className={styles.codeCardHeader}>
                <div className={styles.codeCardTitle}>
                  <Code size={20} />
                  <h3>{sample.title}</h3>
                </div>
                <div className={styles.codeCardActions}>
                  <button
                    onClick={() => handleCopyCode(sample.code, sample.id)}
                    className={styles.copyButton}
                    title="Copy code"
                  >
                    {copiedCode === sample.id ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                  {sample.githubUrl && (
                    <a 
                      href={sample.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                      title="View on GitHub"
                    >
                      <GitHub size={16} />
                    </a>
                  )}
                  {sample.liveDemo && (
                    <a 
                      href={sample.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.demoLink}
                      title="View live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className={styles.codeDescription}>{sample.description}</p>
              
              <div className={styles.codeTags}>
                {sample.tags.map((tag) => (
                  <span key={tag} className={styles.codeTag}>{tag}</span>
                ))}
              </div>
              
              <div className={styles.codeBlock}>
                <pre className={styles.codeContent}>
                  <code className={`language-${sample.language}`}>
                    {sample.code}
                  </code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="More Code Examples"
        centered={true}
        className={styles.moreExamplesSection}
      >
        <p className={styles.moreExamplesText}>
          Interested in seeing more of my code? Check out my GitHub repositories for complete projects and contributions.
        </p>
        <div className={styles.moreExamplesButtons}>
          <a 
            href="https://github.com/spnarkhede" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            <GitHub size={16} />
            Visit GitHub Profile
          </a>
          <a href="/software-developer/project-repos" className={styles.secondaryButton}>
            Browse Project Repositories
          </a>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}