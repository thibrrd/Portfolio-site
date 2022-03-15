<template>
  <div>


    <div class="intro">
      <video autoplay muted loop><source src="../images/video-intro.mp4" type="video/mp4"></video>
      <p class="sdown">scroll down</p>
    </div>


        <div class="casamila">
          <div class="contenu">
          <router-link to="/casa_mila">CASA MILA</router-link>
          <p>Web model of a famous building made in a few days</p>
          </div>
        </div>
        <div class="axone">
          <div class="contenu">
          <router-link to="/axone">Party Axone</router-link>
          <p>Poster promoting a student party for Halloween at the axone</p>
            </div>
        </div>
        <div class="zerules">
          <div class="contenu">
        <router-link to="/Zerules">Logo ZeRules</router-link>
            <p>Logo Produced for a project at the end of the semester</p>
            </div>
        </div>

    <div class="titre"><h2>Gallery</h2></div>
    <section id="index-gallery" class="wrapper-gallery">
      <div class="gallery-img img1">
        <div class="class-overlay">
          <div class="information">Fictive cover for an album</div>
        </div>
      </div>
      <div class="gallery-img img2">
        <div class="class-overlay">
          <div class="information">3D modelisation of a logo</div>
        </div>
      </div>
      <div class="gallery-img img3">
        <div class="class-overlay">
          <div class="information">Pub campaign poster concept</div>
        </div>
      </div>
      <div class="gallery-img img4">
        <div class="class-overlay">
          <div class="information">Photomontage</div>
        </div>
      </div>
      <div class="gallery-img img5">
        <div class="class-overlay">
          <div class="information">Photomontage</div>
        </div>
      </div>
      <div class="gallery-img img6">
        <div class="class-overlay">
          <div class="information">Photomontage</div>
        </div>
      </div>

      <div class="gallery-img img7">
        <div class="class-overlay">
          <div class="information">Miniature made for a short film</div>
        </div>
      </div>

      <div class="gallery-img img8">
        <div class="class-overlay">
          <div class="information">Realisation of a logo</div>
        </div>
      </div>
      <div class="gallery-img img9">
        <div class="class-overlay">
          <div class="information">Design including my logo</div>
        </div>
      </div>
    </section>

  </div>
</template>


<script>

export default {
  name: "accueil",

}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap');

.intro{
  height: 100vh;
  width: 100vw;

}

.sdown {
  font-family: Poppins;
  font-size: 19px;
  color: #F2E252;
  text-transform: uppercase;
  letter-spacing: 5px;
  animation-name: scrolldown;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  padding-bottom: 50px;

}

@keyframes scrolldown {
  0% {
    opacity: 0;
    letter-spacing: 5px;
  }

  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    letter-spacing: 20px;
  }
}

.class-overlay {
  color: white;
  font-family: Poppins;
  font-size: 13px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.8337928921568627) 0%, rgba(0, 0, 0, 0.6965379901960784) 14%, rgba(255, 255, 255, 0) 100%);
  opacity: 0;
}


.class-overlay:hover {
  opacity: 1;
}


#index-gallery {

  display: flex;
  flex-wrap: wrap;
  width: 78%;
  height: auto;
  max-width: 1300px;
  margin: 70px auto 0;
  margin-bottom: 70px;
  margin-top: 20px;
  justify-content: center;
}

#index-gallery .gallery-img {
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 20px;
  flex-shrink: 0;
  overflow: hidden;
  transition: transform .3s;
}

#index-gallery .gallery-img:hover {

  transform: scale(1.2);
  transition: transform  .3s;

}

#index-gallery .img1 {
  grid-area: img1;
  background-image: url("../images/img1.jpg");
}

#index-gallery .img2 {
  grid-area: img2;
  background-image: url("../images/img2.jpg");
}

#index-gallery .img3 {
  grid-area: img3;
  background-image: url("../images/img3.jpg");
}

#index-gallery .img4 {
  grid-area: img4;
  background-image: url("../images/img4.jpg");

}

#index-gallery .img5 {
  grid-area: img5;
  background-image: url("../images/img5.jpg");

}

#index-gallery .img6 {
  grid-area: img6;
  background-image: url("../images/img6.jpg");

}

#index-gallery .img7 {
  grid-area: img7;
  background-image: url("../images/img7.jpg");
}

#index-gallery .img8 {
  grid-area: img8;
  background-image: url("../images/img8.jpg");
}

#index-gallery .img9 {
  grid-area: img9;
  background-image: url("../images/img9.jpg");
}

.titre{
  display: flex;
  justify-content: center;
  align-items: center;
  color:#F2E252;
  font-family: Poppins;
  font-size: 2rem;
  margin-top: 50px;
}

@media screen and (max-width: 1000px) {
  .sdown {
    font-size: 13px;

  }
}

.intro video{
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
}

.casamila{
  background-image: url("../images/Casamilabg.jpg");
  width: 100vw;
  height: 700px;
  background-position: center;
  background-size: cover;
}

.axone{
  background-image: url("../images/AX.jpg");
  width: 100vw;
  height: 700px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}

.zerules{
  background-image: url("../images/zerulesbg.jpg");
  width: 100vw;
  height: 700px;
  background-position:  center;
  background-size: cover;
}

.axone p{
  color: white;
  font-size: 17px;
  font-family: Poppins;
}

.axone a{
  font-family: Poppins;
  text-decoration: none;
  font-size: 80px;
  color: white;
  font-weight: bold;
  transition: transform 0.1s;

}

.axone a:hover {
  color: #f2e252;
  transform: scale(1.15);
  transition: transform 0.1s;
}




.casamila p{
  color: white;
  font-size: 17px;
  font-family: Poppins;
}

.casamila a{
  font-family: Poppins;
  text-decoration: none;
  font-size: 80px;
  color: white;
  font-weight: bold;
  transition: transform 0.1s;

}

.casamila a:hover {
  color: #f2e252;
  transform: scale(1.15);
  transition: transform 0.1s;
}




.zerules p{
  color: white;
  font-size: 17px;
  font-family: Poppins;
}

.zerules a{
  font-family: Poppins;
  text-decoration: none;
  font-size: 80px;
  color: white;
  font-weight: bold;
  transition: transform 0.1s;

}

.zerules a:hover {
  color: #f2e252;
  transform: scale(1.15);
  transition: transform 0.1s;
}


.contenu{
  padding-left: 100px;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-shadow: #090909 0 0 9px;
}

@media screen  and (max-width: 620px){

  .contenu{
    margin-left: 50px;
  }

  .contenu a{
    font-size: 50px;
  }
  .contenu p{
    font-size: 13px;
  }


}
</style>