import Link from 'next/link'
import Image from 'next/image'
import Planrr from '@/public/planrrrr.png'
import { AuthModal } from './AuthModal'
export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between ">
     <Link href="/" className='flex items-center'>
       {/* <Image src={Planrr} alt='Logo' className='size-20'/> */}
       <h4 className=' text-3xl font-semibold'>Plan<span className='text-primary'>RR</span></h4>
     </Link>
     <AuthModal/>
    </div>
  )
}