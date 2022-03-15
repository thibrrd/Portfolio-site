<template>
<div>
  <footer>
    <div class="content">

      <div class="texte">
        <h1>Interested ? </h1>
        <h2>Let's discuss ! </h2>
      </div>

      <div class="reseau">
      <a href="mailto:thibaud.barrand@gmail.com">Mail</a>
      <a href="https://www.linkedin.com/in/thibaud-barrand-318264198/">Linkedin</a>
      <a href="https://www.instagram.com/thibrrd/">Instagram</a>
    </div>



    </div>
    <p>Portfolio and creation realised by <b> Thibaud BARRAND</b></p>
  </footer>
</div>
</template>

<script>
export default {
  name: "t-footer"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap');

footer{
  height: 350px;
  width: 100%;
  background-color: #F2E252;
  margin: 0 auto;
  padding-top: 30px;

}

h1{
  font-family: Poppins;
  font-weight: bold;
  font-size: 5rem;

  color:  #121212;
}

h2{

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 3rem;
  color:  #121212;
}


.content{
  display: flex;
  align-items: center;
  width: 78%;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 15px;

}

.texte{
  display: flex;
  align-items: flex-start;
  flex-direction: column;

}

.reseau{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

}


.reseau a{
  color:  #121212;
  margin-bottom: 10px;
  text-decoration: none;
  font-family: Poppins;
  font-size: 1rem;
  transition: transform 0.1s;

}

.reseau a:hover{
  font-weight: bold;
  transform: scale(1.15);
  transition: transform 0.1s;
}

.reseau a:last-of-type{
  margin-bottom: 0;
}

footer p {
  font-family: Poppins;
  font-weight: lighter;
  display: flex;
  margin: 0 auto;
  font-size: 10px;
  width: 78%;
  padding-top: 20px;
  justify-content: flex-end;

}

@media screen  and (max-width: 760px){

  h1{
    font-size: 4rem ;
  }
  footer>p{
    height: 50px;
  }

}
@media screen  and (max-width: 620px){

  h1{
    font-size: 3rem ;
  }
  h2{
    font-size: 2rem;
  }

  footer>p{
    height: 100px;
  }
  footer{
    height: 270px;
  }

}

@media screen  and (max-width: 500px){

  h1{
    font-size: 2rem ;
  }

  .reseau a{
    font-size: 1rem;
  }

  h2{
    font-size: 1.5rem;
  }

}


</style>