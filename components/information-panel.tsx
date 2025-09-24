import Image from 'next/image'
import React from 'react'
const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};
import { apiWeather } from '@/lib/api'
import { switchWeatherCode } from '@/lib/switchWaterCode';
import { getLocation } from '@/lib/getLocation';


const InformationPanel = async () => {
  const weather = await apiWeather()
  const location = await getLocation({latitude: weather.latitude, longitude: weather.longitude})
  console.log(weather)
  return (
    <div className='w-full  grid grid-cols-[800px_1fr]  gap-[32px]'>
      <div className='w-[800px] flex flex-col gap-[32px]'>
        <div className='relative w-full max-w-[800px] h-[286px] '>
          <Image
            src='/images/bg-today-large.svg'
            alt='bg'
            fill
            sizes='(min-width: 800px) 50vw, 100vw'
            className='object-cover '
          />
          <div className='absolute left-[24px] top-[109px] '>
            <div className='w-full max-w[460px] h-[68px] flex flex-col items-start gap-[12px]'>
              <h1 className='text-[28px] font-semibold '>{location.locality}, {location.country}</h1>
              <p className='text-[18px]'>{new Date(weather.current_weather.time).toLocaleString('en-EN', options)}</p>
            </div>
          </div>
          <div className='absolute right-[24px] top-[83px] '>
            <div className='w-[292px] h-[120px] flex  items-center justify-end gap-[20px]'>
              <Image
                src={switchWeatherCode(weather.current_weather.weathercode)}
                alt='sunny'
                width={120}
                height={120}
              />
              <h1 className='text-[96px] font-semibold '>{weather.current_weather.temperature}°</h1>
            </div>
          </div>
        </div>
        <div className='w-[800px] h-[118px]  flex items-center gap-[24px] '>
          <div className='w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] gap-[24px] flex flex-col '>
            <p className='text-[18px]'>Feels Like</p>
            <h2 className='text-[32px]'>64°</h2>
          </div>
          <div className='w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] gap-[24px] flex flex-col '>
            <p className='text-[18px]'>Humidity</p>
            <h2 className='text-[32px]'>46%</h2>
          </div>
          <div className='w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] gap-[24px] flex flex-col '>
            <p className='text-[18px]'>Wind</p>
            <h2 className='text-[32px]'>9 mph</h2>
          </div>
          <div className='w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] gap-[24px] flex flex-col '>
            <p className='text-[18px]'>Precipitation</p>
            <h2 className='text-[32px]'>0 in</h2>
          </div>
        </div>

        <h2 className='text-[20px] pl-2'>Daily forecast</h2>

        <div className='w-full max-w-[800px] h-[165px]  flex items-center gap-[16px] '>
          <div className='w-[100px] h-[165px] bg-Neutral_800 rounded-[12px] px-[10px] py-[16px] gap-[16px] flex flex-col items-center '>
            <p className='text-[18px]'>Tue</p>
            <Image
              src='/images/icon-partly-cloudy.webp'
              alt='sunny'
              width={60}
              height={60}
            />
            <div className='w-[81px] h-[19px] flex place-items-center justify-between'>
              <div className='text-[]'>68°</div>
              <div className='text-[]'>57°</div>
            </div>
          </div>
          <div className='w-[100px] h-[165px] bg-Neutral_800 rounded-[12px] px-[10px] py-[16px] gap-[16px] flex flex-col items-center '>
            <p className='text-[18px]'>Wed</p>
            <Image
              src='/images/icon-sunny.webp'
              alt='sunny'
              width={60}
              height={60}
            />
            <div className='w-[81px] h-[19px] flex place-items-center justify-between'>
              <div className='text-[]'>68°</div>
              <div className='text-[]'>57°</div>
            </div>
          </div>
          <div className='w-[100px] h-[165px] bg-Neutral_800 rounded-[12px] px-[10px] py-[16px] gap-[16px] flex flex-col items-center '>
            <p className='text-[18px]'>Thu</p>
            <Image
              src='/images/icon-drizzle.webp'
              alt='sunny'
              width={60}
              height={60}
            />
            <div className='w-[81px] h-[19px] flex place-items-center justify-between'>
              <div className='text-[]'>68°</div>
              <div className='text-[]'>57°</div>
            </div>
          </div>
          <div className='w-[100px] h-[165px] bg-Neutral_800 rounded-[12px] px-[10px] py-[16px] gap-[16px] flex flex-col items-center '>
            <p className='text-[18px]'>Fri</p>
            <Image
              src='/images/icon-fog.webp'
              alt='sunny'
              width={60}
              height={60}
            />
            <div className='w-[81px] h-[19px] flex place-items-center justify-between'>
              <div className='text-[]'>68°</div>
              <div className='text-[]'>57°</div>
            </div>
          </div>
          <div className='w-[100px] h-[165px] bg-Neutral_800 rounded-[12px] px-[10px] py-[16px] gap-[16px] flex flex-col items-center '>
            <p className='text-[18px]'>Sat</p>
            <Image
              src='/images/icon-overcast.webp'
              alt='sunny'
              width={60}
              height={60}
            />
            <div className='w-[81px] h-[19px] flex place-items-center justify-between'>
              <div className='text-[]'>68°</div>
              <div className='text-[]'>57°</div>
            </div>
          </div>
          <div className='w-[100px] h-[165px] bg-Neutral_800 rounded-[12px] px-[10px] py-[16px] gap-[16px] flex flex-col items-center '>
            <p className='text-[18px]'>Sun</p>
            <Image
              src='/images/icon-snow.webp'
              alt='sunny'
              width={60}
              height={60}
            />
            <div className='w-[81px] h-[19px] flex place-items-center justify-between'>
              <div className='text-[]'>68°</div>
              <div className='text-[]'>57°</div>
            </div>
          </div>
          <div className='w-[100px] h-[165px] bg-Neutral_800 rounded-[12px] px-[10px] py-[16px] gap-[16px] flex flex-col items-center '>
            <p className='text-[18px]'>Mon</p>
            <Image
              src='/images/icon-storm.webp'
              alt='sunny'
              width={60}
              height={60}
            />
            <div className='w-[81px] h-[19px] flex place-items-center justify-between'>
              <div className='text-[]'>68°</div>
              <div className='text-[]'>57°</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[384px] h-[693px] bg-Neutral_800 rounded-[20px] flex flex-col gap-[18px] p-[24px] '>
        <div className='w-full h-[37px] flex items-center justify-between  '>
          <h2 className='text-[20px]'>Hourly forecast</h2>
          <select
            className='h-[37px] text-[16px] bg-Neutral_600 px-[16px] rounded-[8px]'
            name='select'
          >
            <option value='tuesday'>Tuesday</option>
            <option value='wednesday'>Wednesday</option>
            <option value='thursday'>Thursday</option>
            <option value='friday'>Friday</option>
            <option value='saturday'>Saturday</option>
            <option value='sunday'>Sunday</option>
            <option value='monday'>Monday</option>
          </select>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <div className='w-[336px] h-[60px] bg-Neutral_600 flex items-center justify-between px-[24px] rounded-[8px]'>
            <div className='flex items-center gap-[8px]'>
              <Image
                src='/images/icon-partly-cloudy.webp'
                alt='sunny'
                width={40}
                height={40}
              />
              <p>3 PM</p>
            </div>
            <div>68°</div>
          </div>
          <div className='w-[336px] h-[60px] bg-Neutral_600 flex items-center justify-between px-[24px] rounded-[8px]'>
            <div className='flex items-center gap-[8px]'>
              <Image
                src='/images/icon-partly-cloudy.webp'
                alt='sunny'
                width={40}
                height={40}
              />
              <p>3 PM</p>
            </div>
            <div>68°</div>
          </div>
          <div className='w-[336px] h-[60px] bg-Neutral_600 flex items-center justify-between px-[24px] rounded-[8px]'>
            <div className='flex items-center gap-[8px]'>
              <Image
                src='/images/icon-partly-cloudy.webp'
                alt='sunny'
                width={40}
                height={40}
              />
              <p>3 PM</p>
            </div>
            <div>68°</div>
          </div>
          <div className='w-[336px] h-[60px] bg-Neutral_600 flex items-center justify-between px-[24px] rounded-[8px]'>
            <div className='flex items-center gap-[8px]'>
              <Image
                src='/images/icon-partly-cloudy.webp'
                alt='sunny'
                width={40}
                height={40}
              />
              <p>3 PM</p>
            </div>
            <div>68°</div>
          </div>
          <div className='w-[336px] h-[60px] bg-Neutral_600 flex items-center justify-between px-[24px] rounded-[8px]'>
            <div className='flex items-center gap-[8px]'>
              <Image
                src='/images/icon-partly-cloudy.webp'
                alt='sunny'
                width={40}
                height={40}
              />
              <p>3 PM</p>
            </div>
            <div>68°</div>
          </div>
          <div className='w-[336px] h-[60px] bg-Neutral_600 flex items-center justify-between px-[24px] rounded-[8px]'>
            <div className='flex items-center gap-[8px]'>
              <Image
                src='/images/icon-partly-cloudy.webp'
                alt='sunny'
                width={40}
                height={40}
              />
              <p>3 PM</p>
            </div>
            <div>68°</div>
          </div>
          <div className='w-[336px] h-[60px] bg-Neutral_600 flex items-center justify-between px-[24px] rounded-[8px]'>
            <div className='flex items-center gap-[8px]'>
              <Image
                src='/images/icon-partly-cloudy.webp'
                alt='sunny'
                width={40}
                height={40}
              />
              <p>3 PM</p>
            </div>
            <div>68°</div>
          </div>
          <div className='w-[336px] h-[60px] bg-Neutral_600 flex items-center justify-between px-[24px] rounded-[8px]'>
            <div className='flex items-center gap-[8px]'>
              <Image
                src='/images/icon-partly-cloudy.webp'
                alt='sunny'
                width={40}
                height={40}
              />
              <p>3 PM</p>
            </div>
            <div>68°</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationPanel
