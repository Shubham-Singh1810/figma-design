import "./App.css";
function App() {
  return (
    <div className="App">
      {/* home start */}
      <div className="homeContainer">
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

        {/* book img gallery start */}

        <div className="bookGallery">
          <div className="slide1">
            <img src="/images/book1.png" />
            <img src="/images/book2.png" />
            <img src="/images/book3.png" />
            <img src="/images/book4.png" />
            <img src="/images/book5.png" />
            <img src="/images/book6.png" />
            <img src="/images/book7.png" />
            <img src="/images/book8.png" />
          </div>
          <h1>AN EVER EXPANDING LIBRARY</h1>
          <div className="slide1">
            <img src="/images/book9.png" />
            <img src="/images/book10.png" />
            <img src="/images/book11.png" />
            <img src="/images/book12.png" />
            <img src="/images/book13.png" />
            <img src="/images/book14.png" />
            <img src="/images/book15.png" />
            <img src="/images/book16.png" />
          </div>
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
