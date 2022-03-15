<template>

<div class="presentation">
  <div class="texte">
  <h1>Thibaud BARRAND</h1>
  <p>Hello, my name is Thibaud and I am 20 years old. I found a passion in the design during this pandemic, and I like
    to experiment some news tendance et new way to create.</p>
  </div>
</div>

</template>

<script>
export default {
  name: "aboutme"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.presentation{
  width: 100vw;
  height: 100vh;
}

.texte{
  display: flex;
  color: white;
  flex-direction: column;
  width: 30%;
  margin-left: 200px;
  margin-top: 300px;
  font-family: Poppins;
}
.texte h1{
  margin-bottom: 20px;
  color: #F2E252;
  font-family: Poppins;
}
.texte p{
  line-height: 30px;
  margin-left: 40px;
}

@media screen  and (max-width: 960px){
.texte{
  width: 50%;
  margin-left: 100px;
  margin-top: 200px;
}

}
@media screen  and (max-width: 620px){
  .texte{
    width: 60%;
    margin-left: 70px;
    margin-top: 150px;
  }


}

</style>