import { ClipLoader } from "react-spinners";
export default function Loader() {
  return (
    <div>
      <ClipLoader size={150} color={"#123abc"} loading={true} />
      <p>Loading...</p>
    </div>
  );
}
