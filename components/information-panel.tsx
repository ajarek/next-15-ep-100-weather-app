import Image from 'next/image'
import React from 'react'
const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}
import { apiWeather } from '@/lib/api'
import { switchWeatherCode } from '@/lib/switchWaterCode'
import { changeCityToGeographicData } from '@/lib/getLocation'

const InformationPanel = async ({ city = 'New York' }: { city: string }) => {
  const data = await changeCityToGeographicData(city)
  const weather = await apiWeather({
    latitude: data.latitude,
    longitude: data.longitude,
  })

  return (
    <div className='w-full  grid grid-cols-[800px_1fr] max-lg:grid-cols-1  gap-[32px] max-lg:gap-[16px]'>
      <div className='w-full flex flex-col gap-[32px] max-lg:gap-[16px] '>
        <div className='relative  w-[800px] h-[286px] max-lg:w-full max-lg: rounded-[20px] overflow-hidden '>
          <Image
            src='/images/bg-today-large.svg'
            alt='bg'
            fill
            sizes='(min-width: 800px) 50vw, 100vw'
            className='object-cover '
          />
          <div className='absolute left-[24px] top-[109px] max-sm:top-[50px]'>
            <div className='w-full max-w[460px] h-[68px] flex flex-col items-start gap-[12px]'>
              <h1 className='text-[28px] max-lg:text-[20px] font-semibold '>
                {data.city}, {data.countryName}
              </h1>
              <p className='text-[18px] max-lg:text-[14px] '>
                {new Date(weather?.current?.time || new Date()).toLocaleString(
                  'en-EN',
                  options
                )}
              </p>
            </div>
          </div>
          <div className='absolute right-[24px] top-[83px] max-sm:left-[24px] max-sm:top-[150px] flex items-center gap-[32px] max-lg:gap-[16px] '>
            <div className='w-[292px] h-[120px]  flex  items-center justify-end gap-[20px] max-lg:gap-[10px] '>
              <Image
                src={switchWeatherCode(weather?.current?.weathercode)}
                alt='sunny'
                width={120}
                height={120}
              />
              <h1 className='text-[96px] max-lg:text-[36px] font-semibold '>
                {weather?.current?.temperature_2m}°
              </h1>
            </div>
          </div>
        </div>
        <div className='w-[800px] h-[118px] max-lg:w-full  flex items-center gap-[24px] max-lg:gap-4 '>
          <div className='w-full max-w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] max-lg:p-4 gap-[24px] flex flex-col '>
            <p className='text-[18px] max-lg:text-[14px]'>Feels Like</p>
            <h2 className='text-[32px] max-lg:text-[20px]'>
              {weather?.current?.apparent_temperature}°
            </h2>
          </div>
          <div className='w-full max-w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] max-lg:p-4 gap-[24px] flex flex-col '>
            <p className='text-[18px] max-lg:text-[14px]'>Humidity</p>
            <h2 className='text-[32px] max-lg:text-[20px]'>
              {weather?.current?.relative_humidity_2m}%
            </h2>
          </div>
          <div className='w-full max-w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] max-lg:p-4 gap-[24px] flex flex-col '>
            <p className='text-[18px] max-lg:text-[14px]'>Wind</p>
            <h2 className='text-[32px] max-lg:text-[20px]'>
              {weather?.current?.wind_speed_10m} km/h
            </h2>
          </div>
          <div className='w-full max-w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] max-lg:p-4 gap-[24px] flex flex-col '>
            <p className='text-[18px] max-lg:text-[14px]'>Rainfall</p>
            <h2 className='text-[32px] max-lg:text-[20px]'>
              {weather?.current?.rain} in
            </h2>
          </div>
        </div>

        <h2 className='text-[20px] pl-2'>Daily forecast</h2>

        <div className='w-full max-w-[800px] max-lg:w-full h-[165px]  flex items-center gap-[16px] max-lg:gap-4 overflow-x-auto  [&::-webkit-scrollbar]:h-2  [&::-webkit-scrollbar-track]:bg-Blue_500  [&::-webkit-scrollbar-thumb]:bg-Blue_700 '>
          {/* day card */}
          {weather.daily.time
            .filter((item: string, index: number) => index !== 0)
            .map((item: string, index: number) => (
              <div
                key={index}
                className='w-[100px] h-[165px] bg-Neutral_800 rounded-[12px] px-[10px] py-[16px] gap-[16px] flex flex-col items-center '
              >
                <p className='text-[18px]'>
                  {new Date(item).toLocaleDateString('en-US', {
                    weekday: 'short',
                  })}
                </p>
                <Image
                  src={switchWeatherCode(weather.daily.weather_code[index])}
                  alt='sunny'
                  width={60}
                  height={60}
                />
                <div className='w-[81px] h-[19px] flex place-items-center justify-between'>
                  <div className='text-[]'>
                    {weather.daily.temperature_2m_max[index]}°
                  </div>
                  <div className='text-[]'>
                    {weather.daily.temperature_2m_min[index]}°
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='w-[384px] h-[693px] max-lg:w-full bg-Neutral_800 rounded-[20px] flex flex-col gap-[18px] p-[24px] max-lg:p-4 '>
        <div className='w-full h-[37px] flex items-center justify-between  '>
          <h2 className='text-[20px]'>Hourly forecast</h2>
        </div>

        <div className='flex flex-col gap-[16px] overflow-y-auto  [&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-track]:bg-Blue_500  [&::-webkit-scrollbar-thumb]:bg-Blue_700 h-full  '>
          {weather.hourly.time.map((item: Date, index: number) => (
            <div
              key={index}
              className='w-[310px] max-lg:w-full min-h-[60px] bg-Neutral_600 flex items-center justify-between px-[12px] rounded-[8px]'
            >
              <div className='flex items-center gap-[8px]'>
                <Image
                  src={switchWeatherCode(weather.hourly.weather_code[index])}
                  alt='sunny'
                  width={40}
                  height={40}
                />
                <p>{new Date(item).toLocaleString()}</p>
              </div>

              <div>{weather.hourly.temperature_2m[index]}°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InformationPanel
