
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const likeBtn = document.getElementById("heart-icon");
likeBtn.addEventListener("click", function () {
    posts[randomIndex].likes += 1;
    likes.innerHTML = `<b>${posts[randomIndex].likes} likes</b>`;
    // console.log(posts[randomIndex].likes);
});

const randomIndex = Math.floor(Math.random() * 3);
// console.log(randomIndex);
const avatarImg = document.getElementById("section1-content");
avatarImg.innerHTML =
    `<img id="avatar-img" src="${posts[randomIndex].avatar}">
    <div class="name-n-location-container">
        <h2 id="name">${posts[randomIndex].name}</h2>
        <h4 id="location">${posts[randomIndex].location}</h4>
    </div>`;
// const name = document.getElementById("name");
// const address = document.getElementById("location");

const post = document.getElementById("post");
post.innerHTML = `<img id="post-img" width="500px" src="${posts[randomIndex].post}">`;

const likes = document.getElementById("likes");
likes.innerHTML = `<b>${posts[randomIndex].likes} likes</b>`;

const username = document.getElementById("username");
username.innerHTML = `<b>${posts[randomIndex].username}</b>`;

const comment = document.getElementById("comment").innerText = posts[randomIndex].comment;


;
