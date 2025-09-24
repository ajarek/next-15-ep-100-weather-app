const url =
  'https://api.open-meteo.com/v1/forecast?latitude=54.175919&longitude=15.583267&hourly=temperature_2m&models=icon_seamless&timezone=Europe%2FBerlin&start_date=2025-09-17&end_date=2025-10-01&current_weather=true'

export const apiWeather = async () => {
  const responses = await fetch(url)
  const data = await responses.json()
  return data
}
