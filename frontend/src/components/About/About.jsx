import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png'; 
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-[50px] flex-col lg:flex-row'>
          {/* ====================== about img =============== */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 pr-[20px]'>
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ======================================== about content ======================== */}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>Proud to be one of the nation&apos;s best</h2>
            <p className='text__para'>
              For 30 years, we have been providing the best medical care to our patients, with a commitment to the best service in a friendly and familiar environment. 
            </p>
            <p className='text__para'>
              For 30 years, we have been providing the best medical care to our patients, with a commitment to the best service in a friendly and familiar environment. Our mission is to provide the best medical care to our patients, with a commitment to the best service in a friendly and familiar environment.
            </p>
            <p className="text__para mt-[20px]"></p>
            <Link to='/'>
              <button className='btn'>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
