export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  status: 'published' | 'draft' | 'scheduled';
  readTime: string;
  image?: string;
  content?: string;
  slug: string;
}

// Initial blog posts data
const initialBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Psychology of Financial Discipline: Why Willpower Isn\'t Enough',
    excerpt: 'Discover why traditional budgeting fails and how behavioral design can help you build lasting financial habits that actually stick.',
    author: 'Dr. Kemi Adebisi',
    date: '2025-01-10',
    category: 'Psychology',
    status: 'published',
    readTime: '8 min read',
    image: '/assets/blog-featured.jpg',
    content: `Financial discipline is one of the most challenging aspects of personal finance management. Despite our best intentions, many of us struggle to stick to budgets, save consistently, or avoid impulsive purchases. The traditional approach to financial planning relies heavily on willpower and self-control, but research in behavioral psychology shows us why this approach often fails.

## The Willpower Myth

Willpower is a finite resource. Just like a muscle, it gets tired with use. When we rely solely on willpower to manage our finances, we're setting ourselves up for failure. This is why you might start the month with great intentions to stick to your budget, only to find yourself overspending by week three.

## The Role of Environmental Design

Instead of relying on willpower, we need to design our environment to make good financial decisions easier and bad ones harder. This is where Planmoni's approach becomes revolutionary. By creating structural barriers to accessing your money, we remove the need for constant willpower.

## Behavioral Economics in Action

The concept of "choice architecture" shows us that the way choices are presented dramatically affects our decisions. When all your money is easily accessible in a regular bank account, the choice architecture favors spending. Planmoni restructures this by making saving the default and spending require intentional action.

## Building Sustainable Habits

True financial discipline comes from building systems and habits, not from relying on motivation. When you use Planmoni to lock away your money and receive it on a schedule, you're building a habit of structured financial management that becomes automatic over time.

The key is to work with your psychology, not against it. By understanding how our minds work and designing systems that support our goals, we can achieve lasting financial discipline without the constant struggle.`,
    slug: 'psychology-financial-discipline'
  },
  {
    id: '2',
    title: '5 Signs You Need Better Cash Flow Management',
    excerpt: 'Learn to recognize the warning signs that indicate your cash flow needs attention and how to address them.',
    author: 'Adebayo Ogundimu',
    date: '2025-01-08',
    category: 'Financial Planning',
    status: 'published',
    readTime: '5 min read',
    image: '/assets/blog-1.jpg',
    content: `Cash flow management is the lifeblood of financial stability. Whether you're an individual managing personal finances or a business owner, understanding and controlling your cash flow is crucial for long-term success.

## Sign 1: You're Always Broke Before Payday

If you consistently find yourself with little to no money in the days leading up to your next paycheck, this is a clear sign that your cash flow needs attention. This pattern indicates that your spending is not aligned with your income timing.

## Sign 2: You Can't Handle Unexpected Expenses

When a small unexpected expense (like a car repair or medical bill) throws your entire financial plan off track, it's a sign that your cash flow lacks flexibility and buffer.

## Sign 3: You're Using Credit for Regular Expenses

If you find yourself putting regular monthly expenses on credit cards not for rewards but because you don't have the cash available, your cash flow timing is misaligned.

## Sign 4: You Have Irregular Income but Regular Expenses

Freelancers, entrepreneurs, and commission-based workers often struggle with this. Having irregular income while maintaining regular monthly expenses creates cash flow challenges.

## Sign 5: You Can't Save Consistently

If you're unable to save money consistently each month, it often indicates that your cash flow management needs improvement.

## The Solution: Structured Cash Flow Management

The key to solving these issues is creating a structured approach to cash flow management. This involves:

1. **Income Smoothing**: Converting irregular income into regular, predictable payments
2. **Expense Timing**: Aligning your expenses with your income schedule
3. **Buffer Creation**: Building cushions for unexpected expenses
4. **Automated Systems**: Removing the decision-making from day-to-day money management

Planmoni addresses these challenges by allowing you to deposit money when you have it and receive it back on a schedule that matches your needs, effectively smoothing out the peaks and valleys of irregular income.`,
    slug: 'cash-flow-management-signs'
  },
  {
    id: '3',
    title: 'How to Create a Sustainable Emergency Fund',
    excerpt: 'Building an emergency fund that you won\'t be tempted to raid for non-emergencies.',
    author: 'Folake Adeyemi',
    date: '2025-01-05',
    category: 'Savings',
    status: 'published',
    readTime: '6 min read',
    image: '/assets/blog-2.jpg',
    content: `An emergency fund is one of the most important components of financial security, yet many people struggle to build and maintain one. The key challenge isn't just saving the money—it's keeping it untouched for actual emergencies.

## What Constitutes an Emergency?

Before building your emergency fund, it's crucial to define what constitutes a real emergency:

- Job loss or significant income reduction
- Major medical expenses not covered by insurance
- Essential home repairs (roof, plumbing, electrical)
- Car repairs necessary for work
- Family emergencies requiring travel

Non-emergencies include:
- Vacations
- Shopping sales
- Lifestyle upgrades
- Gifts and celebrations

## The Traditional Approach and Its Problems

Most financial advice suggests keeping 3-6 months of expenses in a savings account. While this is good advice, the problem is accessibility. When your emergency fund sits in a regular savings account, it's too easy to rationalize using it for non-emergencies.

## Building a Sustainable Emergency Fund

### Step 1: Start Small
Don't aim for the full 3-6 months immediately. Start with a goal of ₦100,000 or one month of expenses, whichever is smaller.

### Step 2: Automate the Process
Set up automatic transfers to your emergency fund. Treat it like a non-negotiable bill.

### Step 3: Create Barriers to Access
This is where most people fail. Your emergency fund should be accessible enough for real emergencies but difficult enough to access that you won't use it impulsively.

### Step 4: Separate Emergency Funds by Purpose
Consider having multiple emergency funds:
- Medical emergencies
- Job loss
- Home repairs
- Car repairs

## The Planmoni Approach

Using Planmoni for your emergency fund creates the perfect balance:

1. **Accessibility**: The emergency withdrawal feature ensures you can access funds when truly needed
2. **Barriers**: The 72-hour cooldown period prevents impulsive decisions
3. **Growth**: Your fund can be scheduled to grow over time through regular additions
4. **Peace of Mind**: Knowing the money is there but not easily accessible

## Maintaining Your Emergency Fund

Once built, maintaining your emergency fund requires:
- Replenishing it after any use
- Adjusting the amount as your expenses change
- Regular reviews to ensure it meets your needs
- Resistance to lifestyle inflation

Remember, an emergency fund isn't an investment—it's insurance. The goal isn't to maximize returns but to provide security and peace of mind.`,
    slug: 'sustainable-emergency-fund'
  }
];

