export interface TableRow {
  key: string;
  badge: string;
  totalGoals: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  completionRate: number; // percentage
}
