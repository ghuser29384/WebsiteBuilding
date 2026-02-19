const STORAGE_KEY = "chseb-language";
const SUPPORTED_LANGS = ["en", "zh"];
let activeLanguage = "en";
let theoryGraphState = null;
let discourseGraphState = null;
let normativeGraphState = null;

const translations = {
  en: {
    titleHome: "China High School Ethics Bowl | Collaborative Ethical Dialogue",
    titleStructure: "Competition Structure | China High School Ethics Bowl",
    titleDiscourse: "Public Discourse | China High School Ethics Bowl",
    titleResources: "Resources | China High School Ethics Bowl",
    titleRegister: "Register & Contact | China High School Ethics Bowl",
    titleMetaethics: "Metaethics Map | China High School Ethics Bowl",
    titleNormative: "Normative Ethics | China High School Ethics Bowl",
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
    navNormative: "Normative Ethics",
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
    homeGetStartedNormativeTitle: "Normative Ethics Web Map",
    homeGetStartedNormativeBody: "Compare consequentialism, deontology, contractualism, virtue ethics, and major thought experiments.",
    homeGetStartedNormativeBtn: "Open Normative Ethics Page",
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
    discourseHeroSubtitle: "CHSEB treats ethical reasoning as a civic practice: students learn to disagree without dehumanizing and to justify claims with publicly assessable reasons.",
    discourseFrameHeading: "Two Foundational Lenses",
    discourseSandelTitle: "Michael Sandel: Civic Moral Inquiry",
    discourseSandelBody: "Sandel emphasizes that public life cannot avoid moral disagreement. CHSEB asks students to articulate competing conceptions of justice and the good in language that can be contested by fellow citizens.",
    discourseHabermasTitle: "Jurgen Habermas: Discourse Ethics and Legitimacy",
    discourseHabermasBody: "Habermas argues that legitimacy is generated through inclusive, reason-giving communication under fair conditions. CHSEB rounds reward responsiveness, not rhetorical domination.",
    discoursePublicReasonHeading: "Public Reason Architecture (Rawls and Successors)",
    discoursePRConstituencyTitle: "Who Must Be Justified?",
    discoursePRConstituencyBody: "Public reason is addressed to free and equal citizens viewed as reasonable, not only to one's own comprehensive doctrine or community.",
    discoursePRSiteTitle: "Where Is Public Reason Required?",
    discoursePRSiteBody: "The strictest requirement applies to constitutional essentials and basic justice, while civil society still benefits from reciprocal reason-giving norms.",
    discoursePRContentTitle: "What Counts as Publicly Shareable Reasons?",
    discoursePRContentBody: "Reasons should be offered in terms others could evaluate even when they reject your background worldview; translation and reciprocity are central.",
    discourseMapHeading: "Interactive Map of Agreements and Disagreements",
    discourseMapIntro: "Select any view or dispute node to inspect where positions converge, clash, and what deeper issue drives the conflict.",
    discourseLegendAgreement: "Agreement / overlap",
    discourseLegendDisagreement: "Disagreement / tension",
    discourseLegendIssue: "Underlying dispute link",
    discoursePanelHeading: "Relation Analyzer",
    discoursePanelDefaultTitle: "Select a view or dispute node",
    discoursePanelDefaultBody: "Click the map to see each position's alliances, conflicts, and underlying disputes.",
    discoursePanelAgrees: "Agreement / overlap",
    discoursePanelDisagrees: "Key disagreements",
    discoursePanelDisputes: "Underlying disputes",
    discoursePanelNone: "No primary item recorded for this category.",
    discourseDebatesHeading: "Major Debates in Public Discourse Theory",
    discourseDebate1Title: "Consensus vs. Persistent Pluralism",
    discourseDebate1Body: "Should deliberation aim at convergence, or is the best outcome a structured and legitimate ongoing disagreement?",
    discourseDebate2Title: "Neutrality vs. Moral Perfectionism",
    discourseDebate2Body: "Must institutions remain neutral among conceptions of the good, or may they shape civic character and virtue?",
    discourseDebate3Title: "Deliberation vs. Agonistic Contestation",
    discourseDebate3Body: "Is democratic legitimacy fundamentally deliberative, or does enduring adversarial contest play a constitutive role?",
    discourseDebate4Title: "Civility vs. Disruptive Protest",
    discourseDebate4Body: "When institutions are unjust, can disruptive rhetoric or protest be a justified part of democratic communication?",
    discourseDebate5Title: "Free Speech vs. Harm Reduction",
    discourseDebate5Body: "How should discourse spaces protect viewpoint diversity while preventing harassment, misinformation, and silencing effects?",
    discourseDebate6Title: "Ideal Theory vs. Non-Ideal Conditions",
    discourseDebate6Body: "Can fair deliberation survive unequal media access, social hierarchy, and strategic manipulation, and what institutional repairs are needed?",
    discourseNormsHeading: "Normative Standards for CHSEB Deliberation",
    discourseNorm1Title: "Reciprocity",
    discourseNorm1Body: "Offer reasons your counterpart could in principle engage, even if they finally disagree.",
    discourseNorm2Title: "Inclusion and Equal Standing",
    discourseNorm2Body: "No participant should be excluded by status, accent, or school background; discourse quality depends on equal uptake.",
    discourseNorm3Title: "Reason-Responsiveness",
    discourseNorm3Body: "Directly answer objections, revise claims when needed, and distinguish strong from weak counterarguments.",
    discourseNorm4Title: "Fallibilism",
    discourseNorm4Body: "Treat provisional judgment as a civic virtue: explain what would change your mind and why.",
    discoursePracticeHeading: "Failure Modes and Correctives in Student Deliberation",
    discoursePractice1: "Rhetorical victory-seeking replacing inquiry.",
    discoursePractice2: "Token listening without substantive response.",
    discoursePractice3: "Using purely sectarian premises in public-facing arguments.",
    discoursePractice4: "Credibility deficits tied to social identity rather than reasons.",
    discoursePractice5: "Strategic ambiguity that hides normative commitments.",
    discoursePractice6: "Treating unresolved disagreement as procedural failure.",
    discourseProtocolHeading: "Suggested CHSEB Dialogue Protocol",
    discourseProtocolStep1: "Clarify the ethical question and identify why it is publicly significant.",
    discourseProtocolStep2: "State core principles and empirical assumptions separately.",
    discourseProtocolStep3: "Test claims against counterexamples, edge cases, and role-reversal checks.",
    discourseProtocolStep4: "Identify which reasons are publicly shareable versus doctrine-dependent.",
    discourseProtocolStep5: "Record points of convergence, principled divergence, and unresolved uncertainties.",
    discourseProtocolStep6: "Close with a revisable judgment and criteria for future revision.",
    discourseSepHeading: "Stanford Encyclopedia of Philosophy Reading Trail",
    discourseSepIntro: "These SEP entries anchor the conceptual framework used on this page.",
    discourseSepHabermasTitle: "Habermas",
    discourseSepHabermasBody: "Public sphere, communicative rationality, and discourse-theoretic legitimacy.",
    discourseSepPublicReasonTitle: "Public Reason",
    discourseSepPublicReasonBody: "Constituency, site, and content questions for reciprocal justification.",
    discourseSepDemocracyTitle: "Democracy",
    discourseSepDemocracyBody: "Competing models of democratic legitimacy, including deliberative approaches.",
    discourseSepRawlsTitle: "John Rawls",
    discourseSepRawlsBody: "Political liberalism, reasonable pluralism, and public reason constraints.",
    discourseSepSpeechTitle: "Freedom of Speech",
    discourseSepSpeechBody: "Classical defenses and contemporary debates about restrictions, counterspeech, and democratic harms.",
    discourseSepOpenEntry: "Open SEP entry",
    discourseCtaTitle: "Continue to Metaethics and Live Discussion Rooms",
    discourseCtaBody: "Move from public discourse theory to the metaethics map and 24/7 topic rooms for sustained practice.",
    discourseCtaBtnMeta: "Open Metaethics Map",
    discourseCtaBtnRooms: "Open 24/7 Rooms",

    metaHeroKicker: "Interactive Metaethics",
    metaHeroTitle: "Moral Cognitivism vs. Non-Cognitivism",
    metaHeroSubtitle: "Track how major metaethical theories connect and where they are vulnerable: truth-aptness, ontology, semantics, motivation, and disagreement.",
    metaOverviewHeading: "Core Taxonomy",
    metaOverviewCogTitle: "Moral Cognitivism",
    metaOverviewCogBody: "Moral judgments express beliefs and are truth-apt. Internal diversity concerns realism, anti-realism, and constructivism.",
    metaOverviewNonCogTitle: "Moral Non-Cognitivism",
    metaOverviewNonCogBody: "Moral judgments primarily express practical attitudes, plans, or prescriptions rather than ordinary belief-states.",
    metaOverviewBridgeTitle: "Bridge and Hybrid Strategies",
    metaOverviewBridgeBody: "Views like quasi-realism or sophisticated expressivism try to recover truth-talk and logical structure without robust moral realism.",
    metaIssuesHeading: "Undergirding Issues",
    metaIssue1: "Truthmaker Maximalism: does every truth require robust ontological grounding?",
    metaIssue2: "Queerness challenge: are objective moral properties too metaphysically and epistemically strange?",
    metaIssue3: "Frege-Geach problem: can expressivism preserve valid inference in embedded contexts?",
    metaIssue4: "Motivation internalism: does sincere moral judgment necessarily motivate?",
    metaIssue5: "Moral disagreement: is clash primarily doxastic, attitudinal, or mixed?",
    metaIssue6: "Naturalism vs. non-naturalism: what kind of properties could moral truths be about?",
    metaIssue7: "Evolutionary debunking arguments: do genealogical explanations undercut moral justification?",
    metaIssue8: "Supervenience and explanation: can moral differences occur without non-moral differences?",
    metaReadHeading: "How to Read the Interactive Web",
    metaRead1Title: "Solid Connections",
    metaRead1Body: "These indicate inheritance or family relations between theoretical positions.",
    metaRead2Title: "Dashed Connections to Issues",
    metaRead2Body: "These indicate pressure points, vulnerability tests, or background assumptions that can strengthen or weaken a view.",
    metaRead3Title: "Node Claims Panel",
    metaRead3Body: "Click any node to view a concise account of what supports the view and what could undermine it.",
    metaRead4Title: "Competition Use",
    metaRead4Body: "Use the map to stress-test case arguments: every normative claim presupposes metaethical commitments.",
    metaNicheHeading: "Niche and Hybrid Extensions",
    metaNicheNonRealistCogTitle: "Non-Realist Cognitivism",
    metaNicheNonRealistCogBody: "Keeps truth-aptness while denying stance-independent moral facts; map branches include error theory, fictionalism, and relativist cognitivist options.",
    metaNicheFictionalismTitle: "Moral Fictionalism",
    metaNicheFictionalismBody: "Treats moral discourse as a useful practical fiction: we continue using moral language without full realist ontological commitment.",
    metaNicheRelativismTitle: "Cognitivist Moral Relativism",
    metaNicheRelativismBody: "Holds that moral claims are truth-apt but truth may be relative to frameworks, standards, or contexts rather than universally stance-independent facts.",
    metaMapHeading: "Theory Relationship Web",
    metaMapIntro: "Click any node to inspect dependencies, pressure points, and falsification conditions.",
    metaLegendTaxonomy: "Theory family link",
    metaLegendPressure: "Issue pressure",
    metaLegendSupport: "Issue support",
    metaLegendConstraint: "Issue constraint / requirement",
    metaPanelHeading: "Focused Analysis",
    metaPanelDefaultTitle: "Select a theory or issue node",
    metaPanelDefaultBody: "Choose a node to inspect claims, neighboring theories, and issue-theory relations.",
    metaPanelWhatHeading: "What It Is",
    metaPanelWhyHeading: "Why It Matters",
    metaPanelClassicHeading: "Classic Argument / Challenge",
    metaPanelTaxonomyHeading: "Theoretical Neighbors",
    metaPanelIssueHeading: "Issue-Theory Relations",
    metaPanelIssueWhyHeading: "Why Each Issue Relation Holds",
    metaPanelListNone: "No primary item recorded for this category.",
    metaPanelIssueWhyNone: "No issue-theory edge is currently selected.",
    metaIssueReasonFallback: "No detailed rationale recorded for this edge yet.",
    metaIssueReasonSources: "Sources",
    metaRelTheoryPressure: "Pressured by",
    metaRelTheorySupport: "Supported by",
    metaRelTheoryConstraint: "Constrained by",
    metaRelIssuePressure: "Pressures",
    metaRelIssueSupport: "Supports",
    metaRelIssueConstraint: "Constrains",
    metaRelTypePressure: "Pressure",
    metaRelTypeSupport: "Support",
    metaRelTypeConstraint: "Constraint",
    metaSepHeading: "Stanford Encyclopedia of Philosophy Reading Trail",
    metaSepIntro: "These SEP entries inform the map structure and node-level pressure tests.",
    metaSepCognitivismTitle: "Moral Cognitivism",
    metaSepCognitivismBody: "Core distinctions between cognitivist and non-cognitivist semantics.",
    metaSepAntiRealismTitle: "Moral Anti-Realism",
    metaSepAntiRealismBody: "Error theory, expressivism, and anti-realist strategy space.",
    metaSepRealismTitle: "Moral Realism",
    metaSepRealismBody: "Realist commitments, objections, and explanatory ambitions.",
    metaSepConstructivismTitle: "Constructivism in Metaethics",
    metaSepConstructivismBody: "Procedure-based accounts of moral truth and normativity.",
    metaSepNaturalismTitle: "Moral Naturalism and Non-Naturalism",
    metaSepNaturalismBody: "Competing accounts of what kind of properties moral facts could be.",
    metaSepIssuesTitle: "Truthmakers, Motivation, and Moral Epistemology",
    metaSepIssuesBody: "Background constraints used to evaluate map-level assumptions.",
    metaSepOpenEntry: "Open SEP entry",
    metaCtaTitle: "Discuss These Views Live",
    metaCtaBody: "Move from map exploration to live dialogue in the 24/7 philosophical meeting rooms.",
    metaCtaBtn: "Open 24/7 Rooms",

    normHeroKicker: "Interactive Normative Ethics",
    normHeroTitle: "Normative Ethics: Theories, Intuitions, and Tests",
    normHeroSubtitle: "Map major normative theories and stress-test them with classic thought experiments that shaped modern ethics.",
    normFamiliesHeading: "Major Normative Families",
    normFamilyConseqTitle: "Consequentialism",
    normFamilyConseqBody: "Right action depends on outcomes; central variants include act utilitarianism and rule utilitarianism.",
    normFamilyDeonTitle: "Deontology",
    normFamilyDeonBody: "Some actions are constrained by duties and rights regardless of aggregate outcomes.",
    normFamilyContractTitle: "Contractualism",
    normFamilyContractBody: "Moral principles must be justifiable to each person; Scanlonian contractualism emphasizes reasonable rejectability.",
    normFamilyVirtueTitle: "Virtue Ethics",
    normFamilyVirtueBody: "Focuses on character, practical wisdom, and what a flourishing life requires.",
    normFamilyOtherTitle: "Hybrid and Convergence Views",
    normFamilyOtherBody: "Parfit's Triple Theory and related approaches seek deep convergence across major traditions.",
    normThoughtHeading: "Foundational Thought Experiments",
    normThoughtIntro: "These cases expose intuitive fault lines: harming vs allowing, aggregation, demandingness, fairness, and integrity.",
    normThought1Title: "Trolley Problem",
    normThought1Body: "Why do many allow switching a trolley but reject pushing a person? Tests doing/allowing and means/end distinctions.",
    normThought2Title: "Organ Transplant Problem",
    normThought2Body: "Can one be killed to save five? Tests rights constraints against pure welfare aggregation.",
    normThought3Title: "Scanlon's World Cup Case",
    normThought3Body: "Can many tiny complaints outweigh one person's severe burden? Tests interpersonal justification and rejectability.",
    normThought4Title: "Experience Machine",
    normThought4Body: "Would a life of perfect simulated pleasure be enough? Tests hedonism versus authenticity and achievement.",
    normThought5Title: "Drowning Child",
    normThought5Body: "If you can prevent severe harm at low cost, must you? Tests beneficence and demandingness.",
    normThought6Title: "Jim and the Indians",
    normThought6Body: "Can maximizing outcomes violate integrity by making agents complicit in wrongdoing?",
    normMapHeading: "Normative Ethics Relationship Web",
    normMapIntro: "Click any theory or thought-experiment node to inspect its core idea, pressure tests, and neighboring commitments.",
    normLegendTaxonomy: "Theory family link",
    normLegendPressure: "Thought experiment pressure",
    normLegendSupport: "Thought experiment support",
    normLegendConstraint: "Constraint / requirement",
    normPanelHeading: "Focused Analysis",
    normPanelDefaultTitle: "Select a theory or thought experiment node",
    normPanelDefaultBody: "Use the map to compare principles, intuitions, and where each theory is strongest or most vulnerable.",
    normPanelCoreHeading: "Core Idea",
    normPanelIntuitionHeading: "Intuition Profile",
    normPanelClassicHeading: "Classic Argument / Tension",
    normPanelTheoryHeading: "Theoretical Neighbors",
    normPanelIssueHeading: "Theory-Experiment Relations",
    normPanelIssueWhyHeading: "Why Each Relation Holds",
    normPanelListNone: "No primary item recorded for this category.",
    normPanelIssueWhyNone: "No theory-experiment edge is currently selected.",
    normReasonFallback: "No detailed rationale recorded for this edge yet.",
    normReasonSources: "Sources",
    normRelTheoryPressure: "Pressured by",
    normRelTheorySupport: "Supported by",
    normRelTheoryConstraint: "Constrained by",
    normRelIssuePressure: "Pressures",
    normRelIssueSupport: "Supports",
    normRelIssueConstraint: "Constrains",
    normRelTypePressure: "Pressure",
    normRelTypeSupport: "Support",
    normRelTypeConstraint: "Constraint",
    normCtaTitle: "Continue to Public Dialogue and 24/7 Rooms",
    normCtaBody: "Move from normative theory mapping to live practice in CHSEB's public discourse and always-open discussion rooms.",
    normCtaBtnDiscourse: "Open Public Discourse Page",
    normCtaBtnRooms: "Open 24/7 Rooms",

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
    titleNormative: "规范伦理 | 中国高中伦理思辨赛",
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
    navNormative: "规范伦理",
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
    homeGetStartedNormativeTitle: "规范伦理关系图",
    homeGetStartedNormativeBody: "比较后果主义、义务论、契约论、德性伦理及关键思想实验。",
    homeGetStartedNormativeBtn: "打开规范伦理页面",
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
    discourseHeroSubtitle: "CHSEB 将伦理推理视为公民实践：学生不仅学习在分歧中保持尊重，也学习用公共可评估的理由进行论证。",
    discourseFrameHeading: "两条奠基路径",
    discourseSandelTitle: "迈克尔·桑德尔：公民道德探究",
    discourseSandelBody: "桑德尔强调公共生活无法回避道德分歧。CHSEB 要求学生将关于正义与善的竞争性理解转化为可被他人检验的公民论证。",
    discourseHabermasTitle: "尤尔根·哈贝马斯：话语伦理与正当性",
    discourseHabermasBody: "哈贝马斯主张正当性来自包容、平等且给出理由的沟通程序。CHSEB 评分强调回应质量，而非话术压制。",
    discoursePublicReasonHeading: "公共理性的结构（罗尔斯及其后续争论）",
    discoursePRConstituencyTitle: "要向谁给出理由？",
    discoursePRConstituencyBody: "公共理性面向作为自由且平等公民的“合理他者”，而非仅面向己方共同体或完整世界观内部成员。",
    discoursePRSiteTitle: "哪些场域要求更严格的公共理性？",
    discoursePRSiteBody: "在宪制核心与基本正义问题上要求最严格；在公民社会语境中，互惠性的理由规范同样具有实践价值。",
    discoursePRContentTitle: "什么是可公共分享的理由？",
    discoursePRContentBody: "即便他人不接受你的背景信条，理由仍应可被评估与回应；“翻译”与“互惠”是关键。",
    discourseMapHeading: "互动关系图：共识、分歧与深层争议",
    discourseMapIntro: "点击任一理论或争议节点，查看各立场如何一致、如何冲突，以及冲突背后的底层问题。",
    discourseLegendAgreement: "一致 / 重叠",
    discourseLegendDisagreement: "分歧 / 张力",
    discourseLegendIssue: "连接到底层争议",
    discoursePanelHeading: "关系分析器",
    discoursePanelDefaultTitle: "请选择一个理论或争议节点",
    discoursePanelDefaultBody: "点击关系图查看该立场的主要同盟、主要冲突与底层争议结构。",
    discoursePanelAgrees: "一致 / 重叠",
    discoursePanelDisagrees: "关键分歧",
    discoursePanelDisputes: "底层争议",
    discoursePanelNone: "该分类下暂无主要条目。",
    discourseDebatesHeading: "公共论辩理论中的核心争论",
    discourseDebate1Title: "共识导向 vs. 持续多元分歧",
    discourseDebate1Body: "协商的目标应是收敛共识，还是形成程序正当、可持续的“有序分歧”？",
    discourseDebate2Title: "中立性 vs. 实质德性塑造",
    discourseDebate2Body: "制度应在善观念之间保持中立，还是可适度塑造公民品格与公共德性？",
    discourseDebate3Title: "协商民主 vs. 竞争性民主",
    discourseDebate3Body: "民主正当性的核心是理性协商，还是不可消除的对抗性竞争也构成其本质部分？",
    discourseDebate4Title: "文明表达 vs. 破坏性抗议",
    discourseDebate4Body: "当制度长期不公时，更具冲击性的抗议表达是否可被视为民主沟通的一部分？",
    discourseDebate5Title: "言论自由 vs. 伤害控制",
    discourseDebate5Body: "讨论空间如何在保障观点多元的同时，抑制骚扰、虚假信息与沉默效应？",
    discourseDebate6Title: "理想理论 vs. 非理想条件",
    discourseDebate6Body: "在媒体权力不平等、社会层级与策略操控存在时，公平协商如何制度化修复？",
    discourseNormsHeading: "CHSEB 协商规范",
    discourseNorm1Title: "互惠性",
    discourseNorm1Body: "给出对方在原则上可进入讨论的理由，即便最终仍可能不同意。",
    discourseNorm2Title: "包容性与平等地位",
    discourseNorm2Body: "不因身份、口音或学校背景而降低发言权重；优质讨论依赖平等被听见。",
    discourseNorm3Title: "理由回应性",
    discourseNorm3Body: "直接回应异议、必要时修正立场，并区分强反驳与弱反驳。",
    discourseNorm4Title: "可错论意识",
    discourseNorm4Body: "把“暂时性判断”视为公民德性：明确什么条件会促使你改变观点。",
    discoursePracticeHeading: "学生协商中的常见失误与修正",
    discoursePractice1: "把“赢下话语”置于“推进探究”之上。",
    discoursePractice2: "形式上倾听，实质上不回应。",
    discoursePractice3: "在公共论证中使用仅对本群体有效的前提。",
    discoursePractice4: "因身份标签而非理由质量调整可信度。",
    discoursePractice5: "以策略性含糊掩盖规范承诺。",
    discoursePractice6: "把“尚未达成一致”误判为程序失败。",
    discourseProtocolHeading: "建议的 CHSEB 对话流程",
    discourseProtocolStep1: "先澄清伦理问题，并说明其公共重要性。",
    discourseProtocolStep2: "将价值原则与经验性前提分开陈述。",
    discourseProtocolStep3: "用反例、边界案例与角色互换测试检验论证。",
    discourseProtocolStep4: "区分哪些理由可公共分享，哪些依赖特定教义前提。",
    discourseProtocolStep5: "记录共识点、原则性分歧与未决不确定性。",
    discourseProtocolStep6: "以可修正结论收束，并说明未来修正标准。",
    discourseSepHeading: "斯坦福哲学百科（SEP）阅读路径",
    discourseSepIntro: "本页框架主要依据以下 SEP 条目组织。",
    discourseSepHabermasTitle: "哈贝马斯",
    discourseSepHabermasBody: "公共领域、交往理性与话语式正当性。",
    discourseSepPublicReasonTitle: "公共理性",
    discourseSepPublicReasonBody: "互惠性论证中的对象、场域与内容三重问题。",
    discourseSepDemocracyTitle: "民主",
    discourseSepDemocracyBody: "民主正当性的竞争模型，包括协商民主路径。",
    discourseSepRawlsTitle: "约翰·罗尔斯",
    discourseSepRawlsBody: "政治自由主义、合理多元主义与公共理性约束。",
    discourseSepSpeechTitle: "言论自由",
    discourseSepSpeechBody: "古典辩护与当代限制、反言论及民主伤害争论。",
    discourseSepOpenEntry: "打开 SEP 词条",
    discourseCtaTitle: "继续进入元伦理与实时讨论",
    discourseCtaBody: "从公共论辩理论出发，延伸到元伦理关系图与 24 小时主题讨论室。",
    discourseCtaBtnMeta: "打开元伦理地图",
    discourseCtaBtnRooms: "打开 24 小时讨论室",

    metaHeroKicker: "互动元伦理",
    metaHeroTitle: "道德认知主义 vs. 非认知主义",
    metaHeroSubtitle: "追踪主要元伦理理论如何连接，并查看其在真值、本体论、语义、动机与分歧问题上的脆弱点。",
    metaOverviewHeading: "核心分类图景",
    metaOverviewCogTitle: "道德认知主义",
    metaOverviewCogBody: "道德判断表达信念并具有真假条件；内部进一步分化为实在论、反实在论与建构主义。",
    metaOverviewNonCogTitle: "道德非认知主义",
    metaOverviewNonCogBody: "道德判断主要表达实践态度、计划或指令，而非通常意义上的信念表述。",
    metaOverviewBridgeTitle: "桥接与混合策略",
    metaOverviewBridgeBody: "拟实在论或高阶表达主义尝试在不承诺强实在论本体的前提下，保留“真理话语”与逻辑结构。",
    metaIssuesHeading: "底层决定性议题",
    metaIssue1: "真值制造者最大化：每个真命题都需要强本体论根据吗？",
    metaIssue2: "奇异性挑战：客观道德性质是否在形上与认识上都过于“奇异”？",
    metaIssue3: "弗雷格-吉奇问题：表达主义能否在嵌入语境中保留有效推理？",
    metaIssue4: "动机内在主义：真诚道德判断是否必然带来行动动机？",
    metaIssue5: "道德分歧：冲突主要是信念冲突、态度冲突，还是混合结构？",
    metaIssue6: "自然主义 vs. 非自然主义：道德性质究竟属于哪类性质？",
    metaIssue7: "演化削弱论证：道德信念的谱系解释是否会削弱其证成？",
    metaIssue8: "随附性与解释：道德差异能否在无非道德差异时出现？",
    metaReadHeading: "如何阅读互动关系网",
    metaRead1Title: "实线连接",
    metaRead1Body: "表示理论之间的谱系关系、继承关系或同家族分化关系。",
    metaRead2Title: "虚线连接到底层议题",
    metaRead2Body: "表示某理论的压力点、检验点或关键背景假设。",
    metaRead3Title: "节点论断面板",
    metaRead3Body: "点击任意节点，查看其支撑理由与潜在反证条件。",
    metaRead4Title: "在比赛中的用途",
    metaRead4Body: "用该图反向检验案例立场：多数规范判断都预设了元伦理承诺。",
    metaNicheHeading: "小众与混合理论扩展",
    metaNicheNonRealistCogTitle: "非实在论认知主义",
    metaNicheNonRealistCogBody: "保留道德命题的真值适格性，同时否认独立于立场的道德事实；关系图已细分错误理论、虚构主义与相对主义认知路径。",
    metaNicheFictionalismTitle: "道德虚构主义",
    metaNicheFictionalismBody: "将道德话语视为具有实践功能的“有用虚构”：继续使用道德语言，但不承诺完整实在论本体。",
    metaNicheRelativismTitle: "认知主义道德相对主义",
    metaNicheRelativismBody: "主张道德命题可真可假，但其真值可能相对于规范框架、评价标准或语境，而非普遍独立于立场。",
    metaMapHeading: "理论关系网络",
    metaMapIntro: "点击任意节点，查看其核心主张、依赖条件与可能证伪路径。",
    metaLegendTaxonomy: "理论谱系连接",
    metaLegendPressure: "议题压力连接",
    metaLegendSupport: "议题支持连接",
    metaLegendConstraint: "议题约束 / 要求连接",
    metaPanelHeading: "聚焦分析",
    metaPanelDefaultTitle: "请选择理论或议题节点",
    metaPanelDefaultBody: "点击节点可查看其核心主张、相关理论以及议题-理论关系。",
    metaPanelWhatHeading: "它到底在说什么",
    metaPanelWhyHeading: "为什么重要",
    metaPanelClassicHeading: "经典论证 / 关键挑战",
    metaPanelTaxonomyHeading: "相关理论节点",
    metaPanelIssueHeading: "议题-理论关系",
    metaPanelIssueWhyHeading: "为何这种关系成立",
    metaPanelListNone: "该分类下暂无主要条目。",
    metaPanelIssueWhyNone: "当前没有可显示的议题-理论边。",
    metaIssueReasonFallback: "该关系的详细说明尚未补充。",
    metaIssueReasonSources: "来源",
    metaRelTheoryPressure: "受其压力：",
    metaRelTheorySupport: "受其支持：",
    metaRelTheoryConstraint: "受其约束：",
    metaRelIssuePressure: "对其施压：",
    metaRelIssueSupport: "支持：",
    metaRelIssueConstraint: "约束：",
    metaRelTypePressure: "压力",
    metaRelTypeSupport: "支持",
    metaRelTypeConstraint: "约束",
    metaSepHeading: "斯坦福哲学百科（SEP）阅读路径",
    metaSepIntro: "关系图结构与节点压力测试主要参考以下 SEP 条目。",
    metaSepCognitivismTitle: "道德认知主义",
    metaSepCognitivismBody: "认知主义与非认知主义的核心语义区分。",
    metaSepAntiRealismTitle: "道德反实在论",
    metaSepAntiRealismBody: "错误理论、表达主义与反实在论策略空间。",
    metaSepRealismTitle: "道德实在论",
    metaSepRealismBody: "实在论承诺、核心反驳与解释任务。",
    metaSepConstructivismTitle: "元伦理建构主义",
    metaSepConstructivismBody: "以程序为核心的道德真理与规范性奠基方案。",
    metaSepNaturalismTitle: "道德自然主义与非自然主义",
    metaSepNaturalismBody: "道德事实可能属于何种性质类型的竞争解释。",
    metaSepIssuesTitle: "真值制造者、动机与道德认识论",
    metaSepIssuesBody: "用于评估关系图底层假设的关键背景约束。",
    metaSepOpenEntry: "打开 SEP 词条",
    metaCtaTitle: "把这些争论带入实时讨论",
    metaCtaBody: "从关系图继续进入 24 小时哲学讨论室，进行跨时区持续对话。",
    metaCtaBtn: "打开 24 小时讨论室",

    normHeroKicker: "互动规范伦理",
    normHeroTitle: "规范伦理：理论、直觉与压力测试",
    normHeroSubtitle: "通过经典思想实验检验主要规范伦理理论，理解其分歧点与潜在收敛路径。",
    normFamiliesHeading: "主要规范伦理传统",
    normFamilyConseqTitle: "后果主义",
    normFamilyConseqBody: "行为对错取决于结果；核心分支包括行为功利主义与规则功利主义。",
    normFamilyDeonTitle: "义务论",
    normFamilyDeonBody: "某些行为受义务与权利约束，不可被简单总效用最大化覆盖。",
    normFamilyContractTitle: "契约论",
    normFamilyContractBody: "道德原则应能向每个人作出正当化；斯坎伦路径强调“不可合理拒绝”。",
    normFamilyVirtueTitle: "德性伦理",
    normFamilyVirtueBody: "以品格、实践智慧与人的繁荣生活为分析中心。",
    normFamilyOtherTitle: "混合与收敛理论",
    normFamilyOtherBody: "如帕菲特“三重理论”尝试在主要传统之间建立深层一致。",
    normThoughtHeading: "奠基性思想实验",
    normThoughtIntro: "这些案例暴露关键分歧：伤害与放任、总量比较、苛求性、公平性与人格完整性。",
    normThought1Title: "电车难题",
    normThought1Body: "为什么很多人接受“扳道岔”却拒绝“推人挡车”？它检验手段/目的与作为/不作为区分。",
    normThought2Title: "器官移植难题",
    normThought2Body: "能否杀一人救五人？它检验权利约束与福利总量最大化之间的张力。",
    normThought3Title: "斯坎伦世界杯情景",
    normThought3Body: "大量轻微抱怨能否压过一人的重大损失？它检验可拒绝性与人际正当化结构。",
    normThought4Title: "体验机器",
    normThought4Body: "若可获得完美模拟快乐，你应进入吗？它检验享乐主义与真实性、成就价值之争。",
    normThought5Title: "溺水儿童案例",
    normThought5Body: "若你能以低成本阻止严重伤害，是否必须这样做？它检验行善义务与苛求性问题。",
    normThought6Title: "吉姆与印第安人",
    normThought6Body: "结果最大化是否会破坏行动者完整性并让其共谋不义？",
    normMapHeading: "规范伦理关系网络",
    normMapIntro: "点击理论或思想实验节点，查看其核心承诺、直觉压力测试与相邻理论关系。",
    normLegendTaxonomy: "理论谱系连接",
    normLegendPressure: "思想实验施压",
    normLegendSupport: "思想实验支持",
    normLegendConstraint: "约束 / 必要条件",
    normPanelHeading: "聚焦分析",
    normPanelDefaultTitle: "请选择理论或思想实验节点",
    normPanelDefaultBody: "通过关系图比较原则、直觉与各理论的强弱项。",
    normPanelCoreHeading: "核心主张",
    normPanelIntuitionHeading: "直觉画像",
    normPanelClassicHeading: "经典论证 / 关键张力",
    normPanelTheoryHeading: "相关理论节点",
    normPanelIssueHeading: "理论-实验关系",
    normPanelIssueWhyHeading: "为何这种关系成立",
    normPanelListNone: "该分类下暂无主要条目。",
    normPanelIssueWhyNone: "当前没有可显示的理论-实验边。",
    normReasonFallback: "该关系的详细说明尚未补充。",
    normReasonSources: "来源",
    normRelTheoryPressure: "受其压力：",
    normRelTheorySupport: "受其支持：",
    normRelTheoryConstraint: "受其约束：",
    normRelIssuePressure: "对其施压：",
    normRelIssueSupport: "支持：",
    normRelIssueConstraint: "约束：",
    normRelTypePressure: "压力",
    normRelTypeSupport: "支持",
    normRelTypeConstraint: "约束",
    normCtaTitle: "继续进入公共论辩与 24 小时讨论",
    normCtaBody: "将规范理论关系图与 CHSEB 的公共论辩实践和实时讨论空间连接起来。",
    normCtaBtnDiscourse: "打开公共论辩页面",
    normCtaBtnRooms: "打开 24 小时讨论室",

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
    { id: "cognitivism", x: 19, y: 11, type: "theory" },
    { id: "noncognitivism", x: 79, y: 11, type: "theory" },
    { id: "realist", x: 8, y: 29, type: "theory" },
    { id: "nonRealistCog", x: 34, y: 22, type: "theory" },
    { id: "constructivism", x: 27, y: 36, type: "theory" },
    { id: "errorTheory", x: 42, y: 36, type: "theory" },
    { id: "fictionalism", x: 54, y: 45, type: "theory" },
    { id: "relativism", x: 42, y: 52, type: "theory" },
    { id: "expressivism", x: 69, y: 32, type: "theory" },
    { id: "prescriptivism", x: 86, y: 33, type: "theory" },
    { id: "naturalism", x: 8, y: 47, type: "theory" },
    { id: "nonNaturalism", x: 21, y: 49, type: "theory" },
    { id: "quasiRealism", x: 76, y: 49, type: "theory" },
    { id: "truthmakerMax", x: 14, y: 68, type: "issue" },
    { id: "queerness", x: 31, y: 69, type: "issue" },
    { id: "fregeGeach", x: 58, y: 68, type: "issue" },
    { id: "motivationInt", x: 74, y: 68, type: "issue" },
    { id: "evolutionDebunk", x: 88, y: 68, type: "issue" },
    { id: "supervenience", x: 28, y: 84, type: "issue" },
    { id: "disagreement", x: 50, y: 84, type: "issue" }
  ],
  edges: [
    { from: "cognitivism", to: "realist" },
    { from: "cognitivism", to: "nonRealistCog" },
    { from: "nonRealistCog", to: "constructivism" },
    { from: "nonRealistCog", to: "errorTheory" },
    { from: "nonRealistCog", to: "fictionalism" },
    { from: "nonRealistCog", to: "relativism" },
    { from: "noncognitivism", to: "expressivism" },
    { from: "noncognitivism", to: "prescriptivism" },
    { from: "expressivism", to: "quasiRealism" },
    { from: "realist", to: "naturalism" },
    { from: "realist", to: "nonNaturalism" },
    { from: "nonRealistCog", to: "truthmakerMax", type: "issue", relation: "pressure" },
    { from: "errorTheory", to: "truthmakerMax", type: "issue", relation: "support" },
    { from: "constructivism", to: "truthmakerMax", type: "issue", relation: "pressure" },
    { from: "fictionalism", to: "truthmakerMax", type: "issue", relation: "support" },
    { from: "realist", to: "queerness", type: "issue", relation: "pressure" },
    { from: "expressivism", to: "fregeGeach", type: "issue", relation: "pressure" },
    { from: "quasiRealism", to: "fregeGeach", type: "issue", relation: "pressure" },
    { from: "noncognitivism", to: "motivationInt", type: "issue", relation: "support" },
    { from: "cognitivism", to: "motivationInt", type: "issue", relation: "pressure" },
    { from: "fictionalism", to: "motivationInt", type: "issue", relation: "pressure" },
    { from: "realist", to: "evolutionDebunk", type: "issue", relation: "pressure" },
    { from: "realist", to: "supervenience", type: "issue", relation: "constraint" },
    { from: "constructivism", to: "supervenience", type: "issue", relation: "constraint" },
    { from: "relativism", to: "supervenience", type: "issue", relation: "pressure" },
    { from: "cognitivism", to: "disagreement", type: "issue", relation: "constraint" },
    { from: "noncognitivism", to: "disagreement", type: "issue", relation: "constraint" },
    { from: "relativism", to: "disagreement", type: "issue", relation: "support" }
  ]
};

