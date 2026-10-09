import React from 'react';{/* Часто задаваемые вопросы (FAQ) */}


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-primary">Михаил Палагин</div>
          <div className="text-sm font-semibold text-muted-foreground">Научный консалтинг к.т.н.</div>
        </div>
      </header>

      <main>
        {/* Главный блок */}
        <section className="py-12 bg-gradient-to-b from-white to-slate-50 border-b border-border">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 text-center md:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium">
                  Кандидат технических наук (с 1992 года)
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Экспертное сопровождение аспирантов по техническим специальностям
                </h1>
                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                  Помогаю выстроить железобетонный научный аппарат исследования, устранить дефекты логики и подготовить материалы к успешной защите. Без написания текстов «под ключ».
                </p>
                <div className="pt-2">
                  <a 
                    href="#contact-form"
                    className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md h-12 px-6 w-full sm:w-auto text-base font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact-form');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Заказать экспресс-аудит
                  </a>
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
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">Мои принципы работы</h2>
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
        {/* Менторское сопровождение */}
<section className="py-12 bg-white border-b border-border">
  <div className="container max-w-3xl mx-auto px-4">
    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-3">
      Менторское сопровождение
    </h2>

    <p className="text-center text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
      Формат для долгосрочной совместной работы. Доступен после экспресс-аудита
или иного предварительно согласованного экспертного этапа.

    </p>

    <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6">
      <h3 className="font-bold text-slate-900 mb-4">
        Что входит в ежемесячное сопровождение
      </h3>

      <ul className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
        <li>
          <strong className="text-slate-900">
            До 4 индивидуальных онлайн-сессий в месяц
          </strong>
          — продолжительность каждой сессии составляет 15–30 минут.
        </li>

        <li>
          <strong className="text-slate-900">
            Экспертная проверка материалов
          </strong>
          — регулярный разбор подготовленных вами глав, введения,
          автореферата и других согласованных фрагментов.
        </li>

        <li>
          <strong className="text-slate-900">
            Ограниченный объём работы
          </strong>
          — до 25–30 страниц в месяц.
        </li>

        <li>
          <strong className="text-slate-900">
            Публикационный консалтинг
          </strong>
          — помощь в структурировании и подготовке научных статей
          к публикации без написания текста за автора и без гарантии
          публикации.
        </li>

        <li>
          <strong className="text-slate-900">
            Поддержка в мессенджере
          </strong>
          — ответы на текущие рабочие вопросы в течение одного рабочего дня.
        </li>
      </ul>

      <div className="mt-6 rounded-lg border border-teal-200 bg-teal-50 p-4">
        <p className="font-bold text-slate-900">
          Стоимость — 30 000 ₽ в месяц.
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Минимальный срок сопровождения — 6 месяцев.
        </p>
      </div>

      <p className="mt-5 text-sm text-slate-600 leading-relaxed">
        Все тексты и научные решения готовятся соискателем самостоятельно.
        Сопровождение не включает написание диссертации или статей за автора
        и не гарантирует публикацию или успешную защиту.
      </p>

      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
        Порядок оплаты, прекращения сопровождения и возврата денежных средств
        определяется договором публичной оферты.
      </p>
    </div>
  </div>
</section>

        {/* Часто задаваемые вопросы (FAQ) */}
        <section className="py-10 bg-white border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            {/* Публикации */}
<section className="py-12 bg-white border-b border-border">
  <div className="container max-w-3xl mx-auto px-4 text-center">
    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
      Публикации
    </h2>
    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
      Некоторые публикации последних лет — авторские материалы Михаила
      Палагина в журнале Business Excellence.
    </p>
    <a
      href="/publications"
      className="inline-flex items-center justify-center mt-5 rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
    >
      Посмотреть публикации
    </a>
  </div>
