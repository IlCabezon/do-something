// components
import { BsArrowRight } from 'react-icons/bs';
import CustomButton from '../../../components/CustomButton';

// assets
import hero from '../../../assets/hero.svg';

export default function Hero() {
  return (
    <div className="flex justify-between max-lg:flex-col relative p-[40px] bg-primary-container rounded-xl">
      <div className="lg:w-[50%] max-lg:h-[50%]">
        <h1 className="hero__title">Find motivation in random tasks</h1>
        <p className="hero__subtitle">
          The right place to do something when you do not know what to do
        </p>
        <CustomButton containerStyles="hero__customButton__container relative overflow-hidden hover:bg-secondary transition-all">
          <div className="-left-[100%] group-hover:left-0 transition-all w-full h-full absolute flex justify-center items-center">
            <BsArrowRight size={40} color="white" />
          </div>

          <div className="left-0 group-hover:left-[100%] transition-all w-full h-full absolute flex justify-center items-center">
            <p className=" text-secondary text-[15px] font-semibold text-md ">
              Get Started
            </p>
          </div>
        </CustomButton>
      </div>

      <div className="lg:w-[50%] max-lg:h-[50%]">
        <img src={hero} alt="hero" />
      </div>

      <div className="hero__decorator" />
    </div>
  );
}
