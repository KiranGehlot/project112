Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera= document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id= "captured_image" src="'+ data_uri +' " > '

    })
}

console.log('ml5.version:' , ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CBZlKPECx/model.json' , modelloaded );

function modelloaded() {
    console.log('model is loaded');

}

prediction_1=""


function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = " First Prediction Is " + prediction_1;
    speak_data_2 = " Second Prediction Is " + prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);

}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
    
}

function gotResult( error, results)  {
    if (error){
        console.error(error);

    }

    else {
        console.log(results);
        document.getElementById("result_emoji_name").innerHTML=results[0].label
        speak()

        if(results[0].label=="Thumbs Up") {
            document.getElementById("update_emoji1").innerHTML="&#128077;";
        }

        if(results[0].label=="Victory") {
            document.getElementById("update_emoji1").innerHTML="&#9996;";
        }

        if(results[0].label=="Raised Fist") {
            document.getElementById("update_emoji1").innerHTML="&#9994;";
        }

        


        
    
    }



}