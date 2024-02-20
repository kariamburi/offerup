"use client";
import { NGnaira } from "@/lib/help";
import { adData, uploadData } from "@/lib/types";
//import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import { useEffect } from "react";

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
          <Link href={`/adverts/${ad.id}`} className="no-underline text-sm">
            <img
              src={ad.imagesUrl[0]}
              alt="Ads Image"
              className="object-cover" // Increased image size
              style={{ width: "100%", height: "auto" }}
            />
          </Link>

          <p className="m-2">
            <span className="font-bold text-emerald-700 m-1">
              {NGnaira.format(ad.price)}
            </span>
            <br />
            <span className="text-lg m-1 font-bold">
              <Link href={`/adverts/${ad.id}`} className="no-underline text-sm">
                {ad.title}
                {/* Change 20 to your desired character limit */}
              </Link>
            </span>
            <br />
            <span className="text-sm m-1">
              <Link href={`/adverts/${ad.id}`} className="no-underline text-sm">
                {truncateTitle(ad.description, 80)}{" "}
                {/* Change 20 to your desired character limit */}
              </Link>
            </span>
            <br />
          </p>

          <div className="ml-3 text-gray-500 text-xs p-1">
            <LocationOnIcon sx={{ fontSize: 20 }} />
            {ad.location} - {ad.constituency}
          </div>
        </div>
      ))}
    </div>
  );
}