const THEORY_NODE_COPY = {
  en: {
    cognitivism: {
      label: "Moral Cognitivism",
      title: "Moral Cognitivism",
      body: "Moral judgments express beliefs and are truth-apt. The core dispute concerns which moral beliefs, if any, are true and what explains their truth.",
      claims: [
        "If moral language has no truth conditions at all, cognitivism fails.",
        "Cognitivism must explain why moral judgment and motivation are often tightly linked."
      ]
    },
    noncognitivism: {
      label: "Moral Non-Cognitivism",
      title: "Moral Non-Cognitivism",
      body: "Moral utterances primarily express practical attitudes, plans, or commitments rather than ordinary descriptive beliefs.",
      claims: [
        "Strengthened if motivational internalism is best explained by attitude expression.",
        "Pressured if disagreement is best modeled as robust belief conflict over truth."
      ]
    },
    realist: {
      label: "Moral Realism",
      title: "Moral Realism",
      body: "At least some moral claims are objectively true in virtue of stance-independent moral facts or properties.",
      claims: [
        "Gains force if irreducible moral explanation is unavoidable.",
        "Faces pressure from queerness, debunking arguments, and epistemic access concerns."
      ]
    },
    nonRealistCog: {
      label: "Non-Realist Cognitivism",
      title: "Non-Realist Cognitivism",
      body: "Moral judgments are truth-apt, but their truth does not depend on stance-independent moral facts in the robust realist sense.",
      claims: [
        "Includes divergent routes such as error theory, fictionalism, and cognitivist relativism.",
        "Often strengthened when robust moral ontology is rejected but truth-aptness is retained."
      ]
    },
    constructivism: {
      label: "Constructivism",
      title: "Constructivism",
      body: "Moral truths are generated by valid procedures of rational endorsement, agency, or public justification rather than discovered as independent moral entities.",
      claims: [
        "If no procedure can secure normativity, constructivism weakens.",
        "If stance-independent moral facts exist, pure constructivism may be incomplete."
      ]
    },
    errorTheory: {
      label: "Error Theory",
      title: "Error Theory (Cognitivist Anti-Realism)",
      body: "Moral claims are truth-apt, but positive moral claims are systematically false because reality lacks the required moral properties.",
      claims: [
        "Faces major pressure if any substantive moral proposition is true.",
        "If truthmaker maximalism is true and there are no moral truthmakers, anti-realist cognitivism is reinforced."
      ]
    },
    expressivism: {
      label: "Expressivism",
      title: "Expressivism",
      body: "Moral language functions to express practical attitudes while explaining logic-like features of moral argument.",
      claims: [
        "Must solve Frege-Geach to preserve validity in conditionals and negations.",
        "Must explain disagreement as more than pure affective mismatch."
      ]
    },
    prescriptivism: {
      label: "Prescriptivism",
      title: "Prescriptivism",
      body: "Moral judgments primarily issue universalizable prescriptions and action-guiding commitments.",
      claims: [
        "Strong where imperative force best explains moral speech acts.",
        "Weaker where descriptive truth-conditions appear indispensable."
      ]
    },
    fictionalism: {
      label: "Moral Fictionalism",
      title: "Moral Fictionalism",
      body: "Moral discourse is retained as a practically useful fiction rather than a literal report of stance-independent moral facts.",
      claims: [
        "Attractive when one wants to preserve moral practice without heavyweight ontology.",
        "Must explain sincerity, motivation, and responsibility under fictional commitment."
      ]
    },
    relativism: {
      label: "Cognitivist Relativism",
      title: "Cognitivist Moral Relativism",
      body: "Moral claims are truth-apt, but truth may be indexed to standards, frameworks, or contexts rather than universally fixed facts.",
      claims: [
        "Explains persistent disagreement without treating all sides as simply mistaken.",
        "Must avoid collapse into arbitrariness while preserving critical comparison."
      ]
    },
    naturalism: {
      label: "Moral Naturalism",
      title: "Moral Naturalism",
      body: "Moral facts are natural facts or are fully explainable within a naturalistic ontology.",
      claims: [
        "Promises continuity with science and epistemic accessibility.",
        "Must explain normativity without collapsing into mere description."
      ]
    },
    nonNaturalism: {
      label: "Moral Non-Naturalism",
      title: "Moral Non-Naturalism",
      body: "Moral facts are irreducibly normative and not reducible to natural properties.",
      claims: [
        "Can preserve robust normativity and objective authority.",
        "Must answer epistemic questions about access to non-natural properties."
      ]
    },
    quasiRealism: {
      label: "Quasi-Realism",
      title: "Quasi-Realism",
      body: "Reconstructs realist-seeming moral discourse on an expressivist base without committing to heavyweight moral ontology.",
      claims: [
        "Explains truth-talk pragmatically from non-cognitivist foundations.",
        "Must still secure semantic stability and logical discipline."
      ]
    },
    truthmakerMax: {
      label: "Truthmaker Maximalism",
      title: "Truthmaker Maximalism",
      body: "Every true proposition requires an ontological truthmaker.",
      claims: [
        "If true, anti-realist views need a detailed account of moral truthmakers.",
        "If false, anti-realist semantics gains room to maneuver."
      ]
    },
    queerness: {
      label: "Queerness Argument",
      title: "Queerness Argument",
      body: "Classic objection that objective moral properties would be metaphysically and epistemically strange.",
      claims: [
        "Targets robust forms of realism.",
        "Can be resisted through naturalist and non-naturalist realist replies."
      ]
    },
    fregeGeach: {
      label: "Frege-Geach Problem",
      title: "Frege-Geach Problem",
      body: "Challenge for non-cognitivism: preserve inferential validity when moral claims are embedded in complex logical structures.",
      claims: [
        "Any viable expressivism needs a stable solution.",
        "Hybrid expressivist models attempt to close this gap."
      ]
    },
    motivationInt: {
      label: "Motivation Internalism",
      title: "Motivation Internalism",
      body: "Sincere moral judgment is necessarily connected to motivation, at least under normal rational conditions.",
      claims: [
        "Often used to support non-cognitivist semantics.",
        "Externalist cognitivists argue motivation can be contingent."
      ]
    },
    evolutionDebunk: {
      label: "Evolutionary Debunking",
      title: "Evolutionary Debunking Arguments",
      body: "Genealogical explanations of moral belief formation may undercut confidence in their truth-tracking status.",
      claims: [
        "Raises reliability challenges for realist epistemology.",
        "Debunking force depends on whether vindicating epistemic links can be restored."
      ]
    },
    supervenience: {
      label: "Moral Supervenience",
      title: "Moral Supervenience",
      body: "No moral difference without some non-moral difference; moral variation tracks descriptive variation.",
      claims: [
        "Used as a constraint on moral explanation across views.",
        "Different theories explain supervenience in sharply different ways."
      ]
    },
    disagreement: {
      label: "Disagreement Problem",
      title: "Moral Disagreement Problem",
      body: "Deep moral disagreement may involve belief conflict, practical attitude conflict, or both.",
      claims: [
        "Cognitivism models disagreement as contest over truth.",
        "Non-cognitivism models disagreement as practical incompatibility."
      ]
    }
  },
  zh: {
    cognitivism: {
      label: "道德认知主义",
      title: "道德认知主义",
      body: "道德判断表达信念并具有真假条件。核心问题在于哪些道德命题为真，以及这些真理由何而真。",
      claims: [
        "若道德语言完全不具真值条件，认知主义将失去基础。",
        "认知主义还需解释道德判断与动机常见的紧密联系。"
      ]
    },
    noncognitivism: {
      label: "道德非认知主义",
      title: "道德非认知主义",
      body: "道德言说主要表达实践态度、计划或承诺，而非普通描述性信念。",
      claims: [
        "若动机内在主义最佳解释来自态度表达，其地位增强。",
        "若分歧更像真伪信念冲突，其解释力会受压。"
      ]
    },
    realist: {
      label: "道德实在论",
      title: "道德实在论",
      body: "至少部分道德命题客观为真，因为存在独立于立场的道德事实或性质。",
      claims: [
        "若不可还原的规范解释不可避免，实在论更具优势。",
        "其压力来自奇异性论证、削弱论证与认识论通达性问题。"
      ]
    },
    nonRealistCog: {
      label: "非实在论认知主义",
      title: "非实在论认知主义",
      body: "道德判断保持真值适格性，但其真值不依赖强实在论意义上的立场独立道德事实。",
      claims: [
        "常见分支包括错误理论、虚构主义与认知主义相对主义。",
        "当理论拒绝厚重道德本体但保留真假结构时，此路径具有吸引力。"
      ]
    },
    constructivism: {
      label: "建构主义",
      title: "建构主义",
      body: "道德真理由理性程序、行动者承诺或公共正当化过程生成，而非被动发现的独立道德实体。",
      claims: [
        "若无程序能奠基规范性，建构主义会削弱。",
        "若存在立场独立道德事实，纯建构主义可能不完备。"
      ]
    },
    errorTheory: {
      label: "错误理论",
      title: "错误理论（认知主义反实在论）",
      body: "道德命题可真可假，但积极道德命题系统性为假，因为世界中不存在其所要求的道德性质。",
      claims: [
        "若任一实质道德命题为真，错误理论将受到重大冲击。",
        "若真值制造者最大化成立且无道德真值制造者，反实在认知主义会被强化。"
      ]
    },
    expressivism: {
      label: "表达主义",
      title: "表达主义",
      body: "道德语言主要表达实践态度，同时尝试解释道德论证中的逻辑结构。",
      claims: [
        "必须回应弗雷格-吉奇问题以保留推理有效性。",
        "必须说明分歧不只是情绪错位。"
      ]
    },
    prescriptivism: {
      label: "规定主义",
      title: "规定主义",
      body: "道德判断主要发布可普遍化的行动指令与实践承诺。",
      claims: [
        "若道德话语的祈使功能最核心，其解释力增强。",
        "若描述性真值条件不可替代，其说服力下降。"
      ]
    },
    fictionalism: {
      label: "道德虚构主义",
      title: "道德虚构主义",
      body: "将道德话语保留为具有实践效用的“有用虚构”，而非对立场独立道德事实的字面报告。",
      claims: [
        "适合想保留道德实践但拒绝厚重本体承诺的路径。",
        "需解释在“虚构性承诺”下的真诚、动机与责任归属。"
      ]
    },
    relativism: {
      label: "认知主义相对主义",
      title: "认知主义道德相对主义",
      body: "道德命题可真可假，但真值可能相对于标准、框架或语境，而非普遍固定。",
      claims: [
        "可解释长期分歧而不把一方简单判定为全错。",
        "必须避免滑向任意性，同时保留跨框架批判可能。"
      ]
    },
    naturalism: {
      label: "道德自然主义",
      title: "道德自然主义",
      body: "道德事实是自然事实，或可在自然主义本体框架内被充分解释。",
      claims: [
        "优势在于与科学图景连续并具认识论可及性。",
        "但需解释规范性为何不退化为纯描述性事实。"
      ]
    },
    nonNaturalism: {
      label: "道德非自然主义",
      title: "道德非自然主义",
      body: "道德事实是不可还原的规范性事实，不能被简化为自然性质。",
      claims: [
        "可保留强规范性与客观约束力。",
        "但必须回答我们如何认识非自然性质。"
      ]
    },
    quasiRealism: {
      label: "拟实在论",
      title: "拟实在论",
      body: "在表达主义基础上重建类似实在论的话语效果，而不承诺厚重道德本体。",
      claims: [
        "尝试从非认知主义基础解释“真理”话语。",
        "仍需满足语义稳定与逻辑纪律要求。"
      ]
    },
    truthmakerMax: {
      label: "真值制造者最大化",
      title: "真值制造者最大化",
      body: "每一个真命题都需要对应的本体论真值制造者。",
      claims: [
        "若成立，反实在论必须详细交代道德真值根据。",
        "若不成立，反实在论语义将获得更多空间。"
      ]
    },
    queerness: {
      label: "奇异性论证",
      title: "奇异性论证",
      body: "经典反驳：客观道德性质在形上与认识上都显得过于奇异。",
      claims: [
        "主要针对强实在论版本。",
        "自然主义与非自然主义实在论均提出回应。"
      ]
    },
    fregeGeach: {
      label: "弗雷格-吉奇问题",
      title: "弗雷格-吉奇问题",
      body: "对非认知主义的关键挑战：在复杂逻辑嵌入中如何保持推理有效性。",
      claims: [
        "可行表达主义必须给出稳定解法。",
        "混合表达主义路径正是为弥补这一缺口。"
      ]
    },
    motivationInt: {
      label: "动机内在主义",
      title: "动机内在主义",
      body: "在正常理性条件下，真诚道德判断与行动动机存在必然联系。",
      claims: [
        "常被用于支持非认知主义语义说明。",
        "外在主义认知模型则主张动机联系是条件性的。"
      ]
    },
    evolutionDebunk: {
      label: "演化削弱论证",
      title: "演化削弱论证",
      body: "若道德信念主要由演化机制解释，可能削弱其真理追踪地位与证成力度。",
      claims: [
        "对实在论认识论提出可靠性挑战。",
        "其削弱力度取决于能否重建信念与真理的可靠关联。"
      ]
    },
    supervenience: {
      label: "道德随附性",
      title: "道德随附性",
      body: "若无非道德差异，就不应有道德差异；道德变化需依附描述性变化。",
      claims: [
        "常被视为跨理论共享的解释约束。",
        "不同理论对其为何成立给出截然不同说明。"
      ]
    },
    disagreement: {
      label: "道德分歧问题",
      title: "道德分歧问题",
      body: "深层道德分歧可能是信念冲突、实践态度冲突，或二者并存。",
      claims: [
        "认知主义倾向将其视为真理争议。",
        "非认知主义倾向将其视为实践不相容。"
      ]
    }
  }
};

