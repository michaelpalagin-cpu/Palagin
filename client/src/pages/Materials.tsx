import { ArrowLeft, ArrowRight } from "lucide-react";

const materialOptions = [
  {
    title: "Автореферат",
    text: "Если нужно понять, можно ли уже рассылать автореферат, насколько убедительно он представляет работу и где остаются слабые места до защиты. Можно прислать текущую версию автореферата.",
  },
  {
    title: "Отдельные блоки диссертации",
    text: "Если работа ещё не собрана целиком, но уже есть её ядро, можно прислать один или несколько блоков: актуальность, цель и задачи, научную новизну, положения, выносимые на защиту, личный вклад или выводы. Такой пакет удобен для быстрой проверки логики исследования.",
  },
  {
    title: "Введение",
    text: "Если нужно оценить, как выстроена логика работы в начале текста, достаточно прислать введение или его черновик.",
  },
  {
    title: "Полный текст диссертации",
    text: "Если требуется разбор работы в целом, можно прислать актуальную редакцию диссертации. Это позволяет оценить взаимосвязь глав, научное ядро и вопросы, которые могут возникнуть при подготовке к предзащите или защите.",
  },
  {
    title: "Автореферат вместе с диссертацией",
    text: "Это наиболее полный пакет материалов. Он нужен, если важно проверить не только формулировки автореферата, но и соответствие его содержания диссертации: не завышена ли новизна, совпадают ли положения и соответствует ли заявленный личный вклад тексту работы.",
  },
  {
    title: "Замечания предзащиты или отзывы",
    text: "Если уже есть внешняя критика и непонятно, что с ней делать, можно прислать список замечаний, отзывы, выписку или протокол, а также фрагменты текста, которых касаются замечания.",
  },
  {
    title: "Доклад или презентация к защите",
    text: "Если текст диссертации уже подготовлен, но нужно проверить, как работа будет звучать устно, можно прислать текст доклада и/или презентацию. При наличии полезно приложить также формулировки научной новизны и положений на защиту.",
  },
  {
    title: "Материалы ранней стадии",
    text: "Если диссертации ещё нет, но есть тема, план или первые результаты, можно описать тему, уже выполненную работу, предполагаемый результат и текущую проблему. На этой стадии важна не правка текста, а диагностика направления исследования.",
  },
];

export default function Materials() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white shadow-sm">
        <div className="container flex items-center justify-between gap-4 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent">
            <ArrowLeft size={18} /> На главную
          </a>
        </div>
      </header>

      <main>
        <section className="bg-secondary/30 py-14 sm:py-20">
          <div className="container max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">Первый шаг</p>
            <h1 className="text-3xl font-bold leading-tight text-primary sm:text-5xl">С чем можно прийти</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Не обязательно присылать полный комплект документов. Для первого разбора достаточно материалов, по которым сейчас возник вопрос.
            </p>
          </div>
        </section>

        <section className="bg-background py-12 sm:py-16">
          <div className="container max-w-4xl">
            <div className="grid gap-5 md:grid-cols-2">
              {materialOptions.map((option, index) => (
                <article key={option.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <p className="mb-3 text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="text-xl font-bold text-primary">{option.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">{option.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 sm:py-16">
          <div className="container max-w-4xl">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">Какой вариант выбрать?</h2>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                <p>Если нужно быстро понять состояние работы — начните с автореферата.</p>
                <p>Если важно проверить ядро исследования — пришлите научную новизну, положения, цель и личный вклад.</p>
                <p>Если нужна серьёзная диагностика — лучше направить диссертацию или автореферат вместе с диссертацией.</p>
                <p>Если уже были замечания — приложите замечания и спорные фрагменты текста.</p>
                <p>Если работа только начинается — достаточно темы, замысла и текущего задела.</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-primary sm:text-2xl">Важно</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                Не нужно ждать готовности идеального комплекта. Чем раньше виден реальный материал, тем точнее можно определить, что уже держится, где есть слабое место и что нужно исправить в первую очередь.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                Формат работы — разовый экспресс-аудит или долгосрочное сопровождение — выбирается после того, как понятны ваш запрос и объём материалов.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a href="/#contact-form" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-700">
                Отправить материалы на рассмотрение <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-8 text-center text-white">
        <div className="container">
          <p className="text-sm opacity-80">© 2024 Палагин М. — Научный консалтинг. Все права защищены.</p>
          <p className="mt-2 text-xs opacity-60">Работаем в рамках правового поля Российской Федерации</p>
        </div>
      </footer>
    </div>
  );
}

