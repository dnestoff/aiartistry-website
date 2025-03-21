import { component$, useSignal, useTask$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { calculateTimeSavings, calculateROI, calculatePaybackPeriod, formatCurrency } from './calculator';
import type { ROICalculation } from './types';
import { useStore } from '@builder.io/qwik';
import { PropFunction } from '@builder.io/qwik';

interface CalculatorInputs {
  teamSize: number;
  avgSalary: number;
  weeklyHours: number;
  trainingCost: number;
  timeSavingsPercent: number;
}

// Use constants for magic numbers
const CONSTANTS = {
  WORK_HOURS_PER_WEEK: 40,
  WEEKS_PER_YEAR: 52,
  MONTHS_PER_YEAR: 12,
} as const;

// Calculate results outside of the component to prevent rendering too often
const calculateResults = (inputs: CalculatorInputs): ROICalculation => {
  const annualHoursSaved = calculateTimeSavings(
    inputs.teamSize,
    inputs.weeklyHours,
    inputs.timeSavingsPercent
  );
  
  const hourlyRate = inputs.avgSalary / (CONSTANTS.WEEKS_PER_YEAR * CONSTANTS.WORK_HOURS_PER_WEEK);
  const annualCostSavings = annualHoursSaved * hourlyRate;
  const totalInvestment = inputs.trainingCost * inputs.teamSize;
  const roi = calculateROI(annualCostSavings, totalInvestment);
  const paybackPeriods = calculatePaybackPeriod(annualCostSavings / CONSTANTS.MONTHS_PER_YEAR, totalInvestment);
  
  return {
    annualHoursSaved,
    annualCostSavings,
    roi,
    paybackPeriods,
  };
};

const validateInputs = (inputs: CalculatorInputs): string[] => {
  const errors: string[] = [];
  if (inputs.teamSize < 5) errors.push('Team size must be at least 5');
  if (inputs.avgSalary < 40000) errors.push('Average salary must be at least $40,000');
  if (inputs.weeklyHours < 1) errors.push('Weekly hours must be at least 1');
  if (inputs.trainingCost < 500) errors.push('Training cost must be at least $500');
  if (![20, 35].includes(inputs.timeSavingsPercent)) errors.push('Invalid time savings percentage');
  return errors;
};

const ResultCard = component$<{
  title: string;
  value: string | number;
  theme: 'blue' | 'green' | 'purple' | 'orange';
}>((props) => (
  <div class={`bg-${props.theme}-50 p-4 rounded-lg`} role="region" aria-label={props.title}>
    <h3 class={`text-lg font-medium text-${props.theme}-900 mb-2`}>{props.title}</h3>
    <p class={`text-3xl font-bold text-${props.theme}-600`}>{props.value}</p>
  </div>
));

const RangeInput = component$<{
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange$: PropFunction<(value: number) => void>;
}>((props) => {
  // Move the value access outside the serializable function
  const onChange$ = $(async (ev: Event) => {
    const value = (ev.target as HTMLInputElement).valueAsNumber;
    await props.onChange$(value);
  });

  return (
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
        {props.label}: {props.unit ? `${props.value.toLocaleString()}${props.unit}` : props.value}
      </label>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange$={onChange$}
        class="w-full"
        aria-label={props.label}
        aria-valuemin={props.min}
        aria-valuemax={props.max}
        aria-valuenow={props.value}
      />
    </div>
  );
});

const LoadingOverlay = component$(() => (
  <div 
    class="absolute inset-0 bg-white/50 flex items-center justify-center" 
    role="alert" 
    aria-busy="true"
  >
    <div class="text-blue-600">Calculating...</div>
  </div>
));

export default component$(() => {
  const store = useStore<CalculatorInputs>({
    teamSize: 10,
    avgSalary: 85000,
    weeklyHours: 10,
    trainingCost: 1500,
    timeSavingsPercent: 20,
  });
  
  const results = useStore<ROICalculation>({
    annualHoursSaved: 0,
    annualCostSavings: 0,
    roi: 0,
    paybackPeriods: 0,
  });

  const errors = useSignal<string[]>([]);
  const isCalculating = useSignal(false);

  // Add this task for initial calculation
  useTask$(() => {
    const calculated = calculateResults(store);
    Object.assign(results, calculated);
  });

  // Keep existing task for updates
  useTask$(({ track, cleanup }) => {
    track(() => store.teamSize);
    track(() => store.avgSalary);
    track(() => store.weeklyHours);
    track(() => store.trainingCost);
    track(() => store.timeSavingsPercent);

    const timeoutId = setTimeout(() => {
      isCalculating.value = true;
      try {
        const validationErrors = validateInputs(store);
        errors.value = validationErrors;
        if (validationErrors.length === 0) {
          const calculated = calculateResults(store);
          Object.assign(results, calculated);
        }
      } finally {
        isCalculating.value = false;
      }
    }, 300);

    cleanup(() => clearTimeout(timeoutId));
  });

  return (
    <form preventdefault:submit class="min-h-screen bg-gray-50 py-12 px-4">
      {/* Show errors if any */}
      {errors.value.length > 0 && (
        <div class="bg-red-50 p-4 rounded-lg mb-4">
          <ul class="list-disc pl-4">
            {errors.value.map((error) => (
              <li key={error} class="text-red-700">{error}</li>
            ))}
          </ul>
        </div>
      )}
      
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
                    <RangeInput
                      label="Team Size"
                      value={store.teamSize}
                      min={5}
                      max={500}
                      onChange$={(value: number) => store.teamSize = value}
                    />
                  </div>

                  <div>
                    <RangeInput
                      label="Average Annual Salary"
                      value={store.avgSalary}
                      min={40000}
                      max={200000}
                      step={5000}
                      onChange$={(value: number) => store.avgSalary = value}
                      unit="$"
                    />
                  </div>

                  <div>
                    <RangeInput
                      label="Weekly Hours on AI-Automatable Tasks"
                      value={store.weeklyHours}
                      min={1}
                      max={40}
                      onChange$={(value: number) => store.weeklyHours = value}
                      unit=" hours"
                    />
                  </div>

                  <div>
                    <RangeInput
                      label="Training Cost per Employee"
                      value={store.trainingCost}
                      min={500}
                      max={5000}
                      step={100}
                      onChange$={(value: number) => store.trainingCost = value}
                      unit="$"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Expected Time Savings: {store.timeSavingsPercent}%
                    </label>
                    <div class="space-x-4">
                      <button
                        type="button"
                        aria-pressed={store.timeSavingsPercent === 20}
                        onClick$={() => store.timeSavingsPercent = 20}
                        class={`px-4 py-2 rounded ${
                          store.timeSavingsPercent === 20
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        Basic (20%)
                      </button>
                      <button
                        type="button"
                        aria-pressed={store.timeSavingsPercent === 35}
                        onClick$={() => store.timeSavingsPercent = 35}
                        class={`px-4 py-2 rounded ${
                          store.timeSavingsPercent === 35
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
              <ResultCard title="Annual Hours Saved" value={Math.round(results.annualHoursSaved).toLocaleString()} theme="blue" />
              <ResultCard title="Annual Cost Savings" value={formatCurrency(results.annualCostSavings)} theme="green" />
              <ResultCard title="ROI" value={Math.round(results.roi)} theme="purple" />
              <ResultCard title="Payback Period" value={results.paybackPeriods === Infinity ? 'N/A' : `${results.paybackPeriods.toFixed(1)} months`} theme="orange" />
            </div>

            <div class="mt-8">
              <button
                type="submit"
                class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {isCalculating.value && (
        <LoadingOverlay />
      )}
    </form>
  );
});

export const head: DocumentHead = {
  title: 'AI Training ROI Calculator',
  meta: [
    {
      name: 'description',
      content: 'Calculate the potential return on investment for AI training initiatives for your team',
    },
    {
      name: 'keywords',
      content: 'ROI calculator, AI training, team productivity, cost savings',
    },
    {
      property: 'og:title',
      content: 'AI Training ROI Calculator',
    },
    {
      property: 'og:description',
      content: 'Calculate the potential return on investment for AI training initiatives for your team',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
};