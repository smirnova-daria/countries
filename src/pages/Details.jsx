import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { searchByCountry } from "../api/config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  return (
    <div>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        <BiArrowBack /> Back
      </Button>
      {country && <Info {...country} navigate={navigate} />}
    </div>
  );
};
