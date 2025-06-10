export interface JobApplication {
  id: string;
  positionId: string;
  positionTitle: string;
  applicantName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  coverLetter: string;
  resumeFileName?: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  availableStartDate: string;
  salaryExpectation: string;
  status: 'pending' | 'reviewing' | 'interview' | 'rejected' | 'hired';
  appliedDate: string;
  notes?: string;
}

// Initial applications data (empty by default)
const initialApplications: JobApplication[] = [];

// Applications data management
class ApplicationsDataManager {
  private static instance: ApplicationsDataManager;
  private applications: JobApplication[] = [];

  private constructor() {
    this.loadApplications();
  }

  public static getInstance(): ApplicationsDataManager {
    if (!ApplicationsDataManager.instance) {
      ApplicationsDataManager.instance = new ApplicationsDataManager();
    }
    return ApplicationsDataManager.instance;
  }

  private loadApplications(): void {
    const savedApplications = localStorage.getItem('planmoni-job-applications');
    if (savedApplications) {
      try {
        this.applications = JSON.parse(savedApplications);
      } catch (error) {
        console.error('Error loading applications from localStorage:', error);
        this.applications = [...initialApplications];
        this.saveApplications();
      }
    } else {
      this.applications = [...initialApplications];
      this.saveApplications();
    }
  }

  private saveApplications(): void {
    try {
      localStorage.setItem('planmoni-job-applications', JSON.stringify(this.applications));
    } catch (error) {
      console.error('Error saving applications to localStorage:', error);
    }
  }

  public getAllApplications(): JobApplication[] {
    return [...this.applications];
  }

  public getApplicationById(id: string): JobApplication | undefined {
    return this.applications.find(app => app.id === id);
  }

  public getApplicationsByPosition(positionId: string): JobApplication[] {
    return this.applications.filter(app => app.positionId === positionId);
  }

  public addApplication(application: Omit<JobApplication, 'id' | 'appliedDate' | 'status'>): JobApplication {
    const newApplication: JobApplication = {
      ...application,
      id: Date.now().toString(),
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    this.applications.unshift(newApplication);
    this.saveApplications();
    return newApplication;
  }

  public updateApplication(id: string, updates: Partial<JobApplication>): JobApplication | null {
    const index = this.applications.findIndex(app => app.id === id);
    if (index === -1) return null;

    this.applications[index] = { ...this.applications[index], ...updates };
    this.saveApplications();
    return this.applications[index];
  }

  public deleteApplication(id: string): boolean {
    const index = this.applications.findIndex(app => app.id === id);
    if (index === -1) return false;

    this.applications.splice(index, 1);
    this.saveApplications();
    return true;
  }

  public getApplicationsByStatus(status: JobApplication['status']): JobApplication[] {
    return this.applications.filter(app => app.status === status);
  }

  public searchApplications(query: string): JobApplication[] {
    const lowercaseQuery = query.toLowerCase();
    return this.applications.filter(app =>
      app.applicantName.toLowerCase().includes(lowercaseQuery) ||
      app.email.toLowerCase().includes(lowercaseQuery) ||
      app.positionTitle.toLowerCase().includes(lowercaseQuery)
    );
  }
}

export const applicationsDataManager = ApplicationsDataManager.getInstance();
export default applicationsDataManager;