</section>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-3">
              {[
                { q: "С какими специальностями вы работаете?", a: "Только с техническими специальностями и только в рамках тем, в которых у меня есть достаточная экспертиза. Если задача выходит за зону моей компетенции — честно откажусь ещё на этапе рассмотрения заявки." },
                { q: "Вы пишете текст диссертации за соискателя?", a: "Нет. Я не пишу работу и не продаю готовые тексты. Моя задача — помочь выстроить логику исследования, сформулировать научную новизну, усилить научный аппарат и подготовиться к защите." },
                { q: "Сколько длится экспресс-аудит?", a: "Обычно несколько рабочих дней после получения материалов. По итогам вы получаете письменное экспертное заключение. При необходимости проводим короткий созвон для обсуждения." },
                { q: "Можно ли обратиться, если диссертация уже в работе?", a: "Да. Большинство запросов приходит не на старте, а когда уже есть текст, статьи, замечания научного руководителя или кафедры." },
                { q: "Как обеспечивается конфиденциальность?", a: "Все материалы используются только для работы по вашему запросу. Документы и переписка не передаются третьим лицам." },
                { q: "Что будет, если после экспресс-аудита я не захочу продолжать?", a: "Это нормальная ситуация. Экспресс-аудит — самостоятельный продукт. Вы получаете разбор и рекомендации и можете использовать их дальше самостоятельно." }
              ].map((f, i) => (
                <details key={i} className="group rounded-xl border border-slate-200 bg-slate-50/50">
                  <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                    <span>{f.q}</span>
                    <span className="text-teal-600 text-xs">▼</span>
                  </summary>
                  <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
            {/* БЛОК ДОПОЛНИТЕЛЬНЫХ УСЛУГ */}
        <section className="additional-services-section" style={{ padding: '60px 20px', backgroundColor: '#f8f9fa', fontFamily: 'sans-serif' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                
                <h2 style={{ color: '#1a202c', fontSize: '28px', fontWeight: 700, marginBottom: '10px', borderBottom: '2px solid #00b4d8', paddingBottom: '10px' }}>
                    Дополнительные услуги
                </h2>
                <p style={{ color: '#4a5568', fontSize: '16px', marginBottom: '30px' }}>
                    Сопровождение соискателей на отдельных этапах подготовки и защиты диссертации
                </p>

                <div style={{ display: 'grid', gap: '20px' }}>
                    
                    {/* Услуга 1: Автореферат */}
                    <div style={{ background: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '4px solid #00b4d8' }}>
                        <h3 style={{ color: '#2d3748', fontSize: '20px', marginTop: 0, marginBottom: '8px', fontWeight: 600 }}>
                            Автореферат
                        </h3>
                        <p style={{ color: '#718096', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
                            Глубокий разбор структуры, усиление внутренней логики триады <strong>«цель — положения — выводы»</strong>, а также профессиональная доработка и точечное усиление формулировок научной новизны.
                        </p>
                    </div>

                    {/* Услуга 2: Презентация и доклад */}
                    <div style={{ background: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '4px solid #00b4d8' }}>
                        <h3 style={{ color: '#2d3748', fontSize: '20px', marginTop: 0, marginBottom: '8px', fontWeight: 600 }}>
                            Презентация и доклад к предзащите
                        </h3>
                        <p style={{ color: '#718096', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
                            Полная переработка логики выступления и визуальной структуры слайдов. Профессиональная расстановка акцентов на защищаемых результатах, психологическая подготовка и репетиция доклада при необходимости.
                        </p>
                    </div>

                    {/* Услуга 3: Работа с отзывами */}
                    <div style={{ background: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '4px solid #00b4d8' }}>
                        <h3 style={{ color: '#2d3748', fontSize: '20px', marginTop: 0, marginBottom: '8px', fontWeight: 600 }}>
                            Работа с отзывами оппонентов
                        </h3>
                        <p style={{ color: '#718096', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
                            Детальный разбор критических замечаний ведущей организации и официальных оппонентов. Подготовка аргументированных, тактичных, академически выверенных ответов для успешного прохождения защиты.
                        </p>
                    </div>

                </div>

                {/* Блок стоимости */}
                <div style={{ marginTop: '35px', padding: '20px', backgroundColor: '#e0f2fe', borderRadius: '8px', textAlign: 'center' }}>
                    <p style={{ color: '#0369a1', fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0' }}>
                        💰 Стоимость рассчитывается индивидуально
                    </p>
                    <p style={{ color: '#0c4a6e', fontSize: '14px', margin: 0 }}>
                        Пожалуйста, укажите вашу конкретную задачу при подаче заявки в форме ниже.
                    </p>
                </div>

            </div>
        </section>

        {/* Блок действия и согласий */}
        <section id="contact-form" className="py-12 bg-slate-50 border-b border-border">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Готовы сделать следующий шаг?</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">Если вы узнали свою ситуацию в примерах выше или просто хотите понять, насколько текущие материалы соответствуют требованиям, начните с экспресс-аудита.</p>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
