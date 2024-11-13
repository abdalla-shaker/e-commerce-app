import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardDefault({ prod }) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={prod.deskImg} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {prod.name}
        </Typography>
        <Typography>${prod.price}</Typography>
      </CardBody>
      <CardFooter className="pt-0 mx-auto w-full">
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
}
