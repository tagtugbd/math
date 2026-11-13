/**
 * 10.1-data.js
 * Data structure for Exercise 10.1 (Factorials)
 *
 * Note: String values are formatted with LaTeX syntax.
 */

const exercise101Solutions = {
  title: "10.1: Factorials",
  subtitle: "Evaluating and simplifying expressions with factorials",
  description:
    "Learn the fundamentals of factorial notation (!). This lesson covers evaluating basic factorials, simplifying fractions involving factorials by expanding and cancelling common terms, and rewriting algebraic products using factorial notation.",

  sections: [
    {
      sectionNumber: 1,
      instruction:
        "Without using a calculator, find the value of each of the following. Use the x! key on your calculator to check your answers.",
      problems: [
        {
          id: "1a",
          question: "7!",
          steps: [
            "7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1",
            "= 5040",
          ],
        },
        {
          id: "1b",
          question: "\\frac{4!}{2!}",
          steps: [
            "= \\frac{4 \\times 3 \\times 2!}{2!}",
            "\\text{Cancel } 2! \\text{ from numerator and denominator:}",
            "= 4 \\times 3",
            "= 12",
          ],
        },
        {
          id: "1c",
          question: "\\frac{7!}{3!}",
          steps: [
            "= \\frac{7 \\times 6 \\times 5 \\times 4 \\times 3!}{3!}",
            "\\text{Cancel } 3!:",
            "= 7 \\times 6 \\times 5 \\times 4",
            "= 840",
          ],
        },
        {
          id: "1d-1",
          question: "\\frac{8!}{5!}",
          steps: [
            "= \\frac{8 \\times 7 \\times 6 \\times 5!}{5!}",
            "\\text{Cancel } 5!:",
            "= 8 \\times 7 \\times 6",
            "= 336",
          ],
        },
        {
          id: "1d-2",
          question: "\\frac{4!}{2!2!}",
          steps: [
            "= \\frac{4 \\times 3 \\times 2 \\times 1}{(2 \\times 1) \\times (2 \\times 1)}",
            "= \\frac{24}{4}",
            "= 6",
          ],
        },
        {
          id: "1e",
          question: "\\frac{6!}{3!2!}",
          steps: [
            "= \\frac{6 \\times 5 \\times 4 \\times 3!}{3! \\times (2 \\times 1)}",
            "\\text{Cancel } 3!:",
            "= \\frac{6 \\times 5 \\times 4}{2}",
            "= \\frac{120}{2}",
            "= 60",
          ],
        },
        {
          id: "1f",
          question: "\\frac{6!}{(3!)^2}",
          steps: [
            "= \\frac{6 \\times 5 \\times 4 \\times 3!}{3! \\times 3!}",
            "\\text{Cancel one } 3!:",
            "= \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1}",
            "= \\frac{120}{6}",
            "= 20",
          ],
        },
        {
          id: "1g",
          question: "\\frac{5!}{3!} \\times \\frac{7!}{4!}",
          steps: [
            "= \\left(\\frac{5 \\times 4 \\times 3!}{3!}\\right) \\times \\left(\\frac{7 \\times 6 \\times 5 \\times 4!}{4!}\\right)",
            "= (5 \\times 4) \\times (7 \\times 6 \\times 5)",
            "= 20 \\times 210",
            "= 4200",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction: "Rewrite each of the following using factorial notation.",
      problems: [
        {
          id: "2a",
          question: "2 \\times 1",
          steps: ["\\text{This is the definition of 2 factorial.}", "= 2!"],
        },
        {
          id: "2b",
          question: "6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1",
          steps: [
            "\\text{This is a decreasing product of all integers from 6 down to 1.}",
            "= 6!",
          ],
        },
        {
          id: "2c",
          question: "5 \\times 4 \\times 3",
          steps: [
            "\\text{To write this as a factorial, extend the product to 1 and divide by the extra terms.}",
            "= \\frac{5 \\times 4 \\times 3 \\times 2 \\times 1}{2 \\times 1}",
            "= \\frac{5!}{2!}",
          ],
        },
        {
          id: "2d",
          question: "17 \\times 16 \\times 15 \\times 14",
          steps: [
            "\\text{The largest number is 17. Extend the product down to 1 by including } 13!.",
            "= \\frac{17 \\times 16 \\times 15 \\times 14 \\times 13!}{13!}",
            "= \\frac{17!}{13!}",
          ],
        },
        {
          id: "2e",
          question: "\\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1}",
          steps: [
            "\\text{Numerator: Extend } 10 \\times 9 \\times 8 \\text{ down to 1 to get } 10! \\text{, dividing by } 7!.",
            "\\text{Denominator: } 3 \\times 2 \\times 1 = 3!",
            "= \\frac{\\frac{10!}{7!}}{3!}",
            "= \\frac{10!}{7!3!}",
          ],
        },
        {
          id: "2f",
          question:
            "\\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{4 \\times 3 \\times 2 \\times 1}",
          steps: [
            "\\text{Numerator: Extend } 12 \\times \\dots \\times 8 \\text{ down to 1 to get } 12! \\text{, dividing by } 7!.",
            "\\text{Denominator: } 4 \\times 3 \\times 2 \\times 1 = 4!",
            "= \\frac{\\frac{12!}{7!}}{4!}",
            "= \\frac{12!}{7!4!}",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction:
        "CHALLENGE QUESTION: Rewrite each of the following using factorial notation.",
      problems: [
        {
          id: "3a",
          question: "n(n-1)(n-2)(n-3)",
          steps: [
            "\\text{The highest term is } n \\text{ and it descends by 1 each time.}",
            "\\text{To make it a factorial, extend the product down to 1 by multiplying and dividing by } (n-4)!.",
            "= \\frac{n(n-1)(n-2)(n-3)(n-4)!}{(n-4)!}",
            "= \\frac{n!}{(n-4)!}",
          ],
        },
        {
          id: "3b",
          question: "n(n-1)(n-2)(n-3)(n-4)(n-5)",
          steps: [
            "\\text{The product ends at } (n-5).",
            "\\text{Extend the product down to 1 by multiplying and dividing by } (n-6)!.",
            "= \\frac{n(n-1)(n-2)(n-3)(n-4)(n-5)(n-6)!}{(n-6)!}",
            "= \\frac{n!}{(n-6)!}",
          ],
        },
        {
          id: "3c",
          question:
            "\\frac{n(n-1)(n-2)}{5 \\times 4 \\times 3 \\times 2 \\times 1}",
          steps: [
            "\\text{Denominator is } 5!.",
            "\\text{Extend the numerator down to 1 to form } n! \\text{ by dividing by } (n-3)!.",
            "\\frac{n(n-1)(n-2)}{5!} = \\frac{\\frac{n!}{(n-3)!}}{5!}",
            "= \\frac{n!}{5!(n-3)!}",
          ],
        },
        {
          id: "3d",
          question: "\\frac{n(n-1)(n-2)(n-3)(n-4)}{3 \\times 2 \\times 1}",
          steps: [
            "\\text{Denominator is } 3!.",
            "\\text{Extend the numerator down to 1 to form } n! \\text{ by dividing by } (n-5)!.",
            "\\frac{n(n-1)(n-2)(n-3)(n-4)}{3!} = \\frac{\\frac{n!}{(n-5)!}}{3!}",
            "= \\frac{n!}{3!(n-5)!}",
          ],
        },
      ],
    },
  ],
};

export default exercise101Solutions;
