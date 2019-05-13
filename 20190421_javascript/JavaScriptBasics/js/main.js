'use strict';

//シングルとダブルの使い分け
// console.log('it\'s me!');
// console.log("it's me!");

//\n:改行
//\t:tab
// console.log('hell\no wor\tld');
// console.log('hello' + 'world');

//数値計算
// console.log(10 + 3);
// console.log(10 - 3);
// console.log(10 * 3);
// console.log(10 / 3);
// console.log(10 % 3);
// console.log(10 ** 3);
// console.log(2 + 10 * 3);
// console.log((2 + 10) * 3);

//定数
// const price = 150;
// console.log(price * 140);
// console.log(price * 160);

//変数:varは古い書き方で問題があるので使わない
//英数字、$、_のみ。数値で開始できない。大小区別。予約語不可。
// let price = 170;
// console.log(price * 140);
// console.log(price * 160);

// let price = 500;
// price = price + 100;
// price += 100;
// price *= 2;
// price += 1;
// price ++;
// price --;

//データ型
//string,number,undefined(宣言したが値が代入されていないもの),null,
//boolean(true/false),object({a:3,b:5})
// a==b : 等価演算子　文字列と数値の比較の場合、文字列を数値に変換してくれる
// a===b : 厳密等価演算子　型を変換することなく比較★コチラを使うべき
// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null); //object型といわれるが、これは有名なjsのバグ

//数値計算できる
// console.log('5' * 3);
// console.log('5' - '3');
//数値計算できない
// console.log('5' + 3); //53
//変換
// console.log(parseInt('5',10) + 3); //10進数に変換
// console.log(parseInt('hello',10) + 3); //NaN

//条件分岐
// const score = 17;

// if(score >= 80){
//   console.log('Great!');
// }else if(score >= 60){
//   console.log('Good');
// }else{
//   console.log('OK');
//}

//条件演算子: 条件?true:false
// score >= 80 ? console.log('Great!') : console.log('OK');

//論理演算子
// && , || , !
// const score = 60;
// const name = 'taguchi';
//
// if(score >= 50 && name === 'taguchi'){
//     console.log('hello, '+name);
// }

// const signal = 'red';
// switch (signal) {
//   case 'red':
//       console.log('Stop!');
//   break;
//   case 'yellow':
//       console.log('Caution!');
//   break;
//   case 'blue':
//   case 'green':
//       console.log('Go!');
//   break;
//   default:
//       console.log('wrong signal')
// }

//ループ
// for (let i=0; i<10; i++){
  // console.log('hello, '+i);
  //テンプレートリテラル
  // console.log(`${i} hello`);
// }

// let hp = 200;
// while(hp > 0){
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// for (let i=1; i<=10; i++){
//   if(i % 3 === 0){
//     continue;
//     //以降の処理が実行されず、次のループへ
//   }else if(i === 8){
//     break;
//     //ループから抜ける
//   }
//   console.log(i);
// }

//関数
// function showAd(message = 'AD') { //仮引数
//   console.log('----------');
//   console.log(`--- ${message} ---`);
//   console.log('----------');
// }
// showAd('Header AD'); //実引数
// console.log('Tom is great!');
// console.log('Bob is great!');
// // showAd('AD');
// showAd();
// console.log('Steve is great!');
// console.log('Rich is great!');
// showAd('Footer AD');

// function sum(a, b, c){
//   return a+b+c;
//   //以降の処理は無視される
// }
// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

//関数式
// const sum = function(a,b,c){ //無名関数
//   return a+b+c;
// };
// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

//アロー関数
// const sum = (a,b,c) =>{
//   return a+b+c;
// };
// const sum = (a,b,c) => a+b+c;
// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

// const double = a => 2*a;
// console.log(double(12));

