/**
 * 9.5-data.js
 * Data structure for Exercise 9.5
 *
 * Note: String values are formatted with LaTeX syntax.
 */

const exercise95Solutions = {
  title: "9.5: Trigonometric Graphs and Absolute Values",
  subtitle: "Sketching, finding ranges, and solving modulus equations",
  description:
    "Master the techniques for sketching complex trigonometric graphs, applying absolute value transformations, and using graphs to determine the number of roots for equations within specific intervals.",

  sections: [
    {
      sectionNumber: 1,
      instruction:
        "Sketch the graphs of each of the following functions, for 0° < x ≤ 360°, and state the range of each function. Use graphing software to check your graphs.",
      problems: [
        {
          id: "1a",
          question: "f(x) = |\\tan x|",
          steps: [
            "\\text{Graph description: Sketch the standard } y = \\tan x \\text{ graph. Reflect all negative parts (the portion between 90° and 180°, and between 270° and 360°) above the x-axis.}",
            "\\text{The asymptotes remain at } x = 90° \\text{ and } x = 270°. \\text{ The roots remain at } x = 0°, 180°, 360°.",
            "\\text{Range: } f(x) \\ge 0 \\text{ or } [0, \\infty)",
          ],
        },
        {
          id: "1b",
          question: "f(x) = |\\cos 2x|",
          steps: [
            "\\text{Graph description: Sketch the standard } y = \\cos 2x \\text{ graph (period is } 180°\\text{). Reflect all negative parts above the x-axis.}",
            "\\text{Range: } 0 \\le f(x) \\le 1 \\text{ or } [0, 1]",
          ],
        },
        {
          id: "1c",
          question: "f(x) = |3\\sin x|",
          steps: [
            "\\text{Graph description: Sketch } y = 3\\sin x \\text{ (amplitude 3, period 360°). Reflect the negative parts (180° to 360°) above the x-axis.}",
            "\\text{Range: } 0 \\le f(x) \\le 3 \\text{ or } [0, 3]",
          ],
        },
        {
          id: "1d",
          question: "f(x) = \\sin x",
          steps: [
            "\\text{Graph description: Sketch the standard sine wave for one full period.}",
            "\\text{Range: } -1 \\le f(x) \\le 1 \\text{ or } [-1, 1]",
          ],
        },
        {
          id: "1e",
          question: "f(x) = 2\\cos x",
          steps: [
            "\\text{Graph description: Sketch a cosine wave with an amplitude of 2. Maximum is 2, minimum is -2.}",
            "\\text{Range: } -2 \\le f(x) \\le 2 \\text{ or } [-2, 2]",
          ],
        },
        {
          id: "1f",
          question: "f(x) = |2\\sin 2x|",
          steps: [
            "\\text{Graph description: Sketch } y = 2\\sin 2x \\text{ (amplitude 2, period 180°). Reflect all negative parts above the x-axis. This will create 4 'humps' between 0° and 360°.}",
            "\\text{Range: } 0 \\le f(x) \\le 2 \\text{ or } [0, 2]",
          ],
        },
        {
          id: "1g",
          question: "f(x) = |\\sin x - 2|",
          steps: [
            "\\text{Since } -1 \\le \\sin x \\le 1\\text{, then } -3 \\le \\sin x - 2 \\le -1.",
            "\\text{Because the expression inside the absolute value is always negative, } |\\sin x - 2| = 2 - \\sin x.",
            "\\text{Graph description: Shift the standard sine graph down by 2 units, then reflect the entire graph above the x-axis.}",
            "\\text{Range: Minimum occurs when } \\sin x = 1 \\text{ (gives } |1-2|=1\\text{), maximum when } \\sin x = -1 \\text{ (gives } |-1-2|=3\\text{).}",
            "\\text{Range: } 1 \\le f(x) \\le 3 \\text{ or } [1, 3]",
          ],
        },
        {
          id: "1h",
          question: "f(x) = |5\\sin x + 1|",
          steps: [
            "\\text{Consider the graph of } y = 5\\sin x + 1. \\text{ It oscillates between } -4 \\text{ (when } \\sin x = -1\\text{) and } 6 \\text{ (when } \\sin x = 1\\text{).}",
            "\\text{The absolute value reflects the negative portion above the x-axis. The minimum value occurs when } 5\\sin x + 1 = 0 \\implies \\sin x = -0.2. \\text{ At this point, } f(x) = 0.",
            "\\text{Range: } 0 \\le f(x) \\le 6 \\text{ or } [0, 6]",
          ],
        },
        {
          id: "1i",
          question: "f(x) = |4\\cos x - 3|",
          steps: [
            "\\text{Consider the graph of } y = 4\\cos x - 3. \\text{ It oscillates between } -7 \\text{ (when } \\cos x = -1\\text{) and } 1 \\text{ (when } \\cos x = 1\\text{).}",
            "\\text{The absolute value reflects the negative portion above the x-axis. The minimum value occurs when } 4\\cos x - 3 = 0 \\implies \\cos x = 0.75. \\text{ At this point, } f(x) = 0.",
            "\\text{Range: } 0 \\le f(x) \\le 7 \\text{ or } [0, 7]",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction:
        "2a. Sketch the graph of y = 2 sin x - 1 for 0° ≤ x ≤ 180°. b. Sketch the graph of y = |2 sin x - 1| for 0° ≤ x ≤ 180°. c. Write down the number of solutions of the equation |2 sin x - 1| = 0.5 for 0° ≤ x ≤ 180°.",
      problems: [
        {
          id: "2a",
          question:
            "\\text{Sketch } y = 2\\sin x - 1 \\text{ for } 0° \\le x \\le 180°",
          steps: [
            "\\text{Key points: At } x=0, y = -1. \\text{ At } x=90°, y = 2(1)-1 = 1. \\text{ At } x=180°, y = -1.",
            "\\text{The graph is a single sine wave 'hump' shifted down by 1 unit.}",
          ],
        },
        {
          id: "2b",
          question:
            "\\text{Sketch } y = |2\\sin x - 1| \\text{ for } 0° \\le x \\le 180°",
          steps: [
            "\\text{Take the graph from 2a and reflect the portion where } y < 0 \\text{ (the parts near } 0° \\text{ and } 180°\\text{) above the x-axis.}",
            "\\text{The roots of this new graph are where } 2\\sin x - 1 = 0 \\implies \\sin x = 0.5 \\implies x = 30°, 150°.",
          ],
        },
        {
          id: "2c",
          question:
            "\\text{Number of solutions of } |2\\sin x - 1| = 0.5 \\text{ for } 0° \\le x \\le 180°",
          steps: [
            "\\text{Algebraic method: } 2\\sin x - 1 = 0.5 \\implies 2\\sin x = 1.5 \\implies \\sin x = 0.75. \\text{ This gives 2 solutions (one in Q1, one in Q2).}",
            "\\text{Or } 2\\sin x - 1 = -0.5 \\implies 2\\sin x = 0.5 \\implies \\sin x = 0.25. \\text{ This gives 2 more solutions.}",
            "\\text{Graphical method: Draw the horizontal line } y = 0.5 \\text{ on the graph from 2b. It intersects the 'W' shape exactly 4 times.}",
            "\\text{Number of solutions: } 4",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction:
        "3a. Sketch the graph of y = 2 + 5 cos x for 0° ≤ x ≤ 180°. b. Sketch the graph of y = |2 + 5 cos x| for 0° ≤ x ≤ 180°. c. Write down the number of solutions of the equation |2 + 5 cos x| = 1 for 0° ≤ x ≤ 180°.",
      problems: [
        {
          id: "3a",
          question:
            "\\text{Sketch } y = 2 + 5\\cos x \\text{ for } 0° \\le x \\le 180°",
          steps: [
            "\\text{Key points: At } x=0, y = 2+5 = 7. \\text{ At } x=90°, y = 2+0 = 2. \\text{ At } x=180°, y = 2-5 = -3.",
            "\\text{The graph is a curve starting at (0,7), passing through (90°, 2), and ending at (180°, -3).}",
          ],
        },
        {
          id: "3b",
          question:
            "\\text{Sketch } y = |2 + 5\\cos x| \\text{ for } 0° \\le x \\le 180°",
          steps: [
            "\\text{Reflect the part of the graph from 3a that is below the x-axis above it. The x-intercept is where } 2+5\\cos x = 0 \\implies \\cos x = -0.4.",
          ],
        },
        {
          id: "3c",
          question:
            "\\text{Number of solutions of } |2 + 5\\cos x| = 1 \\text{ for } 0° \\le x \\le 180°",
          steps: [
            "\\text{Set } 2+5\\cos x = 1 \\implies 5\\cos x = -1 \\implies \\cos x = -0.2. \\text{ Since } \\cos x \\text{ is negative, this gives 1 solution in the interval (Q2).}",
            "\\text{Set } 2+5\\cos x = -1 \\implies 5\\cos x = -3 \\implies \\cos x = -0.6. \\text{ This gives 1 solution in the interval (Q2).}",
            "\\text{Number of solutions: } 2",
          ],
        },
      ],
    },
    {
      sectionNumber: 4,
      instruction:
        "4a. Sketch the graph of y = 2 + 3 cos x for 0° ≤ x ≤ 180°. b. Sketch the graph of y = |2 + 3 cos x| for 0° ≤ x ≤ 180°. c. Write down the number of solutions of the equation |2 + 3 sin 2x| = 1 for 0° ≤ x ≤ 180°. *(Note: Assuming the equation follows the previous parts using cos x, though text says sin 2x)*",
      problems: [
        {
          id: "4a",
          question:
            "\\text{Sketch } y = 2 + 3\\cos x \\text{ for } 0° \\le x \\le 180°",
          steps: [
            "\\text{Key points: At } x=0, y = 5. \\text{ At } x=90°, y = 2. \\text{ At } x=180°, y = -1.",
            "\\text{The graph is a smooth curve connecting these points.}",
          ],
        },
        {
          id: "4b",
          question:
            "\\text{Sketch } y = |2 + 3\\cos x| \\text{ for } 0° \\le x \\le 180°",
          steps: [
            "\\text{Reflect the small portion below the x-axis (near 180°) above the x-axis. The x-intercept is where } 2+3\\cos x = 0 \\implies \\cos x = -2/3.",
          ],
        },
        {
          id: "4c",
          question:
            "\\text{Number of solutions of } |2 + 3\\sin 2x| = 1 \\text{ for } 0° \\le x \\le 180°",
          steps: [
            "\\text{Solve } 2+3\\sin 2x = 1 \\implies \\sin 2x = -1/3. \\text{ For } 0° \\le 2x \\le 360°\\text{, this yields 2 solutions.}",
            "\\text{Solve } 2+3\\sin 2x = -1 \\implies \\sin 2x = -1. \\text{ This yields 1 solution (} 2x=270° \\implies x=135°\\text{).}",
            "\\text{Total number of solutions: } 3",
          ],
        },
      ],
    },
    {
      sectionNumber: 5,
      instruction:
        "5a. On the same grid, sketch the graphs of y = |tan x| and y = cos x for 0° ≤ x ≤ 360°. b. State the number of roots of the equation |tan x| = cos x for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "5",
          question: "|\\tan x| = \\cos x",
          steps: [
            "\\text{Graph description: } y = |\\tan x| \\text{ is a 'U' shaped curve in each quadrant starting at 0 and going to infinity. } y = \\cos x \\text{ is the standard cosine wave.}",
            "\\text{Since } \\cos x \\ge 0 \\text{ in Q1 and Q4, we only look for intersections there.}",
            "\\text{In Q1, } \\tan x = \\cos x \\implies \\sin x = \\cos^2 x = 1 - \\sin^2 x \\implies \\sin^2 x + \\sin x - 1 = 0 \\implies \\sin x = \\frac{\\sqrt{5}-1}{2} \\approx 0.618. \\text{ (1 root)}",
            "\\text{In Q4, } -\\tan x = \\cos x \\implies -\\sin x = \\cos^2 x. \\text{ Let } u = \\sin x \\text{ (u < 0), } -u = 1 - u^2 \\implies u^2 - u - 1 = 0 \\implies u = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618. \\text{ (1 root)}",
            "\\text{Number of roots: } 2",
          ],
        },
      ],
    },
    {
      sectionNumber: 6,
      instruction:
        "6a. On the same grid, sketch the graphs of y = |sin 2x| and y = tan x for 0 ≤ x ≤ 2π. b. State the number of roots of the equation |sin 2x| = tan x for 0 ≤ x ≤ 2π.",
      problems: [
        {
          id: "6",
          question: "|\\sin 2x| = \\tan x",
          steps: [
            "\\text{Graph description: } y = |\\sin 2x| \\text{ has 4 humps between 0 and } 2\\pi. \\ y = \\tan x \\text{ has asymptotes at } \\pi/2 \\text{ and } 3\\pi/2.",
            "\\text{Equation: } |\\sin 2x| = \\tan x. \\text{ Since LHS } \\ge 0, \\text{ we need } \\tan x \\ge 0 \\text{ (Q1, Q3).}",
            "\\text{In Q1, } \\sin 2x = \\tan x \\implies 2\\sin x \\cos x = \\frac{\\sin x}{\\cos x} \\implies 2\\cos^2 x = 1 \\implies \\cos x = \\frac{1}{\\sqrt{2}} \\implies x = \\frac{\\pi}{4}. \\text{ Also } x=0 \\text{ is a root.}",
            "\\text{In Q3, } -\\sin 2x = \\tan x \\implies -2\\sin x \\cos x = \\frac{\\sin x}{\\cos x}. \\text{ Since } \\sin x < 0, \\text{ divide by } \\sin x: -2\\cos^2 x = 1 \\implies \\cos^2 x = -1/2 \\text{ (no solution).}",
            "\\text{Checking } \\sin x = 0: x = 0, \\pi, 2\\pi \\text{ are roots since } \\tan x = 0 \\text{ and } |\\sin 2x| = 0.",
            "\\text{Checking the negative hump of } |\\sin 2x| \\text{ in Q2: } \\tan x \\text{ is negative, so no intersection.}",
            "\\text{Number of roots: } x = 0, \\frac{\\pi}{4}, \\pi, 2\\pi \\implies 4 \\text{ roots}.",
          ],
        },
      ],
    },
    {
      sectionNumber: 7,
      instruction:
        "7a. On the same grid, sketch the graphs of y = |0.5 + sin x| and y = cos x for 0° ≤ x ≤ 360°. b. State the number of roots of the equation |0.5 + sin x| = cos x for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "7",
          question: "|0.5 + \\sin x| = \\cos x",
          steps: [
            "\\text{Graph description: } y = |0.5 + \\sin x| \\text{ is a sine wave shifted up by 0.5 (so its minimum is -0.5), with the negative part reflected.}",
            "\\text{For intersections, } \\cos x \\ge 0 \\text{ (Q1, Q4).}",
            "\\text{In Q1 and Q4, } 0.5 + \\sin x \\ge 0 \\text{ is mostly true except for a small part in Q4.}",
            "\\text{Case 1: } 0.5 + \\sin x = \\cos x \\implies \\cos x - \\sin x = 0.5 \\implies \\sqrt{2}\\cos(x+45°) = 0.5. \\text{ This yields 1 valid solution in Q1.}",
            "\\text{Case 2: } -0.5 - \\sin x = \\cos x \\implies \\cos x + \\sin x = -0.5 \\implies \\sqrt{2}\\cos(x-45°) = -0.5. \\text{ This yields 1 valid solution in Q4.}",
            "\\text{Number of roots: } 2",
          ],
        },
      ],
    },
    {
      sectionNumber: 8,
      instruction:
        "8a. On the same grid, sketch the graphs of y = |1 + 4 cos x| and y = 2 + cos x for 0° ≤ x ≤ 360°. b. State the number of roots of the equation |1 + 4 cos x| = 2 + cos x for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "8",
          question: "|1 + 4\\cos x| = 2 + \\cos x",
          steps: [
            "\\text{Solve algebraically: } 1 + 4\\cos x = 2 + \\cos x \\text{ or } 1 + 4\\cos x = -(2 + \\cos x).",
            "\\text{Case 1: } 3\\cos x = 1 \\implies \\cos x = 1/3. \\text{ In } [0°, 360°]\\text{, this has 2 solutions.}",
            "\\text{Case 2: } 5\\cos x = -3 \\implies \\cos x = -0.6. \\text{ In } [0°, 360°]\\text{, this has 2 solutions.}",
            "\\text{Number of roots: } 4",
          ],
        },
      ],
    },
    {
      sectionNumber: 9,
      instruction:
        "The equation |3 cos x - 2| = k, has 2 roots for the interval 0 ≤ x ≤ 2π. Find the possible values of k.",
      problems: [
        {
          id: "9",
          question: "|3\\cos x - 2| = k",
          steps: [
            "\\text{Consider the graph of } y = |3\\cos x - 2|. \\text{ The range of } \\cos x \\text{ is } [-1, 1].",
            "\\text{The expression } 3\\cos x - 2 \\text{ ranges from } -5 \\text{ to } 1.",
            "\\text{The absolute value graph has a minimum of 0 when } \\cos x = 2/3 \\text{ (gives 2 roots in } [0, 2\\pi]\\text{).}",
            "\\text{The graph reaches a maximum of 5 at } x = \\pi \\text{ (1 root).}",
            "\\text{At } x=0 \\text{ and } x=2\\pi, y = |3(1)-2| = 1.",
            "\\text{For the horizontal line } y=k \\text{ to intersect the graph exactly twice:}",
            "\\text{1. } k = 0 \\text{ (intersects at the minimum).}",
            "\\text{2. } 1 < k < 5 \\text{ (intersects the two steep sides of the central peak).}",
            "\\text{Possible values for } k: \\quad k = 0 \\quad \\text{or} \\quad 1 < k < 5",
          ],
        },
      ],
    },
  ],
};

export default exercise95Solutions;
