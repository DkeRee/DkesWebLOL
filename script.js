

    var headingEl = document.querySelector("#heading");
    headingEl.style.textAlign = "center";



    if(new Date().getHours()<12){
      document.getElementById("day").innerHTML = "Good Morning!";
    } else {
      document.getElementById("night").innerHTML = "Good Evening!";
    }

    function getHack(){
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
      alert("YOU HAVE BEEN HACKED BY YOUR COMPUTER");
    }
    function unhideDiscord(){
      document.getElementById("discord").style.display = 'block';
      document.getElementById("opendiscord").style.display = 'none';
      document.getElementById("closeddiscord").style.display = 'block';
    }

    function hideDiscord(){
      document.getElementById("discord").style.display = 'none';
      document.getElementById("closeddiscord").style.display = 'none';
      document.getElementById("opendiscord").style.display = 'block';
    }

    function displayTime(){
      alert(Date());
    }

    function startQuiz(){
      document.getElementById("question1").style.display = 'block';
      document.getElementById("answerA").style.display = 'block';
      document.getElementById("answerB").style.display = 'block';
      document.getElementById("answerC").style.display = 'block';
      document.getElementById("answerD").style.display = 'block';
      document.getElementById("exit").style.display = 'block'
    }

    function wrongAnswer(){
      alert("WRONG! I never said this would be a straightfoward quiz ;)");
    }

    function correctAnswer(){
      alert("YAY YOU GOT IT CORRECT!!!! BRAIN IS BIG FHJSHFJDSHFJSDHFDSHJFHDJFHSFJWHFKEHGKWEHGKDSHFKS");
    }

    
    function exitQuiz(){
      document.getElementById("question1").style.display = 'none';
      document.getElementById("answerA").style.display = 'none';
      document.getElementById("answerB").style.display = 'none';
      document.getElementById("answerC").style.display = 'none';
      document.getElementById("answerD").style.display = 'none';
      document.getElementById("exit").style.display = 'none';

    }


  function rollDie(){
    document.getElementById("dice").innerHTML = "You have rolled a " + Math.floor(Math.random() * 6 + 1) + "!";
  }


   var text = '{"words":[' +
  '{"firstName":"car","lastName":"large"},' +
  '{"firstName":"pp","lastName":"stuck"},' +
  '{"firstName":"human","lastName":"scratch"}]}';

obj = JSON.parse(text);

function randomPick(){
document.getElementById("output").innerHTML = 
obj.words[Math.floor(Math.random() * 2 + 1)].firstName + " " + obj.words[Math.floor(Math.random() * 2 + 1)].lastName;
}


  function showWaifu(){
    document.getElementById("waifu").style.display= 'block';
    document.getElementById("hidewife").style.display = 'block';
    document.getElementById("showwife").style.display = 'none';
  }

  function hideWaifu(){
    document.getElementById("waifu").style.display = 'none';
    document.getElementById("hidewife").style.display = 'none';
    document.getElementById("showwife").style.display = 'block';
  }


  var link = "https://www.youtube.com/watch?v=oHg5SJYRHA0";


