import React from 'react';
import { Send, CheckCircle, Shield, Award, FileText, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
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

            {/* Правая колонка: Адаптивная и облегченная фотография */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group max-w-[240px] w-full aspect-[3/4] bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <img 
                  src="/photo.jpg" 
                  alt="Михаил Палагин" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="240"
                  height="320"
                  style={{ imageRendering: 'auto' }}
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
      {/* Форматы работы и стоимость — шрифты увеличены */}
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
      {/* ВАШ УТВЕРЖДЕННЫЙ БЛОК: Дополнительные услуги */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Дополнительные услуги</h2>
          <p className="text-center text-slate-600 mb-12 text-base font-medium">сопровождение на отдельных этапах.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-5 border border-slate-200 bg-white rounded-xl shadow-sm space-y-2">
              <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">🎯 Автореферат</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Помощь в выстраивании структуры, формулировке научной новизны, положений и выводов. Автореферат — это лицо вашей работы, именно по нему большинство диссовета будет оценивать масштаб вашего исследования.</p>
            </Card>
            <Card className="p-5 border border-slate-200 bg-white rounded-xl shadow-sm space-y-2">
              <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">📊 Подготовка презентации и доклада к предзащите</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Разработка логики слайдов, текста и основных акцентов выступления. Помогу выстроить доклад так, чтобы за 15 регламентных минут донести до членов совета главную ценность вашей диссертации и снять большинство вопросов ещё до их появления.</p>
            </Card>
            <Card className="p-5 border border-slate-200 bg-white rounded-xl shadow-sm space-y-2">
              <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">🎤 Репетиция предзащиты</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Проведение репетиции выступления (онлайн). Полноценный разбор защиты «в боевых условиях» с моделированием каверзных вопросов от совета и психологической подготовкой.</p>
            </Card>
            <Card className="p-5 border border-slate-200 bg-white rounded-xl shadow-sm space-y-2">
              <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">✍️ Помощь с ответами на отзывы</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Подготовка сильных, аргументированных и тактичных ответов на замечания официальных оппонентов и ведущей организации. Помогу грамотно защитить свою позицию и снять критические замечания без потери лица.</p>
            </Card>
          </div>
          <div className="mt-8 p-5 bg-teal-50/40 border border-teal-100 rounded-xl text-center text-base font-medium text-slate-800 shadow-sm">
            💡 Стоимость дополнительных услуг рассчитывается индивидуально в зависимости от объёма работы и текущего состояния материалов. Чтобы получить условия под вашу задачу, укажите её в описании ситуации в Яндекс.Форме ниже.
          </div>
        </div>
      </section>
      {/* Форма заявки и Подвал */}
      <section id="contact-form" className="py-16 sm:py-24 bg-slate-50">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Заявка на предварительное согласование</h2>
          <p className="text-center text-slate-600 mb-8 text-base">
            Чтобы исключить сетевые сбои, приём анкет переведен на официальный защищенный сервис Яндекс Формы.
          </p>
          
          <Card className="p-6 sm:p-8 bg-white border border-border rounded-2xl shadow-sm">
            <div className="space-y-6 text-center py-2">
              <div className="p-5 bg-amber-50/50 border border-amber-100 rounded-xl text-base text-slate-700 text-left shadow-sm">
                📌 <strong>Внимание для соискателей:</strong> Для обеспечения 100% конфиденциальности, защиты ваших авторских прав и автоматической проверки контактов от опечаток, подача заявки осуществляется через платформу Яндекса.
              </div>
              
              <a 
                href="https://yandex.com"
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full"
              >
                <Button 
                  type="button" 
                  size="lg" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base sm:text-lg py-6 rounded-xl shadow-md flex justify-center items-center gap-2 h-auto whitespace-normal"
                >
                  <Send className="shrink-0" size={18} /> 
                  <span>Заполнить защищенную заявку на предварительное согласование в Яндекс.Формах</span>
                </Button>
              </a>
              
              <p className="text-xs text-muted-foreground">
                Нажатием на кнопку вы подтверждаете согласие с Политикой конфиденциальности и договором публичной оферты.
              </p>
            </div>
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
