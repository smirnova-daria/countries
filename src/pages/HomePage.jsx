import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ALL_COUNTRIES } from "../api/config";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";

export const HomePage = ({ countries, setCountries }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, [setCountries, countries.length]);

  return (
    <>
      <Controls />
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.svg,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };
          return (
            <Card
              key={c.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${c.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};
