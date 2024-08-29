<index.html>

  <head>
    <title>Color Vision Test APP</title>
  </head>

  <body>
    <html lang="en">

    <body>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <title>Color Vision Test APP</title>
        <link rel="stylesheet" type="text/css" href="style.css">
      </head>

      <body>
        <div class="container">
          <div id="test">
            <h2>Instructions:</h2>
            <p>LOOK AT THE FOLLOWING IMAGES AND SELECT THE NUMBER YOU CAN SEE IN THE IMAGE

            <p> NOTE: Hue check is designed to check whether they have colour vision deficiency or not. It basically used by Ishihara plates. It totally consists of 38 slides. By answering those slides you may come to know whether the user has colour vision deficiency or not.</p>

          </div>
        </div>
        <div class="container">
          <p>Question 1:</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ishihara_19.PNG/320px-Ishihara_19.PNG" alt="Image 1">
          <div class="choices">
            <input type="radio" name="image1" value="1">nothing
            <input type="radio" name="image1" value="2">2
            <input type="radio" name="image1" value="3">3
          </div>
        </div>
        <div class="container">
          <p>Question 2:</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ishihara_9.png/300px-Ishihara_9.png" alt="Image 2">
          <div class="choices">
            <input type="radio" name="image2" value="1">74
            <input type="radio" name="image2" value="2">27
            <input type="radio" name="image2" value="3">89
          </div>
        </div>
        <div class="container">
          <p>Question 3:</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ishihara_1.svg/320px-Ishihara_1.svg.png" alt="Image 3">
          <div class="choices">
            <input type="radio" name="image3" value="1">13
            <input type="radio" name="image3" value="2">12
            <input type="radio" name="image3" value="3">35
          </div>
        </div>
        <div class="container">
          <p>Question 4:</p>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-a1a9da6e22c1ca832b5e73bf8e1e0027-lq" alt="Image 4">
          <div class="choices">
            <input type="radio" name="image4" value="1">28
            <input type="radio" name="image4" value="2">26
            <input type="radio" name="image4" value="3">39
          </div>
        </div>
        <div class="container">
          <p>Question 5:</p>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-5d6773723c5a9f583a50e8b01571698a-lq" alt="Image 5">
          <div class="choices">
            <input type="radio" name="image5" value="1">43
            <input type="radio" name="image5" value="2">28
            <input type="radio" name="image5" value="3">16
          </div>
        </div>
        <div class="container">
          <p>Question 6:</p>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-7edb983297bcc04fce5e5b0680d55d51-lq" alt="Image 6">
          <div class="choices">
            <input type="radio" name="image6" value="1">45
            <input type="radio" name="image6" value="2">54
            <input type="radio" name="image6" value="3">67
          </div>
        </div>
        <div class="container">
          <p>Question 7:</p>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-4f5d27598ae11ba1204008a1cfbb8849-lq" alt="Image 7">
          <div class="choices">
            <input type="radio" name="image7" value="1">29
            <input type="radio" name="image7" value="2">78
            <input type="radio" name="image7" value="3">35
          </div>
        </div>
        <div class="container">
          <p>Question 8:</p>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-296ff0fddf8a3b20b077c0be8f3da8f7-lq" alt="Image 8">
          <div class="choices">
            <input type="radio" name="image8" value="1">3
            <input type="radio" name="image8" value="2">8
            <input type="radio" name="image8" value="3">0
          </div>
        </div>
        <div class="container">
          <p>Question 9:</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ishihara_23.PNG/320px-Ishihara_23.PNG.png" alt="Image 9">
          <div class="choices">
            <input type="radio" name="image9" value="1">63
            <input type="radio" name="image9" value="2">72
            <input type="radio" name="image9" value="3">42
          </div>
        </div>
        <div class="container">
          <p>Question 10:</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ishihara_11.PNG/320px-Ishihara_11.PNG" alt="Image 10">
          <div class="choices">
            <input type="radio" name="image10" value="1">6
            <input type="radio" name="image10" value="2">9
            <input type="radio" name="image10" value="3">8
          </div>
        </div>
        <div class="container">
          <button onclick="checkResults()" id="#bt">Check Results</button>
        </div>
        <div id="results" style="display: none;">
          <h2>Results:</h2>
          <p id="resultText"></p>
        </div>
        </div>
        <script src="script.js"></script>
      </body>
      </script>
    </body>

    </html>
