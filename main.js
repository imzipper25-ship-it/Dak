// DAK Construction Landing Page JavaScript & i18n Translation Engine (Client-Facing High-Converting Copy)

const translations = {
    pt: {
        nav_home: "Início",
        nav_benefits: "Porquê a DAK",
        nav_how: "O Nosso Método",
        nav_services: "Especialidades",
        cta_quote: "Pedir Avaliação Grátis",
        hero_tag: "✦ DIREÇÃO DE OBRA & GESTÃO TÉCNICA EM PORTUGAL",
        hero_title: "ENGENHARIA CIVIL A CUSTO REAL: SEM MARGENS OCULTAS DE EMPREITEIRO",
        hero_subtitle: "Direção de obra rigorosa e fiscalização técnica do terreno à chave. Cobrança transparente de materiais a preço de fatura e mão de obra à jorna.",
        hero_cta: "Solicitar Estimativa Grátis",
        hero_secondary: "Como funciona o modelo à jorna?",
        card_transparent_title: "Faturação a Custo Direto",
        card_transparent_sub: "Faturas de fornecedores e relatórios diários de equipa",
        card_team_title: "Engenharia Especializada",
        card_team_sub: "DAK Construction Specialists",
        beneficios_badge: "✦ DIFERENCIAÇÃO NO MERCADO",
        beneficios_headline: "Como Engenheiros, Eliminamos a Margem Oculta do Empreiteiro Tradicional.",
        beneficios_desc: "O modelo tradicional de empreitada global embute margens de risco elevadas e custos imprevisíveis. Na DAK, gerimos a sua obra em regime de custos abertos (cost-plus): paga os materiais ao preço real do fornecedor e a mão de obra por turnos otimizados com diário de obra digital.",
        beneficios_btn: "Falar com Engenheiro DAK",
        metric1_tag: "Gestão Transparente DAK",
        metric1_title: "Orçamento de Custo Real",
        metric1_text: "Relatórios claros de materiais comprados a preço de custo e horas de trabalho efetivas.",
        metric2_badge: "Garantia de Execução DAK",
        metric2_title: "Planeamento Rigoroso por Mapa de GANTT",
        metric2_text: "Cronograma físico-financeiro com cláusula penal contratual e controlo semanal de desvios.",
        metric2_stat1_val: "+120",
        metric2_stat1_lbl: "Obras Entregues",
        metric2_stat2_val: "100%",
        metric2_stat2_lbl: "Compromisso Contratual de Prazos",
        servicos_badge: "✦ AS NOSSAS ESPECIALIDADES",
        servicos_title: "Execução Técnica de Estruturas, Redes de Especialidades e Reabilitação Integral.",
        servicos_card1_title: "Construção Nova & Estruturas (Chave na Mão)",
        servicos_card1_text: "Escavação, contenção, estrutura em betão armado/LGS e redes técnicas sob Direção de Obra certificada.",
        servicos_card2_title: "Reabilitação e Remodelação Integral",
        servicos_card2_text: "Reforço estrutural, isolamento térmico/acústico (ETICS), impermeabilizações e acabamentos de elevada exigência.",
        como_badge: "✦ O NOSSO MÉTODO",
        como_title: "Um método de engenharia em 3 fases para mitigar riscos",
        como_intro: "Um processo simples e transparente para controlar custos e garantir conformidade técnica com o projeto.",
        step1_title: "01. VISTORIA TÉCNICA & DIAGNÓSTICO",
        step1_desc: "Análise no local, verificação das peças desenhadas de arquitetura/especialidades e levantamento de patologias.",
        step2_title: "02. PLANO DE CUSTOS TRANSPARENTE",
        step2_desc: "Apresentação da estimativa discriminada de materiais e equipas alocadas por turnos (à jorna).",
        step3_title: "03. DIREÇÃO DE OBRA & ENSAIO",
        step3_desc: "Execução com diário de obra digital, testes de pressão/estanqueidade e receção da empreitada com livro de obra.",
        footer_cta_title: "Pronto para executar a sua obra sem surpresas?",
        footer_cta_sub: "Solicite hoje uma consulta técnica e receba uma estimativa transparente sem qualquer compromisso.",
        footer_cta_btn: "Pedir Avaliação Grátis",
        footer_brand_desc: "DAK Construction — Engenharia civil e remodelações de alta precisão em Portugal. Transparência técnica, rigor e compromisso com o cliente.",
        footer_nav_title: "Navegação",
        footer_contacts_title: "Contactos Directos",
        footer_location_title: "Localização",
        footer_location_text: "Lisboa & Porto<br>Portugal",
        footer_copyright: "© 2026 DAK Construction. Todos os direitos reservados.",
        modal_badge: "✦ AVALIAÇÃO DE PROJETO DAK",
        modal_title: "Vamos analisar a sua obra",
        modal_sub: "Preencha os dados abaixo e o nosso engenheiro entrará em contacto em menos de 24h.",
        modal_label_name: "Nome completo",
        modal_placeholder_name: "Ex: João Silva",
        modal_label_phone: "Telemóvel",
        modal_label_email: "E-mail",
        modal_label_service: "Tipo de Obra",
        modal_opt_select: "Selecione uma opção...",
        modal_opt_raiz: "Construção de Raiz (Moradia / Edifício)",
        modal_opt_remodelacao: "Remodelação Integral de Luxo",
        modal_opt_parcial: "Remodelação Parcial / Acabamentos",
        modal_opt_comercial: "Espaço Comercial / Escritório",
        modal_label_notes: "Descrição breve do projeto (opcional)",
        modal_placeholder_notes: "Local da obra, área aproximada em m², prazos pretendidos...",
        modal_btn_whatsapp: "Enviar via WhatsApp 🟢",
        modal_btn_email: "Enviar por E-mail ✉️",
        modal_call_text: "Ou ligue diretamente para o engenheiro:",
        modal_success_title: "Obrigado pelo contacto!",
        modal_success_desc: "O seu pedido foi registado com sucesso. Entraremos em contacto em menos de 24h!",
        modal_success_close: "Fechar",
        
        // PVA Assistant Strings
        pva_title: "Assistente de Engenharia DAK",
        pva_welcome: "Olá! Sou o assistente virtual da DAK. Como posso ajudar com a engenharia ou orçamento da sua obra?",
        pva_opt_1: "Como funciona o modelo à jorna?",
        pva_opt_2: "Qual o custo por m²?",
        pva_opt_3: "Como mitigam riscos e atrasos?",
        pva_ans_1: "Trabalhamos em regime de custos abertos (cost-plus): fornecemos materiais a preço de custo direto do fornecedor e cobramos a mão de obra por turnos diários otimizados com relatórios em tempo real.",
        pva_ans_2: "A construção nova varia entre 1.200€ e 1.800€/m² dependendo do projeto de especialidades. A reabilitação depende do diagnóstico de patologias.",
        pva_ans_3: "Utilizamos planeamento rigoroso por mapa de Gantt, controlo semanal de desvios e compromisso contratual com cláusulas penais por atrasos."
    },
    en: {
        nav_home: "Home",
        nav_benefits: "Why DAK",
        nav_how: "Our Method",
        nav_services: "Specialties",
        cta_quote: "Request Free Assessment",
        hero_tag: "✦ ENGINEERING SITE MANAGEMENT & TECHNICAL AUDITING",
        hero_title: "CIVIL ENGINEERING AT REAL COST: ZERO HIDDEN CONTRACTOR MARKUPS",
        hero_subtitle: "Rigorous engineering site management from site prep to final handover. Materials billed at wholesale cost plus transparent day-rate labor.",
        hero_cta: "Request Free Cost Estimate",
        hero_secondary: "How does our day-rate model work?",
        card_transparent_title: "Direct-Cost Billing",
        card_transparent_sub: "Direct supplier invoices and daily team progress logs",
        card_team_title: "Engineering Specialists",
        card_team_sub: "DAK Construction Specialists",
        beneficios_badge: "✦ MARKET DIFFERENTIATION",
        beneficios_headline: "As Engineers, We Eliminate the Hidden Markups of Traditional Contractors.",
        beneficios_desc: "The traditional lump-sum contracting model embeds high risk markups and unpredictable delays. At DAK, we manage your project on an open-book (cost-plus) basis: you pay for materials at wholesale cost and labor via optimized day-rates.",
        beneficios_btn: "Speak with a DAK Engineer",
        metric1_tag: "DAK Transparent Management",
        metric1_title: "Real Cost Budgeting",
        metric1_text: "Clear reporting on raw materials bought at direct wholesale prices and actual team hours.",
        metric2_badge: "DAK Execution Guarantee",
        metric2_title: "Contractual Gantt Timeline & Schedule Management",
        metric2_text: "Financial-physical schedule with penalty clauses and weekly deviation audits.",
        metric2_stat1_val: "+120",
        metric2_stat1_lbl: "Projects Handed Over",
        metric2_stat2_val: "100%",
        metric2_stat2_lbl: "Contractual Deadline Commitment",
        servicos_badge: "✦ OUR SPECIALTIES",
        servicos_title: "Technical Execution of Structures, Specialty Networks, and Full Rehabilitation.",
        servicos_card1_title: "New Construction & Structural Work (Turnkey)",
        servicos_card1_text: "Excavation, structural concrete, LGS, and specialized MEP systems under certified engineering direction.",
        servicos_card2_title: "Full Rehabilitation & Renovations",
        servicos_card2_text: "Structural reinforcement, thermal/acoustic insulation (ETICS), waterproofing, and high-demand finishes.",
        como_badge: "✦ OUR METHOD",
        como_title: "A 3-phase engineering management framework",
        como_intro: "A transparent process engineered to control expenditure, mitigate site risks, and ensure full compliance with plans.",
        step1_title: "01. TECHNICAL SITE DIAGNOSTIC",
        step1_desc: "Site inspection, validation of architectural / engineering drawings, and mapping of structural issues.",
        step2_title: "02. TRANSPARENT COST ESTIMATION",
        step2_desc: "Itemized breakdown of wholesale materials and optimized team shift allocation.",
        step3_title: "03. TECHNICAL INSPECTION & TESTING",
        step3_desc: "Digital site logs, pressure & water-tightness testing, and project handover with official site book.",
        footer_cta_title: "Ready to execute your project without surprises?",
        footer_cta_sub: "Request a technical assessment today and receive a transparent cost estimate with zero obligation.",
        footer_cta_btn: "Request Free Assessment",
        footer_brand_desc: "DAK Construction — High-precision civil engineering and renovations in Portugal. Technical transparency, rigor, and customer commitment.",
        footer_nav_title: "Navigation",
        footer_contacts_title: "Direct Contacts",
        footer_location_title: "Location",
        footer_location_text: "Lisbon & Porto<br>Portugal",
        footer_copyright: "© 2026 DAK Construction. All rights reserved.",
        modal_badge: "✦ DAK PROJECT ASSESSMENT",
        modal_title: "Let's analyze your project",
        modal_sub: "Fill in the form below and our lead engineer will reach out within 24 hours.",
        modal_label_name: "Full Name",
        modal_placeholder_name: "e.g. John Smith",
        modal_label_phone: "Phone Number",
        modal_label_email: "Email Address",
        modal_label_service: "Project Type",
        modal_opt_select: "Select an option...",
        modal_opt_raiz: "New Construction (Villa / Building)",
        modal_opt_remodelacao: "Full High-End Renovation",
        modal_opt_parcial: "Partial Renovation / Finishing",
        modal_opt_comercial: "Commercial Space / Office",
        modal_label_notes: "Brief project description (optional)",
        modal_placeholder_notes: "Location, approximate area in m², deadlines...",
        modal_btn_whatsapp: "Send via WhatsApp 🟢",
        modal_btn_email: "Send via Email ✉️",
        modal_call_text: "Or call the lead engineer directly:",
        modal_success_title: "Thank you for reaching out!",
        modal_success_desc: "Your request has been logged successfully. We will get in touch within 24 hours!",
        modal_success_close: "Close",
        
        // PVA Assistant Strings
        pva_title: "DAK Engineering Assistant",
        pva_welcome: "Hello! I am your virtual DAK engineering assistant. How can I help with your project or cost estimate?",
        pva_opt_1: "How does the shift model work?",
        pva_opt_2: "What is the cost per m²?",
        pva_opt_3: "How do you prevent delays?",
        pva_ans_1: "We operate on an open-book (cost-plus) model: materials are supplied directly at trade cost with zero markup, and labor is billed transparently via daily shift logs.",
        pva_ans_2: "New constructions range from €1,200 to €1,800/m² depending on structure and specs. Restoration costs depend on initial structural diagnosis.",
        pva_ans_3: "We use Gantt charts, weekly deviation reports, and legally binding contractual timelines with penalty clauses for delay mitigation."
    },
    ru: {
        nav_home: "Главная",
        nav_benefits: "Почему DAK",
        nav_how: "Наш метод",
        nav_services: "Специализация",
        cta_quote: "Запросить расчёт",
        hero_tag: "✦ СТРОИТЕЛЬНЫЙ ТЕХНАДЗОР И ИНЖЕНЕРНОЕ УПРАВЛЕНИЕ",
        hero_title: "СТРОИТЕЛЬНАЯ ИНЖЕНЕРИЯ ПО СЕБЕСТОИМОСТИ: БЕЗ НАЦЕНОК ПОДРЯДЧИКА",
        hero_subtitle: "Строгий технический надзор и управление с этапа планирования до вручения ключей. Закупка материалов по оптовым ценам и оплата труда бригады посменно.",
        hero_cta: "Рассчитать смету бесплатно",
        hero_secondary: "Как работает посменная оплата (à jorna)?",
        card_transparent_title: "Оплата по себестоимости",
        card_transparent_sub: "Прямые счета поставщиков и ежедневные журналы смен",
        card_team_title: "Инженерная команда",
        card_team_sub: "DAK Construction Specialists",
        beneficios_badge: "✦ ГЛАВНОЕ ОТЛИЧИЕ ОТ РЫНКА",
        beneficios_headline: "Как инженеры, мы исключаем скрытую маржу традиционных подрядчиков.",
        beneficios_desc: "Традиционные строительные компании закладывают в смету высокие страховые наценки и риски срыва сроков. В DAK мы работаем по прозрачной модели с открытой себестоимостью (cost-plus): вы платите за материалы по оптовой цене фабрики и за работу бригады по сменам с цифровым журналом объекта.",
        beneficios_btn: "Связаться с инженером DAK",
        metric1_tag: "Прозрачное управление DAK",
        metric1_title: "Смета по себестоимости",
        metric1_text: "Прозрачные отчёты по оптовым закупкам материалов и фактически отработанным часам.",
        metric2_badge: "Гарантия выполнения DAK",
        metric2_title: "Строгое планирование по диаграмме Ганта",
        metric2_text: "Финансово-физический график с договорными штрафами за задержки и еженедельным контролем отклонений.",
        metric2_stat1_val: "+120",
        metric2_stat1_lbl: "Сданных объектов",
        metric2_stat2_val: "100%",
        metric2_stat2_lbl: "Договорное обязательство по срокам",
        servicos_badge: "✦ НАША СПЕЦИАЛИЗАЦИЯ",
        servicos_title: "Строительство фундаментов, инженерных сетей и капитальная реконструкция.",
        servicos_card1_title: "Новое строительство и бетонные работы",
        servicos_card1_text: "Земляные работы, возведение монолитных железобетонных конструкций / LGS и прокладка сетей под сертифицированным надзором.",
        servicos_card2_title: "Капитальная реконструкция и ремонт",
        servicos_card2_text: "Усиление несущих стен, тепло- и звукоизоляция фасадов (система ETICS), гидроизоляция и высокоточная отделка.",
        como_badge: "✦ НАШ МЕТОД",
        como_title: "Инженерная методология из 3 шагов для снижения рисков",
        como_intro: "Прозрачный процесс для полного контроля расходов, снижения строительных рисков и соответствия проекту.",
        step1_title: "01. ИНЖЕНЕРНЫЙ ОСМОТР & ДИАГНОСТИКА",
        step1_desc: "Выезд на объект, аудит архитектурных чертежей и выявление технических дефектов конструкций.",
        step2_title: "02. РАСЧЁТ СМЕТЫ ПО СЕБЕСТОИМОСТИ",
        step2_desc: "Предоставление детального расчета стоимости закупки материалов и планирования рабочих смен.",
        step3_title: "03. ТЕХНАДЗОР & ПРИЕМО-СДАТОЧНЫЕ ИСПЫТАНИЯ",
        step3_desc: "Строительство с цифровым журналом работ, гидравлические испытания сетей и сдача объекта с книгой технического надзора.",
        footer_cta_title: "Готовы построить объект без сюрпризов и доплат?",
        footer_cta_sub: "Запросите техническую консультацию прямо сейчас и получите прозрачный расчёт без каких-либо обязательств.",
        footer_cta_btn: "Запросить расчёт бесплатно",
        footer_brand_desc: "DAK Construction — Высокоточная строительная инженерия и ремонт в Португалии. Техническая прозрачность и гарантия качества.",
        footer_nav_title: "Navigation",
        footer_contacts_title: "Прямые контакты",
        footer_location_title: "Локация",
        footer_location_text: "Лиссабон и Порту<br>Португалия",
        footer_copyright: "© 2026 DAK Construction. Все права защищены.",
        modal_badge: "✦ АУДИТ ПРОЕКТА DAK",
        modal_title: "Обсудим ваш объект",
        modal_sub: "Заполните форму, и наш главный инженер свяжется с вами в течение 24 часов.",
        modal_label_name: "Ваше имя",
        modal_placeholder_name: "Например: Иван Иванов",
        modal_label_phone: "Телефон",
        modal_label_email: "Электронная почта",
        modal_label_service: "Тип объекта",
        modal_opt_select: "Выберите вариант...",
        modal_opt_raiz: "Строительство под ключ (Вилла / Здание)",
        modal_opt_remodelacao: "Капитальный премиум-ремонт",
        modal_opt_parcial: "Частичный ремонт / Отделка",
        modal_opt_comercial: "Коммерческий объект / Офис",
        modal_label_notes: "Краткое описание проекта (опционально)",
        modal_placeholder_notes: "Локация объекта, примерная площадь в м², желаемые сроки...",
        modal_btn_whatsapp: "Отправить в WhatsApp 🟢",
        modal_btn_email: "Отправить по E-mail ✉️",
        modal_call_text: "Или позвоните инженеру напрямую:",
        modal_success_title: "Спасибо за обращение!",
        modal_success_desc: "Заявка успешно принята. Главный инженер свяжется с вами в течение 24 часов!",
        modal_success_close: "Закрыть",
        
        // PVA Assistant Strings
        pva_title: "Инженерный ассистент DAK",
        pva_welcome: "Здравствуйте! Я виртуальный инженерный помощник DAK. Чем могу помочь по строительству или расчету сметы?",
        pva_opt_1: "Как работает посменная оплата?",
        pva_opt_2: "Какова средняя стоимость м²?",
        pva_opt_3: "Как вы предотвращаете задержки?",
        pva_ans_1: "Мы работаем по системе cost-plus: материалы поставляются по цене производителя, а работа бригады оплачивается посменно с цифровой отчетностью.",
        pva_ans_2: "Стоимость строительства новой виллы составляет от €1,200 до €1,800/м² в зависимости от проекта. Капитальный ремонт оценивается после выявления дефектов.",
        pva_ans_3: "Мы используем детальное планирование по диаграмме Ганта, еженедельные аудиты отклонений и прописываем материальную ответственность за срыв сроков в договоре."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 0. Register PWA Service Worker for instant offline loading
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then((reg) => {
            console.log('DAK PWA Service Worker registered successfully', reg);
        }).catch((err) => {
            console.warn('PWA registration failed', err);
        });
    }

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

    // 3. Multi-Language Globe Dropdown Engine
    let currentLang = localStorage.getItem('dak_lang') || 'pt';
    const langDropdownBtn = document.getElementById('langDropdownBtn');
    const langDropdownMenu = document.getElementById('langDropdownMenu');
    const langDropdownWrapper = document.getElementById('langDropdownWrapper');
    const currentLangLabel = document.getElementById('currentLangLabel');
    const langOptionBtns = document.querySelectorAll('.lang-option-btn');

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('dak_lang', lang);
        document.documentElement.lang = lang;

        if (currentLangLabel) {
            currentLangLabel.textContent = lang.toUpperCase();
        }

        langOptionBtns.forEach(btn => {
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

        // Dynamic updates for chatbot elements
        updateChatbotLanguage();
    }

    // Toggle Dropdown Menu
    if (langDropdownBtn && langDropdownMenu) {
        langDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdownMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (langDropdownWrapper && !langDropdownWrapper.contains(e.target)) {
                langDropdownMenu.classList.remove('active');
            }
        });
    }

    langOptionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
            if (langDropdownMenu) {
                langDropdownMenu.classList.remove('active');
            }
        });
    });

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

            let message = `✦ *NOVO PEDIDO DE AVALIAÇÃO — DAK CONSTRUCTION*\n\n`;
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
                formData.append("subject", "✦ Novo Pedido de Avaliação — DAK Construction");
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
                const subject = encodeURIComponent("✦ Novo Pedido de Avaliação — DAK Construction");
                const body = encodeURIComponent(`Nome: ${name}\nTelemóvel: ${phone}\nE-mail: ${email}\nTipo de Obra: ${serviceText}\nDescrição: ${notes}`);
                window.location.href = `mailto:dakconstructionportugal@gmail.com?subject=${subject}&body=${body}`;
            }

            leadForm.style.display = 'none';
            if (formSuccessMsg) {
                formSuccessMsg.classList.add('active');
            }
        });
    }

    // 5. Mobile Menu Toggle (Clean Dropdown below Header)
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('mobile-active');
        });

        // Close mobile nav menu when a nav link is clicked
        const mobileNavLinks = navMenu.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-active');
            });
        });

        // Close mobile nav menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('mobile-active');
            }
        });
    }

    // 6. PVA (Personal Virtual Assistant) AI Chatbot Engine
    const pvaToggleBtn = document.getElementById('pvaToggleBtn');
    const pvaWidget = document.getElementById('pvaWidget');
    const pvaCloseBtn = document.getElementById('pvaCloseBtn');
    const pvaMessagesContainer = document.getElementById('pvaMessagesContainer');
    const pvaOptionsContainer = document.getElementById('pvaOptionsContainer');

    function updateChatbotLanguage() {
        if (!pvaWidget) return;
        // Reset container with welcome message
        pvaMessagesContainer.innerHTML = `
            <div class="pva-message pva-message-bot">
                ${translations[currentLang].pva_welcome}
            </div>
        `;
        // Reset options buttons
        pvaOptionsContainer.innerHTML = `
            <button class="pva-option-chip" data-answer-key="pva_ans_1">${translations[currentLang].pva_opt_1}</button>
            <button class="pva-option-chip" data-answer-key="pva_ans_2">${translations[currentLang].pva_opt_2}</button>
            <button class="pva-option-chip" data-answer-key="pva_ans_3">${translations[currentLang].pva_opt_3}</button>
        `;

        // Re-bind option clicks
        const chips = pvaOptionsContainer.querySelectorAll('.pva-option-chip');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const questionText = chip.textContent;
                const answerKey = chip.getAttribute('data-answer-key');
                const answerText = translations[currentLang][answerKey];

                appendUserMessage(questionText);
                chip.style.display = 'none';

                // Display typing indicator then bot answer
                appendTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    appendBotMessage(answerText);
                }, 800);
            });
        });
    }

    function appendUserMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'pva-message pva-message-user';
        msg.textContent = text;
        pvaMessagesContainer.appendChild(msg);
        scrollToBottom();
    }

    function appendBotMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'pva-message pva-message-bot';
        msg.innerHTML = text;
        pvaMessagesContainer.appendChild(msg);
        scrollToBottom();
    }

    let typingIndicator = null;
    function appendTypingIndicator() {
        typingIndicator = document.createElement('div');
        typingIndicator.className = 'pva-message pva-message-bot pva-typing-indicator';
        typingIndicator.innerHTML = `<span></span><span></span><span></span>`;
        pvaMessagesContainer.appendChild(typingIndicator);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        if (typingIndicator) {
            typingIndicator.remove();
            typingIndicator = null;
        }
    }

    function scrollToBottom() {
        pvaMessagesContainer.scrollTop = pvaMessagesContainer.scrollHeight;
    }

    if (pvaToggleBtn && pvaWidget) {
        pvaToggleBtn.addEventListener('click', () => {
            pvaWidget.classList.toggle('active');
            scrollToBottom();
        });

        if (pvaCloseBtn) {
            pvaCloseBtn.addEventListener('click', () => {
                pvaWidget.classList.remove('active');
            });
        }
    }

    setLanguage(currentLang);
});
