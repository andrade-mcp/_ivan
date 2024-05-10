let tempoRestante = 1 * 60 + 57; // 1 minuto e 57 segundos em segundos
let intervalo;
const cronometroEl = document.getElementById("cronometro");
let cronometroIniciado = false;

function atualizarCronometro() {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    cronometroEl.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    if (tempoRestante > 0) {
        tempoRestante--;
    } else {
        clearInterval(intervalo);
        // Apenas mantÃ©m o cronÃ´metro em 00:00
    }
}

function verificarVisibilidade() {
    const rect = cronometroEl.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // CronÃ´metro visÃ­vel
        if (!cronometroIniciado) {
            intervalo = setInterval(atualizarCronometro, 1000);
            cronometroIniciado = true;
        }
    }
}

window.addEventListener("scroll", verificarVisibilidade);


// Facebook
function showBtn1 () {
    document.getElementById("btn1").classList.remove("hide")
  }
  
  
function loadMore() {
  $('#more').show()
  $('.fb-comments-loadmore').hide().remove()
}
$(document).ready(function() {
  $('date').each(function() {
      if ($(this).attr('data-date-minus')) {
          $(this).html(dateMinus($(this).attr('data-date-minus')))
      }
  })
})

function dateMinus(what) {
  var today = Date.now()
  var nw = today - what * 10000
  var newd = new Date()
  newd.setTime(nw)
  var mthName = ['Janeiro', 'Fevereiro', 'MarÃƒÂ§o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  var mthNm = mthName[newd.getMonth()]
  return (newd.getDate() +
      ' de ' +
      mthNm +
      ' de ' +
      newd.getFullYear() +
      ' ' +
      newd.getHours() +
      ':' +
      round(newd.getMinutes()))
}

function round(what) {
  if (what < 10) {
      return '0' + what
  } else {
      return what
  }
}
$('like').on('click', function() {
  if ($(this).hasClass('liked')) {
      $(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text()) - 1)
      $(this).removeClass('liked')
      $(this).text('Curtir')
  } else {
      $(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text()) + 1)
      $(this).addClass('liked')
      $(this).text('Descurtir')
  }
})
$('reply').on('click', function() {
  if (fbobj != null) {
      handleReply($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').attr('id'))
  } else {
      logInWithFacebook(handleReply, $(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').attr('id'))
  }
})

function handleReply(id) {
  var text = ''
  var obj = $('#' + id)
  if (obj.hasClass('fb-comments-reply-wrapper')) {
      text = '@' + obj.find('name').text()
      obj = $('#' + id.split('-')[0])
  }
  obj.find('.row.reply-box').remove()
  obj.append('<div class="row reply-box" id="reply-' +
      obj.attr('id') +
      '"><div class="col-xs-10"><input type="text" value="' +
      text +
      '" placeholder="AÃƒÂ±ade una respuesta..." class="fb-reply-input" /></div><div class="col-xs-2"><button class="fb-reply-button" onclick="javascript:postReply(' +
      obj.attr('id') +
      ');">Responder</button></div></div>')
}

function postReply(id) {
  var obj = $('#reply-' + id)
  if (obj && obj.find('.fb-reply-input').val()) {
      var date = new Date()
      var fbreply = {
          forid: id,
          date: date,
          text: obj.find('.fb-reply-input').val()
      }
      fbreplies.push(fbreply)
      var replyc = reply.clone()
      replyc.attr('id', id + '-' + Math.floor(Math.random() * 100 + 10))
      replyc.find('name').text(fbobj.name)
      replyc.find('.fb-comments-comment-img').find('img').attr('src', fbobj.pictureURL)
      replyc.find('.fb-comments-comment-text').text(obj.find('.fb-reply-input').val())
      replyc.find('date').each(function() {
          if ($(this).attr('data-date-minus')) {
              $(this).html(dateMinus($(this).attr('data-date-minus')))
          }
      })
      $('#' + id).after(replyc)
      obj.remove()
      var today = new Date()
      today.setDate(today.getFullYear() + 1)
      setCookie('fbreplies', JSON.stringify(fbreplies), today)
  }
}

var getdayNames = new Array("Domingo", "Segunda-Feira", "TerÃ§a-Feira", "Quarta-Feira","Quinta-Feira", "Sexta-Feira", "SÃ¡bado");
var getdayMonth = new Array("Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
var getNow = new Date();
var dayOfTheWeek = getNow.getDay();
getNow.setTime(getNow.getTime() - 0 * 24 * 60 * 60 * 1000);
document.getElementById("descounttime").innerHTML = getdayNames[(getNow.getDay())] + ", " + getNow.getDate() + " de " + getdayMonth[(getNow.getMonth())] + " de " + getNow.getFullYear();