document.querySelector('button').addEventListener('click', evolve)
let milcery = document.querySelector('.milcery')



// Targeted List

document.querySelector('.strawberry').addEventListener('click', strawTarget)
document.querySelector('.blueberry').addEventListener('click', blueTarget)
document.querySelector('.heart').addEventListener('click', heartTarget)
document.querySelector('.star').addEventListener('click', starTarget)
document.querySelector('.clover').addEventListener('click', cloverTarget)
document.querySelector('.flower').addEventListener('click', flowerTarget)
document.querySelector('.bow').addEventListener('click', bowTarget)

//

document.querySelector('.m1').addEventListener('click', m1Target)
document.querySelector('.m2').addEventListener('click', m2Target)
document.querySelector('.m3').addEventListener('click', m3Target)
document.querySelector('.m4').addEventListener('click', m4Target)
document.querySelector('.m5').addEventListener('click', m5Target)
document.querySelector('.m6').addEventListener('click', m6Target)
document.querySelector('.m7').addEventListener('click', m7Target)
document.querySelector('.m8').addEventListener('click', m8Target)
document.querySelector('.m9').addEventListener('click', m9Target)
document.querySelector('.mShine').addEventListener('click', mShineTarget)

//

function strawTarget() {
    document.querySelector('.strawberry').classList.toggle('targeted');
    document.querySelector('.blueberry').classList.remove('targeted')
    document.querySelector('.heart').classList.remove('targeted')
    document.querySelector('.star').classList.remove('targeted')
    document.querySelector('.clover').classList.remove('targeted')
    document.querySelector('.flower').classList.remove('targeted')
    document.querySelector('.bow').classList.remove('targeted')
}
function blueTarget() {
    document.querySelector('.strawberry').classList.remove('targeted');
    document.querySelector('.blueberry').classList.toggle('targeted')
    document.querySelector('.heart').classList.remove('targeted')
    document.querySelector('.star').classList.remove('targeted')
    document.querySelector('.clover').classList.remove('targeted')
    document.querySelector('.flower').classList.remove('targeted')
    document.querySelector('.bow').classList.remove('targeted')
}
function heartTarget() {
    document.querySelector('.strawberry').classList.remove('targeted');
    document.querySelector('.blueberry').classList.remove('targeted')
    document.querySelector('.heart').classList.toggle('targeted')
    document.querySelector('.star').classList.remove('targeted')
    document.querySelector('.clover').classList.remove('targeted')
    document.querySelector('.flower').classList.remove('targeted')
    document.querySelector('.bow').classList.remove('targeted')
}
function starTarget() {
    document.querySelector('.strawberry').classList.remove('targeted');
    document.querySelector('.blueberry').classList.remove('targeted')
    document.querySelector('.heart').classList.remove('targeted')
    document.querySelector('.star').classList.toggle('targeted')
    document.querySelector('.clover').classList.remove('targeted')
    document.querySelector('.flower').classList.remove('targeted')
    document.querySelector('.bow').classList.remove('targeted')
}
function cloverTarget() {
    document.querySelector('.strawberry').classList.remove('targeted');
    document.querySelector('.blueberry').classList.remove('targeted')
    document.querySelector('.heart').classList.remove('targeted')
    document.querySelector('.star').classList.remove('targeted')
    document.querySelector('.clover').classList.toggle('targeted')
    document.querySelector('.flower').classList.remove('targeted')
    document.querySelector('.bow').classList.remove('targeted')
}
function flowerTarget() {
    document.querySelector('.strawberry').classList.remove('targeted');
    document.querySelector('.blueberry').classList.remove('targeted')
    document.querySelector('.heart').classList.remove('targeted')
    document.querySelector('.star').classList.remove('targeted')
    document.querySelector('.clover').classList.remove('targeted')
    document.querySelector('.flower').classList.toggle('targeted')
    document.querySelector('.bow').classList.remove('targeted')
}
function bowTarget() {
    document.querySelector('.strawberry').classList.remove('targeted');
    document.querySelector('.blueberry').classList.remove('targeted')
    document.querySelector('.heart').classList.remove('targeted')
    document.querySelector('.star').classList.remove('targeted')
    document.querySelector('.clover').classList.remove('targeted')
    document.querySelector('.flower').classList.remove('targeted')
    document.querySelector('.bow').classList.toggle('targeted')
}

