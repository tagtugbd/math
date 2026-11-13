/**
 * 9.3-data.js
 * Data structure for Exercise 9.3 (Trigonometric Ratios of Any Angle)
 *
 * Note: String values are formatted with LaTeX syntax.
 */

const exercise93Solutions = {
  title: "9.3: Trigonometric Ratios of Any Angle",
  subtitle: "Reference angles, quadrant signs (ASTC), and finding exact values",
  description:
    "Practice expressing trigonometric ratios of any angle as acute angles, determining exact values based on given quadrant information, and using Pythagorean identities to find missing ratios.",

  sections: [
    {
      sectionNumber: 1,
      instruction:
        "Express the following as trigonometric ratios of acute angles.",
      problems: [
        {
          id: "1a",
          question: "\\sin 220^\\circ",
          steps: [
            "\\text{Angle is in Q3 (since } 180^\\circ < 220^\\circ < 270^\\circ \\text{). In Q3, sine is negative.}",
            "\\text{Reference angle: } 220^\\circ - 180^\\circ = 40^\\circ",
            "\\sin 220^\\circ = -\\sin 40^\\circ",
          ],
        },
        {
          id: "1b",
          question: "\\cos 325^\\circ",
          steps: [
            "\\text{Angle is in Q4 (since } 270^\\circ < 325^\\circ < 360^\\circ \\text{). In Q4, cosine is positive.}",
            "\\text{Reference angle: } 360^\\circ - 325^\\circ = 35^\\circ",
            "\\cos 325^\\circ = \\cos 35^\\circ",
          ],
        },
        {
          id: "1c",
          question: "\\tan 140^\\circ",
          steps: [
            "\\text{Angle is in Q2 (since } 90^\\circ < 140^\\circ < 180^\\circ \\text{). In Q2, tangent is negative.}",
            "\\text{Reference angle: } 180^\\circ - 140^\\circ = 40^\\circ",
            "\\tan 140^\\circ = -\\tan 40^\\circ",
          ],
        },
        {
          id: "1d",
          question: "\\cos(-25^\\circ)",
          steps: [
            "\\text{Angle is in Q4 (clockwise rotation). In Q4, cosine is positive.}",
            "\\text{Reference angle: } 25^\\circ",
            "\\cos(-25^\\circ) = \\cos 25^\\circ",
          ],
        },
        {
          id: "1e",
          question: "\\tan 600^\\circ",
          steps: [
            "\\text{Find co-terminal angle: } 600^\\circ - 360^\\circ = 240^\\circ",
            "\\text{Angle is in Q3. In Q3, tangent is positive.}",
            "\\text{Reference angle: } 240^\\circ - 180^\\circ = 60^\\circ",
            "\\tan 600^\\circ = \\tan 60^\\circ",
          ],
        },
        {
          id: "1f",
          question: "\\sin\\left(\\frac{4\\pi}{5}\\right)",
          steps: [
            "\\text{Angle is in Q2 (since } \\frac{\\pi}{2} < \\frac{4\\pi}{5} < \\pi \\text{). In Q2, sine is positive.}",
            "\\text{Reference angle: } \\pi - \\frac{4\\pi}{5} = \\frac{\\pi}{5}",
            "\\sin\\left(\\frac{4\\pi}{5}\\right) = \\sin\\left(\\frac{\\pi}{5}\\right)",
          ],
        },
        {
          id: "1g",
          question: "\\tan\\left(\\frac{7\\pi}{4}\\right)",
          steps: [
            "\\text{Angle is in Q4 (since } \\frac{3\\pi}{2} < \\frac{7\\pi}{4} < 2\\pi \\text{). In Q4, tangent is negative.}",
            "\\text{Reference angle: } 2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}",
            "\\tan\\left(\\frac{7\\pi}{4}\\right) = -\\tan\\left(\\frac{\\pi}{4}\\right)",
          ],
        },
        {
          id: "1h",
          question: "\\cos\\left(-\\frac{11\\pi}{6}\\right)",
          steps: [
            "\\text{Find positive co-terminal angle: } -\\frac{11\\pi}{6} + 2\\pi = \\frac{\\pi}{6}",
            "\\text{Angle is in Q1. In Q1, cosine is positive.}",
            "\\cos\\left(-\\frac{11\\pi}{6}\\right) = \\cos\\left(\\frac{\\pi}{6}\\right)",
          ],
        },
        {
          id: "1i",
          question: "\\tan\\left(\\frac{2\\pi}{3}\\right)",
          steps: [
            "\\text{Angle is in Q2 (since } \\frac{\\pi}{2} < \\frac{2\\pi}{3} < \\pi \\text{). In Q2, tangent is negative.}",
            "\\text{Reference angle: } \\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}",
            "\\tan\\left(\\frac{2\\pi}{3}\\right) = -\\tan\\left(\\frac{\\pi}{3}\\right)",
          ],
        },
        {
          id: "1j",
          question: "\\sin\\left(\\frac{9\\pi}{4}\\right)",
          steps: [
            "\\text{Find co-terminal angle: } \\frac{9\\pi}{4} - 2\\pi = \\frac{\\pi}{4}",
            "\\text{Angle is in Q1. In Q1, sine is positive.}",
            "\\sin\\left(\\frac{9\\pi}{4}\\right) = \\sin\\left(\\frac{\\pi}{4}\\right)",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction:
        "Given that cos θ = 2/5 and that 270° ≤ θ ≤ 360°, find the value of:",
      problems: [
        {
          id: "2-context",
          question:
            "\\text{Context: } \\cos \\theta = \\frac{2}{5} \\text{ in Q4}",
          steps: [
            "\\text{In Q4, } \\cos \\theta \\text{ is positive, but } \\sin \\theta \\text{ and } \\tan \\theta \\text{ are negative.}",
            "\\text{Using } \\sin^2 \\theta + \\cos^2 \\theta = 1:",
            "\\sin^2 \\theta = 1 - \\left(\\frac{2}{5}\\right)^2 = 1 - \\frac{4}{25} = \\frac{21}{25}",
            "\\sin \\theta = -\\frac{\\sqrt{21}}{5} \\quad (\\text{negative in Q4})",
          ],
        },
        {
          id: "2a",
          question: "\\tan \\theta",
          steps: [
            "\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}",
            "\\tan \\theta = \\frac{-\\frac{\\sqrt{21}}{5}}{\\frac{2}{5}}",
            "\\tan \\theta = -\\frac{\\sqrt{21}}{2}",
          ],
        },
        {
          id: "2b",
          question: "\\sin \\theta",
          steps: [
            "\\text{Calculated in context:}",
            "\\sin \\theta = -\\frac{\\sqrt{21}}{5}",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction:
        "Given that tan θ = -√3 and that 90° ≤ θ ≤ 180°, find the value of:",
      problems: [
        {
          id: "3-context",
          question:
            "\\text{Context: } \\tan \\theta = -\\sqrt{3} \\text{ in Q2}",
          steps: [
            "\\text{In Q2, } \\sin \\theta \\text{ is positive, } \\cos \\theta \\text{ and } \\tan \\theta \\text{ are negative.}",
            "\\tan \\theta = -\\sqrt{3} \\implies \\text{Reference angle is } 60^\\circ (\\text{since } \\tan 60^\\circ = \\sqrt{3})",
            "\\text{In Q2, the angle is } 180^\\circ - 60^\\circ = 120^\\circ",
          ],
        },
        {
          id: "3a",
          question: "\\sin \\theta",
          steps: [
            "\\sin 120^\\circ = \\sin 60^\\circ \\quad (\\text{positive in Q2})",
            "\\sin \\theta = \\frac{\\sqrt{3}}{2}",
          ],
        },
        {
          id: "3b",
          question: "\\cos \\theta",
          steps: [
            "\\cos 120^\\circ = -\\cos 60^\\circ \\quad (\\text{negative in Q2})",
            "\\cos \\theta = -\\frac{1}{2}",
          ],
        },
      ],
    },
    {
      sectionNumber: 4,
      instruction:
        "Given that sin θ = 5/13 and that θ is obtuse, find the value of:",
      problems: [
        {
          id: "4-context",
          question:
            "\\text{Context: } \\sin \\theta = \\frac{5}{13} \\text{ (Obtuse = Q2)}",
          steps: [
            "\\text{Obtuse means } 90^\\circ < \\theta < 180^\\circ \\text{ (Q2).}",
            "\\text{In Q2, } \\sin \\theta \\text{ is positive, } \\cos \\theta \\text{ and } \\tan \\theta \\text{ are negative.}",
            "\\text{Draw a right triangle: Opp} = 5, \\text{ Hyp} = 13.",
            "\\text{Adj} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12",
          ],
        },
        {
          id: "4a",
          question: "\\cos \\theta",
          steps: [
            "\\cos \\theta = \\frac{\\text{Adj}}{\\text{Hyp}}",
            "\\text{Since } \\theta \\text{ is in Q2, cosine is negative:}",
            "\\cos \\theta = -\\frac{12}{13}",
          ],
        },
        {
          id: "4b",
          question: "\\tan \\theta",
          steps: [
            "\\tan \\theta = \\frac{\\text{Opp}}{\\text{Adj}}",
            "\\text{Since } \\theta \\text{ is in Q2, tangent is negative:}",
            "\\tan \\theta = -\\frac{5}{12}",
          ],
        },
      ],
    },
    {
      sectionNumber: 5,
      instruction:
        "Given that tan θ = 2/3 and that θ is reflex, find the value of:",
      problems: [
        {
          id: "5-context",
          question:
            "\\text{Context: } \\tan \\theta = \\frac{2}{3} \\text{ (Reflex)}",
          steps: [
            "\\text{Reflex means } 180^\\circ < \\theta < 360^\\circ.",
            "\\text{Since } \\tan \\theta \\text{ is positive, } \\theta \\text{ must be in Q3.}",
            "\\text{In Q3, } \\tan \\theta \\text{ is positive, } \\sin \\theta \\text{ and } \\cos \\theta \\text{ are negative.}",
            "\\text{Draw a right triangle: Opp} = 2, \\text{ Adj} = 3.",
            "\\text{Hyp} = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}",
          ],
        },
        {
          id: "5a",
          question: "\\sin \\theta",
          steps: [
            "\\sin \\theta = \\frac{\\text{Opp}}{\\text{Hyp}}",
            "\\text{Since } \\theta \\text{ is in Q3, sine is negative:}",
            "\\sin \\theta = -\\frac{2}{\\sqrt{13}} = -\\frac{2\\sqrt{13}}{13}",
          ],
        },
        {
          id: "5b",
          question: "\\cos \\theta",
          steps: [
            "\\cos \\theta = \\frac{\\text{Adj}}{\\text{Hyp}}",
            "\\text{Since } \\theta \\text{ is in Q3, cosine is negative:}",
            "\\cos \\theta = -\\frac{3}{\\sqrt{13}} = -\\frac{3\\sqrt{13}}{13}",
          ],
        },
      ],
    },
    {
      sectionNumber: 6,
      instruction:
        "Given that tan A = 4/3 and cos B = -1/√3, where A and B are in the same quadrant, find the value of:",
      problems: [
        {
          id: "6-context",
          question: "\\text{Context: Finding the common quadrant}",
          steps: [
            "\\tan A \\text{ is positive} \\implies A \\text{ is in Q1 or Q3.}",
            "\\cos B \\text{ is negative} \\implies B \\text{ is in Q2 or Q3.}",
            "\\text{Since A and B are in the same quadrant, both must be in Q3.}",
            "\\text{For A in Q3: Opp} = -4, \\text{ Adj} = -3, \\text{ Hyp} = \\sqrt{(-4)^2 + (-3)^2} = 5. \\quad (\\sin A = -\\frac{4}{5}, \\cos A = -\\frac{3}{5})",
            "\\text{For B in Q3: Adj} = -1, \\text{ Hyp} = \\sqrt{3}, \\text{ Opp} = -\\sqrt{(\\sqrt{3})^2 - (-1)^2} = -\\sqrt{2}.",
          ],
        },
        {
          id: "6a",
          question: "\\sin A",
          steps: [
            "\\sin A = \\frac{\\text{Opp}}{\\text{Hyp}}",
            "\\sin A = -\\frac{4}{5}",
          ],
        },
        {
          id: "6b",
          question: "\\cos A",
          steps: [
            "\\cos A = \\frac{\\text{Adj}}{\\text{Hyp}}",
            "\\cos A = -\\frac{3}{5}",
          ],
        },
        {
          id: "6c",
          question: "\\sin B",
          steps: [
            "\\sin B = \\frac{\\text{Opp}}{\\text{Hyp}}",
            "\\sin B = -\\frac{\\sqrt{2}}{\\sqrt{3}} = -\\frac{\\sqrt{6}}{3}",
          ],
        },
        {
          id: "6d",
          question: "\\tan B",
          steps: [
            "\\tan B = \\frac{\\text{Opp}}{\\text{Adj}}",
            "\\tan B = \\frac{-\\sqrt{2}}{-1} = \\sqrt{2}",
          ],
        },
      ],
    },
    {
      sectionNumber: 7,
      instruction:
        "Given that sin A = -12/13 and cos B = 3/5, where A and B are in the same quadrant, find the value of:",
      problems: [
        {
          id: "7-context",
          question: "\\text{Context: Finding the common quadrant}",
          steps: [
            "\\sin A \\text{ is negative} \\implies A \\text{ is in Q3 or Q4.}",
            "\\cos B \\text{ is positive} \\implies B \\text{ is in Q1 or Q4.}",
            "\\text{Since A and B are in the same quadrant, both must be in Q4.}",
            "\\text{For A in Q4: Opp} = -12, \\text{ Hyp} = 13, \\text{ Adj} = \\sqrt{13^2 - (-12)^2} = 5. \\quad (\\cos A = \\frac{5}{13}, \\tan A = -\\frac{12}{5})",
            "\\text{For B in Q4: Adj} = 3, \\text{ Hyp} = 5, \\text{ Opp} = -\\sqrt{5^2 - 3^2} = -4.",
          ],
        },
        {
          id: "7a",
          question: "\\cos A",
          steps: [
            "\\cos A = \\frac{\\text{Adj}}{\\text{Hyp}}",
            "\\cos A = \\frac{5}{13}",
          ],
        },
        {
          id: "7b",
          question: "\\tan A",
          steps: [
            "\\tan A = \\frac{\\text{Opp}}{\\text{Adj}}",
            "\\tan A = -\\frac{12}{5}",
          ],
        },
        {
          id: "7c",
          question: "\\sin B",
          steps: [
            "\\sin B = \\frac{\\text{Opp}}{\\text{Hyp}}",
            "\\sin B = -\\frac{4}{5}",
          ],
        },
        {
          id: "7d",
          question: "\\tan B",
          steps: [
            "\\tan B = \\frac{\\text{Opp}}{\\text{Adj}}",
            "\\tan B = -\\frac{4}{3}",
          ],
        },
      ],
    },
  ],
};

export default exercise93Solutions;
