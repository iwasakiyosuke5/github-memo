// jsを記述する際はここに記載していく

$(function(){
    var list = 
    [
        'チーズが蕩けるぐらい熱く語ってください!\n（更新毎にアドバイス変わります）',
        '6Pチーズより子供に人気のチーズを創るなどでもOK!\n（更新毎にアドバイス変わります）',
        '世界一臭いチーズ「エピキュア」を超えるチーズを創る！\n（更新毎にアドバイス変わります）',   
        '食べるの専門の方も熱意次第ではOKです！\n（更新毎にアドバイス変わります）'
    ],
    r = Math.floor(Math.random() * list.length)
    $('#placeholder1').prop('placeholder', list[r])
});

// ニュースのぼかしニュース３用
  document.addEventListener("DOMContentLoaded", function() {
    var news3 = document.querySelector(".news3");
    var news1 = document.querySelector(".news1");
    var news2 = document.querySelector(".news2");
    var originalFilter1 = news1.style.filter;
    var originalFilter2 = news2.style.filter;

    news3.addEventListener("mouseover", function() {
      news1.style.filter = "blur(3px) saturate(0)";
      news2.style.filter = "blur(3px) saturate(0)";
    });

    news3.addEventListener("mouseout", function() {
      news1.style.filter = originalFilter1;
      news2.style.filter = originalFilter2;
    });
  });
