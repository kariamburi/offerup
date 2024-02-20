"use client";
import { NGnaira } from "@/lib/help";
import { adData } from "@/lib/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailIcon,
  EmailShareButton,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { updateAdField } from "@/lib/updateData";
export default function Ads(ad: adData) {
  useEffect(() => {
    // Function to run once when the page loads
    const updateviewed = async () => {
      const result = await updateAdField(ad.id, ad.views + 1);
      // alert("updated");
    };
    updateviewed();

    // Specify an empty dependency array to ensure the effect runs only once
  }, []);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };
  const [showPopup, setShowPopup] = useState(false);

  // Handler to toggle the popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const call = () => {
    setShowPopup(!showPopup);
  };
  const session: any = useSession<any | null | undefined>();

  // Convert dateString to a Date object
  const parsedDate: Date = new Date(ad.postedDate);

  // Get the current date
  const currentDate: Date = new Date();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds: number =
    currentDate.getTime() - parsedDate.getTime();
  // Convert milliseconds to days
  let posted: string = "";
  const differenceInDays: number =
    differenceInMilliseconds / (1000 * 60 * 60 * 24);

  if (differenceInDays < 1) {
    const differenceInHours: number = differenceInDays * 24;

    if (differenceInHours < 1) {
      const differenceInMins: number = differenceInHours * 60;

      posted = `Posted ${differenceInMins.toFixed(0)} min(s).`;
    } else {
      posted = `Posted ${differenceInHours.toFixed(0)} hour(s).`;
    }
  } else {
    posted = `Posted ${differenceInDays.toFixed(0)} days.`;
  }

  return (
    <>
      <div className="m-1 space-y-5 lg:flex lg:space-x-5">
        <div className="lg:flex-1 border-t-8 border-emerald-600 bg-white pb-10 rounded-lg">
          {/* Carousel */}
          <Carousel showThumbs={false} selectedItem={selectedImageIndex}>
            {ad.imagesUrl.map((image: string, index: number) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full"
                  style={{ width: "100%", height: "500px" }}
                />
              </div>
            ))}
          </Carousel>

          {/* Image thumbnails */}
          <div className="flex space-x-1 overflow-x-auto m-1">
            {/* Render the list of images */}
            {ad.imagesUrl.slice(0, 5).map((image, index) => (
              <span key={index} onClick={() => handleImageClick(index)}>
                <img
                  src={image}
                  className="w-24 h-24 object-cover cursor-pointer border-2 border-transparent hover:border-emerald-500"
                  alt="AdImage"
                />
              </span>
            ))}
            {/* Show the placeholder with the total number of images */}
            {ad.imagesUrl.length > 4 && (
              <span onClick={togglePopup} className="cursor-pointer relative">
                <img
                  src={ad.imagesUrl[4]}
                  className="w-24 h-24 object-cover cursor-pointer border-2 bg-transparent hover:border-emerald-500"
                  alt="AdImage"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                {/* Placeholder */}
                {ad.imagesUrl.length > 4 && (
                  <span className="absolute top-12 right-12 text-white rounded-full w-6 h-6 flex items-center justify-center -mt-3 -mr-3">
                    <div className="relative">
                      <span className="text-lg font-bold m-1 block">
                        +{ad.imagesUrl.length - 4}
                      </span>
                      <span className="text-sm block">Images</span>
                    </div>
                  </span>
                )}
              </span>
            )}
          </div>

          {/* Popup for displaying all images */}
          {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
              <div className="bg-black p-4 max-w-screen-lg w-full h-full overflow-y-auto">
                <div className="flex flex-row flex-wrap justify-center">
                  <Carousel showThumbs={false}>
                    {ad.imagesUrl.map((image: string, index: number) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          className="object-cover w-full"
                          style={{ width: "100%", height: "450px" }}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                {/* Close button with CloseIcon */}
                <button onClick={togglePopup} className="focus:outline-none">
                  <CloseIcon className="text-white m-5" sx={{ fontSize: 32 }} />
                </button>
              </div>
            </div>
          )}

          {/* Ad details */}
          <div className="m-5">
            <p className="text-2xl font-bold">{ad.title}</p>

            <div className="flex items-center space-x-2 p-2">
              <p className="text-gray-400 text-sm">
                <AccessTimeIcon sx={{ fontSize: 20 }} />
                {posted}
              </p>

              <p className="text-gray-400 text-sm">
                <LocationOnIcon sx={{ fontSize: 20 }} /> {ad.location}
                {","} {ad.constituency}
              </p>

              <p className="text-gray-400 text-sm">
                <VisibilityIcon sx={{ fontSize: 20 }} /> {ad.views} Views
              </p>
            </div>
            {ad.youtube && (
              <a href={ad.youtube} className="mt-5">
                <YouTubeIcon style={{ color: "red" }} /> Open on Youtube
              </a>
            )}

            <div className="divider"></div>

            <p className="my-5">{ad.description}</p>
            <div className="divider"></div>

            {session.data && (
              <a href={`tel:+254${ad.contactNumber}`}>
                <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-8 rounded-lg flex items-center">
                  <CallIcon sx={{ marginRight: "5px" }} />
                  +254{ad.contactNumber}
                </button>
              </a>
            )}
            {!session.data && (
              <button
                className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-8 rounded-lg flex items-center"
                onClick={() => signIn()}
              >
                {" "}
                <CallIcon sx={{ marginRight: "5px" }} />
                Show contact
              </button>
            )}

            <div className="divider"></div>
            <h1>Share on Social</h1>
            <div className="flex items-center space-x-2">
              <FacebookShareButton
                url={"http://localhost:3000/adverts/" + ad.id + ""}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <RedditShareButton
                url={"http://localhost:3000/adverts/" + ad.id + ""}
              >
                <RedditIcon size={32} round />
              </RedditShareButton>
              <WhatsappShareButton
                url={"http://localhost:3000/adverts/" + ad.id + ""}
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={"http://localhost:3000/adverts/" + ad.id + ""}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <TwitterShareButton
                url={"http://localhost:3000/adverts/" + ad.id + ""}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <EmailShareButton
                url={"http://localhost:3000/adverts/" + ad.id + ""}
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="lg:w-[30%] lg:inline">
          <div className="bg-white p-5 text-l rounded-lg overflow-hidden shadow-md">
            <div className="text-center flex flex-col items-center">
              <span className="text-2xl font-bold text-black m-0">
                {NGnaira.format(ad.price)}
              </span>
              {ad.negotiable && (
                <span className="text-emerald-600 text-sm">Negotiable</span>
              )}
            </div>

            <br />
            <span className="m-2">
              {session.data && (
                <a href={`tel:+254${ad.contactNumber}`}>
                  <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white py-2 px-4 rounded inline-flex items-center w-full">
                    <ChatIcon sx={{ marginRight: "5px" }} />
                    Request call back
                  </button>
                </a>
              )}
              {!session.data && (
                <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white py-2 px-4 rounded inline-flex items-center w-full">
                  <ChatIcon sx={{ marginRight: "5px" }} />
                  Request call back
                </button>
              )}
            </span>
          </div>
          <br />
          <div className="bg-white p-5 text-l rounded-lg overflow-hidden shadow-md">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 mr-4">
                  <a href={`/myadverts/${ad.userEmail}`}>
                    <img
                      className="w-full h-full rounded-full"
                      src="/profile-placeholder.png"
                      alt="Profile Image"
                    />
                  </a>
                </div>

                <div className="justify-start">
                  <Link
                    href={`/myadverts/${ad.userEmail}`}
                    className="no-underline font-boldm-1"
                  >
                    <h2 className="text-lg font-semibold">{ad.userName}</h2>
                  </Link>
                  <Link
                    href={`/reviews/${ad.userEmail}`}
                    className="no-underline font-boldm-1 hover:text-emerald-500 "
                  >
                    <div className="bg-emerald-100 p-1 rounded-lg mt-0">
                      <p className="text-emerald-600 text-xs">
                        <CheckCircleIcon sx={{ fontSize: 14 }} />
                        Verified
                      </p>
                    </div>
                    <p className="text-gray-600 text-xs">
                      {" "}
                      <VisibilityIcon sx={{ fontSize: 20 }} />
                      Reviews
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <span className="m-2">
              {session.data && (
                <a href={`tel:+254${ad.contactNumber}`}>
                  <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 opacity-100 rounded flex items-center w-full">
                    <CallIcon sx={{ marginRight: "5px" }} />
                    +254{ad.contactNumber}
                  </button>
                </a>
              )}
              {!session.data && (
                <button
                  className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 opacity-100 rounded flex items-center w-full"
                  onClick={() => signIn()}
                >
                  <CallIcon sx={{ marginRight: "5px" }} />
                  Show contact
                </button>
              )}
            </span>
            <span className="m-2">
              {session.data && (
                <a href={`tel:+254${ad.contactNumber}`}>
                  <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white py-2 px-4 rounded flex items-center w-full">
                    <ChatIcon sx={{ marginRight: "5px" }} />
                    Start Chat
                  </button>
                </a>
              )}
              {!session.data && (
                <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white py-2 px-4 rounded flex items-center w-full">
                  <ChatIcon sx={{ marginRight: "5px" }} />
                  Start Chat
                </button>
              )}
            </span>
          </div>

          <div className="bg-white p-5 text-sm mt-5 rounded-lg overflow-hidden shadow-md">
            <div className="font-bold text-lg text-center">Safety tips</div>

            <ol>
              <li>
                <CheckCircleIcon sx={{ fontSize: 14 }} /> Dont pay in advance,
                including for delivery
              </li>

              <li>
                <CheckCircleIcon sx={{ fontSize: 14 }} /> Meet the seller at a
                safe public place
              </li>

              <li>
                <CheckCircleIcon sx={{ fontSize: 14 }} /> Inspect the item and
                ensure its exactly what you want
              </li>

              <li>
                <CheckCircleIcon sx={{ fontSize: 14 }} /> On delivery, check
                that the item delivered is what was inspected
              </li>

              <li>
                <CheckCircleIcon sx={{ fontSize: 14 }} /> Only pay when youre
                satisfied
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
