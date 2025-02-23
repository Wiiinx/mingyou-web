import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        products: "Products",
        faq: "FAQ",
        contact: "Contact",
        language: "Language"
      },
      aboutPage: {
        title: "About us",
        description: "Cultivate Virtue, Uphold Integrity, Enjoy Dedication, and Sincerity as the Foundation.",
        learnMore: "Learn More"
      },
      factoryDescription: {
        title: "Zhejiang Mingyou Optoelectronics Technology Co., Ltd.",
        since: " since 2020",
        paragraph1: "Cultivate Virtue, Uphold Integrity, Enjoy Dedication, and Sincerity as the Foundation.",
        paragraph2: "Zhejiang Mingyou Optoelectronics Technology Co., Ltd. is located in Shangyu District, Shaoxing City, Zhejiang Province, China. The company has a team of professional technical experts and fully automated production equipment, with an annual output value exceeding hundreds of millions of yuan.\n" +
            "Our company specializes in the manufacturing and processing of various light guide and diffusion plates, including:\n" +
            "PS Light Guide Plates, Acrylic Light Guide Plates, PS Diffuser Plates, Panel Light Guide Plates, etc. We adheres to a complete and scientific quality management system."
      },
      "productsPage": {
        "title": "Our Products",
        "description": "We provide high-quality PS nano plates and diffuser plates for various applications.",
        "searchPlaceholder": "Search for a product...",
        "learnMore": "Learn More",
        "product1": "PS Nano Plate",
        "product2": "PS Diffuser Plate",
        "product3": "Acrylic Light Guide Plate",
        "product4": "PS Optical-Grade Light Diffuser Plate",
        "product1_description": "Integrity, Sincerity, Excellence, and Innovation.",
        "product2_description": "1. Ultra-thin design meets different spatial design and environmental requirements...\n2. Soft and uniform light, anti-glare, reduces eye fatigue...\n3. Energy-saving, long lifespan, and eco-friendly...",
        "product3_description": "Acrylic sheets, mainly made of polymethyl methacrylate (PMMA), are extruded and have excellent weather resistance, heat resistance, and high transparency...",
        "product4_description": "PS optical-grade light diffusion plates use polystyrene (PS) as the primary material and are applied in TFT-LCD backlight modules, lighting fixtures, and more..."
      },
      contactPage: {
        title: "Contact Us",
        address: "Building 2, Yonghe Micro-Industrial Park, Shangyu District, Shaoxing City, Zhejiang Province, China",
        email: "info@example.com",
        phone: "+86 0575-8292-1798"
      },
      certificates: {
        title: "Certificates & Awards",
        description: "We are recognized for our quality management system and product excellence.",
        viewMore: "View More Certificates"
      },
      machines: {
        title: "Our Machinery",
        description: "We use advanced automated equipment for high-precision manufacturing.",
        machine1: "Laser Cutting Machine",
        machine2: "Injection Molding Machine"
      },
      "footer": {
        "companyName": "Zhejiang Mingyou Optoelectronics Technology Co., Ltd.",
        "contact": "Contact",
        "phone": "Phone",
        "email": "Email",
        "address": "Address",
        "quickLinks": "Quick Links",
        "products": "Products",
        "subscribe": "Subscribe",
        "subscribeText": "Stay updated with our latest products and news.",
        "emailPlaceholder": "Enter your email",
        "rights": "All rights reserved."
      },
    }
  },
  zh: {
    translation: {
      navbar: {
        home: "主页",
        about: "关于",
        products: "产品",
        faq: "常见问题",
        contact: "联系",
        language: "语言"
      },
      aboutPage: {
        title: "积厚德 存正心 乐敬业 诚为本",
        description: "",
        learnMore: "了解更多"
      },
      factoryDescription: {
        title: "浙江明优光电科技股份有限公司",
        since: "成立于2020年",
        paragraph1: "浙江明优光电科技股份有限公司的诚信、实力和产品质量获得业界的认可。欢迎各界朋友莅临参观、指导和业务洽谈。 我们的服务宗旨是:开拓、创新，立足市场求发展;优质、高效，用心服务为用户。",
        paragraph2: "浙江明优光电科技股份有限公司位于浙江省绍兴市上虞区，公司拥有专业的技术人才和全自动化的生产设备，年产值可达上亿元。\n" +
            "浙江明优光电科技股份有限公司是一家专业生产PS导光板、亚克力导光板、丝印导光板、面板灯导光板、TV导光板、PS扩散板、TV 扩散板、面板灯扩散板等产品专业生产加工的公司，拥有完整、科学的质量管理体系。\n",
      },
      "productsPage": {
        "title": "我们的产品",
        "description": "我们提供高质量的PS纳米板和扩散板，以满足各种应用需求。",
        "searchPlaceholder": "搜索产品...",
        "learnMore": "了解更多",
        "product1": "PS纳米板(免丝印导光板)",
        "product2": "PS扩散板",
        "product3": "亚克力导光板",
        "product4": "PS广告板",
        "product1_description": "积厚德 存正心 乐敬业 诚为本",
        "product2_description": "1、超薄设计能满足不同空间设计及环 境要求，能满足不同场所的使用要求\n2、光线柔和均匀，防刺眼及眩光，长 时间工作或使用也相对不易疲劳\n3、节能，环保;光衰小，使用寿命 长，无污染经过生产人员严格调整，PS扩散板透 光率可达到35%-80%(板材自身透光 率)来满足广大用户的购买需求。",
        "product3_description": "亚克力板，以聚甲基丙烯酸甲酯 (PMMA)为主要原料，通过挤出方式挤 出，具有良好之耐候性与耐热性，及极 高之透明度与光泽度，同时具有稳定之 物理丶化学丶光学与电学等特性。",
        "product4_description": "PS光学级光扩散板是以聚苯乙烯 (PolyStyrene)为主要原料，可应用在 TFT-LCD用背光模组丶照明用灯具， 如侧边式丶直下式平板灯等产品，此产 品可有效将背光模组中点或线光源转换 为均匀的面光源。"
      },
      contactPage: {
        title: "联系我们",
        address: "浙江省绍兴市上虞区永和小微产业园2号楼",
        email: "info@example.com",
        phone: "+86 0575-8292-1798"
      },
      certificates: {
        title: "证书和奖项",
        description: "我们因卓越的质量管理体系和产品质量而获得认可。",
        viewMore: "查看更多证书"
      },
      machines: {
        title: "我们的机器",
        description: "我们使用先进的自动化设备进行高精度制造。",
        machine1: "激光切割机",
        machine2: "注塑机"
      },
      "footer": {
        "companyName": "浙江明优光电科技股份有限公司",
        "contact": "联系我们",
        "phone": "电话",
        "email": "电子邮件",
        "address": "地址",
        "quickLinks": "快速链接",
        "products": "产品",
        "subscribe": "订阅",
        "subscribeText": "保持更新，获取我们的最新产品和新闻。",
        "emailPlaceholder": "输入您的电子邮件",
        "rights": "版权所有。"
      },
    }
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Acerca de",
        products: "Productos",
        faq: "Preguntas Frecuentes",
        contact: "Contacto",
        language: "Idioma"
      },
      aboutPage: {
        title: "Dirigiendo un Negocio Exitoso Desde 1955",
        description: "Shaoxing Mingyou Optoelectronics Technology Co., Ltd. está ubicada en Shangyu District, Zhejiang Province. La empresa cuenta con un equipo de expertos técnicos profesionales y equipos de producción totalmente automatizados, con un valor de producción anual que supera los cientos de millones de RMB.",
        learnMore: "Aprende más"
      },
      productsPage: {
        title: "Nuestros Productos",
        description: "Ofrecemos placas nano PS y placas difusoras de alta calidad para diversas aplicaciones.",
        product1: "Placa Nano PS",
        product2: "Placa Difusora PS"
      },
      contactPage: {
        title: "Contáctanos",
        address: "Dirección Demo #8901, Shanghai, China",
        email: "info@example.com",
        phone: "+00 234 678 9012"
      },
      certificates: {
        title: "Certificados y Premios",
        description: "Somos reconocidos por nuestro sistema de gestión de calidad y excelencia en productos.",
        viewMore: "Ver más certificados"
      },
      machines: {
        title: "Nuestras Máquinas",
        description: "Utilizamos equipos automatizados avanzados para una fabricación de alta precisión.",
        machine1: "Máquina de Corte Láser",
        machine2: "Máquina de Moldeo por Inyección"
      },
      "footer": {
        "companyName": "Mingyou Optoelectrónica",
        "contact": "Contacto",
        "phone": "Teléfono",
        "email": "Correo electrónico",
        "address": "Dirección",
        "quickLinks": "Enlaces rápidos",
        "products": "Productos",
        "subscribe": "Suscribirse",
        "subscribeText": "Mantente actualizado con nuestros últimos productos y noticias.",
        "emailPlaceholder": "Introduce tu correo electrónico",
        "rights": "Todos los derechos reservados."
      },
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
