// routing
import { useNavigate } from 'react-router';

// components
import { BsArrowLeft } from 'react-icons/bs';

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(-1)}>
      <div className="flex items-center gap-3 my-5">
        <BsArrowLeft size={28} color="#548bff" className="p-0 m-0" />
        <p className="text-secondary">Go back</p>
      </div>
    </button>
  );
}
