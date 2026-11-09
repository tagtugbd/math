const exercise97Solutions = {
  title: "9.7: Proving Trigonometric Identities",
  subtitle:
    "Step-by-step proofs using Pythagorean, quotient, and reciprocal identities",
  description:
    "Learn how to solve complex trigonometric proofs in Additional Mathematics Chapter 9.7. Master the algebraic manipulation needed to seamlessly convert the Left-Hand Side (LHS) to match the Right-Hand Side (RHS) using fundamental identities.",
  sections: [
    {
      sectionNumber: 1,
      instruction: "Prove each of these identities.",
      problems: [
        {
          id: "1a",
          question: "\\frac{\\sin x}{\\tan x} = \\cos x",
          steps: [
            "LHS = \\frac{\\sin x}{\\frac{\\sin x}{\\cos x}}",
            "= \\sin x \\times \\frac{\\cos x}{\\sin x}",
            "= \\cos x = RHS",
          ],
        },
        {
          id: "b",
          question: "\\frac{\\cos x \\sin x}{\\tan x} = 1 - \\sin^2 x",
          steps: [
            "LHS = \\frac{\\cos x \\sin x}{\\frac{\\sin x}{\\cos x}}",
            "= \\cos x \\sin x \\times \\frac{\\cos x}{\\sin x}",
            "= \\cos^2 x",
            "= 1 - \\sin^2 x = RHS \\quad",
          ],
        },
        {
          id: "c",
          question: "\\frac{1 - \\sin^2 x}{\\cos x} = \\cos x",
          steps: [
            "LHS = \\frac{\\cos^2 x}{\\cos x} \\quad ",
            "= \\cos x = RHS",
          ],
        },
        {
          id: "d",
          question:
            "\\frac{\\cos^2 x - \\sin^2 x}{\\cos x + \\sin x} + \\sin x = \\cos x",
          steps: [
            "LHS = \\frac{(\\cos x - \\sin x)(\\cos x + \\sin x)}{\\cos x + \\sin x} + \\sin x",
            "= (\\cos x - \\sin x) + \\sin x",
            "= \\cos x = RHS",
          ],
        },
        {
          id: "e",
          question: "(\\sin x + \\cos x)^2 = 1 + 2\\sin x \\cos x",
          steps: [
            "LHS = \\sin^2 x + 2\\sin x \\cos x + \\cos^2 x",
            "= (\\sin^2 x + \\cos^2 x) + 2\\sin x \\cos x",
            "= 1 + 2\\sin x \\cos x = RHS",
          ],
        },
        {
          id: "f",
          question: "\\tan^2 x - \\sin^2 x = \\tan^2 x \\sin^2 x",
          steps: [
            "LHS = \\frac{\\sin^2 x}{\\cos^2 x} - \\sin^2 x",
            "= \\frac{\\sin^2 x - \\sin^2 x \\cos^2 x}{\\cos^2 x}",
            "= \\frac{\\sin^2 x (1 - \\cos^2 x)}{\\cos^2 x}",
            "= \\frac{\\sin^2 x (\\sin^2 x)}{\\cos^2 x}",
            "= \\frac{\\sin^2 x}{\\cos^2 x} \\times \\sin^2 x",
            "= \\tan^2 x \\sin^2 x = RHS",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction: "Prove each of these identities.",
      problems: [
        {
          id: "a",
          question: "\\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1",
          steps: [
            "LHS = \\cos^2 x - (1 - \\cos^2 x)",
            "= \\cos^2 x - 1 + \\cos^2 x",
            "= 2\\cos^2 x - 1 = RHS",
          ],
        },
        {
          id: "b",
          question: "\\cos^2 x - \\sin^2 x = 1 - 2\\sin^2 x",
          steps: [
            "LHS = (1 - \\sin^2 x) - \\sin^2 x",
            "= 1 - 2\\sin^2 x = RHS",
          ],
        },
        {
          id: "c",
          question: "\\cos^4 x + \\sin^2 x \\cos^2 x = \\cos^2 x",
          steps: [
            "LHS = \\cos^2 x (\\cos^2 x + \\sin^2 x)",
            "= \\cos^2 x (1)",
            "= \\cos^2 x = RHS",
          ],
        },
        {
          id: "d",
          question: "2(1 + \\cos x) - (1 + \\cos x)^2 = \\sin^2 x",
          steps: [
            "LHS = (1 + \\cos x)[2 - (1 + \\cos x)]",
            "= (1 + \\cos x)(1 - \\cos x)",
            "= 1 - \\cos^2 x",
            "= \\sin^2 x = RHS",
          ],
        },
        {
          id: "e",
          question: "2 - (\\sin x + \\cos x)^2 = (\\sin x - \\cos x)^2",
          steps: [
            "LHS = 2 - (\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x)",
            "= 2 - (1 + 2\\sin x \\cos x)",
            "= 1 - 2\\sin x \\cos x",
            "RHS = (\\sin x - \\cos x)^2",
            "= \\sin^2 x - 2\\sin x \\cos x + \\cos^2 x",
            "= 1 - 2\\sin x \\cos x",
            "LHS = RHS",
          ],
        },
        {
          id: "f",
          question: "\\cos^4 x + \\sin^2 x = \\sin^4 x + \\cos^2 x",
          steps: [
            "LHS - RHS = (\\cos^4 x - \\sin^4 x) + (\\sin^2 x - \\cos^2 x)",
            "= (\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x) - (\\cos^2 x - \\sin^2 x)",
            "= (\\cos^2 x - \\sin^2 x)(1) - (\\cos^2 x - \\sin^2 x)",
            "= 0",
            "\\text{Therefore, LHS = RHS}",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction: "Prove each of these identities.",
      problems: [
        {
          id: "a",
          question:
            "\\frac{\\cos^2 x - \\sin^2 x}{\\cos x - \\sin x} = \\cos x + \\sin x",
          steps: [
            "LHS = \\frac{(\\cos x - \\sin x)(\\cos x + \\sin x)}{\\cos x - \\sin x}",
            "= \\cos x + \\sin x = RHS",
          ],
        },
        {
          id: "b",
          question:
            "\\frac{\\sin x}{1 + \\cos x} + \\frac{1 + \\cos x}{\\sin x} = \\frac{2}{\\sin x}",
          steps: [
            "LHS = \\frac{\\sin x(\\sin x) + (1 + \\cos x)(1 + \\cos x)}{\\sin x(1 + \\cos x)}",
            "= \\frac{\\sin^2 x + 1 + 2\\cos x + \\cos^2 x}{\\sin x(1 + \\cos x)}",
            "= \\frac{(\\sin^2 x + \\cos^2 x) + 1 + 2\\cos x}{\\sin x(1 + \\cos x)}",
            "= \\frac{1 + 1 + 2\\cos x}{\\sin x(1 + \\cos x)}",
            "= \\frac{2 + 2\\cos x}{\\sin x(1 + \\cos x)}",
            "= \\frac{2(1 + \\cos x)}{\\sin x(1 + \\cos x)}",
            "= \\frac{2}{\\sin x} = RHS",
          ],
        },
        {
          id: "c",
          question: "\\frac{\\cos^4 x - \\sin^4 x}{\\cos^2 x} = 1 - \\tan^2 x",
          steps: [
            "LHS = \\frac{(\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x)}{\\cos^2 x}",
            "= \\frac{(\\cos^2 x - \\sin^2 x)(1)}{\\cos^2 x}",
            "= \\frac{\\cos^2 x}{\\cos^2 x} - \\frac{\\sin^2 x}{\\cos^2 x}",
            "= 1 - \\tan^2 x = RHS",
          ],
        },
        {
          id: "d",
          question:
            "\\frac{\\sin^2 x(1 - \\cos^2 x)}{\\cos^2 x(1 - \\sin^2 x)} = \\tan^4 x",
          steps: [
            "LHS = \\frac{\\sin^2 x(\\sin^2 x)}{\\cos^2 x(\\cos^2 x)}",
            "= \\frac{\\sin^4 x}{\\cos^4 x}",
            "= \\left(\\frac{\\sin x}{\\cos x}\\right)^4",
            "= \\tan^4 x = RHS",
          ],
        },
      ],
    },
  ],
};

// Export the object for use in your website
export default exercise97Solutions;

// Alternatively, if using CommonJS (Node.js require):
// module.exports = exercise97Solutions;
