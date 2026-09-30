import React from 'react';
import { Send, CheckCircle, Award, FileText, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLocation } from 'wouter';

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-primary">Михаил Палагин</div>
          <div className="text-sm font-semibold text-muted-foreground">Научный консалтинг к.т.н.</div>
        </div>
      </header>

      <main>
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
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Помогаю выстроить железобетонный научный аппарат исследования, устранить дефекты логики и подготовить материалы к успешной защите. Без написания текстов «под ключ».
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                  <Button 
                    size="lg" 
                    className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md h-12 px-6"
                    onClick={() => {
                      const element = document.getElementById('contact-form');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Заказать экспресс-аудит <ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                  <img 
                    src="/photo.jpg" 
                    alt="Михаил Палагин" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-b border-border">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">
              Мои принципы работы
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <CheckCircle className="text-teal-600 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Только технические науки</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Работаю строго в рамках специальностей, где обладаю подтвержденной экспертизой. Если тема вне зоны моих компетенций — честно откажусь на этапе рассмотрения заявки.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <CheckCircle className="text-teal-600 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Строго без написания «под ключ»</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Я не пишу за вас диссертации и не торгую готовыми текстами. Моя цель — обучить вас методологии и помочь выстроить логику защиты ваших собственных результатов.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <CheckCircle className="text-teal-600 shrink-0 mt-1" size={20} />
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
                Что происходит после заявки:
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
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md transition-colors animate-pulse"
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
