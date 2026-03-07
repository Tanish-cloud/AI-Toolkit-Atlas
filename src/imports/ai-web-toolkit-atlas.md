Build a premium interactive web application called “AI Web Toolkit Atlas”.

Purpose:
The website showcases a research dataset of 22 AI tools used in modern web development. 
The goal is to present the information in a visually engaging and interactive way rather than a basic spreadsheet.

Tech Stack:
- React (or Next.js)
- Tailwind CSS
- Framer Motion for animations
- Optional: React Flow or D3.js for ecosystem visualization
- Data stored in a local JSON file

Design Style:
- Modern dark theme similar to Linear, Stripe, and Vercel websites
- Glassmorphism cards with soft shadows
- Smooth hover animations and micro-interactions
- Gradient backgrounds with subtle animated elements
- Clean typography hierarchy

Pages and Components:

1. Hero Section
- Title: “AI Web Toolkit Atlas”
- Subtitle: “Explore the AI ecosystem powering premium web development”
- Animated gradient or particle background
- CTA button: “Explore Tools”

2. Category Explorer
Display categories as interactive cards:
- Web Design AI
- Code Generation AI
- Design-to-Code AI
- Assets & Visual AI
- Copy & Content AI
- Documentation AI

Each category card should animate on hover and open a page or modal with tools in that category.

3. Tool Card Grid
Each tool should appear as a card with:
- Tool name
- Category tag
- Short description
- “Superpower”
- “Best For”
- Buttons: Visit Tool / Watch Tutorial

Cards should have hover animations and subtle glow effects.

4. Tool Detail Modal
Clicking a card opens a modal showing:
- Tool Name
- Category
- Superpower
- Limitation
- Best Use Case
- External link to the tool
- Tutorial video link

5. Search and Filter
Add:
- Search bar to find tools
- Category filter buttons

6. Tool Comparison Feature
Allow users to select multiple tools and compare:
- Superpowers
- Limitations
- Best use cases

Display comparison in a clean table layout.

7. AI Ecosystem Visualization
Create an interactive flow diagram showing how tools connect in a development workflow:

Example flow:
Idea → Relume → Framer → v0 → Cursor → Deploy

Use React Flow or D3.js.

8. Data Structure
Store tools in a JSON file with this schema:

{
  name: "",
  category: "",
  superpower: "",
  limitation: "",
  bestFor: "",
  link: "",
  tutorial: ""
}

9. Animations
Use Framer Motion for:
- card hover effects
- modal transitions
- page transitions
- category navigation

10. Responsiveness
The website must work well on:
- desktop
- tablet
- mobile

Layout should shift from grid to stacked cards on small screens.

Goal:
Create a visually impressive developer showcase website that makes exploring AI tools feel like navigating a modern digital ecosystem rather than reading a spreadsheet.