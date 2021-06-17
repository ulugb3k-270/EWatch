var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,c){a.raw=c;return a};var hr1=document.querySelector(".hr1");hr2=document.querySelector(".hr2");hr3=document.querySelector(".hr3");hr4=document.querySelector(".hr4");hr5=document.querySelector(".hr5");hr6=document.querySelector(".hr6");hr7=document.querySelector(".hr7");hl1=document.querySelector(".hl1");hl2=document.querySelector(".hl2");hl3=document.querySelector(".hl3");
hl4=document.querySelector(".hl4");hl5=document.querySelector(".hl5");hl6=document.querySelector(".hl6");hl7=document.querySelector(".hl7");mr1=document.querySelector(".mr1");mr2=document.querySelector(".mr2");mr3=document.querySelector(".mr3");mr4=document.querySelector(".mr4");mr5=document.querySelector(".mr5");mr6=document.querySelector(".mr6");mr7=document.querySelector(".mr7");ml1=document.querySelector(".ml1");ml2=document.querySelector(".ml2");ml3=document.querySelector(".ml3");ml4=document.querySelector(".ml4");
ml5=document.querySelector(".ml5");ml6=document.querySelector(".ml6");ml7=document.querySelector(".ml7");sr1=document.querySelector(".sr1");sr2=document.querySelector(".sr2");sr3=document.querySelector(".sr3");sr4=document.querySelector(".sr4");sr5=document.querySelector(".sr5");sr6=document.querySelector(".sr6");sr7=document.querySelector(".sr7");sl1=document.querySelector(".sl1");sl2=document.querySelector(".sl2");sl3=document.querySelector(".sl3");sl4=document.querySelector(".sl4");sl5=document.querySelector(".sl5");
sl6=document.querySelector(".sl6");sl7=document.querySelector(".sl7");var btn=document.querySelector(".start");txt=document.querySelector(".start-txt");body=document.querySelector("body");boxMid=document.querySelector(".box-mid");txt.style.display="none";
function watch(){var a=new Date,c=a.getHours(),b=a.getMinutes();a=a.getSeconds();1==a%2?boxMid.style.visibility="hidden":0==a%2&&(boxMid.style.visibility="visible");ml1.style.opacity=0==b||2==b||3==b||8==b||5==b||6==b||7==b||9==b||10==b||12==b||13==b||15==b||16==b||17==b||18==b||19==b||20==b||22==b||23==b||25==b||26==b||27==b||28==b||29==b||30==b||32==b||33==b||35==b||36==b||37==b||38==b||39==b||40==b||42==b||43==b||45==b||46==b||47==b||48==b||49==b||50==b||52==b||53==b||55==b||56==b||57==b||58==
b||59==b||60==b?"100%":"5%";ml2.style.opacity=0==b||4==b||5==b||6==b||8==b||9==b||0==b||10==b||14==b||15==b||16==b||18==b||19==b||20==b||24==b||25==b||26==b||28==b||29==b||30==b||34==b||36==b||35==b||38==b||39==b||40==b||44==b||45==b||46==b||48==b||49==b||50==b||54==b||56==b||55==b||58==b||59==b||60==b?"100%":"5%";ml3.style.opacity=0==b||1==b||2==b||3==b||4==b||7==b||8==b||9==b||10==b||11==b||12==b||13==b||14==b||17==b||18==b||19==b||20==b||21==b||22==b||23==b||24==b||27==b||28==b||29==b||30==b||
31==b||32==b||33==b||34==b||37==b||38==b||39==b||40==b||41==b||42==b||43==b||44==b||47==b||48==b||49==b||50==b||51==b||52==b||53==b||54==b||57==b||58==b||59==b||60==b?"100%":"5%";ml4.style.opacity=2==b||3==b||4==b||5==b||8==b||9==b||6==b||15==b||12==b||13==b||14==b||16==b||18==b||19==b||22==b||23==b||24==b||25==b||26==b||28==b||29==b||32==b||33==b||34==b||35==b||36==b||38==b||39==b||42==b||43==b||45==b||44==b||46==b||48==b||49==b||55==b||52==b||53==b||54==b||56==b||58==b||59==b?"100%":"5%";ml5.style.opacity=
0==b||2==b||6==b||8==b||10==b||12==b||16==b||18==b||20==b||22==b||26==b||28==b||30==b||32==b||36==b||38==b||40==b||42==b||46==b||48==b||50==b||52==b||56==b||58==b?"100%":"5%";ml6.style.opacity=0==b||1==b||3==b||4==b||5==b||6==b||7==b||8==b||9==b||10==b||11==b||13==b||14==b||15==b||16==b||17==b||18==b||19==b||20==b||21==b||23==b||24==b||25==b||26==b||27==b||28==b||29==b||30==b||31==b||33==b||34==b||35==b||36==b||37==b||38==b||39==b||40==b||41==b||43==b||44==b||45==b||46==b||47==b||48==b||49==b||50==
b||51==b||53==b||54==b||55==b||56==b||57==b||58==b||59==b?"100%":"5%";ml7.style.opacity=0==b||2==b||3==b||5==b||6==b||8==b||9==b||10==b||12==b||13==b||15==b||16==b||18==b||19==b||20==b||22==b||23==b||25==b||26==b||28==b||29==b||30==b||32==b||33==b||35==b||36==b||38==b||39==b||40==b||42==b||43==b||45==b||46==b||48==b||49==b||50==b||52==b||53==b||55==b||56==b||58==b||59==b?"100%":"5%";mr1.style.opacity=40>b&&20<=b||50<=b||10>b?"100%":"5%";mr2.style.opacity=40<=b||10>b?"100%":"5%";mr3.style.opacity=
50>b&&10<=b||10>b?"100%":"5%";mr4.style.opacity=20<=b?"100%":"5%";mr5.style.opacity=30>b&&20<=b||10>b?"100%":"5%";mr6.style.opacity=20>b&&10<=b||30<=b||10>b?"100%":"5%";mr7.style.opacity=40>b&&20<=b||50<=b||10>b?"100%":"5%";hl1.style.opacity=0==c||2==c||3==c||8==c||5==c||6==c||7==c||9==c||10==c||12==c||13==c||15==c||16==c||17==c||18==c||19==c||20==c||22==c||23==c?"100%":"5%";hl2.style.opacity=4==c||5==c||6==c||8==c||9==c||0==c||10==c||14==c||15==c||16==c||18==c||19==c||20==c?"100%":"5%";hl3.style.opacity=
1==c||2==c||3==c||4==c||7==c||8==c||9==c||10==c||11==c||12==c||13==c||14==c||17==c||18==c||19==c||20==c||21==c||22==c||23==c?"100%":"5%";hl4.style.opacity=2==c||3==c||4==c||5==c||8==c||9==c||6==c||15==c||12==c||13==c||14==c||16==c||18==c||19==c||22==c||23==c?"100%":"5%";hl5.style.opacity=0==c||2==c||6==c||8==c||10==c||12==c||16==c||18==c||20==c||22==c?"100%":"5%";hl6.style.opacity=0==c||1==c||3==c||4==c||5==c||6==c||7==c||8==c||9==c||10==c||11==c||13==c||14==c||15==c||16==c||17==c||18==c||19==c||
20==c||21==c||23==c?"100%":"5%";hl7.style.opacity=0==c||2==c||3==c||5==c||6==c||8==c||9==c||10==c||12==c||13==c||15==c||16==c||18==c||19==c||20==c||22==c||23==c?"100%":"5%";hr1.style.opacity=40>c&&20<=c||10>c?"100%":"5%";hr2.style.opacity=40<=c||10>c?"100%":"5%";hr3.style.opacity=50>c&&10<=c||10>c?"100%":"5%";hr4.style.opacity=20<=c?"100%":"5%";hr5.style.opacity=30>c&&20<=c||50<=c||10>c?"100%":"5%";hr6.style.opacity=20>c&&10<=c||30<=c||10>c?"100%":"5%";hr7.style.opacity=40>c&&20<=c||50<=c||10>c?"100%":
"5%";sl1.style.opacity=0==a||2==a||3==a||8==a||5==a||6==a||7==a||9==a||10==a||12==a||13==a||15==a||16==a||17==a||18==a||19==a||20==a||22==a||23==a||25==a||26==a||27==a||28==a||29==a||30==a||32==a||33==a||35==a||36==a||37==a||38==a||39==a||40==a||42==a||43==a||45==a||46==a||47==a||48==a||49==a||50==a||52==a||53==a||55==a||56==a||57==a||58==a||59==a||60==a?"100%":"5%";sl2.style.opacity=0==a||4==a||5==a||6==a||8==a||9==a||0==a||10==a||14==a||15==a||16==a||18==a||19==a||20==a||24==a||25==a||26==a||28==
a||29==a||30==a||34==a||36==a||35==a||38==a||39==a||40==a||44==a||45==a||46==a||48==a||49==a||50==a||54==a||56==a||55==a||58==a||59==a||60==a?"100%":"5%";sl3.style.opacity=0==a||1==a||2==a||3==a||4==a||7==a||8==a||9==a||10==a||11==a||12==a||13==a||14==a||17==a||18==a||19==a||20==a||21==a||22==a||23==a||24==a||27==a||28==a||29==a||30==a||31==a||32==a||33==a||34==a||37==a||38==a||39==a||40==a||41==a||42==a||43==a||44==a||47==a||48==a||49==a||50==a||51==a||52==a||53==a||54==a||57==a||58==a||59==a||60==
a?"100%":"5%";sl4.style.opacity=2==a||3==a||4==a||5==a||8==a||9==a||6==a||15==a||12==a||13==a||14==a||16==a||18==a||19==a||22==a||23==a||24==a||25==a||26==a||28==a||29==a||32==a||33==a||34==a||35==a||36==a||38==a||39==a||42==a||43==a||45==a||44==a||46==a||48==a||49==a||55==a||52==a||53==a||54==a||56==a||58==a||59==a?"100%":"5%";sl5.style.opacity=0==a||2==a||6==a||8==a||10==a||12==a||16==a||18==a||20==a||22==a||26==a||28==a||30==a||32==a||36==a||38==a||40==a||42==a||46==a||48==a||50==a||52==a||56==
a||58==a?"100%":"5%";sl6.style.opacity=0==a||1==a||3==a||4==a||5==a||6==a||7==a||8==a||9==a||10==a||11==a||13==a||14==a||15==a||16==a||17==a||18==a||19==a||20==a||21==a||23==a||24==a||25==a||26==a||27==a||28==a||29==a||30==a||31==a||33==a||34==a||35==a||36==a||37==a||38==a||39==a||40==a||41==a||43==a||44==a||45==a||46==a||47==a||48==a||49==a||50==a||51==a||53==a||54==a||55==a||56==a||57==a||58==a||59==a?"100%":"5%";sl7.style.opacity=0==a||2==a||3==a||5==a||6==a||8==a||9==a||10==a||12==a||13==a||15==
a||16==a||18==a||19==a||20==a||22==a||23==a||25==a||26==a||28==a||29==a||30==a||32==a||33==a||35==a||36==a||38==a||39==a||40==a||42==a||43==a||45==a||46==a||48==a||49==a||50==a||52==a||53==a||55==a||56==a||58==a||59==a?"100%":"5%";sr1.style.opacity=40>a&&20<=a||50<=a||10>a?"100%":"5%";sr2.style.opacity=40<=a||10>a?"100%":"5%";sr3.style.opacity=50>a&&10<=a||10>a?"100%":"5%";sr4.style.opacity=20<=a?"100%":"5%";sr5.style.opacity=30>a&&20<=a||10>a?"100%":"5%";sr6.style.opacity=20>a&&10<=a||30<=a||10>
a?"100%":"5%";sr7.style.opacity=40>a&&20<=a||50<=a||10>a?"100%":"5%";setTimeout(function(){watch()},1E3)}btn.addEventListener("click",function(){
btn.style.display="none";txt.style.display="inline";txt.style.transform="translateY(120px)";body.addEventListener("keyup",function(a){122===a.keyCode&&watch();txt.style.display="none"});});


