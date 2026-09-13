import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Mail, MessageCircle } from "lucide-react";

const publications = [
  {
    image: "/images/one.jpg",
    date: "Май 2026",
    title: "ИИ-реализм. Большой перелом и стратегия выживания",
    href: "https://ria-stk.ru/ds/adetail.php?ID=251087",
  },
  {
    image: "/images/two.jpg",
    date: "Май 2025",
    title: "Сценарий для цифрового рубля",
    href: "https://ria-stk.ru/ds/adetail.php?ID=241346",
  },
  {
    image: "/images/three.jpg",
    date: "Июль 2025",
    title: "Автомобиль: актив, пассив или инвестиционная ловушка?",
    href: "https://ria-stk.ru/ds/adetail.php?ID=243016",
  },
  {
    image: "/images/four.jpg",
    date: "Март 2025",
    title: "Автобизнес 2025 трансформируется. Китай, США и остальные",
    href: "https://ria-stk.ru/ds/adetail.php?ID=239347",
  },
  {
    image: "/images/five.jpg",
    date: "Март 2026",
    title: "Профессии будущего: когда работа — это зов сердца, а не принуждение",
    href: "https://ria-stk.ru/ds/adetail.php?ID=249516",
  },
  {
    image: "/images/six.jpg",
    date: "Декабрь 2025",
    title: "Автоэволюция: от гонок во дворе до космических капсул",
    href: "https://ria-stk.ru/ds/adetail.php?ID=246819",
  },
  {
    image: "/images/seven.jpeg",
    date: "Июль 2026",
    title: "Когда сменили счётчик, или как энергоаудит возвращает бизнесу контроль над расходами",
    href: "https://ria-stk.ru/ds/adetail.php?ID=253574",
  },
  {
    image: "/images/eight.jpg",
    date: "Август 2026",
    title: "Вайб-кодинг и метрология намерений: новая парадигма разработки",
    href: null,
  },
];

export default function Publications() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white shadow-sm">
        <div className="container flex items-center justify-between gap-4 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent">
            <ArrowLeft size={18} /> На главную
          </a>
          <div className="flex items-center gap-3">
            <a href="https://t.me/+79295551925" target="_blank" rel="noopener noreferrer" className="text-accent transition-colors hover:text-accent/80" aria-label="Telegram">
              <MessageCircle size={20} />
            </a>
            <a href="mailto:vned.mp@yandex.ru" className="text-accent transition-colors hover:text-accent/80" aria-label="Электронная почта">
              <Mail size={19} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-secondary/30 py-14 sm:py-20">
          <div className="container max-w-5xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">Михаил Палагин · к.т.н.</p>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight text-primary sm:text-5xl">Некоторые публикации последних лет</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/70 sm:text-lg">Подборка авторских материалов Михаила Палагина, опубликованных в журнале Business Excellence. Список не является полным перечнем публикаций.</p>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-20">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publications.map((publication) => (
                <Card key={publication.title} className="overflow-hidden border-border bg-white transition-shadow hover:shadow-md">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img src={publication.image} alt={`Публикация: ${publication.title}`} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-xs font-semibold text-accent">Business Excellence · {publication.date}</p>
                    <h2 className="mb-2 text-lg font-bold text-primary">{publication.title}</h2>
                    <p className="mb-4 text-sm text-foreground/60">Михаил Палагин</p>
                    {publication.href ? (
                      <a href={publication.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80">
                        Читать на сайте журнала <ExternalLink size={15} />
                      </a>
                    ) : (
                      <p className="text-sm text-foreground/60">Ссылка на публикацию временно недоступна.</p>
                    )}
                  </div>
                </Card>
              ))}
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
