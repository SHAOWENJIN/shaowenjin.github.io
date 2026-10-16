(function(){
 const root=document.documentElement;
 const activeLang=root.getAttribute('data-language')||'en';
 const langLinks=document.querySelectorAll('[data-lang-choice]');
 let preferred='';try{preferred=localStorage.getItem('sw-language')||''}catch(e){}
 // Respect language preference when opening a directly bookmarked URL, without requiring storage for offline mode.
 if((preferred==='en'||preferred==='zh') && preferred!==activeLang){
   const destination=document.querySelector('[data-lang-choice="'+preferred+'"]');
   if(destination){location.replace(destination.href+location.hash)}
 }
 langLinks.forEach(link=>link.addEventListener('click',()=>{try{localStorage.setItem('sw-language',link.getAttribute('data-lang-choice'))}catch(e){}}));

 const toggles=document.querySelectorAll('[data-theme-toggle]');
 function setTheme(t){root.dataset.theme=t;toggles.forEach(el=>{el.textContent=t==='dark'?'☀':'☾';el.setAttribute('aria-label',t==='dark'?(activeLang==='zh'?'切换浅色模式':'Switch to light mode'):(activeLang==='zh'?'切换深色模式':'Switch to dark mode'))});try{localStorage.setItem('sw-theme',t)}catch(e){}}
 let previous='';try{previous=localStorage.getItem('sw-theme')||''}catch(e){};
 setTheme(previous==='light'||previous==='dark'?previous:(window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
 toggles.forEach(el=>el.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark')));
 const menu=document.querySelector('[data-menu-toggle]'),nav=document.querySelector('.nav');
 if(menu&&nav){menu.addEventListener('click',()=>{let open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.textContent='☰';menu.setAttribute('aria-expanded','false')}))}
})();

/* V2.2: manually controlled ten-project slider, no auto-advance. */
(function(){
 const carousel=document.querySelector('[data-carousel]');
 if(carousel){
  const slides=[...carousel.querySelectorAll('[data-slide]')],count=carousel.querySelector('[data-carousel-count]');
  let current=0;
  const show=(index)=>{
   current=(index+slides.length)%slides.length;
   slides.forEach((slide,i)=>{slide.hidden=i!==current;slide.classList.toggle('is-active',i===current);slide.setAttribute('aria-hidden',String(i!==current));});
   if(count)count.textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
  };
  carousel.querySelector('[data-carousel-prev]')?.addEventListener('click',()=>show(current-1));
  carousel.querySelector('[data-carousel-next]')?.addEventListener('click',()=>show(current+1));
  carousel.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(current-1)}if(e.key==='ArrowRight'){e.preventDefault();show(current+1)}});
  show(0);
 }
 const wechatButtons=document.querySelectorAll('[data-copy-wechat]');
 wechatButtons.forEach(btn=>btn.addEventListener('click',async()=>{
  const id=btn.getAttribute('data-copy-wechat');let copied=false;
  try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(id);copied=true;}}catch(e){}
  if(!copied){
   try{const el=document.createElement('textarea');el.value=id;el.setAttribute('readonly','');el.style.position='fixed';el.style.opacity='0';document.body.appendChild(el);el.select();copied=document.execCommand('copy');el.remove()}catch(e){}
  }
  const status=btn.parentElement?.querySelector('.copy-status') || btn.closest('.contact-panel')?.querySelector('.copy-status') || btn.closest('.bio-right')?.querySelector('.copy-status') || btn.closest('.footer-links')?.querySelector('.copy-status');
  if(status)status.textContent=copied?(document.documentElement.lang==='zh-CN'?'微信号已复制':'WeChat ID copied'):(document.documentElement.lang==='zh-CN'?'微信号：'+id:'WeChat ID: '+id);
 }));
})();
