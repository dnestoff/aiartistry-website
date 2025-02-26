export interface ROICalculation {
  annualHoursSaved: number;
  annualCostSavings: number;
  roi: number;
  paybackPeriods: number;
}

export interface ROIInputs {
  teamSize: number;
  avgSalary: number;
  weeklyHours: number;
  trainingCost: number;
  timeSavingsPercent: number;
} 