/**
 * 9.2-data.js
 * Data structure for Exercise 9.2 (Angles in the Cartesian Plane)
 *
 * Note: String values are formatted with LaTeX syntax.
 */

const exercise92Solutions = {
  title: "9.2: Angles and Quadrants",
  subtitle:
    "Determining quadrants, direction of rotation, and reference angles",
  description:
    "Learn how to visualize angles in the Cartesian plane. This lesson covers identifying the quadrant of a rotating line OP for positive and negative angles in both degrees and radians, determining the direction of rotation, and calculating the acute reference angle made with the x-axis.",

  sections: [
    {
      sectionNumber: 1,
      instruction:
        "Draw a diagram showing the quadrant in which the rotating line OP lies for each of the following angles. In each question, indicate clearly the direction of rotation and find the acute angle that the line OP makes with the x-axis.",
      problems: [
        {
          id: "1a",
          question: "110^\\circ",
          steps: [
            "\\text{Direction: Counter-clockwise (positive angle).}",
            "\\text{Quadrant: Q2 (since } 90^\\circ < 110^\\circ < 180^\\circ \\text{).}",
            "\\text{Acute angle with x-axis: } 180^\\circ - 110^\\circ = 70^\\circ",
          ],
        },
        {
          id: "1b",
          question: "-60^\\circ",
          steps: [
            "\\text{Direction: Clockwise (negative angle).}",
            "\\text{Quadrant: Q4 (since } 0^\\circ \\text{ to } -90^\\circ \\text{ is Q4).}",
            "\\text{Acute angle with x-axis: } 60^\\circ",
          ],
        },
        {
          id: "1c",
          question: "220^\\circ",
          steps: [
            "\\text{Direction: Counter-clockwise (positive angle).}",
            "\\text{Quadrant: Q3 (since } 180^\\circ < 220^\\circ < 270^\\circ \\text{).}",
            "\\text{Acute angle with x-axis: } 220^\\circ - 180^\\circ = 40^\\circ",
          ],
        },
        {
          id: "1d",
          question: "-135^\\circ",
          steps: [
            "\\text{Direction: Clockwise (negative angle).}",
            "\\text{Quadrant: Q3 (Co-terminal with } 360^\\circ - 135^\\circ = 225^\\circ \\text{, which is in Q3).}",
            "\\text{Acute angle with x-axis: } 180^\\circ - 135^\\circ = 45^\\circ",
          ],
        },
        {
          id: "1e",
          question: "-300^\\circ",
          steps: [
            "\\text{Direction: Clockwise (negative angle).}",
            "\\text{Quadrant: Q1 (Co-terminal with } 360^\\circ - 300^\\circ = 60^\\circ \\text{, which is in Q1).}",
            "\\text{Acute angle with x-axis: } 60^\\circ",
          ],
        },
        {
          id: "1f",
          question: "\\frac{3\\pi}{4}",
          steps: [
            "\\text{Direction: Counter-clockwise (positive angle).}",
            "\\text{Quadrant: Q2 (since } \\frac{\\pi}{2} < \\frac{3\\pi}{4} < \\pi \\text{).}",
            "\\text{Acute angle with x-axis: } \\pi - \\frac{3\\pi}{4} = \\frac{\\pi}{4}",
          ],
        },
        {
          id: "1g",
          question: "\\frac{7\\pi}{6}",
          steps: [
            "\\text{Direction: Counter-clockwise (positive angle).}",
            "\\text{Quadrant: Q3 (since } \\pi < \\frac{7\\pi}{6} < \\frac{3\\pi}{2} \\text{).}",
            "\\text{Acute angle with x-axis: } \\frac{7\\pi}{6} - \\pi = \\frac{\\pi}{6}",
          ],
        },
        {
          id: "1h",
          question: "-\\frac{5\\pi}{3}",
          steps: [
            "\\text{Direction: Clockwise (negative angle).}",
            "\\text{Quadrant: Q1 (Co-terminal with } 2\\pi - \\frac{5\\pi}{3} = \\frac{\\pi}{3} \\text{, which is in Q1).}",
            "\\text{Acute angle with x-axis: } \\frac{\\pi}{3}",
          ],
        },
        {
          id: "1i",
          question: "\\frac{13\\pi}{9}",
          steps: [
            "\\text{Direction: Counter-clockwise (positive angle).}",
            "\\text{Quadrant: Q3 (since } \\pi < \\frac{13\\pi}{9} < \\frac{3\\pi}{2} \\text{, as } \\frac{13}{9} \\approx 1.44 \\text{).}",
            "\\text{Acute angle with x-axis: } \\frac{13\\pi}{9} - \\pi = \\frac{4\\pi}{9}",
          ],
        },
        {
          id: "1j",
          question: "-\\frac{5\\pi}{8}",
          steps: [
            "\\text{Direction: Clockwise (negative angle).}",
            "\\text{Quadrant: Q3 (Co-terminal with } 2\\pi - \\frac{5\\pi}{8} = \\frac{11\\pi}{8} \\text{, which is in Q3).}",
            "\\text{Acute angle with x-axis: } \\frac{11\\pi}{8} - \\pi = \\frac{3\\pi}{8}",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction:
        "State the quadrant that OP lies in when the angle that OP makes with the positive x-axis is:",
      problems: [
        {
          id: "2a",
          question: "110^\\circ",
          steps: ["90^\\circ < 110^\\circ < 180^\\circ", "\\text{Quadrant: Q2"],
        },
        {
          id: "2b",
          question: "300^\\circ",
          steps: [
            "270^\\circ < 300^\\circ < 360^\\circ",
            "\\text{Quadrant: Q4",
          ],
        },
        {
          id: "2c",
          question: "-160^\\circ",
          steps: [
            "\\text{Co-terminal angle: } -160^\\circ + 360^\\circ = 200^\\circ",
            "180^\\circ < 200^\\circ < 270^\\circ",
            "\\text{Quadrant: Q3",
          ],
        },
        {
          id: "2d",
          question: "245^\\circ",
          steps: [
            "180^\\circ < 245^\\circ < 270^\\circ",
            "\\text{Quadrant: Q3",
          ],
        },
        {
          id: "2e",
          question: "-500^\\circ",
          steps: [
            "\\text{Co-terminal angle: } -500^\\circ + 2(360^\\circ) = 220^\\circ",
            "180^\\circ < 220^\\circ < 270^\\circ",
            "\\text{Quadrant: Q3",
          ],
        },
        {
          id: "2f",
          question: "\\frac{\\pi}{4}",
          steps: [
            "0 < \\frac{\\pi}{4} < \\frac{\\pi}{2}",
            "\\text{Quadrant: Q1",
          ],
        },
        {
          id: "2g",
          question: "\\frac{11\\pi}{6}",
          steps: [
            "\\frac{3\\pi}{2} < \\frac{11\\pi}{6} < 2\\pi",
            "\\text{Quadrant: Q4",
          ],
        },
        {
          id: "2h",
          question: "-\\frac{5\\pi}{6}",
          steps: [
            "\\text{Co-terminal angle: } -\\frac{5\\pi}{6} + 2\\pi = \\frac{7\\pi}{6}",
            "\\pi < \\frac{7\\pi}{6} < \\frac{3\\pi}{2}",
            "\\text{Quadrant: Q3",
          ],
        },
        {
          id: "2i",
          question: "\\frac{13\\pi}{6}",
          steps: [
            "\\text{Co-terminal angle: } \\frac{13\\pi}{6} - 2\\pi = \\frac{\\pi}{6}",
            "0 < \\frac{\\pi}{6} < \\frac{\\pi}{2}",
            "\\text{Quadrant: Q1",
          ],
        },
        {
          id: "2j",
          question: "\\frac{9\\pi}{4}",
          steps: [
            "\\text{Co-terminal angle: } \\frac{9\\pi}{4} - 2\\pi = \\frac{\\pi}{4}",
            "0 < \\frac{\\pi}{4} < \\frac{\\pi}{2}",
            "\\text{Quadrant: Q1",
          ],
        },
      ],
    },
  ],
};

export default exercise92Solutions;
