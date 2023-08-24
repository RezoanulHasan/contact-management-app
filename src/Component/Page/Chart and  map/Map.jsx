import React from 'react';
import { useWorldwideData, useCountryData, useGraphData } from '../../Api/Api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Spinner from '../../Shared/Spinner/Spinner';

const Map = () => {
  const worldwideDataQuery = useWorldwideData();
  const countryDataQuery = useCountryData();
  const graphDataQuery =  useGraphData();

  if (worldwideDataQuery.isLoading || countryDataQuery.isLoading || graphDataQuery.isLoading) {
    return <Spinner></Spinner> ;
  }

  if (worldwideDataQuery.isError || countryDataQuery.isError || graphDataQuery.isError) {
    return <p>Error loading data</p>;
  }

const countryData = countryDataQuery.data;


  // Set up Leaflet map data for markers
  const mapMarkers = countryData.map((country) => ({
    country: country.country,
    lat: country.countryInfo.lat,
    long: country.countryInfo.long,
    active: country.active,
    recovered: country.recovered,
    deaths: country.deaths,
  }));

  return (
    <>
    <div>

      <h1 className='text-xl font-bold text-center text-red-700'> This map show with markers that indicates the country name, total number
of active, recovered cases and deaths in that particular country as a popup. </h1>
      <p>..</p>
    </div>
    <div className="p-4  mt-10">

      {/* Leaflet Map */}
      <MapContainer style={{ height: '400px', width: '100%' }} center={[20, 0]} zoom={2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {mapMarkers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.long]}>
            <Popup>
              <div>
                <h2>{marker.country}</h2>
                <p>Active: {marker.active}</p>
                <p>Recovered: {marker.recovered}</p>
                <p>Deaths: {marker.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    </>

  );
};

export default Map;
