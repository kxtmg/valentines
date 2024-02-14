function clickedYes(element) {
    // "yippie!" w gif and sound
    document.getElementById("gif").src="yippie.gif";

    const question = document.getElementById("question");
    const button1 = document.getElementById("yes");
    const button2 = document.getElementById("no");

    question.remove();
    button1.remove();
    button2.remove();

    var audio = new Audio("yippee.mp3");
    audio.play();
}

function clickedNo() {
    const buttonText = document.querySelector("#no");
    const prompts = ["null", "please", "i'm begging", "please reconsider", "are you sure", 
    "grant me another chance", "give me an opportunity", 
    "can you be absolutely certain about this?", 
    "I implore you with every fiber of my being, please, I'm on my knees!"];
    
    let count = 0;
    let btn = document.getElementById("no");
    const button1 = document.getElementById("yes");
    btn.onclick = function(){
        count++;
        if (count < prompts.length) {
            buttonText.innerHTML = prompts[count];
        } else {
            buttonText.innerHTML = "damn fr?";
            document.getElementById("gif").src="disappointed.png";
            button1.remove();
        }
    }
}