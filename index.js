var title=$('h1');
var name=$('.first').val();
var feedback=$('input');
var submit=$('button');
submit.on("click",response);
function response() {
  var name=$('.first').val();
  submit.css('backgroundColor', 'skyblue');
  title.text(`Thanks for your feedback, ${name}!`);
  feedback.css ('textColor', 'white');
};
