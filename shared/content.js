// 김일석 포트폴리오 — 공통 콘텐츠 (한/영)
window.PORTFOLIO_CONTENT = {
  meta: {
    name: { ko: '김일석', en: 'Jasmine Kim' },
    position: {
      ko: 'Forward Deployed AI Engineer · Technical Product Manager',
      en: 'Forward Deployed AI Engineer · Technical Product Manager',
    },
    tagline: {
      ko: 'AI 서비스를 실제로 만들어 본 PM.',
      en: 'A PM who has actually shipped AI products.',
    },
    email: 'meangchoo@gmail.com',
    phone: '010-8050-3993',
  },

  vision: {
    kicker: { ko: 'Vision', en: 'Vision' },
    heading: {
      ko: 'AI를 “사용하는” PM이 아니라,\nAI 서비스를 “리딩하는” PM.',
      en: 'Not a PM who "uses" AI —\na PM who builds AI products.',
    },
    body: {
      ko: 'AI 활용법을 아는 PM은 많습니다.\n하지만 LLM·RAG·Vector Search 위에서 실제 서비스를 설계하고\nPoC부터 글로벌 확산까지 책임진 PM은 드뭅니다.\n30년의 엔터프라이즈 경험 위에, AI 서비스 구축의 실전이 얹혀 있습니다.',
      en: 'Many PMs know how to use AI.\nFew have designed real products on LLM · RAG · Vector Search,\nand owned them from PoC to global rollout.\nThree decades of enterprise, layered with real AI shipping.',
    },
  },

  stats: [
    { value: '30', label: { ko: '년 커리어', en: 'yrs of career' }, note: { ko: '1996년부터', en: 'since 1996' } },
    { value: '5', label: { ko: '개국 확산', en: 'countries reached' }, note: { ko: '숏폼·의료 AI 서비스', en: 'shortform · medical AI' } },
    { value: '20+', label: { ko: '프로젝트', en: 'projects' }, note: { ko: 'PM · POPM · Architect', en: 'PM · POPM · Architect' } },
    { value: '1', label: { ko: '저작권', en: 'copyright' }, note: { ko: 'VC-Framework', en: 'VC-Framework' } },
  ],

  whyMe: {
    kicker: { ko: 'Why me', en: 'Why me' },
    heading: {
      ko: 'AI 서비스 구축 경험이 있는 PM을\n만나기는 생각보다 어렵습니다.',
      en: 'PMs who have actually\nshipped AI products\nare rarer than you think.',
    },
    points: [
      {
        title: { ko: 'PM · POPM · Architect', en: 'PM · POPM · Architect' },
        body: {
          ko: 'Samsung SDS Principal 20년, 프리랜서 시니어 10년.\n요구사항 분석부터 아키텍처, 벤더 협상, 글로벌 확산까지\n한 사람 안에서 이어집니다.',
          en: '20 years as Samsung SDS Principal, 10 years as senior freelancer.\nRequirements, architecture, vendor deals, global rollout —\nall connected inside one person.',
        },
      },
      {
        title: { ko: 'AI를 실제로 배포한 사람', en: 'Actually shipped AI' },
        body: {
          ko: '숏폼 자동생성 · 의료 문진 · 해기사 튜터 · 농촌진흥청 교육 —\n최근 2년, 5개의 LLM/RAG 기반 서비스를\nPoC가 아닌 실 서비스로 배포했습니다.',
          en: 'Shortform generation · Medical intake · Maritime tutor · Agri-education —\nFive LLM/RAG products shipped as real services,\nnot demos, in the last two years.',
        },
      },
      {
        title: { ko: '방법론을 쓴 사람', en: 'Author of a method' },
        body: {
          ko: 'Vibe Coding Framework (VC-Framework)를 저술하고\n한국저작권위원회에 등록, 특허 출원 중.\n남의 방법론을 따르는 사람이 아니라 만드는 사람입니다.',
          en: 'Authored the Vibe Coding Framework (VC-Framework),\nregistered with KCC, patent pending.\nI build the method, not just follow one.',
        },
      },
    ],
  },

  capabilities: {
    kicker: { ko: 'Core capabilities', en: 'Core capabilities' },
    heading: { ko: '최고의 역량을 보유하고 있습니다.', en: 'What I do.' },
    items: [
      {
        no: '01',
        tag: { ko: 'DELIVERY', en: 'DELIVERY' },
        title: { ko: '고객 기술 문제 해결 및 End-to-End 실행', en: 'Customer problem solving, end-to-end delivery' },
        body: {
          ko: '고객 비즈니스·기술 요구사항 분석, 문제 정의, 범위·일정·리스크 관리.\nPoC·MVP부터 실서비스 구축과 운영까지 처음부터 끝까지.',
          en: 'Requirements analysis, problem framing, scope · schedule · risk.\nFrom PoC and MVP through production and operations.',
        },
      },
      {
        no: '02',
        tag: { ko: 'AI', en: 'AI' },
        title: { ko: 'AI 서비스 기술 기획 및 아키텍처', en: 'AI service planning & architecture' },
        body: {
          ko: 'LLM 기반 AI 서비스 기획 및 아키텍처 설계, RAG·Embedding·Vector Search 기반 서비스 설계, Product Engineering.',
          en: 'LLM-based product planning & architecture. Designs on RAG, embeddings, vector search. Product engineering.',
        },
      },
      {
        no: '03',
        tag: { ko: 'ARCHITECTURE', en: 'ARCHITECTURE' },
        title: { ko: '솔루션 아키텍처 및 시스템 통합', en: 'Solution architecture & system integration' },
        body: {
          ko: 'Solution/Application Architecture 설계, API·Back-end·데이터 모델링,\nCloud 기반 시스템 통합 및 Legacy Modernization.',
          en: 'Solution / application architecture, API · backend · data modeling.\nCloud integration and legacy modernization.',
        },
      },
      {
        no: '04',
        tag: { ko: 'HANDS-ON', en: 'HANDS-ON' },
        title: { ko: '프로토타이핑 및 기술 문제 해결', en: 'Prototyping & troubleshooting' },
        body: {
          ko: 'Python·Java 기반 프로토타입 및 백엔드 개발,\n기술 이슈 분석과 트러블슈팅, TDD 기반 SW 품질 관리.',
          en: 'Python & Java prototypes and backend. Issue analysis, troubleshooting, TDD-based quality.',
        },
      },
      {
        no: '05',
        tag: { ko: 'ENABLEMENT', en: 'ENABLEMENT' },
        title: { ko: '기술 컨설팅 및 서비스 확산', en: 'Consulting & global enablement' },
        body: {
          ko: '고객 시스템 분석 및 기술 개선안 수립, 서비스 도입 컨설팅,\n글로벌 Rollout, 고객·개발팀 Technical Enablement.',
          en: 'System analysis & improvement roadmaps, adoption consulting,\nglobal rollout, technical enablement for customers and dev teams.',
        },
      },
    ],
  },

  vc: {
    kicker: { ko: 'VC-Framework', en: 'VC-Framework' },
    heading: {
      ko: 'Vibe Coding\nFramework.',
      en: 'Vibe Coding\nFramework.',
    },
    lede: {
      ko: 'AI 시대의 개발 방법론.\n한국저작권위원회에 저작권으로 등록되었고, 특허 출원 중입니다.',
      en: 'A development method for the AI era.\nRegistered with the Korea Copyright Commission. Patent pending.',
    },
    badges: [
      { label: { ko: '저작권 등록번호', en: 'Copyright No.' }, value: 'C-2026-015049' },
      { label: { ko: '발행처', en: 'Registrar' }, value: { ko: '한국저작권위원회', en: 'Korea Copyright Commission' } },
      { label: { ko: '특허', en: 'Patent' }, value: { ko: '출원 중', en: 'Pending' } },
      { label: { ko: '저자', en: 'Author' }, value: { ko: '김일석', en: 'Jasmine Kim' } },
    ],
    tenets: [
      {
        ko: 'AI와 사람이 함께 만드는 소프트웨어를 위한 언어와 절차',
        en: 'A language and process for software co-authored by humans and AI.',
      },
      {
        ko: '요구사항 → 프롬프트 → 코드 → 검증의 사이클을 재정의',
        en: 'Redefines the loop of requirements → prompt → code → verification.',
      },
      {
        ko: '30년의 엔터프라이즈 딜리버리 경험 위에 설계된 실용주의 방법론',
        en: 'A pragmatic method, built on 30 years of enterprise delivery.',
      },
    ],
  },

  now: {
    kicker: { ko: 'Now', en: 'Now' },
    heading: { ko: '지금 하는 일.', en: 'Working on now.' },
    range: { ko: '2025.01 – 현재 · Freelancer POPM', en: 'Jan 2025 – Present · Freelancer POPM' },
    items: [
      {
        title: { ko: '프로젝트 관리', en: 'Project Management' },
        body: {
          ko: '범위 · 일정 · 이슈 · 리스크를 직접 쥐고, PoC부터 실서비스까지 End-to-End로 이끕니다.',
          en: 'Own scope, schedule, issues, and risk. Drive from PoC to production, end-to-end.',
        },
      },
      {
        title: { ko: '서비스 분석', en: 'Service Analysis' },
        body: {
          ko: '고객의 비즈니스와 기술 요구사항을 분해하고, 문제를 정의해 실행 가능한 언어로 옮깁니다.',
          en: 'Decompose business and technical needs. Define the real problem in executable terms.',
        },
      },
      {
        title: { ko: '시스템 설계', en: 'System Design' },
        body: {
          ko: 'Solution · Application Architecture, API · 데이터 모델, 클라우드 통합까지 하나의 그림으로 설계합니다.',
          en: 'Solution/application architecture, APIs, data models, and cloud integration — as one picture.',
        },
      },
      {
        title: { ko: 'TDD 기반 품질관리', en: 'TDD-based Quality' },
        body: {
          ko: '테스트 전략을 먼저 설계하고, TDD로 코드와 프로세스의 품질을 함께 지킵니다.',
          en: 'Design the test strategy first. Use TDD to guard both code and process quality.',
        },
      },
      {
        title: { ko: 'AI 활용 바이브 코딩', en: 'AI-native Vibe Coding' },
        body: {
          ko: '요구사항 → 프롬프트 → 코드 → 검증의 사이클을 재정의한 자체 방법론으로 서비스를 만듭니다.',
          en: 'Ship products with my own method — redefining requirements → prompt → code → verification.',
        },
      },
      {
        title: { ko: '노코드 웹서비스 구축', en: 'No-code Web Delivery' },
        body: {
          ko: '노코드 플랫폼 위에서 실사용 가능한 웹서비스를 빠르게 설계 · 배포 · 운영합니다.',
          en: 'Design, deploy, and operate real web services on no-code platforms — at speed.',
        },
      },
    ],
  },

  builtSites: {
    kicker: { ko: 'Shipped by me', en: 'Shipped by me' },
    heading: { ko: '만들어 온 서비스들.', en: 'Services I have built.' },
    items: [
      {
        name: 'Clipink',
        title: { ko: 'AI 숏폼 영상 제작 플랫폼', en: 'AI Shortform Video Platform' },
        url: 'clipink.ai',
        href: 'https://clipink.ai',
        img: 'screenshots/sites/clipink.jpg',
        tint: '#FF6B4A',
        tint2: '#FFB199',
      },
      {
        name: 'JOONCHART',
        title: { ko: '정인적방 · 차트 서비스', en: 'JOONCHART · Data Visualization' },
        url: 'dev-chart.joonchart.com',
        href: 'https://dev-chart.joonchart.com',
        img: 'screenshots/sites/joonchart.jpg',
        tint: '#3D6BE0',
        tint2: '#8FB0F5',
      },
      {
        name: 'MARINENET',
        title: { ko: '해양 산업 네트워크', en: 'Maritime Industry Network' },
        url: 'marinenet.kr',
        href: 'https://marinenet.kr',
        img: 'screenshots/sites/marinenet.jpg',
        tint: '#0E6BA8',
        tint2: '#6BB1D8',
      },
      {
        name: 'PageURL',
        title: { ko: '숏 URL 서비스', en: 'Short URL Service' },
        url: 'pageurl.app',
        href: 'https://pageurl.app',
        img: 'screenshots/sites/pageurl.jpg',
        tint: '#7A5AF8',
        tint2: '#C4B5FD',
      },
      {
        name: 'sojang',
        title: { ko: '개인 소규모 커머스', en: 'Micro Commerce Platform' },
        url: 'sojang.app',
        href: 'https://sojang.app',
        img: 'screenshots/sites/sojang.jpg',
        tint: '#E85D75',
        tint2: '#F4A5B4',
      },
      {
        name: { ko: 'AI 교육 플랫폼', en: 'AI Education Platform' },
        title: { ko: '농촌진흥청 인적자원개발 교육플랫폼', en: 'RDA HRD Education Platform' },
        url: 'hrd.rda.go.kr',
        href: 'https://hrd.rda.go.kr/ehrd_front/ehrdEduIndex.do',
        img: 'screenshots/sites/rda-hrd.jpg',
        tint: '#2F7D3F',
        tint2: '#8ABF95',
      },
      {
        name: 'Samsung eStore',
        title: { ko: '삼성 온라인스토어', en: 'Samsung Online Store' },
        url: 'samsung.com',
        href: 'https://www.samsung.com',
        img: 'screenshots/sites/samsung.jpg',
        tint: '#1428A0',
        tint2: '#6E85C7',
      },
      {
        name: 'Hyundai DE',
        title: { ko: '현대자동차 드라이빙 익스피리언스', en: 'Hyundai Driving Experience' },
        url: 'drivingexperience.hyundai.co.kr',
        href: 'https://drivingexperience.hyundai.co.kr/',
        img: 'screenshots/sites/hyundai-de.jpg',
        tint: '#002C5F',
        tint2: '#5E7DAA',
      },
      {
        name: 'Greencar',
        title: { ko: '그린카 · 카쉐어링', en: 'Greencar · Carsharing' },
        url: 'greencar.co.kr',
        href: 'https://www.greencar.co.kr/greencar/about',
        img: 'screenshots/sites/greencar.jpg',
        tint: '#2AA05C',
        tint2: '#84D0A5',
      },
      {
        name: 'Amorepacific ITSM',
        title: { ko: '아모레퍼시픽 ITSM', en: 'Amorepacific ITSM' },
        url: 'apgroup.com',
        href: 'https://www.apgroup.com/int/ko/',
        img: 'screenshots/sites/amorepacific.jpg',
        tint: '#C9A97A',
        tint2: '#E8D4B0',
      },
    ],
  },

  enterpriseCareer: {
    kicker: { ko: 'Enterprise career', en: 'Enterprise career' },
    heading: { ko: '역량이 다져진 시간.', en: 'The years of scale.' },
    items: [
      {
        year: '2025',
        company: { ko: '테크레디', en: 'Techready' },
        role: { ko: 'POPM · AI 서비스 시스템 구축', en: 'POPM · AI Service System Build' },
        period: '2025',
        body: { ko: 'AI 서비스 시스템 구축 POPM. 서비스 분석, 시스템 설계, 프로젝트 관리.', en: 'POPM for the AI service system build. Service analysis, system design, PM.' },
      },
      {
        year: '2023',
        company: { ko: 'SK 가스', en: 'SK Gas' },
        role: { ko: '디지털 전환 컨설턴트', en: 'Digital Transformation Consultant' },
        period: '2023.08 – 2024.06',
        body: { ko: 'AWS · Azure 기반. SK가스 고유 IT 방법론 및 품질 향상 전략 수립.', en: 'AWS · Azure. Custom IT methodology and quality strategy.' },
      },
      {
        year: '2023',
        company: { ko: '그린카', en: 'Greencar' },
        role: { ko: '차세대 앱 PM · Testing Manager', en: 'Next-gen app PM · Testing Manager' },
        period: '2023.04 – 2023.07',
        body: { ko: '3개월 지연된 카쉐어링 서비스 정상화 및 안정 운영.', en: 'Recovered a 3-month-late carsharing launch. Stabilized ops.' },
      },
      {
        year: '2022',
        company: { ko: '아모레퍼시픽', en: 'Amorepacific' },
        role: { ko: 'IT 헬프데스크 통합 PM', en: 'IT Helpdesk Integration PM' },
        period: '2022.03 – 2022.08',
        body: { ko: '분산된 서비스 요청 시스템을 통합, ITSM 서비스 시스템 구축.', en: 'Unified fragmented request systems into one ITSM.' },
      },
      {
        year: '2022',
        company: { ko: 'SK 하이닉스', en: 'SK Hynix' },
        role: { ko: 'G-RMS Backend Engineer', en: 'G-RMS Backend Engineer' },
        period: '2022.09 – 2022.12',
        body: { ko: '반도체 MES 웹 서비스 백엔드 개발.', en: 'Backend for semiconductor MES web service.' },
      },
      {
        year: '2021',
        company: { ko: '현대오토에버', en: 'Hyundai AutoEver' },
        role: { ko: 'PM · PMO', en: 'PM · PMO' },
        period: '2021',
        body: { ko: '현대차그룹 eCommerce 일본 진출 사업 통합 관리. 벤더 선정, 정책 수립.', en: 'Hyundai eCommerce Japan launch. Vendor selection & policy.' },
      },
    ],
  },

  samsungEra: {
    kicker: { ko: 'Samsung SDS · 1996–2016', en: 'Samsung SDS · 1996–2016' },
    heading: {
      ko: '20년 동안,\n삼성의 시스템을\n직접 만들었습니다.',
      en: 'Twenty years building\nSamsung’s systems\nfrom the inside.',
    },
    items: [
      {
        title: { ko: '삼성전자 온라인스토어 · 글로벌 운영', en: 'Samsung eStore · Global ops' },
        body: { ko: 'SAP Hybris Commerce 기반. 유럽·오세아니아 11개국 법인 확산.', en: 'SAP Hybris. Rolled out to 11 subsidiaries across Europe & Oceania.' },
      },
      {
        title: { ko: '삼성전자 서비스 지식 포털 · 36개 법인', en: 'Samsung Service Portal · 36 subsidiaries' },
        body: { ko: '글로벌 서비스 지식 포털 통합. CRM 연계 데이터 아키텍처 설계.', en: 'Unified global service portal. CRM-linked data architecture.' },
      },
      {
        title: { ko: '삼성SDS PMS 솔루션 리드', en: 'Samsung SDS PMS Solution Lead' },
        body: { ko: '자체 PMS 솔루션 설계 · 개발 · 리드. 다수 SI 프로젝트에 적용.', en: 'Designed & led the in-house PMS. Deployed across many SI projects.' },
      },
      {
        title: { ko: '삼성그룹 mySingle 그룹웨어', en: 'Samsung mySingle Groupware' },
        body: { ko: '메일 · 결재 서비스 설계 및 개발 리드. 유지관리 총괄.', en: 'Lead for mail & approval design and dev. Ongoing maintenance.' },
      },
      {
        title: { ko: '북미(SEA) · 유럽 포털 서비스 확산', en: 'North America (SEA) & EU portal rollout' },
        body: { ko: '유럽·미국 법인 대상 지식 포털 통합 개발 리드.', en: 'Lead for the EU & US portal integration effort.' },
      },
      {
        title: { ko: 'IT 인재 육성 · 커리어 코칭', en: 'IT talent development & coaching' },
        body: { ko: '엔지니어 역량강화 프로그램 설계, 직무 전환 프로세스 기획.', en: 'Designed engineer growth programs & role-transition processes.' },
      },
    ],
  },

  stack: {
    kicker: { ko: 'Stack', en: 'Stack' },
    heading: { ko: '다루는 것들.', en: 'What I work with.' },
    groups: [
      {
        label: { ko: 'AI · LLM', en: 'AI · LLM' },
        items: ['LLM', 'RAG', 'Embeddings', 'Vector Search', 'Prompt Engineering', 'Product Engineering'],
      },
      {
        label: { ko: 'Language', en: 'Language' },
        items: ['Python', 'Java', 'JavaScript', 'Node.js'],
      },
      {
        label: { ko: 'Cloud & Infra', en: 'Cloud & Infra' },
        items: ['AWS', 'MS Azure', 'GCP'],
      },
      {
        label: { ko: 'Enterprise', en: 'Enterprise' },
        items: ['SAP Hybris Commerce', 'MSSQL', 'Zendesk', 'Atlassian Jira'],
      },
      {
        label: { ko: 'Method', en: 'Method' },
        items: ['Scrum (Scrum Alliance)', 'PMP', 'Co-Active Coaching', 'TDD', 'VC-Framework'],
      },
    ],
  },

  education: {
    kicker: { ko: 'Education & Certs', en: 'Education & Certs' },
    heading: { ko: '학력 · 자격.', en: 'Education & credentials.' },
    schools: [
      { year: '2010', school: { ko: '한국방송통신대학교', en: 'Korea National Open University' }, major: { ko: '컴퓨터과학 학사', en: 'B.S., Computer Science' } },
      { year: '1995', school: { ko: '신구대학교', en: 'Shingu College' }, major: { ko: '전자계산학', en: 'Computer Science' } },
    ],
    certs: [
      { ko: 'Scrum Master (수료)', en: 'Scrum Master (Completed)' },
      { ko: 'PMP (수료)', en: 'PMP (Completed)' },
      { ko: 'Co-Active Coaching (수료)', en: 'Co-Active Coaching (Completed)' },
      { ko: 'SAP Hybris Commerce Essentials (수료)', en: 'SAP Hybris Commerce Essentials (Completed)' },
      { ko: '직업능력개발훈련교사 3급', en: 'Vocational Training Instructor Level 3' },
    ],
    languages: [
      { ko: '한국어 (모국어)', en: 'Korean (Native)' },
      { ko: '영어 (비즈니스 회화)', en: 'English (Business Conversation)' },
    ],
  },

  contact: {
    kicker: { ko: 'Contact', en: 'Contact' },
    heading: { ko: '함께 만들어 볼까요.', en: 'Let’s build together.' },
    body: {
      ko: 'AI PM, FDE, Technical PM 포지션.\n국내외 어디든, 편하게 연락 주세요.',
      en: 'AI PM · FDE · Technical PM roles.\nAnywhere — please reach out.',
    },
  },
};
