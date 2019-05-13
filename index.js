$(document).ready(function() {
    var vocabularyList = [
        {id:1,topic: "Công nghệ", img: "./image/congnghe.jpg", navigate: "./vocabulary_1_1.html", exercise:"./vocabulary_ex_1_1.html"},
        {id:2,topic: "Thể thao", img: "./image/thethao.jpg", navigate: "./vocabulary_2_1.html", exercise:"./vocabulary_ex_2_1.html"},
        {id:3, topic: "Động vật", img: "./image/dongvat.jpg", navigate: "./vocabulary_3_1.html", exercise:"./vocabulary_ex_3_1.html"},
        {id:4, topic: "Công việc", img: "./image/congviec.jpg", navigate: "./vocabulary_4_1.html", exercise:"./vocabulary_ex_4_1.html"},
        {id:5, topic: "Ẩm thực", img: "./image/amthuc.jpg", navigate: "./vocabulary_5_1.html", exercise:"./vocabulary_ex_5_1.html"},
        {id:6, topic: "Sức khỏe", img: "./image/suckhoe.jpg", navigate: "./vocabulary_6_1.html",exercise:"./vocabulary_ex_6_1.html"},
        {id:7,topic: "Kinh tế", img: "./image/kinhte.png", navigate: "./vocabulary_7_1.html", exercise:"./vocabulary_ex_7_1.html"},
    ];
    localStorage.setItem('vocabulary', vocabularyList);

    vocabularyList.forEach((vocabulary, idx) => {
        $("#list_vocabulary").append(
            "<li>" +
                "<div class='panel panel-primary'>" +
				    "<div class='panel-heading'> <label>Chủ đề:"+ vocabulary.topic +"</label></div>"+
				        "<div class='panel-body'>"+
				            "<div class='form-group'>"+
				                "<img src='"+vocabulary.img+"' height='200px' width='200px'  alt='Image'/>"+
				            "</div>"+
				            "<div>"+
                                "<a href='"+vocabulary.navigate+"'>"+
                                "<button type='button' class='btn btn-info' style='margin-right: 5px'>Learn</button>"+
                                "<a href='"+vocabulary.exercise+"'><button type='button' class='btn btn-success'>Exercise</button></a>"+
                                "</a>"+
				            "</div>"+
				        "</div>"+
				"</div>"+
            "</li>"
        );
    });
    if(JSON.parse(localStorage.getItem('user')) == "son") {
        $("#login").css("display", "none");
        $("#in-login").html("Son");
    }
});

function onLogin() {
    // e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    if(username == 'son' && password == '123') {
        window.open('./index.html');
        localStorage.setItem("user", JSON.stringify("son"));
        
    } else {
        alert('Username hoặc password sai!');
    }
}