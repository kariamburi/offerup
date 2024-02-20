import AllAdscategory from "@/components/AllAdscategory";
import { fetchAdsByCategory } from "@/lib/fetchData";
import ErrorIcon from "@mui/icons-material/Error";
import { useEffect } from "react";
export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const Ads = await fetchAdsByCategory(params.category);

  return (
    <main className="max-w-6xl mx-auto m-3">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            ADS
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            {params.category}
          </li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap mt-1">
        <div className="w-full p-2 lg:p-0 lg:w-1/4 lg:pr-5">
          <div className="p-0 text-sm overflow-hidden m-0">
            <div className="text-center">
              <div className="items-center justify-center bg-white rounded-lg">
                <div className="justify-center">
                  <div className="header bg-emerald-500 text-white rounded-t-lg">
                    <h2 className="text-lg font-semibold p-1">Categories</h2>
                  </div>
                  <div className="text-center p-5">
                    <ol>
                      <li>Cars</li>

                      <li>Buses & Microbuses</li>

                      <li>Heavy Equipment</li>

                      <li>Motorbikes & Scooters</li>

                      <li>Trucks & Trailers </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="items-center mt-1 justify-center bg-white rounded-lg">
                <div className="justify-center">
                  <div className="header rounded-t-lg">
                    <h2 className="text-lg font-semibold p-1">Location</h2>
                  </div>

                  <p className="text-sm p-1">All Kenya </p>
                </div>
              </div>

              <div className="items-center mt-1 justify-center bg-white rounded-lg">
                <div className="justify-center">
                  <div className="header rounded-t-lg">
                    <h2 className="text-lg font-semibold p-1">Price, KSh</h2>
                  </div>

                  <p className="text-sm p-1">All Kenya </p>
                </div>
              </div>

              <div className="items-center mt-1 justify-center bg-white rounded-lg">
                <div className="justify-center">
                  <div className="header rounded-t-lg">
                    <h2 className="text-lg font-semibold p-1">
                      Verified sellers
                    </h2>
                  </div>

                  <p className="text-sm p-1">All Kenya </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4">
          <div className="text-lg font-bold breadcrumbs text-gray-600 ml-5">
            Posted ads
          </div>
          <div className="flex flex-wrap w-full">
            <AllAdscategory ads={Ads} />
          </div>
        </div>
      </div>
    </main>
  );
}
