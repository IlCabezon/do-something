// constants
import { benefits } from '../../../constants/appBenefits';

export default function AppBenefits() {
  return (
    <div className="flex max-md:flex-col gap-10 flex-wrap mt-5">
      {benefits.map(({ value, Icon }) => (
        <div
          key={value}
          className="group flex items-center relative p-[30px] bg-primary-container rounded-xl gap-4 transition-all hover:-top-2 hover:-left-2"
        >
          <Icon size={28} className="text-secondary" />
          <p className="brand-title">{value}</p>
          <div className="hero__decorator " />
        </div>
      ))}
    </div>
  );
}
