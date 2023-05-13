import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import Loader from "../components/Loader";
import Container from "../components/Container";
import Title from "../components/Title";

const StyledMap = styled.div``;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 18px 32px;
`;

export default React.memo(function MapPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [geoLocation, setGeoLocation] = useState([]);

  useEffect(() => {
    // set geo-location
    navigator.geolocation.getCurrentPosition((geo) => {
      const { latitude, longitude } = geo.coords;
      setGeoLocation([latitude, longitude]);
    });

    // loader
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StyledMap>
      <Container>
        <Wrapper>
          <Title title={"Basic map"} style={{ paddingBottom: "18px" }} />
          <YMaps>
            <Map
              width={"max-width: 100%"}
              height={"67vh"}
              defaultState={{ center: geoLocation, zoom: 10 }}
            >
              <Placemark geometry={geoLocation} />
            </Map>
          </YMaps>
        </Wrapper>
      </Container>
    </StyledMap>
  );
});
