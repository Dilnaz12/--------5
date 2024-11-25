let surak1 = +prompt("1 санды еңгізіңіз");
let surak2 = +prompt("2 санды еңгізіңіз");

function zhauaptar1(surak1, surak2) {
  return surak1 + surak2;
}
alert("2 сандың қосылған мәні " + zhauaptar1(surak1, surak2));
function zhauaptar2(surak1, surak2) {
  if (surak1 > surak2) {
    return surak1 - surak2;
  } else if (surak2 > surak1) {
    return surak2 - surak1;
  }
}
alert("2 сандың азайтылған мәні " + zhauaptar2(surak1, surak2));
function zhauaptar3(surak1, surak2) {
  return surak1 * surak2;
}
alert("2 сандың көбейтілген мәні " + zhauaptar3(surak1, surak2));

function zhauaptar4(surak1, surak2) {
  if (surak1 > surak2) {
    return surak1 / surak2;
  } else if (surak2 > surak1) {
    return surak2 / surak1;
  }
}
alert("2 сандың бөліген мәні " + zhauaptar4(surak1, surak2));
