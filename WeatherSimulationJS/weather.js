function checkWarning(temp, condition) {
    let warning = document.getElementById("extreme");
    if (condition === "Snow" && temp < -10) {
        warning.textContent = `Do not go outside!`;
    }
    else {
        warning.textContent = "";
    }}

function weatherImage(temp, condition, cloudiness) {
    let showImage = document.getElementById("image");
    if (temp < 0) {
        if (condition === "Snow") {
            showImage.src = "./images/freezing.png";
            document.body.style.backgroundColor = "#d4f1f9";
            document.querySelector("#favicon").href = "./images/snow.ico";
        }
        else {
            showImage.src = "./images/sick.png";
            document.body.style.backgroundColor = "#1a1f71";
            document.querySelector("#favicon").href = "./images/icy.ico";
        }
    }
    else if (temp > 20) {
        if (condition === "Snow") {
            showImage.src = "./images/shocked.png";
            document.body.style.backgroundColor = "#ffcccb";
            document.querySelector("#favicon").href = "./images/snow.ico";
        }
        else if (condition === "Rain") {
        showImage.src = "./images/easy.png";
        document.body.style.backgroundColor = "#92a8d1";
        document.querySelector("#favicon").href = "./images/rain.ico";
        }
        else {
            showImage.src = "./images/hot.png";
            document.body.style.backgroundColor = "#ffda77";
            document.querySelector("#favicon").href = "./images/sunny.ico";
        }
    }
    else {
        if (condition === "Rain") {
            showImage.src = "./images/mad.png";
            document.body.style.backgroundColor = "#5d737e";
            document.querySelector("#favicon").href = "./images/rain.ico";
        }
        else if (condition === "Snow") {
            showImage.src = "./images/really.png";
            document.body.style.backgroundColor = "#f2f6ff";
            document.querySelector("#favicon").href = "./images/snow.ico";
        }
        else {
            showImage.src = "./images/smiling.png";
            document.body.style.backgroundColor = "#aeecef";
            document.querySelector("#favicon").href = "./images/sunny.ico";
        }
    }

    if (condition !== "Snow" && condition !== "Rain") {
        if (cloudiness > 75) {
            document.querySelector("#favicon").href = "./images/cloud.ico";
        }
        else if (cloudiness >= 20 && cloudiness <= 75) {
            document.querySelector("#favicon").href = "./images/part-cloud.ico";
        }
        else {
            document.querySelector("#favicon").href = "./images/sunny.ico";
        }
    }
}

function generateInfo() {
    //Initialize objects
    let temperature = document.getElementById("temperature");
    let condition = document.getElementById("condition");
    let cloudiness = document.getElementById("cloudiness");

    //Generate random temperature value in range (-10 to +40)
    let randomTemp = Math.floor(Math.random() * (40 - (-50) + 1)) + (-50);

    //Generate random condition
    const conditionArray = ["Clear", "Rain", "Snow"];
    let index = Math.floor(Math.random() * conditionArray.length);
    let randomCondition = conditionArray[index];

    //Generate random cloudiness % in range (0 - 100)
    let randomCloudiness = Math.floor(Math.random() * 101);

    //Display result in HTML
    temperature.textContent = `Temperature: ${randomTemp}°C`;
    condition.textContent = `Condition: ${randomCondition}`;
    cloudiness.textContent = `Cloudiness: ${randomCloudiness}%`;
    weatherImage(randomTemp, randomCondition, randomCloudiness);
    checkWarning(randomTemp, randomCondition);
}

//Generate random weather upon page load
document.addEventListener("DOMContentLoaded", function () {
    generateInfo();
    timer();
});

//Set the interval to call upon generateInfo function every 180 seconds
setInterval(generateInfo, 180000);
