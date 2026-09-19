import React from 'react';
import { Send, CheckCircle, Shield, Award, Briefcase, FileText, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useLocation } from 'wouter';

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Шапка сайта */}
      <header className="border-b border-border bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-primary">Михаил Палагин</div>
          <div className="text-sm font-semibold text-muted-foreground">Научный консалтинг к.т.н.</div>
        </div>
      </header>

      {/* Первый экран (Hero) — Фото уменьшено, шрифты увеличены */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-border">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Левая колонка: Текстовый контент с увеличенными шрифтами */}
            <div className="md:col-span-8 text-center md:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium">
                <Award size={16} /> Кандидат технических наук (с 1992 года)
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Экспертное сопровождение аспирантов по техническим специальностям
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                От обоснования научной новизны до генеральной репетиции предзащиты. Более 30 лет в экспертном научном сообществе.
              </p>
              <div className="p-5 bg-amber-50/50 border border-amber-100 rounded-xl text-base text-slate-700 space-y-3 text-left shadow-sm">
                <p className="m-0 flex items-start gap-2">
                  <span>✔️</span> <span>Работаю только с темами, в которых действительно разбираюсь.</span>
                </p>
                <p className="m-0 flex items-start gap-2">
                  <span>❌</span> <span>Не пишу текст за вас — помогаю выстроить работу до критериев ВАК.</span>
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

            {/* Правая колонка: Фотография уменьшена на ~25-30% */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group max-w-[240px] w-full aspect-[3/4] bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <img 
                  src="/photo.jpg" 
                  alt="Михаил Палагин" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Блок Об эксперте — Текст увеличен на 1-2 пункта */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
            Об эксперте
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
            <p className="text-xl text-slate-900 font-bold">
              Михаил Палагин — кандидат технических наук (с 1992 года), научный ментор.
            </p>
            <p>
              Сочетаю академическую экспертизу и управленческий опыт в бизнесе. Работаю как независимый научный продюсер и тренер.
            </p>
            
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
      {/* Принципы работы — шрифты увеличены */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8">Мои принципы работы</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-white border border-border rounded-xl shadow-sm">
              <CheckCircle className="text-teal-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-base sm:text-lg">Прозрачность и легитимность</h4>
                <p className="text-base text-slate-600 m-0 leading-relaxed">Я не пишу диссертации «под ключ» и не торгую готовыми текстами. Моя задача — обучить вас методологии и довести работу до критериев ВАК.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-white border border-border rounded-xl shadow-sm">
              <CheckCircle className="text-teal-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-base sm:text-lg">Строгая специализация</h4>
                <p className="text-base text-slate-600 m-0 leading-relaxed">Консультирую только по техническим наукам. Если тема лежит вне зоны моей глубокой компетенции, я честно откажусь от проекта на этапе заявки.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форматы работы — шрифты увеличены */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Форматы работы и стоимость</h2>
          <div className="space-y-8">
            <Card className="p-6 sm:p-8 border border-slate-200 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">🔹 Шаг 1. Экспресс-аудит исследования</h3>
              <p className="text-base text-muted-foreground mb-4">Обязательный стартовый этап для фиксации текущей точки и формирования стратегии.</p>
              <ul className="space-y-3 text-base text-slate-700 mb-6 list-disc list-inside leading-relaxed font-medium">
                <li>Глубокий предварительный анализ ваших материалов (черновики, статьи, планы).</li>
                <li>Письменное экспертное заключение с разбором сильных и слабых мест научного аппарата.</li>
                <li>По согласованию сторон: онлайн-сессия (разбор 15-30 минут) для обсуждения результатов экспресс-аудита.</li>
              </ul>
              <div className="font-bold text-xl sm:text-2xl text-slate-900">Стоимость: 6 000 ₽ <span className="text-xs sm:text-sm font-normal text-muted-foreground">(разовый платеж после одобрения заявки)</span></div>
            </Card>

            <Card className="p-6 sm:p-8 border border-teal-100 bg-teal-50/20 rounded-2xl shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">🔹 Шаг 2. Менторское сопровождение</h3>
              <p className="text-base text-muted-foreground mb-4">Регулярное консалтинговое сопровождение до полной готовности диссертации.</p>
              <ul className="space-y-3 text-base text-slate-700 mb-6 list-disc list-inside leading-relaxed font-medium">
                <li>Индивидуальные сессии: до 4 онлайн-консультаций в месяц (по 15-30 минут).</li>
                <li>Письменный аудит наработок: регулярная экспертная вычитка и рецензирование текстов (до 25-30 страниц в месяц).</li>
                <li>Публикационный консалтинг: экспертная помощь при подготовке статей к публикации.</li>
                <li>Оперативная поддержка в рабочем мессенджере по текущим вопросам.</li>
              </ul>
              <div className="font-bold text-xl sm:text-2xl text-teal-700">Стоимость: 30 000 ₽ / месяц <span className="text-xs sm:text-sm font-normal text-slate-500">(доступно после Шага 1. Минимальный срок — 6 месяцев)</span></div>
            </Card>
          </div>
        </div>
      </section>
      {/* Форма заявки и Подвал */}
      <section id="contact-form" className="py-16 sm:py-24 bg-slate-50">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Заявка на предварительное согласование</h2>
          <p className="text-center text-slate-600 mb-8 text-base">
            Опишите ситуацию в свободной форме. Вопросы-подсказки — необязательны. Отправка заявки не означает начало аудита.
          </p>
          <Card className="p-6 sm:p-8 bg-white border border-border rounded-2xl shadow-sm">
            <form action="https://formspree.io" method="POST" className="space-y-6">
              <input type="hidden" name="subject" value="Новая заявка на научный консалтинг" />
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="free-description">Описание ситуации</label>
                <Textarea id="free-description" name="Описание ситуации" required placeholder="Расскажите о теме, текущем этапе, затруднениях и желаемом результате" className="w-full min-h-[160px] rounded-xl text-base" />
                <p className="mt-2 text-xs text-muted-foreground">Можно написать столько, сколько считаете нужным. Дополнительные материалы можно направить после предварительного согласования.</p>
              </div>

              {/* БЛОК ВОПРОСОВ-ПОДСКАЗОК */}
              <details className="group rounded-xl border border-slate-200 bg-slate-50/50">
                <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-slate-900 flex items-center justify-between gap-4 text-base">
                  <span>Вопросы-подсказки — отвечать необязательно</span>
                  <span className="transition-transform group-open:rotate-180 text-teal-600 text-lg">▼</span>
                </summary>
                <div className="border-t border-slate-200 px-5 pb-5 pt-5 bg-white rounded-b-xl">
                  <div className="text-base text-slate-700 leading-relaxed space-y-4 text-left">
                    <div>
                      <strong className="text-slate-900 block mb-1">1. Научный аппарат (базовые ориентиры):</strong>
                      <p className="m-0 pl-3">· Сформулированы ли уже тема, объект и предмет исследования?</p>
                      <p className="m-0 pl-3">· По какой конкретно специальности (шифру ВАК) планируется защита?</p>
                      <p className="m-0 pl-3">· В чём, по вашему мнению, заключается научная проблема или противоречие, которое вы решаете?</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">2. Текущее состояние работы:</strong>
                      <p className="m-0 pl-3">· На каком этапе вы находитесь (сбор материала, написаны отдельные главы, готова первая черновая редакция)?</p>
                      <p className="m-0 pl-3">· Какие материалы вы планируете направить по почте для проведения экспресс-аудита?</p>
                      <p className="m-0 pl-3">· Есть ли у вас публикации в рецензируемых журналах, патенты или свидетельства на ЭВМ?</p>
                      <p className="m-0 pl-3">· Проходило ли предварительное обсуждение на кафедре? Или до предзащиты ещё далеко?</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">3. Затруднения и цель взаимодействия:</strong>
                      <p className="m-0 pl-3">· Какие сложности вы видите (не получается с научной новизной, замечания от научного руководителя, теория не стыкуется с практикой, если что-то другое — опишите)?</p>
                      <p className="m-0 pl-3">· Какой конкретно результат вы хотите получить от нашего взаимодействия в целом и на 1-ом этапе конкретно?</p>
                    </div>
                  </div>
                </div>
              </details>

              <div className="pt-4 border-t border-slate-100 space-y-4">
                <p className="text-base font-medium text-slate-800">
                  Контактные данные (для ответа обязателен минимум один из каналов связи):
                </p>
                <Input type="text" placeholder="Ваше имя" name="Имя" required className="w-full rounded-xl text-base" />
                <Input id="contact-email" type="email" placeholder="E-mail для ответа" name="_replyto" className="w-full rounded-xl text-base" />
                <Input id="contact-telegram" type="text" placeholder="Telegram (аккаунт или номер телефона)" name="Telegram" className="w-full rounded-xl text-base" />
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-xs sm:text-sm leading-relaxed text-slate-600 space-y-2">
                <p><strong>Условия:</strong> заявка отправляется до оплаты; работа начинается только после подтверждения заявки Исполнителем и предоплаты 6 000 ₽.</p>
                <p>Срок письменного аудита — обычно 2-3 рабочих дня. Если результат не предоставлен в течение 7 рабочих дней, оплаченная сумма возвращается.</p>
              </div>

              <div className="rounded-xl border border-teal-100 bg-teal-50/30 p-4 text-xs sm:text-sm leading-relaxed text-slate-700 flex items-start gap-2">
                <Shield className="text-teal-600 shrink-0 mt-0.5" size={16} />
                <div>
                  <strong>Конфиденциальность и авторские права:</strong> Все присланные материалы используются только для рассмотрения заявки. Сведения и документы не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ.
                </div>
              </div>

              <label className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-slate-600 cursor-pointer">
                <input type="checkbox" name="Согласие на обработку обращения" required className="mt-0.5 h-4 w-4 shrink-0 rounded accent-teal-600" />
                <span>
                  Я согласен(на) на обработку указанных данных для ответа на обращение и ознакомлен(а) с {' '}
                  <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline font-medium">
                    Политикой конфиденциальности
                  </a>.
                </span>
              </label>

              <label className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-slate-600 cursor-pointer">
                <input type="checkbox" name="Ознакомление с офертой" required className="mt-0.5 h-4 w-4 shrink-0 rounded accent-teal-600" />
                <span>
                  Я ознакомлен(а) с {' '}
                  <a href="/offer.html" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline font-medium">
                    договором публичной оферты
                  </a>{' '}
                  и принимаю его условия.
                </span>
              </label>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium text-lg py-6 rounded-xl shadow-md"
                onClick={(e) => {
                  const email = (document.getElementById('contact-email') as HTMLInputElement)?.value;
                  const telegram = (document.getElementById('contact-telegram') as HTMLInputElement)?.value;
                  if (!email && !telegram) {
                    e.preventDefault();
                    alert('Пожалуйста, укажите хотя бы один способ связи для ответа (E-mail или Telegram).');
                  }
                }}
              >
                <Send className="mr-2" size={18} /> Отправить заявку на предварительное согласование
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
        <div className="container max-w-3xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} Михаил Палагин · Научный консалтинг. Все права защищены.
          </div>
          <div className="text-slate-500 font-medium">
            vned.mp@yandex.ru
          </div>
        </div>
      </footer>
    </main>
  );
}
