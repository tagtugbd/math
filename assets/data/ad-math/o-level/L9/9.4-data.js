/**
 * 9.4-data.js
 * Data structure for Exercise 9.4 (Properties of Trigonometric Graphs)
 *
 * Note: String values are formatted with LaTeX syntax.
 */

const exercise94Solutions = {
  title: "9.4: Trigonometric Graphs",
  subtitle: "Amplitude, period, asymptotes, and graphical solutions",
  description:
    "Analyze the key features of trigonometric graphs, including amplitude, period, translations, and asymptotes. Learn to deduce the equation of a function from its graph and use intersections to determine the number of solutions to trigonometric equations.",

  sections: [
    {
      sectionNumber: 1,
      instruction:
        "The following functions are defined for 0° ≤ x ≤ 360°. For each function, write down the amplitude, the period and the coordinates of the maximum and minimum points.",
      problems: [
        {
          id: "1-i",
          question: "f(x) = 7\\cos x",
          steps: [
            "\\text{Amplitude} = 7",
            "\\text{Period} = 360^\\circ",
            "\\text{Maximum points: } (0^\\circ, 7) \\text{ and } (360^\\circ, 7)",
            "\\text{Minimum point: } (180^\\circ, -7)",
          ],
        },
        {
          id: "1-ii",
          question: "f(x) = 2\\sin 2x",
          steps: [
            "\\text{Amplitude} = 2",
            "\\text{Period} = \\frac{360^\\circ}{2} = 180^\\circ",
            "\\text{Maximum points: } (45^\\circ, 2) \\text{ and } (225^\\circ, 2)",
            "\\text{Minimum points: } (135^\\circ, -2) \\text{ and } (315^\\circ, -2)",
          ],
        },
        {
          id: "1-iii",
          question: "f(x) = 2\\cos 3x",
          steps: [
            "\\text{Amplitude} = 2",
            "\\text{Period} = \\frac{360^\\circ}{3} = 120^\\circ",
            "\\text{Maximum points: } (0^\\circ, 2), (120^\\circ, 2), (240^\\circ, 2), (360^\\circ, 2)",
            "\\text{Minimum points: } (60^\\circ, -2), (180^\\circ, -2), (300^\\circ, -2)",
          ],
        },
        {
          id: "1-iv",
          question: "f(x) = 3\\sin \\frac{1}{2}x",
          steps: [
            "\\text{Amplitude} = 3",
            "\\text{Period} = \\frac{360^\\circ}{1/2} = 720^\\circ",
            "\\text{Maximum point in domain: } (180^\\circ, 3)",
            "\\text{Minimum point in domain: None (graph starts at 0 and goes up to 3)}",
          ],
        },
        {
          id: "1-v",
          question: "f(x) = 4\\cos x + 1",
          steps: [
            "\\text{Amplitude} = 4",
            "\\text{Period} = 360^\\circ",
            "\\text{Maximum points: } (0^\\circ, 5) \\text{ and } (360^\\circ, 5) \\quad (\\text{since } 4+1=5)",
            "\\text{Minimum point: } (180^\\circ, -3) \\quad (\\text{since } -4+1=-3)",
          ],
        },
        {
          id: "1-vi",
          question: "f(x) = 5\\sin 2x - 2",
          steps: [
            "\\text{Amplitude} = 5",
            "\\text{Period} = \\frac{360^\\circ}{2} = 180^\\circ",
            "\\text{Maximum points: } (45^\\circ, 3) \\text{ and } (225^\\circ, 3) \\quad (\\text{since } 5-2=3)",
            "\\text{Minimum points: } (135^\\circ, -7) \\text{ and } (315^\\circ, -7) \\quad (\\text{since } -5-2=-7)",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction:
        "The following functions are defined for 0 ≤ x ≤ 2π. For each function, write down the amplitude, the period and the coordinates of the maximum and minimum points.",
      problems: [
        {
          id: "2-i",
          question: "f(x) = 4\\sin x",
          steps: [
            "\\text{Amplitude} = 4",
            "\\text{Period} = 2\\pi",
            "\\text{Maximum point: } \\left(\\frac{\\pi}{2}, 4\\right)",
            "\\text{Minimum point: } \\left(\\frac{3\\pi}{2}, -4\\right)",
          ],
        },
        {
          id: "2-ii",
          question: "f(x) = \\cos 3x",
          steps: [
            "\\text{Amplitude} = 1",
            "\\text{Period} = \\frac{2\\pi}{3}",
            "\\text{Maximum points: } (0, 1), \\left(\\frac{2\\pi}{3}, 1\\right), \\left(\\frac{4\\pi}{3}, 1\\right), (2\\pi, 1)",
            "\\text{Minimum points: } \\left(\\frac{\\pi}{3}, -1\\right), (\\pi, -1), \\left(\\frac{5\\pi}{3}, -1\\right)",
          ],
        },
        {
          id: "2-iii",
          question: "f(x) = 2\\sin 3x",
          steps: [
            "\\text{Amplitude} = 2",
            "\\text{Period} = \\frac{2\\pi}{3}",
            "\\text{Maximum points: } \\left(\\frac{\\pi}{6}, 2\\right), \\left(\\frac{5\\pi}{6}, 2\\right), \\left(\\frac{3\\pi}{2}, 2\\right)",
            "\\text{Minimum points: } \\left(\\frac{\\pi}{2}, -2\\right), \\left(\\frac{7\\pi}{6}, -2\\right), \\left(\\frac{11\\pi}{6}, -2\\right)",
          ],
        },
        {
          id: "2-iv",
          question: "f(x) = 3\\cos \\frac{1}{2}x",
          steps: [
            "\\text{Amplitude} = 3",
            "\\text{Period} = \\frac{2\\pi}{1/2} = 4\\pi",
            "\\text{Maximum point: } (0, 3)",
            "\\text{Minimum point in domain: } (2\\pi, -3)",
          ],
        },
        {
          id: "2-v",
          question: "f(x) = \\sin 2x + 3",
          steps: [
            "\\text{Amplitude} = 1",
            "\\text{Period} = \\frac{2\\pi}{2} = \\pi",
            "\\text{Maximum points: } \\left(\\frac{\\pi}{4}, 4\\right), \\left(\\frac{5\\pi}{4}, 4\\right) \\quad (\\text{since } 1+3=4)",
            "\\text{Minimum points: } \\left(\\frac{3\\pi}{4}, 2\\right), \\left(\\frac{7\\pi}{4}, 2\\right) \\quad (\\text{since } -1+3=2)",
          ],
        },
        {
          id: "2-vi",
          question: "f(x) = 4\\cos 2x - 1",
          steps: [
            "\\text{Amplitude} = 4",
            "\\text{Period} = \\frac{2\\pi}{2} = \\pi",
            "\\text{Maximum points: } (0, 3), (\\pi, 3), (2\\pi, 3) \\quad (\\text{since } 4-1=3)",
            "\\text{Minimum points: } \\left(\\frac{\\pi}{2}, -5\\right), \\left(\\frac{3\\pi}{2}, -5\\right) \\quad (\\text{since } -4-1=-5)",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction:
        "This is the graph of y = a + b sin cx, for 0 ≤ x ≤ π. Write down the value of a, the value of b and the value of c.",
      problems: [
        {
          id: "3",
          question: "y = a + b\\sin cx",
          steps: [
            "\\text{From the graph, the maximum value is 6 and the minimum value is 2.}",
            "\\text{Midline } a = \\frac{\\text{Max} + \\text{Min}}{2} = \\frac{6 + 2}{2} = 4",
            "\\text{Amplitude } b = \\frac{\\text{Max} - \\text{Min}}{2} = \\frac{6 - 2}{2} = 2",
            "\\text{The graph completes one full wave between } 0 \\text{ and } \\pi, \\text{ so the period is } \\pi.",
            "\\text{Period } = \\frac{2\\pi}{c} = \\pi \\implies c = 2",
            "\\text{Values: } a = 4, \\; b = 2, \\; c = 2",
          ],
        },
      ],
    },
    {
      sectionNumber: 4,
      instruction:
        "Here is part of the graph of y = a sin bx + c. Write down the value of a, the value of b and the value of c.",
      problems: [
        {
          id: "4",
          question: "y = a\\sin bx + c",
          steps: [
            "\\text{From the graph, the maximum is 7 (at } x=45^\\circ \\text{) and the minimum is 1 (at } x=135^\\circ \\text{).}",
            "\\text{Midline } c = \\frac{7 + 1}{2} = 4",
            "\\text{Amplitude } a = \\frac{7 - 1}{2} = 3",
            "\\text{The distance from max to min is half a period: } 135^\\circ - 45^\\circ = 90^\\circ.",
            "\\text{Full period} = 2 \\times 90^\\circ = 180^\\circ.",
            "\\text{Period } = \\frac{360^\\circ}{b} = 180^\\circ \\implies b = 2",
            "\\text{Values: } a = 3, \\; b = 2, \\; c = 4",
          ],
        },
      ],
    },
    {
      sectionNumber: 5,
      instruction:
        "This is the graph of y = a + b cos cx, for 0° ≤ x ≤ 360°. Write down the value of a, the value of b and the value of c.",
      problems: [
        {
          id: "5",
          question: "y = a + b\\cos cx",
          steps: [
            "\\text{From the graph, the maximum is 5 and the minimum is 1.}",
            "\\text{Midline } a = \\frac{5 + 1}{2} = 3",
            "\\text{Amplitude } b = \\frac{5 - 1}{2} = 2",
            "\\text{The graph has peaks at } 0^\\circ, 120^\\circ, 240^\\circ, 360^\\circ. \\text{ One full wave takes } 120^\\circ.",
            "\\text{Period } = \\frac{360^\\circ}{c} = 120^\\circ \\implies c = 3",
            "\\text{Values: } a = 3, \\; b = 2, \\; c = 3",
          ],
        },
      ],
    },
    {
      sectionNumber: 6,
      instruction:
        "The following functions are defined for 0° ≤ x ≤ 360°. For each function, write down the period and the equations of the asymptotes.",
      problems: [
        {
          id: "6-i",
          question: "f(x) = \\tan 2x",
          steps: [
            "\\text{Period} = \\frac{180^\\circ}{2} = 90^\\circ",
            "\\text{Asymptotes occur when } 2x = 90^\\circ + 180^\\circ n",
            "x = 45^\\circ + 90^\\circ n",
            "\\text{Equations in domain: } x = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ",
          ],
        },
        {
          id: "6-ii",
          question: "f(x) = 3\\tan \\frac{1}{2}x",
          steps: [
            "\\text{Period} = \\frac{180^\\circ}{1/2} = 360^\\circ",
            "\\text{Asymptotes occur when } \\frac{1}{2}x = 90^\\circ + 180^\\circ n \\implies x = 180^\\circ + 360^\\circ n",
            "\\text{Equations in domain: } x = 180^\\circ",
          ],
        },
        {
          id: "6-iii",
          question: "f(x) = 2\\tan 3x + 1",
          steps: [
            "\\text{Period} = \\frac{180^\\circ}{3} = 60^\\circ",
            "\\text{Asymptotes occur when } 3x = 90^\\circ + 180^\\circ n \\implies x = 30^\\circ + 60^\\circ n",
            "\\text{Equations in domain: } x = 30^\\circ, 90^\\circ, 150^\\circ, 210^\\circ, 270^\\circ, 330^\\circ",
          ],
        },
      ],
    },
    {
      sectionNumber: 7,
      instruction:
        "The following functions are defined for 0 ≤ x ≤ 2π. For each function, write down the period and the equations of the asymptotes.",
      problems: [
        {
          id: "7-i",
          question: "f(x) = \\tan 4x",
          steps: [
            "\\text{Period} = \\frac{\\pi}{4}",
            "\\text{Asymptotes occur when } 4x = \\frac{\\pi}{2} + \\pi n \\implies x = \\frac{\\pi}{8} + \\frac{\\pi}{4} n",
            "\\text{Equations in domain: } x = \\frac{\\pi}{8}, \\frac{3\\pi}{8}, \\frac{5\\pi}{8}, \\frac{7\\pi}{8}, \\frac{9\\pi}{8}, \\frac{11\\pi}{8}, \\frac{13\\pi}{8}, \\frac{15\\pi}{8}",
          ],
        },
        {
          id: "7-ii",
          question: "f(x) = 2\\tan 3x",
          steps: [
            "\\text{Period} = \\frac{\\pi}{3}",
            "\\text{Asymptotes occur when } 3x = \\frac{\\pi}{2} + \\pi n \\implies x = \\frac{\\pi}{6} + \\frac{\\pi}{3} n",
            "\\text{Equations in domain: } x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}",
          ],
        },
        {
          id: "7-iii",
          question: "f(x) = 5\\tan 2x - 3",
          steps: [
            "\\text{Period} = \\frac{\\pi}{2}",
            "\\text{Asymptotes occur when } 2x = \\frac{\\pi}{2} + \\pi n \\implies x = \\frac{\\pi}{4} + \\frac{\\pi}{2} n",
            "\\text{Equations in domain: } x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}",
          ],
        },
      ],
    },
    {
      sectionNumber: 8,
      instruction:
        "Here is part of the graph of y = A tan Bx + C. The graph passes through the point P(π/4, 4). Find the value of A, the value of B and the value of C.",
      problems: [
        {
          id: "8",
          question: "y = A\\tan Bx + C",
          steps: [
            "\\text{The midline of the graph is the horizontal dashed line, which is at } y = 3. \\text{ Therefore, } C = 3.",
            "\\text{The asymptotes are at } x = \\frac{\\pi}{2} \\text{ and } x = \\frac{3\\pi}{2}.",
            "\\text{The distance between consecutive asymptotes is } \\frac{3\\pi}{2} - \\frac{\\pi}{2} = \\pi.",
            "\\text{The period is } \\frac{\\pi}{B} = \\pi \\implies B = 1.",
            "\\text{Substitute the point } P(\\frac{\\pi}{4}, 4) \\text{ into } y = A\\tan(x) + 3:",
            "4 = A\\tan\\left(\\frac{\\pi}{4}\\right) + 3",
            "4 = A(1) + 3 \\implies A = 1",
            "\\text{Values: } A = 1, \\; B = 1, \\; C = 3",
          ],
        },
      ],
    },
    {
      sectionNumber: 9,
      instruction:
        "f(x) = a + b sin cx. The maximum value of f is 13, the minimum value of f is 5 and the period is 60°. Find the value of a, the value of b and the value of c.",
      problems: [
        {
          id: "9",
          question:
            "\\text{Properties: Max}=13, \\text{Min}=5, \\text{Period}=60^\\circ",
          steps: [
            "a = \\text{midline} = \\frac{13 + 5}{2} = 9",
            "b = \\text{amplitude} = \\frac{13 - 5}{2} = 4",
            "\\text{Period} = \\frac{360^\\circ}{c} = 60^\\circ \\implies c = 6",
            "\\text{Values: } a = 9, \\; b = 4, \\; c = 6",
          ],
        },
      ],
    },
    {
      sectionNumber: 10,
      instruction:
        "f(x) = A + 3 cos Bx for 0° ≤ x ≤ 360°. The maximum value of f is 5 and the period is 72°. a) Write down the value of A and the value of B. b) Write down the amplitude of f.",
      problems: [
        {
          id: "10a",
          question: "\\text{Find } A \\text{ and } B",
          steps: [
            "\\text{The amplitude is 3 (from the coefficient of cosine).}",
            "\\text{Max value} = A + 3 = 5 \\implies A = 2",
            "\\text{Period} = \\frac{360^\\circ}{B} = 72^\\circ \\implies B = 5",
            "A = 2, \\; B = 5",
          ],
        },
        {
          id: "10b",
          question: "\\text{Amplitude of } f",
          steps: [
            "\\text{The amplitude is the coefficient of the cosine function.}",
            "\\text{Amplitude} = 3",
          ],
        },
      ],
    },
    {
      sectionNumber: 11,
      instruction:
        "f(x) = A + B sin Cx for 0° ≤ x ≤ 360°. The amplitude of f is 3, the period is 90° and the minimum value of f is -2. a) Write down the value of A, the value of B and the value of C.",
      problems: [
        {
          id: "11a",
          question: "\\text{Find } A, B, \\text{ and } C",
          steps: [
            "\\text{Amplitude} = |B| = 3. \\text{ Assuming } B > 0 \\text{ for standard form, } B = 3.",
            "\\text{Period} = \\frac{360^\\circ}{C} = 90^\\circ \\implies C = 4",
            "\\text{Minimum value} = A - B = -2",
            "A - 3 = -2 \\implies A = 1",
            "A = 1, \\; B = 3, \\; C = 4",
          ],
        },
      ],
    },
    {
      sectionNumber: 12,
      instruction:
        "a) On the same grid, sketch the graphs of y = sin x and y = 1 + sin 2x for 0° ≤ x ≤ 360°. b) State the number of roots of the equation sin 2x - sin x + 1 = 0 for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "12b",
          question: "\\text{Number of roots of } \\sin 2x - \\sin x + 1 = 0",
          steps: [
            "\\text{Rearrange the equation: } \\sin x = 1 + \\sin 2x",
            "\\text{The number of roots is the number of intersection points between } y = \\sin x \\text{ and } y = 1 + \\sin 2x.",
            "\\text{Graph description: } y = \\sin x \\text{ is the standard wave. } y = 1 + \\sin 2x \\text{ oscillates between 0 and 2, with period } 180^\\circ.",
            "\\text{They intersect at } x=90^\\circ \\text{ (both equal 1). They also intersect near } x \\approx 160^\\circ \\text{ and } x \\approx 330^\\circ.",
            "\\text{By solving graphically, the line intersects exactly 2 times.}",
            "\\text{Number of roots: } 2",
          ],
        },
      ],
    },
    {
      sectionNumber: 13,
      instruction:
        "a) On the same grid, sketch the graphs of y = sin x and y = 1 + cos 2x for 0° ≤ x ≤ 360°. b) State the number of roots of the equation sin x = 1 + cos 2x for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "13b",
          question: "\\text{Number of roots of } \\sin x = 1 + \\cos 2x",
          steps: [
            "\\text{Use the identity } \\cos 2x = 1 - 2\\sin^2 x:",
            "\\sin x = 1 + (1 - 2\\sin^2 x)",
            "2\\sin^2 x + \\sin x - 2 = 0",
            "\\text{Let } u = \\sin x: \\quad 2u^2 + u - 2 = 0",
            "u = \\frac{-1 \\pm \\sqrt{1^2 - 4(2)(-2)}}{2(2)} = \\frac{-1 \\pm \\sqrt{17}}{4}",
            "u_1 = \\frac{-1 + \\sqrt{17}}{4} \\approx 0.78",
            "u_2 = \\frac{-1 - \\sqrt{17}}{4} \\approx -1.28 \\text{ (Reject, since } -1 \\le u \\le 1)",
            "\\text{Since } \\sin x = 0.78 \\text{ is positive, there are 2 solutions (one in Q1 and one in Q2).}",
            "\\text{Number of roots: } 2",
          ],
        },
      ],
    },
    {
      sectionNumber: 14,
      instruction:
        "a) On the same grid, sketch the graphs of y = 3 cos 2x and y = 2 + sin x for 0° ≤ x ≤ 360°. b) State the number of roots of the equation 3 cos 2x = 2 + sin x for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "14b",
          question: "\\text{Number of roots of } 3\\cos 2x = 2 + \\sin x",
          steps: [
            "\\text{Use the identity } \\cos 2x = 1 - 2\\sin^2 x:",
            "3(1 - 2\\sin^2 x) = 2 + \\sin x",
            "3 - 6\\sin^2 x = 2 + \\sin x",
            "6\\sin^2 x + \\sin x - 1 = 0",
            "\\text{Factorise: } (3\\sin x - 1)(2\\sin x + 1) = 0",
            "\\text{Case 1: } \\sin x = \\frac{1}{3} \\implies \\text{2 solutions (Q1 and Q2)}",
            "\\text{Case 2: } \\sin x = -\\frac{1}{2} \\implies \\text{2 solutions (Q3 and Q4)}",
            "\\text{Total number of roots: } 2 + 2 = 4",
          ],
        },
      ],
    },
  ],
};

export default exercise94Solutions;
