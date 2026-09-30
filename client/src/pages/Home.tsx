import React from 'react';
import { Send, CheckCircle, Award, FileText, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLocation } from 'wouter';

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-primary">Михаил Палагин</div>
          <div className="text-sm font-semibold text-muted-foreground">Научный консалтинг к.т.н.</div>
        </div>
      </header>

      <section className="py-12 sm:py-12 bg-gradient-to-b from-white to-slate-50 border-b border-border">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-8 text-center md:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium">
                <Award size={16} /> Кандидат технических наук (с 1992 года)
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Экспертное сопровождение аспирантов по техническим специальностям
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                От обоснования научной новизны до генеральной репетиции предзащиты. Многолетний опыт экспертизы и консалтинга.
              </p>
              <div className="p-5 bg-amber-50/50 border border-amber-100 rounded-xl text-base text-slate-700 space-y-3 text-left shadow-sm">
                <p className="m-0 flex items-start gap-2">
                  <span>✔️</span> <span>Работаю только с темами, в которых действительно разбираюсь.</span>
                </p>
                <p className="m-0 flex items-start gap-2">
                  <span>❌</span> <span>Не пишу текст за вас — помогаю выстроить работу до требуемых критериев.</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-2">
                <a href="#contact-form" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-medium text-lg px-6 py-6 rounded-xl shadow-lg shadow-teal-600/20 w-full">
                    Подать заявку на экспресс-аудит <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-200 text-slate-700 font-medium text-lg px-6 py-6 rounded-xl bg-white hover:bg-slate-50 w-full sm:w-auto"
                  onClick={() => setLocation('/publications')}
                >
                  <FileText className="mr-2 text-teal-600" size={20} /> Посмотреть публикации
                </Button>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="relative group max-w-[240px] w-full aspect-[3/4] bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-md">
                <img src="/photo.jpg" alt="Михаил Палагин" className="w-full h-full object-cover" loading="lazy" width="240" height="320" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-12 bg-white border-b border-border">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Об эксперте</h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
            <p className="text-xl text-slate-900 font-bold">Михаил Палагин — кандидат технических наук (с 1992 года), научный ментор.</p>
            <p>Сочетаю академическую экспертизу и управленческий опыт в бизнесе. Работаю как независимый научный продюсер и коуч.</p>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 my-6 shadow-sm">
              <div className="font-bold text-slate-900 mb-3 text-lg">Помогаю:</div>
              <ul className="space-y-3 text-slate-800 m-0 list-none pl-0 font-medium">
                <li className="flex items-center gap-2">🔹 выстроить логику исследования</li>
                <li className="flex items-center gap-2">🔹 выкристаллизовать научную новизну</li>
                <li className="flex items-center gap-2">🔹 усилить практическую значимость</li>
                <li className="flex items-center gap-2">🔹 подготовиться к защите</li>
              </ul>
            </div>
            <p className="text-base border-l-4 border-teal-600 pl-4 italic font-medium text-slate-600">
              Консультирую только по техническим специальностям в зоне своей компетенции. Если тема вне её — честно откажусь на этапе заявки.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-slate-50 border-b border-border">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8">Мои принципы работы</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-white border border-border rounded-xl shadow-sm">
              <CheckCircle className="text-teal-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-base sm:text-lg">Прозрачность и легитимность</h4>
                <p className="text-base text-slate-600 m-0 leading-relaxed">Я не пишу диссертации „под ключ“ и не торгую готовыми текстами. Моя задача — обучить вас методологии и помочь выстроить научный аппарат исследования по требованиям академических стандартов.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-white border border-border rounded-xl shadow-sm">
              <CheckCircle className="text-teal-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-base sm:text-lg">Строгая специализация</h4>
                <p className="text-base text-slate-600 m-0 leading-relaxed">Экспертиза и консалтинг строго в рамках технических специальностей. Если задача лежит вне зоны моей профессиональной компетентности, я честно откажусь от сотрудничества на этапе рассмотрения заявки.</p>
              </div>
            </div>
          </div>
        </div>
             {/* Блок: Примеры ситуаций */}
        <section className="py-12 bg-slate-50 border-b border-border">
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

        {/* Блок: Часто задаваемые вопросы (FAQ) */}
        <section className="py-12 bg-white border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-3">
              <details className="group rounded-xl border border-slate-200 bg-slate-50/50">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                  <span>С какими специальностями вы работаете?</span>
                  <span className="transition-transform group-open:rotate-180 text-teal-600 text-xs">▼</span>
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">
                  Только с техническими специальностями и только в рамках тем, в которых у меня есть достаточная экспертиза. Если задача выходит за зону моей компетенции — честно откажусь ещё на этапе рассмотрения заявки.
                </div>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-slate-50/50">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                  <span>Вы пишете текст диссертации за соискателя?</span>
                  <span className="transition-transform group-open:rotate-180 text-teal-600 text-xs">▼</span>
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">
                  Нет. Я не пишу работу и не продаю готовые тексты. Моя задача — помочь выстроить логику исследования, сформулировать научную новизну, усилить научный аппарат и подготовиться к защите.
                </div>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-slate-50/50">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                  <span>Сколько длится экспресс-аудит?</span>
                  <span className="transition-transform group-open:rotate-180 text-teal-600 text-xs">▼</span>
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">
                  Обычно несколько рабочих дней после получения материалов. По итогам вы получаете письменное экспертное заключение. При необходимости проводим короткий созвон для обсуждения.
                </div>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-slate-50/50">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                  <span>Можно ли обратиться, если диссертация уже в работе?</span>
                  <span className="transition-transform group-open:rotate-180 text-teal-600 text-xs">▼</span>
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">
                  Да. Большинство запросов приходит не на старте, а когда уже есть текст, статьи, замечания научного руководителя или кафедры.
                </div>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-slate-50/50">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                  <span>Как обеспечивается конфиденциальность?</span>
                  <span className="transition-transform group-open:rotate-180 text-teal-600 text-xs">▼</span>
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">
                  Все материалы используются только для работы по вашему запросу. Документы и переписка не передаются третьим лицам.
                </div>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-slate-50/50">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                  <span>Что будет, если после экспресс-аудита я не захочу продолжать?</span>
                  <span className="transition-transform group-open:rotate-180 text-teal-600 text-xs">▼</span>
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">
                  Это нормальная ситуация. Экспресс-аудит — самостоятельный продукт. Вы получаете разбор и рекомендации и можете использовать их дальше самостоятельно.
                </div>
              </details>
            </div>
          </div>
        </section>
        {/* Блок: Готовы сделать следующий шаг? */}
        <section className="py-12 bg-slate-50 border-b border-border">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Готовы сделать следующий шаг?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
              Если вы узнали свою ситуацию в примерах выше или просто хотите понять, насколько текущие материалы соответствуют требованиям, начните с экспресс-аудита.
            </p>
            
            <div className="bg-white border border-border rounded-xl p-5 text-left shadow-sm max-w-xl mx-auto mb-6">
              <h4 className="font-bold text-slate-900 mb-3 text-sm sm:text-base text-center md:text-left">
                What происходит после заявки:
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside leading-relaxed">
                <li>Я смотрю материалы и оцениваю, могу ли быть полезен именно в вашей теме.</li>
                <li>В течение 1–2 рабочих дней даю ответ — беру работу или аргументированно отказываюсь.</li>
                <li>Если тема в зоне компетенции, согласовываем экспресс-аудит и дальше двигаемся предметно.</li>
              </ul>
              <p className="mt-3 pt-3 border-t border-slate-100 text-xs font-medium text-slate-500 text-center">
                Никакого давления. Только честная оценка текущей точки и понятный план.
              </p>
            </div>

            {/* Форма заявки и юридические согласия */}
            <div id="contact-form" className="max-w-xl mx-auto">
              <div className="space-y-3 mb-4 bg-white p-4 rounded-xl border border-slate-200 text-left">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    required 
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    Я даю согласие на обработку моих персональных данных в соответствии с <a href="/privacy-policy.pdf" target="_blank" className="text-teal-600 underline hover:text-teal-700 font-medium">Политикой конфиденциальности</a>.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    required 
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    Я подтверждаю, что ознакомлен с <a href="/terms.pdf" target="_blank" className="text-teal-600 underline hover:text-teal-700 font-medium">Условиями оказания консалтинговых услуг</a>, самостоятельно являюсь автором направляемых материалов и не заказываю написание работы «под ключ».
                  </span>
                </label>
              </div>

              <a 
                href="https://yandex.ru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md transition-colors"
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
