import { useNavigate } from "react-router-dom";

export default function ButtonWatch({ title }: { title: string }) {
  let navigate = useNavigate();
  return (
    <button
      type="submit"
      className="button-watch btn-orange"
      onClick={() => navigate("/catalog-apartaments")}
    >
      {title}
    </button>
  );
}
