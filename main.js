let boxes = document.querySelectorAll(".button");
let new_game = document.querySelector(".button-1");
let msg_container = document.querySelector(".winner");
let reset_btn = document.querySelector(".button-end");
let msg = document.querySelector("#msg");

let winner_p = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

let turnO = true;

const disabled_boxes = () => {
  for (let box of boxes) box.disabled = true;
};

const enabled_boxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  msg_container.classList.add("hide");
};

const reset_game = () => {
  turnO = true;
  enabled_boxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turnO ? "X" : "O";
    box.style.color = turnO ? "red" : "blue";
    box.style.fontSize = "7vmin";
    turnO = !turnO;
    box.disabled = true;
    winner_check();
  });
});

const showwinner = (winner) => {
  msg.innerText = `congratulation winner is ${winner}`;
  msg_container.classList.remove("hide");
  disabled_boxes();
};

const winner_check = () => {
  for (let p of winner_p) {
    let a = boxes[p[0]].innerText;
    let b = boxes[p[1]].innerText;
    let c = boxes[p[2]].innerText;
    if (a && a === b && a === c) showwinner(a);
  }
};

new_game.addEventListener("click", reset_game);
reset_btn.addEventListener("click", reset_game);


