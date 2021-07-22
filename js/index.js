function Func(){
    let a=document.getElementById("teggle_box");
    let body=document.body;
    if( a.style.right="-100%")
       {
        a.style.right="0";
        a.style.backgroundColor="rgb(206, 187, 187)"
       }
    else if( a.style.right="0")
        a.style.right="-100%";
}
function Func1(){
    let b=document.getElementById("teggle_box");
    let body=document.body;
    if( b.style.right="0")
       {
        b.style.right="-100%";
       }
}

function changeIcon(){
    let left_icon=document.getElementById("demo2");
    let right_icon=document.getElementById("demo1");
    let change_box=document.getElementById("demo3");
    
    if(left_icon.style.opacity="1" ){
        left_icon.style.opacity="0";
        left_icon.style.display="none";
        right_icon.style.display="block";
        right_icon.style.opacity="1";
        change_box.style.right="0";
       
    }
}
function changeIcon1(){
    let left_icon=document.getElementById("demo2");
    let right_icon=document.getElementById("demo1");
    let change_box=document.getElementById("demo3");
    
    if(left_icon.style.opacity="0" ){
        left_icon.style.opacity="1";
        right_icon.style.display="none";
        left_icon.style.display="block";
        right_icon.style.opacity="0";
        change_box.style.right="-180px";
       
    }
}
function  changeBackround1(){
    let body_color=document.body;
    let title_color=document.getElementById("text_color");
    let header_color=document.getElementById("header_demo");
    let btn_light=document.getElementById("btn_light-color");
    let btn_dark=document.getElementById("btn_dark-color");
    if(body_color.style.backgroundColor="white"){
        body_color.style.backgroundColor="#152238";
        body_color.style.color="white";
        title_color.style.color="white";
        header_color.style.backgroundColor="#152238";
        const link_color = document.querySelectorAll(".link_demo");
        for (let i = 0; i <link_color.length; i++) {
         link_color[i].style.color = "white";
        }
        const hover_color = document.querySelectorAll(".hover_demo");
        for (let i = 0; i <hover_color.length; i++) {
         hover_color[i].style.backgroundColor = "#152238";
        }
        btn_dark.style.backgroundColor="violet";
       btn_light.style.backgroundColor="white";
    }
}
function  changeBackround2(){
    let body_color=document.body;
    let title_color=document.getElementById("text_color");
    let header_color=document.getElementById("header_demo");
    let btn_light=document.getElementById("btn_light-color");
    let btn_dark=document.getElementById("btn_dark-color");
    if(body_color.style.backgroundColor="#152238"){
        body_color.style.backgroundColor="white";
        body_color.style.color="black";
        title_color.style.color="black";
        header_color.style.backgroundColor="white";
        const link_color = document.querySelectorAll(".link_demo");
        for (let i = 0; i <link_color.length; i++) {
        link_color[i].style.color = "black";
        }
        const hover_color = document.querySelectorAll(".hover_demo");
        for (let i = 0; i <hover_color.length; i++) {
        hover_color[i].style.backgroundColor = "white";
        }
        btn_dark.style.backgroundColor="white";
        btn_light.style.backgroundColor="violet";
    }
}