//

function m1Target() {
    document.querySelector('.m1').classList.toggle('targeted')
    document.querySelector('.m2').classList.remove('targeted')
    document.querySelector('.m3').classList.remove('targeted')
    document.querySelector('.m4').classList.remove('targeted')
    document.querySelector('.m5').classList.remove('targeted')
    document.querySelector('.m6').classList.remove('targeted')
    document.querySelector('.m7').classList.remove('targeted')
    document.querySelector('.m8').classList.remove('targeted')
    document.querySelector('.m9').classList.remove('targeted')
    document.querySelector('.mShine').classList.remove('targeted')
}
function m2Target() {
    document.querySelector('.m1').classList.remove('targeted')
    document.querySelector('.m2').classList.toggle('targeted')
    document.querySelector('.m3').classList.remove('targeted')
    document.querySelector('.m4').classList.remove('targeted')
    document.querySelector('.m5').classList.remove('targeted')
    document.querySelector('.m6').classList.remove('targeted')
    document.querySelector('.m7').classList.remove('targeted')
    document.querySelector('.m8').classList.remove('targeted')
    document.querySelector('.m9').classList.remove('targeted')
    document.querySelector('.mShine').classList.remove('targeted')
}
function m3Target() {
    document.querySelector('.m1').classList.remove('targeted')
    document.querySelector('.m2').classList.remove('targeted')
    document.querySelector('.m3').classList.toggle('targeted')
    document.querySelector('.m4').classList.remove('targeted')
    document.querySelector('.m5').classList.remove('targeted')
    document.querySelector('.m6').classList.remove('targeted')
    document.querySelector('.m7').classList.remove('targeted')
    document.querySelector('.m8').classList.remove('targeted')
    document.querySelector('.m9').classList.remove('targeted')
    document.querySelector('.mShine').classList.remove('targeted')
}
function m4Target() {
    document.querySelector('.m1').classList.remove('targeted')
    document.querySelector('.m2').classList.remove('targeted')
    document.querySelector('.m3').classList.remove('targeted')
    document.querySelector('.m4').classList.toggle('targeted')
    document.querySelector('.m5').classList.remove('targeted')
    document.querySelector('.m6').classList.remove('targeted')
    document.querySelector('.m7').classList.remove('targeted')
    document.querySelector('.m8').classList.remove('targeted')
    document.querySelector('.m9').classList.remove('targeted')
    document.querySelector('.mShine').classList.remove('targeted')
}
function m5Target() {
    document.querySelector('.m1').classList.remove('targeted')
    document.querySelector('.m2').classList.remove('targeted')
    document.querySelector('.m3').classList.remove('targeted')
    document.querySelector('.m4').classList.remove('targeted')
    document.querySelector('.m5').classList.toggle('targeted')
    document.querySelector('.m6').classList.remove('targeted')
    document.querySelector('.m7').classList.remove('targeted')
    document.querySelector('.m8').classList.remove('targeted')
    document.querySelector('.m9').classList.remove('targeted')
    document.querySelector('.mShine').classList.remove('targeted')
}
function m6Target() {
    document.querySelector('.m1').classList.remove('targeted')
    document.querySelector('.m2').classList.remove('targeted')
    document.querySelector('.m3').classList.remove('targeted')
    document.querySelector('.m4').classList.remove('targeted')
    document.querySelector('.m5').classList.remove('targeted')
    document.querySelector('.m6').classList.toggle('targeted')
    document.querySelector('.m7').classList.remove('targeted')
    document.querySelector('.m8').classList.remove('targeted')
    document.querySelector('.m9').classList.remove('targeted')
    document.querySelector('.mShine').classList.remove('targeted')
}
function m7Target() {
    document.querySelector('.m1').classList.remove('targeted')
    document.querySelector('.m2').classList.remove('targeted')
    document.querySelector('.m3').classList.remove('targeted')
    document.querySelector('.m4').classList.remove('targeted')
    document.querySelector('.m5').classList.remove('targeted')
    document.querySelector('.m6').classList.remove('targeted')
    document.querySelector('.m7').classList.toggle('targeted')
    document.querySelector('.m8').classList.remove('targeted')
    document.querySelector('.m9').classList.remove('targeted')
    document.querySelector('.mShine').classList.remove('targeted')
}
function m8Target() {
    document.querySelector('.m1').classList.remove('targeted')
    document.querySelector('.m2').classList.remove('targeted')
    document.querySelector('.m3').classList.remove('targeted')
    document.querySelector('.m4').classList.remove('targeted')
    document.querySelector('.m5').classList.remove('targeted')
    document.querySelector('.m6').classList.remove('targeted')
    document.querySelector('.m7').classList.remove('targeted')
    document.querySelector('.m8').classList.toggle('targeted')
    document.querySelector('.m9').classList.remove('targeted')
    document.querySelector('.mShine').classList.remove('targeted')
}
function m9Target() {
    document.querySelector('.m1').classList.remove('targeted')
    document.querySelector('.m2').classList.remove('targeted')
    document.querySelector('.m3').classList.remove('targeted')
    document.querySelector('.m4').classList.remove('targeted')
    document.querySelector('.m5').classList.remove('targeted')
    document.querySelector('.m6').classList.remove('targeted')
    document.querySelector('.m7').classList.remove('targeted')
    document.querySelector('.m8').classList.remove('targeted')
    document.querySelector('.m9').classList.toggle('targeted')
    document.querySelector('.mShine').classList.remove('targeted')
}
function mShineTarget() {
    document.querySelector('.m1').classList.remove('targeted')
    document.querySelector('.m2').classList.remove('targeted')
    document.querySelector('.m3').classList.remove('targeted')
    document.querySelector('.m4').classList.remove('targeted')
    document.querySelector('.m5').classList.remove('targeted')
    document.querySelector('.m6').classList.remove('targeted')
    document.querySelector('.m7').classList.remove('targeted')
    document.querySelector('.m8').classList.remove('targeted')
    document.querySelector('.m9').classList.remove('targeted')
    document.querySelector('.mShine').classList.toggle('targeted')
}

