/**
 * 10.2-data.js
 * Data structure for Exercise 10.2 (Permutations and Arrangements)
 *
 * Note: String values are formatted with LaTeX syntax.
 */

const exercise102Solutions = {
  title: "10.2: Permutations and Arrangements",
  subtitle: "Solving arrangement problems with restrictions using factorials",
  description:
    "Learn how to calculate the number of ways to arrange items in a row. This lesson covers basic permutations, arrangements with repeated letters, restrictions on positions (like 'even' or 'greater than'), and the 'block' method for keeping items together.",

  sections: [
    {
      sectionNumber: 1,
      instruction: "Find the number of different arrangements of",
      problems: [
        {
          id: "1a",
          question: "4 \\text{ people sitting in a row on a bench}",
          steps: [
            "\\text{We need to arrange 4 distinct people in 4 positions.}",
            "\\text{Number of arrangements} = 4!",
            "= 4 \\times 3 \\times 2 \\times 1 = 24",
          ],
        },
        {
          id: "1b",
          question: "7 \\text{ different books on a shelf}",
          steps: [
            "\\text{We need to arrange 7 distinct books in 7 positions.}",
            "\\text{Number of arrangements} = 7!",
            "= 5040",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction:
        "Find the number of different arrangements of letters in each of the following words.",
      problems: [
        {
          id: "2a",
          question: "\\text{TIGER}",
          steps: [
            "\\text{The word TIGER has 5 distinct letters.}",
            "\\text{Number of arrangements} = 5!",
            "= 120",
          ],
        },
        {
          id: "2b",
          question: "\\text{OLYMPICS}",
          steps: [
            "\\text{The word OLYMPICS has 8 distinct letters.}",
            "\\text{Number of arrangements} = 8!",
            "= 40320",
          ],
        },
        {
          id: "2c",
          question: "\\text{PAINTBRUSH}",
          steps: [
            "\\text{The word PAINTBRUSH has 10 distinct letters.}",
            "\\text{Number of arrangements} = 10!",
            "= 3628800",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction: "Four-digit numbers using 3, 5, 7 and 8 without repetition.",
      problems: [
        {
          id: "3a",
          question:
            "\\text{Find the number of different four-digit numbers that can be formed.}",
          steps: [
            "\\text{We are arranging 4 distinct digits into 4 slots.}",
            "\\text{Number of ways} = 4!",
            "= 24",
          ],
        },
        {
          id: "3b-i",
          question: "\\text{How many of these four-digit numbers are even?}",
          steps: [
            "\\text{For the number to be even, the last digit must be 8 (the only even digit).}",
            "\\text{Last digit: 1 choice (8).}",
            "\\text{The remaining 3 digits can be arranged in the first 3 slots in } 3! \\text{ ways.}",
            "\\text{Total} = 1 \\times 3! = 6",
          ],
        },
        {
          id: "3b-ii",
          question:
            "\\text{How many of these four-digit numbers are greater than 8000?}",
          steps: [
            "\\text{For the number to be greater than 8000, the first digit must be 8.}",
            "\\text{First digit: 1 choice (8).}",
            "\\text{The remaining 3 digits can be arranged in the last 3 slots in } 3! \\text{ ways.}",
            "\\text{Total} = 1 \\times 3! = 6",
          ],
        },
      ],
    },
    {
      sectionNumber: 4,
      instruction:
        "A shelf holds 7 different books. Four of the books are cookery books and three of the books are history books.",
      problems: [
        {
          id: "4a",
          question:
            "\\text{Find the number of ways the books can be arranged if there are no restrictions.}",
          steps: [
            "\\text{We are arranging 7 distinct books in 7 slots.}",
            "\\text{Number of ways} = 7!",
            "= 5040",
          ],
        },
        {
          id: "4b",
          question:
            "\\text{Find the number of ways the books can be arranged if the 4 cookery books are kept together.}",
          steps: [
            "\\text{Treat the 4 cookery books as a single 'block'.}",
            "\\text{Now we have 1 block + 3 history books = 4 items to arrange.}",
            "\\text{These 4 items can be arranged in } 4! \\text{ ways.}",
            "\\text{Within the 'block', the 4 cookery books can be arranged in } 4! \\text{ ways.}",
            "\\text{Total arrangements} = 4! \\times 4! = 24 \\times 24 = 576",
          ],
        },
      ],
    },
    {
      sectionNumber: 5,
      instruction:
        "Five-digit numbers are to be formed using the digits 2, 3, 4, 5 and 6. Each digit may be used only once in any number.",
      problems: [
        {
          id: "5a",
          question:
            "\\text{Find how many different five-digit numbers can be formed.}",
          steps: [
            "\\text{We are arranging 5 distinct digits in 5 slots.}",
            "\\text{Number of ways} = 5!",
            "= 120",
          ],
        },
        {
          id: "5b",
          question: "\\text{How many of these five-digit numbers are even?}",
          steps: [
            "\\text{For the number to be even, the last digit must be 2, 4, or 6.}",
            "\\text{Last digit: 3 choices.}",
            "\\text{The remaining 4 digits can be arranged in } 4! \\text{ ways.}",
            "\\text{Total} = 3 \\times 4! = 3 \\times 24 = 72",
          ],
        },
        {
          id: "5c",
          question:
            "\\text{How many of these five-digit numbers are greater than 40000?}",
          steps: [
            "\\text{For the number to be greater than 40000, the first digit must be 4, 5, or 6.}",
            "\\text{First digit: 3 choices.}",
            "\\text{The remaining 4 digits can be arranged in } 4! \\text{ ways.}",
            "\\text{Total} = 3 \\times 4! = 3 \\times 24 = 72",
          ],
        },
        {
          id: "5d",
          question:
            "\\text{How many of these five-digit numbers are even and greater than 40000?}",
          steps: [
            "\\text{We must consider the first and last digits together.}",
            "\\text{Case 1: First digit is 4. Last digit must be 2 or 6 (2 choices).}",
            "\\quad \\text{Middle 3 digits: } 3! = 6 \\text{ ways. Total} = 1 \\times 2 \\times 6 = 12.",
            "\\text{Case 2: First digit is 5. Last digit can be 2, 4, or 6 (3 choices).}",
            "\\quad \\text{Middle 3 digits: } 3! = 6 \\text{ ways. Total} = 1 \\times 3 \\times 6 = 18.",
            "\\text{Case 3: First digit is 6. Last digit must be 2 or 4 (2 choices).}",
            "\\quad \\text{Middle 3 digits: } 3! = 6 \\text{ ways. Total} = 1 \\times 2 \\times 6 = 12.",
            "\\text{Total} = 12 + 18 + 12 = 42",
          ],
        },
      ],
    },
    {
      sectionNumber: 6,
      instruction:
        "Three girls and two boys are to be seated in a row. Find the number of different ways that this can be done if",
      problems: [
        {
          id: "6a",
          question: "\\text{the girls and boys sit alternately}",
          steps: [
            "\\text{For 3 girls and 2 boys to alternate, the pattern must be G B G B G.}",
            "\\text{Arrange the 3 girls in the 3 'G' slots: } 3! = 6 \\text{ ways.}",
            "\\text{Arrange the 2 boys in the 2 'B' slots: } 2! = 2 \\text{ ways.}",
            "\\text{Total} = 6 \\times 2 = 12",
          ],
        },
        {
          id: "6b",
          question: "\\text{a girl sits at each end of the row}",
          steps: [
            "\\text{Pattern: G _ _ _ G}",
            "\\text{Choose 2 girls for the ends from the 3 available: } ^3P_2 = 3 \\times 2 = 6 \\text{ ways.}",
            "\\text{The remaining 3 people (1 girl, 2 boys) can be arranged in the middle 3 slots in } 3! = 6 \\text{ ways.}",
            "\\text{Total} = 6 \\times 6 = 36",
          ],
        },
        {
          id: "6c",
          question: "\\text{the girls sit together and the boys sit together}",
          steps: [
            "\\text{Treat the 3 girls as one block and the 2 boys as one block.}",
            "\\text{Arrange the 2 blocks: } 2! = 2 \\text{ ways (GB or BG).}",
            "\\text{Arrange the girls within their block: } 3! = 6 \\text{ ways.}",
            "\\text{Arrange the boys within their block: } 2! = 2 \\text{ ways.}",
            "\\text{Total} = 2 \\times 6 \\times 2 = 24",
          ],
        },
      ],
    },
    {
      sectionNumber: 7,
      instruction: "Based on the word ORANGE:",
      problems: [
        {
          id: "7a",
          question:
            "\\text{Find the number of different arrangements of the letters in the word ORANGE.}",
          steps: [
            "\\text{ORANGE has 6 distinct letters.}",
            "\\text{Number of arrangements} = 6!",
            "= 720",
          ],
        },
        {
          id: "7b",
          question:
            "\\text{Find the number of arrangements that begin with the letter O.}",
          steps: [
            "\\text{Fix O in the first position.}",
            "\\text{Arrange the remaining 5 letters in the remaining 5 positions: } 5!",
            "= 120",
          ],
        },
        {
          id: "7c",
          question:
            "\\text{Find the number of arrangements that have the letter O at one end and the letter E at the other end.}",
          steps: [
            "\\text{The ends can be (O _ _ _ _ E) or (E _ _ _ _ O): 2 ways.}",
            "\\text{Arrange the remaining 4 letters in the middle 4 positions: } 4! = 24 \\text{ ways.}",
            "\\text{Total} = 2 \\times 24 = 48",
          ],
        },
      ],
    },
    {
      sectionNumber: 8,
      instruction:
        "Six-digit numbers are made using digits 0, 1, 2, 3, 4 and 5 without repetition. Assume that a number cannot begin with 0.",
      problems: [
        {
          id: "8a",
          question:
            "\\text{Find the number of different six-digit numbers which can be made.}",
          steps: [
            "\\text{First digit cannot be 0 (5 choices: 1, 2, 3, 4, 5).}",
            "\\text{The remaining 5 digits are chosen from the remaining 5 options and arranged: } 5! \\text{ ways.}",
            "\\text{Total} = 5 \\times 5! = 5 \\times 120 = 600",
          ],
        },
        {
          id: "8b",
          question:
            "\\text{How many of the six-digit numbers in part a are even?}",
          steps: [
            "\\text{Last digit must be 0, 2, or 4. We must split into cases based on the last digit.}",
            "\\text{Case 1: Last digit is 0.}",
            "\\quad \\text{First digit has 5 choices (1-5). Remaining 4 digits: } 4! \\text{ ways. Total} = 5 \\times 24 = 120.",
            "\\text{Case 2: Last digit is 2 or 4 (2 choices).}",
            "\\quad \\text{First digit cannot be 0 or the last digit (4 choices). Remaining 4 digits: } 4! \\text{ ways. Total} = 2 \\times 4 \\times 24 = 192.",
            "\\text{Total even numbers} = 120 + 192 = 312",
          ],
        },
      ],
    },
    {
      sectionNumber: 9,
      instruction:
        "Six girls and two boys are to be seated in a row. Find the number of ways that this can be done if the two boys must have exactly four girls seated between them.",
      problems: [
        {
          id: "9",
          question:
            "\\text{Arrangement with exactly four girls between the boys}",
          steps: [
            "\\text{The boys must be separated by 4 girls, so the pattern is B G G G G B.}",
            "\\text{Since there are 8 seats total, the boys can occupy the following position pairs:}",
            "\\quad (1, 6), (2, 7), \\text{ or } (3, 8). \\text{ (3 possible patterns)}",
            "\\text{Arrange the 2 boys in their chosen 2 positions: } 2! = 2 \\text{ ways.}",
            "\\text{Arrange the 6 girls in the remaining 6 positions: } 6! = 720 \\text{ ways.}",
            "\\text{Total} = 3 \\times 2 \\times 720 = 4320",
          ],
        },
      ],
    },
  ],
};

export default exercise102Solutions;
