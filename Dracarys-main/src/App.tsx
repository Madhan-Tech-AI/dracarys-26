import React, { useState, useEffect } from 'react';
import { Flame, Sword, Crown, Zap, Image, Palette, MapPin, Phone, Calendar, X } from 'lucide-react';
import REGISTRATION_QR from './registration-qr.png';

interface Event {
  id: string;
  name: string;
  house: string;
  motto: string;
  description: string;
  coordinators: { name: string; phone: string }[];
  color: string;
  icon: React.ReactNode;
}

const events: Event[] = [
  {
    id: 'data-maze',
    name: 'Data Maze',
    house: 'House Stark',
    motto: 'Winter is Coming',
    description: 'Navigate through complex data structures and algorithms. Only the sharpest minds survive the frozen challenges.',
    coordinators: [
      { name: 'Akash Kumar Singh O', phone: '+91 73972 71303' },
      { name: 'Madhan Kumar P', phone: '+91 93427 45299' }
    ],
    color: 'from-blue-900 to-slate-800',
    icon: <Sword className="w-8 h-8" />
  },
  {
    id: 'codex',
    name: 'Codex',
    house: 'House Lannister',
    motto: 'Hear Me Roar!',
    description: 'Golden coding challenges that separate the lions from the lambs. Show your programming prowess.',
    coordinators: [
      { name: 'Mohammed Tanveer K', phone: '+91 99520 16905' },
      { name: 'Nithishwar J', phone: '+91 63696 06909' }
    ],
    color: 'from-yellow-600 to-red-800',
    icon: <Crown className="w-8 h-8" />
  },
  {
    id: 'slide-storm',
    name: 'Slide Storm',
    house: 'House Targaryen',
    motto: 'Fire and Blood',
    description: 'Present with the fury of dragons. Burn through presentations with passion and power.',
    coordinators: [
      { name: 'Shabnam D', phone: '+91 73972 71303' },
      { name: 'Poorani S', phone: '+91 93427 45299' }
    ],
    color: 'from-red-900 to-black',
    icon: <Flame className="w-8 h-8" />
  },
  {
    id: 'proto-spark',
    name: 'Proto Spark',
    house: 'House Baratheon',
    motto: 'Ours is the Fury',
    description: 'Forge prototypes with the strength of storms. Innovation meets determination.',
    coordinators: [
      { name: 'Sanjai Karthikeyan S', phone: '+91 63796 09338' },
      { name: 'Yeshwanth B', phone: '+91 79046 50040' }
    ],
    color: 'from-yellow-500 to-orange-800',
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 'pixel-prompt',
    name: 'Pixel Prompt',
    house: 'House Greyjoy',
    motto: 'What is Dead May Never Die',
    description: 'Dive deep into AI prompting like the depths of the Iron Islands. Master the art of communication with machines.',
    coordinators: [
      { name: 'Poorna Lakshmi S', phone: '+91 93427 45299' },
      { name: 'Harini S', phone: '+91 73972 71303' }
    ],
    color: 'from-teal-800 to-slate-900',
    icon: <Image className="w-8 h-8" />
  },
  {
    id: 'design-sphere',
    name: 'Design Sphere',
    house: 'House Tyrell',
    motto: 'Growing Strong',
    description: 'Bloom with creativity in design challenges. Beauty and functionality intertwined like roses.',
    coordinators: [
      { name: 'Kamalesh S', phone: '+91 93420 97741' },
      { name: 'Rithika Joshi B', phone: '+91 93427 45299' }
    ],
    color: 'from-green-700 to-yellow-600',
    icon: <Palette className="w-8 h-8" />
  }
];

const coreTeam = [
  { role: 'President', name: 'Akash Kumar Singh O', contact: '+91 73972 71303' },
  { role: 'Vice President', name: 'Poorani S', contact: '+91 63814 48766' },
  { role: 'Treasurer', name: 'Madhan Kumar P', contact: '+91 93427 45299' },
];

// Google Form placeholder – replace with actual link later
const GOOGLE_FORM_URL = 'https://forms.gle/f6CKNjFFS2vQgrbU6';

