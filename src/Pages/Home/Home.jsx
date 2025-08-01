import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import HomeContent from "../Shared/HomeContent/HomeContent";
import LeftNavigation from "../Shared/LeftNavigation/LeftNavigation";
import Navbar from "../Shared/Navbar/Navbar";
import RightNavigation from "../Shared/RightNavigation/RightNavigation";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div className="border">
          <LeftNavigation></LeftNavigation>
        </div>
        <div className="md:col-span-2 border">
          <HomeContent></HomeContent>
        </div>
        <div className="border">
          <RightNavigation></RightNavigation>
        </div>
      </div>
    </div>
  );
};

export default Home;
