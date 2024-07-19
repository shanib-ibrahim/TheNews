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
    <Card
      className="mt-6 w-100 mx-4 "
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        color="blue-gray"
        className="relative h-56"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <img
          src={
            item?.media.length ? item.media[0]["media-metadata"][2]?.url : ""
          }
          alt={item.title}
        />
      </CardHeader>
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {item.title}
        </Typography>
        <Typography
          className="mb-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {item.abstract}
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Published on {item.published_date}
        </Typography>
      </CardBody>
      <CardFooter
        className="pt-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <a href={item.url} className="inline-block ">
          <Button
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Read More
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