// Detailed rules per event (expand with more events as needed)
const eventRules: Record<string, any> = {
  'data-maze': {
    meta: {
      teamSize: '1–3 members (open to all departments).',
      duration: '2 hrs 30 mins.',
      tools: 'Python / R / Jupyter / Colab, Power BI / Tableau, AI coding assistants.'
    },
    tasks: [
      'Clean dataset (handle missing values, duplicates, noise).',
      'Create insightful visualizations.',
      'Build & evaluate at least one ML model.',
      'Present workflow, results, and insights.'
    ],
    guidelines: [
      '4 datasets provided; each team gets one randomly.',
      'No external datasets or pre-trained models allowed.',
      'Internet use limited to documentation/coding support.',
      'Maintain discipline; misconduct leads to disqualification.'
    ],
    judging: [
      'Data Cleaning – 20%',
      'Visualization – 25%',
      'Model Accuracy – 30%',
      'Presentation – 15%',
      'Time Management – 10%'
    ],
    deliverables: [
      'Cleaned dataset',
      'Visualizations (report/notebook/Power BI)',
      'Model code + accuracy',
      'Final presentation slides'
    ]
  },
  'slide-storm': {
    meta: {
      teamSize: '1–3 members (open to all departments).',
      duration: '4–5 minutes presentation + Q&A.',
      tools: 'PPT/Keynote/Google Slides; laser pointer optional.'
    },
    tasks: [],
    guidelines: [
      'Paper must be original and based on technical/research topics.',
      'Clearly present problem statement, methodology, and conclusion.',
      'Presentation should be clear, concise, and structured.'
    ],
    judging: [
      'Presentation – 40%',
      'Team Coordination – 20%',
      'PPT Quality – 30%',
      'Q&A – 10%'
    ],
    deliverables: [],
    rules: [
      'Stick to allotted time.',
      'Maintain discipline; jury’s decision is final.',
      'Arguments with jury lead to disqualification.'
    ]
  },
  'pixel-prompt': {
    meta: {
      teamSize: 'Solo (1 participant only).',
      duration: '50 mins (Setup – 5, Prompt – 15, Image – 25, Submission – 5).',
      tools: 'Any AI image generation tool (Internet allowed for tool usage only).'
    },
    tasks: [
      'Prompt creation → Image generation → Documentation → Submission.'
    ],
    guidelines: [
      'One keyword will be assigned randomly.',
      'Tools: Any AI image generation tool (Internet allowed for tool usage only).'
    ],
    restrictions: [
      'Prompts must be original.',
      'No prompt generators, pre-written templates, or copying.',
      'Internet use strictly for AI tool access.',
      'Misconduct or plagiarism leads to disqualification.'
    ],
    judging: [
      'Accuracy to Keyword – 40%',
      'Image Quality & Details – 30%',
      'Prompt Length & Complexity – 15%',
      'Time Management – 15%'
    ],
    deliverables: [
      'Original Prompt (Word/PDF)',
      'Generated Image (JPG/PNG)',
      'Keyword Documentation',
      'Optional Explanation',
      'Note: Jury’s decision is final.'
    ]
  },
  'proto-spark': {
    meta: {
      teamSize: '1–4 members (cross-department teams allowed).',
      duration: 'Setup time: 15 mins | Event: 6 hours (Full Day).',
      tools: 'Open to any tech stack. Teams responsible for their own hardware; internet provided.'
    },
    categories: [
      'Software (Web, Mobile, AI/ML, Games)',
      'Hardware/IoT (Robotics, Automation, Sensors)',
      'Web & Digital Solutions (E-commerce, APIs, CMS)',
      'Emerging Tech (Blockchain, AR/VR, Cybersecurity, Cloud)'
    ],
    guidelines: [
      'Projects must be at least 70% complete & functional.',
      'Source code + documentation required.',
      'Presentation: 8–10 mins + 5 mins Q&A + Live demo.',
      'Teams responsible for own hardware; internet provided.'
    ],
    judging: [
      'Innovation & Creativity – 25',
      'Technical Implementation – 25',
      'Functionality & Usability – 20',
      'Problem Solving – 15',
      'Presentation & Communication – 10',
      'Documentation – 5'
    ],
    awards: [
      'Best Overall Project (1st, 2nd, 3rd + Cash Prizes)',
      'Special Awards: Best Innovation, Best Technical Implementation, Best UI/UX, Best Hardware, People’s Choice, Best Presentation.'
    ],
    disqualification: [
      'Plagiarism / copied projects.',
      'Non-functional or incomplete demos.',
      'Misconduct, false ownership, or offensive content.',
      'Failure to present or provide source code.'
    ],
    deliverables: [
      'Before Event (48 hrs): Abstract, team details, tech stack, setup needs.',
      'On Event Day: Source code, documentation, slides, (optional demo video/report).'
    ],
    schedule: [
      '9–10 AM: Registration & Setup',
      '10–12 PM: Round 1 Judging',
      '1–2 PM: Round 2 Judging',
      '2–5 PM: Public Exhibition',
      '5–6 PM: Award Ceremony'
    ],
    notes: ['Jury’s decision is final. Projects may be featured online.']
  },
  'design-sphere': {
    meta: {
      teamSize: '1–3 members (open to all departments)',
      duration: '4–5 mins presentation + Q&A',
      tools: 'Any design tools (Figma, Adobe XD, Sketch, etc.)'
    },
    guidelines: [
      'Designs must be original & prepared beforehand.',
      'Clearly define problem statement & design approach.',
      'Presentation should be clear, functional, and innovative.'
    ],
    judging: [
      'Design – 50%',
      'Functionality – 20%',
      'Presentation – 20%',
      'Q&A – 10%'
    ],
    rules: [
      'Stick to allotted time.',
      'Maintain discipline; jury’s decision is final.',
      'Plagiarism/copying will lead to disqualification.'
    ]
  }
};

