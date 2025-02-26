/**
 * Calculate the annual time savings based on team size, weekly hours, and efficiency improvement
 * 
 * @param teamSize - Number of team members
 * @param weeklyHoursPerPerson - Weekly hours per person spent on tasks that could be automated
 * @param timeSavingsPercentage - Percentage of time saved through AI implementation
 * @returns Total annual hours saved across the team
 */
export const calculateTimeSavings = (
    teamSize: number,
    weeklyHoursPerPerson: number,
    timeSavingsPercentage: number
  ): number => {
    // Weekly hours across the entire team
    const totalWeeklyHours = teamSize * weeklyHoursPerPerson;
    
    // Weekly hours saved based on efficiency percentage
    const weeklyHoursSaved = totalWeeklyHours * (timeSavingsPercentage / 100);
    
    // Annual hours saved (52 weeks)
    const annualHoursSaved = weeklyHoursSaved * 52;
    
    return Math.round(annualHoursSaved);
  };
  
  /**
   * Calculate Return on Investment (ROI) as a percentage
   * 
   * @param annualBenefit - Annual financial benefit (cost savings)
   * @param investmentCost - One-time investment cost 
   * @returns ROI as a percentage
   */
  export const calculateROI = (
    annualBenefit: number,
    investmentCost: number
  ): number => {
    if (investmentCost === 0) return 0;
    
    // ROI = (Net Benefit / Cost) * 100
    // Net Benefit = Annual Benefit - Cost
    const netBenefit = annualBenefit - investmentCost;
    const roi = (netBenefit / investmentCost) * 100;
    
    return roi;
  };
  
  /**
   * Calculate the payback period in months
   * 
   * @param monthlySavings - Monthly cost savings
   * @param investmentCost - Total investment cost
   * @returns Payback period in months
   */
  export const calculatePaybackPeriod = (
    monthlySavings: number,
    investmentCost: number
  ): number => {
    if (monthlySavings === 0) return Infinity;
    
    // Simple payback period = Investment Cost / Monthly Savings
    const paybackPeriodMonths = investmentCost / monthlySavings;
    
    return paybackPeriodMonths;
  };
  
  /**
   * Generate PDF report with calculation results
   * This is a placeholder function that would be implemented with a PDF library
   * 
   * @param state - Calculator state containing all metrics
   */
  export const generatePDFReport = (state: any) => {
    console.log('PDF generation would happen here with state:', state);
    return 'pdf-report.pdf';
  };
  
  /**
   * Format large numbers with commas
   * 
   * @param value - Number to format
   * @returns Formatted string with commas
   */
  export const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('en-US').format(value);
  };
  
  /**
   * Format currency values
   * 
   * @param value - Currency value to format
   * @returns Formatted currency string
   */
  export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };