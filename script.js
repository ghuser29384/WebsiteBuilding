const STORAGE_KEY = "chseb-language";
const SUPPORTED_LANGS = ["en", "zh"];
let activeLanguage = "en";
let theoryGraphState = null;

const translations = {
  en: {
    titleHome: "China High School Ethics Bowl | Collaborative Ethical Dialogue",
    titleStructure: "Competition Structure | China High School Ethics Bowl",
    titleDiscourse: "Public Discourse | China High School Ethics Bowl",
    titleResources: "Resources | China High School Ethics Bowl",
    titleRegister: "Register & Contact | China High School Ethics Bowl",
    titleMetaethics: "Metaethics Map | China High School Ethics Bowl",
    titleRooms: "24/7 Meeting Rooms | China High School Ethics Bowl",
    titleJoinUs: "Join Us | China High School Ethics Bowl",
    brandName: "China High School Ethics Bowl",
    brandTag: "Collaborative ethical dialogue for high school students",
    navHome: "Home",
    navStructure: "Competition Structure",
    navDiscourse: "Public Discourse",
    navResources: "Resources",
    navRegister: "Register & Contact",
    navMetaethics: "Metaethics Map",
    navRooms: "24/7 Rooms",
    navJoinUs: "Join Us",
    footerLine: "China High School Ethics Bowl (CHSEB) builds reasoned, respectful, and pluralistic public dialogue for the next generation.",

    homeHeroKicker: "A National Ethics Dialogue Program",
    homeHeroTitle: "China High School Ethics Bowl",
    homeHeroSubtitle: "A rendition of the National High School Ethics Bowl for Chinese students, centered on collaborative inquiry rather than debate victory.",
    homeHeroCtaPrimary: "Explore Competition Structure",
    homeHeroCtaSecondary: "Read Public Discourse Principles",
    homeValuesHeading: "What Makes CHSEB Distinct",
    homeValue1: "Dialogue first: teams jointly clarify ethical complexity.",
    homeValue2: "Reason-giving over rhetoric: claims must be publicly defensible.",
    homeValue3: "Civic learning: disagreement without contempt.",
    homeMissionTitle: "Why CHSEB",
    homeMissionBody: "CHSEB adapts the spirit of NHSEB to Chinese school communities by emphasizing careful ethical reasoning, intellectual humility, and respectful public dialogue across differences.",
    homePillarsHeading: "Core Pillars",
    homePillar1Title: "Collaborative Inquiry",
    homePillar1Body: "Students treat opponents as partners in truth-seeking, not targets to defeat.",
    homePillar2Title: "Public Reason",
    homePillar2Body: "Arguments are evaluated by clarity, fairness, and whether diverse audiences can examine them.",
    homePillar3Title: "Civic Imagination",
    homePillar3Body: "Teams explore policy and personal ethics while considering long-term social consequences.",
    homeDiscourseHeading: "Public Discourse at the Center",
    homeDiscourseBody: "Inspired by Michael Sandel's public philosophy and Jurgen Habermas's discourse ethics, CHSEB trains students to justify claims in terms that others can examine, challenge, and refine.",
    homeSandelTitle: "Sandel: Moral Reflection in Public",
    homeSandelBody: "Teams test values in common civic language, asking what justice, responsibility, and dignity require in specific cases.",
    homeHabermasTitle: "Habermas: Better Arguments, Shared Legitimacy",
    homeHabermasBody: "Rounds reward reciprocal reasoning, active listening, and openness to revision when better reasons emerge.",
    homeSeasonHeading: "Season at a Glance",
    homeSeason1Title: "Casebook Release",
    homeSeason1Body: "A shared set of real-world ethics cases is distributed to all participating teams.",
    homeSeason2Title: "Regional Dialogues",
    homeSeason2Body: "Schools enter moderated and scored rounds focused on analysis, response quality, and engagement.",
    homeSeason3Title: "National Finals",
    homeSeason3Body: "Top teams gather for semifinal and final rounds, followed by a public showcase panel.",
    homeGetStartedHeading: "Get Started",
    homeGetStartedRegisterTitle: "Registration & Contact",
    homeGetStartedRegisterBody: "See participation pathways for teams, judges, and schools, then send a registration inquiry.",
    homeGetStartedRegisterBtn: "Open Registration Page",
    homeGetStartedResourcesTitle: "Rulebook & Casebook Downloads",
    homeGetStartedResourcesBody: "Download bilingual rulebook and casebook materials for classroom practice and tournament prep.",
    homeGetStartedResourcesBtn: "View Downloads",
    homeGetStartedMetaethicsTitle: "Metaethics Web Map",
    homeGetStartedMetaethicsBody: "Explore an interactive map of moral cognitivism and non-cognitivism with key grounding disputes.",
    homeGetStartedMetaethicsBtn: "Open Metaethics Map",
    homeGetStartedRoomsTitle: "24/7 Discussion Rooms",
    homeGetStartedRoomsBody: "Join always-open topic rooms for metaethics, normative ethics, practical ethics, and more.",
    homeGetStartedRoomsBtn: "Join Rooms",
    homeGetStartedJoinUsTitle: "Volunteer and Judge with CHSEB",
    homeGetStartedJoinUsBody: "Apply to help run competitions or serve as a philosophy-focused judge.",
    homeGetStartedJoinUsBtn: "Open Join Us Page",
    homeJoinTitle: "For Students, Educators, and Schools",
    homeJoinBody: "CHSEB supports multilingual dialogue and rigorous ethical thinking for a changing civic landscape.",
    homeJoinBtn: "View Full Competition Structure",

    structureHeroKicker: "Competition Design",
    structureHeroTitle: "How a CHSEB Round Works",
    structureHeroSubtitle: "Each match is a structured ethical dialogue. Teams present, respond, and question to deepen collective understanding.",
    structureFormatHeading: "Round Format",
    structureFormatIntro: "A standard round includes four phases:",
    structurePhase1Title: "1. Opening Analysis (6 minutes)",
    structurePhase1Body: "Presenting team explains the case, ethical tensions, and a defensible position.",
    structurePhase2Title: "2. Commentary and Questions (8 minutes)",
    structurePhase2Body: "Responding team probes assumptions, raises objections, and adds alternative perspectives.",
    structurePhase3Title: "3. Open Dialogue (6 minutes)",
    structurePhase3Body: "Both teams discuss agreements, disagreements, and possible revisions to each position.",
    structurePhase4Title: "4. Closing Reflection (2 minutes each)",
    structurePhase4Body: "Each team states what changed, what remains contested, and why.",
    structureRolesHeading: "Roles in the Room",
    structureRoleModeratorTitle: "Moderator",
    structureRoleModeratorBody: "Keeps timing, enforces civility norms, and ensures balanced participation.",
    structureRoleJudgesTitle: "Judges",
    structureRoleJudgesBody: "Evaluate reasoning quality, listening, responsiveness, and ethical depth.",
    structureRoleTeamsTitle: "Teams",
    structureRoleTeamsBody: "Engage as co-inquirers: challenge sharply, respond charitably, and refine arguments in public.",
    structureRubricHeading: "Judging Rubric",
    structureRubricColCriterion: "Criterion",
    structureRubricColWhat: "What Judges Look For",
    structureRubric1Criterion: "Ethical Analysis",
    structureRubric1What: "Identifies stakeholders, principles, tradeoffs, and consequences.",
    structureRubric2Criterion: "Quality of Reasons",
    structureRubric2What: "Offers clear, relevant, and publicly defensible arguments.",
    structureRubric3Criterion: "Dialogue Engagement",
    structureRubric3What: "Listens actively, answers directly, and advances discussion.",
    structureRubric4Criterion: "Intellectual Humility",
    structureRubric4What: "Acknowledges uncertainty and revises positions when warranted.",
    structureRubric5Criterion: "Civic Discourse",
    structureRubric5What: "Maintains respect, reciprocity, and fairness throughout.",
    structureTournamentHeading: "Tournament Structure",
    structureTournament1Title: "Preliminary Rounds",
    structureTournament1Body: "All teams participate in multiple scored rounds against different opponents.",
    structureTournament2Title: "Semifinals",
    structureTournament2Body: "Top teams advance based on cumulative rubric scores and schedule strength.",
    structureTournament3Title: "Final Round",
    structureTournament3Body: "Finalists discuss a case before a judge panel and public audience.",
    structureTimelineHeading: "Suggested Annual Timeline",
    structureTimeline1Label: "September",
    structureTimeline1Text: "Casebook publication and coach orientation.",
    structureTimeline2Label: "October-December",
    structureTimeline2Text: "School practice rounds and regional qualifiers.",
    structureTimeline3Label: "January-February",
    structureTimeline3Text: "Regional championships and judge calibration.",
    structureTimeline4Label: "March",
    structureTimeline4Text: "National semifinals and final showcase.",
    structureCtaTitle: "Ready to Host a School Team?",
    structureCtaBody: "Use this structure as a baseline and adapt logistics to local language, school calendars, and regional context.",
    structureCtaBtn: "Return to Homepage",

    discourseHeroKicker: "Philosophical Foundations",
    discourseHeroTitle: "Public Discourse in CHSEB",
    discourseHeroSubtitle: "CHSEB treats ethical reasoning as a civic practice: students learn to disagree without dehumanizing.",
    discourseFrameHeading: "Two Foundational Lenses",
    discourseSandelTitle: "Michael Sandel: Civic Moral Inquiry",
    discourseSandelBody: "Sandel emphasizes that public life cannot avoid moral questions. In CHSEB, teams examine competing conceptions of the good and justify them in shared civic language.",
    discourseHabermasTitle: "Jurgen Habermas: Discourse Ethics",
    discourseHabermasBody: "Habermas argues that legitimacy grows from inclusive, reason-giving dialogue. CHSEB rounds are designed so claims must survive public scrutiny, not mere rhetorical force.",
    discourseTheoriesHeading: "Additional Theories in Public Discourse",
    discourseTheoryRawlsTitle: "Rawls: Public Reason and Reciprocity",
    discourseTheoryRawlsBody: "In constitutional-level disagreements, students ask whether reasons are shareable across reasonable pluralism.",
    discourseTheoryArendtTitle: "Arendt: Action, Plurality, and the Public Realm",
    discourseTheoryArendtBody: "Public judgment emerges when distinct persons appear together, speak, and take responsibility for common worlds.",
    discourseTheoryMouffeTitle: "Mouffe: Agonistic Democracy",
    discourseTheoryMouffeBody: "Conflict cannot be eliminated; the task is to transform enemies into adversaries within shared democratic rules.",
    discourseTheoryFrickerTitle: "Fricker: Epistemic Injustice",
    discourseTheoryFrickerBody: "CHSEB trains students to detect credibility gaps and hermeneutical exclusion in who gets heard and understood.",
    discourseTheoryMillTitle: "Mill: Free Speech and Error-Correction",
    discourseTheoryMillBody: "Even unpopular claims can sharpen truth-tracking, provided discourse norms protect participants from abuse.",
    discourseTheoryConfucianTitle: "Confucian Debates: Harmony, Remonstrance, and Role Ethics",
    discourseTheoryConfucianBody: "Students examine when social harmony supports dialogue and when moral remonstrance requires direct criticism.",
    discourseDebatesHeading: "Major Debates in Public Discourse",
    discourseDebate1Title: "Civility vs. Urgency",
    discourseDebate1Body: "Should discourse prioritize calm civility, or can urgent injustice justify disruptive forms of argument?",
    discourseDebate2Title: "Neutrality vs. Moral Perfectionism",
    discourseDebate2Body: "Must institutions remain neutral among conceptions of the good, or should they cultivate substantive civic virtues?",
    discourseDebate3Title: "Deliberation vs. Contestation",
    discourseDebate3Body: "Is public reason primarily consensus-seeking deliberation, or an enduring field of principled contest?",
    discourseDebate4Title: "Open Platforms vs. Harm Reduction",
    discourseDebate4Body: "How should speech spaces balance openness with responsibilities to prevent harassment, disinformation, and silencing?",
    discourseNormsHeading: "Norms for Ethical Public Dialogue",
    discourseNorm1Title: "Reciprocity",
    discourseNorm1Body: "Give reasons your counterparts could reasonably engage, not slogans only your side can endorse.",
    discourseNorm2Title: "Charitable Interpretation",
    discourseNorm2Body: "State your counterpart's argument fairly before criticizing it.",
    discourseNorm3Title: "Evidence and Principles",
    discourseNorm3Body: "Connect examples to ethical principles and avoid unsupported assertion.",
    discourseNorm4Title: "Revisability",
    discourseNorm4Body: "Signal what evidence or reasoning would change your position.",
    discoursePracticeHeading: "What Students Practice",
    discoursePractice1: "Separating disagreement from disrespect.",
    discoursePractice2: "Balancing rights, welfare, and fairness in policy dilemmas.",
    discoursePractice3: "Translating private convictions into public reasons.",
    discoursePractice4: "Building common ground without erasing real conflict.",
    discourseProtocolHeading: "Suggested Dialogue Protocol",
    discourseProtocolStep1: "Clarify the ethical question before taking positions.",
    discourseProtocolStep2: "Name key stakeholders and what each is owed.",
    discourseProtocolStep3: "Test arguments against counterexamples and edge cases.",
    discourseProtocolStep4: "Close with provisional judgments and open questions.",
    discourseCtaTitle: "Continue to Metaethics and Live Discussion Rooms",
    discourseCtaBody: "Move from public discourse theory to the metaethics map and 24/7 topic rooms for sustained practice.",
    discourseCtaBtnMeta: "Open Metaethics Map",
    discourseCtaBtnRooms: "Open 24/7 Rooms",

    metaHeroKicker: "Interactive Metaethics",
    metaHeroTitle: "Moral Cognitivism vs. Non-Cognitivism",
    metaHeroSubtitle: "Explore how metaethical theories connect, conflict, and depend on deeper assumptions about truth, motivation, and moral explanation.",
    metaOverviewHeading: "Core Contrast",
    metaOverviewCogTitle: "Moral Cognitivism",
    metaOverviewCogBody: "Moral judgments express beliefs and are truth-apt. Theories differ on whether any moral beliefs are actually true.",
    metaOverviewNonCogTitle: "Moral Non-Cognitivism",
    metaOverviewNonCogBody: "Moral judgments primarily express non-belief attitudes, prescriptions, or commitments rather than ordinary truth-evaluable beliefs.",
    metaIssuesHeading: "Undergirding Issues",
    metaIssue1: "Truthmaker Maximalism and whether every truth requires a robust ontological ground.",
    metaIssue2: "The queerness challenge to objective moral properties.",
    metaIssue3: "Frege-Geach style embedding problems for expressivist semantics.",
    metaIssue4: "Motivation internalism and whether sincere moral judgment necessarily motivates.",
    metaIssue5: "Moral disagreement: belief conflict, attitude clash, or both.",
    metaMapHeading: "Theory Relationship Web",
    metaMapIntro: "Click any node to inspect dependencies, pressure points, and falsification conditions.",
    metaPanelHeading: "Focused Analysis",
    metaPanelDefaultTitle: "Select a theory node",
    metaPanelDefaultBody: "Choose a node in the web to see core claims and what could undermine it.",
    metaCtaTitle: "Discuss These Views Live",
    metaCtaBody: "Move from map exploration to live dialogue in the 24/7 philosophical meeting rooms.",
    metaCtaBtn: "Open 24/7 Rooms",

    roomsHeroKicker: "Always Open Dialogue Space",
    roomsHeroTitle: "24-Hour Online Meeting Rooms",
    roomsHeroSubtitle: "Join open rooms for continuous philosophical discussion. Each room has a thematic focus and starter prompts.",
    roomsGuidelinesHeading: "Room Guidelines",
    roomsGuideline1: "Respect speaking turns and summarize before rebutting.",
    roomsGuideline2: "Use claims, reasons, and counterexamples; avoid personal attacks.",
    roomsGuideline3: "Welcome bilingual participation and clarify key terms when needed.",
    roomsGuideline4: "If room traffic is high, create breakout groups and report back.",
    roomsListHeading: "Available 24/7 Rooms",
    roomsOpenBadge: "24/7 Open",
    roomsMetaTitle: "Metaethics Room",
    roomsMetaBody: "Truth-aptness, realism, expressivism, error theory, and grounding questions.",
    roomsMetaQ1: "Are moral claims truth-apt?",
    roomsMetaQ2: "What would make moral truths true?",
    roomsNormativeTitle: "Normative Ethics Room",
    roomsNormativeBody: "Consequentialism, deontology, virtue ethics, contractualism, and care ethics.",
    roomsNormativeQ1: "What makes actions right or wrong?",
    roomsNormativeQ2: "How should principles handle hard cases?",
    roomsPracticalTitle: "Practical Ethics Room",
    roomsPracticalBody: "AI, bioethics, climate ethics, education ethics, and policy decisions.",
    roomsPracticalQ1: "How should we trade off competing harms?",
    roomsPracticalQ2: "Which constraints should policy never cross?",
    roomsMetaphysicsTitle: "Metaphysics Room",
    roomsMetaphysicsBody: "Identity, causation, modality, free will, and social ontology debates.",
    roomsMetaphysicsQ1: "What kinds of things fundamentally exist?",
    roomsMetaphysicsQ2: "How should we think about persons over time?",
    roomsEpistemologyTitle: "Epistemology Room",
    roomsEpistemologyBody: "Knowledge, justification, testimony, disagreement, and uncertainty.",
    roomsEpistemologyQ1: "What justifies belief under deep disagreement?",
    roomsEpistemologyQ2: "How should we revise confidence levels?",
    roomsFreeTitle: "Free Discussion Room",
    roomsFreeBody: "Cross-topic conversation, reading groups, and open problem sessions.",
    roomsFreeQ1: "What question is most urgent for public life today?",
    roomsFreeQ2: "Which argument changed your view this week?",
    roomsJoinBtn: "Join Room",
    roomsCtaTitle: "Want Structured Preparation First?",
    roomsCtaBody: "Review the rulebook and casebook, then enter rooms with shared norms and sharper questions.",
    roomsCtaBtn: "Open Resources",

    joinHeroKicker: "Build CHSEB Together",
    joinHeroTitle: "Volunteer and Judge Recruitment",
    joinHeroSubtitle: "CHSEB is hiring volunteers to run tournaments and judges with strong backgrounds in philosophy, ethics, or related disciplines.",
    joinRolesHeading: "Open Roles",
    joinRoleOpsTitle: "Tournament Operations Volunteer",
    joinRoleOpsBody: "Support scheduling, room moderation, team check-in, scoring logistics, and communications.",
    joinRoleJudgeTitle: "Philosophy Judge",
    joinRoleJudgeBody: "Evaluate rounds with explicit attention to argument quality, conceptual clarity, and ethical depth.",
    joinRoleTrainingTitle: "Coach and Training Volunteer",
    joinRoleTrainingBody: "Help onboard new schools, run mock rounds, and train students in constructive dialogue norms.",
    joinJudgeHeading: "Preferred Judge Profile (Philosophy Background)",
    joinJudgeReq1: "Background in philosophy, ethics, political theory, law, or closely related fields.",
    joinJudgeReq2: "Capacity to evaluate argument structure rather than rhetorical speed.",
    joinJudgeReq3: "Comfort engaging plural perspectives without lowering analytic rigor.",
    joinJudgeReq4: "Bilingual fluency (English and Mandarin) is strongly welcomed but not mandatory.",
    joinVolunteerHeading: "What Volunteers Help Deliver",
    joinVolunteer1Title: "Pre-Event Setup",
    joinVolunteer1Body: "Calendar coordination, judge calibration calls, and technical checks.",
    joinVolunteer2Title: "Tournament Day",
    joinVolunteer2Body: "Session moderation, scoring workflow support, and participant assistance.",
    joinVolunteer3Title: "Post-Event Follow Up",
    joinVolunteer3Body: "Feedback summaries, educational debriefs, and regional growth planning.",
    joinFormHeading: "Apply to Join CHSEB",
    joinFormIntro: "Submit this form to open a prefilled email application to the CHSEB team.",
    joinFieldRole: "Role",
    joinRoleChoose: "Select one",
    joinRoleOptionOps: "Operations Volunteer",
    joinRoleOptionJudge: "Philosophy Judge",
    joinRoleOptionBoth: "Both",
    joinFieldName: "Full Name",
    joinFieldEmail: "Email",
    joinFieldAffiliation: "Affiliation",
    joinFieldBackground: "Philosophy / Ethics Background",
    joinFieldAvailability: "Availability",
    joinFieldMessage: "Additional Message",
    joinFormSubmit: "Generate Application Email",
    joinContactHeading: "Direct Contact",
    joinContactVolunteerTitle: "Volunteer Desk",
    joinContactVolunteerBody: "For operations, coaching support, and event logistics volunteering.",
    joinContactJudgeTitle: "Judge Recruitment",
    joinContactJudgeBody: "For philosophy judges, rubric calibration, and academic advisory participation.",
    joinCtaTitle: "Prepare with Rulebook and Casebook",
    joinCtaBody: "Review CHSEB materials to align your judging and volunteering with shared standards.",
    joinCtaBtn: "Open Resources",
    joinMailtoSubject: "CHSEB Volunteer/Judge Application",
    joinMailtoRole: "Role",
    joinMailtoName: "Name",
    joinMailtoEmail: "Email",
    joinMailtoAffiliation: "Affiliation",
    joinMailtoBackground: "Philosophy / Ethics Background",
    joinMailtoAvailability: "Availability",
    joinMailtoMessage: "Additional Message",
    joinMailtoRoleOps: "Operations Volunteer",
    joinMailtoRoleJudge: "Philosophy Judge",
    joinMailtoRoleBoth: "Both",
    joinMailtoRoleUnknown: "Not specified",

    resourcesHeroKicker: "Downloads and Teaching Materials",
    resourcesHeroTitle: "Rulebook and Casebook",
    resourcesHeroSubtitle: "Access bilingual CHSEB documents for team preparation, school hosting, and classroom discussion.",
    resourcesDownloadHeading: "Download Center",
    resourcesDownloadIntro: "Choose language-specific files below:",
    resourcesRulebookEnTitle: "CHSEB Rulebook (English)",
    resourcesRulebookEnBody: "Competition format, judging standards, etiquette norms, and tournament operations guide.",
    resourcesRulebookZhTitle: "CHSEB Rulebook (Mandarin)",
    resourcesRulebookZhBody: "Mandarin guide to round format, judging criteria, and tournament operations.",
    resourcesCasebookEnTitle: "CHSEB Casebook (English)",
    resourcesCasebookEnBody: "Practice ethics cases with framing questions and stakeholder notes.",
    resourcesCasebookZhTitle: "CHSEB Casebook (Mandarin)",
    resourcesCasebookZhBody: "Mandarin practice cases with framing prompts and stakeholder analysis cues.",
    resourcesDownloadBtn: "Download",
    resourcesUseHeading: "How Schools Use These Materials",
    resourcesUse1Title: "Coach Preparation",
    resourcesUse1Body: "Coaches use the rulebook to align round timing, assessment, and dialogue norms.",
    resourcesUse2Title: "Team Practice",
    resourcesUse2Body: "Students rehearse with casebook prompts and generate evidence-backed arguments.",
    resourcesUse3Title: "Regional Readiness",
    resourcesUse3Body: "Schools calibrate judges and moderators using shared standards before tournaments.",
    resourcesVersionHeading: "Version Notes",
    resourcesVersion1Label: "Edition",
    resourcesVersion1Body: "2026 Pilot Edition for school and regional implementation.",
    resourcesVersion2Label: "Language Coverage",
    resourcesVersion2Body: "English and Mandarin files are aligned for bilingual coaching and training.",
    resourcesVersion3Label: "Update Cycle",
    resourcesVersion3Body: "Casebook updates are released each season before regional rounds begin.",
    resourcesCtaTitle: "Need Registration Support?",
    resourcesCtaBody: "Visit the registration and contact page for team sign-up pathways and direct inquiry channels.",
    resourcesCtaBtn: "Go to Registration & Contact",

    registerHeroKicker: "Join CHSEB",
    registerHeroTitle: "Registration and Contact",
    registerHeroSubtitle: "Register school teams, join the judge pool, or contact organizers for implementation support.",
    registerPathwaysHeading: "Participation Pathways",
    registerPathway1Title: "Student Teams",
    registerPathway1Body: "Schools may register one or more 3-5 student teams with a coach advisor.",
    registerPathway2Title: "Judges & Moderators",
    registerPathway2Body: "Teachers, graduate students, and trained volunteers can apply as judges or moderators.",
    registerPathway3Title: "Regional Hosts",
    registerPathway3Body: "Schools and education groups can host regional rounds with CHSEB support materials.",
    registerStepsHeading: "Registration Steps",
    registerStep1: "Download the bilingual rulebook and casebook from Resources.",
    registerStep2: "Prepare school/team information and a coach contact person.",
    registerStep3: "Submit inquiry email with your intended participation pathway.",
    registerStep4: "CHSEB staff reply with confirmation timeline and onboarding packet.",
    registerContactHeading: "Contact Channels",
    registerContactGeneralTitle: "General Inquiry",
    registerContactGeneralBody: "For program overview, partnerships, and implementation questions.",
    registerContactRegTitle: "Registration Desk",
    registerContactRegBody: "For team sign-up, judge applications, and hosting requests.",
    registerFormHeading: "Quick Inquiry Form",
    registerFormIntro: "This form opens your email client with a prefilled CHSEB inquiry template.",
    registerFieldOrg: "School / Organization",
    registerFieldName: "Contact Name",
    registerFieldEmail: "Email",
    registerFieldPathway: "Participation Pathway",
    registerPathwayChoose: "Select one",
    registerPathwayOptionTeam: "Student Team",
    registerPathwayOptionJudge: "Judge / Moderator",
    registerPathwayOptionHost: "Regional Host",
    registerFieldMessage: "Message",
    registerFormSubmit: "Generate Inquiry Email",
    registerMailtoSubject: "CHSEB Registration Inquiry",
    registerMailtoOrg: "School / Organization",
    registerMailtoName: "Contact Name",
    registerMailtoEmail: "Email",
    registerMailtoPathway: "Participation Pathway",
    registerMailtoMessage: "Message",
    registerMailtoPathwayTeam: "Student Team",
    registerMailtoPathwayJudge: "Judge / Moderator",
    registerMailtoPathwayHost: "Regional Host",
    registerMailtoPathwayUnknown: "Not specified",
    registerCtaTitle: "Need Rulebook and Casebook Files First?",
    registerCtaBody: "Open the resources page to download bilingual documents before submitting your inquiry.",
    registerCtaBtn: "Open Resources"
  },
  zh: {
    titleHome: "中国高中伦理思辨赛 | 协作式伦理对话",
    titleStructure: "赛制结构 | 中国高中伦理思辨赛",
    titleDiscourse: "公共论辩 | 中国高中伦理思辨赛",
    titleResources: "资源下载 | 中国高中伦理思辨赛",
    titleRegister: "报名与联系 | 中国高中伦理思辨赛",
    titleMetaethics: "元伦理地图 | 中国高中伦理思辨赛",
    titleRooms: "24 小时讨论室 | 中国高中伦理思辨赛",
    titleJoinUs: "加入我们 | 中国高中伦理思辨赛",
    brandName: "中国高中伦理思辨赛",
    brandTag: "面向高中生的协作式伦理公共对话",
    navHome: "首页",
    navStructure: "赛制结构",
    navDiscourse: "公共论辩",
    navResources: "资源下载",
    navRegister: "报名与联系",
    navMetaethics: "元伦理地图",
    navRooms: "24 小时讨论室",
    navJoinUs: "加入我们",
    footerLine: "中国高中伦理思辨赛（CHSEB）致力于培养下一代具备理性、尊重与多元意识的公共对话能力。",

    homeHeroKicker: "全国性伦理公共对话项目",
    homeHeroTitle: "中国高中伦理思辨赛",
    homeHeroSubtitle: "面向中国学生的 National High School Ethics Bowl 本土化版本，核心不是辩论取胜，而是协作探究。",
    homeHeroCtaPrimary: "查看赛制结构",
    homeHeroCtaSecondary: "阅读公共论辩原则",
    homeValuesHeading: "CHSEB 的核心特色",
    homeValue1: "对话优先：双方共同澄清伦理复杂性。",
    homeValue2: "理由优先于修辞：观点必须经得起公共检验。",
    homeValue3: "公民学习：在分歧中保持尊重而不轻蔑。",
    homeMissionTitle: "为什么是 CHSEB",
    homeMissionBody: "CHSEB 延续 NHSEB 的精神，在中国学校语境中强调严谨伦理推理、智识谦逊，以及跨差异的公共对话能力。",
    homePillarsHeading: "三大支柱",
    homePillar1Title: "协作探究",
    homePillar1Body: "学生将对手视为共同求真的伙伴，而非必须击败的对象。",
    homePillar2Title: "公共理性",
    homePillar2Body: "论证以清晰度、公平性与可公共检验性为标准。",
    homePillar3Title: "公民想象力",
    homePillar3Body: "围绕政策与个人伦理问题，思考其长期社会影响。",
    homeDiscourseHeading: "以公共论辩为核心",
    homeDiscourseBody: "受迈克尔·桑德尔的公共哲学与哈贝马斯的话语伦理学启发，CHSEB 训练学生以他人可审视、可质疑、可修正的方式提出理由。",
    homeSandelTitle: "桑德尔：公共空间中的道德反思",
    homeSandelBody: "队伍以共享的公民语言检验价值，追问在具体情境中正义、责任与尊严意味着什么。",
    homeHabermasTitle: "哈贝马斯：更好的论证与共同正当性",
    homeHabermasBody: "赛场强调互惠推理、积极倾听与观点可修正性，让更好的理由发挥作用。",
    homeSeasonHeading: "赛季一览",
    homeSeason1Title: "案例集发布",
    homeSeason1Body: "向所有参赛队发布同一套现实伦理案例。",
    homeSeason2Title: "区域对话赛",
    homeSeason2Body: "学校参加有主持、有评分的轮次，重点考察分析、回应与互动质量。",
    homeSeason3Title: "全国总决赛",
    homeSeason3Body: "优秀队伍进入半决赛与决赛，并参与公开展示对话。",
    homeGetStartedHeading: "快速开始",
    homeGetStartedRegisterTitle: "报名与联系",
    homeGetStartedRegisterBody: "查看队伍、评委与学校的参与路径，并提交报名咨询。",
    homeGetStartedRegisterBtn: "打开报名页面",
    homeGetStartedResourcesTitle: "规则手册与案例集下载",
    homeGetStartedResourcesBody: "下载中英文双语资料，用于课堂训练与赛事准备。",
    homeGetStartedResourcesBtn: "查看下载",
    homeGetStartedMetaethicsTitle: "元伦理关系图",
    homeGetStartedMetaethicsBody: "通过互动网络理解道德认知主义与非认知主义及其核心争议。",
    homeGetStartedMetaethicsBtn: "打开元伦理地图",
    homeGetStartedRoomsTitle: "24 小时讨论室",
    homeGetStartedRoomsBody: "加入始终开放的主题房间，持续讨论元伦理、规范伦理与实践伦理。",
    homeGetStartedRoomsBtn: "进入讨论室",
    homeGetStartedJoinUsTitle: "志愿者与评委招募",
    homeGetStartedJoinUsBody: "申请参与赛事运营，或以哲学背景评委身份加入 CHSEB。",
    homeGetStartedJoinUsBtn: "打开加入我们页面",
    homeJoinTitle: "面向学生、教师与学校",
    homeJoinBody: "CHSEB 支持中英双语语境下的高质量伦理思辨与公共表达。",
    homeJoinBtn: "查看完整赛制结构",

    structureHeroKicker: "比赛设计",
    structureHeroTitle: "CHSEB 一场比赛如何进行",
    structureHeroSubtitle: "每场比赛都是结构化伦理对话。队伍通过陈述、回应与提问，共同深化理解。",
    structureFormatHeading: "轮次流程",
    structureFormatIntro: "标准轮次包括四个阶段：",
    structurePhase1Title: "1. 开场分析（6 分钟）",
    structurePhase1Body: "陈述方说明案例背景、伦理张力与可辩护立场。",
    structurePhase2Title: "2. 评论与提问（8 分钟）",
    structurePhase2Body: "回应方检验前提、提出异议，并补充替代视角。",
    structurePhase3Title: "3. 开放对话（6 分钟）",
    structurePhase3Body: "双方讨论一致与分歧，并尝试修正与深化论证。",
    structurePhase4Title: "4. 结语反思（各 2 分钟）",
    structurePhase4Body: "双方说明哪些观点发生变化、哪些问题仍有争议及其原因。",
    structureRolesHeading: "赛场角色",
    structureRoleModeratorTitle: "主持人",
    structureRoleModeratorBody: "把控时间、维护文明规范，并保障发言平衡。",
    structureRoleJudgesTitle: "评委",
    structureRoleJudgesBody: "评估推理质量、倾听能力、回应能力与伦理深度。",
    structureRoleTeamsTitle: "参赛队伍",
    structureRoleTeamsBody: "以共同探究者身份参与：尖锐质疑、善意回应、公开修正。",
    structureRubricHeading: "评分维度",
    structureRubricColCriterion: "维度",
    structureRubricColWhat: "评委关注点",
    structureRubric1Criterion: "伦理分析",
    structureRubric1What: "能否识别相关主体、原则、权衡与后果。",
    structureRubric2Criterion: "理由质量",
    structureRubric2What: "论证是否清晰、相关且具公共可辩护性。",
    structureRubric3Criterion: "对话参与",
    structureRubric3What: "是否积极倾听、直接回应并推动讨论前进。",
    structureRubric4Criterion: "智识谦逊",
    structureRubric4What: "能否承认不确定性并在充分理由下修正立场。",
    structureRubric5Criterion: "公民论辩",
    structureRubric5What: "全过程是否保持尊重、互惠与程序公平。",
    structureTournamentHeading: "赛事结构",
    structureTournament1Title: "预赛轮",
    structureTournament1Body: "所有队伍进行多轮积分赛，与不同对手交锋。",
    structureTournament2Title: "半决赛",
    structureTournament2Body: "依据累计评分与赛程强度选出晋级队伍。",
    structureTournament3Title: "决赛轮",
    structureTournament3Body: "决赛队在评审团与公众面前进行案例对话。",
    structureTimelineHeading: "建议年度时间表",
    structureTimeline1Label: "9 月",
    structureTimeline1Text: "发布案例集并开展教练培训。",
    structureTimeline2Label: "10-12 月",
    structureTimeline2Text: "校内训练赛与区域资格赛。",
    structureTimeline3Label: "1-2 月",
    structureTimeline3Text: "区域锦标赛与评委标准校准。",
    structureTimeline4Label: "3 月",
    structureTimeline4Text: "全国半决赛与决赛展示。",
    structureCtaTitle: "准备在学校组建队伍？",
    structureCtaBody: "你可以以本赛制为基线，并结合当地语言环境、校历与区域条件进行调整。",
    structureCtaBtn: "返回首页",

    discourseHeroKicker: "哲学基础",
    discourseHeroTitle: "CHSEB 的公共论辩",
    discourseHeroSubtitle: "CHSEB 将伦理推理视为公民实践：在不去人化对方的前提下学习有效分歧。",
    discourseFrameHeading: "两条核心理论路径",
    discourseSandelTitle: "迈克尔·桑德尔：公民道德探究",
    discourseSandelBody: "桑德尔强调公共生活无法回避道德问题。在 CHSEB 中，队伍需要比较不同善观念，并用共享公民语言加以论证。",
    discourseHabermasTitle: "尤尔根·哈贝马斯：话语伦理",
    discourseHabermasBody: "哈贝马斯认为，正当性来源于包容且给出理由的对话。CHSEB 的轮次设计要求观点接受公共审视，而非依赖修辞压制。",
    discourseTheoriesHeading: "公共论辩的扩展理论视角",
    discourseTheoryRawlsTitle: "罗尔斯：公共理性与互惠",
    discourseTheoryRawlsBody: "在涉及基本制度的争议中，学生需要检验理由是否可在合理多元中被共享。",
    discourseTheoryArendtTitle: "阿伦特：行动、多元与公共领域",
    discourseTheoryArendtBody: "公共判断产生于不同主体共同现身、发言并为共同世界承担责任的过程。",
    discourseTheoryMouffeTitle: "墨菲：竞争性民主",
    discourseTheoryMouffeBody: "冲突无法被消除，关键是把敌我对立转化为共同规则下的正当对手关系。",
    discourseTheoryFrickerTitle: "弗里克：认知不正义",
    discourseTheoryFrickerBody: "CHSEB 训练学生识别发言可信度不平等与理解资源缺失造成的不公。",
    discourseTheoryMillTitle: "密尔：言论自由与纠错机制",
    discourseTheoryMillBody: "即便不受欢迎的观点也能改进求真过程，前提是讨论空间能保护参与者免受滥用。",
    discourseTheoryConfucianTitle: "儒家争论：和而不同、谏诤与角色伦理",
    discourseTheoryConfucianBody: "学生探讨何时应以和谐维系对话，何时应以直言批评履行道德责任。",
    discourseDebatesHeading: "公共论辩中的核心争议",
    discourseDebate1Title: "文明表达 vs. 正义紧迫性",
    discourseDebate1Body: "公共讨论应优先维持平和文明，还是在不公紧迫时允许更激烈表达？",
    discourseDebate2Title: "中立性 vs. 实质德性塑造",
    discourseDebate2Body: "制度应在善观念间保持中立，还是应主动培育特定公民德性？",
    discourseDebate3Title: "协商共识 vs. 持续争辩",
    discourseDebate3Body: "公共理性是以达成共识为中心，还是本质上包含长期且原则化的竞争？",
    discourseDebate4Title: "开放平台 vs. 伤害控制",
    discourseDebate4Body: "公共空间应如何在开放性与防止骚扰、虚假信息和压制之间取得平衡？",
    discourseNormsHeading: "伦理公共对话规范",
    discourseNorm1Title: "互惠性",
    discourseNorm1Body: "给出对方能够进入讨论的理由，而非只服务己方口号。",
    discourseNorm2Title: "善意阐释",
    discourseNorm2Body: "在批评前，先准确、完整地陈述对方论点。",
    discourseNorm3Title: "证据与原则",
    discourseNorm3Body: "将案例证据与伦理原则对应，避免无依据断言。",
    discourseNorm4Title: "可修正性",
    discourseNorm4Body: "清楚说明什么证据或理由会促使你改变观点。",
    discoursePracticeHeading: "学生将获得的能力",
    discoursePractice1: "把“观点冲突”与“人身不尊重”区分开来。",
    discoursePractice2: "在政策难题中平衡权利、福祉与公平。",
    discoursePractice3: "将私人信念转化为公共可讨论理由。",
    discoursePractice4: "在不抹平真实分歧的前提下寻找共同基础。",
    discourseProtocolHeading: "建议对话协议",
    discourseProtocolStep1: "在表态前先澄清核心伦理问题。",
    discourseProtocolStep2: "识别关键利益相关者及其应得之物。",
    discourseProtocolStep3: "用反例和边界情境检验论证强度。",
    discourseProtocolStep4: "以暂时结论与开放问题收束讨论。",
    discourseCtaTitle: "继续进入元伦理与实时讨论",
    discourseCtaBody: "从公共论辩理论出发，延伸到元伦理关系图与 24 小时主题讨论室。",
    discourseCtaBtnMeta: "打开元伦理地图",
    discourseCtaBtnRooms: "打开 24 小时讨论室",

    metaHeroKicker: "互动元伦理",
    metaHeroTitle: "道德认知主义 vs. 非认知主义",
    metaHeroSubtitle: "通过互动网络查看各元伦理理论如何互相支持、冲突，并依赖更深层的真理与动机前提。",
    metaOverviewHeading: "核心区分",
    metaOverviewCogTitle: "道德认知主义",
    metaOverviewCogBody: "道德判断表达信念并具有真假条件。不同理论分歧在于是否存在真的道德命题。",
    metaOverviewNonCogTitle: "道德非认知主义",
    metaOverviewNonCogBody: "道德判断主要表达态度、规范承诺或指令，而非通常意义上的真假可判定信念。",
    metaIssuesHeading: "决定性底层议题",
    metaIssue1: "真值制造者最大化：是否每个真命题都需要对应的本体论根据。",
    metaIssue2: "“奇异性论证”对客观道德性质的挑战。",
    metaIssue3: "表达主义语义学面临的弗雷格-吉奇嵌入问题。",
    metaIssue4: "动机内在主义：真诚道德判断是否必然带来行动动机。",
    metaIssue5: "道德分歧究竟是信念冲突、态度冲突，还是二者兼具。",
    metaMapHeading: "理论关系网络",
    metaMapIntro: "点击任意节点，查看其核心主张、依赖条件与可能证伪路径。",
    metaPanelHeading: "聚焦分析",
    metaPanelDefaultTitle: "请选择一个理论节点",
    metaPanelDefaultBody: "点击网络中的节点可查看该理论的关键主张与潜在反证条件。",
    metaCtaTitle: "把这些争论带入实时讨论",
    metaCtaBody: "从关系图继续进入 24 小时哲学讨论室，进行跨时区持续对话。",
    metaCtaBtn: "打开 24 小时讨论室",

    roomsHeroKicker: "始终开放的对话空间",
    roomsHeroTitle: "24 小时在线讨论室",
    roomsHeroSubtitle: "按主题加入持续开放的哲学讨论房间，每个房间都配有引导问题。",
    roomsGuidelinesHeading: "讨论室规范",
    roomsGuideline1: "尊重发言轮次，反驳前先做准确复述。",
    roomsGuideline2: "用主张、理由与反例推进讨论，避免人身攻击。",
    roomsGuideline3: "欢迎中英双语参与，必要时先澄清关键术语。",
    roomsGuideline4: "人数过多时可自发分组，并回到主会场汇报结论。",
    roomsListHeading: "可加入的 24 小时房间",
    roomsOpenBadge: "24 小时开放",
    roomsMetaTitle: "元伦理讨论室",
    roomsMetaBody: "讨论真值适格性、实在论、表达主义、错误理论与奠基问题。",
    roomsMetaQ1: "道德命题是否具有真假？",
    roomsMetaQ2: "道德真理若存在，其根据是什么？",
    roomsNormativeTitle: "规范伦理讨论室",
    roomsNormativeBody: "聚焦后果论、义务论、德性伦理、契约论与关怀伦理。",
    roomsNormativeQ1: "行为正确与错误的根本标准是什么？",
    roomsNormativeQ2: "原则在困难情境中应如何适用？",
    roomsPracticalTitle: "实践伦理讨论室",
    roomsPracticalBody: "围绕 AI、生命伦理、气候伦理、教育伦理与政策选择。",
    roomsPracticalQ1: "如何权衡不同类型的伤害与风险？",
    roomsPracticalQ2: "哪些政策底线不应被突破？",
    roomsMetaphysicsTitle: "形而上学讨论室",
    roomsMetaphysicsBody: "讨论同一性、因果、模态、自由意志与社会本体论。",
    roomsMetaphysicsQ1: "什么才是最基本的存在者？",
    roomsMetaphysicsQ2: "我们应如何理解“同一人跨时间存在”？",
    roomsEpistemologyTitle: "认识论讨论室",
    roomsEpistemologyBody: "讨论知识、证成、证言、分歧与不确定性。",
    roomsEpistemologyQ1: "深度分歧下如何证成信念？",
    roomsEpistemologyQ2: "面对新证据时应如何更新置信度？",
    roomsFreeTitle: "自由讨论室",
    roomsFreeBody: "跨主题自由交流、读书会与开放问题工作坊。",
    roomsFreeQ1: "当下公共生活最紧迫的哲学问题是什么？",
    roomsFreeQ2: "本周哪条论证最改变你的看法？",
    roomsJoinBtn: "进入房间",
    roomsCtaTitle: "想先做结构化准备？",
    roomsCtaBody: "先阅读规则手册与案例集，再进入讨论室可提高对话质量。",
    roomsCtaBtn: "打开资源页",

    joinHeroKicker: "共建 CHSEB",
    joinHeroTitle: "志愿者与评委招募",
    joinHeroSubtitle: "CHSEB 正在招募赛事志愿者，以及具备哲学、伦理学或相关学术背景的评委。",
    joinRolesHeading: "开放岗位",
    joinRoleOpsTitle: "赛事运营志愿者",
    joinRoleOpsBody: "协助赛程安排、房间管理、队伍签到、评分流程与沟通协调。",
    joinRoleJudgeTitle: "哲学评委",
    joinRoleJudgeBody: "重点从论证质量、概念清晰度与伦理深度等方面评估比赛表现。",
    joinRoleTrainingTitle: "培训与教练支持志愿者",
    joinRoleTrainingBody: "协助学校入门、组织模拟轮次，并训练建设性对话规范。",
    joinJudgeHeading: "评委优先画像（哲学背景）",
    joinJudgeReq1: "具有哲学、伦理学、政治理论、法学或相近学科背景。",
    joinJudgeReq2: "能够依据论证结构而非表达速度进行评判。",
    joinJudgeReq3: "可在保持分析严谨的同时公平处理多元立场。",
    joinJudgeReq4: "欢迎中英双语能力（非硬性要求）。",
    joinVolunteerHeading: "志愿者主要支持内容",
    joinVolunteer1Title: "赛前准备",
    joinVolunteer1Body: "赛事日程协调、评委校准会议与技术测试。",
    joinVolunteer2Title: "比赛当日",
    joinVolunteer2Body: "轮次管理、评分流程支持与参赛者协助。",
    joinVolunteer3Title: "赛后跟进",
    joinVolunteer3Body: "反馈整理、教学复盘与区域发展规划。",
    joinFormHeading: "申请加入 CHSEB",
    joinFormIntro: "提交后将自动生成一封预填申请邮件发送给 CHSEB 团队。",
    joinFieldRole: "申请角色",
    joinRoleChoose: "请选择",
    joinRoleOptionOps: "赛事运营志愿者",
    joinRoleOptionJudge: "哲学评委",
    joinRoleOptionBoth: "两者都申请",
    joinFieldName: "姓名",
    joinFieldEmail: "邮箱",
    joinFieldAffiliation: "所属机构",
    joinFieldBackground: "哲学 / 伦理学背景",
    joinFieldAvailability: "可参与时间",
    joinFieldMessage: "补充说明",
    joinFormSubmit: "生成申请邮件",
    joinContactHeading: "直接联系",
    joinContactVolunteerTitle: "志愿者联络",
    joinContactVolunteerBody: "用于赛事运营、培训支持与活动志愿服务咨询。",
    joinContactJudgeTitle: "评委招募联络",
    joinContactJudgeBody: "用于哲学评委申请、评分标准校准与学术顾问参与。",
    joinCtaTitle: "先阅读规则手册和案例集",
    joinCtaBody: "建议先熟悉 CHSEB 材料，以便在评审与志愿工作中保持统一标准。",
    joinCtaBtn: "打开资源页",
    joinMailtoSubject: "CHSEB 志愿者/评委申请",
    joinMailtoRole: "申请角色",
    joinMailtoName: "姓名",
    joinMailtoEmail: "邮箱",
    joinMailtoAffiliation: "所属机构",
    joinMailtoBackground: "哲学 / 伦理学背景",
    joinMailtoAvailability: "可参与时间",
    joinMailtoMessage: "补充说明",
    joinMailtoRoleOps: "赛事运营志愿者",
    joinMailtoRoleJudge: "哲学评委",
    joinMailtoRoleBoth: "两者都申请",
    joinMailtoRoleUnknown: "未填写",

    resourcesHeroKicker: "下载与教学资料",
    resourcesHeroTitle: "规则手册与案例集",
    resourcesHeroSubtitle: "获取 CHSEB 中英双语文件，用于队伍备赛、学校主办与课堂讨论。",
    resourcesDownloadHeading: "下载中心",
    resourcesDownloadIntro: "请选择对应语言版本：",
    resourcesRulebookEnTitle: "CHSEB 规则手册（英文）",
    resourcesRulebookEnBody: "包含赛制流程、评分标准、赛场规范与赛事组织说明。",
    resourcesRulebookZhTitle: "CHSEB 规则手册（中文）",
    resourcesRulebookZhBody: "中文版本涵盖轮次流程、评分维度与赛事运行规范。",
    resourcesCasebookEnTitle: "CHSEB 案例集（英文）",
    resourcesCasebookEnBody: "含训练案例、引导问题与关键利益相关者说明。",
    resourcesCasebookZhTitle: "CHSEB 案例集（中文）",
    resourcesCasebookZhBody: "中文案例集包含情境设定、讨论线索与伦理分析提示。",
    resourcesDownloadBtn: "下载",
    resourcesUseHeading: "学校如何使用这些资料",
    resourcesUse1Title: "教练准备",
    resourcesUse1Body: "教练依据规则手册统一轮次计时、评分逻辑与对话规范。",
    resourcesUse2Title: "队伍训练",
    resourcesUse2Body: "学生围绕案例集进行模拟陈述、回应与证据化推理。",
    resourcesUse3Title: "区域赛准备",
    resourcesUse3Body: "学校使用统一标准进行评委与主持人校准。",
    resourcesVersionHeading: "版本说明",
    resourcesVersion1Label: "版本",
    resourcesVersion1Body: "2026 试点版，适用于校内与区域实施。",
    resourcesVersion2Label: "语言覆盖",
    resourcesVersion2Body: "中英文内容已做对应，便于双语训练与教学协作。",
    resourcesVersion3Label: "更新周期",
    resourcesVersion3Body: "每赛季区域赛前发布最新案例集。",
    resourcesCtaTitle: "需要报名支持？",
    resourcesCtaBody: "前往报名与联系页面，查看参赛路径并直接发送咨询。",
    resourcesCtaBtn: "前往报名与联系",

    registerHeroKicker: "加入 CHSEB",
    registerHeroTitle: "报名与联系",
    registerHeroSubtitle: "可报名学校队伍、加入评委池，或联系组委会获得落地支持。",
    registerPathwaysHeading: "参与路径",
    registerPathway1Title: "学生队伍",
    registerPathway1Body: "学校可在教练带领下报名 1 支或多支 3-5 人队伍。",
    registerPathway2Title: "评委与主持",
    registerPathway2Body: "教师、研究生与受训志愿者可申请评委或主持岗位。",
    registerPathway3Title: "区域主办方",
    registerPathway3Body: "学校与教育机构可在 CHSEB 支持下主办区域轮次。",
    registerStepsHeading: "报名步骤",
    registerStep1: "先在资源页下载中英双语规则手册与案例集。",
    registerStep2: "准备学校/队伍信息与教练联系人资料。",
    registerStep3: "按参与路径发送报名咨询邮件。",
    registerStep4: "组委会回复确认时间线与入门材料包。",
    registerContactHeading: "联系渠道",
    registerContactGeneralTitle: "综合咨询",
    registerContactGeneralBody: "用于项目介绍、合作洽谈与实施问题。",
    registerContactRegTitle: "报名专线",
    registerContactRegBody: "用于队伍报名、评委申请与区域主办申请。",
    registerFormHeading: "快速咨询表单",
    registerFormIntro: "提交后将自动打开邮件客户端，并生成 CHSEB 预填咨询邮件。",
    registerFieldOrg: "学校 / 机构",
    registerFieldName: "联系人姓名",
    registerFieldEmail: "邮箱",
    registerFieldPathway: "参与路径",
    registerPathwayChoose: "请选择",
    registerPathwayOptionTeam: "学生队伍",
    registerPathwayOptionJudge: "评委 / 主持",
    registerPathwayOptionHost: "区域主办方",
    registerFieldMessage: "补充说明",
    registerFormSubmit: "生成咨询邮件",
    registerMailtoSubject: "CHSEB 报名咨询",
    registerMailtoOrg: "学校 / 机构",
    registerMailtoName: "联系人姓名",
    registerMailtoEmail: "邮箱",
    registerMailtoPathway: "参与路径",
    registerMailtoMessage: "补充说明",
    registerMailtoPathwayTeam: "学生队伍",
    registerMailtoPathwayJudge: "评委 / 主持",
    registerMailtoPathwayHost: "区域主办方",
    registerMailtoPathwayUnknown: "未填写",
    registerCtaTitle: "还没下载规则手册和案例集？",
    registerCtaBody: "提交咨询前，可先到资源页下载双语资料。",
    registerCtaBtn: "打开资源页"
  }
};

