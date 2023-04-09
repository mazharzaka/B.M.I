const height = document.getElementById('exampleFormControlInput1')
const Weight = document.getElementById('exampleFormControlInput2')
const btn = document.getElementById('btn')
const react = document.getElementById('ract')
btn.onclick=()=>{
    const bmi =(Weight.value) / (height.value * height.value)
    console.log(bmi);
    if (bmi>5 &&bmi<18.5) {
        console.log(react);
        react.innerHTML=""
        const div= document.createElement('div')
        div.classList.add('react-w')
        div.innerHTML=` <div class="face-w d-flex align-items-center flex-column"><i class="fa-solid fa-face-meh"></i> </div>
        <div class="name-w">Weak</div>`
        react.appendChild(div)

    }
    else if(bmi>=18.5 && bmi<=25){
        react.innerHTML=""
        const div= document.createElement('div')
        div.classList.add('react-w')
        div.innerHTML=` <div class="face-g d-flex align-items-center flex-column"><i class="fa-solid fa-face-laugh-beam"></i>  </div>
        <div class="name-n">Good</div>`
        react.appendChild(div)

    }
    else if(bmi>25 && bmi<=30){
        react.innerHTML=""
        const div= document.createElement('div')
        div.classList.add('react-w')
        div.innerHTML=` <div class="face-o d-flex align-items-center flex-column"><i class="fa-regular fa-face-frown-open"></i>   </div>
        <div class="name-o">Over Weight</div>`
        react.appendChild(div)
      }
      else if(bmi>30 && bmi<=35){
        react.innerHTML=""
        const div= document.createElement('div')
        div.classList.add('react-w')
        div.innerHTML=` <div class="face-oo d-flex align-items-center flex-column"><i class="fa-solid fa-face-sad-cry"></i>   </div>
        <div class="name-oo">Over O-Weight</div>`
        react.appendChild(div)
      }
      else if(bmi>36 ){
        react.innerHTML=""
        const div= document.createElement('div')
        div.classList.add('react-w')
        div.innerHTML=` <div class="face-ba d-flex align-items-center flex-column"><i class="fa-solid fa-face-angry"></i>    </div>
        <div class="name-ba">الدبه النانو</div>`
        react.appendChild(div)
      }
else{
    react.innerHTML=""
    const div= document.createElement('div')
    div.classList.add('react-w')
    div.innerHTML=` <h1 class="error">حط العلامه . بالله عليك</h1>`
    react.appendChild(div)
}
} 
//<i class="fa-solid fa-face-meh"></i> w
//<i class="fa-solid fa-face-angry"></i> an
//<i class="fa-solid fa-face-sad-cry"></i> oo
//<i class="fa-regular fa-face-frown-open"></i> s
// <i class="fa-solid fa-face-laugh-beam"></i> g