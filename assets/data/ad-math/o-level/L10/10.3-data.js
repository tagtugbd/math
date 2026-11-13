/**
 * 10.3-data.js
 * Data structure for Exercise 10.3 (Permutations)
 *
 * Note: String values are formatted with LaTeX syntax.
 */

const exercise103Solutions = {
  title: "10.3: Permutations",
  subtitle: "Arrangements where order matters",
  description:
    "Learn how to calculate the number of ordered arrangements using the permutation formula. This lesson covers standard permutations, arrangements with specific conditions (greater than, odd/even), and solving algebraic equations involving permutations.",

  sections: [
    {
      sectionNumber: 1,
      instruction:
        "Without using a calculator, find the value of each of the following. Use the ^nP_r key on your calculator to check your answers.",
      problems: [
        {
          id: "1a",
          question: "{}^8P_5",
          steps: [
            "\\text{Formula: } {}^nP_r = \\frac{n!}{(n-r)!}",
            "{}^8P_5 = \\frac{8!}{(8-5)!} = \\frac{8!}{3!}",
            "= 8 \\times 7 \\times 6 \\times 5 \\times 4",
            "= 6720",
          ],
        },
        {
          id: "1b",
          question: "{}^6P_4",
          steps: [
            "{}^6P_4 = \\frac{6!}{(6-4)!} = \\frac{6!}{2!}",
            "= 6 \\times 5 \\times 4 \\times 3",
            "= 360",
          ],
        },
        {
          id: "1c",
          question: "{}^{11}P_8",
          steps: [
            "{}^{11}P_8 = \\frac{11!}{(11-8)!} = \\frac{11!}{3!}",
            "= 11 \\times 10 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 \\times 4",
            "= 6652800",
          ],
        },
        {
          id: "1d",
          question: "{}^7P_7",
          steps: [
            "{}^7P_7 = \\frac{7!}{(7-7)!} = \\frac{7!}{0!}",
            "\\text{Since } 0! = 1, \\text{ we have:}",
            "= 7!",
            "= 5040",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction:
        "Find the number of different ways that 4 books chosen from 6 books are arranged on a shelf.",
      problems: [
        {
          id: "2",
          question: "\\text{Arranging 4 books from 6}",
          steps: [
            "\\text{We need to choose 4 books and arrange them in order.}",
            "\\text{Number of ways} = {}^6P_4",
            "= \\frac{6!}{(6-4)!} = \\frac{6!}{2!}",
            "= 6 \\times 5 \\times 4 \\times 3 = 360",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction:
        "How many different five-digit numbers can be formed from the digits 1, 2, 3, 4, 5, 6, 7, 8, 9 if no digit can be repeated?",
      problems: [
        {
          id: "3",
          question: "\\text{Five-digit numbers from 9 digits}",
          steps: [
            "\\text{We are arranging 5 digits chosen from 9 distinct digits.}",
            "\\text{Number of ways} = {}^9P_5",
            "= \\frac{9!}{(9-5)!} = \\frac{9!}{4!}",
            "= 9 \\times 8 \\times 7 \\times 6 \\times 5",
            "= 15120",
          ],
        },
      ],
    },
    {
      sectionNumber: 4,
      instruction:
        "There are 8 competitors in a long jump competition. In how many different ways can the first, second and third prizes be awarded?",
      problems: [
        {
          id: "4",
          question: "\\text{Awarding 1st, 2nd, 3rd from 8 competitors}",
          steps: [
            "\\text{Order matters (1st is different from 2nd, etc.).}",
            "\\text{We are choosing and arranging 3 people from 8.}",
            "\\text{Number of ways} = {}^8P_3",
            "= \\frac{8!}{(8-3)!} = \\frac{8!}{5!}",
            "= 8 \\times 7 \\times 6",
            "= 336",
          ],
        },
      ],
    },
    {
      sectionNumber: 5,
      instruction:
        "Find how many different four-digit numbers greater than 4000 that can be formed using the digits 1, 2, 3, 4, 5, 6 and 7 if no digit can be used more than once.",
      problems: [
        {
          id: "5",
          question: "\\text{Four-digit numbers } > 4000",
          steps: [
            "\\text{Digits available: } \\{1, 2, 3, 4, 5, 6, 7\\} \\text{ (7 digits).}",
            "\\text{For the number to be } > 4000\\text{, the first digit must be 4, 5, 6, or 7.}",
            "\\text{First digit: 4 choices.}",
            "\\text{The remaining 3 digits are chosen from the remaining 6 digits and arranged: } {}^6P_3 \\text{ ways.}",
            "\\text{Total ways} = 4 \\times {}^6P_3",
            "= 4 \\times (6 \\times 5 \\times 4) = 4 \\times 120",
            "= 480",
          ],
        },
      ],
    },
    {
      sectionNumber: 6,
      instruction:
        "Find how many even numbers between 5000 and 6000 can be formed from the digits 2, 4, 5, 7, 8, if no digit can be used more than once.",
      problems: [
        {
          id: "6",
          question: "\\text{Even numbers between 5000 and 6000}",
          steps: [
            "\\text{Digits available: } \\{2, 4, 5, 7, 8\\} \\text{ (5 digits).}",
            "\\text{The number must be between 5000 and 6000, so the first digit must be 5. (1 choice)}",
            "\\text{The number must be even, so the last digit must be 2, 4, or 8. (3 choices)}",
            "\\text{The middle 2 digits are chosen from the remaining 3 digits and arranged: } {}^3P_2 \\text{ ways.}",
            "\\text{Total ways} = 1 \\times 3 \\times {}^3P_2",
            "= 3 \\times (3 \\times 2) = 3 \\times 6",
            "= 18",
          ],
        },
      ],
    },
    {
      sectionNumber: 7,
      instruction:
        "A four-digit number is formed using four of the eight digits 1, 2, 3, 4, 5, 6, 7 and 8. No digit can be used more than once. Find how many different four-digit numbers can be formed if:",
      problems: [
        {
          id: "7a",
          question: "\\text{there are no restrictions}",
          steps: [
            "\\text{Choose and arrange 4 digits from 8.}",
            "{}^8P_4 = \\frac{8!}{4!} = 8 \\times 7 \\times 6 \\times 5",
            "= 1680",
          ],
        },
        {
          id: "7b",
          question: "\\text{the number is odd}",
          steps: [
            "\\text{Odd digits available: } \\{1, 3, 5, 7\\} \\text{ (4 choices).}",
            "\\text{The last digit must be one of these 4.}",
            "\\text{The remaining 3 digits are chosen from the remaining 7 digits and arranged: } {}^7P_3 \\text{ ways.}",
            "\\text{Total ways} = 4 \\times {}^7P_3",
            "= 4 \\times (7 \\times 6 \\times 5) = 4 \\times 210",
            "= 840",
          ],
        },
        {
          id: "7c",
          question: "\\text{the number is greater than 6000}",
          steps: [
            "\\text{The first digit must be 6, 7, or 8. (3 choices)}",
            "\\text{The remaining 3 digits are chosen from the remaining 7 digits and arranged: } {}^7P_3 \\text{ ways.}",
            "\\text{Total ways} = 3 \\times {}^7P_3",
            "= 3 \\times 210",
            "= 630",
          ],
        },
        {
          id: "7d",
          question: "\\text{the number is odd and greater than 6000}",
          steps: [
            "\\text{First digit must be 6, 7, or 8. Last digit must be 1, 3, 5, or 7. We split into cases.}",
            "\\text{Case 1: First digit is 6 or 8 (2 choices).}",
            "\\quad \\text{Last digit can be any of the 4 odd digits.}",
            "\\quad \\text{Middle 2 digits: } {}^6P_2 = 6 \\times 5 = 30 \\text{ ways.}",
            "\\quad \\text{Total for Case 1} = 2 \\times 4 \\times 30 = 240.",
            "\\text{Case 2: First digit is 7 (1 choice).}",
            "\\quad \\text{Last digit must be an odd digit EXCEPT 7 (3 choices).}",
            "\\quad \\text{Middle 2 digits: } {}^6P_2 = 30 \\text{ ways.}",
            "\\quad \\text{Total for Case 2} = 1 \\times 3 \\times 30 = 90.",
            "\\text{Overall Total} = 240 + 90 = 330",
          ],
        },
      ],
    },
    {
      sectionNumber: 8,
      instruction:
        "Numbers are formed using the digits 3, 5, 6, 8 and 9. No digit can be used more than once. Find how many different:",
      problems: [
        {
          id: "8a",
          question: "\\text{three-digit numbers can be formed}",
          steps: [
            "\\text{Choose and arrange 3 digits from 5.}",
            "{}^5P_3 = \\frac{5!}{2!} = 5 \\times 4 \\times 3",
            "= 60",
          ],
        },
        {
          id: "8b",
          question: "\\text{numbers using three or more digits can be formed}",
          steps: [
            "\\text{Sum the possibilities for 3-digit, 4-digit, and 5-digit numbers.}",
            "\\text{3-digit numbers: } {}^5P_3 = 60",
            "\\text{4-digit numbers: } {}^5P_4 = 5 \\times 4 \\times 3 \\times 2 = 120",
            "\\text{5-digit numbers: } {}^5P_5 = 5! = 120",
            "\\text{Total} = 60 + 120 + 120 = 300",
          ],
        },
      ],
    },
    {
      sectionNumber: 9,
      instruction:
        "Find how many different even four-digit numbers greater than 2000 can be formed using the digits 1, 2, 3, 4, 5, 6, 7, 8 if no digit may be used more than once.",
      problems: [
        {
          id: "9",
          question: "\\text{Even four-digit numbers } > 2000",
          steps: [
            "\\text{Digits: } \\{1, 2, 3, 4, 5, 6, 7, 8\\} \\text{ (8 digits).}",
            "\\text{Even means last digit is } \\{2, 4, 6, 8\\}.",
            "\\text{Greater than 2000 means first digit is } \\{2, 3, 4, 5, 6, 7, 8\\}.",
            "\\text{Case 1: First digit is 2.}",
            "\\quad \\text{Last digit cannot be 2 (3 choices: 4, 6, 8).}",
            "\\quad \\text{Middle 2 digits: } {}^6P_2 = 30 \\text{ ways.}",
            "\\quad \\text{Total} = 1 \\times 3 \\times 30 = 90.",
            "\\text{Case 2: First digit is not 2 (6 choices: 3, 4, 5, 6, 7, 8).}",
            "\\quad \\text{Last digit can be any even digit (4 choices).}",
            "\\quad \\text{Middle 2 digits: } {}^6P_2 = 30 \\text{ ways.}",
            "\\quad \\text{Total} = 6 \\times 4 \\times 30 = 720.",
            "\\text{Overall Total} = 90 + 720 = 810",
          ],
        },
      ],
    },
    {
      sectionNumber: 10,
      instruction: "Solve:",
      problems: [
        {
          id: "10a",
          question: "{}^nP_5 = 720",
          steps: [
            "\\frac{n!}{(n-5)!} = 720",
            "n(n-1)(n-2)(n-3)(n-4) = 720",
            "\\text{We need the product of 5 consecutive descending integers to equal 720.}",
            "\\text{Notice that } 6 \\times 5 \\times 4 \\times 3 \\times 2 = 720.",
            "\\text{Therefore, } n = 6.",
          ],
        },
        {
          id: "10b",
          question: "{}^nP_3 = 7n(n-1)",
          steps: [
            "\\frac{n!}{(n-3)!} = 7n(n-1)",
            "n(n-1)(n-2) = 7n(n-1)",
            "\\text{Since } n \\ge 3, \\text{ we can divide both sides by } n(n-1):",
            "n - 2 = 7",
            "n = 9",
          ],
        },
        {
          id: "10c",
          question: "\\frac{{}^nP_5}{{}^nP_4} = 3",
          steps: [
            "\\frac{\\frac{n!}{(n-5)!}}{\\frac{n!}{(n-4)!}} = 3",
            "\\frac{n!}{(n-5)!} \\times \\frac{(n-4)!}{n!} = 3",
            "\\frac{(n-4)!}{(n-5)!} = 3",
            "n - 4 = 3",
            "n = 7",
          ],
        },
      ],
    },
  ],
};

export default exercise103Solutions;
