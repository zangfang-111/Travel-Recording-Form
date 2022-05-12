import * as React from "react";
import Input from "../common/input";

interface FormProps {
  onChangeText: (name: string, e: any) => void;
  origin: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
  setOrigin: any;
  setDestination: any;
  text: {
    origin: string;
    destination: string;
  }
}

const Form: React.FC<FormProps> = ({
  onChangeText,
  origin,
  setOrigin,
  destination,
  setDestination,
  text,
}) => (
  <div className="submit-form">
    <Input
      label="Origin Text"
      name="origin"
      type="text"
      value={text.origin}
      onChange={(name, e) => onChangeText(name, e)}
    />
    <Input
      label="Origin Latitude"
      name="lat"
      value={origin.lat}
      onChange={(name, e) =>
        setOrigin({ ...origin, lat: Number(e.target.value) })
      }
    />
    <Input
      label="Origin Longitude"
      name="lng"
      value={origin.lng}
      onChange={(name, e) =>
        setOrigin({ ...origin, lng: Number(e.target.value) })
      }
    />
    <Input
      label="Destination Text"
      name="origin"
      type="text"
      value={text.destination}
      onChange={onChangeText}
    />
    <Input
      label="Destination Latitude"
      name="lat"
      value={destination.lat}
      onChange={(name, e) =>
        setDestination({ ...destination, lat: Number(e.target.value) })
      }
    />
    <Input
      label="Destination Longitude"
      name="lng"
      value={destination.lng}
      onChange={(name, e) =>
        setDestination({ ...destination, lng: Number(e.target.value) })
      }
    />
  </div>
);

export default Form;
