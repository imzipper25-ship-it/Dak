// DAK Construction Landing Page JavaScript & i18n Translation Engine (Client-Facing High-Converting Copy)

const translations = {
    pt: {
        nav_home: "Início",
        nav_benefits: "Porquê a DAK",
        nav_how: "O Nosso Método",
        nav_services: "Especialidades",
        cta_quote: "Pedir Avaliação Grátis",
        hero_tag: "✦ ENGENHARIA & CONSTRUÇÃO CIVIL EM PORTUGAL",
        hero_title: "CONSTRUÍMOS COM RIGOR & TRANSPARÊNCIA TOTAL",
        hero_subtitle: "Gestão técnica de obras do zero ao acabamento de luxo. Sem custos ocultos, sem aditamentos surpresa e com controlo diário de custos.",
        hero_cta: "Solicitar Estimativa Grátis",
        hero_secondary: "Como funciona o modelo à jorna?",
        card_transparent_title: "0 Aditamentos Surpresa",
        card_transparent_sub: "Custos reais de materiais e mão de obra",
        card_team_title: "Engenharia Especializada",
        card_team_sub: "DAK Construction Specialists",
        beneficios_badge: "✦ DIFERENCIAÇÃO NO MERCADO",
        beneficios_headline: "Eliminamos a opacidade da construção tradicional. O seu projeto gerido com precisão de engenharia.",
        beneficios_desc: "A maioria das empreitadas inflaciona orçamentos com margens desproporcionais e custos imprevisíveis. Na DAK Construction, trabalhamos por turnos otimizados (à jorna), com relatórios diários de materiais e mão de obra real.",
        beneficios_btn: "Falar com Engenheiro DAK",
        metric1_tag: "Gestão Transparente DAK",
        metric1_title: "Orçamento de Custo Real",
        metric1_text: "Relatórios claros de materiais comprados a preço de custo e horas de trabalho efetivas.",
        metric2_badge: "Garantia de Execução DAK",
        metric2_title: "100% Controlo de Prazos",
        metric2_text: "Cronograma rigoroso com penalizações por atraso e supervisão técnica diária.",
        metric2_stat1_val: "+120",
        metric2_stat1_lbl: "Obras Entregues",
        metric2_stat2_val: "100%",
        metric2_stat2_lbl: "Cumprimento de Prazos",
        servicos_badge: "✦ AS NOSSAS ESPECIALIDADES",
        servicos_title: "Foco absoluto em projetos de elevado padrão. Da infraestrutura ao acabamento de alta precisão.",
        servicos_card1_title: "Construção de Raiz (Chave na Mão)",
        servicos_card1_text: "Moradias unifamiliares e edifícios do terreno à entrega das chaves com fiscalização de engenharia contínua.",
        servicos_card2_title: "Remodelações Integrais de Luxo",
        servicos_card2_text: "Renovação completa de apartamentos e moradias de alto padrão com detalhe nos acabamentos de interiores.",
        como_badge: "✦ O NOSSO MÉTODO",
        como_title: "Como transformamos a sua ideia em realidade",
        como_intro: "Um processo simples e transparente em 3 etapas para garantir a entrega da sua obra sem qualquer dor de cabeça.",
        step1_title: "01. CONSULTA & AVALIAÇÃO TÉCNICA",
        step1_desc: "Inspeção do local, análise do projeto de arquitetura e levantamento de necessidades reais.",
        step2_title: "02. PLANO DE CUSTOS TRANSPARENTE",
        step2_desc: "Apresentação da estimativa discriminada de materiais e equipas alocadas por turnos (à jorna).",
        step3_title: "03. EXECUÇÃO & ENTREGA DA CHAVE",
        step3_desc: "Construção sob rigoroso controlo de qualidade e entrega do imóvel pronto a habitar.",
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
        modal_success_close: "Fechar"
    },
    en: {
        nav_home: "Home",
        nav_benefits: "Why DAK",
        nav_how: "Our Method",
        nav_services: "Specialties",
        cta_quote: "Request Free Assessment",
        hero_tag: "✦ ENGINEERING & CIVIL CONSTRUCTION IN PORTUGAL",
        hero_title: "WE BUILD WITH RIGOR & TOTAL TRANSPARENCY",
        hero_subtitle: "High-precision technical project management from ground zero to luxury finish. Zero hidden markups, zero surprise fees.",
        hero_cta: "Request Free Cost Estimate",
        hero_secondary: "How does our day-rate model work?",
        card_transparent_title: "0 Unexpected Markup Fees",
        card_transparent_sub: "Real cost for materials & labor",
        card_team_title: "Engineering Specialists",
        card_team_sub: "DAK Construction Specialists",
        beneficios_badge: "✦ MARKET DIFFERENTIATION",
        beneficios_headline: "We eliminate opacity in traditional construction. Your project managed with engineering precision.",
        beneficios_desc: "Most contractors inflate estimates with hidden markups and unpredictable delays. At DAK Construction, we operate via optimized day-rate shifts (à jorna) with daily reporting on real labor and raw materials.",
        beneficios_btn: "Speak with a DAK Engineer",
        metric1_tag: "DAK Transparent Management",
        metric1_title: "Real Cost Budgeting",
        metric1_text: "Clear reporting on raw materials bought at direct wholesale prices and actual team hours.",
        metric2_badge: "DAK Execution Guarantee",
        metric2_title: "100% Deadline Compliance",
        metric2_text: "Strict technical timeline with daily site supervision and delay protection guarantees.",
        metric2_stat1_val: "+120",
        metric2_stat1_lbl: "Projects Handed Over",
        metric2_stat2_val: "100%",
        metric2_stat2_lbl: "On-Time Compliance",
        servicos_badge: "✦ OUR SPECIALTIES",
        servicos_title: "Absolute focus on high-standard projects. From heavy structural foundations to precision interior finishes.",
        servicos_card1_title: "New Construction (Turnkey)",
        servicos_card1_text: "Custom villas and residential developments from plot analysis to turnkey key handover with continuous engineering audit.",
        servicos_card2_title: "Full High-End Renovations",
        servicos_card2_text: "Complete renovation of luxury villas, apartments, and heritage spaces with maximum finishing precision.",
        como_badge: "✦ OUR METHOD",
        como_title: "How we turn your vision into reality",
        como_intro: "A simple and transparent 3-step process engineered to deliver your project hassle-free.",
        step1_title: "01. CONSULTATION & SITE AUDIT",
        step1_desc: "Site inspection, architectural drawing audit, and detailed scope analysis.",
        step2_title: "02. TRANSPARENT BUDGET PLAN",
        step2_desc: "Detailed breakdown of raw material costs and specialized day-rate labor allocation.",
        step3_title: "03. EXECUTION & KEY HANDOVER",
        step3_desc: "Construction under strict engineering supervision and final turnkey delivery.",
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
        modal_success_close: "Close"
    },
    ru: {
        nav_home: "Главная",
        nav_benefits: "Почему DAK",
        nav_how: "Наш метод",
        nav_services: "Специализация",
        cta_quote: "Запросить расчёт",
        hero_tag: "✦ СТРОИТЕЛЬНАЯ ИНЖЕНЕРИЯ В ПОРТУГАЛИИ",
        hero_title: "СТРОИМ С ИНЖЕНЕРНОЙ ТОЧНОСТЬЮ И ПРОЗРАЧНОСТЬЮ",
        hero_subtitle: "Управление строительством и ремонтом под ключ. Без скрытых наценок, без внезапных доплат и с честной посменной оплатой (à jorna).",
        hero_cta: "Рассчитать смету бесплатно",
        hero_secondary: "Как работает посменная оплата (à jorna)?",
        card_transparent_title: "0 Скрытых доплат",
        card_transparent_sub: "Реальная себестоимость материалов и бригады",
        card_team_title: "Инженерная команда",
        card_team_sub: "DAK Construction Specialists",
        beneficios_badge: "✦ ГЛАВНОЕ ОТЛИЧИЕ ОТ РЫНКА",
        beneficios_headline: "Исключаем хаос традиционной стройки. Ваш объект под строгим инженерным контролем.",
        beneficios_desc: "Большинство подрядчиков раздувают сметы скрытыми расходами и затягивают сроки. В DAK Construction мы работаем по оптимизированным сменам (à jorna) и предоставляем прозрачные отчёты по материалам и часам.",
        beneficios_btn: "Связаться с инженером DAK",
        metric1_tag: "Прозрачное управление DAK",
        metric1_title: "Смета по себестоимости",
        metric1_text: "Прозрачные отчёты по оптовым закупкам материалов и фактически отработанным часам.",
        metric2_badge: "Гарантия выполнения DAK",
        metric2_title: "100% Соблюдение сроков",
        metric2_text: "Чёткий инженерный график с гарантиями от задержек и ежедневным контролем качества.",
        metric2_stat1_val: "+120",
        metric2_stat1_lbl: "Сданных объектов",
        metric2_stat2_val: "100%",
        metric2_stat2_lbl: "Соблюдение сроков",
        servicos_badge: "✦ НАША СПЕЦИАЛИЗАЦИЯ",
        servicos_title: "Фокус на премиальных объектах. От фундамента до чистовой отделки наивысшего класса.",
        servicos_card1_title: "Строительство вилл (Под ключ)",
        servicos_card1_text: "Частные дома и здания от анализа участка до сдачи ключей под непрерывным технадзором.",
        servicos_card2_title: "Капитальный премиум-ремонт",
        servicos_card2_text: "Полная реконструкция вилл, квартир и коммерческих пространств с высочайшей точностью отделки.",
        como_badge: "✦ НАШ МЕТОД",
        como_title: "Как мы превращаем вашу идею в реальность",
        como_intro: "Простой и прозрачный процесс в 3 этапа, гарантирующий сдачу объекта без головной боли.",
        step1_title: "01. ПЕРВИЧНЫЙ ИНЖЕНЕРНЫЙ АУДИТ",
        step1_desc: "Выезд на объект, анализ архитектурного проекта и составление технического задания.",
        step2_title: "02. ПРОЗРАЧНЫЙ РАСЧЁТ СМЕТЫ",
        step2_desc: "Предоставление детального расчета материалов по оптовой цене и рабочих смен бригады.",
        step3_title: "03. СТРОИТЕЛЬСТВО И СДАЧА КЛЮЧЕЙ",
        step3_desc: "Строительство под строгим технадзором и передача полностью готового объекта.",
        footer_cta_title: "Готовы построить объект без сюрпризов и доплат?",
        footer_cta_sub: "Запросите техническую консультацию прямо сейчас и получите прозрачный расчёт без каких-либо обязательств.",
        footer_cta_btn: "Запросить расчёт бесплатно",
        footer_brand_desc: "DAK Construction — Высокоточная строительная инженерия и ремонт в Португалии. Техническая прозрачность и гарантия качества.",
        footer_nav_title: "Навигация",
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
});
