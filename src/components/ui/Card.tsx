import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Article } from "../../interfaces/Article";

export function CardDefault({ item }: { item: Article }) {
  return (
    <Card className="mt-6 w-100 mx-4 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={
            item?.media.length ? item.media[0]["media-metadata"][2]?.url : ""
          }
          alt={item.title}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item.title}
        </Typography>
        <Typography className="mb-4">{item.abstract}</Typography>
        <Typography variant="paragraph" color="blue-gray">
          Published on {item.published_date}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href={item.url} className="inline-block ">
          <Button>Read More</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