const THEORY_GRAPH_SPEC = {
  nodes: [
    { id: "cognitivism", x: 24, y: 20, type: "theory" },
    { id: "noncognitivism", x: 74, y: 20, type: "theory" },
    { id: "realist", x: 16, y: 38, type: "theory" },
    { id: "errorTheory", x: 31, y: 43, type: "theory" },
    { id: "constructivism", x: 47, y: 38, type: "theory" },
    { id: "expressivism", x: 67, y: 41, type: "theory" },
    { id: "prescriptivism", x: 83, y: 41, type: "theory" },
    { id: "quasiRealism", x: 74, y: 57, type: "theory" },
    { id: "truthmakerMax", x: 20, y: 67, type: "issue" },
    { id: "queerness", x: 35, y: 72, type: "issue" },
    { id: "fregeGeach", x: 59, y: 71, type: "issue" },
    { id: "motivationInt", x: 75, y: 71, type: "issue" },
    { id: "disagreement", x: 48, y: 84, type: "issue" }
  ],
  edges: [
    { from: "cognitivism", to: "realist" },
    { from: "cognitivism", to: "errorTheory" },
    { from: "cognitivism", to: "constructivism" },
    { from: "noncognitivism", to: "expressivism" },
    { from: "noncognitivism", to: "prescriptivism" },
    { from: "expressivism", to: "quasiRealism" },
    { from: "errorTheory", to: "truthmakerMax", type: "issue" },
    { from: "realist", to: "queerness", type: "issue" },
    { from: "constructivism", to: "truthmakerMax", type: "issue" },
    { from: "expressivism", to: "fregeGeach", type: "issue" },
    { from: "noncognitivism", to: "motivationInt", type: "issue" },
    { from: "cognitivism", to: "disagreement", type: "issue" },
    { from: "noncognitivism", to: "disagreement", type: "issue" },
    { from: "quasiRealism", to: "fregeGeach", type: "issue" }
  ]
};

