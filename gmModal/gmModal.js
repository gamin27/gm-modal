/**gmModalライブラリのバス */
const gmModalPath = '../';

/*roading stylsheet*/
var link = document.createElement('link');
link.href =  gmModalPath + 'gmModal/style.css';
link.rel = 'stylesheet';
link.type = 'text/css';
var h = document.getElementsByTagName('head')[0];
h.appendChild(link);

/*roading script*/
var sc = document.createElement('script');
sc.src = gmModalPath + 'gmModal/script.js';
sc.type= 'text/javascript';
h.appendChild(sc);

/**
 * # M E M O
 * これheadで読み込んでもらわないと動かない欠陥ライブラリ。
 * のちに自作ライブラリを勉強したら修正したい。
 * あと、headで読み込むため、bodyに挿入できない。
 * bodyを読みこむ前にbodyに追加しようとするのは無理だ。
 * 言われてみれば当たり前だ。
 */