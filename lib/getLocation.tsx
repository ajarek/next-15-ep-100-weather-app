export const getLocation = async ({latitude, longitude}: {latitude: number, longitude: number}) => {
  const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
  const data = await res.json();
  return data;
}