const listkuis = [] ; 
listkuis[0] = 'Belajar apa yang paling aku suka?';
listkuis[1] = 'Kamu tuh mirip deh sama bendera, tahu nggak kenapa?';
listkuis[2] = 'Bola apa yang bisa nangis?';
listkuis[3] = 'Laba-laba apa yang bisa bikin menjerat hati para wanita?';
listkuis[4] = 'Kipas apa yang ditunggu-tunggu cewek?';


const jawaban = [
    [
        'Belajar mencintaimu setulusnya',
        'Belajar menyayangimu setulusnya',
        'Belajar mengerti kamu setulusnya',
        'Belajar memacari setulusnya'
    ],
    [
        'Soalnya wajahmu selalu berkibar di hati aku',
        'Soalnya bayang-bayangmu selalu berkibar di hati aku',
        'Soalnya sayangmu selalu berkibar di hati aku',
        'Soalnya bajumu selalu berkibar di hati aku'
    ],
    [
        'bola mata kaki saat melihat kamu pergi',
        'Bola bola misteri hitam',
        'Bola basketku saat mengenai dirimu',
        'Bola mataku saat melihat dirimu pergi'
    ],
    [
        'Laba-laba aku perhatiin, ternyata kamu cantik juga',
        'Lama-lama aku perhatiin, ternyata kamu cantik juga',
        'Laba-laba aku perhatiin, ternyata kamu jelek juga',
        'Lama-lama aku perhatiin, ternyata kamu jelek juga'
    ],
    [
        'Kipastian untuk dinikahi',
        'Kipastian untuk dipacari',
        'Kipastian untuk dilamar',
        'Kipastian untuk ditemenin'
    ]
]

// ==================narasi
var i = 0;
var nilai = 100;

document.getElementById('pertanyaan').innerHTML = listkuis[i];
document.getElementById('jawabann1').innerHTML = jawaban[i][0];
document.getElementById('jawabann2').innerHTML = jawaban[i][1];
document.getElementById('jawabann3').innerHTML = jawaban[i][2];
document.getElementById('jawabann4').innerHTML = jawaban[i][3];

var answer1 = document.getElementById('jawaban1');
var answer2 = document.getElementById('jawaban2');
var answer3 = document.getElementById('jawaban3');
var answer4 = document.getElementById('jawaban4');

answer1.setAttribute('value',jawaban[i][0])
answer2.setAttribute('value',jawaban[i][1])
answer3.setAttribute('value',jawaban[i][2])
answer4.setAttribute('value',jawaban[i][3])

//====================function 

function lanjut(){

        if(answer1.checked == true){
            if(answer1.value != jawaban[0][0]){
                nilai = nilai + 20 ;
            }
        }
        else if(answer2.checked == true){
            if(answer2.value != jawaban[1][1] || answer2.value != jawaban[3][0]){
                nilai = nilai - 20 ;
            }
        }
        else if(answer3.checked == true){
            if(answer3.value != jawaban[4][2]){
                nilai = nilai - 20 ;
            }
        }
        else if(answer4.checked == true){
            if(answer4.value != jawaban[2][3]){
                nilai = nilai - 20 ;
            }
        }
        else{
            nilai = nilai - 20 ;
        }

        //==========================================

        i++;
            
        document.getElementById('pertanyaan').innerHTML = listkuis[i];
        document.getElementById('jawabann1').innerHTML = jawaban[i][0];
        document.getElementById('jawabann2').innerHTML = jawaban[i][1];
        document.getElementById('jawabann3').innerHTML = jawaban[i][2];
        document.getElementById('jawabann4').innerHTML = jawaban[i][3];
        
        answer1.setAttribute('value',jawaban[i][0]);
        answer2.setAttribute('value',jawaban[i][1]);
        answer3.setAttribute('value',jawaban[i][2]);
        answer4.setAttribute('value',jawaban[i][3]);

        //==========================================
        
        var pick = document.querySelectorAll("input[type=radio]");
        for(var l = 0 ; l < 4 ; l++){
            pick[l].checked = false;
        }
        
        //==========================================

        var q = document.getElementById('pertanyaan');
        if(q.innerHTML == listkuis[4]){

            var finish= document.getElementById('next');
            finish.innerHTML = 'Finish' ;
    
            var cardkuis = document.getElementById("cardkuis");
            var nilaicinta = document.getElementById('nilai')
            var cardnilai =  document.getElementById("card2");

            finish.addEventListener('click',function(){
                cardkuis.style.opacity = 0 ;
                cardkuis.style.zIndex = 0 ;

                cardnilai.style.opacity = 1;
                cardnilai.style.zIndex = 2;
                nilaicinta.innerHTML = nilai;
            })
                
        }

        return i;
    
}


function mulaikuis(){
    var card = document.getElementById("card");
    var cardkuis = document.getElementById("cardkuis");
    card.style.opacity = 0 ;
    cardkuis.style.opacity = 1 ;
    cardkuis.style.zIndex = 2 ;
    
    var namapemain = document.getElementById('nama').value;
    document.querySelector(".cardkuis h1").innerHTML = 'Halo ' + namapemain + ', jawab kuis ini dengan benar yaww dan wajib harus benar!';
}

function ulang(){
    var card = document.getElementById("card");
    card.style.opacity = 1;

    var cardnilai =  document.getElementById("card2");
    cardnilai.style.opacity = 0;
    cardnilai.style.zIndex = 0;


    document.location.reload(true);

}

//========================styling 
