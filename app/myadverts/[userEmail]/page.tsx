"use client";
import UserAds from "@/components/userAds";
import { fetchUserAds } from "@/lib/fetchData";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { signIn, useSession } from "next-auth/react";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
export default async function page({
  params,
}: {
  params: { userEmail: string };
}) {
  const userEmail = params.userEmail;
  const ads = await fetchUserAds(decodeURIComponent(userEmail));
  // const session: any = useSession<any | null | undefined>();
  console.log(ads);

  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-wrap mt-3">
        <div className=" w-full lg:w-1/3 lg:pr-5">
          <div className="bg-white p-2 text-sm rounded-lg overflow-hidden m-5">
            <div className="text-center">
              <div className="items-center justify-center">
                <div className="w-20 h-20">
                  <img
                    className="w-full h-full rounded-full"
                    src="/profile-placeholder.png"
                    alt="Profile Image"
                  />
                </div>

                <div className="justify-center">
                  <h2 className="text-lg font-semibold">Paul Irungu</h2>

                  <div className="bg-emerald-100 p-1 rounded-lg mt-0 w-20">
                    <p className="text-emerald-600 text-xs">
                      <CheckCircleIcon sx={{ fontSize: 14 }} />
                      Verified
                    </p>
                  </div>

                  <br />
                  <span className="m-2">
                    <a href="">
                      <button className="bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 opacity-100 rounded flex items-center w-full">
                        <CallIcon sx={{ marginRight: "5px" }} />
                        +254
                      </button>
                    </a>
                  </span>
                  <span className="m-2">
                    <a href="">
                      <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white py-2 px-4 rounded flex items-center w-full">
                        <ChatIcon sx={{ marginRight: "5px" }} />
                        Start Chat
                      </button>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="text-lg font-bold breadcrumbs text-gray-600 ml-5">
            Posted ads
          </div>
          <div className="flex flex-wrap w-full">
            {ads?.map((ad: any) => (
              <UserAds data={ad} key={ad.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