const THEORY_DEEP_DIVE = {
  en: {
    cognitivism: {
      what: "Moral sentences function like ordinary assertions: they aim to state something that can be true or false.",
      why: "If cognitivism is right, moral disagreement is not just emotional conflict; it is a disagreement about what is true.",
      classic: "Embedding test: moral claims appear in negation and conditionals, which suggests proposition-like meaning."
    },
    noncognitivism: {
      what: "Moral language primarily expresses practical attitudes, commitments, or plans rather than descriptive belief content.",
      why: "It explains why moral judgment often seems action-guiding immediately, even before explicit reasoning about facts.",
      classic: "Motivational pull argument: sincere moral judgment seems internally linked to motivation in a way ordinary belief is not."
    },
    realist: {
      what: "Some moral claims are true because there are stance-independent moral facts, not merely local attitudes or conventions.",
      why: "Realism underwrites robust moral criticism across cultures, times, and social frameworks.",
      classic: "Explanatory argument: best explanation of deep moral error and progress may require objective moral facts."
    },
    nonRealistCog: {
      what: "Moral claims remain truth-apt, but truth does not require robust stance-independent moral entities.",
      why: "It preserves logical structure and truth-talk while avoiding heavyweight realist metaphysics.",
      classic: "Middle-path strategy: keep semantic discipline of cognitivism while rejecting realist ontology."
    },
    constructivism: {
      what: "Normative truths are generated by valid procedures of rational endorsement, agency, or public justification.",
      why: "It links normativity to what agents can justify to themselves and others under practical reason constraints.",
      classic: "Constitutivist move: standards emerge from what it is to be a rational agent, not from external moral objects."
    },
    errorTheory: {
      what: "Moral discourse is truth-apt, but ordinary positive moral claims are systematically false.",
      why: "It explains why moral talk looks cognitive while denying that the world contains the required moral properties.",
      classic: "Mackie-style inference: ordinary morality presupposes objective values, but such values do not exist."
    },
    fictionalism: {
      what: "We keep moral language as a useful fiction for coordination and critique, without literal ontological commitment.",
      why: "It protects practical utility of moral discourse while avoiding metaphysical costs of realism.",
      classic: "As-if strategy: speak and reason morally as if truths exist, while treating that framework instrumentally."
    },
    relativism: {
      what: "Moral truth is indexed to standards, frameworks, or contexts rather than fixed globally for all evaluators.",
      why: "It gives a structured account of persistent disagreement where both parties may be correct relative to standards.",
      classic: "Indexical model: one moral sentence can vary in truth across normative frameworks without semantic collapse."
    },
    expressivism: {
      what: "Moral assertions express practical attitudes, but sophisticated versions also model logical relations and inferential roles.",
      why: "It combines motivational explanation with a semantics designed to preserve validity in moral reasoning.",
      classic: "Higher-order expressivism: logical operators track relations among attitudes, not only truth-conditions."
    },
    prescriptivism: {
      what: "Moral judgment is fundamentally prescription: it issues universalizable directives rather than pure description.",
      why: "It captures action-guiding force and the practical role of moral language in decision contexts.",
      classic: "Universalizability constraint: if you prescribe in one case, consistency commits you to structurally similar cases."
    },
    naturalism: {
      what: "Moral facts are natural facts or reducible to naturalistically respectable properties and relations.",
      why: "It promises ontological and epistemic continuity between ethics and empirical inquiry.",
      classic: "Reduction project: identify moral properties with natural properties such as welfare, flourishing, or reasons-responsive facts."
    },
    nonNaturalism: {
      what: "Moral properties are irreducibly normative and cannot be reduced to purely natural properties.",
      why: "It preserves the distinctive authority of normativity when natural reduction seems to lose 'ought' force.",
      classic: "Open-question style pressure: proposed natural reductions leave genuine normative questions still open."
    },
    quasiRealism: {
      what: "Quasi-realism explains realist-seeming moral discourse from an anti-realist expressive base.",
      why: "It aims to retain truth-talk, objectivity-talk, and logical structure without robust realist ontology.",
      classic: "Projectivist vindication: explain why we are entitled to realist vocabulary through stable expressive practices."
    },
    truthmakerMax: {
      what: "Truthmaker maximalism says every true proposition needs something in reality that makes it true.",
      why: "It is a strong metaphysical filter: if accepted, moral truth claims require a clear ontological grounding story.",
      classic: "Grounding challenge: if no suitable moral truthmakers exist, robust moral truth looks threatened."
    },
    queerness: {
      what: "Queerness argues that objective moral properties would be metaphysically strange and epistemically hard to access.",
      why: "It targets realist ontology and realist epistemology simultaneously.",
      classic: "Dual oddness claim: if moral facts are action-guiding by themselves, they may be unlike anything else we know."
    },
    fregeGeach: {
      what: "Frege-Geach asks whether non-cognitivist semantics can preserve valid inference when moral claims are embedded in conditionals, negations, and arguments.",
      why: "Without a solution, standard moral reasoning patterns seem to break under expressivist interpretations.",
      classic: "Pattern: from 'Lying is wrong' and 'If lying is wrong, inducing lying is wrong' infer 'Inducing lying is wrong' with full validity."
    },
    motivationInt: {
      what: "Motivation internalism claims sincere moral judgment is necessarily connected to motivation, at least under normal conditions.",
      why: "It is a central test for whether moral judgment behaves like belief alone or like a practical-attitudinal state.",
      classic: "Amoralist problem: can someone judge an act wrong yet have no motivation at all?"
    },
    evolutionDebunk: {
      what: "Debunking arguments claim many moral beliefs are explained by evolutionary forces not aimed at moral truth.",
      why: "If genealogical origins are disconnected from truth-tracking, justificatory confidence can be undercut.",
      classic: "Reliability challenge: explain why evolved moral cognition should still be expected to track objective moral truth."
    },
    supervenience: {
      what: "Moral supervenience says no moral difference without some non-moral difference.",
      why: "It imposes structural discipline on moral explanation across competing metaethical views.",
      classic: "Twin-case test: if two cases are identical in all non-moral respects, differing moral verdicts require explanation."
    },
    disagreement: {
      what: "The disagreement problem asks what deep moral disagreement consists in: belief conflict, attitude conflict, or both.",
      why: "A theory of disagreement shapes semantics, epistemology, and what counts as rational resolution.",
      classic: "Peer conflict case: when informed, sincere, reflective agents diverge, what follows for each side's confidence?"
    }
  },
  zh: {
    cognitivism: {
      what: "道德语句像一般断言一样，旨在陈述可真可假的命题内容。",
      why: "若认知主义成立，道德分歧不仅是情绪冲突，而是关于真理的冲突。",
      classic: "嵌入检验：道德语句能进入否定句和条件句，显示其具有命题型意义。"
    },
    noncognitivism: {
      what: "道德语言主要表达实践态度、承诺或行动计划，而非单纯描述性信念。",
      why: "它可解释道德判断为何常常天然带有行动推动力。",
      classic: "动机牵引论证：真诚道德判断与动机联系比一般信念更紧密。"
    },
    realist: {
      what: "部分道德命题为真，是因为存在独立于立场的道德事实，而非仅由态度或习俗决定。",
      why: "实在论可支撑跨文化、跨时代的强批判与道德进步叙事。",
      classic: "解释论证：对严重道德错误与进步的最佳解释可能需要客观道德事实。"
    },
    nonRealistCog: {
      what: "道德命题保持真值适格，但其真值不依赖厚重的立场独立道德实体。",
      why: "它在保留真值与逻辑结构的同时，降低实在论本体负担。",
      classic: "中间路径：保留认知主义语义纪律，同时拒绝强实在论本体承诺。"
    },
    constructivism: {
      what: "规范真理由理性程序、行动者承诺或公共正当化过程生成。",
      why: "它将规范性与可反思辩护性直接连接起来。",
      classic: "构成性路径：规范标准来自理性行动者之构成条件，而非外在道德对象。"
    },
    errorTheory: {
      what: "道德话语可真可假，但日常积极道德命题系统性为假。",
      why: "它保留认知语义外观，同时否认世界中存在相应道德性质。",
      classic: "麦基式推论：常识道德预设客观价值，但此类价值并不存在。"
    },
    fictionalism: {
      what: "在不作字面本体承诺的前提下，将道德话语作为有用虚构继续使用。",
      why: "可保留道德实践功能，同时避免实在论形上成本。",
      classic: "“仿佛如此”策略：在实践中继续道德推理，但将其视为工具性框架。"
    },
    relativism: {
      what: "道德真值相对于规范标准、框架或语境，而非对所有评价者全局固定。",
      why: "它为长期分歧提供结构化说明，不必把一方直接判定为全错。",
      classic: "指标化模型：同一命题可在不同规范框架下呈现不同真值。"
    },
    expressivism: {
      what: "道德断言表达实践态度；成熟版本同时解释逻辑关系与推理角色。",
      why: "它试图把动机解释力与逻辑有效性统一起来。",
      classic: "高阶表达主义：逻辑联结词刻画态度间结构关系，而非仅刻画真值条件。"
    },
    prescriptivism: {
      what: "道德判断本质上是可普遍化的规范指令，而非纯描述。",
      why: "它抓住道德语言在行动指导中的核心功能。",
      classic: "普遍化一致性：若你在一例中发出规范指令，平行案例中也需承担一致承诺。"
    },
    naturalism: {
      what: "道德事实是自然事实，或可还原为自然主义框架下可接受的性质关系。",
      why: "它让伦理学与经验科学保持本体与认识上的连续性。",
      classic: "还原计划：将道德性质识别为福祉、繁荣或理由响应等自然性质。"
    },
    nonNaturalism: {
      what: "道德性质是不可还原的规范性性质，不能完全化约为自然性质。",
      why: "当自然还原损失“应当”力量时，它保留规范权威性。",
      classic: "开放问题压力：自然化定义后，真正的规范问题仍然可被继续追问。"
    },
    quasiRealism: {
      what: "在反实在论表达基础上解释看似实在论的道德话语结构。",
      why: "目标是在不承诺强实在本体时，保留真理与客观性话语。",
      classic: "投射主义辩护：通过稳定表达实践解释我们为何有资格使用实在论语汇。"
    },
    truthmakerMax: {
      what: "真值制造者最大化主张每个真命题都需要现实中的对应“使真者”。",
      why: "它是强形上筛选器：若接受它，道德真理必须给出明确本体根据。",
      classic: "奠基挑战：若无合适道德使真者，强意义道德真理将面临威胁。"
    },
    queerness: {
      what: "奇异性论证认为客观道德性质在形上与认识上都过于奇异。",
      why: "它同时冲击实在论本体与实在论认识论。",
      classic: "双重奇异主张：若道德事实自带行动牵引力，它们将与其他已知事实类型非常不同。"
    },
    fregeGeach: {
      what: "弗雷格-吉奇问题追问：非认知主义能否在条件句、否定句与复合论证中保留推理有效性。",
      why: "若无法解决，表达主义解释下的常见道德推理将出现失效风险。",
      classic: "经典形式：由“说谎是错的”与“若说谎错，则诱导说谎也错”推出“诱导说谎错”。"
    },
    motivationInt: {
      what: "动机内在主义主张：真诚道德判断在正常条件下必然连接某种行动动机。",
      why: "它是检验道德判断究竟更像纯信念还是实践态度状态的关键议题。",
      classic: "无动机者问题：一个人能否真诚判断某行为错误却完全无行动动机？"
    },
    evolutionDebunk: {
      what: "演化削弱论证认为：许多道德信念可由演化机制解释，而这些机制未必以道德真理为目标。",
      why: "若信念起源与真理追踪脱钩，其证成信心会被削弱。",
      classic: "可靠性挑战：说明演化形成的道德认知为何仍应被期待追踪客观真理。"
    },
    supervenience: {
      what: "道德随附性指出：没有非道德差异，就不应出现道德差异。",
      why: "它为各类元伦理理论施加结构约束，防止任意道德判定。",
      classic: "双案例检验：若两案非道德事实完全一致，道德结论差异必须可解释。"
    },
    disagreement: {
      what: "分歧问题追问深层道德分歧究竟是信念冲突、态度冲突，还是两者并存。",
      why: "对分歧性质的判断会改变语义理论、认识论标准与“何谓合理收敛”。",
      classic: "同侪分歧案例：信息充分且真诚的理性主体分歧时，双方应如何更新置信度？"
    }
  }
};

