/* YM / / / Юрий Макаров — author site, static MVP */
(() => {
  const settings = window.SITE_SETTINGS || {};
  const image = name => `assets/images/${name}`;
  const articles = [
    {
      id: 'code-geass', category: 'anime', kind: 'story', label: 'АНИМЕ · РАЗБОР СИСТЕМЫ', read: '7 МИН', cover: 'anime-storyboard.jpg',
      title: 'Гиасс: желание, которое получило форму оружия',
      excerpt: 'Не просто сверхспособность, а личное сокровенное желание, усиленное коллективной силой мира.',
      planets: ['uranus','neptune','pluto','saturn','jupiter'],
      lead: 'В моей интерпретации «Кода Гиасс» способность персонажа — не отдельный трюк сценария. Она становится видимой формой желания, которое до этого не могло найти себе место в мире.',
      body: [
        ['Сила как продолжение желания', 'Каждый Гиасс в заметках связан с личным подавленным желанием. Он усиливает его и превращает в инструмент действия — почти в оружие против бессилия. Поэтому способность важно читать не отдельно от персонажа, а вместе с тем, чего ему не хватает и что он пытается вернуть.'],
        ['Лелуш и масштаб системы', 'Лелуш действует не только внутри личной истории. Его сюжетный вектор направлен на изменение мира. Здесь индивидуальная воля соприкасается с коллективной системой: это и делает историю больше, чем рассказом о человеке с необычной силой.'],
        ['Ролло: остановиться и стать частью формы', 'В моих заметках способность Ролло рифмуется с желанием остановить движение, вернуться к статус-кво, кристаллизоваться и стать частью системы. Его притяжение к семье Лелуша тогда читается не как случайная сюжетная деталь, а как поиск места внутри структуры.'],
        ['С.С. и желание быть любимой', 'В сериале её Гиасс часто воспринимают как аналог способности Лелуша. Моя версия чтения другая: в репликах истории способность связывается с желанием быть любимой. Тогда отказ от метки Чарльза и реакция на слова Лелуша образуют более точную эмоциональную рифму.'],
        ['Не схема вместо произведения', 'Эта карта не заменяет сцены и не претендует на единственное чтение. Она помогает связать мотивы: желание, сила, коллективное бессознательное, ограничение времени и место человека в системе.']
      ]
    },
    {
      id: 'ridley-scott', category: 'films', kind: 'story', label: 'КИНО · МИРЫ РИДЛИ СКОТТА', read: '9 МИН', cover: 'film-emerald.jpg',
      title: 'Чужой и Бегущий по лезвию: мир, собранный из трёх полей',
      excerpt: 'Уран, Нептун и Плутон как разные силы внутри одной космогонии — авторская карта рифм по заметкам Юрия.',
      planets: ['uranus','neptune','pluto'],
      lead: 'В этой заметке я читаю миры Ридли Скотта как столкновение трёх больших принципов: сверхразума, коллективной тени и пространства, в котором вообще может возникнуть жизнь.',
      body: [
        ['Три составляющих', 'Космические Жокеи в этой системе рифмуются с Ураном: интеллектом, технологической мощью и холодной дистанцией. Проточужой — с Плутоном: предельной выживаемостью, агрессией и силой, которая не обязана подчиняться социальным правилам. Пространство, где встречаются эти начала, — Нептун, поле потенциала и коллективного бессознательного.'],
        ['Человек как соединение', 'Из этой встречи возникает новая форма жизни. Важен именно третий элемент: человек не сводится ни к стерильному разуму, ни к чистой силе выживания. Для меня это и есть центральная рифма — жизнь появляется там, где несколько несовместимых начал образуют систему.'],
        ['Андроид и недостающий элемент', 'В заметках андроид — попытка создать жизнь по человеческому образу, но с неполной комбинацией: в ней не хватает плутонического элемента. Поэтому получается псевдожизнь, а не новое начало. Это не вывод о «правильном» смысле фильма, а способ проверить, как меняется история, если читать её через такую связку.'],
        ['Почему рядом оказывается киберпанк', 'В этой же авторской карте вытесненное плутоническое начало возвращается в технологическом мире повсюду. Так «Чужой» и «Бегущий по лезвию» соединяются не только общей вселенной, но и внутренней архитектурой — тем, что разум пытается исключить и что снова проявляется.']
      ]
    },
    {
      id: 'silent-hill', category: 'horror', kind: 'story', label: 'ХОРРОР · ИГРА · ПАМЯТЬ', read: '5 МИН', cover: 'horror-noir.jpg',
      title: 'Silent Hill 2: когда переживание становится местом',
      excerpt: 'Луна как восприятие, телесная память и личное бессознательное; город как форма внутреннего опыта.',
      planets: ['moon','pluto'],
      lead: 'Один из примеров в моих заметках — Silent Hill 2 и Луна: не как универсальный ключ к игре, а как рифма между переживанием, памятью и пространством.',
      body: [
        ['Среда, которую чувствуешь', 'В моей модели Луна — функция адаптации и восприятия: какие сигналы среды человек замечает, что ощущает знакомым, где возникает безопасность и где — тревога. Это не только рациональная оценка; сюда относятся эмоции, рефлексы и телесная память.'],
        ['Город как внутренняя сцена', 'Silent Hill 2 можно читать как историю, в которой внутреннее переживание перестаёт быть абстракцией и получает ландшафт. Страх и вина материализуются в пространстве, а пространство становится частью того, как персонаж воспринимает себя и мир.'],
        ['Луна и Плутон', 'Луна помогает читать личную оптику и память; Плутон — порог, трансформацию и то, что возвращается из вытесненного. Их соседство даёт полезный вопрос: где заканчивается знакомая среда и начинается сила, которая меняет её форму?']
      ]
    },
    {
      id: 'cyberpunk-rule', category: 'author', kind: 'essay', label: 'АВТОРСКАЯ КАРТА · ЖАНР', read: 'ЛОНГРИД', cover: 'author-triptych.jpg',
      title: 'Уран + Плутон: киберпанк — и исключение из правила',
      excerpt: 'Почему связка часто рифмуется с киберпанком, но «Код Гиасс» уводит формулу в другую сторону.',
      planets: ['uranus','pluto','saturn','neptune'],
      lead: 'В моих заметках Уран и Плутон образуют массовую формулу киберпанка: технология, коллективная сила, вытесненное и мир, который уже не может удержать прежнюю форму.',
      body: [
        ['Формула жанра', 'Уран — холодный интеллект, скачок, технологический принцип и разрушение отживших ожиданий. Плутон — коллективная тень, трансформация и мощность того, что было исключено. Вместе они дают мир, где технология и вытесненная сила постоянно меняют друг друга.'],
        ['Почему важен Сатурн', '«Код Гиасс» в этой схеме — не просто ещё одна дистопия. Сатурн и родительские фигуры становятся отдельным ограничивающим полем; напряжение между ними и Ураном с Плутоном направляет историю иначе. Разрядка через Нептун — не декорация, а ещё одна часть авторской модели.'],
        ['Как использовать такую схему', 'Для меня это не ярлык, который надо приклеить к произведению. Это способ задать вопросы: какие силы здесь сталкиваются, что считается нормой, что вытесняется, кто способен изменить правила и каким образом произведение выходит за пределы жанровой формулы?']
      ]
    },
    {
      id: 'planet-functions', category: 'author', kind: 'reference', label: 'ПЛАНЕТАРИЙ · АВТОРСКАЯ МОДЕЛЬ', read: 'СПРАВОЧНАЯ КАРТА', cover: 'hero-anime.jpg',
      title: 'Планеты как функции: карта авторской системы',
      excerpt: 'Личное ядро, инструменты, социальные поля и коллективные силы — короткий вход в планетарий.',
      planets: ['moon','sun','mercury','venus','mars','jupiter','saturn','uranus','neptune','pluto'],
      lead: 'Эта карта собирает заметки о планетах в четыре уровня: личное ядро, инструменты ядра, социальные поля и коллективные поля. Важно не только значение каждой планеты, но и то, как функции взаимодействуют.',
      body: [
        ['Ядро: Луна и Солнце', 'Луна описывает адаптацию, восприятие, отдых, эмоциональные реакции и личную оптику. Солнце — сознание, самоидентификацию, игру, искреннее желание и самовыражение. В этой модели они образуют ядро личности.'],
        ['Инструменты: Меркурий, Венера, Марс', 'Меркурий собирает и связывает информацию; Венера различает ценность, пропорцию и эстетическое предпочтение; Марс запускает действие и преодолевает сопротивление среды. Это разные функции, а не три варианта одной «энергии».'],
        ['Социальное поле: Юпитер и Сатурн', 'Юпитер — неформальное поле смыслов, норм и мировоззрения. Сатурн — формальная структура: границы, время, иерархия, дисциплина и ответственность. В заметках между ними различаются, например, популярность и официальная роль.'],
        ['Коллективные поля: Уран, Нептун и Плутон', 'Уран связывает парадокс, метапозицию и коллективный разум; Нептун — воображение, коллективное бессознательное и пространство потенциала; Плутон — коллективную тень, порог и трансформацию. Из этого же вырастают жанровые рифмы с научной фантастикой, фэнтези и хоррором.']
      ]
    },
    {
      id: 'aspects', category: 'author', kind: 'method', label: 'АСТРОЛОГИЯ · СВЯЗИ', read: 'МЕТОД', cover: 'author-triptych.jpg',
      title: 'Аспекты как способы взаимодействия функций',
      excerpt: 'Соединение, секстиль, трин, квадрат и оппозиция — не только геометрия, но и разная динамика между функциями.',
      planets: ['sun','moon','mercury','venus','mars','jupiter','saturn','uranus','neptune','pluto'],
      lead: 'В этой модели аспект — это не просто линия между двумя символами. Он описывает характер связи: активацию, необходимость усилия, лёгкое взаимодействие или напряжение между полюсами.',
      body: [
        ['Соединение', 'Функции активируют друг друга, как связанные педали. Если личная планета соединяется с социальной или коллективной, поле большего масштаба может задавать тон и перенастраивать личную функцию под свои задачи.'],
        ['Секстиль и трин', 'Секстиль — связь, которой нужно научиться пользоваться: контакт упрощает освоение сочетания, но не делает работу автоматической. Трин — более сильная гармоничная связь: функции помогают друг другу, а соединяющие их навыки обычно осваиваются легче.'],
        ['Квадрат и оппозиция', 'Квадрат в заметках описан как горячее столкновение, где одна функция давит на другую. Оппозиция — как холодная война: полюса тянут в разные стороны, но ни один не исчезает, поэтому задача часто состоит в поиске баланса.']
      ]
    }
  ];

  const planets = {
    moon:{name:'Луна',symbol:'☽',group:'ЛИЧНОЕ ЯДРО',short:'Адаптация · восприятие · чувство безопасности',long:'Функция адаптации, восприятия и расслабления. Луна — сенсорная оптика: какие сигналы среды замечаются, что ощущается знакомым и безопасным, как возникают эмоции, рефлексы и базовые ожидания от мира. В этой модели это личное бессознательное и первая сигнальная система.',works:['silent-hill','planet-functions']},
    sun:{name:'Солнце',symbol:'☉',group:'ЛИЧНОЕ ЯДРО',short:'Самоидентификация · игра · самовыражение',long:'Функция личного сознания и самоидентификации: искреннее желание, игра, самовыражение и право формировать собственный контекст. В этой модели Солнце — источник живой энергии карты и возможность быть собой не только по инстинкту, но и по собственному выбору.',works:['planet-functions']},
    mercury:{name:'Меркурий',symbol:'☿',group:'ИНСТРУМЕНТ ЯДРА',short:'Информация · речь · движение · связи',long:'Функция собирать и обрабатывать информацию, связывать объекты и идеи, переводить абстракции в код. Сюда относятся речь, письмо, коммуникация, движение, любопытство и рабочая память. В заметках — параллель со второй сигнальной системой.',works:['planet-functions','aspects']},
    venus:{name:'Венера',symbol:'♀',group:'ИНСТРУМЕНТ ЯДРА',short:'Вкус · ценность · пропорция · эстетика',long:'Функция различать, что нравится и не нравится, чувствовать пропорцию и баланс, формировать личную систему ценности и эстетики. Венера связана со способностью договариваться и создавать обмен, в котором выигрыш не обязательно обнуляет другого.',works:['planet-functions']},
    mars:{name:'Марс',symbol:'♂',group:'ИНСТРУМЕНТ ЯДРА',short:'Импульс · действие · сопротивление · защита',long:'Исполнительная функция: направить усилие, начать действовать и преодолеть сопротивление среды. Это физическая активность, напор, способность защищать границы и вступать в борьбу, когда это необходимо.',works:['planet-functions','aspects']},
    jupiter:{name:'Юпитер',symbol:'♃',group:'СОЦИАЛЬНОЕ ПОЛЕ',short:'Идеалы · мировоззрение · смысл · навигация',long:'Неформальное социальное поле: мировоззрение, нормы, ценности и система смыслов. Юпитер помогает соотнести частное с идеалом, выделить главное и задать направление; здесь же — обучение как погружение в смысл и роль авторитета.',works:['code-geass','cyberpunk-rule']},
    saturn:{name:'Сатурн',symbol:'♄',group:'СОЦИАЛЬНОЕ ПОЛЕ',short:'Граница · время · ответственность · форма',long:'Формальное социальное поле: границы, дисциплина, планирование, время, иерархии и ответственность. Сатурн ограничивает доступные пути, собирает усилие в устойчивую форму и помогает удерживать выбранное направление.',works:['code-geass','cyberpunk-rule','aspects']},
    uranus:{name:'Уран',symbol:'♅',group:'КОЛЛЕКТИВНОЕ ПОЛЕ',short:'Парадокс · инсайт · холодный разум · метапозиция',long:'Коллективный разум и логика парадокса: неожиданные связи, озарения, выход за привычные границы и способность посмотреть на систему со стороны. Уран связан с оригинальным суждением, метапознанием, вычислением вероятностей и сообществами равных.',works:['code-geass','ridley-scott','cyberpunk-rule']},
    neptune:{name:'Нептун',symbol:'♆',group:'КОЛЛЕКТИВНОЕ ПОЛЕ',short:'Воображение · потенциал · растворение границ',long:'Поле коллективного бессознательного и воображения: ассимиляция множества частей в целое, чувствительность к оттенкам и способность мыслить там, где границы ещё не определены. Нептун в этой модели — пространство потенциала, интуиции и образов.',works:['code-geass','ridley-scott']},
    pluto:{name:'Плутон',symbol:'♇',group:'КОЛЛЕКТИВНОЕ ПОЛЕ',short:'Табу · трансформация · коллективная тень',long:'Коллективная тень и энергия перехода: разрушение нежизнеспособной формы, пороговые состояния, трансгрессия, катарсис и то, что возвращается после вытеснения. Плутон связан с избытком психической силы и темами, которые общественный порядок старается не включать в повседневность.',works:['code-geass','ridley-scott','silent-hill','cyberpunk-rule']}
  };

  const routes = {
    anime:{theme:'anime',number:'01 / АНИМЕ · STORYBOARD',title:'Внутренний символ становится оружием.',eyebrow:'АНИМЕ / МИФ / ЖЕЛАНИЕ / ПЕРСОНАЖ',description:'У каждой силы в истории своя психологическая логика. Разбираю, что персонаж хочет, какой символ получает и почему это меняет мир вокруг.',image:'anime-violet.jpg',subhead:'Кадр за кадром.'},
    films:{theme:'film',number:'02 / ФИЛЬМЫ · FRAME STUDY',title:'Кино как система связей.',eyebrow:'КИНО / РИДЛИ СКОТТ / СОЗДАНИЕ И СОЗДАННОЕ',description:'Разбираю визуальные и сюжетные рифмы: как разум, жизнь, вытесненное и коллективный мир собираются в одну историю.',image:'film-emerald.jpg',subhead:'Войти через кадр.'},
    horror:{theme:'horror',number:'03 / ХОРРОР · THRESHOLD',title:'Страх — не случайная деталь.',eyebrow:'ХОРРОР / ТАБУ / ПОРОГОВОЕ СОСТОЯНИЕ',description:'В хорроре важны не только монстр и угроза, но и то, что сюжет запрещает, вытесняет или не может удержать в прежней форме.',image:'horror-noir.jpg',subhead:'Порог, после которого всё меняется.'},
    author:{theme:'author',number:'04 / АВТОРСКИЕ ТЕКСТЫ · LONG READ',title:'Сложное собирается в целое.',eyebrow:'АВТОРСКИЕ ТЕКСТЫ / СХЕМЫ / КЕЙСЫ',description:'Лонгриды и карты связей: как из символов, мотивов и функций складывается целый мир — и почему отдельные истории нарушают привычную формулу.',image:'author-triptych.jpg',subhead:'Карта моих рифм.'}
  };
  const pageNames={home:'Юрий Макаров — читать символы, видеть структуру',anime:'Аниме — Юрий Макаров',films:'Фильмы — Юрий Макаров',horror:'Хорроры — Юрий Макаров',author:'Авторские тексты — Юрий Макаров',planetarium:'Планетарий функций — Юрий Макаров',about:'Об авторе — Юрий Макаров'};
  let activeFilter='all';
  const $=(q,root=document)=>root.querySelector(q), $$=(q,root=document)=>[...root.querySelectorAll(q)];
  const safe=(v='')=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function cardMarkup(a,large=false){
    const tags=a.planets.slice(0,3).map(id=>`<span>${safe(planets[id]?.name||id)}</span>`).join('');
    return `<a class="article-card ${large?'card-large':''}" href="#article/${a.id}" aria-label="Читать: ${safe(a.title)}"><span class="card-bg" style="background-image:url('${image(a.cover)}')"></span><span class="card-meta"><span>${safe(a.label)}</span><span>${safe(a.read)}</span></span><span class="card-bottom"><h3>${safe(a.title)}</h3><p>${safe(a.excerpt)}</p><span class="card-tags">${tags}</span></span></a>`;
  }
  function articleById(id){return articles.find(a=>a.id===id)}
  function setTheme(theme){document.body.dataset.theme=theme||'main'}
  function showView(name){$$('.view').forEach(v=>{v.hidden=v.dataset.view!==name;v.classList.toggle('active',v.dataset.view===name)});}
  function activateNav(name){$$('.primary-nav a').forEach(a=>a.classList.toggle('active',a.dataset.route===name));}
  function updateMeta(title,desc,og='og-home.jpg'){
    document.title=title||pageNames.home;
    const description=$('meta[name="description"]'); if(description&&desc)description.content=desc;
    const ogTitle=$('meta[property="og:title"]');if(ogTitle)ogTitle.content=title||pageNames.home;
    const ogDesc=$('meta[property="og:description"]');if(ogDesc&&desc)ogDesc.content=desc;
    const url=(settings.siteUrl||'').replace(/\/$/,'');
    const ogImage=$('meta[property="og:image"]');if(ogImage)ogImage.content=url?`${url}/assets/images/${og}`:`assets/images/${og}`;
    const twImage=$('meta[name="twitter:image"]');if(twImage)twImage.content=ogImage?.content||`assets/images/${og}`;
    let canonical=$('link[rel="canonical"]');if(url){if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}canonical.href=url+location.hash}
  }
  function renderCollection(key){
    const route=routes[key];if(!route)return;
    setTheme(route.theme);showView('collection');activateNav(key);
    $('#collectionBg').style.backgroundImage=`url('${image(route.image)}')`;
    $('#collectionStamp').textContent=route.number;
    $('#collectionEyebrow').innerHTML=`<span></span>${safe(route.eyebrow)}`;
    $('#collectionTitle').textContent=route.title;
    $('#collectionDescription').textContent=route.description;
    $('#collectionSubhead').textContent=route.subhead;
    $('#articleSearch').value='';activeFilter='all';
    renderFilters();renderCollectionCards(key);
    const og={anime:'og-anime.jpg',films:'og-films.jpg',horror:'og-horror.jpg',author:'og-author.jpg'}[key];
    updateMeta(pageNames[key],route.description,og);
    closeMobileMenu();window.scrollTo({top:0,behavior:'smooth'});
  }
  function renderFilters(){
    const labels=[['all','Все'],['story','Разборы произведений'],['reference','Система / планеты'],['method','Метод']];
    $('#filterRow').innerHTML=labels.map(([key,label])=>`<button type="button" data-filter="${key}" class="${key===activeFilter?'active':''}">${label}</button>`).join('');
  }
  function renderCollectionCards(key){
    const query=($('#articleSearch')?.value||'').trim().toLowerCase();
    const list=articles.filter(a=>a.category===key&&(activeFilter==='all'||a.kind===activeFilter))
      .filter(a=>!query||`${a.title} ${a.excerpt} ${a.label} ${a.planets.map(x=>planets[x]?.name).join(' ')}`.toLowerCase().includes(query));
    $('#collectionArticles').innerHTML=list.map((a,i)=>cardMarkup(a,i===0&&list.length>2)).join('');
    $('#emptyState').hidden=list.length>0;
    $('#collectionCount').textContent=`${String(list.length).padStart(2,'0')} МАТЕРИАЛА / РУБРИКА`;
  }
  function renderArticle(id){
    const a=articleById(id);if(!a){location.hash='#author';return}
    const theme=routes[a.category]?.theme||'author';setTheme(theme);showView('article');activateNav(a.category);
    $('#articleCover').style.backgroundImage=`url('${image(a.cover)}')`;
    $('#articleCoverOverlay').style.backgroundImage=`url('${image(a.cover)}')`;
    $('#articleMeta').textContent=`${a.label} · ${a.read}`;
    $('#articleTitle').textContent=a.title;$('#articleLead').textContent=a.lead;
    $('#articleBody').innerHTML=`<p class="article-intro">${safe(a.lead)}</p>${a.body.map(([h,p])=>`<section><h2>${safe(h)}</h2><p>${safe(p)}</p></section>`).join('')}<blockquote>Читать символы. Видеть структуру.</blockquote><p>Это авторская интерпретация и один из возможных маршрутов чтения. Материал подготовлен на основе заметок Юрия Макарова.</p>`;
    $('#articlePlanets').innerHTML=a.planets.map(id=>`<button type="button" data-open-planet="${id}">${safe(planets[id]?.name||id)}</button>`).join('');
    const rootUrl=(settings.siteUrl||new URL('.',location.href).href).replace(/\/$/,'');
    const socialPage=`${rootUrl}/share/${a.id}.html`;
    const shareUrl=encodeURIComponent(socialPage);
    const shareText=encodeURIComponent(a.title+' — Юрий Макаров');
    const socialImage=`${rootUrl}/assets/images/og-${a.id}.jpg`;
    $('#shareTelegram').href=`https://t.me/share/url?url=${shareUrl}&text=${shareText}`;
    $('#shareVk').href=`https://vk.com/share.php?url=${shareUrl}&title=${shareText}&image=${encodeURIComponent(socialImage)}`;
    $('#copyLink').onclick=async()=>{try{await navigator.clipboard.writeText((settings.siteUrl||location.href.split('#')[0])+`#article/${a.id}`);toast('Ссылка скопирована')}catch{toast('Скопируй адрес страницы из строки браузера')}};
    updateMeta(a.title+' — Юрий Макаров',a.excerpt,`og-${a.id}.jpg`);
    closeMobileMenu();window.scrollTo({top:0,behavior:'smooth'});
  }
  function renderAbout(){setTheme('author');showView('about');activateNav('about');updateMeta(pageNames.about,'Об авторе проекта Юрия Макарова: астрология, кино, аниме и авторский способ чтения символических систем.','og-author.jpg');closeMobileMenu();window.scrollTo({top:0,behavior:'smooth'})}
  function renderPlanetarium(){setTheme('main');showView('planetarium');activateNav('planetarium');updateMeta(pageNames.planetarium,'Интерактивная авторская схема планетных функций и связи астрологических символов с кино, аниме, играми и мифом.','og-planetarium.jpg');closeMobileMenu();window.scrollTo({top:0,behavior:'smooth'})}
  function renderHome(){
    setTheme('main');showView('home');activateNav('home');
    const picks=['code-geass','ridley-scott','silent-hill','cyberpunk-rule'].map(articleById).filter(Boolean);
    $('#homeArticles').innerHTML=picks.map((a,i)=>cardMarkup(a,i===0||i===3)).join('');
    updateMeta(pageNames.home,'Авторский проект Юрия Макарова: астрология, кино, аниме и символические системы. Разборы натальных карт, культурных сюжетов и связей между ними.','og-home.jpg');
    closeMobileMenu();
  }
  function route(){
    const h=(location.hash||'#home').slice(1);
    if(h.startsWith('article/')){renderArticle(h.split('/')[1]);return}
    if(h==='planetarium'){renderPlanetarium();return}
    if(h==='about'){renderAbout();return}
    if(routes[h]){renderCollection(h);return}
    renderHome();
    if(h==='consultation'||h==='contact')setTimeout(()=>document.getElementById(h)?.scrollIntoView({behavior:'smooth'}),80);
  }
  function closeMobileMenu(){const nav=$('#primaryNav'),btn=$('#menuToggle');nav?.classList.remove('open');btn?.setAttribute('aria-expanded','false')}
  function toast(text){const t=$('#toast');if(!t)return;t.textContent=text;t.hidden=false;clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.hidden=true,2300)}
  function openContact(){const modal=$('#contactModal');if(modal){modal.hidden=false;$('#modalClose').focus()}}
  function closeContact(){const modal=$('#contactModal');if(modal)modal.hidden=true}
  function setupSocial(){
    const social=settings.social||{};
    $$('.social-config-link').forEach(a=>{const key=a.dataset.social,url=social[key]||'';if(url){a.href=url;a.classList.add('configured');a.removeAttribute('aria-disabled');if(a.tagName==='A'){a.target='_blank';a.rel='noopener'}}else{a.href='#contact';a.classList.remove('configured');a.setAttribute('aria-disabled','true');a.removeAttribute('target')}const state=$('.social-state',a);if(state)state.textContent=url?'ОТКРЫТЬ КАНАЛ ↗':'ССЫЛКА НАСТРАИВАЕТСЯ'});
    $$('.contact-config-link').forEach(a=>{const url=settings.bookingUrl||settings.social?.telegram||settings.contactEmail&&`mailto:${settings.contactEmail}`;if(url){a.href=url;a.classList.add('configured');if(url.startsWith('http')){a.target='_blank';a.rel='noopener'}}else{a.href='#contactModal';a.classList.remove('configured')}});
  }
  const planetHint=$('#planetHint');
  function hintPlanet(id){const p=planets[id];if(p&&planetHint)planetHint.innerHTML=`<b>${safe(p.name.toUpperCase())} / HUD:</b> ${safe(p.short)}`}
  function selectPlanet(id){
    const p=planets[id];if(!p)return;
    $$('.planet-node').forEach(n=>n.classList.toggle('selected',n.dataset.id===id));
    $('#planetGroup').textContent=p.group;$('#planetName').textContent=p.name;$('#planetSymbol').textContent=p.symbol;$('#planetShort').textContent=p.short;$('#planetLong').textContent=p.long;hintPlanet(id);
    const related=p.works.map(articleById).filter(Boolean);
    $('#planetMaterials').innerHTML=related.length?related.map(a=>`<button class="related-item" type="button" data-article="${a.id}"><b>${safe(a.title)}</b><span>${safe(a.category==='anime'?'АНИМЕ':a.category==='films'?'КИНО':a.category==='horror'?'ХОРРОР':'ТЕКСТ')}</span></button>`).join(''):`<div class="related-item"><b>Подборка материалов собирается</b><span>СКОРО</span></div>`;
  }
  function setupScrollStory(){
    const chapters=$$('.story-chapter');
    const imageEl=$('#storyVisualImage');
    if(!chapters.length||!imageEl)return;
    const scenes={
      anime:{image:'anime-violet.jpg',alt:'Аниме-образ ночного города и персонажа на крыше',accent:'#e85bdb',kicker:'01 / АНИМЕ · CODE GEASS',index:'FRAME 01 — 03',title:'Желание<br>становится силой.'},
      film:{image:'film-emerald.jpg',alt:'Изумрудный кино-кадр с красным креслом в тёмном театре',accent:'#38c9ad',kicker:'02 / ФИЛЬМЫ · RIDLEY SCOTT',index:'FRAME 02 — 03',title:'Разум встречается<br>с живым.'},
      horror:{image:'horror-noir.jpg',alt:'Ночной нуарный кадр с фигурой под дождём',accent:'#f04458',kicker:'03 / ХОРРОР · THRESHOLD',index:'FRAME 03 — 03',title:'Страх получает<br>своё пространство.'}
    };
    let current='anime';
    const activate=key=>{
      const scene=scenes[key];if(!scene||key===current)return;current=key;
      const visual=$('#storyVisual');visual.style.setProperty('--story-accent',scene.accent);
      imageEl.classList.add('switching');
      const preload=new Image();
      preload.onload=()=>{imageEl.src=preload.src;imageEl.alt=scene.alt;requestAnimationFrame(()=>imageEl.classList.remove('switching'))};
      preload.onerror=()=>imageEl.classList.remove('switching');
      preload.src=image(scene.image);
      $('#storyVisualKicker').textContent=scene.kicker;$('#storyVisualIndex').textContent=scene.index;$('#storyVisualTitle').innerHTML=scene.title;
      $$('.story-track i').forEach((dot,i)=>dot.classList.toggle('active',i===['anime','film','horror'].indexOf(key)));
      chapters.forEach(ch=>ch.classList.toggle('is-current',ch.dataset.scene===key));
    };
    if('IntersectionObserver' in window){
      const observer=new IntersectionObserver(entries=>{
        const visible=entries.filter(entry=>entry.isIntersecting);
        if(!visible.length)return;
        const center=innerHeight*.5;
        const nearest=visible.reduce((best,entry)=>Math.abs(entry.boundingClientRect.top+entry.boundingClientRect.height/2-center)<Math.abs(best.boundingClientRect.top+best.boundingClientRect.height/2-center)?entry:best);
        activate(nearest.target.dataset.scene);
      },{root:null,rootMargin:'-28% 0px -34% 0px',threshold:0.1});
      chapters.forEach(ch=>observer.observe(ch));
    }else{
      window.addEventListener('scroll',()=>{const target=chapters.find(ch=>{const r=ch.getBoundingClientRect();return r.top<innerHeight*.62&&r.bottom>innerHeight*.35});if(target)activate(target.dataset.scene)},{passive:true});
    }
  }
  function setupPlanetarium(){
    $$('.planet-node').forEach(n=>{n.addEventListener('mouseenter',()=>hintPlanet(n.dataset.id));n.addEventListener('focus',()=>hintPlanet(n.dataset.id));n.addEventListener('click',()=>selectPlanet(n.dataset.id));n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectPlanet(n.dataset.id)}})});
    selectPlanet('sun');
    const aspects={conjunction:'Соединение связывает функции и активирует одну через другую. В контакте личной функции с социальной или коллективной поле большего масштаба может задавать тон и перенастраивать личную.',sextile:'Секстиль — связь, которой нужно воспользоваться: контакт упрощает обучение и совместную работу функций, но не включает их автоматически.',trine:'Трин — сильная гармоничная связка: функции поддерживают друг друга, а необходимые для их сочетания навыки осваиваются легче.',square:'Квадрат — горячее столкновение: одно поле давит на другое, между функциями возникает напряжение и перенастройка.',opposition:'Оппозиция — холодное противостояние полюсов: ни один не отменяет другой, поэтому возникает тяга между ними и поиск баланса.'};
    $$('#aspectTabs button').forEach(b=>b.addEventListener('click',()=>{$$('#aspectTabs button').forEach(x=>x.classList.toggle('active',x===b));$('#aspectCopy').textContent=aspects[b.dataset.aspect]}));
  }
  function setupContactModal(){
    $$('.contact-config-link:not(.configured)').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openContact()}));
    $$('.social-config-link:not(.configured)').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openContact()}));
    $('#modalClose')?.addEventListener('click',closeContact);
    $('#contactModal')?.addEventListener('click',e=>{if(e.target.id==='contactModal')closeContact()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeContact()});
  }
  function setupFilters(){
    $('#filterRow')?.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;activeFilter=b.dataset.filter;$$('#filterRow button').forEach(x=>x.classList.toggle('active',x===b));const key=location.hash.slice(1);if(routes[key])renderCollectionCards(key)});
    $('#articleSearch')?.addEventListener('input',()=>{const key=location.hash.slice(1);if(routes[key])renderCollectionCards(key)});
  }
  function setupClicks(){
    document.addEventListener('click',e=>{
      const p=e.target.closest('[data-open-planet]');if(p){e.preventDefault();location.hash='#planetarium';setTimeout(()=>selectPlanet(p.dataset.openPlanet),60);return}
      const a=e.target.closest('[data-article]');if(a){location.hash='#article/'+a.dataset.article;return}
    });
    $('#menuToggle')?.addEventListener('click',()=>{const n=$('#primaryNav'),b=$('#menuToggle');const open=!n.classList.contains('open');n.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open))});
    $('#primaryNav')?.addEventListener('click',e=>{if(e.target.closest('a'))closeMobileMenu()});
  }
  function setSocialShareMeta(){
    const root=settings.siteUrl||location.origin+location.pathname;
    if(settings.siteUrl){const u=settings.siteUrl.replace(/\/$/,'');const og=$('meta[property="og:image"]');if(og)og.content=u+'/assets/images/og-home.jpg'}
    const year=$('#yearNow');if(year)year.textContent=new Date().getFullYear();
  }
  window.addEventListener('hashchange',route);
  renderHome();setupScrollStory();setupPlanetarium();setupFilters();setupClicks();setupSocial();setupContactModal();setSocialShareMeta();route();
})();