const THEORY_NODE_COPY = {
  en: {
    cognitivism: {
      label: "Moral Cognitivism",
      title: "Moral Cognitivism",
      body: "Moral judgments express beliefs and are truth-apt. The dispute is whether any moral beliefs are true and what would make them true.",
      claims: [
        "If moral language lacks truth conditions entirely, cognitivism collapses.",
        "Cognitivism must explain the link between moral judgment and motivation."
      ]
    },
    noncognitivism: {
      label: "Moral Non-Cognitivism",
      title: "Moral Non-Cognitivism",
      body: "Moral discourse primarily expresses attitudes, commitments, or prescriptions rather than ordinary belief states.",
      claims: [
        "Strong if motivational internalism is best explained by attitude expression.",
        "Weak if moral disagreement is best modeled as genuine belief conflict."
      ]
    },
    realist: {
      label: "Realist Cognitivism",
      title: "Realist Cognitivism",
      body: "Some moral claims are objectively true because stance-independent moral facts exist.",
      claims: [
        "Strengthened if irreducible normative explanation is unavoidable.",
        "Pressured by queerness objections to robust moral properties."
      ]
    },
    errorTheory: {
      label: "Error Theory (Non-realist Cognitivism)",
      title: "Error Theory (Non-realist Cognitivism)",
      body: "Moral judgments are truth-apt beliefs, but all positive moral claims are systematically false.",
      claims: [
        "Non-realist cognitivism is false if Truthmaker Maximalism is true and no moral truthmakers exist.",
        "Error theory weakens if any substantive moral proposition is true."
      ]
    },
    constructivism: {
      label: "Constructivism",
      title: "Constructivism",
      body: "Moral truths are constructed from procedures of rational endorsement, agency, or public justification.",
      claims: [
        "If stance-independent moral facts exist, pure constructivism is incomplete.",
        "If no valid procedure can ground normativity, constructivism loses force."
      ]
    },
    expressivism: {
      label: "Expressivism",
      title: "Expressivism",
      body: "Moral statements function to express practical attitudes while preserving structured moral discourse.",
      claims: [
        "Must solve Frege-Geach to explain embedded logical contexts.",
        "Must explain disagreement as more than emotional clash."
      ]
    },
    prescriptivism: {
      label: "Prescriptivism",
      title: "Prescriptivism",
      body: "Moral language issues universalizable prescriptions rather than descriptive moral beliefs.",
      claims: [
        "Strong if directive use explains core moral speech acts.",
        "Pressured if descriptive truth-conditions are central to moral language."
      ]
    },
    quasiRealism: {
      label: "Quasi-Realism",
      title: "Quasi-Realism",
      body: "Attempts to recover realist-like moral talk from expressivist foundations without committing to robust moral ontology.",
      claims: [
        "Explains truth-talk pragmatically while retaining non-cognitivist roots.",
        "Pressured if realist semantics requires strict truthmakers."
      ]
    },
    truthmakerMax: {
      label: "Truthmaker Maximalism",
      title: "Truthmaker Maximalism",
      body: "Every true proposition requires an ontological truthmaker.",
      claims: [
        "If true, anti-realist views need a clear story for moral truthmakers.",
        "If false, some anti-realist semantics gains room."
      ]
    },
    queerness: {
      label: "Queerness Argument",
      title: "Queerness Argument",
      body: "Mackie-style objection that objective moral properties would be metaphysically and epistemically strange.",
      claims: [
        "Pushes against robust realism.",
        "Can be resisted via naturalist or non-naturalist realist replies."
      ]
    },
    fregeGeach: {
      label: "Frege-Geach Problem",
      title: "Frege-Geach Problem",
      body: "Challenge for non-cognitivism: preserve logical validity when moral statements occur in conditionals and negations.",
      claims: [
        "Any non-cognitivist theory must solve this to remain semantically stable.",
        "Hybrid and sophisticated expressivist models aim to answer it."
      ]
    },
    motivationInt: {
      label: "Motivation Internalism",
      title: "Motivation Internalism",
      body: "The thesis that sincere moral judgment is necessarily connected to motivation.",
      claims: [
        "Supports non-cognitivist explanations of moral language.",
        "But externalist cognitivist models may explain motivation contingently."
      ]
    },
    disagreement: {
      label: "Disagreement Problem",
      title: "Moral Disagreement Problem",
      body: "Whether deep moral disagreement is primarily about conflicting beliefs, attitudes, social functions, or all three.",
      claims: [
        "Cognitivism models disagreement as belief conflict over truth.",
        "Non-cognitivism models disagreement as practical-attitudinal incompatibility."
      ]
    }
  },
  zh: {
    cognitivism: {
      label: "道德认知主义",
      title: "道德认知主义",
      body: "道德判断表达信念并具有真假条件。核心分歧在于是否存在真的道德命题，以及其真值根据为何。",
      claims: [
        "若道德语言完全没有真值条件，认知主义将失去基础。",
        "认知主义需解释道德判断与行动动机之间的联系。"
      ]
    },
    noncognitivism: {
      label: "道德非认知主义",
      title: "道德非认知主义",
      body: "道德话语主要表达态度、承诺或指令，而非通常意义上的信念陈述。",
      claims: [
        "若动机内在主义最可由态度表达解释，则其优势上升。",
        "若道德分歧更像信念真伪冲突，其解释力会下降。"
      ]
    },
    realist: {
      label: "实在论认知主义",
      title: "实在论认知主义",
      body: "部分道德命题客观为真，因为存在独立于立场的道德事实。",
      claims: [
        "若不可还原的规范解释不可避免，实在论会更强。",
        "其压力来自“奇异性论证”等对客观道德性质的挑战。"
      ]
    },
    errorTheory: {
      label: "错误理论（非实在认知主义）",
      title: "错误理论（非实在认知主义）",
      body: "道德判断是可真可假的信念，但积极道德命题系统性为假。",
      claims: [
        "若真值制造者最大化为真且不存在道德真值制造者，非实在认知主义将面临证伪压力。",
        "若任一实质性道德命题为真，错误理论将显著削弱。"
      ]
    },
    constructivism: {
      label: "建构主义",
      title: "建构主义",
      body: "道德真理由理性程序、行动者承诺或公共正当化过程所建构。",
      claims: [
        "若存在立场独立的道德事实，纯建构主义可能不完整。",
        "若无可行程序能奠基规范性，建构主义会失去支撑。"
      ]
    },
    expressivism: {
      label: "表达主义",
      title: "表达主义",
      body: "道德语句主要表达实践态度，同时尝试保留规范推理结构。",
      claims: [
        "必须回应弗雷格-吉奇问题以解释嵌入语境的逻辑性。",
        "必须说明分歧不仅是情绪冲突。"
      ]
    },
    prescriptivism: {
      label: "规定主义",
      title: "规定主义",
      body: "道德语言主要发布可普遍化的行动指令，而非描述性道德信念。",
      claims: [
        "若道德言语核心是指导行动，其解释力增强。",
        "若描述性真值条件不可或缺，则其受压。"
      ]
    },
    quasiRealism: {
      label: "拟实在论",
      title: "拟实在论",
      body: "在表达主义框架下重建类似实在论的话语形式，而不承诺强本体论道德实体。",
      claims: [
        "尝试以语用方式保留“道德真理”话语。",
        "若实在语义要求严格真值制造者，其位置会变弱。"
      ]
    },
    truthmakerMax: {
      label: "真值制造者最大化",
      title: "真值制造者最大化",
      body: "每一个真命题都需要对应的本体论真值制造者。",
      claims: [
        "若成立，反实在论必须交代道德真值根据。",
        "若不成立，部分反实在论语义会获得空间。"
      ]
    },
    queerness: {
      label: "奇异性论证",
      title: "奇异性论证",
      body: "麦基式反驳：客观道德性质在形而上学和认识论上都过于奇异。",
      claims: [
        "该论证对强实在论构成核心压力。",
        "自然主义与非自然主义实在论均可尝试回应。"
      ]
    },
    fregeGeach: {
      label: "弗雷格-吉奇问题",
      title: "弗雷格-吉奇问题",
      body: "对非认知主义的挑战：在条件句、否定句等嵌入语境中如何保持逻辑有效性。",
      claims: [
        "非认知主义若无法回应，将失去语义稳定性。",
        "混合模型与高阶表达主义旨在应对此难题。"
      ]
    },
    motivationInt: {
      label: "动机内在主义",
      title: "动机内在主义",
      body: "主张真诚道德判断与行动动机之间存在必然联系。",
      claims: [
        "该命题常被用于支持非认知主义解释。",
        "但外在主义认知模型也可给出条件性解释。"
      ]
    },
    disagreement: {
      label: "道德分歧问题",
      title: "道德分歧问题",
      body: "深层道德分歧究竟是信念冲突、态度冲突、社会功能冲突，或三者并存。",
      claims: [
        "认知主义倾向将其建模为真伪信念冲突。",
        "非认知主义倾向将其建模为实践态度不相容。"
      ]
    }
  }
};

function safeReadStoredLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function safeWriteStoredLanguage(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    // Ignore storage errors (private mode, disabled storage).
  }
}

function normalizeLanguage(language) {
  return SUPPORTED_LANGS.includes(language) ? language : "en";
}

function getInitialLanguage() {
  const url = new URL(window.location.href);
  const queryLang = url.searchParams.get("lang");
  if (SUPPORTED_LANGS.includes(queryLang)) {
    return queryLang;
  }

  const stored = safeReadStoredLanguage();
  if (SUPPORTED_LANGS.includes(stored)) {
    return stored;
  }

  if (navigator.language && navigator.language.toLowerCase().startsWith("zh")) {
    return "zh";
  }

  return "en";
}

function updateInternalLinks(language) {
  const lang = normalizeLanguage(language);
  document.querySelectorAll("[data-local-link]").forEach((link) => {
    if (!link.dataset.baseHref) {
      const href = link.getAttribute("href") || "";
      link.dataset.baseHref = href.split("?")[0];
    }
    link.setAttribute("href", `${link.dataset.baseHref}?lang=${lang}`);
  });
}

function getTheoryNodeCopy() {
  return THEORY_NODE_COPY[activeLanguage] || THEORY_NODE_COPY.en;
}

function updateTheoryGraphLines() {
  if (!theoryGraphState) {
    return;
  }

  const { container, nodeElements, edgeElements } = theoryGraphState;
  const containerRect = container.getBoundingClientRect();

  edgeElements.forEach(({ edge, line }) => {
    const fromNode = nodeElements[edge.from];
    const toNode = nodeElements[edge.to];
    if (!fromNode || !toNode) {
      return;
    }

    const fromRect = fromNode.getBoundingClientRect();
    const toRect = toNode.getBoundingClientRect();
    const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
    const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
    const x2 = toRect.left + toRect.width / 2 - containerRect.left;
    const y2 = toRect.top + toRect.height / 2 - containerRect.top;

    line.setAttribute("x1", x1.toFixed(2));
    line.setAttribute("y1", y1.toFixed(2));
    line.setAttribute("x2", x2.toFixed(2));
    line.setAttribute("y2", y2.toFixed(2));
  });
}

