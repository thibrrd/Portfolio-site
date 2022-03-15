<template>
<div>
  <div class="presentation">
  <div class="banniere">
  </div>
  <div class="titre">
    <h1>CASA MILA</h1>
  </div>
</div>
  <div class="contenu">
  <div class="description">
    <p>This work was to create a web model via the adobe xd tool of an emblematic building of
      Spain, the building entrusted to us was the casa mila, with the help of 2 classmates we created
      this model.
    </p>
  </div>
    <h1>The Logo</h1>
    <div class="image-texte1">

    <p>First we had to create a logo in order to represent the site. I wanted a simple and elegant logo.
      In analyzing the casamila I noticed that the facade of the casamila was dressed with many architectural curves.
      So I chose a circle as a base, then I wanted to integrate the building initials, the C and Mr. Le M represents
      the casa mila and the C the sky, the half circle represents the setting sun on the casa mila.</p>
      <div class="logo">
      </div>
    </div>
    <h1>Web Model</h1>
    <div class="maquette">
      <div class="casa1"></div>
      <div class="casa2"></div>
      <div class="casa3"></div>
      <h1><a href="https://xd.adobe.com/view/9cb04046-1658-4308-9d89-a25b365de1b6-c9e3/screen/c4ce6084-84de-4d3a-954b-8a3c62cd22af">See the web model</a></h1>
    </div>
    </div>

</div>
</template>

<script>
export default {
  name: "casa_mila"
}
</script>

<style scoped>
.titre{
  color: white;
  font-family: Poppins;
  position: absolute;
  top: 24vh;
  font-size: 2rem;
  text-shadow: #121212 0 0 9px;;
}

.banniere{
  width: 100vw;
  height: 30vh;
  background-image: url("../images/casa-mila.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  background-position: center;
}
.presentation{
  display: flex;
  flex-direction: column;
  align-items: center;

}

@media screen and (max-width: 500px){
  .titre{
    font-size: 1rem;
    top:27vh;
  }
}

.description{
  font-family: Poppins;
  color: white;
  padding-top: 90px;
  padding-bottom: 50px;

}

.contenu{
  width: 80vw;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
}

.contenu h1 {
  color: white;
  font-family: Poppins;
  font-size: 50px;
}

.image-texte1{
    display: flex;
  justify-content: space-between;
  height: 300px;
}
.logo{
  background-image: url("../images/logocasamila.png");
  width: 35vw;
  height: auto;
  background-size: cover;
  background-position: center;
}

.image-texte1 p{

  text-align: justify;
  font-family: Poppins;
  color: white;
  display: flex;
  align-items: center;
  width: 50%;
  flex-wrap: wrap;
}

@media screen and (max-width: 830px) {
  .logo{
    height: 250px;
    width: auto;
  }
  .contenu h1 {
    margin-bottom: 50px;
  }


  .image-texte1 {
    flex-direction: column;
    height: 500px;

  }
  .image-texte1 p {
    flex-direction: column;
    width: 100%;

  }
  .logo{
    margin-top: 20px;
  }
}

.casa1{
  background-image: url("../images/casamila1.png");
  width: 100%;
  height: 630px;
  background-position: center;
  background-size: cover;
}
.casa2{
  background-image: url("../images/casamila2.png");
  width: 100%;
  height: 630px;
  background-position: center;
  background-size: cover;
}
.casa3{
  background-image: url("../images/casamila3.png");
  width: 100%;
  height: 630px;
  background-position: center;
  background-size: cover;
}

.maquette h1{
  margin-top: 40px;
  margin-bottom: 40px;

}

.maquette a {
  color: white;
  text-decoration: none;
  font-family: Roboto;

}
.maquette a:hover {
  color: #f2e252;
  transition:.4s;

}
</style>