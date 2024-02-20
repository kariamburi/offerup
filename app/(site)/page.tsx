import AllAds from "@/components/AllAds";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Menumobile from "@/components/menu-mobile";
import Slider from "@/components/slider";
import { fetchAllAds } from "@/lib/fetchData";

export default async function Home() {
  const allAds = await fetchAllAds();

  return (
    <main>
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-900">
        <Header />
      </div>

      <div className="max-w-6xl mx-auto flex mt-3 ">
        <div className="hidden lg:inline mr-5">
          <Menu />
        </div>

        <div className="flex-1">
          <div className="lg:hidden">
            <Menumobile />
          </div>
          <div className="text-lg font-bold breadcrumbs text-gray-600">
            Trending ads
          </div>
          <AllAds ads={allAds} />
        </div>
      </div>
    </main>
  );
}
