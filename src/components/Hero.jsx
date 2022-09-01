import styles from '../style'
import GetStarted  from './GetStarted'
import {discount, robot} from '../assets'


const Hero = () => (
  //dynamic classname
  <section id='home ' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16  px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt='discount' className='w-[32px] h-[32px] ' />
        <p className={`${styles.paragraph} ml-2`}>
        <span className='text-white '>Find</span>  out the best {" "}
        <span className='text-white '>Events</span> happening 
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            One Stop  <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Collaboration</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Platform.
        </h1>
        <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
          Our team ensures that there is no more end to hackathons, meetups and fun events
          around you. We allow your college societies to join hands 
          and bring out marvels just for you.
        </p>
    </div>
    <div>
      <img src={'img2.png'} alt="explore" className='invert ' />
      
    </div>
    
  </section>
)


export default Hero