const THEORY_ISSUE_RELATION_DETAILS = {
  en: {
    "nonRealistCog|truthmakerMax": {
      reason: "Non-realist cognitivists often allow moral truth without robust worldly truthmakers. Truthmaker maximalism denies that option by requiring a truthmaker for every truth, so it pressures this view.",
      sources: [
        { label: "SEP: Truthmakers", url: "https://plato.stanford.edu/entries/truthmakers/" },
        { label: "Jack & Khuramy (2025)", url: "https://link.springer.com/article/10.1007/s44204-025-00268-w" },
        { label: "Suikkanen (2017)", url: "https://link.springer.com/article/10.1007/s12136-016-0300-5" }
      ]
    },
    "errorTheory|truthmakerMax": {
      reason: "Error theory says ordinary positive moral claims are systematically false because objective values are absent. If truths require truthmakers, missing moral truthmakers reinforce that anti-realist diagnosis.",
      sources: [
        { label: "SEP: Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" },
        { label: "SEP: Truthmakers", url: "https://plato.stanford.edu/entries/truthmakers/" }
      ]
    },
    "constructivism|truthmakerMax": {
      reason: "Constructivists typically reject simple fact-correspondence models of moral truth. Maximalism raises the burden: what exactly makes constructed moral truths true?",
      sources: [
        { label: "SEP: Constructivism in Metaethics", url: "https://plato.stanford.edu/entries/constructivism-metaethics/" },
        { label: "SEP: Truthmakers", url: "https://plato.stanford.edu/entries/truthmakers/" }
      ]
    },
    "fictionalism|truthmakerMax": {
      reason: "Fictionalism keeps moral discourse while weakening literal ontological commitment. If maximalism requires heavyweight truthmakers for literal truth, fictionalist 'as-if' practice can look comparatively attractive.",
      sources: [
        { label: "SEP: Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" },
        { label: "SEP: Truthmakers", url: "https://plato.stanford.edu/entries/truthmakers/" }
      ]
    },
    "realist|queerness": {
      reason: "The queerness argument targets realism directly: stance-independent moral properties are said to be metaphysically and epistemically unlike anything else.",
      sources: [
        { label: "SEP: Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" },
        { label: "SEP: Moral Realism", url: "https://plato.stanford.edu/entries/moral-realism/" }
      ]
    },
    "expressivism|fregeGeach": {
      reason: "Frege-Geach is a core test for expressivism: it must preserve valid inference when moral sentences occur inside conditionals, negations, and other embeddings.",
      sources: [
        { label: "SEP: Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" },
        { label: "SEP: Moral Cognitivism", url: "https://plato.stanford.edu/entries/moral-cognitivism/" }
      ]
    },
    "quasiRealism|fregeGeach": {
      reason: "Quasi-realism is designed to recover realist-looking logic from an expressivist base, so Frege-Geach remains a standing stress test for whether that reconstruction succeeds.",
      sources: [
        { label: "SEP: Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" }
      ]
    },
    "noncognitivism|motivationInt": {
      reason: "Motivation internalism is a natural fit for non-cognitivism because attitude-expressing judgments are expected to be action-guiding by default.",
      sources: [
        { label: "SEP: Moral Motivation", url: "https://plato.stanford.edu/entries/moral-motivation/" },
        { label: "SEP: Moral Cognitivism", url: "https://plato.stanford.edu/entries/moral-cognitivism/" }
      ]
    },
    "cognitivism|motivationInt": {
      reason: "If internalism is strict, cognitivism must explain how belief-like moral judgment necessarily motivates, often via added desire or rationality conditions.",
      sources: [
        { label: "SEP: Moral Motivation", url: "https://plato.stanford.edu/entries/moral-motivation/" },
        { label: "SEP: Moral Cognitivism", url: "https://plato.stanford.edu/entries/moral-cognitivism/" }
      ]
    },
    "fictionalism|motivationInt": {
      reason: "Because fictionalism treats some moral commitment as non-literal or make-believe, it faces pressure to explain how that stance still yields robust practical motivation.",
      sources: [
        { label: "Philosophy Compass: Moral Fictionalism", url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/phc3.12406" },
        { label: "SEP: Moral Motivation", url: "https://plato.stanford.edu/entries/moral-motivation/" }
      ]
    },
    "realist|evolutionDebunk": {
      reason: "Evolutionary debunking pressures realism by asking whether moral beliefs track independent moral truth, rather than merely adaptive social behavior.",
      sources: [
        { label: "SEP: Moral Epistemology", url: "https://plato.stanford.edu/entries/moral-epistemology/" },
        { label: "SEP: Moral Realism", url: "https://plato.stanford.edu/entries/moral-realism/" }
      ]
    },
    "realist|supervenience": {
      reason: "Realists usually treat supervenience as a structural requirement: no moral difference without some non-moral difference. The burden is to explain why that dependence holds.",
      sources: [
        { label: "SEP: Moral Naturalism", url: "https://plato.stanford.edu/entries/naturalism-moral/" },
        { label: "SEP: Moral Realism", url: "https://plato.stanford.edu/entries/moral-realism/" }
      ]
    },
    "constructivism|supervenience": {
      reason: "Constructivist theories are evaluated partly by whether they preserve supervenience and case-consistency while grounding normativity in practical procedures.",
      sources: [
        { label: "Meyers (2024): Constructivism and Supervenience", url: "https://www.aquila.usm.edu/fac_pubs/12917/" },
        { label: "SEP: Constructivism in Metaethics", url: "https://plato.stanford.edu/entries/constructivism-metaethics/" }
      ]
    },
    "relativism|supervenience": {
      reason: "Relativist truth-indexing can allow divergent moral verdicts over the same descriptive base across standards, so relativism must reconcile that with supervenience constraints.",
      sources: [
        { label: "SEP: Moral Relativism", url: "https://plato.stanford.edu/entries/moral-relativism/" },
        { label: "SEP: Moral Naturalism", url: "https://plato.stanford.edu/entries/naturalism-moral/" }
      ]
    },
    "cognitivism|disagreement": {
      reason: "Cognitivism typically models disagreement as conflict in belief-content and truth-claims, so it must explain persistence, peer conflict, and revision norms.",
      sources: [
        { label: "SEP: Moral Disagreement", url: "https://plato.stanford.edu/entries/disagreement-moral/" },
        { label: "SEP: Moral Cognitivism", url: "https://plato.stanford.edu/entries/moral-cognitivism/" }
      ]
    },
    "noncognitivism|disagreement": {
      reason: "Non-cognitivist accounts treat many disagreements as clashes in practical attitudes, so they are constrained to explain why this still captures ordinary argumentative practice.",
      sources: [
        { label: "SEP: Moral Disagreement", url: "https://plato.stanford.edu/entries/disagreement-moral/" },
        { label: "SEP: Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" }
      ]
    },
    "relativism|disagreement": {
      reason: "Relativism is attractive in part because it can model some deep disputes as faultless disagreement relative to different standards or frameworks.",
      sources: [
        { label: "SEP: Moral Disagreement", url: "https://plato.stanford.edu/entries/disagreement-moral/" },
        { label: "SEP: Moral Relativism", url: "https://plato.stanford.edu/entries/moral-relativism/" }
      ]
    }
  },
  zh: {
    "nonRealistCog|truthmakerMax": {
      reason: "非实在论认知主义常允许“无使真者真理”路径；而真值制造者最大化要求每个真命题都要有使真者，因此会直接对该路径施压。",
      sources: [
        { label: "SEP：Truthmakers", url: "https://plato.stanford.edu/entries/truthmakers/" },
        { label: "Jack & Khuramy（2025）", url: "https://link.springer.com/article/10.1007/s44204-025-00268-w" },
        { label: "Suikkanen（2017）", url: "https://link.springer.com/article/10.1007/s12136-016-0300-5" }
      ]
    },
    "errorTheory|truthmakerMax": {
      reason: "错误理论认为日常积极道德命题系统性为假。若再接受“真命题必须有使真者”，则“缺少道德使真者”会进一步支持该反实在诊断。",
      sources: [
        { label: "SEP：Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" },
        { label: "SEP：Truthmakers", url: "https://plato.stanford.edu/entries/truthmakers/" }
      ]
    },
    "constructivism|truthmakerMax": {
      reason: "建构主义通常不接受简单的“事实对应”真理论。最大化原则会提高其说明负担：建构出来的道德真理究竟由什么使其为真？",
      sources: [
        { label: "SEP：Constructivism in Metaethics", url: "https://plato.stanford.edu/entries/constructivism-metaethics/" },
        { label: "SEP：Truthmakers", url: "https://plato.stanford.edu/entries/truthmakers/" }
      ]
    },
    "fictionalism|truthmakerMax": {
      reason: "虚构主义保留道德话语但弱化字面本体承诺。若最大化要求字面真理必须有强使真者，则“仿佛如此”的虚构主义路径会显得更有吸引力。",
      sources: [
        { label: "SEP：Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" },
        { label: "SEP：Truthmakers", url: "https://plato.stanford.edu/entries/truthmakers/" }
      ]
    },
    "realist|queerness": {
      reason: "奇异性论证直接瞄准实在论：若客观道德性质在形上和认识上都过于异类，实在论就面临系统性压力。",
      sources: [
        { label: "SEP：Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" },
        { label: "SEP：Moral Realism", url: "https://plato.stanford.edu/entries/moral-realism/" }
      ]
    },
    "expressivism|fregeGeach": {
      reason: "弗雷格-吉奇问题是表达主义的核心检验：它必须解释道德句嵌入条件句、否定句等语境时为何仍能保持有效推理。",
      sources: [
        { label: "SEP：Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" },
        { label: "SEP：Moral Cognitivism", url: "https://plato.stanford.edu/entries/moral-cognitivism/" }
      ]
    },
    "quasiRealism|fregeGeach": {
      reason: "拟实在论本就试图在表达主义基础上重建“像实在论一样”的逻辑与真理话语，因此弗雷格-吉奇始终是其压力测试。",
      sources: [
        { label: "SEP：Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" }
      ]
    },
    "noncognitivism|motivationInt": {
      reason: "动机内在主义与非认知主义较为契合：若道德判断主要表达实践态度，它天然更容易解释行动推动力。",
      sources: [
        { label: "SEP：Moral Motivation", url: "https://plato.stanford.edu/entries/moral-motivation/" },
        { label: "SEP：Moral Cognitivism", url: "https://plato.stanford.edu/entries/moral-cognitivism/" }
      ]
    },
    "cognitivism|motivationInt": {
      reason: "若采用强内在主义，认知主义需解释“信念式道德判断为何必然激发动机”，通常要加入欲望或理性条件。",
      sources: [
        { label: "SEP：Moral Motivation", url: "https://plato.stanford.edu/entries/moral-motivation/" },
        { label: "SEP：Moral Cognitivism", url: "https://plato.stanford.edu/entries/moral-cognitivism/" }
      ]
    },
    "fictionalism|motivationInt": {
      reason: "若道德承诺被理解为“非字面”或“仿佛如此”，虚构主义就需解释这种承诺在严肃实践中如何保持稳定动机效力。",
      sources: [
        { label: "Philosophy Compass：Moral Fictionalism", url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/phc3.12406" },
        { label: "SEP：Moral Motivation", url: "https://plato.stanford.edu/entries/moral-motivation/" }
      ]
    },
    "realist|evolutionDebunk": {
      reason: "演化削弱论证会追问：道德信念是追踪客观真理，还是仅反映适应性机制？这对实在论认识论构成直接压力。",
      sources: [
        { label: "SEP：Moral Epistemology", url: "https://plato.stanford.edu/entries/moral-epistemology/" },
        { label: "SEP：Moral Realism", url: "https://plato.stanford.edu/entries/moral-realism/" }
      ]
    },
    "realist|supervenience": {
      reason: "实在论通常把随附性当作结构性要求：无非道德差异则无道德差异；其任务是说明这种依赖为何成立。",
      sources: [
        { label: "SEP：Moral Naturalism", url: "https://plato.stanford.edu/entries/naturalism-moral/" },
        { label: "SEP：Moral Realism", url: "https://plato.stanford.edu/entries/moral-realism/" }
      ]
    },
    "constructivism|supervenience": {
      reason: "评估建构主义时，关键之一是它能否在程序性奠基下仍保留随附性与案例一致性。",
      sources: [
        { label: "Meyers（2024）：Constructivism and Supervenience", url: "https://www.aquila.usm.edu/fac_pubs/12917/" },
        { label: "SEP：Constructivism in Metaethics", url: "https://plato.stanford.edu/entries/constructivism-metaethics/" }
      ]
    },
    "relativism|supervenience": {
      reason: "相对主义按标准索引真值，可能导致在相同描述事实下给出不同道德结论，因此需额外解释如何与随附性约束兼容。",
      sources: [
        { label: "SEP：Moral Relativism", url: "https://plato.stanford.edu/entries/moral-relativism/" },
        { label: "SEP：Moral Naturalism", url: "https://plato.stanford.edu/entries/naturalism-moral/" }
      ]
    },
    "cognitivism|disagreement": {
      reason: "认知主义通常将道德分歧理解为信念与真理主张冲突，因此必须解释分歧持续、同侪冲突与修正规范。",
      sources: [
        { label: "SEP：Moral Disagreement", url: "https://plato.stanford.edu/entries/disagreement-moral/" },
        { label: "SEP：Moral Cognitivism", url: "https://plato.stanford.edu/entries/moral-cognitivism/" }
      ]
    },
    "noncognitivism|disagreement": {
      reason: "非认知主义将许多分歧视为实践态度冲突，因此受约束于：它能否充分解释日常论证中的“像真理争议一样”的特征。",
      sources: [
        { label: "SEP：Moral Disagreement", url: "https://plato.stanford.edu/entries/disagreement-moral/" },
        { label: "SEP：Moral Anti-Realism", url: "https://plato.stanford.edu/entries/moral-anti-realism/" }
      ]
    },
    "relativism|disagreement": {
      reason: "相对主义的一大吸引力在于可将部分深层分歧解释为“相对于不同标准都可成立”的无过错分歧。",
      sources: [
        { label: "SEP：Moral Disagreement", url: "https://plato.stanford.edu/entries/disagreement-moral/" },
        { label: "SEP：Moral Relativism", url: "https://plato.stanford.edu/entries/moral-relativism/" }
      ]
    }
  }
};

const DISCOURSE_GRAPH_SPEC = {
  nodes: [
    { id: "sandel", x: 12, y: 18, type: "theory" },
    { id: "habermas", x: 30, y: 14, type: "theory" },
    { id: "rawls", x: 48, y: 18, type: "theory" },
    { id: "mouffe", x: 66, y: 18, type: "theory" },
    { id: "mill", x: 84, y: 22, type: "theory" },
    { id: "fricker", x: 74, y: 40, type: "theory" },
    { id: "legitimacy", x: 20, y: 42, type: "issue" },
    { id: "publicReason", x: 42, y: 42, type: "issue" },
    { id: "consensus", x: 62, y: 42, type: "issue" },
    { id: "speechHarm", x: 84, y: 46, type: "issue" },
    { id: "neutrality", x: 34, y: 66, type: "issue" },
    { id: "inclusionPower", x: 62, y: 68, type: "issue" },
    { id: "civilityProtest", x: 48, y: 84, type: "issue" }
  ],
  edges: [
    { from: "sandel", to: "habermas", type: "agreement" },
    { from: "habermas", to: "rawls", type: "agreement" },
    { from: "habermas", to: "fricker", type: "agreement" },
    { from: "rawls", to: "mill", type: "agreement" },
    { from: "mouffe", to: "fricker", type: "agreement" },
    { from: "sandel", to: "rawls", type: "disagreement" },
    { from: "habermas", to: "mouffe", type: "disagreement" },
    { from: "rawls", to: "mouffe", type: "disagreement" },
    { from: "mill", to: "fricker", type: "disagreement" },
    { from: "sandel", to: "legitimacy", type: "issue" },
    { from: "sandel", to: "neutrality", type: "issue" },
    { from: "habermas", to: "legitimacy", type: "issue" },
    { from: "habermas", to: "publicReason", type: "issue" },
    { from: "habermas", to: "consensus", type: "issue" },
    { from: "habermas", to: "inclusionPower", type: "issue" },
    { from: "rawls", to: "publicReason", type: "issue" },
    { from: "rawls", to: "neutrality", type: "issue" },
    { from: "rawls", to: "civilityProtest", type: "issue" },
    { from: "mouffe", to: "consensus", type: "issue" },
    { from: "mouffe", to: "inclusionPower", type: "issue" },
    { from: "mouffe", to: "civilityProtest", type: "issue" },
    { from: "mill", to: "speechHarm", type: "issue" },
    { from: "mill", to: "civilityProtest", type: "issue" },
    { from: "fricker", to: "inclusionPower", type: "issue" },
    { from: "fricker", to: "speechHarm", type: "issue" },
    { from: "fricker", to: "publicReason", type: "issue" }
  ]
};

const DISCOURSE_NODE_COPY = {
  en: {
    sandel: {
      label: "Sandel",
      title: "Sandel: Civic Moral Inquiry",
      body: "Public discourse should openly engage substantive moral visions of justice, responsibility, and civic purpose.",
      agreements: [
        "With Habermas: public legitimacy requires reason-giving beyond private preference."
      ],
      disagreements: [
        "With Rawlsian restraint when public debate is narrowed to thinner political reasons."
      ],
      disputes: [
        "Neutrality vs moral-civic formation.",
        "Whether procedure alone can legitimate law."
      ]
    },
    habermas: {
      label: "Habermas",
      title: "Habermas: Discourse Legitimacy",
      body: "Norms are legitimate when affected participants could accept them under fair, inclusive, reason-giving conditions.",
      agreements: [
        "With Rawls: reciprocal justification matters.",
        "With Fricker: distorted uptake and exclusion undermine legitimacy."
      ],
      disagreements: [
        "With Mouffe: consensus remains a regulative aim, not merely managed antagonism."
      ],
      disputes: [
        "Source of legitimacy.",
        "Consensus vs contest.",
        "Power and inclusion in real institutions."
      ]
    },
    rawls: {
      label: "Rawls",
      title: "Rawls: Public Reason Restraint",
      body: "On constitutional essentials and basic justice, citizens owe one another reasons others can reasonably assess.",
      agreements: [
        "With Habermas: legitimacy needs public justification.",
        "With Mill: institutions should protect basic liberties."
      ],
      disagreements: [
        "With Sandel: how far politics should rely on thick moral doctrines.",
        "With Mouffe: whether persistent antagonism displaces consensus-seeking."
      ],
      disputes: [
        "Scope of public reason.",
        "Neutrality vs perfectionism.",
        "Civility obligations under injustice."
      ]
    },
    mouffe: {
      label: "Mouffe",
      title: "Mouffe: Agonistic Public Sphere",
      body: "Democracy should transform enemies into legitimate adversaries; conflict is enduring and constitutive, not eliminable.",
      agreements: [
        "With Fricker: power asymmetries and exclusion are central facts of public discourse."
      ],
      disagreements: [
        "With Habermas and Rawls: idealized consensus can mask domination."
      ],
      disputes: [
        "Consensus vs contestation.",
        "Role of protest and rupture in democratic life.",
        "How institutions should stage disagreement."
      ]
    },
    mill: {
      label: "Mill",
      title: "Mill: Liberty and Error-Correction",
      body: "Wide speech liberty helps truth-tracking and protects individuality, but harm principles still constrain coercive interference.",
      agreements: [
        "With Rawls: civil liberties are foundational constraints on state power."
      ],
      disagreements: [
        "With Fricker-inspired regulation if harm thresholds are set too aggressively."
      ],
      disputes: [
        "Speech freedom vs harm reduction.",
        "How civility norms interact with robust dissent."
      ]
    },
    fricker: {
      label: "Fricker",
      title: "Fricker: Epistemic Justice",
      body: "Public discourse fails when speakers are denied credibility or interpretive resources due to structural injustice.",
      agreements: [
        "With Habermas: equal participation conditions are normatively central.",
        "With Mouffe: real discourse is shaped by power, not only ideal procedure."
      ],
      disagreements: [
        "With strong Millian laissez-faire if it ignores testimonial and hermeneutical harms."
      ],
      disputes: [
        "Power and inclusion in deliberation.",
        "Speech protection vs anti-silencing safeguards."
      ]
    },
    legitimacy: {
      label: "Legitimacy Source",
      title: "Underlying Dispute: Source of Legitimacy",
      body: "Is legitimacy grounded mainly in fair procedure, in substantive moral ends, or in an institutional balance of both?",
      agreements: [
        "Habermas and Rawls both center public justifiability."
      ],
      disagreements: [
        "Sandel argues substantive civic ends cannot be bracketed.",
        "Mouffe emphasizes irreducible antagonism."
      ],
      disputes: [
        "Procedural legitimacy vs substantive legitimacy."
      ]
    },
    publicReason: {
      label: "Public Reason Scope",
      title: "Underlying Dispute: Scope of Public Reason",
      body: "How far must citizens translate claims into generally shareable reasons, and when can thicker moral language remain admissible?",
      agreements: [
        "Rawls and Habermas both require reciprocal reason-giving in core political domains."
      ],
      disagreements: [
        "Sandel is less restrictive about thick moral vocabularies in civic argument.",
        "Mouffe doubts neutral translation can dissolve power conflict."
      ],
      disputes: [
        "Constitutional essentials vs wider civil sphere.",
        "Translation duty and its limits."
      ]
    },
    consensus: {
      label: "Consensus vs Contest",
      title: "Underlying Dispute: Consensus vs Agonism",
      body: "Should institutions aim at reasoned convergence or at stable, rule-bound contest among enduringly opposed positions?",
      agreements: [
        "Habermas and Rawls retain consensus as a regulative orientation."
      ],
      disagreements: [
        "Mouffe treats persistent contest as a core democratic condition."
      ],
      disputes: [
        "Deliberative legitimacy vs agonistic legitimacy."
      ]
    },
    speechHarm: {
      label: "Speech and Harm",
      title: "Underlying Dispute: Speech Freedom and Harm",
      body: "How should public institutions protect open expression while also preventing silencing, intimidation, and epistemic injury?",
      agreements: [
        "Mill and Rawls protect broad expressive liberty."
      ],
      disagreements: [
        "Fricker emphasizes harms that are not captured by narrow coercion tests."
      ],
      disputes: [
        "Counterspeech vs regulation.",
        "Direct harm vs structural silencing."
      ]
    },
    neutrality: {
      label: "Neutrality Question",
      title: "Underlying Dispute: Neutrality vs Perfectionism",
      body: "Must public institutions stay neutral among conceptions of the good, or can they legitimately cultivate civic virtues?",
      agreements: [
        "Rawls defends stronger institutional restraint on perfectionist aims."
      ],
      disagreements: [
        "Sandel permits thicker moral-civic orientation in public argument."
      ],
      disputes: [
        "Political neutrality and civic education."
      ]
    },
    inclusionPower: {
      label: "Power and Inclusion",
      title: "Underlying Dispute: Inclusion, Power, and Uptake",
      body: "Who is effectively heard in discourse, and how should institutions correct credibility deficits and structural exclusion?",
      agreements: [
        "Habermas and Fricker both require inclusion conditions, though with different diagnostics."
      ],
      disagreements: [
        "Mouffe stresses adversarial power conflict more than ideal procedural repair."
      ],
      disputes: [
        "Ideal conditions vs non-ideal institutional design."
      ]
    },
    civilityProtest: {
      label: "Civility vs Protest",
      title: "Underlying Dispute: Civility and Disruption",
      body: "When institutions are unjust, should public reason norms prioritize civility or recognize disruptive protest as democratically necessary?",
      agreements: [
        "Rawls and Mill retain strong constraints on coercive suppression."
      ],
      disagreements: [
        "Mouffe allows sharper antagonistic expression.",
        "Habermasian approaches often retain stricter discourse norms."
      ],
      disputes: [
        "Orderly deliberation vs justice-driven disruption."
      ]
    }
  },
  zh: {
    sandel: {
      label: "桑德尔",
      title: "桑德尔：公民道德探究",
      body: "公共论辩应正面讨论关于正义、责任与共同善的实质性道德愿景，而非将其排除在政治之外。",
      agreements: [
        "与哈贝马斯一致：公共正当性需要可被他人检验的理由，而非私人偏好。"
      ],
      disagreements: [
        "与罗尔斯式克制存在张力：若公共理由过薄，重要道德争议会被遮蔽。"
      ],
      disputes: [
        "中立性 vs 公民德性塑造。",
        "程序本身是否足以提供正当性。"
      ]
    },
    habermas: {
      label: "哈贝马斯",
      title: "哈贝马斯：话语正当性",
      body: "当受影响者能在平等、包容、给出理由的条件下合理接受规范时，规范才具正当性。",
      agreements: [
        "与罗尔斯一致：互惠式公共辩护是核心标准。",
        "与弗里克一致：排斥与失真接纳会破坏公共正当性。"
      ],
      disagreements: [
        "与墨菲分歧：协商性收敛仍应作为规范目标，而非仅管理对抗。"
      ],
      disputes: [
        "正当性的来源。",
        "共识与竞争关系。",
        "现实制度中的权力与包容。"
      ]
    },
    rawls: {
      label: "罗尔斯",
      title: "罗尔斯：公共理性克制",
      body: "在宪制核心与基本正义问题上，公民应给出他人可合理评估的公共理由。",
      agreements: [
        "与哈贝马斯一致：正当性依赖公共可辩护性。",
        "与密尔一致：基本自由应受制度性保障。"
      ],
      disagreements: [
        "与桑德尔分歧：政治中可否更多依赖厚重道德语言。",
        "与墨菲分歧：持续对抗是否取代协商收敛目标。"
      ],
      disputes: [
        "公共理性的适用范围。",
        "中立性与完善主义之争。",
        "不公情境下的文明表达义务。"
      ]
    },
    mouffe: {
      label: "墨菲",
      title: "墨菲：竞争性公共领域",
      body: "民主的任务不是消除冲突，而是将敌我关系转化为规则内的正当对手关系。",
      agreements: [
        "与弗里克一致：公共论辩深受权力结构与排斥机制影响。"
      ],
      disagreements: [
        "与哈贝马斯、罗尔斯分歧：理想化共识可能掩盖支配关系。"
      ],
      disputes: [
        "协商共识 vs 持续竞争。",
        "抗议与破局在民主中的角色。",
        "制度如何组织分歧。"
      ]
    },
    mill: {
      label: "密尔",
      title: "密尔：自由与纠错",
      body: "广泛言论自由有助于求真与个体发展，但伤害原则仍可限制强制性干预边界。",
      agreements: [
        "与罗尔斯一致：公民自由是国家权力的重要边界。"
      ],
      disagreements: [
        "与弗里克式更强监管存在张力：伤害阈值不应被过度扩张。"
      ],
      disputes: [
        "言论自由与伤害控制。",
        "文明规范与激烈异议的关系。"
      ]
    },
    fricker: {
      label: "弗里克",
      title: "弗里克：认知正义",
      body: "当发言者因结构性不公而被系统性低估可信度或缺乏解释资源时，公共论辩即发生失真。",
      agreements: [
        "与哈贝马斯一致：平等参与条件具有规范核心地位。",
        "与墨菲一致：现实讨论空间无法脱离权力结构。"
      ],
      disagreements: [
        "与强密尔式放任分歧：仅保护形式自由不足以避免“被沉默”。"
      ],
      disputes: [
        "讨论空间中的权力与包容。",
        "言论保护与反沉默机制平衡。"
      ]
    },
    legitimacy: {
      label: "正当性来源",
      title: "底层争议：正当性的来源",
      body: "正当性主要来自公平程序、来自实质道德目标，还是两者的制度组合？",
      agreements: [
        "哈贝马斯与罗尔斯都强调面向公民的可辩护性。"
      ],
      disagreements: [
        "桑德尔强调共同善不能被程序完全替代。",
        "墨菲强调对抗性冲突不可被程序消解。"
      ],
      disputes: [
        "程序正当性 vs 实质正当性。"
      ]
    },
    publicReason: {
      label: "公共理性范围",
      title: "底层争议：公共理性的适用范围",
      body: "公民在多大范围内必须将主张翻译为可共享理由，何时可保留更厚重的道德语言？",
      agreements: [
        "罗尔斯与哈贝马斯都要求核心政治问题中的互惠理由。"
      ],
      disagreements: [
        "桑德尔对厚重道德语言更开放。",
        "墨菲质疑中立翻译可化解权力冲突。"
      ],
      disputes: [
        "宪制核心与公民社会的区分。",
        "翻译义务及其边界。"
      ]
    },
    consensus: {
      label: "共识与竞争",
      title: "底层争议：共识导向还是竞争导向",
      body: "制度应追求理性收敛，还是应承认并组织长期存在的规则内竞争？",
      agreements: [
        "哈贝马斯与罗尔斯保留共识导向的规范理想。"
      ],
      disagreements: [
        "墨菲认为持续竞争本身即民主常态。"
      ],
      disputes: [
        "协商正当性 vs 竞争正当性。"
      ]
    },
    speechHarm: {
      label: "言论与伤害",
      title: "底层争议：言论自由与伤害控制",
      body: "公共制度如何在保障表达自由的同时，抑制恐吓、沉默效应与认知性伤害？",
      agreements: [
        "密尔与罗尔斯都高度重视表达自由。"
      ],
      disagreements: [
        "弗里克强调许多伤害并非狭义强制模型可充分识别。"
      ],
      disputes: [
        "反言论优先还是制度性规制。",
        "直接伤害与结构性沉默。"
      ]
    },
    neutrality: {
      label: "中立性问题",
      title: "底层争议：中立性与完善主义",
      body: "公共制度必须在善观念之间保持中立，还是可以正当塑造特定公民德性？",
      agreements: [
        "罗尔斯主张更强的制度克制与中立约束。"
      ],
      disagreements: [
        "桑德尔认为公共生活难以回避实质道德取向。"
      ],
      disputes: [
        "政治中立与公民教育的边界。"
      ]
    },
    inclusionPower: {
      label: "权力与包容",
      title: "底层争议：包容、权力与接纳机制",
      body: "谁在公共论辩中真正被听见？制度应如何修复可信度缺口与结构性排斥？",
      agreements: [
        "哈贝马斯与弗里克都要求包容性条件，但诊断路径不同。"
      ],
      disagreements: [
        "墨菲更强调对抗性权力结构，而非仅靠程序修补。"
      ],
      disputes: [
        "理想协商条件与非理想制度设计。"
      ]
    },
    civilityProtest: {
      label: "文明与抗议",
      title: "底层争议：文明表达与破坏性抗议",
      body: "在制度不公时，公共理性应优先维持文明表达，还是承认破坏性抗议的民主必要性？",
      agreements: [
        "罗尔斯与密尔都保留对国家压制的严格约束。"
      ],
      disagreements: [
        "墨菲更容许尖锐对抗表达。",
        "哈贝马斯路径通常维持更强的话语规范约束。"
      ],
      disputes: [
        "秩序化协商 vs 正义导向破局。"
      ]
    }
  }
};

const NORMATIVE_GRAPH_SPEC = {
  nodes: [
    { id: "consequentialism", x: 12, y: 12, type: "theory" },
    { id: "deontology", x: 37, y: 12, type: "theory" },
    { id: "contractualism", x: 60, y: 12, type: "theory" },
    { id: "virtueEthics", x: 82, y: 12, type: "theory" },
    { id: "parfitTriple", x: 49, y: 30, type: "theory" },
    { id: "actUtil", x: 6, y: 29, type: "theory" },
    { id: "ruleUtil", x: 18, y: 31, type: "theory" },
    { id: "kant", x: 32, y: 30, type: "theory" },
    { id: "kantian", x: 44, y: 31, type: "theory" },
    { id: "scanlon", x: 61, y: 30, type: "theory" },
    { id: "aristotelian", x: 77, y: 30, type: "theory" },
    { id: "careEthics", x: 90, y: 31, type: "theory" },
    { id: "trolley", x: 14, y: 58, type: "issue" },
    { id: "transplant", x: 28, y: 64, type: "issue" },
    { id: "worldCup", x: 45, y: 60, type: "issue" },
    { id: "experienceMachine", x: 61, y: 63, type: "issue" },
    { id: "drowningChild", x: 78, y: 60, type: "issue" },
    { id: "jimIndians", x: 92, y: 58, type: "issue" },
    { id: "demandingness", x: 27, y: 82, type: "issue" },
    { id: "aggregation", x: 48, y: 82, type: "issue" },
    { id: "partiality", x: 69, y: 82, type: "issue" },
    { id: "doingAllowing", x: 87, y: 82, type: "issue" }
  ],
  edges: [
    { from: "consequentialism", to: "actUtil" },
    { from: "consequentialism", to: "ruleUtil" },
    { from: "deontology", to: "kant" },
    { from: "deontology", to: "kantian" },
    { from: "contractualism", to: "scanlon" },
    { from: "virtueEthics", to: "aristotelian" },
    { from: "virtueEthics", to: "careEthics" },
    { from: "parfitTriple", to: "consequentialism" },
    { from: "parfitTriple", to: "deontology" },
    { from: "parfitTriple", to: "contractualism" },
    { from: "consequentialism", to: "trolley", type: "issue", relation: "support" },
    { from: "deontology", to: "trolley", type: "issue", relation: "pressure" },
    { from: "kantian", to: "trolley", type: "issue", relation: "pressure" },
    { from: "ruleUtil", to: "trolley", type: "issue", relation: "constraint" },
    { from: "actUtil", to: "transplant", type: "issue", relation: "pressure" },
    { from: "deontology", to: "transplant", type: "issue", relation: "support" },
    { from: "kant", to: "transplant", type: "issue", relation: "support" },
    { from: "contractualism", to: "worldCup", type: "issue", relation: "support" },
    { from: "scanlon", to: "worldCup", type: "issue", relation: "support" },
    { from: "parfitTriple", to: "worldCup", type: "issue", relation: "constraint" },
    { from: "consequentialism", to: "experienceMachine", type: "issue", relation: "pressure" },
    { from: "virtueEthics", to: "drowningChild", type: "issue", relation: "support" },
    { from: "careEthics", to: "drowningChild", type: "issue", relation: "support" },
    { from: "actUtil", to: "demandingness", type: "issue", relation: "pressure" },
    { from: "parfitTriple", to: "demandingness", type: "issue", relation: "pressure" },
    { from: "consequentialism", to: "aggregation", type: "issue", relation: "support" },
    { from: "contractualism", to: "aggregation", type: "issue", relation: "pressure" },
    { from: "virtueEthics", to: "partiality", type: "issue", relation: "support" },
    { from: "contractualism", to: "partiality", type: "issue", relation: "pressure" },
    { from: "deontology", to: "doingAllowing", type: "issue", relation: "support" },
    { from: "actUtil", to: "jimIndians", type: "issue", relation: "pressure" },
    { from: "ruleUtil", to: "jimIndians", type: "issue", relation: "pressure" }
  ]
};

const NORMATIVE_NODE_COPY = {
  en: {
    consequentialism: {
      label: "Consequentialism",
      title: "Consequentialism",
      body: "Actions are right insofar as they produce the best overall outcomes.",
      claims: [
        "Strong on impartial aggregation and policy-level comparison.",
        "Pressured by integrity, rights, and demandingness objections."
      ],
      intuition: "Many approve saving more lives in switch-style trolley cases.",
      classic: "If outcomes are all that matter, constraints on harming one to save many become hard to justify."
    },
    actUtil: {
      label: "Act Utilitarianism",
      title: "Act Utilitarianism",
      body: "Each act is evaluated directly by whether it maximizes total utility in that specific case.",
      claims: [
        "Highly flexible and case-sensitive.",
        "Can conflict with strong intuitions about rights and fairness."
      ],
      intuition: "Organ transplant and Jim-style cases pressure pure act maximization.",
      classic: "The best single act may still look unjust or integrity-violating."
    },
    ruleUtil: {
      label: "Rule Utilitarianism",
      title: "Rule Utilitarianism",
      body: "An act is right when it conforms to rules whose general acceptance maximizes utility.",
      claims: [
        "Attempts to preserve utilitarian rationale while protecting stable constraints.",
        "Must explain why rules cannot be rewritten ad hoc by act-level gains."
      ],
      intuition: "Sometimes fits common intuitions better than act utilitarianism.",
      classic: "The collapse problem: is rule utilitarianism just act utilitarianism in disguise?"
    },
    deontology: {
      label: "Deontology",
      title: "Deontology",
      body: "Some actions are wrong in themselves because they violate duties, rights, or constraints.",
      claims: [
        "Protects persons from being used merely as instruments.",
        "Must explain why side-constraints remain plausible under catastrophic outcomes."
      ],
      intuition: "Organ transplant intuitions strongly favor deontic constraints.",
      classic: "How strict can constraints be when many lives are at stake?"
    },
    kant: {
      label: "Kant",
      title: "Kantian Deontology (Kant)",
      body: "Moral law is grounded in rational agency and universalizable maxims.",
      claims: [
        "Humanity formula prohibits using persons merely as means.",
        "Duties have priority over pure welfare maximization."
      ],
      intuition: "Strongly rejects killing one innocent person as a tool for aggregate gain.",
      classic: "Universal law and humanity formulations structure strict constraints."
    },
    kantian: {
      label: "Kantian Theories",
      title: "Contemporary Kantian Theories",
      body: "Neo-Kantian views adapt duties, dignity, and respect-based constraints for modern moral problems.",
      claims: [
        "Develop nuanced accounts of permission, coercion, and public justification.",
        "Need principled criteria in hard rescue and conflict cases."
      ],
      intuition: "Footbridge-style intuitions often support stronger anti-use constraints.",
      classic: "Can Kantian frameworks explain both strict prohibitions and emergency exceptions?"
    },
    contractualism: {
      label: "Contractualism",
      title: "Contractualism",
      body: "Right action follows principles that no one could reasonably reject as a basis for informed, unforced agreement.",
      claims: [
        "Centers justifiability to each person rather than pure sum-ranking.",
        "Faces questions about aggregation and special obligations."
      ],
      intuition: "Protects individuals from being overridden by many minor complaints.",
      classic: "How should reasonable rejectability treat numbers and burden asymmetry?"
    },
    scanlon: {
      label: "Scanlon",
      title: "Scanlonian Contractualism",
      body: "Wrongness is what would be disallowed by principles no one could reasonably reject.",
      claims: [
        "Highlights interpersonal justification and complaint-based reasoning.",
        "Requires careful handling of many-small vs one-large burden cases."
      ],
      intuition: "The World Cup case probes aggregation limits in rejectability reasoning.",
      classic: "Contractualist reasoning tracks what we can justify to each person, not what maximizes value."
    },
    virtueEthics: {
      label: "Virtue Ethics",
      title: "Virtue Ethics",
      body: "Ethics is fundamentally about character, practical wisdom, and flourishing forms of life.",
      claims: [
        "Explains moral perception, motivation, and context-sensitive judgment.",
        "Must connect virtue language to action-guidance in hard policy dilemmas."
      ],
      intuition: "Drowning child intuitions are often framed as failures of compassion and practical wisdom.",
      classic: "What would a practically wise and virtuous agent characteristically do?"
    },
    aristotelian: {
      label: "Aristotelian",
      title: "Aristotelian Virtue Ethics",
      body: "Virtues are stable excellences cultivated through habituation and guided by practical reason.",
      claims: [
        "Moral evaluation centers on living well rather than rule-application alone.",
        "Doctrine of the mean is not arithmetic moderation but context-sensitive excellence."
      ],
      intuition: "Character and formation matter for consistent ethical perception.",
      classic: "Eudaimonia-oriented ethics asks what life-pattern best realizes human flourishing."
    },
    careEthics: {
      label: "Care Ethics",
      title: "Care Ethics",
      body: "Moral judgment emphasizes relationships, vulnerability, dependency, and responsive care.",
      claims: [
        "Challenges abstract impartial models that neglect relational reality.",
        "Must still explain fairness across wider institutions."
      ],
      intuition: "Partial responsibilities to family and concrete others gain normative weight.",
      classic: "Good moral judgment may require attentive responsiveness, not only rule-consistency."
    },
    parfitTriple: {
      label: "Parfit's Triple Theory",
      title: "Parfit's Triple Theory",
      body: "Parfit argues top versions of Kantianism, contractualism, and consequentialism converge on largely the same practical verdicts.",
      claims: [
        "Seeks theoretical unification without erasing disagreement.",
        "Must show convergence is robust in hard edge cases."
      ],
      intuition: "Convergence is attractive when single-theory verdicts diverge in thought experiments.",
      classic: "If best forms converge, many traditional disputes may concern formulation more than substance."
    },
    trolley: {
      label: "Trolley Problem",
      title: "Trolley Problem Intuitions",
      body: "Many judge switching a track permissible while judging pushing a person impermissible, despite similar outcome counts.",
      claims: [
        "Tests doing/allowing and means/end distinctions.",
        "Creates tension for pure outcome-maximizing views."
      ],
      intuition: "Switch vs footbridge asymmetry is one of the most discussed normative intuitions.",
      classic: "Why does physically using a person feel morally different from redirecting a threat?"
    },
    transplant: {
      label: "Organ Transplant",
      title: "Organ Transplant Problem",
      body: "Should one healthy person be killed for organs to save five patients?",
      claims: [
        "Powerful test of rights, dignity, and anti-aggregation constraints.",
        "Challenges theories that rank options only by total lives saved."
      ],
      intuition: "Most reject forced harvesting despite aggregate benefit.",
      classic: "Can a theory preserve both impartial concern and strict anti-use constraints?"
    },
    worldCup: {
      label: "World Cup Case",
      title: "Scanlon's World Cup Scenario",
      body: "Can many tiny disappointments to spectators justify imposing one severe burden on a single person?",
      claims: [
        "Pressures unrestricted aggregation.",
        "Supports complaint-based interpersonal justification."
      ],
      intuition: "One person's serious burden often seems not outweighed by many trivial complaints.",
      classic: "Reasonable rejectability asks whether a principle is defensible person-to-person."
    },
    experienceMachine: {
      label: "Experience Machine",
      title: "Experience Machine",
      body: "Would a life of perfect simulation and pleasure be as good as real achievement and relationships?",
      claims: [
        "Pressures hedonistic reductions of value.",
        "Highlights authenticity, achievement, and contact with reality."
      ],
      intuition: "Many refuse plugging in, suggesting value exceeds felt pleasure.",
      classic: "If pleasure were all that mattered, refusal looks irrational."
    },
    drowningChild: {
      label: "Drowning Child",
      title: "Drowning Child Case",
      body: "If you can save a nearby child at low personal cost, are you morally required to do it?",
      claims: [
        "Supports strong duties of easy rescue.",
        "Connects beneficence with debates on demandingness."
      ],
      intuition: "Failure to help appears seriously blameworthy.",
      classic: "Local rescue intuition motivates broader duties to prevent distant severe harms."
    },
    jimIndians: {
      label: "Jim and the Indians",
      title: "Jim and the Indians",
      body: "A traveler may kill one innocent person to prevent a greater massacre by another agent.",
      claims: [
        "Tests integrity objections to utilitarian calculation.",
        "Highlights agent-relative responsibility."
      ],
      intuition: "Many resist being made complicit even when outcomes improve numerically.",
      classic: "Is morality only about state-of-affairs, or also about who does what?"
    },
    demandingness: {
      label: "Demandingness",
      title: "Demandingness Objection",
      body: "Some theories seem to require excessive personal sacrifice whenever greater benefit can be produced.",
      claims: [
        "Targets act utilitarianism and strong beneficence duties.",
        "Forces boundary-setting on what morality can demand."
      ],
      intuition: "A plausible morality should not consume all personal projects.",
      classic: "How much sacrifice is required before morality becomes unreasonably burdensome?"
    },
    aggregation: {
      label: "Aggregation",
      title: "Aggregation Problem",
      body: "When and how should many small benefits or complaints outweigh one major burden?",
      claims: [
        "Central to utilitarian and contractualist disagreement.",
        "Distinguishes sum-ranking from person-centered justification."
      ],
      intuition: "Many reject simple addition across qualitatively different burdens.",
      classic: "Numbers matter, but perhaps not in every moral context."
    },
    partiality: {
      label: "Partiality",
      title: "Partiality and Special Obligations",
      body: "Should morality allow favoring family, friends, and specific commitments over strict impartial maximizing?",
      claims: [
        "Pressures strongly impartial theories.",
        "Supports virtue and care-based accounts of relationship-grounded duty."
      ],
      intuition: "Many think loyalty can be justified even when it is not globally maximizing.",
      classic: "Can impartial moral theory fully capture the normativity of close relationships?"
    },
    doingAllowing: {
      label: "Doing vs Allowing",
      title: "Doing/Allowing Distinction",
      body: "Is doing harm morally worse than merely allowing comparable harm?",
      claims: [
        "Often used to explain deontic constraints in rescue and trolley cases.",
        "Contested by views that prioritize only final outcomes."
      ],
      intuition: "Direct harmful agency appears morally weightier than omission.",
      classic: "Can this distinction be principled rather than ad hoc?"
    }
  },
  zh: {
    consequentialism: {
      label: "后果主义",
      title: "后果主义",
      body: "行为是否正确取决于其是否产生整体最优结果。",
      claims: [
        "擅长处理总体比较与政策层面的结果评估。",
        "常受人格完整性、权利约束与苛求性批评。"
      ],
      intuition: "在“扳道岔”类案例中，很多人支持“多救少害”的结果导向。",
      classic: "若结果是唯一标准，如何稳固地反对“伤害一人以救多人”？"
    },
    actUtil: {
      label: "行为功利主义",
      title: "行为功利主义",
      body: "每个具体行为都直接按其是否最大化总效用来评估。",
      claims: [
        "对个案变化高度敏感，决策灵活。",
        "可能与权利、公平等强直觉发生冲突。"
      ],
      intuition: "器官移植与“吉姆案例”会对纯行为最大化施加压力。",
      classic: "最优单次行为也可能看起来不公或破坏行动者完整性。"
    },
    ruleUtil: {
      label: "规则功利主义",
      title: "规则功利主义",
      body: "行为是否正确取决于其是否符合“普遍采纳可最大化效用”的规则体系。",
      claims: [
        "尝试同时保留功利主义目标与稳定约束。",
        "需解释为何规则不能被个案收益随时改写。"
      ],
      intuition: "在不少直觉案例中，比行为功利主义更贴近常识判断。",
      classic: "“塌缩问题”：规则功利主义是否会退化为行为功利主义？"
    },
    deontology: {
      label: "义务论",
      title: "义务论",
      body: "某些行为因违反义务、权利或约束而本身错误，不可被总结果直接覆盖。",
      claims: [
        "强调人格不可工具化与权利边界。",
        "需说明在极端后果下约束为何仍具说服力。"
      ],
      intuition: "器官移植直觉通常强力支持义务论约束。",
      classic: "当可拯救人数巨大时，约束应当多严格？"
    },
    kant: {
      label: "康德",
      title: "康德式义务论（康德）",
      body: "道德法则奠基于理性主体与可普遍化原则，强调人作为目的。",
      claims: [
        "“人性公式”反对把人仅当作手段。",
        "义务优先于纯粹福利最大化。"
      ],
      intuition: "强烈反对“牺牲无辜者作为工具”。",
      classic: "普遍法则与人性原则为严格约束提供结构。"
    },
    kantian: {
      label: "康德主义理论",
      title: "当代康德主义理论",
      body: "在现代语境中发展义务、尊严与尊重约束，处理强制、许可与公共正当化问题。",
      claims: [
        "对许可、胁迫与制度义务给出精细区分。",
        "需在困难救援情境中给出可操作标准。"
      ],
      intuition: "“推人挡车”类直觉常支持更强反工具化限制。",
      classic: "如何同时解释严格禁止与紧急例外？"
    },
    contractualism: {
      label: "契约论",
      title: "契约论",
      body: "正确行动应符合“任何人都不可合理拒绝”的原则。",
      claims: [
        "强调人际正当化，而非单纯总量排序。",
        "在总量比较与特殊义务问题上承受压力。"
      ],
      intuition: "可避免“许多轻微不便压过一人重大损失”。",
      classic: "在人数与负担不对称时，如何理解“可合理拒绝”？"
    },
    scanlon: {
      label: "斯坎伦",
      title: "斯坎伦式契约论",
      body: "错误性来自不可被任何人合理拒绝原则所禁止的行为。",
      claims: [
        "以个体抱怨与人际可辩护性为中心。",
        "需处理“许多小抱怨 vs 少数大伤害”的复杂比较。"
      ],
      intuition: "世界杯案例专门测试契约论的聚合边界。",
      classic: "重点不是最大化价值，而是能否向每个人给出理由。"
    },
    virtueEthics: {
      label: "德性伦理",
      title: "德性伦理",
      body: "伦理核心在于品格、实践智慧与何谓繁荣生活。",
      claims: [
        "能解释道德感知、动机与语境化判断。",
        "需回答在硬性政策冲突中如何给出行动指引。"
      ],
      intuition: "“溺水儿童”常被解读为同情与实践智慧的失范。",
      classic: "关键问题是“有德者在此情境下会如何行动”。"
    },
    aristotelian: {
      label: "亚里士多德传统",
      title: "亚里士多德式德性伦理",
      body: "德性是经习惯养成的稳定卓越状态，由实践理性引导。",
      claims: [
        "道德评价聚焦“如何活得好”，不止于规则套用。",
        "“中道”并非算术居中，而是情境中的卓越恰当。"
      ],
      intuition: "品格形成决定了稳定且可靠的道德判断能力。",
      classic: "以繁荣论框架重构道德实践目标。"
    },
    careEthics: {
      label: "关怀伦理",
      title: "关怀伦理",
      body: "重视关系、脆弱性、依赖性与情境中的回应责任。",
      claims: [
        "批评抽象的纯不偏不倚模型忽视关系现实。",
        "同时需解释跨制度层面的公平要求。"
      ],
      intuition: "关系中的特殊责任在道德上具有正当权重。",
      classic: "良好判断可能需要细致回应，而非仅规则一致。"
    },
    parfitTriple: {
      label: "帕菲特三重理论",
      title: "帕菲特的三重理论",
      body: "帕菲特主张最优版本的康德主义、契约论与后果主义在实践结论上高度收敛。",
      claims: [
        "尝试在保留差异的同时实现理论统一。",
        "需证明这种收敛在极端案例中仍稳健。"
      ],
      intuition: "当单一理论结论冲突时，收敛路径更具吸引力。",
      classic: "若最佳版本收敛，许多传统争论可能主要是表述差异。"
    },
    trolley: {
      label: "电车难题",
      title: "电车难题直觉",
      body: "许多人认为“扳道岔可允”但“推人挡车不可允”，即便结果人数类似。",
      claims: [
        "检验作为/不作为与手段/目的区分。",
        "对纯结果主义构成持续压力。"
      ],
      intuition: "“扳道岔/推人”不对称是规范伦理最核心直觉之一。",
      classic: "为何“把人当手段”会被视为特别严重？"
    },
    transplant: {
      label: "器官移植",
      title: "器官移植难题",
      body: "是否可杀一位健康者取器官以拯救五位病人？",
      claims: [
        "强力测试权利约束与反聚合界限。",
        "挑战“只看总救人数”的排序。"
      ],
      intuition: "多数人拒绝强制摘取，尽管总人数收益更高。",
      classic: "理论如何同时保留公正关切与反工具化限制？"
    },
    worldCup: {
      label: "世界杯情景",
      title: "斯坎伦世界杯情景",
      body: "大量轻微失望能否正当化把一项严重负担施加给单一个人？",
      claims: [
        "对无限制聚合提出压力。",
        "支持以人际可辩护性为中心的推理。"
      ],
      intuition: "许多人认为一人的重大损失不应被大量轻微不便轻易压过。",
      classic: "“可合理拒绝”强调向每个人分别给出理由。"
    },
    experienceMachine: {
      label: "体验机器",
      title: "体验机器",
      body: "若可获得完美模拟快感，你是否应接入机器终生生活？",
      claims: [
        "挑战把价值简化为主观快乐。",
        "凸显真实性、成就与与现实接触的价值。"
      ],
      intuition: "多数人拒绝接入，暗示“快乐并非全部价值”。",
      classic: "若享乐是唯一价值，拒绝接入将难以解释。"
    },
    drowningChild: {
      label: "溺水儿童",
      title: "溺水儿童案例",
      body: "若你能以很小代价拯救近处儿童，是否有道德义务这样做？",
      claims: [
        "支持“低成本救援义务”直觉。",
        "与苛求性争论直接相关。"
      ],
      intuition: "见死不救通常被判断为严重道德过失。",
      classic: "近处救援直觉是否可推广到远距援助义务？"
    },
    jimIndians: {
      label: "吉姆与印第安人",
      title: "吉姆与印第安人",
      body: "旅行者可杀一名无辜者以阻止他人屠杀更多人。",
      claims: [
        "测试对功利主义的“完整性反驳”。",
        "凸显行动者相对责任问题。"
      ],
      intuition: "不少人拒绝“由我亲手作恶以改善总结果”。",
      classic: "道德是否只看结果状态，还是也看“谁做了什么”？"
    },
    demandingness: {
      label: "苛求性问题",
      title: "苛求性反驳",
      body: "某些理论似乎要求个体持续进行高强度牺牲，只要还能产生更多好结果。",
      claims: [
        "重点针对行为功利主义与强行善义务。",
        "迫使理论设定道德要求的合理上限。"
      ],
      intuition: "可信的道德理论不应吞噬全部个人计划。",
      classic: "牺牲到何种程度后，道德要求变得不合理？"
    },
    aggregation: {
      label: "聚合问题",
      title: "聚合问题",
      body: "许多小利益或小抱怨在何时、如何能压过一个重大负担？",
      claims: [
        "是功利主义与契约论分歧核心。",
        "区分总量排序与个体可辩护性。"
      ],
      intuition: "很多人拒绝把异质负担做简单加总。",
      classic: "数字重要，但可能并非在所有语境下都决定性。"
    },
    partiality: {
      label: "偏私与特殊义务",
      title: "偏私与特殊义务",
      body: "道德是否允许对家人、朋友与承诺关系给予优先，而非始终严格不偏不倚？",
      claims: [
        "对严格不偏不倚理论形成压力。",
        "支持德性与关怀路径中的关系性义务。"
      ],
      intuition: "很多人认为忠诚在道德上可被正当化。",
      classic: "纯不偏不倚模型能否完整容纳亲密关系规范？"
    },
    doingAllowing: {
      label: "作为/不作为",
      title: "作为与不作为区分",
      body: "主动造成伤害是否在道德上比允许类似伤害发生更严重？",
      claims: [
        "常被用于解释义务论约束与救援边界。",
        "受仅看终局结果理论的挑战。"
      ],
      intuition: "主动伤害常被视为比不作为更重。",
      classic: "该区分能否给出非任意、可普遍化标准？"
    }
  }
};

const NORMATIVE_RELATION_DETAILS = {
  en: {
    "consequentialism|trolley": { reason: "Switch-style trolley intuitions often support outcome aggregation: saving five over one appears permissible." },
    "deontology|trolley": { reason: "Footbridge intuitions pressure deontology to explain when constraints against using persons as means apply." },
    "kantian|trolley": { reason: "Kantian views are pushed to distinguish redirecting harm from intentionally using a person as an instrument." },
    "ruleUtil|trolley": { reason: "Rule utilitarianism is constrained to show stable public rules can explain trolley asymmetries better than act-level calculation." },
    "actUtil|transplant": { reason: "Organ transplant cases strongly pressure act utilitarianism because maximizing lives saved can license killing one innocent person." },
    "deontology|transplant": { reason: "Transplant intuitions support deontological side-constraints against intentionally harming an innocent person." },
    "kant|transplant": { reason: "Kantian humanity formulations treat forced harvesting as paradigmatic wrongful use of persons as mere means." },
    "contractualism|worldCup": { reason: "World Cup cases support contractualism by highlighting person-to-person justifiability over simple addition of minor complaints." },
    "scanlon|worldCup": { reason: "The scenario is designed to test Scanlon's rejectability framework in many-small versus one-large burden comparisons." },
    "parfitTriple|worldCup": { reason: "Triple-theory convergence is constrained by whether it can handle anti-aggregation intuitions in cases like World Cup." },
    "consequentialism|experienceMachine": { reason: "Experience Machine thought experiments pressure hedonistic consequentialism by suggesting authenticity and achievement also matter." },
    "virtueEthics|drowningChild": { reason: "Drowning-child intuitions support virtue ethics by framing non-rescue as defective character and practical judgment." },
    "careEthics|drowningChild": { reason: "Care ethics is supported because responsiveness to concrete vulnerability is central in easy-rescue cases." },
    "actUtil|demandingness": { reason: "Demandingness objections pressure act utilitarianism when it appears to require near-constant self-sacrifice." },
    "parfitTriple|demandingness": { reason: "Hybrid convergence views face pressure to avoid inheriting the strongest demandingness costs of each component theory." },
    "consequentialism|aggregation": { reason: "Consequentialist structures generally support aggregation: numbers and total welfare count directly in ranking outcomes." },
    "contractualism|aggregation": { reason: "Contractualism is pressured by aggregation disputes because it must explain when numbers matter without reducing persons to containers." },
    "virtueEthics|partiality": { reason: "Virtue ethics supports partiality through role-based excellence in friendship, family, and civic loyalty." },
    "contractualism|partiality": { reason: "Contractualism faces pressure to justify special obligations while preserving equal justifiability to each person." },
    "deontology|doingAllowing": { reason: "Doing/allowing distinctions often support deontology by grounding stronger prohibitions on actively doing harm." },
    "actUtil|jimIndians": { reason: "Jim-style integrity cases pressure act utilitarianism by separating best-state outcomes from agent-centered responsibility." },
    "ruleUtil|jimIndians": { reason: "Rule utilitarianism is pressured to show whether integrity can be protected by rule architecture rather than act-level exceptions." }
  },
  zh: {
    "consequentialism|trolley": { reason: "“扳道岔”类电车直觉常支持结果聚合：多救少害看起来可被允许。" },
    "deontology|trolley": { reason: "“推人挡车”直觉会迫使义务论说明：反工具化约束究竟在何种条件下触发。" },
    "kantian|trolley": { reason: "康德主义需要区分“改道导致伤害”与“有意把人当手段”两类结构。" },
    "ruleUtil|trolley": { reason: "规则功利主义受约束于：能否用稳定公共规则解释电车直觉，而非退回个案计算。" },
    "actUtil|transplant": { reason: "器官移植对行为功利主义施加强压力：最大化救人数可能许可杀害无辜者。" },
    "deontology|transplant": { reason: "移植直觉通常支持义务论的边界约束：不可故意伤害无辜者作为工具。" },
    "kant|transplant": { reason: "康德式“人是目的”框架将强制摘取器官视为典型的“仅当手段”。" },
    "contractualism|worldCup": { reason: "世界杯案例支持契约论的人际正当化路径，而非把大量轻微抱怨直接相加。" },
    "scanlon|worldCup": { reason: "该案例本身就是为测试斯坎伦“不可合理拒绝”框架中的聚合边界而设计。" },
    "parfitTriple|worldCup": { reason: "三重理论受约束于：其收敛主张能否处理世界杯类反聚合直觉。" },
    "consequentialism|experienceMachine": { reason: "体验机器会对享乐主义后果主义施压：真实性与成就似乎也具有独立价值。" },
    "virtueEthics|drowningChild": { reason: "溺水儿童案例支持德性伦理：见危不救常被解读为品格与实践判断失范。" },
    "careEthics|drowningChild": { reason: "关怀伦理在低成本救援案例中获得支持，因为其核心是对具体脆弱性的及时回应。" },
    "actUtil|demandingness": { reason: "苛求性反驳会对行为功利主义施压：它似乎要求行动者持续高强度自我牺牲。" },
    "parfitTriple|demandingness": { reason: "混合收敛理论需避免把各理论最强苛求性成本叠加在一起。" },
    "consequentialism|aggregation": { reason: "后果主义结构通常支持聚合：人数与总福祉直接进入结果排序。" },
    "contractualism|aggregation": { reason: "契约论在聚合问题上承压：需说明“数字何时重要”且不把人降格为福利容器。" },
    "virtueEthics|partiality": { reason: "德性伦理支持偏私：友情、家庭与公民忠诚中的角色卓越具有规范意义。" },
    "contractualism|partiality": { reason: "契约论需解释特殊义务如何与“对每个人都可辩护”并存。" },
    "deontology|doingAllowing": { reason: "作为/不作为区分常支持义务论：主动伤害通常触发更强禁止。" },
    "actUtil|jimIndians": { reason: "吉姆案例对行为功利主义施压：最佳结果与行动者责任结构可能发生冲突。" },
    "ruleUtil|jimIndians": { reason: "规则功利主义需说明完整性是否可通过规则设计稳定保护，而非临时例外。" }
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

function getTheoryDeepDive() {
  return THEORY_DEEP_DIVE[activeLanguage] || THEORY_DEEP_DIVE.en;
}

function getTheoryIssueRelationDetails() {
  return THEORY_ISSUE_RELATION_DETAILS[activeLanguage] || THEORY_ISSUE_RELATION_DETAILS.en;
}

function getDiscourseNodeCopy() {
  return DISCOURSE_NODE_COPY[activeLanguage] || DISCOURSE_NODE_COPY.en;
}

function getNormativeNodeCopy() {
  return NORMATIVE_NODE_COPY[activeLanguage] || NORMATIVE_NODE_COPY.en;
}

function getNormativeRelationDetails() {
  return NORMATIVE_RELATION_DETAILS[activeLanguage] || NORMATIVE_RELATION_DETAILS.en;
}

function updateDiscourseGraphLines() {
  if (!discourseGraphState) {
    return;
  }

  const { container, nodeElements, edgeElements } = discourseGraphState;
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

function setDiscoursePanelList(listElement, items, emptyText) {
  if (!listElement) {
    return;
  }

  listElement.innerHTML = "";
  if (!items || !items.length) {
    const li = document.createElement("li");
    li.textContent = emptyText;
    listElement.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function setActiveDiscourseNode(nodeId) {
  if (!discourseGraphState) {
    return;
  }

  const copy = getDiscourseNodeCopy();
  const selected = copy[nodeId];
  if (!selected) {
    return;
  }

  Object.entries(discourseGraphState.nodeElements).forEach(([id, node]) => {
    node.classList.toggle("active", id === nodeId);
  });

  discourseGraphState.edgeElements.forEach(({ edge, line }) => {
    const connected = edge.from === nodeId || edge.to === nodeId;
    line.classList.toggle("connected", connected);
    line.classList.toggle("dimmed", !connected);
  });

  discourseGraphState.activeNodeId = nodeId;

  const titleEl = document.getElementById("discoursePanelNodeTitle");
  const bodyEl = document.getElementById("discoursePanelNodeBody");
  const agreesEl = document.getElementById("discoursePanelAgrees");
  const disagreesEl = document.getElementById("discoursePanelDisagrees");
  const disputesEl = document.getElementById("discoursePanelDisputes");
  const dictionary = translations[activeLanguage] || translations.en;
  const emptyText = dictionary.discoursePanelNone || "No primary item recorded for this category.";

  if (titleEl) {
    titleEl.textContent = selected.title || selected.label;
  }
  if (bodyEl) {
    bodyEl.textContent = selected.body;
  }
  setDiscoursePanelList(agreesEl, selected.agreements, emptyText);
  setDiscoursePanelList(disagreesEl, selected.disagreements, emptyText);
  setDiscoursePanelList(disputesEl, selected.disputes, emptyText);
}

function updateDiscourseGraphLanguage() {
  if (!discourseGraphState) {
    return;
  }

  const copy = getDiscourseNodeCopy();
  Object.entries(discourseGraphState.nodeElements).forEach(([id, node]) => {
    if (copy[id]) {
      node.textContent = copy[id].label;
    }
  });

  if (discourseGraphState.activeNodeId) {
    setActiveDiscourseNode(discourseGraphState.activeNodeId);
  }
}

function initDiscourseGraph() {
  const container = document.getElementById("discourseGraph");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "theory-lines");
  container.appendChild(svg);

  const nodeElements = {};
  const copy = getDiscourseNodeCopy();

  DISCOURSE_GRAPH_SPEC.nodes.forEach((node) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `theory-node${node.type === "issue" ? " issue" : ""}`;
    button.style.left = `${node.x}%`;
    button.style.top = `${node.y}%`;
    button.dataset.nodeId = node.id;
    button.textContent = copy[node.id] ? copy[node.id].label : node.id;
    button.addEventListener("click", () => {
      setActiveDiscourseNode(node.id);
    });

    nodeElements[node.id] = button;
    container.appendChild(button);
  });

  const edgeElements = DISCOURSE_GRAPH_SPEC.edges.map((edge) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.classList.add("theory-edge");
    if (edge.type === "issue") {
      line.classList.add("issue");
    }
    if (edge.type === "agreement") {
      line.classList.add("agreement");
    }
    if (edge.type === "disagreement") {
      line.classList.add("disagreement");
    }
    svg.appendChild(line);
    return { edge, line };
  });

  discourseGraphState = {
    container,
    svg,
    nodeElements,
    edgeElements,
    activeNodeId: null
  };

  const syncLines = () => {
    requestAnimationFrame(updateDiscourseGraphLines);
  };

  window.addEventListener("resize", syncLines);
  syncLines();
  setActiveDiscourseNode("habermas");
}

function updateNormativeGraphLines() {
  if (!normativeGraphState) {
    return;
  }

  const { container, nodeElements, edgeElements } = normativeGraphState;
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

function setNormativePanelList(listElement, items, emptyText) {
  if (!listElement) {
    return;
  }

  listElement.innerHTML = "";
  if (!items || !items.length) {
    const li = document.createElement("li");
    li.textContent = emptyText;
    listElement.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function setNormativeRelationReasonList(listElement, items, dictionary) {
  if (!listElement) {
    return;
  }

  listElement.innerHTML = "";
  if (!items || !items.length) {
    const li = document.createElement("li");
    li.textContent = dictionary.normPanelIssueWhyNone || dictionary.normPanelListNone || "No primary item recorded for this category.";
    listElement.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "relation-reason-item";

    const title = document.createElement("p");
    title.className = "relation-reason-title";
    title.textContent = item.title;
    li.appendChild(title);

    const body = document.createElement("p");
    body.className = "relation-reason-body";
    body.textContent = item.reason;
    li.appendChild(body);

    if (item.sources && item.sources.length) {
      const sources = document.createElement("p");
      sources.className = "relation-reason-sources";

      const sourceLabel = document.createElement("span");
      sourceLabel.textContent = `${dictionary.normReasonSources || "Sources"}: `;
      sources.appendChild(sourceLabel);

      item.sources.forEach((source, index) => {
        if (index > 0) {
          sources.appendChild(document.createTextNode(" \u00b7 "));
        }

        const link = document.createElement("a");
        link.href = source.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = source.label;
        sources.appendChild(link);
      });

      li.appendChild(sources);
    }

    listElement.appendChild(li);
  });
}

function getNormativeRelationTypeText(relation, dictionary) {
  const labels = {
    pressure: dictionary.normRelTypePressure || "Pressure",
    support: dictionary.normRelTypeSupport || "Support",
    constraint: dictionary.normRelTypeConstraint || "Constraint"
  };

  return labels[relation] || labels.constraint;
}

function getNormativeRelationText(relation, selectedIsIssue, dictionary, label) {
  const theoryVerbMap = {
    pressure: dictionary.normRelTheoryPressure || "Pressured by",
    support: dictionary.normRelTheorySupport || "Supported by",
    constraint: dictionary.normRelTheoryConstraint || "Constrained by"
  };
  const issueVerbMap = {
    pressure: dictionary.normRelIssuePressure || "Pressures",
    support: dictionary.normRelIssueSupport || "Supports",
    constraint: dictionary.normRelIssueConstraint || "Constrains"
  };

  const verb = selectedIsIssue
    ? issueVerbMap[relation] || issueVerbMap.constraint
    : theoryVerbMap[relation] || theoryVerbMap.constraint;

  if (activeLanguage === "zh") {
    return `${verb}${label}。`;
  }

  return `${verb} ${label}.`;
}

function getNormativeIssueEdgeContext(edge, nodeTypes) {
  const fromType = nodeTypes[edge.from];
  const toType = nodeTypes[edge.to];

  if (fromType === "issue" && toType !== "issue") {
    return { issueId: edge.from, theoryId: edge.to };
  }

  if (toType === "issue" && fromType !== "issue") {
    return { issueId: edge.to, theoryId: edge.from };
  }

  return {
    issueId: fromType === "issue" ? edge.from : edge.to,
    theoryId: fromType === "issue" ? edge.to : edge.from
  };
}

function buildNormativeRelationLists(nodeId, copy, dictionary) {
  const taxonomyLinks = [];
  const issueLinks = [];
  const issueReasons = [];
  const detailMap = getNormativeRelationDetails();
  const selectedType = normativeGraphState.nodeTypes[nodeId];
  const selectedIsIssue = selectedType === "issue";

  normativeGraphState.edgeElements.forEach(({ edge }) => {
    if (edge.from !== nodeId && edge.to !== nodeId) {
      return;
    }

    const otherId = edge.from === nodeId ? edge.to : edge.from;
    const otherLabel = copy[otherId] ? copy[otherId].label : otherId;
    const otherType = normativeGraphState.nodeTypes[otherId];
    const isIssueEdge = selectedIsIssue || otherType === "issue" || edge.type === "issue";

    if (isIssueEdge) {
      const relation = edge.relation || "constraint";
      issueLinks.push(getNormativeRelationText(relation, selectedIsIssue, dictionary, otherLabel));

      const { issueId, theoryId } = getNormativeIssueEdgeContext(edge, normativeGraphState.nodeTypes);
      const issueLabel = copy[issueId] ? copy[issueId].label : issueId;
      const theoryLabel = copy[theoryId] ? copy[theoryId].label : theoryId;
      const relationTypeLabel = getNormativeRelationTypeText(relation, dictionary);
      const key = `${theoryId}|${issueId}`;
      const detail = detailMap[key];
      const title = activeLanguage === "zh"
        ? `${issueLabel} × ${theoryLabel}（${relationTypeLabel}）`
        : `${issueLabel} × ${theoryLabel} (${relationTypeLabel})`;

      issueReasons.push({
        title,
        reason: (detail && detail.reason) || dictionary.normReasonFallback || "No detailed rationale recorded for this edge yet.",
        sources: (detail && detail.sources) || []
      });
      return;
    }

    taxonomyLinks.push(otherLabel);
  });

  return { taxonomyLinks, issueLinks, issueReasons };
}

function setActiveNormativeNode(nodeId) {
  if (!normativeGraphState) {
    return;
  }

  const copy = getNormativeNodeCopy();
  const selected = copy[nodeId];
  if (!selected) {
    return;
  }

  Object.entries(normativeGraphState.nodeElements).forEach(([id, node]) => {
    node.classList.toggle("active", id === nodeId);
  });

  normativeGraphState.edgeElements.forEach(({ edge, line }) => {
    const connected = edge.from === nodeId || edge.to === nodeId;
    line.classList.toggle("connected", connected);
    line.classList.toggle("dimmed", !connected);
  });

  normativeGraphState.activeNodeId = nodeId;

  const titleEl = document.getElementById("normPanelNodeTitle");
  const bodyEl = document.getElementById("normPanelNodeBody");
  const coreEl = document.getElementById("normPanelCore");
  const intuitionEl = document.getElementById("normPanelIntuition");
  const classicEl = document.getElementById("normPanelClassic");
  const claimsEl = document.getElementById("normPanelClaims");
  const taxonomyEl = document.getElementById("normPanelTaxonomy");
  const issueLinksEl = document.getElementById("normPanelIssueLinks");
  const issueReasonsEl = document.getElementById("normPanelIssueReasons");
  const dictionary = translations[activeLanguage] || translations.en;
  const emptyText = dictionary.normPanelListNone || "No primary item recorded for this category.";

  if (titleEl) {
    titleEl.textContent = selected.title || selected.label;
  }
  if (bodyEl) {
    bodyEl.textContent = selected.body || "";
  }
  if (coreEl) {
    coreEl.textContent = selected.body || "";
  }
  if (intuitionEl) {
    intuitionEl.textContent = selected.intuition || ((selected.claims && selected.claims[0]) || emptyText);
  }
  if (classicEl) {
    classicEl.textContent = selected.classic || ((selected.claims && selected.claims[1]) || emptyText);
  }
  if (claimsEl) {
    claimsEl.innerHTML = "";
    (selected.claims || []).forEach((claim) => {
      const li = document.createElement("li");
      li.textContent = claim;
      claimsEl.appendChild(li);
    });
  }

  const { taxonomyLinks, issueLinks, issueReasons } = buildNormativeRelationLists(nodeId, copy, dictionary);
  setNormativePanelList(taxonomyEl, taxonomyLinks, emptyText);
  setNormativePanelList(issueLinksEl, issueLinks, emptyText);
  setNormativeRelationReasonList(issueReasonsEl, issueReasons, dictionary);
}

function updateNormativeGraphLanguage() {
  if (!normativeGraphState) {
    return;
  }

  const copy = getNormativeNodeCopy();
  Object.entries(normativeGraphState.nodeElements).forEach(([id, node]) => {
    if (copy[id]) {
      node.textContent = copy[id].label;
    }
  });

  if (normativeGraphState.activeNodeId) {
    setActiveNormativeNode(normativeGraphState.activeNodeId);
  }
}

function initNormativeGraph() {
  const container = document.getElementById("normativeGraph");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "theory-lines");
  container.appendChild(svg);

  const nodeElements = {};
  const nodeTypes = {};
  const copy = getNormativeNodeCopy();

  NORMATIVE_GRAPH_SPEC.nodes.forEach((node) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `theory-node${node.type === "issue" ? " issue" : ""}`;
    button.style.left = `${node.x}%`;
    button.style.top = `${node.y}%`;
    button.dataset.nodeId = node.id;
    button.textContent = copy[node.id] ? copy[node.id].label : node.id;
    button.addEventListener("click", () => {
      setActiveNormativeNode(node.id);
    });

    nodeTypes[node.id] = node.type;
    nodeElements[node.id] = button;
    container.appendChild(button);
  });

  const edgeElements = NORMATIVE_GRAPH_SPEC.edges.map((edge) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.classList.add("theory-edge");
    if (edge.type === "issue") {
      line.classList.add("issue");
    }
    if (edge.relation) {
      line.classList.add(edge.relation);
    }
    svg.appendChild(line);
    return { edge, line };
  });

  normativeGraphState = {
    container,
    svg,
    nodeElements,
    nodeTypes,
    edgeElements,
    activeNodeId: null
  };

  const syncLines = () => {
    requestAnimationFrame(updateNormativeGraphLines);
  };

  window.addEventListener("resize", syncLines);
  syncLines();
  setActiveNormativeNode("consequentialism");
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

function setTheoryPanelList(listElement, items, emptyText) {
  if (!listElement) {
    return;
  }

  listElement.innerHTML = "";
  if (!items || !items.length) {
    const li = document.createElement("li");
    li.textContent = emptyText;
    listElement.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function setTheoryIssueReasonList(listElement, items, dictionary) {
  if (!listElement) {
    return;
  }

  listElement.innerHTML = "";
  if (!items || !items.length) {
    const li = document.createElement("li");
    li.textContent = dictionary.metaPanelIssueWhyNone || dictionary.metaPanelListNone || "No primary item recorded for this category.";
    listElement.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "relation-reason-item";

    const title = document.createElement("p");
    title.className = "relation-reason-title";
    title.textContent = item.title;
    li.appendChild(title);

    const body = document.createElement("p");
    body.className = "relation-reason-body";
    body.textContent = item.reason;
    li.appendChild(body);

    if (item.sources && item.sources.length) {
      const sources = document.createElement("p");
      sources.className = "relation-reason-sources";

      const sourceLabel = document.createElement("span");
      sourceLabel.textContent = `${dictionary.metaIssueReasonSources || "Sources"}: `;
      sources.appendChild(sourceLabel);

      item.sources.forEach((source, index) => {
        if (index > 0) {
          sources.appendChild(document.createTextNode(" \u00b7 "));
        }

        const link = document.createElement("a");
        link.href = source.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = source.label;
        sources.appendChild(link);
      });

      li.appendChild(sources);
    }

    listElement.appendChild(li);
  });
}

function getMetaRelationTypeText(relation, dictionary) {
  const labels = {
    pressure: dictionary.metaRelTypePressure || "Pressure",
    support: dictionary.metaRelTypeSupport || "Support",
    constraint: dictionary.metaRelTypeConstraint || "Constraint"
  };

  return labels[relation] || labels.constraint;
}

function getMetaIssueRelationText(relation, selectedIsIssue, dictionary, label) {
  const theoryVerbMap = {
    pressure: dictionary.metaRelTheoryPressure || "Pressured by",
    support: dictionary.metaRelTheorySupport || "Supported by",
    constraint: dictionary.metaRelTheoryConstraint || "Constrained by"
  };
  const issueVerbMap = {
    pressure: dictionary.metaRelIssuePressure || "Pressures",
    support: dictionary.metaRelIssueSupport || "Supports",
    constraint: dictionary.metaRelIssueConstraint || "Constrains"
  };

  const verb = selectedIsIssue
    ? issueVerbMap[relation] || issueVerbMap.constraint
    : theoryVerbMap[relation] || theoryVerbMap.constraint;

  if (activeLanguage === "zh") {
    return `${verb}${label}。`;
  }

  return `${verb} ${label}.`;
}

function getTheoryIssueEdgeContext(edge, nodeTypes) {
  const fromType = nodeTypes[edge.from];
  const toType = nodeTypes[edge.to];

  if (fromType === "issue" && toType !== "issue") {
    return { issueId: edge.from, theoryId: edge.to };
  }

  if (toType === "issue" && fromType !== "issue") {
    return { issueId: edge.to, theoryId: edge.from };
  }

  return {
    issueId: fromType === "issue" ? edge.from : edge.to,
    theoryId: fromType === "issue" ? edge.to : edge.from
  };
}

function buildTheoryRelationLists(nodeId, copy, dictionary) {
  const taxonomyLinks = [];
  const issueLinks = [];
  const issueReasons = [];
  const detailMap = getTheoryIssueRelationDetails();
  const selectedType = theoryGraphState.nodeTypes[nodeId];
  const selectedIsIssue = selectedType === "issue";

  theoryGraphState.edgeElements.forEach(({ edge }) => {
    if (edge.from !== nodeId && edge.to !== nodeId) {
      return;
    }

    const otherId = edge.from === nodeId ? edge.to : edge.from;
    const otherLabel = copy[otherId] ? copy[otherId].label : otherId;
    const otherType = theoryGraphState.nodeTypes[otherId];
    const isIssueEdge = selectedIsIssue || otherType === "issue" || edge.type === "issue";

    if (isIssueEdge) {
      const relation = edge.relation || "constraint";
      issueLinks.push(getMetaIssueRelationText(relation, selectedIsIssue, dictionary, otherLabel));

      const { issueId, theoryId } = getTheoryIssueEdgeContext(edge, theoryGraphState.nodeTypes);
      const issueLabel = copy[issueId] ? copy[issueId].label : issueId;
      const theoryLabel = copy[theoryId] ? copy[theoryId].label : theoryId;
      const relationTypeLabel = getMetaRelationTypeText(relation, dictionary);
      const key = `${theoryId}|${issueId}`;
      const detail = detailMap[key];

      const title = activeLanguage === "zh"
        ? `${issueLabel} × ${theoryLabel}（${relationTypeLabel}）`
        : `${issueLabel} × ${theoryLabel} (${relationTypeLabel})`;

      issueReasons.push({
        title,
        reason: (detail && detail.reason) || dictionary.metaIssueReasonFallback || "No detailed rationale recorded for this edge yet.",
        sources: (detail && detail.sources) || []
      });
      return;
    }

    taxonomyLinks.push(otherLabel);
  });

  return { taxonomyLinks, issueLinks, issueReasons };
}

function setActiveTheoryNode(nodeId) {
  if (!theoryGraphState) {
    return;
  }

  const copy = getTheoryNodeCopy();
  const deepDive = getTheoryDeepDive();
  const selected = copy[nodeId];
  const detail = deepDive[nodeId] || {};
  if (!selected) {
    return;
  }

  Object.entries(theoryGraphState.nodeElements).forEach(([id, node]) => {
    node.classList.toggle("active", id === nodeId);
  });

  theoryGraphState.edgeElements.forEach(({ edge, line }) => {
    const connected = edge.from === nodeId || edge.to === nodeId;
    line.classList.toggle("connected", connected);
    line.classList.toggle("dimmed", !connected);
  });

  theoryGraphState.activeNodeId = nodeId;

  const titleEl = document.getElementById("theoryPanelNodeTitle");
  const bodyEl = document.getElementById("theoryPanelNodeBody");
  const whatEl = document.getElementById("theoryPanelWhat");
  const whyEl = document.getElementById("theoryPanelWhy");
  const classicEl = document.getElementById("theoryPanelClassic");
  const claimsEl = document.getElementById("theoryPanelClaims");
  const taxonomyEl = document.getElementById("theoryPanelTaxonomy");
  const issueLinksEl = document.getElementById("theoryPanelIssueLinks");
  const issueReasonsEl = document.getElementById("theoryPanelIssueReasons");
  const dictionary = translations[activeLanguage] || translations.en;
  const emptyText = dictionary.metaPanelListNone || "No primary item recorded for this category.";

  if (titleEl) {
    titleEl.textContent = selected.title || selected.label;
  }
  if (bodyEl) {
    bodyEl.textContent = selected.body;
  }
  if (whatEl) {
    whatEl.textContent = detail.what || selected.body;
  }
  if (whyEl) {
    whyEl.textContent = detail.why || ((selected.claims && selected.claims[0]) || emptyText);
  }
  if (classicEl) {
    classicEl.textContent = detail.classic || ((selected.claims && selected.claims[1]) || emptyText);
  }
  if (claimsEl) {
    claimsEl.innerHTML = "";
    (selected.claims || []).forEach((claim) => {
      const li = document.createElement("li");
      li.textContent = claim;
      claimsEl.appendChild(li);
    });
  }

  const { taxonomyLinks, issueLinks, issueReasons } = buildTheoryRelationLists(nodeId, copy, dictionary);
  setTheoryPanelList(taxonomyEl, taxonomyLinks, emptyText);
  setTheoryPanelList(issueLinksEl, issueLinks, emptyText);
  setTheoryIssueReasonList(issueReasonsEl, issueReasons, dictionary);
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
  const nodeTypes = {};
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

    nodeTypes[node.id] = node.type;
    nodeElements[node.id] = button;
    container.appendChild(button);
  });

  const edgeElements = THEORY_GRAPH_SPEC.edges.map((edge) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.classList.add("theory-edge");
    if (edge.type === "issue") {
      line.classList.add("issue");
    }
    if (edge.relation) {
      line.classList.add(edge.relation);
    }
    svg.appendChild(line);
    return { edge, line };
  });

  theoryGraphState = {
    container,
    svg,
    nodeElements,
    nodeTypes,
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
  updateDiscourseGraphLanguage();
  updateNormativeGraphLanguage();
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
  initDiscourseGraph();
  initNormativeGraph();
});
