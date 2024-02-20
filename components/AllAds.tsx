"use client";
import { NGnaira } from "@/lib/help";
import { adData, uploadData } from "@/lib/types";
//import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AllAds({ ads }: any) {
  const handleError = () => {
    if (ads.length === 0) {
      throw new Error();
    }
  };
  useEffect(() => {
    handleError();
  });
  // Function to truncate and limit the number of characters
  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      {ads?.map((ad: any) => (
        <div
          className="bg-white m-2 rounded-lg overflow-hidden shadow-md"
          key={ad.id}
        >
          {/* Added rounded-lg, overflow-hidden, and shadow-md classes */}
          <div className="flex min-h-[200px] flex-col">
            <Link
              href={`/adverts/${ad.id}`}
              style={{ backgroundImage: `url(${ad.imagesUrl[0]})` }}
              className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            />
          </div>
          <p className="m-2">
            <Link
              href={`/adverts/${ad.id}`}
              className="no-underline font-bold text-emerald-700 m-1"
            >
              {NGnaira.format(ad.price)}
            </Link>
            <br />
            <Link href={`/adverts/${ad.id}`} className="no-underline text-sm">
              {truncateTitle(ad.title, 20)}{" "}
              {/* Change 20 to your desired character limit */}
            </Link>
          </p>

          <div className="ml-3 text-gray-500 text-xs p-1">
            <LocationOnIcon sx={{ fontSize: 20 }} /> {ad.location} -{" "}
            {ad.constituency}
          </div>
        </div>
      ))}
    </div>
  );
}
