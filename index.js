// ========================================untuk js index

const hari = ['day','Senin','Selasa','Rabu','Kamis','Jumat','Sabut','Minggu'];
const day = new Date();
var hariini = hari[day.getDay()];
document.getElementById('tiptext').innerHTML = hariini;

//================================================
function startTime(){
    const Today = new Date();
    let h = Today.getHours();
    let m = Today.getMinutes();
    let s = Today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('tiptext1').innerHTML = h + ':' + m + ':' + s;
    setTimeout(startTime,1000);
}

function checkTime(i){
    if(i < 10){
        i = "0" + i
    };
    return i ;
}
//================================================
const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
const tanggal = new Date();
var d = tanggal.getDate();
var mo = bulan[tanggal.getMonth()];
var y = tanggal.getFullYear();

document.getElementById('tiptext2').innerHTML = d + ' ' + mo + ' ' + y;

//================================================
document.getElementById('tiptext3').innerHTML =  'Suhu Normal';

//================================================

{/* <i style="color:rgb(255, 206, 58);" class="fa-solid fa-moon"></i> */}
const light = document.getElementById('tiptext4');
const icon = document.getElementById('light');
const bg = document.getElementById('light');
light.innerHTML =  'Siang';



function gantibg(){
    if(light.innerHTML ==  'Siang'){
        light.innerHTML =  'Malam';
        icon.className = "fa-solid fa-moon";
        document.getElementById('body').style.backgroundImage = '-webkit-linear-gradient(top, #2f2f2f 0%, #251725 100%) ';
    }else{
        light.innerHTML =  'Siang';
        icon.className = "fa-solid fa-sun";
        document.getElementById('body').style.backgroundImage = '-webkit-linear-gradient(top, #CB2BC5 0%, #660662 100%)';
    }
}



//================================================

document.getElementById('tiptext5').innerHTML =  'Aliffandy';


