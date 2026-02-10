const content = {
    ja: {
        role: "音楽家 / 研究者 / 楽器デザイナー",
        about_title: "About Me",
        about_text_1: "2007年生まれ。幼少期より数学及び音楽（ピアノ、打楽器、作編曲）に強い興味を抱き、現在は両者の関係性に着目し、数的アルゴリズムによる作曲や、数学への聴覚的アプローチの導入など、両者を統合したインタラクティブな表現方法を追求。また、自身の研究知見を楽器設計に応用し、デザイン、ブランディング、演奏までを一貫して行う（イタリア国際打楽器コンクール最高位）。そして、自身の経験から日本におけるギフテッド教育およびSTEAM教育にも注目し、学問や芸術の枠にとらわれない多様で創造的な教育像を模索。関心領域は、物理学、トポロジー、楽器デザイン、AI、プログラミングから、油絵、デザイン、俳句、ルービックキューブなど。学問・芸術・ものづくりの境界を越え、数理的思考と感性の調和から、新たな価値と表現のかたちを創造することが興味の中心。",
        age_label: "年齢:",
        age_val: "18歳",
        dept_label: "学部:",
        dept_val: "経済学部1年",
        career_title: "Career",
        career_1: "RYU Percussion 代表",
        career_2: "steAm Inc.",
        skills_title: "Skills",
        skill_math_title: "◾️数学 & 物理学 (Mathematics & Physics)",
        skill_math_desc: "研究基盤: 複素解析、トポロジー、解析的数論（ζ関数）<br>応用モデル: 確率過程（マルコフ連鎖、点過程）、群論、非ユークリッド幾何学<br>物理・音響: 音響物理学、振動・波動論、リズム生成の数理解析",
        skill_music_title: "◾️音楽 & 作曲 (Music & Composition)",
        skill_music_desc: "演奏: ピアノ、スネアドラムソロ、パーカッション<br>理論・作曲: 数理的作曲（確率モデル・マルコフ連鎖・クセナキス的手法・音響的多元構造など）、編曲、サウンドデザイン、ポリリズム<br>応用: 楽器設計、音響解析、物理音響モデリング、音響工学",
        skill_prog_title: "◾️プログラミング & AI (Programming & AI)",
        skill_prog_desc: "使用言語: Python<br>信号処理: デジタル信号処理 (DSP)、高速フーリエ変換 (FFT)、パワースペクトル密度 (PSD)、ウェーブレット変換、ゼロ点分布解析<br>AI・機械学習: 深層学習（RNN, VAE, GANs）による作曲モデルの構築<br>システム開発: 確率的作曲システム、変拍子生成アルゴリズム、音響データ解析ツールの実装",
        skill_design_title: "◾️デザイン & コミュニケーション (Design & Communication)",
        skill_design_desc: "ビジュアル: 油絵、グラフィックデザイン、数学的・音響的データのビジュアライゼーション<br>応用: 楽器デザイン、音響インスタレーション",
        skill_lang_title: "◾️言語 (Languages)",
        skill_lang_desc: "ドイツ語、フランス語、英語、日本語、イタリア語、スペイン語",
        projects_title: "Projects",
        proj_inst_title: "◾️楽器デザイン (Instruments design)",
        proj_inst_desc: "概要: 音響物理学の知見に基づく楽器設計。設計、製作、演奏、ブランディング。<br>主な設計: Snare Drum, Snare Stand, Percussion Stands, Percussion Mallets…",
        proj_paper_title: "◾️研究論文 & 執筆 (Publications & Writing)",
        proj_paper_desc: "[研究論文] リーマンゼータ零点の多角的ソニフィケーション：相補的音響表現による数論的構造の知覚的解析 (2025)<br>概要: ゼータ関数の零点をソニフィケーションし、その知覚的有効性を評価する試み。<br><br>[研究論文] スネアドラムの構成要素がその音響特性に与える物理的影響の定量的評価 (2025)<br>概要: スネアドラムの主要要素がそのティンバーに与える影響を定量化。楽器設計理論の基盤。",
        proj_dev_title: "◾️開発 (Software & Systems)",
        proj_dev_desc: "Mathematical Composition System (2024)<br>概要: 確率過程（マルコフ連鎖等）及び統計的手法を用いたリズム・音響生成システム。<br>実装: Pythonにて実装。<br><br>音響信号処理の自動可視化ツール (内部ツール)<br>概要: FFT、PSD、ウェーブレット変換など、音響データ解析の結果をバッチ処理で自動可視化するツール。研究・開発効率の向上に貢献。",
        proj_art_title: "◾️音楽活動、作品 (Art Works & Performances)",
        proj_art_desc: "Snare Solo / Snare × Piano (Instagram)<br>概要: 自作スネアドラム（RYU Percussion）のソロ演奏および、スネアとピアノの演奏。<br><br>Solo Works<br>概要: スネアドラムソロやスネアコンチェルトなど。数理的手法に基づく作曲など。",
        proj_edu_title: "◾️教育 (Education)",
        proj_edu_desc: "数学、音楽、芸術、プログラミングなどさまざまな分野を横断する、統合的教育モデルを構想。<br>STEM教育とギフテッド教育を融合させた多様で創造的な教育像を提案。",
        research_title: "Core Research Themes",
        res_1: "<strong>◾️解析的数論のソニフィケーション</strong>リーマンゼータ関数の零点分布や素数分布といった数論的構造と、音響パラメータ（周波数、リズム、音色）との構造的対応を研究。ソニフィケーションによって、数理的概念と聴覚的情報を対応させ、数理構造の知覚に新たなアプローチを見出す。",
        res_2: "<strong>◾️アルゴリズミック作曲と数理モデル</strong>クセナキス（Iannis Xenakis）の確率論的手法（Stochastic Music）、マルコフ連鎖、群論、非ユークリッド幾何学などの数理モデルを用いた作曲アルゴリズムを構築。ポリリズムとその知覚構造の対応。",
        res_3: "<strong>◾️音響物理学と楽器設計への応用</strong>スネアドラム等の打楽器が発する音響の物理的特性（振動モード、減衰率、周波数特性）を、実験とシミュレーション（物理音響モデリング）によって定量的・数理的に評価。この知見を楽器設計に直接フィードバックし、音響特性を意図的にデザイン。",
        contact_title: "Contact & Collaboration",
        contact_desc: "研究に関するご質問やご指摘、音楽活動などにご興味がございましたら、下記SNSよりお気軽にご連絡ください。"
    },
    en: {
        role: "Musician / Researcher / Instrument Designer",
        about_title: "About Me",
        about_text_1: "Born in 2007. I have had a strong interest in mathematics and music (piano, percussion, composition) since childhood. Currently, I focus on the relationship between the two, pursuing interactive expressions that integrate them, such as composition using numerical algorithms and introducing auditory approaches to mathematics. I also apply my research findings to instrument design, handling everything from design and branding to performance consistently (Top Prize at the Italy International Percussion Competition). Based on my own experiences, I also focus on Gifted Education and STEAM Education in Japan, exploring a diverse and creative educational model that transcends the boundaries of academia and art. My areas of interest range from Physics, Topology, Instrument Design, AI, and Programming to Oil Painting, Design, Haiku, and Rubik's Cubes. My core interest lies in crossing the boundaries of academia, art, and craftsmanship to create new values and forms of expression through the harmony of mathematical thinking and sensibility.",
        age_label: "Age:",
        age_val: "18",
        dept_label: "Faculty:",
        dept_val: "1st Year, Faculty of Economics",
        career_title: "Career",
        career_1: "Representative, RYU Percussion",
        career_2: "steAm Inc.",
        skills_title: "Skills",
        skill_math_title: "◾️Mathematics & Physics",
        skill_math_desc: "Research Basis: Complex Analysis, Topology, Analytic Number Theory (Zeta Function)<br>Applied Models: Stochastic Processes (Markov Chains, Point Processes), Group Theory, Non-Euclidean Geometry<br>Physics & Acoustics: Acoustic Physics, Oscillation & Wave Theory, Mathematical Analysis of Rhythm Generation",
        skill_music_title: "◾️Music & Composition",
        skill_music_desc: "Performance: Piano, Snare Drum Solo, Percussion<br>Theory & Composition: Mathematical Composition (Stochastic Models, Markov Chains, Xenakian Methods, Acoustic Multivariate Structures), Arrangement, Sound Design, Polyrhythms<br>Application: Instrument Design, Acoustic Analysis, Physical Acoustic Modeling, Acoustical Engineering",
        skill_prog_title: "◾️Programming & AI",
        skill_prog_desc: "Languages: Python<br>Signal Processing: DSP, FFT, PSD, Wavelet Transform, Zero-Point Distribution Analysis<br>AI & ML: Construction of Composition Models using Deep Learning (RNN, VAE, GANs)<br>System Development: Stochastic Composition Systems, Odd Meter Generation Algorithms, Implementation of Acoustic Data Analysis Tools",
        skill_design_title: "◾️Design & Communication",
        skill_design_desc: "Visuals: Oil Painting, Graphic Design, Visualization of Mathematical/Acoustic Data<br>Application: Instrument Design, Sound Installations",
        skill_lang_title: "◾️Languages",
        skill_lang_desc: "German, French, English, Japanese, Italian, Spanish",
        projects_title: "Projects",
        proj_inst_title: "◾️Instrument Design",
        proj_inst_desc: "Overview: Instrument design based on findings in acoustic physics. Design, manufacturing, performance, and branding.<br>Main Designs: Snare Drum, Snare Stand, Percussion Stands, Percussion Mallets…",
        proj_paper_title: "◾️Publications & Writing",
        proj_paper_desc: "[Paper] Multilateral Sonification of Riemann Zeta Zeros: Perceptual Analysis of Number-Theoretic Structures via Complementary Acoustic Representations (2025)<br>Overview: Sonification of Zeta function zeros and evaluation of their perceptual effectiveness.<br><br>[Paper] Quantitative Evaluation of the Physical Influence of Snare Drum Components on Acoustic Characteristics (2025)<br>Overview: Quantifying the impact of snare drum elements on timbre. Basis for instrument design theory.",
        proj_dev_title: "◾️Development (Software & Systems)",
        proj_dev_desc: "Mathematical Composition System (2024)<br>Overview: Rhythm and sound generation system using stochastic processes (Markov Chains, etc.) and statistical methods.<br>Implementation: Python.<br><br>Automated Visualization Tool for Acoustic Signal Processing (Internal Tool)<br>Overview: Batch processing tool for automatic visualization of acoustic data analysis (FFT, PSD, Wavelet Transform). Contributes to research/dev efficiency.",
        proj_art_title: "◾️Art Works & Performances",
        proj_art_desc: "Snare Solo / Snare × Piano (Instagram)<br>Overview: Solo performance of self-made snare drum (RYU Percussion) and performance with piano.<br><br>Solo Works<br>Overview: Snare drum solos, snare concertos, etc. Composition based on mathematical methods.",
        proj_edu_title: "◾️Education",
        proj_edu_desc: "Envisioning an integrated educational model crossing mathematics, music, art, and programming.<br>Proposing a diverse and creative image of education fusing STEM and Gifted Education.",
        research_title: "Core Research Themes",
        res_1: "<strong>◾️Sonification of Analytic Number Theory</strong>Researching the structural correspondence between number-theoretic structures (like Riemann Zeta zero distribution and prime distribution) and acoustic parameters (frequency, rhythm, timbre). Finding new approaches to perceiving mathematical structures via sonification.",
        res_2: "<strong>◾️Algorithmic Composition & Mathematical Models</strong>Constructing composition algorithms using mathematical models such as Iannis Xenakis's Stochastic Music, Markov Chains, Group Theory, and Non-Euclidean Geometry. Correspondence between polyrhythms and perceptual structures.",
        res_3: "<strong>◾️Acoustical Physics & Application to Instrument Design</strong>Quantitatively and mathematically evaluating the physical characteristics (vibration modes, damping rates, frequency response) of sounds emitted by percussion instruments like snare drums via experiments and simulations (Physical Acoustic Modeling). Feeding these findings back directly into instrument design.",
        contact_title: "Contact & Collaboration",
        contact_desc: "If you have any questions regarding my research, suggestions, or interest in my musical activities, please feel free to contact me via SNS below."
    }
};

const interests = {
    ja: ["数理音楽学", "数学", "音楽", "物理学", "アルゴリズミック作曲", "AI", "プログラミング", "絵画", "デザイン", "俳句", "ルービックキューブ", "ギフテッド教育", "STEM教育", "機械学習", "楽器設計"],
    en: ["Mathematical Musicology", "Mathematics", "Music", "Physics", "Algorithmic Composition", "AI", "Programming", "Painting", "Design", "Haiku", "Rubik's Cube", "Gifted Education", "STEM Education", "Machine Learning", "Instrument Design"]
};

let currentLang = 'ja';

const langBtn = document.getElementById('lang-toggle');
const tagsContainer = document.getElementById('interests-tags');

function updateContent() {
    // ボタンのテキスト更新
    langBtn.textContent = currentLang === 'ja' ? 'English' : '日本語';

    // テキストコンテンツの更新
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (content[currentLang][key]) {
            elem.innerHTML = content[currentLang][key]; // HTMLタグを含むためinnerHTML
        }
    });

    // 興味タグの更新
    tagsContainer.innerHTML = '';
    interests[currentLang].forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';
    updateContent();
});

// 初期ロード
updateContent();
