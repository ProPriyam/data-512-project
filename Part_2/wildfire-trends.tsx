import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const rawData = [
  { year: 2005, patients: 4373, fires: 711, acres: 2903630.9, smoke: 80.2 },
  { year: 2006, patients: 4118, fires: 896, acres: 3820635.01, smoke: 86.63 },
  { year: 2007, patients: 4268, fires: 655, acres: 2955908, smoke: 51.79 },
  { year: 2008, patients: 4850, fires: 542, acres: 1509071.64, smoke: 39.88 },
  { year: 2009, patients: 5463, fires: 519, acres: 1033175.36, smoke: 51.91 },
  { year: 2010, patients: 5315, fires: 494, acres: 849927.46, smoke: 32.88 },
  { year: 2011, patients: 4816, fires: 857, acres: 2849854.84, smoke: 74.07 },
  { year: 2012, patients: 4540, fires: 748, acres: 2665982.86, smoke: 57.35 },
  { year: 2013, patients: 3646, fires: 515, acres: 1175374.91, smoke: 37.12 },
  { year: 2014, patients: 3409, fires: 362, acres: 507862.82, smoke: 27.14 },
  { year: 2015, patients: 2979, fires: 447, acres: 572036.83, smoke: 30.53 },
  { year: 2016, patients: 2180, fires: 709, acres: 1536985.77, smoke: 58.57 },
  { year: 2017, patients: 2129, fires: 959, acres: 2829998.63, smoke: 69.39 },
  { year: 2018, patients: 2095, fires: 835, acres: 2855560.83, smoke: 55.87 },
  { year: 2019, patients: 1835, fires: 766, acres: 914592.16, smoke: 54.51 },
  { year: 2020, patients: 1142, fires: 1617, acres: 4018536.32, smoke: 100.74 }
];

// Function to calculate mean
const calculateMean = values => values.reduce((sum, val) => sum + val, 0) / values.length;

// Function to calculate standard deviation
const calculateStdDev = values => {
  const mean = calculateMean(values);
  const squareDiffs = values.map(value => Math.pow(value - mean, 2));
  const avgSquareDiff = calculateMean(squareDiffs);
  return Math.sqrt(avgSquareDiff);
};

// Function to standardize values
const standardize = values => {
  const mean = calculateMean(values);
  const stdDev = calculateStdDev(values);
  return values.map(value => (value - mean) / stdDev);
};

// Standardize each metric
const patientsStd = standardize(rawData.map(d => d.patients));
const firesStd = standardize(rawData.map(d => d.fires));
const acresStd = standardize(rawData.map(d => d.acres));
const smokeStd = standardize(rawData.map(d => d.smoke));

// Create standardized dataset
const data = rawData.map((d, i) => ({
  year: d.year,
  patientsStd: patientsStd[i],
  firesStd: firesStd[i],
  acresStd: acresStd[i],
  smokeStd: smokeStd[i]
}));

const WildfireTrends = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Standardized Wildfire Impact Trends (2005-2020)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-500 mb-4">
          All metrics are standardized (z-scores) to show relative changes over time
        </div>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis 
                label={{ value: 'Standard Deviations from Mean', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value) => value.toFixed(2) + " σ"}
                labelFormatter={(year) => `Year: ${year}`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="patientsStd" 
                stroke="#8884d8" 
                name="Patients"
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="firesStd" 
                stroke="#82ca9d" 
                name="Fires"
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="acresStd" 
                stroke="#ffc658" 
                name="Acres Burned"
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="smokeStd" 
                stroke="#ff7300" 
                name="Smoke Impact"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WildfireTrends;
