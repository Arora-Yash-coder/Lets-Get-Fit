purpose = document.getElementbyId("purpose").value;
var arm;
var leg;
var core;
var cardio;
var all;
let difficulty;


// for  losing weight/ gaining muscles
if (purpose == "losing weight" || purpose == "gaining muscles") {
arms = [["bicep pushup", "tricep pushup", "pushup plus"], "slide out plank", "shoulder extenstions","finger flicks"];
legs = ["calf raises", "hands and knee leg lift",["squats", "jump squats","single leg squats"], "kicks"];
core = ["hundreds", "plank", ["crunches", "crunchies", "v snaps"], ["side plank", "oblique dip", "side star"]];
cardio = ["jumping jacks", ["high knees", "tuck jumps"],"burpees", "mountain climbers"];
all = [["swimmers", "back extensions"], "mountain climbers", "squats", ["burpees", "burpees with push ups", "burpees with push ups and tuck jumps"]];
if (difficulty == 0) {
arm[0] = arm[0][0] 
legs[2] = legs[2][0]
core[1] = core[1][0]
cardio[1] = cardio[1][0]
}
else if (difficulty == 1) {
arm[0] = arm[0][0]
legs[2] = legs[2][0] 
core[1] = core[1][0]
cardio[1] = cardio[1][0]
}
else if (difficulty == 2) {
arm[0] = arm[0][1] 
legs[2] = legs[2][1]
core[1] = core[1][1]
cardio[1] = cardio[1][0]
}
else if (difficulty == 3) {
arm[0] = arm[0][1] 
legs[2] = legs[2][1]
core[1] = core[1][1]

}
else if (difficulty == 4) {
arm[0] = arm[0][2] 
legs[2] = legs[2][2]
core[1] = core[1][2]
}
}


// for flexibility
else if (purpose == "gaining flexibility") {
arm = ["arms behind fold forward", "pull wrist stretch", "reach across", ["easy behind head", "hard behind back"]];
legs = ["lunge sequence", "straddle fold", "pike fold", "splits"];
core = ["seal", ["bridge", "wheel"], "twists", "side stretch"];
cardio = null;
all = ["arms behind fold forward", "straddle fold", "splits", "seal"];
if (difficulty == 0) {
arm[3] = arm[3][0] 

core[1] = core[1][0]
}
else if (difficulty == 1) {
arm[3] = arm[3][0] 

core[1] = core[1][0]
}
else if (difficulty == 2) {
arm[3] = arm[3][0]

core[1] = core[1][0]
}
else if (difficulty == 3) {
arm[3] = arm[3][1] 

core[1] = core[1][1]
}
else if (difficulty == 4) {
arm[3] = arm[3][1] 

core[1] = core[1][1]
}

}
