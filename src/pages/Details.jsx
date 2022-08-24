import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { searchByCountry } from "../api/config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { Preloader } from "../components/Preloader";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(searchByCountry(name)).then(({ data }) => {
      setCountry(data[0]);
      setIsLoading(false);
    });
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
      {isLoading && <Preloader />}
      {country && <Info {...country} navigate={navigate} />}
    </div>
  );
};
