function pringMsg() {
  console.log("Hi from pringMsg");
}

//setTimeout(pringMsg, 3000);

setInterval(pringMsg, 2000);

function y(z) {
  z();
}

function m() {}

function x(y) {
  y(m);
}

x(y);
