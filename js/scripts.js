function triangletype(){
  let sides = []
sides.push(document.getElementById('A'));
sides.push(document.getElementById('B'));
sides.push(doucment.getElementById('C'));

let one = sides [0]
let two = sides [1]
let three = sides [2]

  if (one >= two + three || two >= one + three || three >= two + one){
  output.innerHTML = ('this is Not a triangle.');
  } else if (one === two && one !== three || one !== two && one === three || two === three && two !== one){
  output.innerHTML = ('this is an ispsce;es triangle.');
  } else if (one === two && two === three) {
  output.innerHTML = ('this is an equilateral triangle.'); 
  } else if (one !== two && one !== three && two !== three) {
  output.innerHTML = (' this is a scalene triangle.');
  
  }
}












}