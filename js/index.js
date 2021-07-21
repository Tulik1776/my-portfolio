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
        right_icon.style.opacity="1";
        change_box.style.right="0";
    }
}
function changeIcon1(){
    let left_icon=document.getElementById("demo2");
    let right_icon=document.getElementById("demo1");
    let change_box=document.getElementById("demo3");
    if(right_icon.style.opacity="1" ){
        left_icon.style.opacity="1";
        right_icon.style.opacity="0";
        change_box.style.right="-12%"
    }
}
function  changeBackround1(){
    let body_color=document.body;
    let title_color=document.getElementById("text_color");
    let header_color=document.getElementById("header_demo");
    let hover_color=document.getElementById("hover_demo");
    let link_color=document.getElementById("link_demo");
    if(body_color.style.backgroundColor="white"){
        body_color.style.backgroundColor="#152238";
        body_color.style.color="white";
        title_color.style.color="white";
        header_color.style.backgroundColor="#152238";
        hover_color.style.backgroundColor="#152238";
        link_color.style.color="white";
    }
}
function  changeBackround2(){
    let body_color=document.body;
    let title_color=document.getElementById("text_color");
    let header_color=document.getElementById("header_demo");
    let hover_color=document.getElementById("hover_demo");
    let link_color=document.getElementById("link_demo");
    if(body_color.style.backgroundColor="#152238"){
        body_color.style.backgroundColor="white";
        body_color.style.color="black";
        title_color.style.color="black";
        header_color.style.backgroundColor="white";
        hover_color.style.backgroundColor="white";
        link_color.style.color="black";
    }
}