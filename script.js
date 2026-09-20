const texts = [
  "docker build -t portfolio.",
  "terraform apply -auto-approve",
  "aws s3 sync. s3://zahid-portfolio",
  "kubectl apply -f deployment.yaml"
];
let textIndex = 0, charIndex = 0;
const el = document.getElementById('typed');
function typeEffect(){
  if(textIndex >= texts.length) textIndex = 0;
  const current = texts[textIndex];
  if(charIndex <= current.length){
    el.innerHTML = current.substring(0,charIndex) + '<span class="animate-pulse">|</span>';
    charIndex++; setTimeout(typeEffect, 90);
  } else { setTimeout(()=>{charIndex=0; textIndex++; typeEffect();}, 1500); }
}
typeEffect();