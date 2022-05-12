<template>
    <div class="feed">
        <div class="head p-3 bg-white bg-opacity-50 flex space-x-72 justify-center mb-6">
            <h1 class="text-2xl">{{ name }}</h1>
            <i class="fa-regular fa-user-circle text-2xl"></i>
        </div>
        <div v-if="blogs">
            <div v-for="blog of blogs"  :key="blog._id" :to="{ name: 'Home', params: { id: blog.id }}" >
                <div class="post-user flex p-6 space-x-3">
                    <i class="fa-regular fa-user-circle text-white text-2xl"></i>
                    <p class="text-white text-xl">{{blog.name}}</p>
                </div>
                <div class="post space-y-1 w-11/12 mx-auto rounded-3xl">
                    <img src="../assets/images/postimage.png" class="rounded-tr-3xl rounded-tl-3xl mx-auto " alt="">
                    <p class="text-white text-xl p-4">{{blog.category}}</p>
                    <p class="text-white font-bold p-4 pt-0">{{blog.body}}</p>
                </div>
                <div class="interaction space-x-5 w-11/12 mx-auto px-6 pt-3">
                    <i class="fa-regular fa-comment text-white text-3xl"></i>
                    <i class="fa-regular fa-heart text-white text-3xl"></i>
                    <i class="fa-solid fa-share-nodes text-white text-3xl"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                blogs:null,
                search:"",
                title:"",
                category:"",
                body:"",
                img:"",
            }
        },
        mounted(){
            fetch("https://blog-bac.herokuapp.com/post/", {
                method:"GET",
                header:{
                    "Content-type":"application/json; charset=UTF-8", 
                }
            })
            .then((response) => response.json())
            .then((json) =>{
                this.blog = json;
                this.blog.forEach(async(blog) => {
                    await fetch(
                        "https://blog-bac.herokuapp.com/user/admin",
                        {
                            method:"GET",
                            headers:{
                                "Content-type":"application/json; charset=UTF-8",
                                
                            }
                        }
                    )
                    .then((response) => response.json())
                    .then((json) =>{
                        blog.name = json.name;
                        console.log("success")
                    });
                });
            })
            .catch((err) =>{
console.log(err)
            });
        },
        methods:{
           editBlog: function(id){
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Signin" });
      }
      fetch("https://blog-bac.herokuapp.com/post/" + id, {
        method: "PUT",
        body: JSON.stringify({
          title: this.title,
          body: this.body,
          img:this.img
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Post Updated");
        this.$router.go()
        })
        .catch((err) => {
          alert(err);
        });
  }
  },
   computed:{
    filterBlogs:function(){
      return this.blogs.filter((blog) =>{
        return blog.author.match(this.search)
      })
    }
  }
    }
</script>

<style lang="scss" scoped>
    .feed {
        background-image: url('../assets/images/Feed.png');
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        height: 100vh;

        .post{
            background-color: #121127;
        }

        h1 {
            font-family: 'Lobster Two', cursive;
        }

        p {
            font-family: 'Lato', sans-serif;
        }
    }
</style>