function App() {
  const [darkMode] = useState(true);
  const [route, setRoute] = useState<string>(window.location.hash.replace('#/', '') || 'home');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [dragonAnimation, setDragonAnimation] = useState(false);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2026-09-26T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = Math.max(0, targetDate - now);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simple hash routing
  useEffect(() => {
    const onHashChange = () => {
      const path = window.location.hash.replace('#/', '') || 'home';
      setRoute(path);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const triggerDragonAnimation = () => {
    setDragonAnimation(true);
    setTimeout(() => setDragonAnimation(false), 3000);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToRegister = () => {
    window.location.hash = '/register';
  };
  const goToEvent = (id: string) => {
    window.location.hash = `/event/${id}`;
  };

  const EventDetailPage = ({ eventId }: { eventId: string }) => {
    const event = events.find(e => e.id === eventId);
    if (!event) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-black text-gold-400 pt-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Event not found</h1>
            <button onClick={() => (window.location.hash = '/events')} className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold">← Back to Events</button>
          </div>
        </div>
      );
    }

    const specific = eventRules[eventId];
    const fallbackRules: string[] = [
      'Bring a valid college ID card and registration confirmation.',
      'Team composition and size as specified by coordinators.',
      'Use of internet/resources subject to proctor approval.',
      'Judges’ decisions are final; malpractice leads to disqualification.',
      'Report 15 minutes before the event start time.'
    ];

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-black text-gold-400 pt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8">
            <button onClick={() => (window.location.hash = '/home#events')} className="px-4 py-2 rounded border border-red-900/40 text-gold-300 hover:bg-gold-400 hover:text-black transition-colors">← Back</button>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-red-900/40 bg-black/40 p-6 mb-8">
            <div className="absolute inset-0 opacity-15 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gold-400/20">{event.icon}</div>
                  <h1 className="text-3xl md:text-4xl font-bold text-red-400">{event.name}</h1>
                </div>
                <div className="text-gold-300">{event.house}</div>
              </div>
              <div className="italic text-gold-400 mb-4">"{event.motto}"</div>
              <p className="text-gold-200">{event.description}</p>
            </div>
          </div>

          <div className="rounded-lg border border-red-900/40 bg-black/40 p-6">
            <h2 className="text-2xl font-bold text-gold-300 mb-4">Rules and Regulations</h2>
            {!specific && (
              <ul className="list-disc pl-6 space-y-2 text-gold-200">
                {fallbackRules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            )}

            {specific && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 text-gold-200">
                  <div>
                    <div className="font-semibold text-gold-300">Team Size</div>
                    <div>{specific.meta.teamSize}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gold-300">Duration</div>
                    <div>{specific.meta.duration}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gold-300">Tools Allowed</div>
                    <div>{specific.meta.tools}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-2">Tasks</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gold-200">
                    {specific.tasks?.map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-2">Guidelines</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gold-200">
                    {specific.guidelines?.map((g: string, i: number) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>

                {specific.restrictions && (
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-2">Restrictions</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gold-200">
                      {specific.restrictions.map((r: string, i: number) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-2">Judging Criteria</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gold-200">
                    {specific.judging?.map((j: string, i: number) => (
                      <li key={i}>{j}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-2">Deliverables</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gold-200">
                    {specific.deliverables?.map((d: string, i: number) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>

                {specific.awards && (
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-2">Awards</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gold-200">
                      {specific.awards.map((a: string, i: number) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {specific.disqualification && (
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-2">Disqualification</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gold-200">
                      {specific.disqualification.map((d: string, i: number) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {specific.schedule && (
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-2">Schedule</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gold-200">
                      {specific.schedule.map((s: string, i: number) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {specific.notes && (
                  <div className="text-gold-300 text-sm">{specific.notes.join(' ')}</div>
                )}
              </div>
            )}

            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <div className="text-sm text-gold-300">For queries, contact the coordinators listed on the event card.</div>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold">Join the House</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RegistrationPage = () => {
    const [showDescriptions, setShowDescriptions] = useState(false);
    // Persist open state to avoid accidental closes due to remounts
    useEffect(() => {
      const saved = sessionStorage.getItem('dracarys_desc_open');
      if (saved === 'true') setShowDescriptions(true);
    }, []);
    useEffect(() => {
      sessionStorage.setItem('dracarys_desc_open', showDescriptions ? 'true' : 'false');
    }, [showDescriptions]);
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-black text-gold-400 pt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-center text-5xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-600" style={{ fontFamily: 'serif' }}>
            REGISTRATION
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="mx-auto w-[260px]">
              <div className="rounded-2xl p-5 bg-black border-2 border-red-900/50 shadow-glow-red">
                <img
                  src={REGISTRATION_QR}
                  alt="Registration QR"
                  className="w-full h-auto rounded-lg bg-white"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <p className="text-center mt-3 text-gold-300">Scan to register</p>
            </div>

            <div>
              <p className="text-gold-200 leading-relaxed">
                Use the QR to register for DRACARYS 2026. Each participant can choose two Technical
                Events and two Non-Technical Events. Fill your personal details correctly and upload any
                required proof if asked. Ensure selections are final before submission to secure your spot.
              </p>
              <p className="mt-4 text-red-400">
                Note: Transport will be provided. Food will be provided for all participants.
              </p>
              <p className="mt-4 text-gold-300">
                Can't scan the QR? <a href="https://forms.gle/i5Y99Fpq8ao64hNa8" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">Click here to register online</a>
              </p>
            </div>
          </div>

          <div className="mt-10">
            {!showDescriptions && (
              <button
                onClick={() => setShowDescriptions(true)}
                aria-expanded={showDescriptions}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg bg-black/50 border border-red-900/40 hover:border-gold-400/60 transition-colors"
              >
                <span className="text-xl">▾</span>
                <span className="font-semibold">View event descriptions</span>
              </button>
            )}
            {showDescriptions && (
              <div className="mt-4 rounded-lg bg-black/40 border border-red-900/40">
                <div className="flex items-center justify-between px-4 py-3 border-b border-red-900/40">
                  <div className="font-semibold">Event descriptions</div>
                  <button aria-label="Close descriptions" onClick={() => setShowDescriptions(false)} className="p-1 hover:text-red-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 grid md:grid-cols-2 gap-6">
                  {events.map((e) => (
                    <div key={e.id} className="p-5 rounded-lg bg-black/30 border border-red-900/40">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-red-400 font-bold text-xl">{e.name}</h3>
                        <div className="text-gold-300 text-sm">{e.house}</div>
                      </div>
                      <p className="text-gold-200 text-sm">{e.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => (window.location.hash = '/home')} className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold">
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (route === 'register') {
    return <RegistrationPage />;
  }
  if (route.startsWith('event/')) {
    const eventId = route.split('/')[1] || '';
    return <EventDetailPage eventId={eventId} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 bg-gradient-to-b from-slate-900 via-red-950 to-black text-gold-400`}>

      {/* Dragon Animation Overlay */}
      {dragonAnimation && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="animate-pulse">
            <div className="absolute inset-0 bg-red-500/20 animate-ping"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-bounce">
              <Flame className="w-20 h-20 text-red-500 animate-spin" />
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-red-900/30`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={triggerDragonAnimation}
              className="hover:scale-110 transition-transform duration-300"
            >
              <Flame className={`w-8 h-8 text-red-500 hover:text-yellow-500 transition-colors`} />
            </button>
            <h1 className={`text-2xl font-bold text-gold-400`} style={{ fontFamily: 'serif' }}>
              DRACARYS 2026
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['about', 'events', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-red-400 transition-colors font-semibold text-gold-300 hover:text-red-400`}
              >
                {section}
              </button>
            ))}
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950 to-slate-900`}>

        {/* Background Image */}
        <img
          src="https://i.pinimg.com/736x/79/25/f1/7925f1aca5714ecec2660268712cc3f5.jpg"
          alt="House Targaryen backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-red-500 rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-600`} style={{ fontFamily: 'serif' }}>
            DRACARYS '26
          </h1>

          <h2 className={`text-2xl md:text-4xl mb-8 font-semibold text-gold-300`}>
            When you play the game of thrones <br /> you win or you die
          </h2>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className={`text-xl mb-6 text-gold-400`}>
              The Great War Begins In:
            </h3>
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className={`bg-black/50 border-red-900/50 border-2 rounded-lg p-4 backdrop-blur-sm`}>
                  <div className={`text-3xl font-bold text-red-400`}>
                    {value}
                  </div>
                  <div className={`text-sm capitalize text-gold-300`}>
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={goToRegister}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 transform ${'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-500 hover:to-red-700 shadow-lg shadow-red-900/50'
                }`}
            >
              🔥 Join the War - Register Now
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 transform border-2 ${'border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black'
                }`}
            >
              ⚔️ Explore Events
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-gradient-to-r from-slate-900 to-red-950`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 ${darkMode ? 'text-gold-400' : 'text-slate-800'
            }`} style={{ fontFamily: 'serif' }}>
            Department of <br /> Artificial Intelligence & Data Science
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className={`text-lg leading-relaxed mb-6 text-gold-200`}>
                In the realm of technology, where data flows like rivers and algorithms reign supreme,
                we gather the greatest minds to forge the future. DRACARYS 2026 is not merely a symposium—it is
                a convergence of innovation, creativity, and collaboration.
              </p>
              <p className={`text-lg leading-relaxed text-gold-200`}>
                Like the great houses of Westeros, each event challenges different aspects of your skills,
                testing your mettle in the fires of competition and emerging stronger through fellowship.
              </p>
            </div>
            <div className={`bg-black/30 border-red-900/50 border-2 rounded-lg p-8 backdrop-blur-sm`}>
              <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gold-400' : 'text-slate-800'}`}>
                The Small Council
              </h4>
              <div className="space-y-4">
                {coreTeam.map((member, index) => (
                  <div key={index} className={`flex justify-between items-center p-3 rounded ${'bg-red-900/20'
                    }`}>
                    <div>
                      <div className={`font-semibold text-gold-300`}>
                        {member.name}
                      </div>
                      <div className={`text-sm text-gold-400`}>
                        {member.role}
                      </div>
                    </div>
                    <div className={`text-sm text-red-400`}>
                      {member.contact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className={`py-20 bg-gradient-to-b from-black to-slate-900`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 ${'text-gold-400'
            }`} style={{ fontFamily: 'serif' }}>
            The Six Great Houses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 transform ${'bg-black/50 border border-red-900/30 hover:border-gold-400/50'
                  } backdrop-blur-sm hover:shadow-2xl`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>

                <div className="relative p-6 z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gold-400/20`}>
                      {event.icon}
                    </div>
                    <div className={`text-right text-sm text-gold-300`}>
                      {event.house}
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 text-red-400`}>
                    {event.name}
                  </h3>

                  <p className={`text-sm font-semibold mb-3 italic text-gold-400`}>
                    "{event.motto}"
                  </p>

                  <p className={`text-sm mb-4 leading-relaxed text-gold-200`}>
                    {event.description}
                  </p>

                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 text-gold-300`}>
                      Coordinators:
                    </h4>
                    {event.coordinators.map((coordinator, index) => (
                      <div key={index} className={`text-sm flex justify-between text-gold-200`}>
                        <span>{coordinator.name}</span>
                        <span className="font-mono">{coordinator.phone}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => goToEvent(event.id)}
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform ${'bg-red-600 text-white hover:bg-red-500'
                      }`}
                  >
                    Join This House
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section removed per request */}

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gradient-to-b from-slate-900 to-black`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 ${'text-gold-400'
            }`} style={{ fontFamily: 'serif' }}>
            Summon the Ravens
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className={`bg-black/30 border-red-900/50 border-2 rounded-lg p-8 backdrop-blur-sm`}>
              <h3 className={`text-2xl font-bold mb-6 text-red-400`}>
                The Citadel
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className={`w-6 h-6 text-gold-400`} />
                  <div>
                    <div className={`font-semibold text-gold-300`}>
                      Department of Artificial Intelligence & Data Science
                    </div>
                    <div className={`text-gold-200`}>
                      [Gojan School of Business and Technology], [Edapalayam, Redhills]
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className={`w-6 h-6 text-gold-400`} />
                  <div>
                    <div className={`font-semibold text-gold-300`}>
                      26 September 2026
                    </div>
                    <div className={`text-gold-200`}>
                      The day of reckoning arrives
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-black/30 border-red-900/50 border-2 rounded-lg p-8 backdrop-blur-sm`}>
              <h3 className={`text-2xl font-bold mb-6 text-red-400`}>
                The Maesters
              </h3>
              <div className="space-y-4">
                {coreTeam.slice(0, 3).map((member, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Phone className={`w-5 h-5 text-gold-400`} />
                    <div>
                      <div className={`font-semibold text-gold-300`}>
                        {member.name} ({member.role})
                      </div>
                      <div className={`text-gold-200`}>
                        {member.contact}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <button
              onClick={goToRegister}
              className={`inline-block px-12 py-6 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 transform ${'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-500 hover:to-red-700 shadow-lg shadow-red-900/50'
                }`}
            >
              🐉 Claim Your Throne - Register Now
            </button>
            <p className={`mt-4 text-sm text-gold-300`}>
              "A Fire cannot kill a dragon."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-10 bg-black border-top border-red-900/30 text-gold-400`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-center gap-3 md:gap-5">
            {/* Left emblem */}
            <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-full bg-black/60 border border-red-900/40 overflow-hidden flex items-center justify-center">
              <img
                src="/gojan-logo.png"
                alt="Gojan logo"
                className="w-full h-full object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg md:text-2xl font-extrabold tracking-wide text-gold-200">
                GOJAN SCHOOL OF BUSINESS AND TECHNOLOGY
              </h3>
              <div className="mt-2 text-gold-300 text-sm leading-relaxed">
                Approved by A.I.C.T.E., New Delhi & Affiliated to Anna University, Chennai
              </div>
              <div className="text-gold-300 text-sm leading-relaxed">
                NAAC Accredited Institution Recognized by UGC u/s 2(f) & 12(B) of the UGC Act
              </div>
              <div className="text-gold-300 text-sm leading-relaxed">
                Gojan College Road, Edapalayam, Redhills, Chennai – 600 052.
              </div>
            </div>

            {/* Right badge */}
            <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-full bg-black/60 border border-red-900/40 overflow-hidden flex items-center justify-center">
              <img
                src="/gojan-20years.png"
                alt="20 Years of Excellence"
                className="w-full h-full object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </div>

          <div className="h-px w-full bg-red-900/40 my-6"></div>
          <p className="text-center text-xs text-gold-400">
            © 2026 DRACARYS – Department of Artificial Intelligence & Data Science
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