function setActiveTheoryNode(nodeId) {
  if (!theoryGraphState) {
    return;
  }

  const copy = getTheoryNodeCopy();
  const selected = copy[nodeId];
  if (!selected) {
    return;
  }

  Object.entries(theoryGraphState.nodeElements).forEach(([id, node]) => {
    node.classList.toggle("active", id === nodeId);
  });

  theoryGraphState.activeNodeId = nodeId;

  const titleEl = document.getElementById("theoryPanelNodeTitle");
  const bodyEl = document.getElementById("theoryPanelNodeBody");
  const claimsEl = document.getElementById("theoryPanelClaims");

  if (titleEl) {
    titleEl.textContent = selected.title || selected.label;
  }
  if (bodyEl) {
    bodyEl.textContent = selected.body;
  }
  if (claimsEl) {
    claimsEl.innerHTML = "";
    (selected.claims || []).forEach((claim) => {
      const li = document.createElement("li");
      li.textContent = claim;
      claimsEl.appendChild(li);
    });
  }
}

function updateTheoryGraphLanguage() {
  if (!theoryGraphState) {
    return;
  }

  const copy = getTheoryNodeCopy();
  Object.entries(theoryGraphState.nodeElements).forEach(([id, node]) => {
    if (copy[id]) {
      node.textContent = copy[id].label;
    }
  });

  if (theoryGraphState.activeNodeId) {
    setActiveTheoryNode(theoryGraphState.activeNodeId);
  }
}

