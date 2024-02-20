"use client";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
//import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchAllAds } from "@/lib/fetchData";

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState<string>();

  // Function to handle changes in the search input
  const handleSearchChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <div className="flex max-w-6xl mx-auto">
      {/* Right Side */}
      <div>
        <img
          src="back.png"
          alt="logo"
          className="hidden md:inline mt-10"
          style={{ width: "100%", height: "200px" }}
        />
      </div>

      {/* Middle */}
      <div className="mx-auto md:my-auto py-10 md:py-0 w-[90%] md:w-[40%] text-center">
        <div className="mb-10 text-white">
          Find anything in{" "}
          <span className="bg-black text-white p-3 rounded-md">
            <LocationOnIcon /> All Kenya
          </span>
        </div>

        <form action={`/search/${search}`}>
          <div className="flex bg-white p-2 rounded-sm mx-auto w-full">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Iam looking for.."
              className="flex-1 bg-transparent outline-none"
              required
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </div>
        </form>
      </div>

      {/* Left Side */}
      <div>
        <img
          src="8x.png"
          alt="logo"
          className="hidden md:inline"
          style={{ width: "100%", height: "300px" }}
        />
      </div>
    </div>
  );
}