// If else statements

function evolve() {
    let choices = document.querySelectorAll('.targeted')
    
    
    if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="m1 targeted">Vanilla</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawVanilla').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="m2 targeted">Ruby</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawRuby').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="m3 targeted">Matcha</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawMatcha').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="m4 targeted">Mint</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawMint').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="m5 targeted">Lemon</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawLemon').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="m6 targeted">Salted</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawSalted').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="m7 targeted">Ruby Swirl</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawSwirl').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="m8 targeted">Caramel</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawCaramel').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="m9 targeted">Rainbow</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawRainbow').classList.remove('hidden') 
    } /* Next Treat */ else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="m1 targeted">Vanilla</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueVanilla').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="m2 targeted">Ruby</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueRuby').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="m3 targeted">Matcha</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueMatcha').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="m4 targeted">Mint</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueMint').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="m5 targeted">Lemon</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueLemon').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="m6 targeted">Salted</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueSalted').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="m7 targeted">Ruby Swirl</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueSwirl').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="m8 targeted">Caramel</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueCaramel').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="m9 targeted">Rainbow</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueRainbow').classList.remove('hidden') 
    } /* Next Treat */ else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="m1 targeted">Vanilla</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartVanilla').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="m2 targeted">Ruby</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartRuby').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="m3 targeted">Matcha</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartMatcha').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="m4 targeted">Mint</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartMint').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="m5 targeted">Lemon</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartLemon').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="m6 targeted">Salted</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartSalted').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="m7 targeted">Ruby Swirl</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartSwirl').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="m8 targeted">Caramel</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartCaramel').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="m9 targeted">Rainbow</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartRainbow').classList.remove('hidden')

    } /* Next Treat */ else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="m1 targeted">Vanilla</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starVanilla').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="m2 targeted">Ruby</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starRuby').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="m3 targeted">Matcha</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starMatcha').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="m4 targeted">Mint</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starMint').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="m5 targeted">Lemon</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starLemon').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="m6 targeted">Salted</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starSalted').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="m7 targeted">Ruby Swirl</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starSwirl').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="m8 targeted">Caramel</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starCaramel').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="m9 targeted">Rainbow</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starRainbow').classList.remove('hidden') 
    } /* Next Treat */ else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="m1 targeted">Vanilla</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverVanilla').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="m2 targeted">Ruby</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverRuby').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="m3 targeted">Matcha</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverMatcha').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="m4 targeted">Mint</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverMint').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="m5 targeted">Lemon</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverLemon').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="m6 targeted">Salted</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverSalted').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="m7 targeted">Ruby Swirl</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverSwirl').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="m8 targeted">Caramel</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverCaramel').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="m9 targeted">Rainbow</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverRainbow').classList.remove('hidden') 
    } /* Next Treat */ else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="m1 targeted">Vanilla</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerVanilla').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="m2 targeted">Ruby</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerRuby').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="m3 targeted">Matcha</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerMatcha').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="m4 targeted">Mint</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerMint').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="m5 targeted">Lemon</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerLemon').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="m6 targeted">Salted</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerSalted').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="m7 targeted">Ruby Swirl</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerSwirl').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="m8 targeted">Caramel</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerCaramel').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="m9 targeted">Rainbow</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerRainbow').classList.remove('hidden') 
    } /* Next Treat */ else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="m1 targeted">Vanilla</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowVanilla').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="m2 targeted">Ruby</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowRuby').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="m3 targeted">Matcha</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowMatcha').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="m4 targeted">Mint</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowMint').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="m5 targeted">Lemon</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowLemon').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="m6 targeted">Salted</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowSalted').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="m7 targeted">Ruby Swirl</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowSwirl').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="m8 targeted">Caramel</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowCaramel').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="m9 targeted">Rainbow</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowRainbow').classList.remove('hidden') 
    } /* shinies */ else if (choices[0].outerHTML == '<img class="strawberry targeted" src="resources/strawberry.webp">' && choices[1].outerHTML == '<span class="mShine targeted">Shiny</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.strawShiny').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="blueberry targeted" src="resources/blueberry.webp">' && choices[1].outerHTML == '<span class="mShine targeted">Shiny</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.blueShiny').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="heart targeted" src="resources/heart.webp">' && choices[1].outerHTML == '<span class="mShine targeted">Shiny</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.heartShiny').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="star targeted" src="resources/star.webp">' && choices[1].outerHTML == '<span class="mShine targeted">Shiny</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.starShiny').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="clover targeted" src="resources/clover.webp">' && choices[1].outerHTML == '<span class="mShine targeted">Shiny</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.cloverShiny').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="flower targeted" src="resources/flower.webp">' && choices[1].outerHTML == '<span class="mShine targeted">Shiny</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.flowerShiny').classList.remove('hidden') 
    } else if (choices[0].outerHTML == '<img class="bow targeted" src="resources/bow.webp">' && choices[1].outerHTML == '<span class="mShine targeted">Shiny</span>') {
        removePrev()
        milcery.classList.add('hidden')
        document.querySelector('.bowShiny').classList.remove('hidden') 
    } 
}




