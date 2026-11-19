import React from 'react';{/* Часто задаваемые вопросы (FAQ) */}


export default function Home() {
  React.useEffect(() => {
    if (new URLSearchParams(window.location.search).get('scroll') === 'contact-form') {
      window.setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-primary">Михаил Палагин</div>
          <div className="flex items-center gap-4">
            <a href="/materials" className="hidden text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800 sm:inline">С чем можно прийти</a>
            <div className="text-sm font-semibold text-muted-foreground">Консалтинг и менторство</div>
          </div>
        </div>
      </header>

      <main>
        {/* Главный блок */}
        <section className="py-12 bg-gradient-to-b from-white to-slate-50 border-b border-border">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 text-center md:text-left space-y-6">
                <div className="inline-flex flex-col items-center md:items-start gap-1 px-4 py-2 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium">
                  <span>Кандидат технических наук с 1992 года</span>
                  <span className="font-normal">Многолетний опыт преподавания и практической работы</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Диссертация — консалтинг и менторство
                </h1>
                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                  Экспертное сопровождение аспирантов и соискателей по техническим специальностям — от обоснования научной новизны до подготовки к защите. Не пишу диссертации и тексты «под ключ».
                </p>
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="#contact-form"
                      className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md h-12 px-6 w-full sm:w-auto text-base font-medium transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('contact-form');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Заказать экспресс-аудит — 6 000 ₽
                    </a>
                    <a
                      href="#pricing"
                      className="inline-flex items-center justify-center border border-teal-600 text-teal-700 hover:bg-teal-50 rounded-xl h-12 px-6 w-full sm:w-auto text-base font-medium transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('pricing');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Услуги и цены
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-50">
                  <img 
                    src="/photo.jpg" 
                    alt="Михаил Палагин" 
                    className="w-full h-full object-contain object-top"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Принципы работы */}
        <section className="py-10 bg-white border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">Мой подход</h2>
            <div className="space-y-3">
              {[
                { t: "Только технические науки", d: "Работаю строго в рамках специальностей, где обладаю подтвержденной экспертизой. Если тема вне зоны моих компетенций — честно откажусь на этапе рассмотрения заявки." },
                { t: "Строго без написания «под ключ»", d: "Я не пишу за вас диссертации и не торгую готовыми текстами. Моя цель — обучить вас методологии и помочь выстроить логику защиты ваших собственных результатов." },
                { t: "Инженерный язык", d: "В технических дисциплинах абстрактные советы не работают. Мы говорим на языке моделей, физики процессов, методов измерений и оценки погрешностей." }
              ].map((p, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">{p.t}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
                {/* Примеры ситуаций */}
        <section className="py-10 bg-slate-50 border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">Примеры ситуаций, с которыми я работаю</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: "Научная новизна", d: "Новизна была сформулирована через разработку системы/алгоритма. Пересобрали положения: выделили метод, модель и границы применимости. Научный аппарат стал полностью соответствовать требованиям." },
                { t: "Границы исследования", d: "Заявленная новизна оказалась слишком широкой. Уточнили объект, предмет и область применения. Работа стала заметно более защищённой от замечаний." },
                { t: "Автореферат и структура", d: "Слабая связь между целью, положениями и выводами. Усилили внутреннюю логику и акценты на новом знании. Структура стала понятнее для членов совета." },
                { t: "Предзащита и доклад", d: "Доклад и презентация были перегружены деталями. Перестроили логику выступления и слайды, провели репетицию. Выступление стало чётче и убедительнее." }
              ].map((c, i) => (
                <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <h4 className="font-bold text-teal-600 mb-1 text-sm sm:text-base">{c.t}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h4 className="font-bold text-teal-600 mb-1 text-sm sm:text-base">Отзывы оппонентов</h4>
              <p className="text-sm text-slate-600 leading-relaxed">В отзывах были и технические, и принципиальные замечания. Подготовили аргументированные и тактичные ответы. Соискатель уверенно отстоял позицию на защите.</p>
            </div>
          </div>
        </section>
        {/* Отличие экспертного разбора от ИИ */}
        <section className="py-10 bg-white border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Экспертный разбор и ИИ: в чём разница
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ИИ может работать с текстом. Экспертный разбор проверяет научную конструкцию диссертации и инженерное содержание результата.
              </p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-600 leading-relaxed list-disc list-inside">
                <li>Я разбираю, какой результат действительно получен</li>
                <li>Проверяю связь результата с научной новизной</li>
                <li>Сверяю цель, задачи, положения и выводы</li>
                <li>Оцениваю доказательную базу и границы применимости</li>
                <li>Показываю, какие вопросы могут возникнуть у совета</li>
              </ul>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                ИИ может быть инструментом для работы с текстом. Экспертный разбор нужен для проверки научной логики, инженерного содержания и защищаемости результата.
              </p>
            </div>
          </div>
        </section>

        {/* Форматы работы и цены */}
        <section id="pricing" className="py-12 bg-white border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-3">
              Форматы работы и цены
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center max-w-2xl mx-auto mb-6">
              Работаю только с техническими специальностями и в пределах своей компетенции.
              Не пишу диссертации и статьи «под ключ»: тексты, расчёты и научные формулировки
              готовит соискатель
            </p>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 mb-6">
              <h3 className="font-bold text-slate-900 mb-3">Важные условия</h3>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                <li>Не гарантирую положительный исход защиты или публикации</li>
                <li>Окончательная стоимость фиксируется после ознакомления с заявкой и материалами</li>
                <li>Материалы и переписка конфиденциальны</li>
                <li>Оплата: 100% предоплата; для физических лиц — чек плательщика НПД</li>
              </ul>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Экспресс-аудит',
                  price: '6 000 ₽',
                  term: '2–3 рабочих дня',
                  lead: 'Первичный разбор темы, введения, черновиков глав или автореферата. Материалы — до 50 страниц',
                  result: 'Письменное заключение: сильные и слабые места, научная новизна, положения и порядок доработки',
                  note: 'Без разбора полного текста'
                },
                {
                  title: 'Аудит автореферата',
                  price: '15 000 ₽',
                  term: '3–5 рабочих дней',
                  lead: 'Разбор автореферата как краткой модели диссертации',
                  result: 'Проверка структуры, связки «цель → положения → выводы» и соответствия новизны результатам исследования',
                  note: 'Тексты и формулировки соискатель готовит самостоятельно'
                },
                {
                  title: 'Аудит презентации и доклада',
                  price: '20 000 ₽',
                  term: '3–5 рабочих дней',
                  lead: 'Подготовка логики выступления и содержания слайдов',
                  result: 'Письменное заключение, до двух репетиций по 15 минут и разбор вероятных вопросов совета',
                  note: 'Акцент на защищаемых результатах'
                },
                {
                  title: 'Ответы на отзывы оппонентов и ведущей организации',
                  price: '25 000 ₽',
                  term: '2–4 рабочих дня',
                  lead: 'Разбор критических замечаний и подготовка структуры ответов',
                  result: 'Рекомендуемые формулировки аргументированных и тактичных ответов по объёму до четырёх отзывов; окончательный текст утверждает соискатель',
                  note: 'Услуга доступна после аудита автореферата или диссертации'
                },
                {
                  title: 'Аудит диссертации по главам',
                  price: '50 000 ₽',
                  term: '7–10 рабочих дней',
                  lead: 'Аудит текста до 180 страниц. Больший объём согласовывается отдельно',
                  result: 'Заключение 10–15 страниц: карта ядра работы, логика глав, связка «цель → задачи → результаты → выводы», доказательная база, вопросы совета и план доработки',
                  note: 'Включает созвон 30–40 минут. Это аудит конструкции, а не редактура и не перепроверка расчётов'
                },
                {
                  title: 'Полный аудит',
                  price: '75 000 ₽',
                  term: '10–14 рабочих дней',
                  lead: 'Диссертация, автореферат и протокол соответствия',
                  result: 'Построчная сверка положений, новизны, выводов, цифр, таблиц, публикаций и соответствия автореферата тексту диссертации',
                  note: 'Включает созвон до 60 минут'
                },
                {
                  title: 'Менторское сопровождение',
                  price: '30 000 ₽ в месяц',
                  term: 'Минимальный срок — 6 месяцев',
                  lead: 'Старт после экспресс-аудита или другого согласованного экспертного этапа',
                  result: 'До четырёх созвонов в месяц, проверка до 25–30 страниц, поддержка в мессенджере и публикационный консалтинг',
                  note: 'Без написания текста за автора и без гарантии публикации или успешной защиты'
                }
              ].map((service, i) => (
                <details key={i} className="group rounded-xl border border-slate-200 bg-white shadow-sm">
                  <summary className="cursor-pointer list-none px-4 py-4 sm:px-5 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors rounded-xl">
                    <span className="min-w-0">
                      <span className="block font-bold text-slate-900 text-sm sm:text-base">{service.title}</span>
                      <span className="mt-1 block text-sm font-semibold text-teal-700">{service.price}</span>
                      <span className="mt-1 block text-xs sm:text-sm text-slate-500">{service.term}</span>
                    </span>
                    <span className="shrink-0 text-teal-600 text-sm transition-transform group-open:rotate-180" aria-hidden="true">▼</span>
                  </summary>
                  <div className="border-t border-slate-200 px-4 py-4 sm:px-5 text-sm text-slate-600 leading-relaxed">
                    <p>{service.lead}</p>
                    <p className="mt-3"><strong className="text-slate-900">Результат:</strong> {service.result}</p>
                    <p className="mt-3 text-slate-500">{service.note}</p>
                    <a
                      href="#contact-form"
                      className="mt-4 inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
                    >
                      Обсудить задачу
                    </a>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-5 text-center">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Не уверены, какой формат подходит? Направьте краткое описание задачи и доступные материалы
              </p>
              <a
                href="/materials"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
              >
                С чем можно начать работу
              </a>
            </div>
          </div>
        </section>

        {/* Публикации */}
        <section className="py-12 bg-white border-b border-border">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Публикации</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Авторские материалы Михаила Палагина о диссертационной методологии, научной новизне и подготовке к защите
            </p>
            <a
              href="/publications"
              className="inline-flex items-center justify-center mt-5 rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
            >
              Посмотреть публикации
            </a>
            <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
              <a href="https://dzen.ru/palagin-mentor.ru" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
                Блог в Дзене
              </a>
              <a href="https://t.me/anatomy_dissertation" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
                Telegram-канал
              </a>
            </div>
          </div>
        </section>

        {/* Часто задаваемые вопросы */}
        <section className="py-10 bg-white border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-3">
              {[
                { q: 'С какими специальностями вы работаете?', a: 'Только с техническими специальностями и только в рамках тем, в которых у меня есть достаточная экспертиза. Если задача выходит за зону моей компетенции, я честно откажусь ещё на этапе рассмотрения заявки' },
                { q: 'Вы пишете текст диссертации за соискателя?', a: 'Нет. Я не пишу работу и не продаю готовые тексты. Моя задача — помочь выстроить логику исследования, сформулировать научную новизну, усилить научный аппарат и подготовиться к защите' },
                { q: 'Сколько длится экспресс-аудит?', a: 'Обычно 2–3 рабочих дня после получения оплаты и необходимых материалов. Основной результат — письменное экспертное заключение' },
                { q: 'Можно ли обратиться, если диссертация уже в работе?', a: 'Да. Можно направить готовый текст, отдельные главы, автореферат, замечания научного руководителя или материалы предварительного обсуждения' },
                { q: 'Как обеспечивается конфиденциальность?', a: 'Все материалы используются только для работы по вашему запросу. Документы и переписка не передаются третьим лицам' },
                { q: 'Что будет, если после аудита я не захочу продолжать?', a: 'Экспресс-аудит является самостоятельной услугой. Вы получаете заключение и рекомендации и можете использовать их дальше самостоятельно' }
              ].map((f, i) => (
                <details key={i} className="group rounded-xl border border-slate-200 bg-slate-50/50">
                  <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                    <span>{f.q}</span>
                    <span className="text-teal-600 text-xs transition-transform group-open:rotate-180" aria-hidden="true">▼</span>
                  </summary>
                  <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Блок действия и согласий */}
        <section id="contact-form" className="py-12 bg-slate-50 border-b border-border">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Обсудим вашу задачу</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">Опишите тему, текущий этап работы и вопрос, который нужно решить. Я посмотрю материалы и предложу подходящий формат работы из прайс-листа.</p>
            <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Не знаете, какие материалы отправить? <a href="/materials" className="font-semibold text-teal-600 underline underline-offset-2 hover:text-teal-700">Посмотрите варианты для первого обращения</a>.
            </div>
            <div className="max-w-xl mx-auto mb-6 rounded-xl border border-teal-200 bg-teal-50 p-5 text-left">
  <h3 className="font-bold text-slate-900 mb-2">
    Экспресс-аудит — 6 000 ₽
  </h3>

  <p className="text-sm text-slate-600 leading-relaxed">
    Оплата производится только после предварительного согласования заявки.
    Основной результат — письменный экспертный аудит.
  </p>

  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
    Срок подготовки обычно составляет 2–3 рабочих дня после получения оплаты
    и необходимых для работы материалов.
  </p>
</div>

            <div className="bg-white border border-border rounded-xl p-5 text-left shadow-sm max-w-xl mx-auto mb-6">
              <h4 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">Что происходит после заявки:</h4>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside leading-relaxed">
                <li>Я смотрю материалы и оцениваю, могу ли быть полезен именно в вашей теме.</li>
                <li>В течение 1–2 рабочих дней даю ответ — беру работу или аргументированно отказываюсь.</li>
                <li>Если тема в зоне компетенции, согласовываем экспресс-аудит и дальше двигаемся предметно.</li>
              </ul>
            </div>
            
            <div className="max-w-xl mx-auto">
              <div className="space-y-3 mb-5 bg-white p-4 rounded-xl border border-slate-200 text-left">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input type="checkbox" id="privacy-check" className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 cursor-pointer" />
                  <span className="text-xs text-slate-600 leading-relaxed">Я даю согласие на обработку персональных данных в соответствии с <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline font-medium">Политикой конфиденциальности</a>.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input type="checkbox" id="terms-check" className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 cursor-pointer" />
                  <span className="text-xs text-slate-600 leading-relaxed">Я подтверждаю, что ознакомлен с <a href="/terms.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline font-medium">Условиями оказания консалтинговых услуг (Публичной офертой)</a>, являюсь автором материалов и не заказываю написание «под ключ».</span>
                </label>
              </div>
              <a 
                href="https://forms.yandex.ru/cloud/6ab40911d046882036649f4e/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  const privacy = document.getElementById('privacy-check') as HTMLInputElement;
                  const terms = document.getElementById('terms-check') as HTMLInputElement;
                  if (!privacy?.checked || !terms?.checked) {
                    e.preventDefault();
                    alert('Пожалуйста, подтвердите согласие с Политикой конфиденциальности и Условиями оказания услуг, поставив обе галочки.');
                  }
                }}
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md transition-colors font-sans cursor-pointer"
              >
                Отправить заявку на экспресс-аудит
              </a>
                           <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-sm text-slate-600">
                  Если вам удобнее связаться напрямую:
                </p>

                <div className="mt-2 flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-4">
                  <a
                    href="mailto:vned.mp@yandex.ru"
                    className="font-medium text-teal-600 underline underline-offset-2 hover:text-teal-700"
                  >
                    vned.mp@yandex.ru
                  </a>

                  <a
                    href="https://t.me/MP_DSR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-teal-600 underline underline-offset-2 hover:text-teal-700"
                  >
                    Telegram: @MP_DSR
                  </a>
                </div>
              </div>
 
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
