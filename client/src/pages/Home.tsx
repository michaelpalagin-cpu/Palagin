import React, { useState } from 'react';
import { Button } from '../components/ui/button';

export default function Home() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

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
                  <Button 
                    size="lg" 
                    className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md h-12 px-6 w-full sm:w-auto"
                    onClick={() => {
                      const element = document.getElementById('contact-form');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Заказать экспресс-аудит
                  </Button>
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
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">
              Мои принципы работы
            </h2>
            <div className="space-y-3">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Только технические науки</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Работаю строго в рамках специальностей, где обладаю подтвержденной экспертизой. Если тема вне зоны моих компетенций — честно откажусь на этапе рассмотрения заявки.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Строго без написания «под ключ»</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Я не пишу за вас диссертации и не торгую готовыми текстами. Моя цель — обучить вас методологии и помочь выстроить логику защиты ваших собственных результатов.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Инженерный язык</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    В технических дисциплинах абстрактные советы не работают. Мы говорим на языке моделей, физики процессов, методов измерений и оценки погрешностей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Примеры ситуаций */}
        <section className="py-10 bg-slate-50 border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">
              Примеры ситуаций, с которыми я работаю
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-teal-500 transition-colors">
                <h4 className="font-bold text-teal-600 mb-1 text-sm sm:text-base">Научная новизна</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Новизна была сформулирована через разработку системы/алгоритма. Пересобрали положения: выделили метод, модель и границы применимости. Научный аппарат стал полностью соответствовать требованиям.
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-teal-500 transition-colors">
                <h4 className="font-bold text-teal-600 mb-1 text-sm sm:text-base">Границы исследования</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Заявленная новизна оказалась слишком широкой. Уточнили объект, предмет и область применения. Работа стала заметно более защищённой от замечаний.
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-teal-500 transition-colors">
                <h4 className="font-bold text-teal-600 mb-1 text-sm sm:text-base">Автореферат и структура</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Слабая связь между целью, положениями и выводами. Усилили внутреннюю логику и акценты на новом знании. Структура стала понятнее для членов совета.
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-teal-500 transition-colors">
                <h4 className="font-bold text-teal-600 mb-1 text-sm sm:text-base">Предзащита и доклад</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Доклад и презентация были перегружены деталями. Перестроили логику выступления и слайды, провели репетицию. Выступление стало чётче и убедительнее.
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-teal-500 transition-colors">
              <h4 className="font-bold text-teal-600 mb-1 text-sm sm:text-base">Отзывы оппонентов</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                В отзывах были и технические, и принципиальные замечания. Подготовили аргументированные и тактичные ответы. Соискатель уверенно отстоял позицию на защите.
              </p>
            </div>
          </div>
        </section>
        {/* Часто задаваемые вопросы (FAQ) */}
        <section className="py-10 bg-white border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-3">
              {[
                { q: "С какими специальностями вы работаете?", a: "Только с техническими специальностями и только в рамках тем, в которых у меня есть достаточная экспертиза. Если задача выходит за зону моей компетенции — честно откажусь ещё на этапе рассмотрения заявки." },
                { q: "Вы пишете текст диссертации за соискателя?", a: "Нет. Я не пишу работу и не продаю готовые тексты. Моя задача — помочь выстроить логику исследования, сформулировать научную новизну, усилить научный аппарат и подготовиться к защите." },
                { q: "Сколько длится экспресс-аудит?", a: "Обычно несколько рабочих дней после получения материалов. По итогам вы получаете письменное экспертное заключение. При необходимости проводим короткий созвон для обсуждения." },
                { q: "Можно ли обратиться, если диссертация уже в работе?", a: "Да. Большинство запросов приходит не на старте, а когда уже есть текст, статьи, замечания научного руководителя или кафедры." },
                { q: "Как обеспечивается конфиденциальность?", a: "Все материалы используются только для работы по вашему запросу. Документы и переписка не передаются третьим лицам." },
                { q: "Что будет, если после экспресс-аудита я не захочу продолжать?", a: "Это нормальная ситуация. Экспресс-аудит — самостоятельный продукт. Вы получаете разбор и рекомендации и можете использовать их дальше самостоятельно." }
              ].map((item, index) => (
                <details key={index} className="group rounded-xl border border-slate-200 bg-slate-50/50">
                  <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                    <span>{item.q}</span>
                    <span className="text-teal-600 text-xs">▼</span>
                  </summary>
                  <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Финал и форма */}
        <section id="contact-form" className="py-12 bg-slate-50 border-b border-border">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Готовы сделать следующий шаг?</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">Если вы узнали свою ситуацию в примерах выше или просто хотите понять, насколько текущие материалы соответствуют требованиям, начните с экспресс-аудита.</p>
            <div className="bg-white border border-border rounded-xl p-5 text-left shadow-sm max-w-xl mx-auto mb-6">
              <h4 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">Что происходит после заявки:</h4>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside leading-relaxed">
                <li>Я смотри материалы и оцениваю, могу ли быть полезен именно в вашей теме.</li>
                <li>В течение 1–2 рабочих дней даю ответ — беру работу или аргументированно отказываюсь.</li>
                <li>Если тема в зоне компетенции, согласовываем экспресс-аудит и дальше двигаемся предметно.</li>
              </ul>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="space-y-3 mb-5 bg-white p-4 rounded-xl border border-slate-200 text-left">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 cursor-pointer" />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    Я даю согласие на обработку персональных данных в соответствии с{' '}
                    <button type="button" onClick={() => setActiveModal('privacy')} className="text-teal-600 underline font-medium hover:text-teal-700">
                      Политикой конфиденциальности
                    </button>.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 cursor-pointer" />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    Я подтверждаю, что ознакомлен с{' '}
                    <button type="button" onClick={() => setActiveModal('terms')} className="text-teal-600 underline font-medium hover:text-teal-700">
                      Договором публичной оферты
                    </button>, самостоятельно являюсь автором материалов и не заказываю написание «под ключ».
                  </span>
                </label>
              </div>
              <a 
                href="https://yandex.ru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md transition-colors font-sans"
              >
                Отправить заявку на экспресс-аудит
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Модальное окно: Политика конфиденциальности */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-slate-200">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">Политика конфиденциальности</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 text-xl font-bold px-2">✕</button>
            </div>
            <div className="p-6 overflow-y-auto text-sm text-slate-700 space-y-4 leading-relaxed font-sans">
              <p className="font-semibold text-center text-slate-800">Политика в отношении обработки персональных данных</p>
              <p><strong>1. Общие положения</strong><br />1.1. Настоящая Политика составлена в соответствии с требованиями Федерального закона № 152-ФЗ «О персональных данных».<br />1.2. Политика определяет порядок обработки персональных данных Самозанятым гражданином Палагиным Михаилом Леонидовичем (Оператор).<br />1.3. Главной целью является защита прав и свобод человека при обработке его персональных данных, включая защиту прав на неприкосновенность частной жизни.</p>
              <p><strong>2. Условия конфиденциальности научных материалов</strong><br />2.1. Оператор гарантирует строгую академическую конфиденциальность в отношении любых присланных Пользователем материалов исследования (черновиков, планов, статей, авторефератов).<br />2.2. Направленные файлы используются исключительно Исполнителем лично для предварительного анализа заявки.<br />2.3. Материалы не подлежат передаче третьим лицам, публикации или использованию в личных научных целях.</p>
              <p><strong>3. Перечень обрабатываемых данных</strong><br />3.1. Фамилия, имя, отчество; адрес электронной почты; номер телефона; идентификатор в Telegram; текст описания ситуации и прикрепленные файлы научных материалов.</p>
              <p><strong>4. Цели обработки</strong><br />4.1. Анализ научной заявки на предмет технической компетенции; установление обратной связи; заключение договора Публичной оферты; формирование и отправка электронных чеков самозанятого.</p>
              <p><strong>5. Порядок сбора и защиты данных</strong><br />5.1. Данные собираются только при их самостоятельном заполнении Пользователем через форму. Оператор обеспечивает полную сохранность данных и принимает все меры, исключающие доступ неуполномоченных лиц.</p>
              <p className="text-xs text-slate-500 border-t pt-2">Действует бессрочно с 01 октября 2026 года. Контактный адрес: vned.mp@yandex.ru</p>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно: Публичная оферта */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-slate-200">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">Договор публичной оферты</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 text-xl font-bold px-2">✕</button>
            </div>
            <div className="p-6 overflow-y-auto text-sm text-slate-700 space-y-4 leading-relaxed font-sans">
              <p className="font-semibold text-center text-slate-800">Договор об оказании информационно-консультационных услуг</p>
              <p className="text-xs text-slate-500 text-center">Редакция от 01 октября 2026 года</p>
              <a 
                href="https://yandex.ru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md transition-colors font-sans"
              >
                Отправить заявку на экспресс-аудит
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Модальное окно: Политика конфиденциальности */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-slate-200">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl">
              <h3 className="font-bold text-slate-900 text-base">Политика конфиденциальности</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 text-xl font-bold px-2">✕</button>
            </div>
            <div className="p-6 overflow-y-auto text-sm text-slate-700 space-y-4 leading-relaxed font-sans">
              <p className="font-semibold text-center">Политика в отношении обработки персональных данных</p>
              <p><strong>1. Общие положения</strong><br />1.1. Настоящая Политика составлена в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».<br />1.2. Документ определяет порядок обработки данных Самозанятым гражданином Палагиным Михаилом Леонидовичем (Оператор).</p>
              <p><strong>2. Условия конфиденциальности научных материалов</strong><br />2.1. Оператор гарантирует строгую академическую конфиденциальность в отношении любых присланных материалов (черновиков, статей, авторефератов).<br />2.2. Файлы используются исключительно Исполнителем лично для предварительного анализа заявки.<br />2.3. Материалы не передаются третьим лицам и не публикуются.</p>
              <p><strong>3. Перечень обрабатываемых данных</strong><br />3.1. ФИО, адрес электронной почты, номер телефона, никнейм в Telegram, текст описания ситуации и прикрепленные файлы научных материалов.</p>
              <p className="text-xs text-slate-500 border-t pt-2">Редакция от 01 октября 2026 года. Почта: vned.mp@yandex.ru</p>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно: Публичная оферта */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-slate-200">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl">
              <h3 className="font-bold text-slate-900 text-base">Договор публичной оферты</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 text-xl font-bold px-2">✕</button>
            </div>
            <div className="p-6 overflow-y-auto text-sm text-slate-700 space-y-4 leading-relaxed font-sans">
              <p className="font-semibold text-center">Договор об оказании информационно-консультационных услуг</p>
              <p><strong>1. Общие положения</strong><br />1.1. Настоящий договор является публичной офертой (ст. 437 ГК РФ) и адресован соискателям ученых степеней.<br />1.2. Оферта размещается самозанятым гражданином Палагиным Михаилом Леонидовичем (Исполнитель).</p>
              <p><strong>2. Предмет договора и ограничения услуг</strong><br />2.1. Исполнитель оказывает дистанционные консультационные и менторские услуги по техническим наукам.<br />2.2. <strong>Исполнитель строго не пишет за Заказчика диссертации, авторефераты и статьи «под ключ», не продает готовые тексты.</strong> Заказчик выполняет исследования самостоятельно.</p>
              <p><strong>3. Стоимость услуг</strong><br />3.1. Письменный экспресс-аудит материалов: 6 000 рублей. Срок подготовки: 2-3 рабочих дня.<br />3.2. Менторское сопровождение: 30 000 рублей за расчетный месяц. Минимальный срок — 6 месяцев.</p>
              <p className="text-xs text-slate-500 border-t pt-2">Реквизиты: Палагин М. Л., Телефон СБП: +7-929-555-19-25, Почта: vned.mp@yandex.ru</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
