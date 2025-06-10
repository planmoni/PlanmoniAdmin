export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  status: 'active' | 'paused' | 'closed';
  postedDate: string;
}

// Initial job positions data
const initialJobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '₦8M - ₦12M',
    description: 'Join our engineering team to build beautiful, responsive user interfaces for our financial planning platform.',
    requirements: [
      '5+ years of React/TypeScript experience',
      'Strong understanding of modern frontend architecture',
      'Experience with financial applications preferred',
      'Excellent problem-solving skills'
    ],
    status: 'active',
    postedDate: '2025-01-10'
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '₦10M - ₦15M',
    description: 'Lead product strategy and development for our core financial planning features.',
    requirements: [
      '3+ years of product management experience',
      'Background in fintech or financial services',
      'Strong analytical and communication skills',
      'Experience with user research and data analysis'
    ],
    status: 'active',
    postedDate: '2025-01-08'
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '₦6M - ₦10M',
    description: 'Build and maintain our cloud infrastructure to ensure 99.9% uptime for our users.',
    requirements: [
      '3+ years of DevOps/Infrastructure experience',
      'Experience with AWS, Docker, Kubernetes',
      'Strong security and compliance background',
      'Experience with CI/CD pipelines'
    ],
    status: 'active',
    postedDate: '2025-01-05'
  },
  {
    id: '4',
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '₦4M - ₦6M',
    description: 'Help our users achieve their financial goals by providing exceptional support and guidance.',
    requirements: [
      '2+ years of customer success experience',
      'Excellent communication skills',
      'Passion for helping people with their finances',
      'Experience with support tools and CRM systems'
    ],
    status: 'active',
    postedDate: '2025-01-03'
  },
  {
    id: '5',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '₦5M - ₦8M',
    description: 'Drive user acquisition and brand awareness through creative marketing campaigns.',
    requirements: [
      '3+ years of digital marketing experience',
      'Experience with fintech or financial services',
      'Strong understanding of growth marketing',
      'Data-driven approach to marketing'
    ],
    status: 'paused',
    postedDate: '2024-12-28'
  },
  {
    id: '6',
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '₦6M - ₦10M',
    description: 'Build scalable and secure backend systems for our financial platform.',
    requirements: [
      '3+ years of backend development experience',
      'Experience with Node.js, Python, or similar',
      'Strong database and API design skills',
      'Understanding of financial systems and security'
    ],
    status: 'active',
    postedDate: '2024-12-25'
  }
];

// Careers data management
class CareersDataManager {
  private static instance: CareersDataManager;
  private positions: JobPosition[] = [];

  private constructor() {
    this.loadPositions();
  }

  public static getInstance(): CareersDataManager {
    if (!CareersDataManager.instance) {
      CareersDataManager.instance = new CareersDataManager();
    }
    return CareersDataManager.instance;
  }

  private loadPositions(): void {
    const savedPositions = localStorage.getItem('planmoni-job-positions');
    if (savedPositions) {
      try {
        this.positions = JSON.parse(savedPositions);
      } catch (error) {
        console.error('Error loading job positions from localStorage:', error);
        this.positions = [...initialJobPositions];
        this.savePositions();
      }
    } else {
      this.positions = [...initialJobPositions];
      this.savePositions();
    }
  }

  private savePositions(): void {
    try {
      localStorage.setItem('planmoni-job-positions', JSON.stringify(this.positions));
    } catch (error) {
      console.error('Error saving job positions to localStorage:', error);
    }
  }

  public getAllPositions(): JobPosition[] {
    return [...this.positions];
  }

  public getActivePositions(): JobPosition[] {
    return this.positions.filter(position => position.status === 'active');
  }

  public getPositionById(id: string): JobPosition | undefined {
    return this.positions.find(position => position.id === id);
  }

  public addPosition(position: Omit<JobPosition, 'id'>): JobPosition {
    const newPosition: JobPosition = {
      ...position,
      id: Date.now().toString(),
    };
    this.positions.unshift(newPosition);
    this.savePositions();
    return newPosition;
  }

  public updatePosition(id: string, updates: Partial<JobPosition>): JobPosition | null {
    const index = this.positions.findIndex(position => position.id === id);
    if (index === -1) return null;

    this.positions[index] = { ...this.positions[index], ...updates };
    this.savePositions();
    return this.positions[index];
  }

  public deletePosition(id: string): boolean {
    const index = this.positions.findIndex(position => position.id === id);
    if (index === -1) return false;

    this.positions.splice(index, 1);
    this.savePositions();
    return true;
  }

  public getPositionsByDepartment(department: string): JobPosition[] {
    return this.positions.filter(position => position.department === department);
  }

  public getPositionsByStatus(status: JobPosition['status']): JobPosition[] {
    return this.positions.filter(position => position.status === status);
  }

  public searchPositions(query: string): JobPosition[] {
    const lowercaseQuery = query.toLowerCase();
    return this.positions.filter(position =>
      position.title.toLowerCase().includes(lowercaseQuery) ||
      position.description.toLowerCase().includes(lowercaseQuery) ||
      position.department.toLowerCase().includes(lowercaseQuery) ||
      position.requirements.some(req => req.toLowerCase().includes(lowercaseQuery))
    );
  }
}

export const careersDataManager = CareersDataManager.getInstance();
export default careersDataManager;