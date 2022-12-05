import Header from "../components/Header";
import MainCarousel from "../components/MainPage/MainCarousel";
const MainPage = () => {
  return (
    <>
      <Header active="home" />
      <main>
        <div>
          <MainCarousel />
        </div>
      </main>
    </>
  );
};
export default MainPage;
