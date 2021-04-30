<template>
  <div class="m-2">
    <div class="bg-dark text-white d-flex p-4 justify-content-center   ">
      <div class="border  p-3 text-center ">
        <h4 class="">
          BRANDON <br />MAYER <br />
          <br />
          Composer
        </h4>
      </div>
    </div>
    <div class="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MAYER</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                  >Tour</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="head container-fluid">
        <div class="row ">
          <div
            class=" col-md w-100 bg-dark black text-white d-flex pb-4 m-md-2 justify-content-center  "
          >
            <div
              class="text-white align-content-center  text-left  pt-5 ps-4 ms-6"
            >
              <b> THE SONGS</b>
              <p>THAT ARE BORN IN MY SOUL</p>
              <p>
                ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                praesentium recusandae neque, odio, deserunt excepturi iste
                temporibus ea magnam vero enim, sed maxime ad? Aspernatur iusto
                est perferendis provident sequi.
              </p>
              <div class="d-flex  justify-content-end">
                <button class="btn btn-primary mt-2 ">
                  <router-link to="/song">Hit me up</router-link>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md"></div>
        </div>
        <div class="container pt-5 mt-5">
          <div class="row text-black">
            <div
              class="col-md me-md-4 mb-4 bg-white p-4 "
              data-aos="flip-left"
              data-aos-delay="50"
            >
              <div class="d-flex justify-content-between">
                <b>USEFUL INFO</b>
                <b>01</b>
              </div>
              <br />
              <b
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                perferendis doloremque earum quos sint. S</b
              >

              <p class="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt explicabo totam consequatur molestiae culpa, atque
                eveniet pariatur, voluptate at sapiente, assumenda ipsam
                consequuntur quam nemo nam minus optio dignissimos excepturi!
              </p>
              <br />
              <b>READ MORE</b>
            </div>

            <div
              class="col-md me-md-4 mb-4 bg-white p-4 "
              data-aos="flip-up"
              data-aos-delay="50"
            >
              <div class="d-flex justify-content-between">
                <b>USEFUL INFO</b>
                <b>01</b>
              </div>
              <br />
              <b
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                perferendis doloremque earum quos sint. S</b
              >

              <div class="mt-4 heade"></div>
              <br />
              <b>READ MORE</b>
            </div>
            <div
              class="col-md bg-white mb-4 p-4 "
              data-aos="zoom-in-left"
              data-aos-delay="50"
            >
              <div class="d-flex justify-content-between">
                <b>USEFUL INFO</b>
                <b>01</b>
              </div>
              <br />
              <b
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                perferendis doloremque earum quos sint. S</b
              >

              <p class="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt explicabo totam consequatur molestiae culpa, atque
                eveniet pariatur, voluptate at sapiente, assumenda ipsam
                consequuntur quam nemo nam minus optio dignissimos excepturi!
              </p>
              <br />
              <b>READ MORE</b>
            </div>
          </div>
        </div>
      </div>
      <Songs />
      <Event />
      <div class="mt-2">
        <Video />
      </div>

      <Bio />
      <Footer />
    </div>
  </div>
</template>

<script>
import Songs from "../components/Songs";
import Event from "../components/Event";
import Video from "../components/Video";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
export default {
  components: {
    Songs,
    Event,
    Video,
    Bio,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.black {
  opacity: 0.8;
}
.head {
  background-image: url("../assets/cab.jpg");
  height: fit-content;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.heade {
  background-image: url("../assets/goo.jpg");
  height: 130px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