function initTheoryGraph() {
  const container = document.getElementById("theoryGraph");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "theory-lines");
  container.appendChild(svg);

  const nodeElements = {};
  const copy = getTheoryNodeCopy();

  THEORY_GRAPH_SPEC.nodes.forEach((node) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `theory-node${node.type === "issue" ? " issue" : ""}`;
    button.style.left = `${node.x}%`;
    button.style.top = `${node.y}%`;
    button.dataset.nodeId = node.id;
    button.textContent = copy[node.id] ? copy[node.id].label : node.id;
    button.addEventListener("click", () => {
      setActiveTheoryNode(node.id);
    });

    nodeElements[node.id] = button;
    container.appendChild(button);
  });

  const edgeElements = THEORY_GRAPH_SPEC.edges.map((edge) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.classList.add("theory-edge");
    if (edge.type === "issue") {
      line.classList.add("issue");
    }
    svg.appendChild(line);
    return { edge, line };
  });

  theoryGraphState = {
    container,
    svg,
    nodeElements,
    edgeElements,
    activeNodeId: null
  };

  const syncLines = () => {
    requestAnimationFrame(updateTheoryGraphLines);
  };

  window.addEventListener("resize", syncLines);
  syncLines();
  setActiveTheoryNode("cognitivism");
}

