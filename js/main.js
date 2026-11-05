var f=document.getElementById('quote'),ok=document.getElementById('ok');
f.addEventListener('submit',function(e){
  e.preventDefault();
  if(f.website.value){return;}
  ok.textContent='Envoi en cours…';
  fetch('https://formsubmit.co/ajax/groupmilord@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
    body:JSON.stringify({_subject:'Nouvelle demande de devis – site Group Milord',_captcha:'false',_template:'table',Nom:f.nom.value,Prenom:f.prenom.value,Email:f.email.value,Telephone:f.tel.value,Besoin:f.service.value,Message:f.message.value})})
  .then(function(r){if(!r.ok){throw new Error('http');}ok.textContent='Merci ! Votre demande a bien été envoyée, nous vous rappelons rapidement.';f.reset();})
  .catch(function(){ok.textContent='Envoi impossible. Appelez-nous au 0486 89 66 02 ou écrivez à groupmilord@gmail.com.';});
});

(function(){
  var h=document.querySelector('header.top');
  function onScroll(){h.classList.toggle('scrolled',window.scrollY>8)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(!document.documentElement.classList.contains('js'))return;
  var sel='section h2,section .lead,.hero h1,.hero .eyebrow,.hero .cta-row,.hero .badges,.svc,.post,.steps li,.zones li,#faq details,.hero .card-quote,#contact address,#contact iframe';
  var els=document.querySelectorAll(sel);
  els.forEach(function(el){
    el.classList.add('reveal');
    var sibs=el.parentElement.children,i=Array.prototype.indexOf.call(sibs,el);
    var step=el.matches('.zones li')?0.04:0.09;
    el.style.setProperty('--d',(Math.min(i,6)*step)+'s');
  });
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting)return;
      var el=en.target;io.unobserve(el);
      el.classList.add('in');
      setTimeout(function(){el.classList.remove('reveal','in');el.style.removeProperty('--d');},1100);
    });
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){io.observe(el)});
})();
