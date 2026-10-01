'use strict';

const posts = [
    {
        id:1,title:'10 Best Openings Every Beginner Player Must Know',
        date:'March 10, 2025',author:'GM Kasra',authorRole:'Academy Director & Founder',
        cover:'assets/images/blog1.jpg',
        tags:['Openings','Beginner','Training'],
        content:`
            <p>Chess, this intellectual and strategic game, requires knowledge and precise planning from the very first move. One of the most important parts of learning chess for beginners is familiarity with openings. Openings not only shape the start of the game but also determine the entire course of the match.</p>
            <h2>1. Italian Game</h2>
            <p>Moves: e4 e5, Nf3 Nc6, Bc4. This classic opening is one of the best choices for beginners. Center control and rapid piece development are the basic principles of this opening. The main goal is to create pressure on Black's f7 weakness and prepare for a kingside attack.</p>
            <h2>2. Sicilian Defense</h2>
            <p>Moves: e4 c5. The most popular response to e4, seeking to create an asymmetrical game and attacking chances for Black. The Sicilian is an aggressive defense where Black seeks counter-attack rather than passive defense.</p>
            <h2>3. Ruy Lopez</h2>
            <p>Moves: e4 e5, Nf3 Nc6, Bb5. One of the oldest and most studied openings, containing deep strategic plans. This opening has been in use since the 16th century.</p>
            <h2>4. French Defense</h2>
            <p>Moves: e4 e6. A solid defense that gives Black a strong pawn structure and allows fighting for the center.</p>
            <h2>5. Queen's Gambit</h2>
            <p>Moves: d4 d5, c4. One of the most famous queen pawn openings used at various levels. White's goal is center control and creating more space.</p>
            <h2>6. King's Indian Defense</h2>
            <p>Moves: d4 Nf6, c4 g6, Nc3 Bg7. One of the most popular defenses against d4, giving Black powerful counter-attacking chances.</p>
            <p>Mastering these 10 openings can provide a solid foundation for your chess improvement. We recommend practicing each opening separately and studying grandmaster games in each opening.</p>`
    },
    {
        id:2,title:'Complete Training Plan: How to Increase Your Rating by 200 Points in 30 Days?',
        date:'March 5, 2025',author:'Pedram Naderi',authorRole:'Tactics & Analysis Specialist',
        cover:'assets/images/blog2.jpg',
        tags:['Practice','Rating','Progress'],
        content:`
            <p>Increasing your chess rating requires regular planning, targeted practice, and precise game analysis. In this article, we have compiled a complete 30-day program for you.</p>
            <h2>Week One: Analysis and Foundation</h2>
            <p>Days 1 to 7: Daily 30 minutes of tactical puzzle solving (10 puzzles), 20 minutes of opening book study, and one 15-minute game with complete post-game analysis.</p>
            <h2>Week Two: Tactics and Middlegame</h2>
            <p>Days 8 to 14: Increase puzzles to 15 per day, study classic games (one game per day), and two practice games with complete analysis.</p>
            <h2>Week Three: Endgame and Time Management</h2>
            <p>Days 15 to 21: Focus on basic endgames (king and pawn, rook and pawn, bishop and pawn), clock practice for time management.</p>
            <h2>Week Four: Consolidation and Evaluation</h2>
            <p>Days 22 to 30: Review weaknesses, play official online games, and get adequate rest before final evaluation. Rating test at the end of the period.</p>
            <p>By following this program and practicing regularly, a 200-point increase in your rating is completely achievable.</p>`
    },
    {
        id:3,title:'Deep Analysis of the 2024 World Championship Final: Lessons for Club Players',
        date:'February 28, 2025',author:'Ali Moradi',authorRole:'World Youth Vice Champion',
        cover:'assets/images/blog3.webp',
        tags:['Analysis','Tournaments','Professional'],
        content:`
            <p>The 2024 World Chess Championship final was one of the most exciting matches of the year. In this article, we examine the decisive moves and lessons club players can learn from them.</p>
            <h2>Opening and Initial Plan</h2>
            <p>Both players started with the Sicilian Defense. The World Champion's choice of the Najdorf Variation showed his high readiness for a complex and tactical game.</p>
            <h2>Critical Moment: Move 24</h2>
            <p>On move 24, an unexpected sacrifice was made by Black that shocked analysts. This risky but calculated move created a significant positional advantage.</p>
            <h2>Key Lessons for Club Players</h2>
            <p>1. Always examine tactical options in every position, even if it seems "quiet."</p>
            <p>2. Don't be afraid of positional sacrifices - sometimes a sacrificed pawn can create long-term positional advantage.</p>
            <p>3. Time management at critical moments is vital - a few extra seconds of thinking can change the outcome of the game.</p>`
    },
    {
        id:4,title:'The Art of Defense: How to Resist Aggressive Players and Win?',
        date:'February 23, 2025',author:'Mina Shayegan',authorRole:'Senior Coach & International Instructor',
        cover:'assets/images/blog4.webp',
        tags:['Defense','Tactics','Counter-attack'],
        content:`
            <p>Defense in chess is an art. Many players fear defensive positions, while proper defense can lead to powerful counter-attacks and victory. In this article, you will learn essential defensive techniques.</p>
            <h2>Principles of Active Defense</h2>
            <p>Active defense means not waiting for your opponent to destroy you. Creating counter-threats, using all defensive resources, and changing the nature of the game from defense to attack.</p>
            <h2>Key Defensive Techniques</h2>
            <p><strong>1. Counter-attack on the opposite wing:</strong> When your opponent attacks your kingside, create a counter-attack on the queenside.</p>
            <p><strong>2. Exchanging attacking pieces:</strong> Trade off your opponent's attacking pieces to reduce pressure.</p>
            <p><strong>3. Blockade:</strong> Use your pieces to block the opponent's penetration paths.</p>
            <p><strong>4. Activating the king in the endgame:</strong> Once entering the endgame, actively bring your king into the game.</p>`
    },
    {
        id:5,title:'Chess Psychology: Stress Management and Increasing Focus in Tournaments',
        date:'February 18, 2025',author:'Shiva Mehrad',authorRole:'Sports Psychologist',
        cover:'assets/images/blog5.jpg',
        tags:['Psychology','Focus','Tournaments'],
        content:`
            <p>Chess is not just an intellectual game, but also a psychological battle. Stress management and maintaining focus during long tournaments can be the difference between winning and losing.</p>
            <h2>Breathing Techniques for Relaxation</h2>
            <p>Deep abdominal breathing (4 seconds inhale, 4 seconds hold, 6 seconds exhale) can lower heart rate and calm the mind. Practice this technique before and during the match.</p>
            <h2>Time and Stress Management</h2>
            <p>Setting specific time plans for each move (e.g., 3 minutes for critical moves, 30 seconds for routine moves) helps reduce Zeitnot-related stress.</p>
            <h2>Positive Visualization</h2>
            <p>Before the match, visualize yourself making precise moves and winning. This mental technique increases your self-confidence.</p>
            <h2>Recovery Between Matches</h2>
            <p>Between tournament games, 15 minutes of gentle walking, adequate water intake, and avoiding excessive analysis of the previous game aid mental recovery.</p>`
    },
    {
        id:6,title:'Proper Nutrition & Targeted Fitness for Professional Chess Players',
        date:'February 12, 2025',author:'GM Kasra',authorRole:'Academy Director & Founder',
        cover:'assets/images/blog6.jpg',
        tags:['Nutrition','Health','Professional'],
        content:`
            <p>Chess is a mental sport, but physical health directly affects mental performance. A professional chess player must value nutrition and physical fitness as much as an Olympic athlete.</p>
            <h2>Pre-Match Nutrition</h2>
            <p>3 hours before the match: Light meal with complex carbohydrates (whole grain bread, brown rice) and lean protein (fish, chicken). Avoid simple sugars that cause sudden energy drops.</p>
            <h2>During-Match Nutrition</h2>
            <p>Your brain consumes up to 2,000 calories during a 4-hour game! Suitable snacks: raw nuts (almonds, walnuts), banana, 70% dark chocolate, and adequate water.</p>
            <h2>Suitable Exercises</h2>
            <p>Swimming, brisk walking, and yoga are the best exercises for chess players. These exercises increase cardiovascular endurance and help maintain focus in long tournaments.</p>
            <h2>Sleep and Recovery</h2>
            <p>8 hours of regular nightly sleep is essential for processing learned information and memory consolidation. Avoid screens at least one hour before bedtime.</p>`
    }
];

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const container = document.getElementById('blogPost');
    const loader = document.getElementById('bpLoader');
    const post = posts.find(p => p.id === id) || posts[0];
    
    setTimeout(() => {
        if(loader) loader.style.display = 'none';
        const el = document.createElement('article');
        el.className = 'bp-post active';
        el.innerHTML = `
            <img src="${post.cover}" alt="${post.title}" class="bp-post__cover" onerror="this.style.background='var(--bg-card);min-height:400px'">
            <div class="bp-post__meta">
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/></svg> ${post.date}</span>
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M20 21v-2a4 4 0 00-8 0v2"/></svg> ${post.author}</span>
            </div>
            <h1 class="bp-post__title">${post.title}</h1>
            <div class="bp-post__author">
                <img src="assets/images/img${post.id}.webp" alt="${post.author}" onerror="this.style.display='none'" style="width:50px;height:50px;border-radius:50%;object-fit:cover;">
                <div><h4>${post.author}</h4><span>${post.authorRole}</span></div>
            </div>
            <div class="bp-post__content">${post.content}</div>
            <div class="bp-post__tags">${post.tags.map(t => `<span>${t}</span>`).join('')}</div>
            <div class="bp-post__share">
                <a href="#" title="Share"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg></a>
                <a href="#" title="Link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/></svg></a>
            </div>
        `;
        container.appendChild(el);
        document.title = `${post.title} | Polaris Academy`;
    }, 600);
});