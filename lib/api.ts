

export const apiWeather = async ({latitude, longitude}: {latitude: number, longitude: number}) => {
const url =
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&models=icon_seamless&timezone=Europe%2FBerlin&start_date=${new Date().toISOString().split('T')[0]}&end_date=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}&current=relative_humidity_2m,apparent_temperature,rain,temperature_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min`

  const responses = await fetch(url)
  const data = await responses.json()
  return data
}
