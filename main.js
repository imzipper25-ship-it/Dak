// DAK Construction Landing Page JavaScript & i18n Translation Engine

const translations = {
    pt: {
        nav_home: "Início",
        nav_benefits: "Benefícios",
        nav_how: "Como Funciona",
        nav_services: "Serviços",
        cta_quote: "Pedir Orçamento",
        hero_tag: "✦ DAK CONSTRUCTION PORTUGAL",
        hero_title: "CONSTRUÍMOS COM TRANSPARÊNCIA",
        hero_subtitle: "A sua obra do zero ao acabamento. Gestão completa, sem dor de cabeça e com a qualidade que você merece.",
        hero_cta: "Solicitar Orçamento Grátis",
        hero_secondary: "Saber mais sobre o modelo à jorna",
        card_transparent_title: "100% Transparente",
        card_transparent_sub: "Preços reais & sem custos ocultos",
        card_team_title: "Equipa Especializada",
        card_team_sub: "DAK Construction Specialists",
        beneficios_badge: "✦ PORQUÊ NÓS",
        beneficios_headline: "A sua obra pode custar menos do que imagina. Acreditamos que a transparência é a base de qualquer projeto de sucesso.",
        beneficios_desc: "Não inflacionamos orçamentos com custos ocultos. O nosso modelo de trabalho é simples: trabalhamos por turnos (à jorna), otimizamos o tempo da equipa e garantimos que paga apenas pelo trabalho real executado.",
        beneficios_btn: "Falar com a equipa",
        metric1_tag: "Gestão Real DAK",
        metric1_title: "Orçamento Justo",
        metric1_text: "Sem margens desproporcionais. Relatórios claros de materiais e horas de trabalho.",
        metric2_badge: "Garantia DAK",
        metric2_title: "0 Surpresas",
        metric2_text: "Paga o justo pelo trabalho executado. Cronograma rigoroso cumprido à risca.",
        metric2_stat1_val: "+120",
        metric2_stat1_lbl: "Obras Concluídas",
        metric2_stat2_val: "100%",
        metric2_stat2_lbl: "Cumprimento de Prazos",
        servicos_badge: "✦ A NOSSA EXPERIÊNCIA",
        servicos_title: "Executamos todos os tipos de trabalhos na construção civil. Da fundação ao último detalhe de interior.",
        servicos_card1_title: "Construção de Raiz",
        servicos_card1_text: "Projetos residenciais e comerciais do terreno até à chave na mão com acompanhamento técnico contínuo.",
        servicos_card2_title: "Remodelações",
        servicos_card2_text: "Renovação integral de moradias, apartamentos e espaços comerciais com máxima precisão nos acabamentos.",
        como_badge: "✦ COMO FUNCIONA",
        como_title: "O nosso método em 3 passos transparentes",
        como_intro: "Entregamos um processo completo, desde o planeamento até à entrega das chaves.",
        step1_title: "CONSULTA INICIAL",
        step1_desc: "Analisamos as suas necessidades e o local para entender a dimensão do projeto.",
        step2_title: "ORÇAMENTO TRANSPARENTE",
        step2_desc: "Apresentamos os custos reais dos materiais e da mão de obra (por turnos/à jorna).",
        step3_title: "EXECUÇÃO E ENTREGA",
        step3_desc: "Construímos com rigor técnico e entregamos a obra pronta para uso.",
        footer_cta_title: "Pronto para começar a sua obra?",
        footer_cta_sub: "Peça a sua avaliação gratuita hoje e receba uma estimativa sem qualquer compromisso.",
        footer_cta_btn: "Pedir Orçamento Grátis",
        footer_brand_desc: "DAK Construction — Construção civil e remodelações de alta precisão em Portugal. Transparência técnica, rigor e compromisso com o cliente.",
        footer_nav_title: "Navegação",
        footer_contacts_title: "Contactos Directos",
        footer_location_title: "Localização",
        footer_location_text: "Lisboa & Porto<br>Portugal",
        footer_copyright: "© 2026 DAK Construction. Todos os direitos reservados.",
        modal_badge: "✦ PEDIDO DE ORÇAMENTO DAK",
        modal_title: "Vamos falar sobre o seu projeto",
        modal_sub: "Preencha os dados e escolha como prefere enviar a sua mensagem.",
        modal_label_name: "Nome completo",
        modal_placeholder_name: "Ex: João Silva",
        modal_label_phone: "Telemóvel",
        modal_label_email: "E-mail",
        modal_label_service: "Tipo de Obra",
        modal_opt_select: "Selecione uma opção...",
        modal_opt_raiz: "Construção de Raiz (Moradia / Edifício)",
        modal_opt_remodelacao: "Remodelação Integral",
        modal_opt_parcial: "Remodelação Parcial / Acabamentos",
        modal_opt_comercial: "Espaço Comercial",
        modal_label_notes: "Descrição breve do projeto (opcional)",
        modal_placeholder_notes: "Local da obra, área aproximada em m², prazos...",
        modal_btn_whatsapp: "Enviar via WhatsApp",
        modal_btn_email: "Enviar por E-mail",
        modal_call_text: "Ou ligue diretamente:",
        modal_success_title: "Obrigado pelo seu contacto!",
        modal_success_desc: "A sua mensagem foi enviada com sucesso. Entraremos em contacto muito em breve!",
        modal_success_close: "Fechar"
    },
    en: {
        nav_home: "Home",
        nav_benefits: "Benefits",
        nav_how: "How it Works",
        nav_services: "Services",
        cta_quote: "Get a Quote",
        hero_tag: "✦ DAK CONSTRUCTION PORTUGAL",
        hero_title: "WE BUILD WITH TRANSPARENCY",
        hero_subtitle: "Your project from ground up to final finish. Full management, zero hassle, and top quality guaranteed.",
        hero_cta: "Request Free Estimate",
        hero_secondary: "Learn more about our day-rate model",
        card_transparent_title: "100% Transparent",
        card_transparent_sub: "Real prices & zero hidden fees",
        card_team_title: "Specialized Team",
        card_team_sub: "DAK Construction Specialists",
        beneficios_badge: "✦ WHY CHOOSE US",
        beneficios_headline: "Your construction can cost less than you think. We believe transparency is the foundation of success.",
        beneficios_desc: "We never inflate budgets with hidden costs. Our model is simple: day-rate shifts, optimized team schedules, ensuring you only pay for actual work executed.",
        beneficios_btn: "Talk to Our Team",
        metric1_tag: "DAK Honest Management",
        metric1_title: "Fair Budget",
        metric1_text: "No inflated markups. Clear reporting on materials and labor hours.",
        metric2_badge: "DAK Guarantee",
        metric2_title: "0 Surprises",
        metric2_text: "Pay fairly for actual work delivered. Strict schedules met every time.",
        metric2_stat1_val: "+120",
        metric2_stat1_lbl: "Projects Completed",
        metric2_stat2_val: "100%",
        metric2_stat2_lbl: "On-Time Delivery",
        servicos_badge: "✦ OUR EXPERTISE",
        servicos_title: "We execute all civil construction services. From structural foundation to final interior finish.",
        servicos_card1_title: "New Construction",
        servicos_card1_text: "Residential and commercial projects from plot to turnkey key delivery with continuous engineering supervision.",
        servicos_card2_title: "Renovations",
        servicos_card2_text: "Full renovation of villas, apartments, and commercial spaces with maximum finishing precision.",
        como_badge: "✦ HOW IT WORKS",
        como_title: "Our process in 3 transparent steps",
        como_intro: "We deliver a seamless end-to-end process from planning to key handover.",
        step1_title: "INITIAL CONSULTATION",
        step1_desc: "We evaluate your needs and inspect the site to understand the exact scope of the project.",
        step2_title: "TRANSPARENT ESTIMATE",
        step2_desc: "We present actual material costs and labor day-rates without hidden markups.",
        step3_title: "EXECUTION & HANDOVER",
        step3_desc: "We build with technical rigor and hand over the key ready for immediate use.",
        footer_cta_title: "Ready to start your project?",
        footer_cta_sub: "Request your free consultation today and receive a no-obligation cost estimate.",
        footer_cta_btn: "Get Free Quote",
        footer_brand_desc: "DAK Construction — High-precision civil construction and renovations in Portugal. Technical transparency, rigor, and customer commitment.",
        footer_nav_title: "Navigation",
        footer_contacts_title: "Direct Contacts",
        footer_location_title: "Location",
        footer_location_text: "Lisbon & Porto<br>Portugal",
        footer_copyright: "© 2026 DAK Construction. All rights reserved.",
        modal_badge: "✦ DAK QUOTE REQUEST",
        modal_title: "Let's discuss your project",
        modal_sub: "Fill in the details and choose your preferred contact method.",
        modal_label_name: "Full Name",
        modal_placeholder_name: "e.g. John Smith",
        modal_label_phone: "Phone Number",
        modal_label_email: "Email Address",
        modal_label_service: "Project Type",
        modal_opt_select: "Select an option...",
        modal_opt_raiz: "New Construction (Villa / Building)",
        modal_opt_remodelacao: "Full Renovation",
        modal_opt_parcial: "Partial Renovation / Finishing",
        modal_opt_comercial: "Commercial Space",
        modal_label_notes: "Brief project description (optional)",
        modal_placeholder_notes: "Location, approximate area in m², deadlines...",
        modal_btn_whatsapp: "Send via WhatsApp",
        modal_btn_email: "Send via Email",
        modal_call_text: "Or call directly:",
        modal_success_title: "Thank you for reaching out!",
        modal_success_desc: "Your message has been sent successfully. We will get in touch shortly!",
        modal_success_close: "Close"
    },
    ru: {
        nav_home: "Главная",
        nav_benefits: "Преимущества",
        nav_how: "Как работаем",
        nav_services: "Услуги",
        cta_quote: "Запросить смету",
        hero_tag: "✦ DAK CONSTRUCTION ПОРТУГАЛИЯ",
        hero_title: "СТРОИМ С ПОЛНОЙ ПРОЗРАЧНОСТЬЮ",
        hero_subtitle: "Ваш объект от фундамента до чистовой отделки. Полное управление, без головной боли и с гарантией качества.",
        hero_cta: "Рассчитать смету бесплатно",
        hero_secondary: "Узнать больше о работе посменно (à jorna)",
        card_transparent_title: "100% Прозрачность",
        card_transparent_sub: "Реальные цены и отсутствие скрытых наценок",
        card_team_title: "Опытная команда",
        card_team_sub: "DAK Construction Specialists",
        beneficios_badge: "✦ ПОЧЕМУ МЫ",
        beneficios_headline: "Ваше строительство может стоить меньше, чем вы думаете. Прозрачность — основа успеха любого проекта.",
        beneficios_desc: "Мы не раздуваем смету скрытыми расходами. Наша модель проста: работаем посменно (à jorna), оптимизируем время бригады и гарантируем, что вы платите только за реально выполненный объем.",
        beneficios_btn: "Связаться с командой",
        metric1_tag: "Честное управление DAK",
        metric1_title: "Справедливая смета",
        metric1_text: "Без завышенных маржинальностей. Прозрачная отчётность по материалам и рабочим часам.",
        metric2_badge: "Гарантия DAK",
        metric2_title: "0 Сюрпризов",
        metric2_text: "Платите строго за выполненный результат. Строгое соблюдение утверждённых сроков.",
        metric2_stat1_val: "+120",
        metric2_stat1_lbl: "Завершённых объектов",
        metric2_stat2_val: "100%",
        metric2_stat2_lbl: "Соблюдение сроков",
        servicos_badge: "✦ НАШ ОПЫТ",
        servicos_title: "Выполняем все виды строительных работ. От фундамента до мельчайших деталей интерьера.",
        servicos_card1_title: "Строительство с нуля",
        servicos_card1_text: "Жилые и коммерческие объекты от участка до сдачи под ключ с непрерывным инженерным контролем.",
        servicos_card2_title: "Ремонт и отделка",
        servicos_card2_text: "Полная реконструкция вилл, квартир и коммерческих помещений с максимальной точностью финишной отделки.",
        como_badge: "✦ КАК МЫ РАБОТАЕМ",
        como_title: "Наш метод в 3 прозрачных шага",
        como_intro: "Обеспечиваем полный цикл работ — от первой встречи и планирования до вручения ключей.",
        step1_title: "ПЕРВИЧНАЯ КОНСУЛЬТАЦИЯ",
        step1_desc: "Анализируем ваши задачи и выезжаем на объект для оценки объёма и особенностей проекта.",
        step2_title: "ПРОЗРАЧНЫЙ РАСЧЁТ",
        step2_desc: "Предоставляем реальную стоимость материалов и оплаты труда бригады (посменно / à jorna).",
        step3_title: "CТРОИТЕЛЬСТВО И СДАЧА",
        step3_desc: "Строим со строгим техническим контролем и сдаём полностью готовый к эксплуатации объект.",
        footer_cta_title: "Готовы начать строительство?",
        footer_cta_sub: "Запросите бесплатную консультацию и получите предварительный расчёт без каких-либо обязательств.",
        footer_cta_btn: "Запросить смету бесплатно",
        footer_brand_desc: "DAK Construction — Высокоточное капитальное строительство и ремонт в Португалии. Техническая прозрачность и строгий контроль.",
        footer_nav_title: "Навигация",
        footer_contacts_title: "Контакты",
        footer_location_title: "Локация",
        footer_location_text: "Лиссабон и Порту<br>Португалия",
        footer_copyright: "© 2026 DAK Construction. Все права защищены.",
        modal_badge: "✦ ЗАПРОС СМЕТЫ DAK",
        modal_title: "Обсудим ваш проект",
        modal_sub: "Заполните форму и выберите удобный способ связи.",
        modal_label_name: "Ваше имя",
        modal_placeholder_name: "Например: Иван Иванов",
        modal_label_phone: "Телефон",
        modal_label_email: "Электронная почта",
        modal_label_service: "Тип объекта",
        modal_opt_select: "Выберите вариант...",
        modal_opt_raiz: "Строительство с нуля (Вилла / Здание)",
        modal_opt_remodelacao: "Капитальный ремонт под ключ",
        modal_opt_parcial: "Частичный ремонт / Отделка",
        modal_opt_comercial: "Коммерческое помещение",
        modal_label_notes: "Краткое описание проекта (опционально)",
        modal_placeholder_notes: "Локация объекта, примерная площадь в м², желаемые сроки...",
        modal_btn_whatsapp: "Отправить в WhatsApp",
        modal_btn_email: "Отправить по E-mail",
        modal_call_text: "Или позвоните напрямую:",
        modal_success_title: "Спасибо за обращение!",
        modal_success_desc: "Ваше сообщение успешно сформировано. Мы свяжемся с вами в самое ближайшее время!",
        modal_success_close: "Закрыть"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky & Glass Navbar effect on scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Active nav link highlighting on scroll
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Multi-Language Switcher Engine
    let currentLang = localStorage.getItem('dak_lang') || 'pt';
    const langBtns = document.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('dak_lang', lang);
        document.documentElement.lang = lang;

        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        const i18nElements = document.querySelectorAll('[data-i18n]');
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    setLanguage(currentLang);

    // 4. Lead Modal Handling & Dual Contact Submission Engine (WhatsApp & Email)
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalClose = document.getElementById('modalClose');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const leadForm = document.getElementById('leadForm');
    const formSuccessMsg = document.getElementById('formSuccessMsg');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');
    const btnSubmitWhatsapp = document.getElementById('btnSubmitWhatsapp');
    const btnSubmitEmail = document.getElementById('btnSubmitEmail');

    const openModal = () => {
        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalBackdrop.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (leadForm && formSuccessMsg) {
                leadForm.style.display = 'flex';
                formSuccessMsg.classList.remove('active');
                leadForm.reset();
            }
        }, 300);
    };

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });
    }

    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', closeModal);
    }

    // Helper to get form data
    const getLeadData = () => {
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const serviceSelect = document.getElementById('serviceType');
        const serviceText = serviceSelect.value ? serviceSelect.options[serviceSelect.selectedIndex].text : '';
        const notes = document.getElementById('notes').value.trim();
        return { name, phone, email, serviceText, notes };
    };

    // Action 1: Send via WhatsApp
    if (btnSubmitWhatsapp && leadForm) {
        btnSubmitWhatsapp.addEventListener('click', () => {
            if (!leadForm.checkValidity()) {
                leadForm.reportValidity();
                return;
            }

            const { name, phone, email, serviceText, notes } = getLeadData();
            const targetPhoneNumber = "351931312136";

            let message = `✦ *NOVO PEDIDO DE ORÇAMENTO — DAK CONSTRUCTION*\n\n`;
            message += `👤 *Nome:* ${name}\n`;
            message += `📞 *Telemóvel:* ${phone}\n`;
            message += `📧 *E-mail:* ${email}\n`;
            message += `🏗 *Tipo de Obra:* ${serviceText}\n`;
            if (notes) {
                message += `📝 *Descrição:* ${notes}\n`;
            }

            const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

            leadForm.style.display = 'none';
            if (formSuccessMsg) {
                formSuccessMsg.classList.add('active');
            }
        });
    }

    // Action 2: Send via Email (Web3Forms API or Direct Mailto Fallback)
    if (btnSubmitEmail && leadForm) {
        btnSubmitEmail.addEventListener('click', async () => {
            if (!leadForm.checkValidity()) {
                leadForm.reportValidity();
                return;
            }

            const { name, phone, email, serviceText, notes } = getLeadData();
            const web3FormsKey = window.WEB3FORMS_KEY || null;

            if (web3FormsKey) {
                const formData = new FormData(leadForm);
                formData.append("access_key", web3FormsKey);
                formData.append("subject", "✦ Novo Pedido de Orçamento — DAK Construction");
                formData.append("from_name", "DAK Construction Website");

                try {
                    await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formData
                    });
                } catch (err) {
                    console.error(err);
                }
            } else {
                // Direct Mailto fallback if Web3Forms key is not configured
                const subject = encodeURIComponent("✦ Novo Pedido de Orçamento — DAK Construction");
                const body = encodeURIComponent(`Nome: ${name}\nTelemóvel: ${phone}\nE-mail: ${email}\nTipo de Obra: ${serviceText}\nDescrição: ${notes}`);
                window.location.href = `mailto:dakconstructionportugal@gmail.com?subject=${subject}&body=${body}`;
            }

            leadForm.style.display = 'none';
            if (formSuccessMsg) {
                formSuccessMsg.classList.add('active');
            }
        });
    }

    // 5. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isFlex = navMenu.style.display === 'flex';
            if (isFlex) {
                navMenu.style.display = '';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px';
                navMenu.style.left = '24px';
                navMenu.style.right = '24px';
                navMenu.style.background = '#ffffff';
                navMenu.style.padding = '24px';
                navMenu.style.borderRadius = '20px';
                navMenu.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }
        });
    }
});
