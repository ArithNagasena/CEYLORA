import { MapPin, Star } from "lucide-react";
import { useState } from "react";

function HotelCard(props) {
  // let num = 1;
  //   const handleClick = () => {
  //     console.log("I was clicked")
  //     console.log("Inside handleclick", num)
  //     num = num + 1;
  //   }
  //   console.log("Outside handleclick", num)
//   const [num, setNum] = useState(0);

//   const handleClick = () => {
//     setNum(5);
//     console.log(num);
//     console.log("Hey");
//   };

  const formattedPrice = Number(props.hotel.price).toLocaleString("en-US");

  return (
    <div href={`/hotels/${props.hotel._id}`} className="block group relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={props.hotel.image}
          alt={props.hotel.name}
          className="object-cover w-full h-full absolute transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-3 space-y-2">
        <h3 className="font-semibold text-lg">{props.hotel.name}</h3>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{props.hotel.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="font-medium">
            {props.hotel?.rating ?? "No rating"}
          </span>
          <span className="text-muted-foreground">
            ({props.hotel.reviews?.length ?? "No"} Reviews)
          </span>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-xl font-bold">LKR {formattedPrice}  / night</span>
        </div>
      </div>
      {/* <div className="mt-2">
        <p className="text-red-500 text-3xl">{num}</p>
        <Button type="button" className={"w-full"} onClick={handleClick}>
          Click Me
        </Button>
      </div> */}
    </div>
  );
}
export default HotelCard;