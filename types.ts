export enum JobType {
  REGULAR = 'Regular',
  PRE_CHARGED = 'Pre-Charged'
}

export enum JobCategory {
  ENGINEERING = 'Engineering',
  MARKETING = 'Marketing',
  SALES = 'Sales',
  DESIGN = 'Design',
  FINANCE = 'Finance',
  HR = 'Human Resources',
  OTHER = 'Other'
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  category: JobCategory;
  min_salary: number;
  max_salary: number;
  description: string;
  posted_at: string; // ISO date string
  employer_id?: string;
  is_active: boolean;
}

export interface FilterState {
  keyword: string;
  categories: JobCategory[];
  minSalary: number;
  maxSalary: number;
  jobType: JobType | 'All';
}

export interface UserProfile {
  id: string;
  email: string;
  role: 'seeker' | 'employer';
}