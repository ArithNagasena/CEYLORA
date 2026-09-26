import { Button } from "./ui/button";

function LocationTab({ location, selectedLocation, onClick }) {
  const isSelected = selectedLocation === location._id;

  return (
    <Button
      type="button"
      variant={isSelected ? "default" : "outline"}
      size="sm"
      onClick={() => onClick(location)}
      className="rounded-full px-4"
    >
      {location.name}
    </Button>
  );
}

export default LocationTab;