// http://closure-compiler.appspot.com/home  website JS kodni qisqartirish uchun

// setting

let colors = document.querySelector('.colors')
    logo  = document.querySelector('.logo1')
    ndLogo = document.querySelector('.logo2')



logo.addEventListener('click', function() {
    

    colors.style.transform =  `translateX(0px)`;
    logo.style.transform = `rotate(-150deg)`
    ndLogo.style.transform = `rotate(-150deg)`

    setTimeout(() => {
        
        logo.style.display = 'none'
        ndLogo.style.display = 'inline'
        
    }, 1000);


})

ndLogo.addEventListener('click', function() {


    colors.style.transform =  `translateX(379px)`;
    ndLogo.style.transform = `rotate(0deg)`
    logo.style.transform = `rotate(0deg)`

    setTimeout(() => {
        
        logo.style.display = 'inline'
        ndLogo.style.display = 'none'
        
    }, 1000);
})


let red = document.querySelector('.red')
let white = document.querySelector('.white')
let green = document.querySelector('.green')
let yellow = document.querySelector('.yellow')
let blue = document.querySelector('.blue')
let themeColor = document.querySelector('.changecolor')

red.addEventListener('click', () => {
    document.documentElement.style.setProperty('--wbg', 'red')
})
white.addEventListener('click', () => {
    document.documentElement.style.setProperty('--wbg', 'white')
})
green.addEventListener('click', () => {
    document.documentElement.style.setProperty('--wbg', 'green')
})
blue.addEventListener('click', () => {
    document.documentElement.style.setProperty('--wbg', '#15f4ee')
})
yellow.addEventListener('click', () => {
    document.documentElement.style.setProperty('--wbg', 'yellow')
})

themeColor.addEventListener('input', (e) => {
    // console.log(e.target);
    document.documentElement.style.setProperty('--wbg',e.target.value)


})


    
