import React from 'react';
import { CheckCircle, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

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
                  <Award size={16} /> Кандидат технических наук (с 1992 года)
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
                    Заказать экспресс-аудит <ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                  <img 
                    src="/photo.jpg" 
                    alt="Михаил Палагин" 
                    className="w-full h-full object-cover object-center"
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
                  Новизна сформулирована через разработку системы/алгоритма. Пересобрали положения: выделили метод, модель и границы применимости.
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-teal-500 transition-colors">
                <h4 className="font-bold text-teal-600 mb-1 text-sm sm:text-base">Границы исследования</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Заявленная новизна оказалась слишком широкой. Уточнили объект, предмет и область применения. Работа стала более защищённой.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Часто задаваемые вопросы (FAQ) */}
        <section className="py-10 bg-white border-b border-border">
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
                  Только с техническими специальностями и только в рамках тем, в которых у меня есть достаточная экспертиза. Если задача выходит за зону компетенции — честно откажусь.
                </div>
              </details>
              <details className="group rounded-xl border border-slate-200 bg-slate-50/50">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between gap-4 text-sm sm:text-base hover:bg-slate-100/50 transition-colors">
                  <span>Вы пишете текст диссертации за соискателя?</span>
                  <span className="transition-transform group-open:rotate-180 text-teal-600 text-xs">▼</span>
                </summary>
                <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white rounded-b-xl">
                  Нет. Я не пишу работу и не продаю готовые тексты. Моя задача — помочь выстроить логику исследования, сформулировать научную новизну и подготовиться к защите.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Блок действия и согласий */}
        <section id="contact-form" className="py-12 bg-slate-50 border-b border-border">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Готовы сделать следующий шаг?
            </h2>
            <div className="max-w-xl mx-auto">
              <div className="space-y-3 mb-5 bg-white p-4 rounded-xl border border-slate-200 text-left">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600" />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    Я даю согласие на обработку моих персональных данных в соответствии с <a href="/privacy-policy.pdf" target="_blank" className="text-teal-600 underline font-medium">Политикой конфиденциальности</a>.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600" />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    Я подтверждаю, что ознакомлен с <a href="/terms.pdf" target="_blank" className="text-teal-600 underline font-medium">Условиями оказания консалтинговых услуг</a>, самостоятельно являюсь автором материалов и не заказываю написание «под ключ».
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
 