// Blog data management
class BlogDataManager {
  private static instance: BlogDataManager;
  private posts: BlogPost[] = [];

  private constructor() {
    this.loadPosts();
  }

  public static getInstance(): BlogDataManager {
    if (!BlogDataManager.instance) {
      BlogDataManager.instance = new BlogDataManager();
    }
    return BlogDataManager.instance;
  }

  private loadPosts(): void {
    const savedPosts = localStorage.getItem('planmoni-blog-posts');
    if (savedPosts) {
      try {
        this.posts = JSON.parse(savedPosts);
      } catch (error) {
        console.error('Error loading blog posts from localStorage:', error);
        this.posts = [...initialBlogPosts];
        this.savePosts();
      }
    } else {
      this.posts = [...initialBlogPosts];
      this.savePosts();
    }
  }

  private savePosts(): void {
    try {
      localStorage.setItem('planmoni-blog-posts', JSON.stringify(this.posts));
    } catch (error) {
      console.error('Error saving blog posts to localStorage:', error);
    }
  }

  public getAllPosts(): BlogPost[] {
    return [...this.posts];
  }

  public getPublishedPosts(): BlogPost[] {
    return this.posts.filter(post => post.status === 'published');
  }

  public getPostById(id: string): BlogPost | undefined {
    return this.posts.find(post => post.id === id);
  }

  public getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(post => post.slug === slug);
  }

  public addPost(post: Omit<BlogPost, 'id'>): BlogPost {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
    };
    this.posts.unshift(newPost);
    this.savePosts();
    return newPost;
  }

  public updatePost(id: string, updates: Partial<BlogPost>): BlogPost | null {
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) return null;

    this.posts[index] = { ...this.posts[index], ...updates };
    this.savePosts();
    return this.posts[index];
  }

  public deletePost(id: string): boolean {
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) return false;

    this.posts.splice(index, 1);
    this.savePosts();
    return true;
  }

  public getPostsByCategory(category: string): BlogPost[] {
    return this.posts.filter(post => post.category === category);
  }

  public searchPosts(query: string): BlogPost[] {
    const lowercaseQuery = query.toLowerCase();
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content?.toLowerCase().includes(lowercaseQuery)
    );
  }
}

export const blogDataManager = BlogDataManager.getInstance();
export default blogDataManager;