function applyTranslations(language) {
  const lang = normalizeLanguage(language);
  const dictionary = translations[lang];
  activeLanguage = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      node.textContent = dictionary[key];
    }
  });

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  updateTheoryGraphLanguage();
  updateInternalLinks(lang);
  safeWriteStoredLanguage(lang);

  const url = new URL(window.location.href);
  if (url.searchParams.get("lang") !== lang) {
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url.toString());
  }
}

function buildInquiryBody(formData, dictionary) {
  const pathwayValue = formData.get("pathway");
  const pathwayLabelMap = {
    "student-team": dictionary.registerMailtoPathwayTeam,
    "judge-moderator": dictionary.registerMailtoPathwayJudge,
    "regional-host": dictionary.registerMailtoPathwayHost
  };
  const pathwayLabel = pathwayLabelMap[pathwayValue] || dictionary.registerMailtoPathwayUnknown;

  return [
    `${dictionary.registerMailtoOrg}: ${String(formData.get("orgName") || "").trim()}`,
    `${dictionary.registerMailtoName}: ${String(formData.get("contactName") || "").trim()}`,
    `${dictionary.registerMailtoEmail}: ${String(formData.get("contactEmail") || "").trim()}`,
    `${dictionary.registerMailtoPathway}: ${pathwayLabel}`,
    "",
    `${dictionary.registerMailtoMessage}:`,
    String(formData.get("message") || "").trim()
  ].join("\n");
}

