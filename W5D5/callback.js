const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  // window.setTimeout(function() {
  //   alert("HAMMERTIME");
  // }, 5000);



function Hammertime(time) {
  window.setTimeout(function() {
    alert(`${time} IS HAMMERITME!`);
  }, time);
}


// Hammertime(5000);

function tea () {
  reader.question('Do you like tea?', function(res) {
    console.log(`You replied ${res}.`);
    reader.question('Do you like coffee?', function(res2) {
      console.log(`You replied ${res2}.`);
    });
  });

  reader.close();
}

tea();
