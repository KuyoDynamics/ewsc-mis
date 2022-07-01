import React from "react";
import { Outlet } from "react-router-dom";
// import { useGetCountriesQuery } from "../../../graphql/generated";

function Countries() {
  // const { loading, data, error } = useGetCountriesQuery();
  // if (loading) return <p>Loading...</p>;

  // if (error) return <p>Error :(</p>;

  // if (!data?.countries) return <p>No Countries Found</p>;

  return (
    <main>
      {/* {data.countries.map((country) => (
        <ul key={country.id}>
          <li>{country.name}</li>
        </ul>
      ))}
      <Outlet /> */}
    </main>
  );
}

export { Countries };
