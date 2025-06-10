export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutContent {
  missionText: string;
  storyText: string;
  teamMembers: TeamMember[];
  milestones: Milestone[];
  values: Value[];
}

// Initial default data
const initialAboutData: AboutContent = {
  missionText: `At Planmoni, we believe that financial discipline shouldn't be a struggle. Traditional banking gives you access to all your money all the time, making it easy to spend impulsively and difficult to stick to financial goals.

Our solution is simple yet powerful: we help you lock away your money and receive it back on a schedule that matches your needs. This creates natural barriers to impulsive spending while ensuring you have access to funds when you truly need them.

By combining behavioral psychology with modern technology, we're helping thousands of people across Africa build better financial habits and achieve their goals.`,

  storyText: `Our founders noticed a common pattern among friends, family, and colleagues: people would receive money (salary, business income, gifts) and struggle to make it last. The issue wasn't lack of income—it was the difficulty of managing access to that income over time.

Traditional budgeting apps and financial advice focused on tracking and willpower, but didn't address the fundamental issue: when all your money is easily accessible, it's easy to spend it impulsively.

We realized that the solution wasn't more tracking or more willpower—it was better access control. By creating a system that locks your money away and releases it on a predetermined schedule, we could help people naturally develop better spending habits.

The result is Planmoni: a financial planning tool that combines the security of a vault with the flexibility of personalized payout schedules, helping users achieve their financial goals through structured access to their own money.`,

  teamMembers: [
    {
      id: '1',
      name: 'Adebayo Ogundimu',
      role: 'CEO & Co-Founder',
      bio: 'Former fintech executive with 10+ years experience in digital banking and financial inclusion across Africa.',
      image: '/assets/team-placeholder.jpg'
    },
    {
      id: '2',
      name: 'Kemi Adebisi',
      role: 'CTO & Co-Founder',
      bio: 'Software architect and security expert who previously built payment systems for major Nigerian banks.',
      image: '/assets/team-placeholder.jpg'
    },
    {
      id: '3',
      name: 'Chinedu Okoro',
      role: 'Head of Product',
      bio: 'Product strategist with deep expertise in behavioral economics and user experience design.',
      image: '/assets/team-placeholder.jpg'
    },
    {
      id: '4',
      name: 'Folake Adeyemi',
      role: 'Head of Operations',
      bio: 'Operations leader with extensive experience in financial services compliance and risk management.',
      image: '/assets/team-placeholder.jpg'
    }
  ],

  milestones: [
    {
      id: '1',
      year: '2023',
      title: 'Company Founded',
      description: 'Planmoni was founded with a mission to help people develop better financial habits through technology.'
    },
    {
      id: '2',
      year: '2024',
      title: 'Beta Launch',
      description: 'Launched our beta version with 1,000 early users, gathering valuable feedback and insights.'
    },
    {
      id: '3',
      year: '2024',
      title: 'Seed Funding',
      description: 'Raised seed funding to accelerate product development and expand our team.'
    },
    {
      id: '4',
      year: '2025',
      title: 'Public Launch',
      description: 'Officially launched Planmoni to the public, helping thousands achieve financial discipline.'
    }
  ],

  values: [
    {
      id: '1',
      title: 'Security First',
      description: 'Your financial security is our top priority. We implement bank-level security measures to protect your funds and data.',
      icon: 'Shield'
    },
    {
      id: '2',
      title: 'User-Centric',
      description: 'Every feature we build is designed with our users\' financial wellbeing and success in mind.',
      icon: 'Heart'
    },
    {
      id: '3',
      title: 'Innovation',
      description: 'We continuously innovate to create better solutions for financial discipline and planning.',
      icon: 'Lightbulb'
    },
    {
      id: '4',
      title: 'Accessibility',
      description: 'Financial planning tools should be accessible to everyone, regardless of income level or background.',
      icon: 'Globe'
    }
  ]
};

// About data management singleton class
class AboutDataManager {
  private static instance: AboutDataManager;
  private data: AboutContent;

  private constructor() {
    this.loadData();
  }

  public static getInstance(): AboutDataManager {
    if (!AboutDataManager.instance) {
      AboutDataManager.instance = new AboutDataManager();
    }
    return AboutDataManager.instance;
  }

