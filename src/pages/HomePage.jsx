import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ALL_COUNTRIES } from "../api/config";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";

export const HomePage = ({ countries, setCountries }) => {
  const navigate = useNavigate();
  const [filteredCountries, setfilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setfilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data);
      });
    }
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
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
