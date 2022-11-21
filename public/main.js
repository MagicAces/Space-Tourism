addEventListener("DOMContentLoaded", ()=> {
  if(window.innerWidth <= 768) {
    document.querySelector(".tech img").setAttribute("src", "./assets/technology/image-launch-vehicle-landscape.jpg");
  } else {
    document.querySelector(".tech img").setAttribute("src", "./assets/technology/image-launch-vehicle-portrait.jpg");
  }
});

var nav2Links = document.querySelectorAll(".nav-2");
var nav3Links = document.querySelectorAll(".nav-3");
var nav4Links = document.querySelectorAll(".nav-4");

fetch("data.json")
  .then((response) => {
     return response.json()
  }).then(function(obj) {
    var data = obj;
    nav2Links.forEach(function(nav2Link, index) {
      nav2Link.addEventListener("click", ()=> {

        let name = data.destinations[index].name;
        let image = data.destinations[index].images.webp;
        let description = data.destinations[index].description;
        let distance = data.destinations[index].distance;
        let travel = data.destinations[index].travel;
        document.querySelector("h2").innerText = name;
        document.querySelectorAll("p")[0].innerText = description;
        document.querySelectorAll("img")[2].setAttribute("src", image);
        document.querySelectorAll(".sub-head2")[0].innerText = distance;
        document.querySelectorAll(".sub-head2")[1].innerText = travel;
        document.querySelector(".nav-2-active").classList.remove("nav-2-active");
        nav2Link.classList.add("nav-2-active");
      });
    });
  });



fetch("data.json")
  .then((response) => {
     return response.json()
  }).then(function(obj) {
    var data = obj;
    nav3Links.forEach(function(nav3Link, index) {
      nav3Link.addEventListener("click", ()=> {
        let name = data.crew[index].name;
        let image = data.crew[index].images.webp;
        let bio = data.crew[index].bio;
        let role = data.crew[index].role;
        document.querySelector("h4").innerText = role;
        document.querySelectorAll("h3 + p")[0].innerText = bio;
        document.querySelectorAll("img")[2].setAttribute("src", image);
        document.querySelector("h3").innerText = name;
        document.querySelector(".nav-3-active").classList.remove("nav-3-active");
        nav3Link.classList.add("nav-3-active");
      });
    });
  });


fetch("data.json")
  .then((response) => {
     return response.json()
  }).then(function(obj) {
    var data = obj;
    nav4Links.forEach(function(nav4Link, index) {
      nav4Link.addEventListener("click", ()=> {
        let name = data.technology[index].name;
        let image = data.technology[index].images.portrait;
        if(window.innerWidth <= 768)
        {
          image = data.technology[index].images.landscape;
        }
        let description = data.technology[index].description;
        document.querySelectorAll("h3 + p")[0].innerText = description;
        document.querySelector("h3").innerText = name;
        document.querySelectorAll("img")[2].setAttribute("src", image);
        document.querySelector(".nav-4-active").classList.remove("nav-4-active");
        nav4Link.classList.add("nav-4-active");
      });
    });
  });
//



window.addEventListener("resize", ()=> {
  if(document.querySelector(".tech") !== null) {
  if(window.innerWidth <= 768)
  {
    fetch("data.json")
      .then((response) => {
         return response.json()
      }).then(function(obj) {
        var data = obj;
        var text = document.querySelector(".tech img").getAttribute("src");
        for (var i = 0; i < data.technology.length; i++) {
          if(text === data.technology[i].images.landscape || text === data.technology[i].images.portrait)
            document.querySelector(".tech img").setAttribute("src", data.technology[i].images.landscape);
        }
      });
    }
    else {
      fetch("data.json")
        .then((response) => {
           return response.json()
        }).then(function(obj) {
          var data = obj;
          var text = document.querySelector(".tech img").getAttribute("src");
          for (var i = 0; i < data.technology.length; i++) {
            if(text === data.technology[i].images.portrait || text === data.technology[i].images.landscape )
              document.querySelector(".tech img").setAttribute("src", data.technology[i].images.portrait);
          }
    });
  }
}
});

let hamburger = document.querySelector(".nav-collapse")

hamburger.addEventListener("click", ()=> {
  if(document.querySelector(".sidebar").style.display === "none") {
    hamburger.setAttribute("src", "assets/shared/icon-close.svg");
    document.querySelector(".sidebar").style.display = "block";
  }
  else {
    hamburger.setAttribute("src", "assets/shared/icon-hamburger.svg");
    document.querySelector(".sidebar").style.display = "none";
  }
});

document.querySelector(".hero-box").addEventListener("click", ()=> {
  if(document.querySelector(".sidebar").style.display === "block") {
    hamburger.setAttribute("src", "assets/shared/icon-hamburger.svg");
    document.querySelector(".sidebar").style.display = "none";
  }
});

//Catch Arrow Listener


//  FOR NORMAL FETCHING
// navLinks.forEach(function(element, index) {
//   element.addEventListener("click", ()=> {
//     let name = data.destinations[index].name;
//     let images = data.destinations[index].images.png;
//     let description = data.destinations[index].description;
//     let distance = data.destinations[index].distance;
//     let travel = data.destinations[index].travel;
//
//     element.innerText = name;
//   });
// });
