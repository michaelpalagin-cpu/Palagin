import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes"; // Оставляем базовый системный импорт
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Логирование всех системных запросов бэкенда
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let resBody: string | undefined = undefined;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      log(logLine);
    }
  });
  next();
});

// НАШ НОВЫЙ БЕЗОТКАЗНЫЙ ОБРАБОТЧИК ДЛЯ САЙТА
app.post("/api/send-request", async (req: Request, res: Response) => {
  try {
    const { name, email, telegram, description } = req.body;

    // Формируем красивый структурированный текст для отправки
    const messageText = `🔔 Новая заявка на научный консалтинг!\n\n👤 Имя: ${name || 'Не указано'}\n📧 E-mail: ${email || 'Не указан'}\n💬 Telegram: ${telegram || 'Не указан'}\n\n📝 Описание ситуации:\n${description || 'Не заполнено'}`;

    const botToken = "8919004705:AAGM6YO6vvmZRcN93YM3agjlshlwF-35G48";
    const chatId = "761184918";
    // Запускаем фоновую отправку в Telegram напрямую через API
    await fetch(`https://telegram.org{botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: messageText })
    });

    // Возвращаем успешный ответ фронтенду
    return res.status(200).json({ success: true, message: "Заявка успешно зарегистрирована" });
  } catch (error) {
    console.error("Ошибка обработки заявки на сервере:", error);
    return res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

// Системный блок инициализации и старта сервера
(async () => {
  const server = createServer(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = process.env.PORT || 5000;
  server.listen({ port, host: "0.0.0.0" }, () => {
    log(`started server on port ${port}`);
  });
})();
