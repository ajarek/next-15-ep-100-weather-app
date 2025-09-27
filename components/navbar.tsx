import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='w-[1216px]  h-[43px] flex items-center justify-between  '>
      <div>
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={197}
          height={40}
        />
      </div>
      <div className='flex items-center gap-4'></div>
    </nav>
  )
}

export default Navbar
