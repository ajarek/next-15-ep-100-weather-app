import InformationPanel from '@/components/information-panel'
import SearchCity from "@/components/search-city";

const Home = async ({  searchParams,}:{searchParams: Promise<{ name: string }>}) => {
 
   const { name } = await searchParams as { name: string }
   console.log(name)
  return (
    <div className='w-[1216px] h-[715px] flex flex-col items-center justify-start  mt-[calc(104px-58px)] gap-8 '>
      <SearchCity query="name"/>
      <InformationPanel city={name}/>
    </div>
  )
}

export default Home