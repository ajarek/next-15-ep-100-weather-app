
export const changeCityToGeographicData = async (city: string) => {
  const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`, {cache: 'no-store'});
  const data = await res.json();
  console.log('API response:', data);
  return {
    latitude: data[0]?.lat || 0,
    longitude: data[0]?.lon || 0,
    city: data[0]?.display_name.split(',')[0] || city,
    countryName: data[0]?.display_name.split(',').slice(-1)[0].trim() || '',
  };
}


