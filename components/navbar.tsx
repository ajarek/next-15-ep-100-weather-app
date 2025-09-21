import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className='w-full max-w-[1216px] h-full min-h-[43px] flex items-center justify-between  '> 
      <div>
        <Image src='/images/logo.svg' alt='logo' width={197} height={40}/>
      </div>
      <div className='flex items-center gap-4'>
        <Image src='/images/icon-units.svg' alt='units' width={16} height={16}/>
        <select className='text-[19px] bg-Neutral_900' name="select">
          <option value="">Select</option>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
    </nav>
  )
}

export default Navbar