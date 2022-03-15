<template>
  <div>
    <div class="presentation">
      <div class="banniere">
      </div>
      <div class="titre">
        <h1>PARTY AXONE</h1>
      </div>
    </div>
    <div class="contenu">
      <div class="description">
        <p>J'ai proposer mes services afin de creer une affiche promotionel pour une soirée etudiante a l'axone</p>
      </div>
      <h1>Consignes</h1>
      <div class="image-texte1">

        <p>J'avais très peu de temps pour faire cette affiche et je suis assez fier du résultat. J'ai recu un dessin qui
          montrait a quoi l'affiche devait ressembler. Et grace au différente images sur internet j'ai pu réaliser l'affiche</p>
        <div class="affiche">
        </div>
      </div>
      <h1>Process</h1>
      <div class="process">
        <div class="affiche1"></div>
        <div class="affiche2"></div>
        <div class="affiche3"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "axone"
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
  background-image: url("../images/AX.jpg");
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
.affiche{
  background-image: url("../images/prototype.png");
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
  .affiche{
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
  .affiche{
    margin-top: 20px;
  }
}
.process{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 30px;
  padding-bottom: 50px;
}
.affiche1{
  background-image: url("../images/affiches-avant.png");
  height: 50vh;
  width: 300px;
  background-size: cover;
}
.affiche2{
  background-image: url("../images/Affiche-apres.png");
  height: 50vh;
  width: 300px;
  background-size: cover;
}
.affiche3{
  background-image: url("../images/AX.jpg");
  height: 50vh;
  width: 300px;
  background-size: cover;
}

</style>