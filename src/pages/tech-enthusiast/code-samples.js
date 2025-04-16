import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { GitHub, ExternalLink } from 'lucide-react';

export default function TechEnthusiastCodeSamples() {
  const codeSnippets = [
    {
      title: "React Custom Hook for API Calls",
      language: "TypeScript",
      description: "A reusable custom hook for handling API calls with loading, error states, and caching.",
      code: `import { useState, useEffect } from 'react';

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
};

type CacheItem<T> = {
  data: T;
  timestamp: number;
};

const cache: Record<string, CacheItem<any>> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export function useApi<T>(url: string, options?: RequestInit): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [refetchIndex, setRefetchIndex] = useState<number>(0);

  const refetch = () => {
    setRefetchIndex(prevIndex => prevIndex + 1);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Check cache first
        const cacheKey = \`\${url}-\${JSON.stringify(options)}\`;
        const cachedItem = cache[cacheKey];
        
        if (cachedItem && Date.now() - cachedItem.timestamp < CACHE_DURATION) {
          setData(cachedItem.data);
          setLoading(false);
          return;
        }

        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(\`API error: \${response.status}\`);
        }
        
        const result = await response.json();
        
        if (isMounted) {
          setData(result);
          // Update cache
          cache[cacheKey] = {
            data: result,
            timestamp: Date.now()
          };
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Unknown error'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, refetchIndex, JSON.stringify(options)]);

  return { data, loading, error, refetch };
}`,
      githubUrl: "https://github.com/spnarkhede/react-hooks/blob/main/useApi.ts"
    },
    {
      title: "Node.js Middleware for API Rate Limiting",
      language: "JavaScript",
      description: "A middleware for Express.js that implements rate limiting with Redis for distributed applications.",
      code: `const Redis = require('ioredis');
const { RateLimiterRedis } = require('rate-limiter-flexible');

// Initialize Redis client
const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  enableOfflineQueue: false
});

// Configure rate limiter
const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'middleware',
  points: 10, // Number of requests
  duration: 1, // Per second
});

/**
 * Rate limiting middleware for Express
 * Limits requests based on IP address
 */
const rateLimiterMiddleware = async (req, res, next) => {
  try {
    // Get IP address from request
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    // Consume points
    await rateLimiter.consume(ip);
    next();
  } catch (err) {
    // Rate limit exceeded
    if (err instanceof Error) {
      console.error('Rate limit error:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    
    // Set headers
    res.set('Retry-After', Math.ceil(err.msBeforeNext / 1000));
    res.set('X-RateLimit-Limit', rateLimiter.points);
    res.set('X-RateLimit-Remaining', err.remainingPoints);
    res.set('X-RateLimit-Reset', new Date(Date.now() + err.msBeforeNext).toISOString());
    
    // Send rate limit response
    return res.status(429).json({
      error: 'Too Many Requests',
      message: 'Rate limit exceeded. Please try again later.'
    });
  }
};

module.exports = rateLimiterMiddleware;`,
      githubUrl: "https://github.com/spnarkhede/node-middleware/blob/main/rateLimiter.js"
    },
    {
      title: "Terraform Infrastructure as Code for AWS",
      language: "HCL",
      description: "Infrastructure as Code using Terraform to provision a scalable AWS environment with VPC, ECS, and RDS.",
      code: `# Define AWS provider
provider "aws" {
  region = var.aws_region
}

# Create VPC
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name        = "\${var.project_name}-vpc"
    Environment = var.environment
  }
}

# Create public subnets
resource "aws_subnet" "public" {
  count                   = length(var.public_subnets_cidr)
  vpc_id                  = aws_vpc.main.id
  cidr_block              = element(var.public_subnets_cidr, count.index)
  availability_zone       = element(var.availability_zones, count.index)
  map_public_ip_on_launch = true

  tags = {
    Name        = "\${var.project_name}-public-subnet-\${count.index + 1}"
    Environment = var.environment
  }
}

# Create private subnets
resource "aws_subnet" "private" {
  count             = length(var.private_subnets_cidr)
  vpc_id            = aws_vpc.main.id
  cidr_block        = element(var.private_subnets_cidr, count.index)
  availability_zone = element(var.availability_zones, count.index)

  tags = {
    Name        = "\${var.project_name}-private-subnet-\${count.index + 1}"
    Environment = var.environment
  }
}

# Create Internet Gateway
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name        = "\${var.project_name}-igw"
    Environment = var.environment
  }
}

# Create ECS cluster
resource "aws_ecs_cluster" "main" {
  name = "\${var.project_name}-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = {
    Name        = "\${var.project_name}-ecs-cluster"
    Environment = var.environment
  }
}

# Create RDS instance
resource "aws_db_instance" "main" {
  allocated_storage      = 20
  storage_type           = "gp2"
  engine                 = "postgres"
  engine_version         = "13.4"
  instance_class         = "db.t3.micro"
  name                   = var.db_name
  username               = var.db_username
  password               = var.db_password
  parameter_group_name   = "default.postgres13"
  db_subnet_group_name   = aws_db_subnet_group.main.name
  vpc_security_group_ids = [aws_security_group.rds.id]
  skip_final_snapshot    = true
  multi_az               = var.environment == "production" ? true : false

  tags = {
    Name        = "\${var.project_name}-rds"
    Environment = var.environment
  }
}

# Create DB subnet group
resource "aws_db_subnet_group" "main" {
  name       = "\${var.project_name}-db-subnet-group"
  subnet_ids = aws_subnet.private.*.id

  tags = {
    Name        = "\${var.project_name}-db-subnet-group"
    Environment = var.environment
  }
}`,
      githubUrl: "https://github.com/spnarkhede/terraform-templates/blob/main/aws-ecs-rds.tf"
    }
  ];

  return (
    <DashboardLayout
      role="tech-enthusiast"
      activeTab="code-samples"
      title="Tech Enthusiast | Code Samples"
      description="Code samples and snippets demonstrating Shubham Narkhede's programming skills and best practices"
    >
      <SectionTemplate
        title="Code Samples"
        subtitle="Examples of my coding style and best practices"
      >
        <p className={styles.codeSamplesIntro}>
          Below are selected code samples that demonstrate my coding style, problem-solving approach, 
          and adherence to best practices. These snippets showcase different languages and frameworks 
          I work with regularly.
        </p>
        
        <div className={styles.codeSnippetsSection}>
          {codeSnippets.map((snippet, index) => (
            <div key={index} className={styles.codeSnippet}>
              <div className={styles.codeSnippetHeader}>
                <h3 className={styles.codeSnippetTitle}>{snippet.title}</h3>
                <span className={styles.codeSnippetLanguage}>{snippet.language}</span>
              </div>
              
              <p className={styles.codeSnippetDescription}>{snippet.description}</p>
              
              <pre className={styles.codeBlock}>
                <code>{snippet.code}</code>
              </pre>
              
              {snippet.githubUrl && (
                <a 
                  href={snippet.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <GitHub size={16} />
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Coding Standards"
        subtitle="My approach to writing clean, maintainable code"
        withBackground={true}
      >
        <div className={styles.codingStandardsGrid}>
          <div className={styles.codingStandardCard}>
            <h3>Code Organization</h3>
            <p>
              I structure code with clear separation of concerns, modular design, and appropriate abstraction layers.
              Files are organized logically, with related functionality grouped together. I follow the principle that
              each module, class, or function should have a single responsibility.
            </p>
          </div>
          
          <div className={styles.codingStandardCard}>
            <h3>Naming Conventions</h3>
            <p>
              I use descriptive, intention-revealing names for variables, functions, and classes. Names should
              explain what something does or represents without requiring additional comments. I follow language-specific
              conventions (camelCase, PascalCase, etc.) consistently throughout projects.
            </p>
          </div>
          
          <div className={styles.codingStandardCard}>
            <h3>Error Handling</h3>
            <p>
              I implement robust error handling with appropriate try/catch blocks, error boundaries, and fallback mechanisms.
              Errors are logged with sufficient context for debugging, and user-facing error messages are helpful but
              don't expose sensitive information.
            </p>
          </div>
          
          <div className={styles.codingStandardCard}>
            <h3>Testing</h3>
            <p>
              I write comprehensive tests including unit tests for individual functions, integration tests for component
              interactions, and end-to-end tests for critical user flows. Tests are readable, maintainable, and provide
              good coverage of both happy paths and edge cases.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Open Source Contributions"
        subtitle="My contributions to the open source community"
      >
        <div className={styles.openSourceSection}>
          <p className={styles.openSourceIntro}>
            I'm an active contributor to open source projects. Contributing to open source allows me to give back
            to the community, collaborate with other developers, and continuously improve my skills.
          </p>
          
          <div className={styles.contributionsGrid}>
            <div className={styles.contributionCard}>
              <h3>React Testing Library</h3>
              <p>
                Contributed improvements to the documentation and added examples for testing custom hooks.
                Also fixed a bug related to cleanup of async tests.
              </p>
              <a 
                href="https://github.com/testing-library/react-testing-library/pulls?q=author%3Aspnarkhede" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contributionLink}
              >
                <GitHub size={16} />
                View Contributions
              </a>
            </div>
            
            <div className={styles.contributionCard}>
              <h3>Node.js Express</h3>
              <p>
                Contributed performance improvements to the router middleware and fixed edge cases in error handling.
                Also participated in discussions about API design for new features.
              </p>
              <a 
                href="https://github.com/expressjs/express/pulls?q=author%3Aspnarkhede" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contributionLink}
              >
                <GitHub size={16} />
                View Contributions
              </a>
            </div>
            
            <div className={styles.contributionCard}>
              <h3>Terraform AWS Provider</h3>
              <p>
                Contributed documentation improvements and examples for ECS and RDS resources.
                Also reported and helped fix bugs related to VPC endpoint configurations.
              </p>
              <a 
                href="https://github.com/hashicorp/terraform-provider-aws/pulls?q=author%3Aspnarkhede" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contributionLink}
              >
                <GitHub size={16} />
                View Contributions
              </a>
            </div>
          </div>
          
          <div className={styles.githubStats}>
            <a 
              href="https://github.com/spnarkhede" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.viewProfileButton}
            >
              <GitHub size={18} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
