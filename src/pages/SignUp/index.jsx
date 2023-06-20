// assets
import logo from '../../assets/logo.png';

export function Component() {
  return (
    <div className="w-[100vw] h-[100vh] p-10 bg-slate-500">
      <div className="sing-up__container">
        <div className="flex">
          <img src={logo} alt="logo" />
          <p className="brand-title">Do</p>
          <p className="brand-title">Something!</p>
        </div>
      </div>
    </div>
  );
}
