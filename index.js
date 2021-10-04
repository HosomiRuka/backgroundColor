//#btn が押されたときconsole.log();にボタンが押されましたと表示される
document.getElementById("btn").onclick = function () {
  console.log("ボタンが押されました");
};

//#alert が押されたときalertにボタンが押されましたと表示される
document.getElementById("alert").onclick = function () {
  alert("ボタンが押されました");
};

//#backgroundColor が押されたときに
document.getElementById("backgroundColor").onclick = function () {
  //テキストボックスのvalue値をとってきて 変数valueに代入する
  let value = textBox.value;
  //console.logで取得してきたvalueの値を表示
  console.log(value);

  //取得してきたid box_1の背景色をvalueの値にする
  document.getElementById("box_1").style.backgroundColor = value;
  console.log("背景色を変更するボタンが押されました");
};

// //btn_2を押すとbox_2を消します
// document.getElementById("btn_2").onclick = function () {
//   console.log("消します");
//   document.getElementById("box_2").style.display = "none";
// };

// //btn_3を押すとbox_2を表示させます
// document.getElementById("btn_3").onclick = function () {
//   console.log("出します");
//   document.getElementById("box_2").style.display = "block";
// };

// //btn_4を押すとbox_3を消します
// document.getElementById("btn_4").onclick = function () {
//   console.log("出します");
//   document.getElementById("box_3").style.display = "none";
// };

// //btn_5を押すとbox_3を表示します
// document.getElementById("btn_5").onclick = function () {
//   console.log("出します");
//   document.getElementById("box_3").style.display = "block";
// };

// //btn_6を押すとbox_4を消します
// document.getElementById("btn_6").onclick = function () {
//   console.log("出します");
//   document.getElementById("box_4").style.display = "none";
// };

// //btn_7を押すとbox_4を表示します
// document.getElementById("btn_7").onclick = function () {
//   console.log("出します");
//   document.getElementById("box_4").style.display = "block";
// };

document.getElementById("A").onclick = function () {
  console.log("Aが押されました");

  document.getElementById("box_2").style.display = "block";
  document.getElementById("box_3").style.display = "none";
  document.getElementById("box_4").style.display = "none";
};

document.getElementById("B").onclick = function () {
  console.log("Aが押されました");

  document.getElementById("box_2").style.display = "none";
  document.getElementById("box_3").style.display = "block";
  document.getElementById("box_4").style.display = "none";
};

document.getElementById("C").onclick = function () {
  console.log("Aが押されました");

  document.getElementById("box_2").style.display = "none";
  document.getElementById("box_3").style.display = "none";
  document.getElementById("box_4").style.display = "block";
};

//テキストボックスのidを取得して textBoxに代入する
let textBox = document.getElementById("backgroundColor__text");
console.log(textBox);

//h2と言う名の変数に取得してきたh2要素を代入してconsole.logに表示させる
let h2 = document.getElementById("text__area");
console.log(h2);

let bg = document.getElementById("box_1");
console.log(bg);

// let textBox = document.getElementById("backgroundColor__text");
// console.log(textBox);

// let value = textBox.value;
// console.log(value);

// let h2 = document.getElementById("text__box");
// console.log(h2);

// let output = "入力されたのは" + value + "です";
// h2 = output;
/*================
SyntaxError: missing ) after argument list[詳細] index.js:1:13
^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^      ^^^^^^^^　^^^^
エラーの種類                |                        | 　行番号:列番号
                  エラー内容の説明                 ファイル名
=================*/
