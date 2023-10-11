function setup(){
    canvas =  createCanvas(400, 400);
    canvas.position(500, 150);
    video = createCapture(VIDEO);
    video.size(550, 500)
   posenet = ml5.poseNet(video, modelLoaded)
   posenet.on("pose", gotPoses)
  }
  
  function draw(){
    background("#0000FF")
  }
  function modelLoaded(){
    console.log("Posenet is working.")
  }
  function gotPoses(results){
    if(results.length > 0){
      console.log(results);
    }
  }
  

  