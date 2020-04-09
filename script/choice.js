document.getElementById("submitbtn").addEventListener(choices);

function choices() {
    let check1 = false;
    let check2 = false;
    if (document.getElementById("arm").checked) {
        var focusarea = "arm";
        check1 = true;
    } else if (document.getElementById("leg").checked) {
        var focusarea = "leg";
        check1 = true;
    } else if (document.getElementById("core").checked) {
        var focusarea = "core";
        check1 = true;
    } else if (document.getElementById("cardio").checked) {
        var focusarea = "cardio";
        check1 = true;
    } else if (document.getElementById("all").checked) {
        var focusarea = "all";
        check1 = true;
    }

    if (document.getElementById("diff1").checked) {
        var diff = "1";
        check2 = true;
    } else if (document.getElementById("diff2").checked) {
        var diff = "2";
        check2 = true;
    } else if (document.getElementById("diff3").checked) {
        var diff = "3";
        check2 = true;
    } else if (document.getElementById("diff4").checked) {
        var diff = "4";
        check2 = true;
    } else if (document.getElementById("diff5").checked) {
        var diff = "5";
        check2 = true;
    }

    if (check1 == true && check2 == true) {
        localStorage.setItem('focusarea', 'diff');
        window.location.href = "workout.html"
    }
    else {
        alert("Choose a focus area and difficulty level.")

    }
}