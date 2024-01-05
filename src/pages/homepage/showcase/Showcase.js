import "./ShowcaseStyle.css";

const Showcase = () => {
  return (
    <section class="showcase">
      <div class="container">
        <div class="showcase-content">
          <div class="showcase-text">
            <h2 class="showcase-message">
              Your first real time <br />
              Ping-Pong
            </h2>
            <p class="showcase-description">
              This is the ft_trancendance project for 1337 school, it is
              faithfull to the 1769 Ping Pong ball game, we wish you all the
              best in your journey with our Ping Ball game, have fun!
            </p>
            <div class="showcase-buttons">
              {/* <Link path="/login">Login with intra</Link> */}
              <button class="button">Login with intra</button>
              <button class="button" data-type="inverted">
                Get started
              </button>
            </div>
          </div>
          <div class="showcase-images">
            <div class="ball-image"></div>
            <div class="paddle-image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
