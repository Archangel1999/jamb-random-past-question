function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value; 
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question5.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value; 
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
     


    if (q1=="yes he is"){c++}
    if (q2=="28"){c++}
    if (q3=="14"){c++}
    if (q4=="6"){c++}
    if (q5=="10"){c++}
    if (q6=="0,12"){c++}
    if (q7=="1/3"){c++}
    if (q8=="576"){c++}
    quiz.style.display="none";
    result.textcontent=`${c}`;
        
    if (c<=5){ 
           result.textcontent=`your result is ${c}.  It is bad work harder.`
              } else {
           result.textcontent=`your result is ${c}.Very good!.`
       }}
