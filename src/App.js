import "./App.css";
import {useState, useEffect} from "react"; 
import ImageCrasoal from "./component/ImageCrasoal";

function App() {
  const [showHomeLogo,setShowHomeLogo]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
     setShowHomeLogo(false);
    },1500)
  },[])
  const slideOneImage = [
    "/images/book1.png",
    "/images/book2.png",
    "/images/book3.png",
    "/images/book4.png",
    "/images/book5.png",
    "/images/book6.png",
    "/images/book7.png",
    "/images/book8.png",
    "/images/book9.png",
    "/images/book10.png",
    "/images/book11.png",
    "/images/book12.png",
    "/images/book13.png",
    "/images/book14.png",
    "/images/book15.png",
    "/images/book16.png",    
  ]
  const slideTwoImage = [
    "/images/book16.png",
    "/images/book15.png",
    "/images/book14.png",
    "/images/book13.png",
    "/images/book12.png",
    "/images/book11.png",
    "/images/book10.png",
    "/images/book9.png",
    "/images/book8.png",
    "/images/book7.png",
    "/images/book6.png",
    "/images/book5.png",
    "/images/book4.png",
    "/images/book3.png",
    "/images/book2.png",
    "/images/book1.png",    
  ]
  return (
    <div className="App">
      {/* home start */}
      <div className="homeContainer">
        {showHomeLogo ? (
          <div className="brandLogoCenter">
          <img src="/images/brandLogo.png" />
            </div>
        ) : (
          <>
            {/* nav Start */}
            <nav className="nav">
              <div className="brand">
                <img src="/images/brandLogo.png" />
              </div>
              <div className="d-flex socialIcons">
                <img src="/images/f.png" />
                <img src="/images/twitter.png" />
                <img src="/images/linked_in.png" />
              </div>
            </nav>
            {/* nav end*/}

            {/* home content start */}
            <div className="homeContent d-flex">
              <div className="headers">
                <h1 className="mb-0">Discover a World of Books with BookR!</h1>
                <p className="p1">
                  Are you a passionate book lover? Do you enjoy immersing yourself in captivating stories and
                  thought-provoking ideas?
                </p>
                <p className="p2">
                  Look no further! Introducing BookR, the ultimate book sharing app designed to connect book enthusiasts
                  like you!
                </p>
                <button>DOWNLOAD THE APP NOW</button>
              </div>
              <div className="bannerImg">
                <img src="/images/mobilePic.png" />
              </div>
            </div>
            {/* home content end */}
          </>
        )}

        {/* book img gallery start */}
        
        <div className="bookGallery">
          <ImageCrasoal imageArr={slideOneImage}/>
          <h1>AN EVER EXPANDING LIBRARY</h1>
          <ImageCrasoal imageArr={slideTwoImage}/>
        </div>
        {/* book img gallery end */}

        {/* detail start1 */}
        <div className="d-flex justify-content-between detail">
          <img src="/images/detail1.png" />
          <div className="m-auto">
            <h1 className="firstH1">MEET FELLOW ETHUSIASTS & FORM BOOK CLUBS</h1>
          </div>
        </div>
        {/* detail end */}
        {/* detail start1 */}
        <div className="d-flex justify-content-between detail">
          <div className="m-auto">
            <h1 className="firstH2">ORDER OR SHARE BOOKS SAFE DELIVERY ASSURED</h1>
          </div>
          <img src="/images/detail1.png" />
        </div>
        {/* detail end */}

        {/* footer start */}
        <div className="footer d-flex justify-content-between">
          <div className="footerContent my-auto">
            <h1>Download BookR</h1>
            <p> & Explore A Kingdom Of Books</p>
            <div>
              <img src="/images/playstore.png" />
            </div>
            <div>
              <img src="/images/appstore.png" />
            </div>
          </div>
          <div>
            <img src="/images/footerBanner.png" />
          </div>
        </div>
        {/* footer end */}

        {/* copyRight start */}
        <div className="copyRight">
          <div className="d-flex justify-content-between">
            <div>
              <img src="/images/copyRight.png" />
            </div>
            <div className="my-auto">
              <img src="/images/arrow_upward.png" />
            </div>
          </div>
          <p>© BookR</p>
        </div>
        {/* copyRight end */}
      </div>
      {/* home end */}
    </div>
  );
}

export default App;
