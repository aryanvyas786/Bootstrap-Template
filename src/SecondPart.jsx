import React from "react";

const SecondPart = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col 12 col-sm-6">
              <h1>We Created Application</h1>
              <br />
              <h1>With Excellent Technology.</h1>
              <p>
                It Is A Long Established Fact That A Reader Will Be Distracted
                By The Readable Content Of A Page When Looking At Its Layout.
                The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less
                Normal Distribution Of Letters, As Opposed To Using 'Content
              </p>
              
              <div className="row">
              <button type="button" className="arrowbutton col-12 col-sm-5 m-auto" disabled>Download Now<img className="downarrow m-auto" src="/downarrow.png" alt="Img"/></button>
              <p className="col-5 explore m-auto">Explore More<img className="rightarrow m-auto" src="/rightarrow.png" alt="img"/></p>
              </div>
            </div>


            <div className="col-12 col-sm-6 group m-auto">
              <img className="image" src="public/group.png" alt="Img"></img>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default SecondPart;
