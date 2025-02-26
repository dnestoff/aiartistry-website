import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { calculateTimeSavings, calculateROI, calculatePaybackPeriod, formatCurrency } from './calculator';
import type { ROICalculation } from './types';

export default component$(() => {
  const teamSize = useSignal(10);
  const avgSalary = useSignal(85000);
  const weeklyHours = useSignal(10);
  const trainingCost = useSignal(1500);
  const timeSavingsPercent = useSignal(20);
  
  const results = useSignal<ROICalculation>({
    annualHoursSaved: 0,
    annualCostSavings: 0,
    roi: 0,
    paybackPeriods: 0,
  });

  // Recalculate whenever inputs change
  useTask$(({ track }) => {
    track(() => teamSize.value);
    track(() => avgSalary.value);
    track(() => weeklyHours.value);
    track(() => trainingCost.value);
    track(() => timeSavingsPercent.value);

    // Calculate annual hours saved
    const annualHoursSaved = calculateTimeSavings(
      teamSize.value,
      weeklyHours.value,
      timeSavingsPercent.value
    );

    // Calculate hourly rate and cost savings
    const hourlyRate = avgSalary.value / (52 * 40); // Assuming 40-hour work week
    const annualCostSavings = annualHoursSaved * hourlyRate;
    
    // Calculate total investment
    const totalInvestment = trainingCost.value * teamSize.value;
    
    // Calculate ROI
    const roi = calculateROI(annualCostSavings, totalInvestment);
    
    // Calculate payback period
    const monthlySavings = annualCostSavings / 12;
    const paybackPeriods = calculatePaybackPeriod(monthlySavings, totalInvestment);

    results.value = {
      annualHoursSaved,
      annualCostSavings,
      roi,
      paybackPeriods,
    };
  });

  return (
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-8">
            AI Team Training ROI Calculator
          </h1>
          <p class="text-xl text-gray-600 mb-12">
            Calculate the potential return on investment for AI training initiatives
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div class="bg-white rounded-lg shadow p-6 col-span-1">
            <div class="max-w-4xl">
              <h2 class="text-2xl font-semibold text-gray-900 mb-6">Team Information</h2>
              
              <div class="space-y-6">
                <div class="grid grid-cols-5 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Team Size: {teamSize.value} members
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="500"
                      value={teamSize.value}
                      onChange$={(ev) => teamSize.value = +(ev.target as HTMLInputElement).value}
                      class="w-full"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Average Annual Salary: ${avgSalary.value.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="40000"
                      max="200000"
                      step="5000"
                      value={avgSalary.value}
                      onChange$={(ev) => avgSalary.value = +(ev.target as HTMLInputElement).value}
                      class="w-full"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Weekly Hours on AI-Automatable Tasks: {weeklyHours.value} hours
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      value={weeklyHours.value}
                      onChange$={(ev) => weeklyHours.value = +(ev.target as HTMLInputElement).value}
                      class="w-full"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Training Cost per Employee: ${trainingCost.value.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="500"
                      max="5000"
                      step="100"
                      value={trainingCost.value}
                      onChange$={(ev) => trainingCost.value = +(ev.target as HTMLInputElement).value}
                      class="w-full"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Expected Time Savings: {timeSavingsPercent.value}%
                    </label>
                    <div class="space-x-4">
                      <button
                        onClick$={() => timeSavingsPercent.value = 20}
                        class={`px-4 py-2 rounded ${
                          timeSavingsPercent.value === 20
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        Basic (20%)
                      </button>
                      <button
                        onClick$={() => timeSavingsPercent.value = 35}
                        class={`px-4 py-2 rounded ${
                          timeSavingsPercent.value === 35
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        Advanced (35%)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div class="bg-white rounded-lg shadow p-6 col-span-2">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">ROI Analysis</h2>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="text-lg font-medium text-blue-900 mb-2">Annual Hours Saved</h3>
                <p class="text-3xl font-bold text-blue-600">
                  {Math.round(results.value.annualHoursSaved).toLocaleString()} hours
                </p>
              </div>

              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="text-lg font-medium text-green-900 mb-2">Annual Cost Savings</h3>
                <p class="text-3xl font-bold text-green-600">
                  ${Math.round(results.value.annualCostSavings).toLocaleString()}
                </p>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg">
                <h3 class="text-lg font-medium text-purple-900 mb-2">ROI</h3>
                <p class="text-3xl font-bold text-purple-600">
                  {Math.round(results.value.roi)}%
                </p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h3 class="text-lg font-medium text-orange-900 mb-2">Payback Period</h3>
                <p class="text-3xl font-bold text-orange-600">
                  {results.value.paybackPeriods === Infinity 
                    ? 'N/A' 
                    : `${results.value.paybackPeriods.toFixed(1)} months`}
                </p>
              </div>
            </div>

            <div class="mt-8">
              <button class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'AI Training ROI Calculator',
  meta: [
    {
      name: 'description',
      content: 'Calculate the potential return on investment for AI training initiatives for your team',
    },
  ],
};