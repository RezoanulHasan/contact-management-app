
import { useQuery } from 'react-query';

const fetchWorldwideData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/all');
  return response.json();
};

const fetchCountryData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  return response.json();
};

const fetchGraphData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return response.json();
};

export const useWorldwideData = () => {
  return useQuery('worldwideData', fetchWorldwideData);
};

export const useCountryData = () => {
  return useQuery('countryData', fetchCountryData);
};

export const useGraphData = () => {
  return useQuery('graphData', fetchGraphData);
};





