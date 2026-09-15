import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Award, Banknote, BookOpen, CheckCircle2, Clock3, FileText, Mail, MessageCircle, Send, ShieldCheck, Target, Users } from "lucide-react";

const scrollToForm = () => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });

const services = [
  {
    icon: FileText,
    title: "Структура и научная новизна диссертации",
    text: "Аудит структуры диссертации, консультационная помощь в формулировании научной новизны, положений, выносимых на защиту, и практической значимости результатов исследования.",
  },
  {
    icon: Target,
    title: "Работа с замечаниями",
    text: "Консультационный разбор замечаний научного руководителя и диссертационного совета, а также разработка стратегии их последовательного устранения.",
  },
  {
    icon: BookOpen,
    title: "Научные статьи",
    text: "Экспертный консалтинг при подготовке научных статей к публикации: логика исследования, структура текста, формулировка результатов и соответствие требованиям выбранного издания.",
  },
  {
    icon: Award,
    title: "Автореферат диссертации",
    text: "Консультационное сопровождение при составлении автореферата и аудит логики изложения основных результатов диссертационного исследования.",
  },
];

const faq = [
  ["Нужно ли отвечать на все вопросы анкеты?", "Нет. Основное поле заявки предназначено для свободного описания ситуации. Подробные вопросы — только подсказки и заполняются по желанию."],
  ["Можно ли обратиться, если тема ещё не утверждена?", "Да. Можно описать рабочую тему или несколько вариантов. На этапе предварительного согласования мы определим, подходит ли задача для консультационной работы."],
  ["Проводится ли аудит до оплаты?", "Нет. Заявку можно отправить до оплаты, но содержательный анализ начинается только после подтверждения оплаты 6 000 ₽ и получения необходимых материалов."],
  ["Что входит в экспресс-аудит?", "Основным результатом является письменный аудит концепции и структуры исследования с приоритетным планом дальнейших действий. Онлайн-сессия после получения аудита может быть согласована отдельно."],
  ["Можно ли продолжить работу после экспресс-аудита?", "Да. После аудита можно отдельно обсудить онлайн-сессию и, при взаимном согласии, менторское сопровождение сроком не менее 6 месяцев."],
  ["Как соблюдается конфиденциальность?", "Присланные материалы используются для рассмотрения заявки и оказания согласованных услуг. Авторские права сохраняются за правообладателем, а данные не передаются третьим лицам, кроме случаев, предусмотренных законом."],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-3 sm:py-4 flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-sm sm:text-xl leading-tight font-bold text-primary truncate">Михаил Палагин</p>
            <p className="hidden sm:block text-xs text-foreground/60">Научный консалтинг и менторство</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a href="https://t.me/+79295551925" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors" aria-label="Telegram">
              <MessageCircle size={20} /><span className="hidden sm:inline">Telegram</span>
            </a>
            <a href="mailto:vned.mp@yandex.ru" className="hidden lg:flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
              <Mail size={18} /><span>vned.mp@yandex.ru</span>
            </a>
            <Button onClick={scrollToForm} className="bg-accent hover:bg-accent/90 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm">Подать заявку</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312234162/Fg6Jj7JDTHPoNRMhLLHi4o/hero-background-EqEeh4Cu6xKXFXKXb9GGSd.webp')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          <div className="relative container py-16 sm:py-20 md:py-32">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm sm:text-base font-semibold uppercase tracking-[0.14em] text-accent">Михаил Палагин · к.т.н.</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">Научный консалтинг и менторство для аспирантов и соискателей учёной степени</h1>
              <p className="max-w-3xl text-lg sm:text-xl text-foreground/80 leading-relaxed">Экспертное сопровождение по техническим специальностям — от обоснования научной новизны до генеральной репетиции предзащиты.</p>
              <p className="mt-5 max-w-3xl text-base sm:text-lg text-foreground/75 leading-relaxed">Помогаю выстроить исследование, структурировать собственные идеи и превратить разрозненные материалы в понятный план движения к защите.</p>
              <p className="mt-5 max-w-3xl text-base sm:text-lg text-foreground/80 leading-relaxed"><strong>Важно:</strong> диссертация и другие научные тексты за автора не пишутся — вы остаётесь автором исследования.</p>
              <Button onClick={scrollToForm} size="lg" className="mt-8 w-full sm:w-auto bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">Отправить заявку на предварительное согласование</Button>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-secondary/30">
          <div className="container max-w-5xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-10">Мои принципы работы</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 sm:p-8 bg-white border-border"><ShieldCheck className="text-accent mb-4" size={30} /><h3 className="text-xl font-bold text-primary mb-3">Прозрачность и легитимность</h3><p className="text-foreground/75 leading-relaxed">Я не пишу диссертации «под ключ» и не продаю готовые диссертационные тексты. Моя задача — помочь вам выстроить методологию исследования, структурировать собственные идеи и разработки, обосновать научную новизну и оценить готовность к предзащите.</p></Card>
              <Card className="p-6 sm:p-8 bg-white border-border"><Target className="text-accent mb-4" size={30} /><h3 className="text-xl font-bold text-primary mb-3">Строгая специализация</h3><p className="text-foreground/75 leading-relaxed">Я консультирую только по техническим наукам. Если тема вашего исследования выходит за пределы моей профессиональной компетенции, я честно сообщу об этом после первичного обращения и не буду брать проект в работу.</p></Card>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-background">
          <div className="container"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Консультационные услуги</h2><p className="text-base sm:text-xl text-foreground/70 max-w-3xl mx-auto">Помощь в работе над диссертацией, авторефератом и научными статьями — без написания диссертации за автора.</p></div>
            <div className="grid gap-6 md:grid-cols-2">{services.map(({ icon: Icon, title, text }) => <Card key={title} className="p-6 sm:p-8 bg-white border-border hover:shadow-md transition-shadow"><Icon className="text-accent mb-4" size={30} /><h3 className="text-xl font-bold text-primary mb-3">{title}</h3><p className="text-foreground/75 leading-relaxed">{text}</p></Card>)}</div>
            <p className="mt-8 text-center text-sm text-foreground/60">Формат работы определяется после первичного обращения и зависит от этапа, на котором находится ваше исследование.</p>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-secondary/30">
          <div className="container"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Обо мне</h2><p className="text-base sm:text-xl text-foreground/75 max-w-4xl mx-auto leading-relaxed">Я кандидат технических наук и практикующий научный ментор. Мой академический и профессиональный путь сочетает фундаментальную подготовку с многолетним управленческим опытом в реальном секторе экономики.</p></div>
            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              <Card className="p-6 sm:p-8 bg-white border-border"><h3 className="text-xl font-bold text-primary mb-4">Мой бэкграунд</h3><div className="space-y-3 text-foreground/75 leading-relaxed"><p><strong className="text-foreground">Учёная степень:</strong> кандидат технических наук, к.т.н. с 1992 года; более 30 лет в экспертном сообществе.</p><p><strong className="text-foreground">Бизнес-компетенции:</strong> управленческий опыт в бизнесе, включая управление проектами, командами и внедрением новых продуктов и решений.</p><p><strong className="text-foreground">Специализация:</strong> экспертиза и консалтинг по техническим наукам.</p><p><strong className="text-foreground">Прозрачность:</strong> работаю официально как самозанятый и предоставляю чеки на услуги.</p></div></Card>
              <Card className="p-6 sm:p-8 bg-white border-border"><h3 className="text-xl font-bold text-primary mb-4">В чём моя ценность для соискателя</h3><div className="space-y-4 text-foreground/75 leading-relaxed"><p><strong className="text-foreground">Усиливаю практическую значимость:</strong> помогаю чётко сформулировать и защитить этот блок работы.</p><p><strong className="text-foreground">Перевожу с академического на понятный:</strong> помогаю выкристаллизовать положения, выносимые на защиту, и научную новизну.</p><p><strong className="text-foreground">Структурирую процесс:</strong> управленческий опыт помогает выстроить план и соблюдать дедлайны.</p><p><strong className="text-foreground">Снимаю психологический барьер:</strong> помогаю подготовиться к сложным вопросам на генеральной репетиции предзащиты.</p></div></Card>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-background"><div className="container max-w-5xl"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Схема сотрудничества: от заявки до стратегии</h2><p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">Я ценю своё и ваше время, поэтому не провожу бесплатных отвлечённых консультаций. Наше взаимодействие строится по чёткому и прозрачному алгоритму.</p></div>
          <div className="grid gap-6 md:grid-cols-2">{[
            ["1", "Заявка и предварительное согласование — бесплатно", "Вы описываете тему исследования, текущий этап работы, основные затруднения и желаемый результат. Я проверяю соответствие темы своей компетенции и подходящий формат работы. На этом этапе содержательный аудит и экспертные выводы не предоставляются."],
            ["2", "Оплата и письменный экспресс-аудит", "После подтверждения заявки вы оплачиваете экспресс-аудит — 6 000 ₽ — через СБП. После получения оплаты я анализирую предоставленные материалы и готовлю письменное заключение. Предоставляется официальный чек самозанятого."],
            ["3", "Обсуждение результатов — по желанию", "Письменного аудита достаточно для получения экспертной оценки и плана действий. Если появятся вопросы, можно отдельно согласовать онлайн-сессию 15–30 минут для разбора выводов и обсуждения дальнейшего формата работы."],
            ["4", "Менторское сопровождение — по желанию", "При взаимном согласии обсуждаем индивидуальную программу сопровождения. Она не входит автоматически в стоимость экспресс-аудита; минимальный срок менторского сопровождения — 6 месяцев."],
          ].map(([step, title, text]) => <Card key={step} className="p-6 sm:p-8 bg-white border-border"><div className="flex items-start gap-5"><div className="w-11 h-11 bg-accent text-white rounded-full flex items-center justify-center shrink-0 font-bold text-lg">{step}</div><div><h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{title}</h3><p className="text-foreground/70 leading-relaxed">{text}</p></div></div></Card>)}</div>
        </div></section>

        <section className="py-14 sm:py-20 bg-secondary/30"><div className="container max-w-5xl"><div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Экспресс-аудит диссертационного исследования</h2><p className="text-lg text-foreground/75">Независимый экспертный взгляд на текущее состояние вашей научной работы.</p></div><Card className="p-6 sm:p-10 bg-white border-border"><p className="text-foreground/75 leading-relaxed mb-6">Экспресс-аудит помогает понять, насколько согласованы тема, структура, научная новизна и предполагаемые результаты исследования, а также какие вопросы требуют первоочередной доработки.</p><h3 className="text-2xl font-bold text-primary mb-5">В результате вы получаете</h3><div className="grid gap-5 sm:grid-cols-2"><div><h4 className="font-bold text-primary">Письменный аудит концепции</h4><p className="mt-1 text-foreground/70">Оценку актуальности темы, формулировок научной новизны и положений, выносимых на защиту, если они уже сформулированы.</p></div><div><h4 className="font-bold text-primary">Анализ структуры исследования</h4><p className="mt-1 text-foreground/70">Проверку логики построения глав и их соответствия паспорту выбранной технической специальности.</p></div><div><h4 className="font-bold text-primary">Приоритетный план действий</h4><p className="mt-1 text-foreground/70">Перечень основных вопросов и направлений, на которых следует сосредоточиться в первую очередь.</p></div><div><h4 className="font-bold text-primary">Онлайн-сессия по желанию</h4><p className="mt-1 text-foreground/70">После получения письменного аудита можно отдельно согласовать онлайн-сессию 15–30 минут для разбора выводов и обсуждения дальнейшего формата работы.</p></div></div><div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5"><p className="font-bold text-primary">Стоимость письменного экспресс-аудита — 6 000 ₽.</p><p className="mt-1 text-foreground/70">Оплата производится через СБП только после предварительного согласования заявки. Предоставляется официальный чек самозанятого.</p></div></Card></div></section>

        <section className="py-14 sm:py-20 bg-background"><div className="container max-w-5xl"><div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Менторское сопровождение</h2><p className="text-lg text-foreground/75">Формат для долгосрочной совместной работы. Доступен после проведения экспресс-аудита и отдельного согласования.</p></div><Card className="p-6 sm:p-10 bg-white border-border"><p className="text-foreground/75 leading-relaxed mb-6">Ежемесячное сопровождение рассчитано на ограниченный и заранее согласованный объём взаимодействия и предназначено для соискателей, которым нужна регулярная экспертная поддержка при самостоятельной подготовке исследования.</p><div className="space-y-5"><div><h3 className="font-bold text-primary">До 4 индивидуальных онлайн-сессий в месяц</h3><p className="text-foreground/70">15–30 минут каждая; суммарно не более 2 часов в месяц.</p></div><div><h3 className="font-bold text-primary">Экспертная проверка материалов</h3><p className="text-foreground/70">До 25–30 страниц в месяц: заранее согласованные фрагменты диссертации, введения, автореферата или научных статей.</p></div><div><h3 className="font-bold text-primary">Публикационный консалтинг</h3><p className="text-foreground/70">Консультационная помощь в структурировании и подготовке статей; написание за автора и гарантия публикации не входят.</p></div><div><h3 className="font-bold text-primary">Поддержка в мессенджере</h3><p className="text-foreground/70">Ответы по рабочим дням в формате «вопрос–ответ», в течение одного рабочего дня. Мессенджер не является круглосуточным каналом связи.</p></div></div><div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5"><p className="font-bold text-primary">Стоимость — 30 000 ₽ в месяц.</p><p className="mt-1 text-foreground/70">Минимальный срок сопровождения — 6 месяцев. Неиспользованные сессии и непереданный в согласованный срок объём материалов не переносятся, если иное заранее не согласовано.</p></div><p className="mt-6 text-sm text-foreground/60">Все тексты и научные решения готовятся соискателем самостоятельно. Сопровождение не включает написание диссертации или статей за автора и не гарантирует публикацию или успешную защиту.</p></Card></div></section>

        <section className="py-14 sm:py-20 bg-background"><div className="container max-w-5xl"><div className="text-center"><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Публикации</h2><p className="mx-auto max-w-3xl text-lg text-foreground/70">Некоторые публикации последних лет — авторские материалы Михаила Палагина в журнале Business Excellence.</p><a href="/publications" className="mt-7 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent/90">Посмотреть публикации</a></div></div></section>\n\n        <section className="py-14 sm:py-20 bg-secondary/30"><div className="container max-w-4xl"><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-10">Частые вопросы</h2><div className="space-y-3">{faq.map(([question, answer]) => <details key={question} className="group rounded-xl border border-border bg-white px-5 sm:px-6"><summary className="cursor-pointer list-none py-5 font-semibold text-primary"><span className="flex items-center justify-between gap-4"><span>{question}</span><span className="text-accent transition-transform group-open:rotate-180">⌄</span></span></summary><p className="border-t border-border pb-5 pt-4 leading-relaxed text-foreground/70">{answer}</p></details>)}</div></div></section>
<label className="flex items-start gap-3 text-sm leading-relaxed text-foreground/70">
  <input 
    type="checkbox" 
    name="Согласие на обработку обращения" 
    required 
    className="mt-1 h-4 w-4 shrink-0 accent-accent" 
  />
  <span>
    Я согласен(на) на обработку указанных данных для ответа на обращение и ознакомлен(а) с{' '}
    <a 
      href="/privacy.html" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-accent underline underline-offset-2"
    >
      Политикой конфиденциальности
    </a>.
  </span>
</label>

<label className="flex items-start gap-3 text-sm leading-relaxed text-foreground/70">
  <input 
    type="checkbox" 
    name="Ознакомление с офертой" 
    required 
    className="mt-1 h-4 w-4 shrink-0 accent-accent" 
  />
  <span>
    Я ознакомлен(а) с{' '}
    <a 
      href="/offer.html" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-accent underline underline-offset-2"
    >
      договором публичной оферты
    </a>{' '}
    и принимаю его условия.
  </span>
</label>

    
            </main>

      <footer className="border-t border-border bg-white"><div className="container py-8 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-foreground/60"><p>© Михаил Палагин · Научный консалтинг</p><div className="flex gap-4"><a href="/oferta.html" className="text-accent hover:underline">Договор публичной оферты</a><a href="mailto:vned.mp@yandex.ru" className="text-accent hover:underline">vned.mp@yandex.ru</a></div></div></footer>
    </div>
  );
}