function buildJoinUsBody(formData, dictionary) {
  const roleValue = formData.get("joinRole");
  const roleLabelMap = {
    "operations-volunteer": dictionary.joinMailtoRoleOps,
    "philosophy-judge": dictionary.joinMailtoRoleJudge,
    both: dictionary.joinMailtoRoleBoth
  };
  const roleLabel = roleLabelMap[roleValue] || dictionary.joinMailtoRoleUnknown;

  return [
    `${dictionary.joinMailtoRole}: ${roleLabel}`,
    `${dictionary.joinMailtoName}: ${String(formData.get("joinName") || "").trim()}`,
    `${dictionary.joinMailtoEmail}: ${String(formData.get("joinEmail") || "").trim()}`,
    `${dictionary.joinMailtoAffiliation}: ${String(formData.get("joinAffiliation") || "").trim()}`,
    `${dictionary.joinMailtoBackground}:`,
    String(formData.get("joinBackground") || "").trim(),
    "",
    `${dictionary.joinMailtoAvailability}:`,
    String(formData.get("joinAvailability") || "").trim(),
    "",
    `${dictionary.joinMailtoMessage}:`,
    String(formData.get("joinMessage") || "").trim()
  ].join("\n");
}

function initRegistrationForm() {
  const form = document.getElementById("registrationForm");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const dictionary = translations[activeLanguage] || translations.en;
    const formData = new FormData(form);
    const subject = dictionary.registerMailtoSubject;
    const body = buildInquiryBody(formData, dictionary);
    const mailtoUrl = `mailto:registration@chseb.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
}

function initJoinUsForm() {
  const form = document.getElementById("joinUsForm");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const dictionary = translations[activeLanguage] || translations.en;
    const formData = new FormData(form);
    const subject = dictionary.joinMailtoSubject;
    const body = buildJoinUsBody(formData, dictionary);
    const mailtoUrl = `mailto:joinus@chseb.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
}

function initLanguageSwitcher() {
  const initialLanguage = getInitialLanguage();
  applyTranslations(initialLanguage);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      applyTranslations(button.dataset.lang);
    });
  });
}

function initRevealAnimations() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((node) => node.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  targets.forEach((node) => observer.observe(node));
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initRevealAnimations();
  initRegistrationForm();
  initJoinUsForm();
  initTheoryGraph();
});
