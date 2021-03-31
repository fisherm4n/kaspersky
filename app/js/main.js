var swiper = new Swiper('.swiper-container', {
  setWrapperSize: true,
  slidesPerView: 4,
  slidesPerGroup: 3,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    clickable: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});
function faqControl() {
  $(".faq__answ").hide();
  $(".faq__quest").on("click",function () {
    var answer = $(this).next();
    if($(this).attr("data-icon") === "+"){
      $(this).attr("data-icon","-");
      answer.slideDown();
    }else{
      $(this).attr("data-icon","+");
      answer.slideUp();
    }
  });
}
$(document).ready(function () {
  faqControl();
});
$(function () {
  $(".stars").rateYo({
    starWidth: '15px',
    normalFill: '#CCCCCC',
    spacing: "4px",
    starSvg: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M510.37,183.83a21.33,21.33,0,0,0-19.71-13.17H334.79L276,13.84a21.33,21.33,0,0,0-39.95,0L177.21,170.66H21.33A21.33,21.33,0,0,0,6.25,207.08L125.71,326.54,86,485.48A21.34,21.34,0,0,0,119.07,508L256,410.21,392.93,508A21.34,21.34,0,0,0,426,485.48L386.29,326.54,505.75,207.08A21.33,21.33,0,0,0,510.37,183.83Z"/></svg>',
    ratedFill: '#FFE810',

    readOnly: true

  });
  $(".orange-rateyo").rateYo({
    starWidth: '13px',
    normalFill: '#999999',
    spacing: "4px",
    starSvg: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M510.37,183.83a21.33,21.33,0,0,0-19.71-13.17H334.79L276,13.84a21.33,21.33,0,0,0-39.95,0L177.21,170.66H21.33A21.33,21.33,0,0,0,6.25,207.08L125.71,326.54,86,485.48A21.34,21.34,0,0,0,119.07,508L256,410.21,392.93,508A21.34,21.34,0,0,0,426,485.48L386.29,326.54,505.75,207.08A21.33,21.33,0,0,0,510.37,183.83Z"/></svg>',
    ratedFill: '#FBBA00',

    readOnly: true
  });
  $(".green-stars").rateYo({
    starWidth: '13px',
    normalFill: '#fff',
    spacing: "4px",
    starSvg: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M510.37,183.83a21.33,21.33,0,0,0-19.71-13.17H334.79L276,13.84a21.33,21.33,0,0,0-39.95,0L177.21,170.66H21.33A21.33,21.33,0,0,0,6.25,207.08L125.71,326.54,86,485.48A21.34,21.34,0,0,0,119.07,508L256,410.21,392.93,508A21.34,21.34,0,0,0,426,485.48L386.29,326.54,505.75,207.08A21.33,21.33,0,0,0,510.37,183.83Z"/></svg>',
    ratedFill: '#00A88E',

    readOnly: true
  });
});

function radioget(getValue) {
  document.getElementById('realprice').innerHTML=getValue;
};
function radioget2(getValue) {
  document.getElementById('realprice-2').innerHTML=getValue;
};
function radioget3(getValue) {
  document.getElementById('realprice-3').innerHTML=getValue;
};