  private loadData(): void {
    const savedData = localStorage.getItem('planmoni-about-data');
    if (savedData) {
      try {
        this.data = JSON.parse(savedData);
      } catch (error) {
        console.error('Error loading about data from localStorage:', error);
        this.data = { ...initialAboutData };
        this.saveData();
      }
    } else {
      this.data = { ...initialAboutData };
      this.saveData();
    }
  }

  private saveData(): void {
    try {
      localStorage.setItem('planmoni-about-data', JSON.stringify(this.data));
    } catch (error) {
      console.error('Error saving about data to localStorage:', error);
    }
  }

  public getAboutContent(): AboutContent {
    return { ...this.data };
  }

  public getMissionText(): string {
    return this.data.missionText;
  }

  public getStoryText(): string {
    return this.data.storyText;
  }

  public getTeamMembers(): TeamMember[] {
    return [...this.data.teamMembers];
  }

  public getMilestones(): Milestone[] {
    return [...this.data.milestones];
  }

  public getValues(): Value[] {
    return [...this.data.values];
  }

  public updateMissionText(text: string): void {
    this.data.missionText = text;
    this.saveData();
  }

  public updateStoryText(text: string): void {
    this.data.storyText = text;
    this.saveData();
  }

  public updateTeamMembers(members: TeamMember[]): void {
    this.data.teamMembers = [...members];
    this.saveData();
  }

  public addTeamMember(member: Omit<TeamMember, 'id'>): TeamMember {
    const newMember: TeamMember = {
      ...member,
      id: Date.now().toString()
    };
    this.data.teamMembers.push(newMember);
    this.saveData();
    return newMember;
  }

  public updateTeamMember(id: string, updates: Partial<TeamMember>): TeamMember | null {
    const index = this.data.teamMembers.findIndex(member => member.id === id);
    if (index === -1) return null;

    this.data.teamMembers[index] = { ...this.data.teamMembers[index], ...updates };
    this.saveData();
    return this.data.teamMembers[index];
  }

  public deleteTeamMember(id: string): boolean {
    const index = this.data.teamMembers.findIndex(member => member.id === id);
    if (index === -1) return false;

    this.data.teamMembers.splice(index, 1);
    this.saveData();
    return true;
  }

  public updateMilestones(milestones: Milestone[]): void {
    this.data.milestones = [...milestones];
    this.saveData();
  }

  public addMilestone(milestone: Omit<Milestone, 'id'>): Milestone {
    const newMilestone: Milestone = {
      ...milestone,
      id: Date.now().toString()
    };
    this.data.milestones.push(newMilestone);
    this.saveData();
    return newMilestone;
  }

  public updateMilestone(id: string, updates: Partial<Milestone>): Milestone | null {
    const index = this.data.milestones.findIndex(milestone => milestone.id === id);
    if (index === -1) return null;

    this.data.milestones[index] = { ...this.data.milestones[index], ...updates };
    this.saveData();
    return this.data.milestones[index];
  }

  public deleteMilestone(id: string): boolean {
    const index = this.data.milestones.findIndex(milestone => milestone.id === id);
    if (index === -1) return false;

    this.data.milestones.splice(index, 1);
    this.saveData();
    return true;
  }

  public updateValues(values: Value[]): void {
    this.data.values = [...values];
    this.saveData();
  }

  public addValue(value: Omit<Value, 'id'>): Value {
    const newValue: Value = {
      ...value,
      id: Date.now().toString()
    };
    this.data.values.push(newValue);
    this.saveData();
    return newValue;
  }

  public updateValue(id: string, updates: Partial<Value>): Value | null {
    const index = this.data.values.findIndex(value => value.id === id);
    if (index === -1) return null;

    this.data.values[index] = { ...this.data.values[index], ...updates };
    this.saveData();
    return this.data.values[index];
  }

  public deleteValue(id: string): boolean {
    const index = this.data.values.findIndex(value => value.id === id);
    if (index === -1) return false;

    this.data.values.splice(index, 1);
    this.saveData();
    return true;
  }

  public updateAllContent(content: AboutContent): void {
    this.data = { ...content };
    this.saveData();
  }
}

export const aboutDataManager = AboutDataManager.getInstance();
export default aboutDataManager;