//スコープ
//ブロック内でのみ有効となるので、ほかの人の変数と競合しないように
//全体を{}で括っておくのが良い習慣。
// {
// const x = 2; //グローバルスコープ
// function f (){
//   //このブロック内でのみ有効
//   const x = 1; //グローバルよりも優先される
//   console.log(x);
// }
// f(); // 1
// console.log(x);// 2
// }
// console.log(x);// Error

//配列
// const score1 = 80;
// const score2 = 90;
// const score3 = 40;

// const scores = [80, 90, 40];
// console.log(scores);
// console.log(scores[1]);
//constで定義したobjの再定義ができないのであって、要素は変えられる
//scores = 1; //error
// scores[2] = 100;
// console.log(scores);
// console.log(scores.length);

//オブジェクト
// const player = {
//   name: 'taguchi', //プロパティ（メンバー）＝＞名前（キー）：値
//   score: 32, //最期の,はあってもなくてもよい
// };
// console.log(player);
// console.log(player.name);
// console.log(player['name']);
// player.score = 100;
// player.email = 'taguchi@gmail.com';
// delete player.name;
// console.log(player);

//クラス
// class Player { //親クラス
//   //初期化処理
//   constructor(name, score) { //メソッド
//     this.name = name;
//     this.score = score;
//   }
//
//   showInfo(){
//     console.log(`name: ${this.name} score: ${this.score}`);
//   }
//
//   //staticメソッド：インスタンス化せずに呼び出せるメソッド
//   static showVersion(){
//     console.log('Player class ver 1.0');
//   }
// }
//
// const taguchi = new Player('taguchi',32);
// const fkoji = new Player('fkoji',44);

// console.log(taguchi.name);
// console.log(fkoji);
// taguchi.showInfo();
// fkoji.showInfo();
// Player.showVersion();
// taguchi.showVersion(); //error

//Playerの継承
// class SoccerPlayer extends Player { //子クラス
//   constructor(name, score, number){
//     super(name,score); //親クラスのメソッド継承
//     this.number = number;
//   }
//
//   kick() {
//     console.log('Gooooooaaaaaal!!!');
//   }
// }
//
// const tsubasa = new SoccerPlayer('tsubasa', 99, 10);
// tsubasa.kick();
// console.log(tsubasa.number);
// tsubasa.showInfo();

//オブジェクト型
// let x = 1;
// let y = x;
// x = 5;
// console.log(x);
// console.log(y);

// let x = [1,2];
// let y = x; //xへの参照（[1,2]の代入ではない）
// x[0] = 5;
// console.log(x);
// console.log(y);

//配列
// const a = [1, 5, 10];
//add
// a.unshift(100); //先頭に追加
// a.push(200,300); //末尾に追加
// console.log(a);
//remoce
// a.shift(); //先頭から削除
// a.pop(); //末尾から削除
// console.log(a);
//間の要素の操作(MDNで検索するとよい)
//splice(start_index, delete_number, add_elements...)
// a.splice(2,0,6,7); //2~3番目の間に6,7を追加。要素の削除はしない。
// console.log(a);
// const removed = a.splice(1,2);
// console.log(a);
// console.log(removed);

// for(let i = 0; i < a.length; i++){
//   console.log(a[i]);
// }

// a.forEach(item => {
//   console.log(item);
// });
// a.forEach((item,index) => {
//   console.log(`${index}:${item}`);
// });

//MAP : 全要素に処理を施して返す
// const b = [];
// a.forEach(item =>{
//   b.push(item * 2);
// });
// console.log(b);

// const b = a.map(item => {
//   return item * 2;
// });
// const b = a.map(item => item * 2);
// console.log(b);

//FILTER : 条件を満たすもののみ返す
// const c = a.filter(item => item % 2 === 0);
// console.log(c);

// Object
// const o ={
//   a: 1,
//   b: 2,
// };
// console.log(Object.keys(o)); //key一覧を配列として返す
// console.log(Object.values(o)); //値一覧を配列として返す
// console.log(Object.entries(o)); //全体を配列として返す
// Object.keys(o).forEach(key => {
//   console.log(`${key}:${o[key]}`);
// });

