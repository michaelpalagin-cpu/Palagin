import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home-page" style={{ fontFamily: 'sans-serif', color: '#1a202c' }}>
            {/* БЛОК ПРИВЕТСТВИЯ */}
            <section className="hero-section" style={{ padding: '80px 20px', backgroundColor: '#e0f2fe', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#0c4a6e', marginBottom: '16px' }}>
                        Научно-методический консалтинг
                    </h1>
                    <p style={{ fontSize: '18px', color: '#0369a1', marginBottom: '24px' }}>
                        Персональное сопровождение соискателей учёных степеней кандидата и доктора технических наук от к.т.н. Михаила Палагина.
                    </p>
                    <a href="#cta-form" style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: '#00b4d8', color: '#ffffff', fontWeight: 600, borderRadius: '6px', textDecoration: 'none' }}>
                        Подать заявку на аудит
                    </a>
                </div>
            </section>

            {/* БЛОК ОБ АВТОРЕ */}
            <section className="about-section" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px', borderBottom: '2px solid #00b4d8', paddingBottom: '10px' }}>
                        О менторе
                    </h2>
                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568' }}>
                        Михаил Палагин — кандидат технических наук, specialist в области системного анализа и математического моделирования. Многолетний опыт успешного руководства научными исследованиями, подготовки соискателей к защите в ведущих диссертационных советах и экспертизы ВАК-публикаций.
                    </p>
                </div>
            </section>
            {/* БЛОК СТОИМОСТИ ОСНОВНЫХ УСЛУГ И УСЛОВИЙ ОПЛАТЫ ПО ОФЕРТЕ */}
            <section className="main-pricing-section" style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    
                    <h2 style={{ color: '#1a202c', fontSize: '28px', fontWeight: 700, marginBottom: '25px', borderBottom: '2px solid #00b4d8', paddingBottom: '10px' }}>
                        Стоимость основных услуг
                    </h2>

                    <div style={{ display: 'grid', gap: '20px', marginBottom: '35px' }}>
                        
                        {/* Экспресс-аудит диссертационного исследования */}
                        <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #00b4d8', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '15px' }}>
                                <div style={{ flex: '1 1 500px' }}>
                                    <h3 style={{ color: '#2d3748', fontSize: '20px', margin: '0 0 8px 0', fontWeight: 600 }}>
                                        Экспресс-аудит диссертационного исследования
                                    </h3>
                                    <p style={{ color: '#4a5568', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
                                        Первичная экспертная оценка логики, структуры, диссертабельности и научной новизны вашей работы. Разбор критических уязвимостей перед выходом на кафедру или в диссертационный совет.
                                    </p>
                                </div>
                                <div style={{ color: '#00b4d8', fontSize: '22px', fontWeight: 700, whiteSpace: 'nowrap', paddingTop: '2px' }}>
                                    6 000 ₽
                                </div>
                            </div>
                        </div>

                        {/* Менторское сопровождение */}
                        <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #00b4d8', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '15px' }}>
                                <div style={{ flex: '1 1 500px' }}>
                                    <h3 style={{ color: '#2d3748', fontSize: '20px', margin: '0 0 8px 0', fontWeight: 600 }}>
                                        Менторское сопровождение
                                    </h3>
                                    <p style={{ color: '#4a5568', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
                                        Системное научно-методическое ведение соискателя по техническим наукам. Включает до 4 индивидуальных онлайн-сессий в месяц, проверку материалов до 30 страниц, помощь со статьями ВАК/Scopus и разбор глав. Минимальный срок — 6 месяцев.
                                    </p>
                                </div>
                                <div style={{ color: '#00b4d8', fontSize: '22px', fontWeight: 700, whiteSpace: 'nowrap', paddingTop: '2px' }}>
                                    30 000 ₽ <span style={{ fontSize: '14px', fontWeight: 400, color: '#718096' }}>/ мес.</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Уточненный блок условий оказания услуг */}
                    <div style={{ padding: '24px', backgroundColor: '#fff5f5', border: '1px solid #fed7d7', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                        <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                            <span style={{ fontSize: '24px', lineHeight: 1 }}>⚠️</span>
                            <div>
                                <h4 style={{ color: '#9b2c2c', fontSize: '16px', fontWeight: 600, margin: '0 0 6px 0' }}>
                                    Условия оказания услуг
                                </h4>
                                <p style={{ color: '#c53030', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                                    Все экспертно-аналитические и консультационные работы выполняются на условиях 100% предоплаты после подтверждения заявки и согласования объёма работ. Порядок оплаты, прекращения сопровождения и возврата денежных средств определяется <a href="/offer" target="_blank" rel="noopener noreferrer" style={{ color: '#9b2c2c', fontWeight: 600, textDecoration: 'underline' }}>договором публичной оферты</a>.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
                      {/* СТРОГО ОДИН КОРРЕКТНЫЙ БЛОК ДОПОЛНИТЕЛЬНЫХ УСЛУГ */}
            <section className="additional-services-section" style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    
                    <h2 style={{ color: '#1a202c', fontSize: '28px', fontWeight: 700, marginBottom: '10px', borderBottom: '2px solid #00b4d8', paddingBottom: '10px' }}>
                        Дополнительные услуги
                    </h2>
                    <p style={{ color: '#4a5568', fontSize: '16px', marginBottom: '30px' }}>
                        Сопровождение соискателей на отдельных этапах подготовки и защиты диссертации
                    </p>

                    <div style={{ display: 'grid', gap: '20px' }}>
                        
                        {/* Услуга 1: Автореферат */}
                        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '4px solid #00b4d8' }}>
                            <h3 style={{ color: '#2d3748', fontSize: '20px', marginTop: 0, marginBottom: '8px', fontWeight: 600 }}>
                                Автореферат
                            </h3>
                            <p style={{ color: '#718096', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
                                Разбор структуры, усиление логики «цель — положения — выводы» и формулировок новизны.
                            </p>
                        </div>

                        {/* Услуга 2: Презентация и доклад */}
                        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '4px solid #00b4d8' }}>
                            <h3 style={{ color: '#2d3748', fontSize: '20px', marginTop: 0, marginBottom: '8px', fontWeight: 600 }}>
                                Презентация и доклад к предзащите
                            </h3>
                            <p style={{ color: '#718096', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
                                Переработка логики выступления и слайдов, расстановка акцентов, репетиция при необходимости.
                            </p>
                        </div>

                        {/* Услуга 3: Работа с отзывами */}
                        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '4px solid #00b4d8' }}>
                            <h3 style={{ color: '#2d3748', fontSize: '20px', marginTop: 0, marginBottom: '8px', fontWeight: 600 }}>
                                Работа с отзывами оппонентов
                            </h3>
                            <p style={{ color: '#718096', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
                                Разбор замечаний и подготовка аргументированных, тактичных ответов.
                            </p>
                        </div>

                    </div>

                    {/* Блок стоимости доп услуг */}
                    <div style={{ marginTop: '35px', padding: '20px', backgroundColor: '#e0f2fe', borderRadius: '8px', textAlign: 'center' }}>
                        <p style={{ color: '#0369a1', fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0' }}>
                            💰 Стоимость рассчитывается индивидуально
                        </p>
                        <p style={{ color: '#0c4a6e', fontSize: '14px', margin: 0 }}>
                            Укажите задачу при подаче заявки в форме ниже.
                        </p>
                    </div>

                </div>
            </section>

            {/* БЛОК ДЕЙСТВИЯ И СОГЛАСИЯ (ЯНДЕКС ФОРМА) */}
            <section id="cta-form" className="form-section" style={{ padding: '60px 20px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '20px', borderBottom: '2px solid #00b4d8', paddingBottom: '10px' }}>
                        Подать заявку
                    </h2>
                    <div style={{ width: '100%', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                        <iframe 
                            src="https://forms.yandex.ru/u/6ab40911d046882036649f4e" 
                            width="100%" 
                            height="700" 
                            frameBorder="0" 
                            className="yandex-form-iframe"
                            title="Yandex Form"
                            style={{ border: 'none', background: 'transparent' }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

