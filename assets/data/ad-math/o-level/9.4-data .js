/**
 * 9.1-data.js
 * Data structure for Exercise 9.1 (Exact Values of Trigonometric Ratios)
 *
 * Note: String values are formatted with LaTeX syntax.
 */

const exercise91Solutions = {
  title: "9.1: Exact Trigonometric Ratios",
  subtitle: "Using right-angled triangles and exact values of special angles",
  description:
    "Learn how to find the exact values of trigonometric functions. This lesson covers using the Pythagorean theorem to find missing sides of right-angled triangles given one ratio, and evaluating expressions using the exact values of special angles (30°, 45°, 60°) in both degrees and radians.",

  sections: [
    {
      sectionNumber: 1,
      instruction:
        "Given that tan θ = 2/3 and that θ is acute, find the exact values of:",
      problems: [
        {
          id: "1",
          question:
            "\\text{Context: } \\tan \\theta = \\frac{2}{3} \\text{ (acute)}",
          steps: [
            "\\text{Construct a right-angled triangle in Q1.}",
            "\\text{Opposite side} = 2, \\text{ Adjacent side} = 3.",
            "\\text{Using Pythagoras: Hypotenuse} = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}",
          ],
        },
        {
          id: "1a",
          question: "\\sin \\theta",
          steps: [
            "\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}",
            "\\sin \\theta = \\frac{2}{\\sqrt{13}} = \\frac{2\\sqrt{13}}{13}",
          ],
        },
        {
          id: "1b",
          question: "\\cos \\theta",
          steps: [
            "\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}",
            "\\cos \\theta = \\frac{3}{\\sqrt{13}} = \\frac{3\\sqrt{13}}{13}",
          ],
        },
        {
          id: "1c",
          question: "\\sin^2 \\theta",
          steps: [
            "\\sin^2 \\theta = \\left(\\frac{2}{\\sqrt{13}}\\right)^2",
            "= \\frac{4}{13}",
          ],
        },
        {
          id: "1d",
          question: "\\sin^2 \\theta + \\cos^2 \\theta",
          steps: [
            "\\text{This is the Pythagorean identity.}",
            "\\sin^2 \\theta + \\cos^2 \\theta = 1",
          ],
        },
        {
          id: "1e",
          question: "\\frac{2 + \\sin \\theta}{3 - \\cos \\theta}",
          steps: [
            "\\text{Substitute the exact values:}",
            "= \\frac{2 + \\frac{2}{\\sqrt{13}}}{3 - \\frac{3}{\\sqrt{13}}}",
            "= \\frac{\\frac{2\\sqrt{13} + 2}{\\sqrt{13}}}{\\frac{3\\sqrt{13} - 3}{\\sqrt{13}}}",
            "= \\frac{2(\\sqrt{13} + 1)}{3(\\sqrt{13} - 1)}",
            "\\text{Rationalise the denominator:}",
            "= \\frac{2(\\sqrt{13} + 1)(\\sqrt{13} + 1)}{3(\\sqrt{13} - 1)(\\sqrt{13} + 1)}",
            "= \\frac{2(13 + 2\\sqrt{13} + 1)}{3(13 - 1)}",
            "= \\frac{2(14 + 2\\sqrt{13})}{3(12)} = \\frac{28 + 4\\sqrt{13}}{36}",
            "= \\frac{7 + \\sqrt{13}}{9}",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction:
        "Given that sin θ = √2/5 and that θ is acute, find the exact values of:",
      problems: [
        {
          id: "2",
          question:
            "\\text{Context: } \\sin \\theta = \\frac{\\sqrt{2}}{5} \\text{ (acute)}",
          steps: [
            "\\text{Construct a right-angled triangle in Q1.}",
            "\\text{Opposite side} = \\sqrt{2}, \\text{ Hypotenuse} = 5.",
            "\\text{Using Pythagoras: Adjacent} = \\sqrt{5^2 - (\\sqrt{2})^2} = \\sqrt{25 - 2} = \\sqrt{23}",
          ],
        },
        {
          id: "2a",
          question: "\\cos \\theta",
          steps: [
            "\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}",
            "\\cos \\theta = \\frac{\\sqrt{23}}{5}",
          ],
        },
        {
          id: "2b",
          question: "\\tan \\theta",
          steps: [
            "\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}",
            "\\tan \\theta = \\frac{\\sqrt{2}}{\\sqrt{23}} = \\frac{\\sqrt{46}}{23}",
          ],
        },
        {
          id: "2c",
          question: "1 - \\sin^2 \\theta",
          steps: [
            "1 - \\sin^2 \\theta = 1 - \\left(\\frac{\\sqrt{2}}{5}\\right)^2",
            "= 1 - \\frac{2}{25}",
            "= \\frac{23}{25}",
          ],
        },
        {
          id: "2d",
          question: "\\sin \\theta + \\cos \\theta",
          steps: [
            "= \\frac{\\sqrt{2}}{5} + \\frac{\\sqrt{23}}{5}",
            "= \\frac{\\sqrt{2} + \\sqrt{23}}{5}",
          ],
        },
        {
          id: "2e",
          question: "\\frac{\\cos \\theta - \\sin \\theta}{\\tan \\theta}",
          steps: [
            "= \\frac{\\frac{\\sqrt{23}}{5} - \\frac{\\sqrt{2}}{5}}{\\frac{\\sqrt{2}}{\\sqrt{23}}}",
            "= \\frac{\\frac{\\sqrt{23} - \\sqrt{2}}{5}}{\\frac{\\sqrt{2}}{\\sqrt{23}}}",
            "= \\frac{\\sqrt{23} - \\sqrt{2}}{5} \\times \\frac{\\sqrt{23}}{\\sqrt{2}}",
            "= \\frac{23 - \\sqrt{46}}{5\\sqrt{2}}",
            "\\text{Rationalise: } = \\frac{(23 - \\sqrt{46})\\sqrt{2}}{5(2)}",
            "= \\frac{23\\sqrt{2} - \\sqrt{92}}{10} = \\frac{23\\sqrt{2} - 2\\sqrt{23}}{10}",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction:
        "Given that cos θ = 1/7 and that θ is acute, find the exact values of:",
      problems: [
        {
          id: "3",
          question:
            "\\text{Context: } \\cos \\theta = \\frac{1}{7} \\text{ (acute)}",
          steps: [
            "\\text{Construct a right-angled triangle in Q1.}",
            "\\text{Adjacent side} = 1, \\text{ Hypotenuse} = 7.",
            "\\text{Using Pythagoras: Opposite} = \\sqrt{7^2 - 1^2} = \\sqrt{49 - 1} = \\sqrt{48} = 4\\sqrt{3}",
          ],
        },
        {
          id: "3a",
          question: "\\sin \\theta",
          steps: [
            "\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}",
            "\\sin \\theta = \\frac{4\\sqrt{3}}{7}",
          ],
        },
        {
          id: "3b",
          question: "\\tan \\theta",
          steps: [
            "\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}",
            "\\tan \\theta = \\frac{4\\sqrt{3}}{1} = 4\\sqrt{3}",
          ],
        },
        {
          id: "3c",
          question: "\\tan \\theta \\cos \\theta",
          steps: [
            "= (4\\sqrt{3}) \\times \\left(\\frac{1}{7}\\right)",
            "= \\frac{4\\sqrt{3}}{7}",
          ],
        },
        {
          id: "3d",
          question: "\\sin^2 \\theta + \\cos^2 \\theta",
          steps: [
            "\\text{By the Pythagorean identity:}",
            "\\sin^2 \\theta + \\cos^2 \\theta = 1",
          ],
        },
        {
          id: "3e",
          question:
            "\\frac{\\cos \\theta - \\tan \\theta}{1 - \\cos^2 \\theta}",
          steps: [
            "\\text{Note that } 1 - \\cos^2 \\theta = \\sin^2 \\theta = \\left(\\frac{4\\sqrt{3}}{7}\\right)^2 = \\frac{48}{49}",
            "\\text{Numerator: } \\frac{1}{7} - 4\\sqrt{3} = \\frac{1 - 28\\sqrt{3}}{7}",
            "\\text{Expression: } = \\frac{\\frac{1 - 28\\sqrt{3}}{7}}{\\frac{48}{49}}",
            "= \\frac{1 - 28\\sqrt{3}}{7} \\times \\frac{49}{48}",
            "= \\frac{7(1 - 28\\sqrt{3})}{48}",
            "= \\frac{7 - 196\\sqrt{3}}{48}",
          ],
        },
      ],
    },
    {
      sectionNumber: 4,
      instruction: "Find the exact value of each of the following.",
      problems: [
        {
          id: "4a",
          question: "\\tan 45^\\circ \\cos 60^\\circ",
          steps: [
            "\\text{Use exact values: } \\tan 45^\\circ = 1, \\text{ } \\cos 60^\\circ = \\frac{1}{2}",
            "= (1) \\times \\left(\\frac{1}{2}\\right)",
            "= \\frac{1}{2}",
          ],
        },
        {
          id: "4b",
          question: "\\tan^2 60^\\circ",
          steps: [
            "\\text{Use exact value: } \\tan 60^\\circ = \\sqrt{3}",
            "= (\\sqrt{3})^2",
            "= 3",
          ],
        },
        {
          id: "4c",
          question: "\\frac{\\tan 30^\\circ}{\\cos 30^\\circ}",
          steps: [
            "\\text{Use exact values: } \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}, \\text{ } \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}",
            "= \\frac{\\frac{1}{\\sqrt{3}}}{\\frac{\\sqrt{3}}{2}}",
            "= \\frac{1}{\\sqrt{3}} \\times \\frac{2}{\\sqrt{3}}",
            "= \\frac{2}{3}",
          ],
        },
        {
          id: "4d",
          question: "\\sin 45^\\circ + \\cos 30^\\circ",
          steps: [
            "\\text{Use exact values: } \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}, \\text{ } \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}",
            "= \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{3}}{2}",
            "= \\frac{\\sqrt{2} + \\sqrt{3}}{2}",
          ],
        },
        {
          id: "4e",
          question:
            "\\frac{\\cos^2 30^\\circ}{\\cos 45^\\circ + \\cos 60^\\circ}",
          steps: [
            "\\text{Use exact values: } \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}, \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}, \\cos 60^\\circ = \\frac{1}{2}",
            "= \\frac{\\left(\\frac{\\sqrt{3}}{2}\\right)^2}{\\frac{\\sqrt{2}}{2} + \\frac{1}{2}}",
            "= \\frac{\\frac{3}{4}}{\\frac{\\sqrt{2} + 1}{2}}",
            "= \\frac{3}{4} \\times \\frac{2}{\\sqrt{2} + 1}",
            "= \\frac{3}{2(\\sqrt{2} + 1)}",
            "\\text{Rationalise: } = \\frac{3(\\sqrt{2} - 1)}{2(2 - 1)}",
            "= \\frac{3\\sqrt{2} - 3}{2}",
          ],
        },
        {
          id: "4f",
          question:
            "\\frac{\\tan 45^\\circ - \\sin 30^\\circ}{1 + \\sin^2 60^\\circ}",
          steps: [
            "\\text{Use exact values: } \\tan 45^\\circ = 1, \\sin 30^\\circ = \\frac{1}{2}, \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}",
            "= \\frac{1 - \\frac{1}{2}}{1 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2}",
            "= \\frac{\\frac{1}{2}}{1 + \\frac{3}{4}}",
            "= \\frac{\\frac{1}{2}}{\\frac{7}{4}}",
            "= \\frac{1}{2} \\times \\frac{4}{7}",
            "= \\frac{2}{7}",
          ],
        },
      ],
    },
    {
      sectionNumber: 5,
      instruction: "Find the exact value of each of the following.",
      problems: [
        {
          id: "5a",
          question:
            "\\sin\\left(\\frac{\\pi}{4}\\right) \\cos\\left(\\frac{\\pi}{3}\\right)",
          steps: [
            "\\text{Use exact values: } \\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}, \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}",
            "= \\frac{\\sqrt{2}}{2} \\times \\frac{1}{2}",
            "= \\frac{\\sqrt{2}}{4}",
          ],
        },
        {
          id: "5b",
          question: "\\sin^2\\left(\\frac{\\pi}{4}\\right)",
          steps: [
            "\\text{Use exact value: } \\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}",
            "= \\left(\\frac{\\sqrt{2}}{2}\\right)^2",
            "= \\frac{2}{4}",
            "= \\frac{1}{2}",
          ],
        },
        {
          id: "5c",
          question:
            "\\frac{\\tan\\left(\\frac{\\pi}{6}\\right)}{\\cos\\left(\\frac{\\pi}{4}\\right)}",
          steps: [
            "\\text{Use exact values: } \\tan\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{\\sqrt{3}}, \\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}",
            "= \\frac{\\frac{1}{\\sqrt{3}}}{\\frac{\\sqrt{2}}{2}}",
            "= \\frac{1}{\\sqrt{3}} \\times \\frac{2}{\\sqrt{2}}",
            "= \\frac{2}{\\sqrt{6}}",
            "\\text{Rationalise: } = \\frac{2\\sqrt{6}}{6}",
            "= \\frac{\\sqrt{6}}{3}",
          ],
        },
        {
          id: "5d",
          question:
            "\\frac{5 - \\tan\\left(\\frac{\\pi}{3}\\right)}{\\sin\\left(\\frac{\\pi}{3}\\right)}",
          steps: [
            "\\text{Use exact values: } \\tan\\left(\\frac{\\pi}{3}\\right) = \\sqrt{3}, \\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}",
            "= \\frac{5 - \\sqrt{3}}{\\frac{\\sqrt{3}}{2}}",
            "= (5 - \\sqrt{3}) \\times \\frac{2}{\\sqrt{3}}",
            "= \\frac{10 - 2\\sqrt{3}}{\\sqrt{3}}",
            "\\text{Rationalise: } = \\frac{(10 - 2\\sqrt{3})\\sqrt{3}}{3}",
            "= \\frac{10\\sqrt{3} - 6}{3}",
          ],
        },
        {
          id: "5e",
          question:
            "\\frac{1}{\\sin\\left(\\frac{\\pi}{6}\\right)} - \\frac{1}{\\cos\\left(\\frac{\\pi}{4}\\right)}",
          steps: [
            "\\text{Use exact values: } \\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}, \\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}",
            "= \\frac{1}{\\frac{1}{2}} - \\frac{1}{\\frac{\\sqrt{2}}{2}}",
            "= 2 - \\frac{2}{\\sqrt{2}}",
            "= 2 - \\sqrt{2}",
          ],
        },
        {
          id: "5f",
          question:
            "\\frac{\\tan\\left(\\frac{\\pi}{4}\\right) - \\sin\\left(\\frac{\\pi}{4}\\right)}{\\tan\\left(\\frac{\\pi}{6}\\right) \\sin\\left(\\frac{\\pi}{6}\\right)}",
          steps: [
            "\\text{Use exact values: } \\tan\\left(\\frac{\\pi}{4}\\right) = 1, \\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}, \\tan\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{\\sqrt{3}}, \\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}",
            "\\text{Numerator: } 1 - \\frac{\\sqrt{2}}{2} = \\frac{2 - \\sqrt{2}}{2}",
            "\\text{Denominator: } \\left(\\frac{1}{\\sqrt{3}}\\right) \\times \\left(\\frac{1}{2}\\right) = \\frac{1}{2\\sqrt{3}}",
            "\\text{Expression: } = \\frac{\\frac{2 - \\sqrt{2}}{2}}{\\frac{1}{2\\sqrt{3}}}",
            "= \\frac{2 - \\sqrt{2}}{2} \\times \\frac{2\\sqrt{3}}{1}",
            "= \\sqrt{3}(2 - \\sqrt{2})",
            "= 2\\sqrt{3} - \\sqrt{6}",
          ],
        },
      ],
    },
  ],
};

export default exercise91Solutions;
