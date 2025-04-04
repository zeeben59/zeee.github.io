// ************* menu selector *****************
// show menu
const menuButton = document.querySelector('.nav-toggler'),
    closeButton = document.querySelector('.close-btn'),
    addclass = document.querySelector('.aside');
menuButton.addEventListener("click", function() {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener("click", function() {
    addclass.classList.remove('showmenu')
})



// ************************ typing animation ***********************

document.addEventListener("DOMContentLoaded", function () {
  var strings = [" UI/UX Designer", " Freelancer", " Web Developer", " Graphic Designer", " Software Developer", "n Automated Telegram Bot Developer"];
  var typingElement = document.querySelector(".typing");
  var currentStringIndex = 0;
  var currentString = '';
  var typingSpeed = 100; // Adjust typing speed here
  var eraseSpeed = 60; // Adjust erasing speed here
  var delayBetweenStrings = 1000; // Adjust delay between strings here

  function typeString() {
    if (currentString.length < strings[currentStringIndex].length) {
      currentString += strings[currentStringIndex].charAt(currentString.length);
      typingElement.textContent = currentString;
      setTimeout(typeString, typingSpeed);
    } else {
      setTimeout(eraseString, delayBetweenStrings);
    }
  }

  function eraseString() {
    if (currentString.length > 0) {
      currentString = currentString.slice(0, -1);
      typingElement.textContent = currentString;
      setTimeout(eraseString, eraseSpeed);
    } else {
      currentStringIndex = (currentStringIndex + 1) % strings.length;
      setTimeout(typeString, typingSpeed);
    }
  }

  typeString();
});



// downlaoding pdf file

document.getElementById("DownloadCV").addEventListener("click",
function(){
  window.open("PROFILE.pdf","_blank");
});


// ajax form

 var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


