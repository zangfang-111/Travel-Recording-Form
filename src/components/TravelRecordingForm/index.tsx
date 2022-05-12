import * as React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Form from "./form";
import Map from "./map";
import Marker from "./marker";
import Button from "../common/button";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const App: React.FC = () => {
  const [text, setText] = React.useState({
    origin: 'Norwich, UK',
    destination: 'London, UK',
  });
  const [origin, setOrigin] = React.useState<google.maps.LatLngLiteral>({
    lat: 52.6308859,
    lng: 1.297355,
  });
  const [destination, setDestination] = React.useState<google.maps.LatLngLiteral>({
    lat: 51.5073509,
    lng: -0.1277583,
  });

  const onChangeText = (name: string, e: any) => {
    const value = e.target ? e.target.value : e;
    setText({ ...text, [name]: value });
  }

  const onSubmit = () => {
    const request = new XMLHttpRequest();
    const requestData = {
      ...text,
      ...origin,
      ...destination
    }

    try {
      request.open('POST', '/fake-url', true);
      request.send(JSON.stringify(requestData));
      request.onload = (event) => {
        console.log(event);
        console.log('submitted')
      };
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="travel-recording-form">
      <Wrapper apiKey={'AIzaSyDqJjZTF__I_b7yn1fkUUdMVer2Da8Wzpc'} render={render}>
        {/* @ts-ignore */}
        <Map
          center={origin}
          zoom={8}
          style={{ flexGrow: "1", height: "100%" }}
        >
          <Marker position={origin} />
          <Marker position={destination} />
        </Map>
      </Wrapper>
      <div className="form-wrapper">
        <Form
          onChangeText={onChangeText}
          origin={origin}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
          text={text}
        />
        <Button name="Submit" action={onSubmit} />
      </div>
    </div>
  );
};

export default App;
