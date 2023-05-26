// home.html

langList = ["Java","Python", "C#", "Javascript"]

for(let i=0; i<langList.length; i++) {
    console.log(langList[i]);
    // document.getElementById("java").innerText = langList[i];
    // document.getElementById("python").innerText = "python";
    // document.getElementById("java").innerText = "java";
    // document.getElementById("java").innerText = "java";
}



// dabbling with time
const start = new Date();
let seconds = start.getSeconds();
let minutes = start.getMinutes();

function time() {
    const submittedTime = new Date();
    let submittedSeconds = submittedTime.getSeconds();
    let submittedMinutes = submittedTime.getMinutes();

    let secondsPassed = submittedSeconds-=seconds;
    let minutesPassed = submittedMinutes-=minutes;
    console.log("time passed: ", submittedMinutes, "mins, ", secondsPassed, " seconds")

    if(secondsPassed >= 5) {
        document.getElementById("java").innerText = "java";
    }
}

