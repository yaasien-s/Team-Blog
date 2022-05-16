<template>
  <div class="post">
    <div class="singal-post pt-32 grid grid-cols-2 mx-auto w-11/12">
      <div class="post-data">
        <img class="w-11/12 rounded-tr-2xl rounded-tl-2xl" src="../assets/images/postimage.png" alt="">
        <div class="post-details bg-black bg-opacity-50 rounded-bl-2xl rounded-br-2xl text-white w-11/12 p-6">
          <p>Category</p>
          <br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a quaerat rerum maxime, vel maiores
            voluptates totam minus tenetur iste ab magnam, expedita asperiores vero est saepe cupiditate, consectetur
            et!
          </p>
        </div>
      </div>
      <div class="comments">
        <div class="comments-data bg-black bg-opacity-50 rounded-2xl p-6">
          <p class="text-xl text-white text-opacity-50">comments</p>
          <p class="text-2xl text-white">@username</p>
          <br>
          <p class="text-white font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            exercitationem officia cupiditate autem
            tenetur odio cum expedita sapiente? Maxime dolore illum ipsam cupiditate delectus fugiat esse quos mollitia
            reprehenderit architecto!</p>
        </div>
      </div>
    </div>
  </div>
  <div class="m-post">
    <div class="post-details w-full mx-auto p-12 text-white">
      <p class="text-2xl mb-6">@username</p>
        <img class="w-full rounded-tr-2xl rounded-tl-2xl" src="../assets/images/postimage.png" alt="">
      <div class="`post-data bg-black bg-opacity-50 p-6 rounded-br-2xl rounded-bl-2xl">
        <p class="text-xl text-white text-opacity-50">Category</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam reiciendis veniam debitis dolores, temporibus a
          consequuntur corporis at ducimus neque doloribus laudantium </p>
      </div>

      <div class="comments space-y-3 mt-12 p-6 bg-black bg-opacity-50 rounded-2xl">
        <p class="text-xl">@username</p>
        <p class="text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .post {
    background-image: url('../assets/images/Feed-D.png');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 100vh;

    @media (max-width:600px) {
      display: none;
    }

    .post-data {
      img {
        height: 40%;
        object-fit: cover;
      }

    }

    .comments-data {
      height: 71.5%;
    }
  }

  .m-post {
    background-image: url('../assets/images/Feed.png');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 100vh;

    @media (min-width:600px) {
      display: none;
    }
  }
</style>