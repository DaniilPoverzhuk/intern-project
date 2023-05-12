import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import Loader from "../components/Loader";
import Container from "../components/Container";
import Title from "../components/Title";

const StyledMap = styled.div`
  color: red;
`;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 18px 32px;
`;

const MapPage = React.memo(() => {
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
              // Карта никак не хотел принимать 100% высоту
              height={"calc(100vh - 42px - 36px - 108px - 18px - 32px)"}
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

export default MapPage;