// Test Function 

function removePrev() {

    document.querySelector('.strawVanilla').classList.add('hidden') 
    document.querySelector('.strawRuby').classList.add('hidden')
    document.querySelector('.strawMatcha').classList.add('hidden')
    document.querySelector('.strawMint').classList.add('hidden')
    document.querySelector('.strawLemon').classList.add('hidden')
    document.querySelector('.strawSalted').classList.add('hidden') 
    document.querySelector('.strawSwirl').classList.add('hidden')
    document.querySelector('.strawCaramel').classList.add('hidden')
    document.querySelector('.strawRainbow').classList.add('hidden')
    document.querySelector('.blueVanilla').classList.add('hidden')
    document.querySelector('.blueRuby').classList.add('hidden') 
    document.querySelector('.blueMatcha').classList.add('hidden')
    document.querySelector('.blueMint').classList.add('hidden')
    document.querySelector('.blueLemon').classList.add('hidden')
    document.querySelector('.blueSalted').classList.add('hidden')
    document.querySelector('.blueSwirl').classList.add('hidden')
    document.querySelector('.blueCaramel').classList.add('hidden')
    document.querySelector('.blueRainbow').classList.add('hidden')
    document.querySelector('.heartVanilla').classList.add('hidden')
    document.querySelector('.heartRuby').classList.add('hidden')
    document.querySelector('.heartMatcha').classList.add('hidden')
    document.querySelector('.heartMint').classList.add('hidden')
    document.querySelector('.heartLemon').classList.add('hidden')
    document.querySelector('.heartSalted').classList.add('hidden')
    document.querySelector('.heartSwirl').classList.add('hidden')
    document.querySelector('.heartCaramel').classList.add('hidden')
    document.querySelector('.heartRainbow').classList.add('hidden')
    document.querySelector('.starVanilla').classList.add('hidden')
    document.querySelector('.starRuby').classList.add('hidden')
    document.querySelector('.starMatcha').classList.add('hidden')
    document.querySelector('.starMint').classList.add('hidden')
    document.querySelector('.starLemon').classList.add('hidden') 
    document.querySelector('.starSalted').classList.add('hidden')
    document.querySelector('.starSwirl').classList.add('hidden') 
    document.querySelector('.starCaramel').classList.add('hidden')
    document.querySelector('.starRainbow').classList.add('hidden')
    document.querySelector('.cloverVanilla').classList.add('hidden')
    document.querySelector('.cloverRuby').classList.add('hidden')
    document.querySelector('.cloverMatcha').classList.add('hidden')
    document.querySelector('.cloverMint').classList.add('hidden')
    document.querySelector('.cloverLemon').classList.add('hidden')
    document.querySelector('.cloverSalted').classList.add('hidden')
    document.querySelector('.cloverSwirl').classList.add('hidden')
    document.querySelector('.cloverCaramel').classList.add('hidden')
    document.querySelector('.cloverRainbow').classList.add('hidden')
    document.querySelector('.flowerVanilla').classList.add('hidden')
    document.querySelector('.flowerRuby').classList.add('hidden')
    document.querySelector('.flowerMatcha').classList.add('hidden')
    document.querySelector('.flowerMint').classList.add('hidden')
    document.querySelector('.flowerLemon').classList.add('hidden')
    document.querySelector('.flowerSalted').classList.add('hidden')
    document.querySelector('.flowerSwirl').classList.add('hidden')
    document.querySelector('.flowerCaramel').classList.add('hidden')
    document.querySelector('.flowerRainbow').classList.add('hidden')
    document.querySelector('.bowVanilla').classList.add('hidden')
    document.querySelector('.bowRuby').classList.add('hidden')
    document.querySelector('.bowMatcha').classList.add('hidden')
    document.querySelector('.bowMint').classList.add('hidden')
    document.querySelector('.bowLemon').classList.add('hidden')
    document.querySelector('.bowSalted').classList.add('hidden')
    document.querySelector('.bowSwirl').classList.add('hidden')
    document.querySelector('.bowCaramel').classList.add('hidden')
    document.querySelector('.bowRainbow').classList.add('hidden')
    document.querySelector('.strawShiny').classList.add('hidden')
    document.querySelector('.blueShiny').classList.add('hidden')
    document.querySelector('.heartShiny').classList.add('hidden')
    document.querySelector('.starShiny').classList.add('hidden')
    document.querySelector('.cloverShiny').classList.add('hidden')
    document.querySelector('.flowerShiny').classList.add('hidden')
    document.querySelector('.bowShiny').classList.add('hidden') 

}