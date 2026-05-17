@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --hunter-green:  #3E5F44;
  --sand-dune:     #DDD6B9;
  --sandy-clay:    #D4AA7D;
  --shadow-grey:   #272727;
  --surface:       #F5F2EA;
  --teal:          #5C7A72;
  --teal-border:   rgba(92,122,114,0.35);

  --color-bg:          var(--sand-dune);
  --color-surface:     var(--surface);
  --color-primary:     var(--hunter-green);
  --color-accent:      var(--sandy-clay);
  --color-text:        var(--shadow-grey);
  --color-text-muted:  rgba(39,39,39,0.6);

  --font-display: 'Lora', Georgia, serif;
  --font-body:    'DM Sans', sans-serif;
  --section-px:   2.25rem;
  --section-py:   1.75rem;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

h1,h2,h3,h4 {
  font-family: var(--font-display);
  font-weight: 500;
  color: var(--color-primary);
  line-height: 1.2;
}

a { color: inherit; text-decoration: none; }
button { cursor: pointer; font-family: var(--font-body); }
img { display: block; max-width: 100%; }

.btn-cta {
  display: inline-block;
  background: var(--color-primary);
  color: var(--sand-dune);
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}
.btn-cta:hover { background: var(--sandy-clay); color: var(--hunter-green); }

.text-muted {
  color: var(--color-text-muted);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
