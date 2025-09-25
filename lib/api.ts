

export const apiWeather = async ({latitude, longitude}: {latitude: number, longitude: number}) => {
const url =
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&models=icon_seamless&timezone=Europe%2FBerlin&start_date=2025-09-17&end_date=2025-10-01&current_weather=true`

  const responses = await fetch(url)
  const data = await responses.json()
  return data
}
