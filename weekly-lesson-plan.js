/**
 * LESSON PLANS
 * Goal: Build strong junior-dev fundamentals through structured daily practice
 * Usage: Open in VS Code, follow one day at a time, update README prompts daily
 */

const lessonPlans = {
  week1: {
    name: "Foundations Week",
    days: [
      {
        day: "Monday",
        focus: "Vanilla JavaScript & DOM Manipulation",
        exercises: [
          "Select DOM elements using getElementById, querySelector, querySelectorAll",
          "Add event listeners to buttons and forms",
          "Update DOM content dynamically based on state",
          "Practice loops, arrays, and objects in context of the DOM"
        ],
        readmePrompt: `# Monday
- What I built today:
- Key JS concepts practiced:
- Challenges and solutions:
- Confidence level (1-10):`
      },
      {
        day: "Tuesday",
        focus: "Functions, ES6+, & JavaScript fundamentals",
        exercises: [
          "Write arrow functions, regular functions, and callbacks",
          "Practice array methods: map, filter, reduce",
          "Use template literals and object destructuring",
          "Write small utility functions for real-world tasks"
        ],
        readmePrompt: `# Tuesday
- Functions I wrote:
- JS features reinforced:
- Key takeaways:
- Confidence level (1-10):`
      },
      {
        day: "Wednesday",
        focus: "React Basics & Component Architecture",
        exercises: [
          "Create functional components",
          "Pass props between components",
          "Manage simple state with useState",
          "Render lists dynamically and use keys correctly"
        ],
        readmePrompt: `# Wednesday
- Components created:
- State and props practiced:
- What was tricky:
- Confidence level (1-10):`
      },
      {
        day: "Thursday",
        focus: "Advanced React & Event Handling",
        exercises: [
          "Handle forms and form submission in React",
          "Lift state between components",
          "Conditional rendering",
          "Debug React errors using console and DevTools"
        ],
        readmePrompt: `# Thursday
- Forms and events implemented:
- State management insights:
- Challenges faced:
- Confidence level (1-10):`
      },
      {
        day: "Friday",
        focus: "Portfolio / Project Enhancement + Interview Prep",
        exercises: [
          "Add one feature or improvement to your project",
          "Refactor a component for clarity",
          "Write or refine README for your app",
          "Practice explaining your app out loud for interviews"
        ],
        readmePrompt: `# Friday
- Project updates made:
- New skills practiced:
- App explanation draft:
- Confidence level (1-10):`
      }
    ]
  },

  week2: {
    name: "State & UI Logic Mastery",
    days: [
      {
        day: "Day 1",
        focus: "State Patterns & Active UI Control",
        exercises: [
          "Implement activeButtonId state in App.jsx",
          "Pass isActive prop to Button",
          "Apply conditional styling based on state",
          "Refactor inline logic into named handlers"
        ],
        readmePrompt: `# Day 1
- State pattern used:
- How parent controls children:
- What clicked for me today:
- Confidence (1-10):`
      },
      {
        day: "Day 2",
        focus: "Tabs Using the Same State Pattern",
        exercises: [
          "Create tab navigation using activeId state",
          "Conditionally render content per tab",
          "Reuse button logic without new state concepts"
        ],
        readmePrompt: `# Day 2
- How tabs reused button logic:
- What stayed the same:
- What changed:
- Confidence (1-10):`
      },
      {
        day: "Day 3",
        focus: "Filters & Derived Data",
        exercises: [
          "Use buttons as filters for logs",
          "Apply filter() based on active state",
          "Differentiate state vs derived data"
        ],
        readmePrompt: `# Day 3
- Filter logic explanation:
- Difference between state and derived data:
- What finally made sense:
- Confidence (1-10):`
      },
      {
        day: "Day 4",
        focus: "Reusable Components & Props Discipline",
        exercises: [
          "Refactor Button to support variants",
          "Ensure Button has no internal state",
          "Use props strictly for configuration"
        ],
        readmePrompt: `# Day 4
- What makes a component reusable:
- Props vs state clarity:
- Refactors made:
- Confidence (1-10):`
      },
      {
        day: "Day 5",
        focus: "Explanation, Mental Models & Interview Readiness",
        exercises: [
          "Explain state flow out loud",
          "Write a short app explanation",
          "Identify reusable patterns learned this week"
        ],
        readmePrompt: `# Day 5
- How I explain state now:
- Patterns I feel confident with:
- What I still need to reinforce:
- Confidence (1-10):`
      }
    ]
  },

  week3: {
    name: "Application Patterns & Real-World UI",
    days: [
      {
        day: "Day 1",
        focus: "State Composition & Multiple UI Concerns",
        exercises: [
          "Manage more than one piece of state in App",
          "Combine active selection with filters",
          "Reason about which component owns which state"
        ],
        readmePrompt: `# Day 1
- What state exists and why:
- How multiple states interact:
- What felt harder than Week 2:
- Confidence (1-10):`
      },
      {
        day: "Day 2",
        focus: "UI Edge Cases & Defensive Rendering",
        exercises: [
          "Handle empty states gracefully",
          "Prevent undefined or null rendering bugs",
          "Use conditional rendering intentionally"
        ],
        readmePrompt: `# Day 2
- Edge cases handled:
- What broke before fixing:
- How I reasoned through it:
- Confidence (1-10):`
      },
      {
        day: "Day 3",
        focus: "Component Responsibility & Refactoring",
        exercises: [
          "Refactor logic into clearer components",
          "Rename props and handlers for clarity",
          "Reduce unnecessary props"
        ],
        readmePrompt: `# Day 3
- Before vs after structure:
- What responsibilities moved:
- What became clearer:
- Confidence (1-10):`
      },
      {
        day: "Day 4",
        focus: "Explaining Code Like a Developer",
        exercises: [
          "Explain state flow without code",
          "Explain one component’s responsibility",
          "Practice answering 'why did you do it this way?'"
        ],
        readmePrompt: `# Day 4
- My explanation in plain English:
- What I struggled to explain:
- What I want to improve:
- Confidence (1-10):`
      },
      {
        day: "Day 5",
        focus: "Mini Project Integration & Review",
        exercises: [
          "Build a small feature from scratch",
          "Reuse Button, filters, and derived data",
          "Review patterns learned across all weeks"
        ],
        readmePrompt: `# Day 5
- Feature I built:
- Patterns reused:
- What now feels automatic:
- Confidence (1-10):`
      }
    ]
  }
};

/**
 * Utility: Print a specific day from a specific week
 * Example:
 * printDayPlan("week3", "Day 1")
 */
function printDayPlan(weekKey, dayName) {
  const week = lessonPlans[weekKey];
  if (!week) return console.log("Week not found!");

  const day = week.days.find(d =>
    d.day.toLowerCase() === dayName.toLowerCase()
  );

  if (!day) return console.log("Day not found!");

  console.log(`\n=== ${week.name.toUpperCase()} ===`);
  console.log(`Day: ${day.day}`);
  console.log(`Focus: ${day.focus}`);
  console.log("Exercises:");
  day.exercises.forEach((ex, idx) =>
    console.log(`${idx + 1}. ${ex}`)
  );
  console.log("\nREADME Prompt:\n", day.readmePrompt);
}

// Example usage:
printDayPlan("week3", "Day 2");