//スプレッド演算子
// const a = [10,20];
// const b = [1,2, ...a]; //10, 20が...に展開される
// console.log(b);
// a[0] = 100;
// console.log(b); //bは変わらない

// const a = [10,20];
// const sum = (a,b) => a+b;
// console.log(sum(...a));

// const o1 = {a:1};
// const o2 = {...o1, b :2};
// console.log(o2);

//分割代入
// const numbers = [1,2,3,8];
// // const a = numbers[0];
// // const b = numbers[1];
// const [a,b,...rest] = numbers;
// console.log(a);
// console.log(b);
// console.log(rest);

// const player={
//   name: 'taguchi',
//   scores: 55,
//   hp: 33,
//   mp: 22,
// };
// const {name,scores, ...points} = player;
// console.log(name);
// console.log(scores);
// console.log(points);

//文字列
// const str ='hello';
// console.log(str.length); //文字数
// console.log(str.substring(2,4)); //start~endまで抽出
// console.log(str[1]); //1番目：e

//Math
// console.log(Math.PI);
// console.log(Math.random()); //[0,1)の範囲
// console.log(Math.floor(Math.random() * 6) + 1); //[1,6]の整数値

//Date
// const d = new Date(); //現在日時
// console.log(d);
// console.log(d.getFullYear());
// console.log(d.getMonth() +1);//getMonthは0-11で返す
// console.log(d.getDate());
// console.log(d.getDay());//0:日-6:土
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime()); // UTC 1970/01/01 00:00:00からの経過ミリ秒を返す

// const d = new Date(2018,11); //2018/12/01 00:00:00
// d.setHours(10,20,30); //10:20:30
// d.setDate(32); //2019/1/1 10:20:30
// d.setDate(d.getDate() + 3); //2019/1/4
// console.log(d);

// const d1 = new Date(2018, 11, 1);
// const d2 = new Date(2018, 11, 10);
// console.log((d2-d1)/(24*60*60*1000)); //何日差か？

//windowオブジェクト
// window.alert('hello');
// alert('hello');
// const answer = confirm('Are you sure?');
// console.log(answer); //true/false

// setInterval(関数,ミリ秒) //ミリ秒感覚で間隔実行
// let i = 0;
// //処理を軽くするか、ミリ秒に十分余裕を持たせるかしないと、処理が重なって負荷がかかる
// const showTime = () => {
//   console.log(new Date());
  // i++;
  // if(i > 2){
  //   clearInterval(timerId);
  // }
//};
// let timerId = setInterval(showTime, 1000); //showTime()ではなくshowTimeを渡す

//setTimeout(showTime,1000); //1回だけ呼び出す

// 処理が重なってシステムに負荷がかかることがない。処理が終わってから次のインターバルへ。
// let i = 0;
// const showTime = () => {
//   console.log(new Date());
//   let timerId = setTimeout(showTime,1000);
//   i++;
//   if(i>2){
//     clearTimeout(timerId);
//   }
// };
// showTime(); //setIntervalと同じような処理になる

//例外処理
// const a = 'hello';
// console.log(a.toUpperCase()); //大文字化(文字列にしか使えない)
// console.log('Finish!');
// const b = 5;
// try{
//   console.log(b.toUpperCase()); //error
// }catch (e){
//   console.log(e.message);
// }
// console.log('Finish!');

//DOM:Document Object Model
//consoleでdocumentと入力して実行するとデータ構造が見える
//DOM tree - Node
// document.body.textContent = 'hello'; //本文が変わる
// document.title = 'Changed!'; //titleが変わる
// document.getElementById('target'); //★
// document.getElementsByClassName('box'); //Classは複数存在するので複数形
// document.getElementsByTagName('li'); //Tagも複数惣菜するので複数形
// document.querySelector('form button'); //★CSSより、1番最初に見つかった要素
// document.querySelectorAll('ul.menu > li'); //★すべての要素

