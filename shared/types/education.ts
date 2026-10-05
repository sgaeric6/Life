export interface Job {
  id: string;
  playerId: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  level: number; // 1-10
  startDate: Date;
}

export interface Course {
  id: string;
  name: string;
  cost: number;
  duration: number; // days
  level: 'beginner' | 'intermediate' | 'advanced';
  skillType: string;
}

export interface Enrollment {
  id: string;
  playerId: string;
  courseId: string;
  progress: number; // 0-100
  startDate: Date;
  completionDate?: Date;
}
