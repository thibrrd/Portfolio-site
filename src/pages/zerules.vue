<template>
  <div>
    <div class="presentation">
      <div class="banniere">
      </div>
      <div class="titre">
        <h1>LOGO ZERULES</h1>
      </div>
    </div>
    <div class="contenu">
      <div class="description">
        <p>For my first group project I had to make a logo to represent our project, it was my first logo and I really enjoyed doing it.</p>
      </div>
      <h1>The logo</h1>
      <div class="image-texte1">

        <p>If we look closely, we notice a rather discreet Z that echoes the name of the project.
          It is a Nordic rune called “Jera”, it represents the realization, the cycle, the completion as well
          that the eternal restart, as after a game of games that one would like to start again. It is also
          associated with the goddess Freya, mother of the gods, representing the family, which therefore echoes the family side/
          app friends.
          To finish, the colors. there are 3 colors present, The yellow in the foreground that shows the side amitier
          joy of playing a game, in the background the red to remind above all that in a game there is a winner,
          therefore of the competitivity, and in the last plan, the purple background, the basis of all games of company and moment with
          his family or friends that it is above all a moment of relaxation.
        </p>
        <div class="logo">
        </div>
      </div>
      <h1>Web Model</h1>
      <div class="maquette">
        <div class="zerules"></div>
        <div class="zerules2"></div>
        <h1><a href="https://xd.adobe.com/view/9cb04046-1658-4308-9d89-a25b365de1b6-c9e3/screen/c4ce6084-84de-4d3a-954b-8a3c62cd22af">See the web model</a></h1>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "zerules"
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
.zerules2{
  background-image: url("../images/maquettezr1.png");
  width: 100%;
  height: 630px;
  background-position: center;
  background-size: cover;
}
.zerules{
  background-image: url("../images/maquettezr.png");
  width: 100%;
  height: 630px;
  background-position: center;
  background-size: cover;
}
.banniere{
  width: 100vw;
  height: 30vh;
  background-image: url("../images/zerulesbg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  background-position:top;
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
  background-image: url("../images/zerules.png");
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