

export const switchWeatherCode = (weatherCode: number) => {
  switch (weatherCode) {
    case 0:
      return '/images/icon-sunny.webp'
    case 1:
      return '/images/icon-partly-cloudy.webp'
    case 2:
      return '/images/icon-overcast.webp'
    case 3:
      return '/images/icon-overcast.webp'
    case 45:
      return '/images/icon-fog.webp'
    case 48:
      return '/images/icon-fog.webp'
    case 51:
      return '/images/icon-drizzle.webp'
    case 53:
      return '/images/icon-drizzle.webp'
    case 55:
      return '/images/icon-drizzle.webp'
    case 61:
      return '/images/icon-rain.webp'
    case 62:
      return '/images/icon-rain.webp'
    case 63:
      return '/images/icon-rain.webp'
    case 71:
      return '/images/icon-snow.webp'
    case 72:
      return '/images/icon-snow.webp'
    case 73:
      return '/images/icon-snow.webp'
    case 95:
      return '/images/icon-storm.webp'
    case 96:
      return '/images/icon-storm.webp'
    case 99:
      return '/images/icon-storm.webp'
    default:
      return '/images/icon-sunny.webp'
    
  }
}