// document.getElementById('target').textContent = 'Changed!';
// document.querySelector('h1').textContent = 'H1!';
// document.querySelectorAll('li').forEach(li => {//NodeListが返ってくる
//   li.textContent = 'li!';
// });
// document.querySelectorAll('li:nth-child(odd)').forEach(li => {//NodeListが返ってくる
//   li.textContent = 'li!';
// });
// const ul = document.querySelector('ul');
// console.log(ul.parentNode); //親要素(body);
// console.log(ul.children); //子要素(li)
// console.log(ul.children[0]); //HTMLCollectionは配列のように扱える
// for(let i=0;i<ul.children.length; i++){ //HTMLCollectionはforEachが使えない
//   console.log(ul.children[i].textContent);
// }

// const h1 = document.querySelector('h1');
// h1.title = 'Changed!'
// console.log(h1.title);
// h1.style.color = 'gray';
// // h1.style.background-color = 'gray' //これは誤り
// h1.style.backgroundColor = 'pink' //ハイフンを削除して次の文字を大文字に

//HTMLのカスタムデータ属性
// const h1 = document.querySelector('h1');
// console.log(h1.dataset.appId); //data-以降、ハイフンのルールに則って指定
// h1.dataset.message = 'this is custom message!'; //data-message属性が追加

// const div = document.querySelector('div');
// div.className = 'border-pink'; //誤り。boxクラスが消える。
// div.className = 'box border-pink'; //これでもいいが面倒くさい
// div.classList.add('border-pink');
// div.classList.remove('box');

// if(div.classList.contains('border-pink')){ //クラスの有無判定
//   div.classList.remove('border-pink');
// }else{
//   div.classList.add('border-pink');
// }

// div.classList.toggle('border-pink'); //上と全く同じ処理

// const h1 = document.createElement('h1');
// h1.textContent = 'Title';
// document.body.appendChild(h1); //bodyの最期の子要素として追加
// const p = document.createElement('p');
// p.textContent = 'hello, hello.';
// document.body.appendChild(p);
// const h2 = document.createElement('h2');
// h2.textContent = 'Sub Title';
// document.body.insertBefore(h2,p); //pの前に追加 insertAfterはない
// const copy = p.cloneNode(true); //pのクローンを生成 falseだと空の要素をコピー
// document.body.insertBefore(copy,h2);
// document.body.removeChild(h2); //要素の削除

//フォーム
// const text = document.querySelector('input[type="text"]');
// const textarea = document.querySelector('textarea');
// console.log(text.value);
// console.log(textarea.value);
// text.focus(); //focusをあてる
// text.select(); //全選択しておく
// text.disabled = true; //入力できなくする

// console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked) //false
// console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked) //true
// document.querySelectorAll('input[type="checkbox"]')[0].checked = true;
// console.log(document.querySelectorAll('input[type="radio"]')[0].checked) //true
// console.log(document.querySelectorAll('input[type="radio"]')[1].checked) //false
// document.querySelectorAll('input[type="radio"]')[1].checked = true;
// console.log(document.querySelectorAll('select > option')[0].selected) //false
// console.log(document.querySelectorAll('select > option')[1].selected) //true
// console.log(document.querySelectorAll('select > option')[2].selected) //false
// document.querySelectorAll('select > option')[2].selected = true;

//イベントリスナー
//MDN addEventListenerでイベントの種類が調べられる
// const button = document.querySelector('button');
// button.addEventListener('dblclick',()=>{
//   console.log('clicked!');
// });
// const div = document.querySelector('div');
// document.addEventListener('mousemove',e => {
//   div.textContent = `${e.clientX}:${e.clientY}`; //マウスの座標
// });

//preventDefault
// const a = document.querySelector('a');
// const span = document.querySelector('span');
// a.addEventListener('click', e => {
//   e.preventDefault(); //要素の規定の動作をキャンセルする(aのページ遷移を無効化)
//   a.classList.add('hidden');
//   span.classList.remove('hidden');
// });
