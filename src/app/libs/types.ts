export interface Course {
  id?: number;
  name: string;
  description: string;
  duration: string;
  level: string;
  price: number;
}

export interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
  success: string | null;
}
