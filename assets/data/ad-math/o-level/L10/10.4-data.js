/**
 * 10.4-data.js
 * Data structure for Exercise 10.4 (Combinations)
 *
 * Note: String values are formatted with LaTeX syntax.
 */

const exercise104Solutions = {
  title: "10.4: Combinations",
  subtitle: "Selections where order does not matter",
  description:
    "Learn how to calculate the number of ways to select items from a group using the combination formula. This lesson covers basic combinations, multi-category selections, selections with constraints (like 'at least' or 'no more than'), and complementary counting methods.",

  sections: [
    {
      sectionNumber: 1,
      instruction:
        "Without using a calculator, find the value of each of the following, and then use the ^nC_r key on your calculator to check your answers.",
      problems: [
        {
          id: "1a",
          question: "{}^5C_1",
          steps: [
            "\\text{Formula: } {}^nC_r = \\frac{n!}{r!(n-r)!}",
            "{}^5C_1 = \\frac{5!}{1!(5-1)!} = \\frac{5!}{1!4!}",
            "= 5",
          ],
        },
        {
          id: "1b",
          question: "{}^6C_3",
          steps: [
            "{}^6C_3 = \\frac{6!}{3!(6-3)!} = \\frac{6!}{3!3!}",
            "= \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1}",
            "= 20",
          ],
        },
        {
          id: "1c",
          question: "{}^4C_4",
          steps: [
            "{}^4C_4 = \\frac{4!}{4!(4-4)!} = \\frac{4!}{4!0!}",
            "\\text{Since } 0! = 1, \\text{ this is } 1.",
          ],
        },
        {
          id: "1d",
          question: "{}^8C_4",
          steps: [
            "{}^8C_4 = \\frac{8!}{4!4!}",
            "= \\frac{8 \\times 7 \\times 6 \\times 5}{4 \\times 3 \\times 2 \\times 1}",
            "= 70",
          ],
        },
        {
          id: "1e",
          question: "{}^5C_5",
          steps: ["{}^5C_5 = \\frac{5!}{5!0!}", "= 1"],
        },
        {
          id: "1f",
          question: "{}^7C_4",
          steps: [
            "{}^7C_4 = \\frac{7!}{4!3!}",
            "= \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1}",
            "= 35",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction: "Show that {}^8C_3 = {}^8C_5.",
      problems: [
        {
          id: "2",
          question: "\\text{Prove } {}^8C_3 = {}^8C_5",
          steps: [
            "\\text{LHS} = {}^8C_3 = \\frac{8!}{3!5!}",
            "\\text{RHS} = {}^8C_5 = \\frac{8!}{5!3!}",
            "\\text{Since } 3!5! = 5!3!, \\text{ the expressions are identical.}",
            "\\text{Therefore, } {}^8C_3 = {}^8C_5 \\text{ (This illustrates the property } {}^nC_r = {}^nC_{n-r}\\text{).}",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction: "How many different ways are there of selecting:",
      problems: [
        {
          id: "3a",
          question: "3 \\text{ photographs from 10 photographs}",
          steps: [
            "\\text{Order does not matter, so we use combinations.}",
            "^{10}C_3 = \\frac{10!}{3!7!}",
            "= \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1}",
            "= 120",
          ],
        },
        {
          id: "3b",
          question: "5 \\text{ books from 7 books}",
          steps: [
            "^{7}C_5 = \\frac{7!}{5!2!}",
            "= \\frac{7 \\times 6}{2 \\times 1}",
            "= 21",
          ],
        },
        {
          id: "3c",
          question: "\\text{a team of 11 footballers from 14 footballers}",
          steps: [
            "^{14}C_{11} = ^{14}C_3 \\quad (\\text{since } {}^nC_r = {}^nC_{n-r}\\text{)}",
            "= \\frac{14 \\times 13 \\times 12}{3 \\times 2 \\times 1}",
            "= 364",
          ],
        },
      ],
    },
    {
      sectionNumber: 4,
      instruction:
        "How many different combinations of 3 letters can be chosen from the letters P, Q, R, S, T?",
      problems: [
        {
          id: "4",
          question: "{}^5C_3",
          steps: [
            "\\text{Choose 3 from 5 distinct letters.}",
            "^{5}C_3 = \\frac{5!}{3!2!} = \\frac{5 \\times 4}{2 \\times 1}",
            "= 10",
          ],
        },
      ],
    },
    {
      sectionNumber: 5,
      instruction:
        "The diagram shows 2 different boxes, A and B. 8 different toys are to be placed in the boxes. Find the number of ways in which the 8 toys can be placed in the boxes so that 5 toys are in box A and 3 toys are in box B.",
      problems: [
        {
          id: "5",
          question: "\\text{Placing 5 in A and 3 in B}",
          steps: [
            "\\text{We simply need to choose which 5 toys go into box A. The remaining 3 will automatically go to box B.}",
            "\\text{Number of ways} = {}^8C_5",
            "= \\frac{8!}{5!3!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}",
            "= 56",
          ],
        },
      ],
    },
    {
      sectionNumber: 6,
      instruction:
        "4 pencils and 3 pens are to be selected from a collection of 8 pencils and 5 pens. Find the number of different selections that can be made.",
      problems: [
        {
          id: "6",
          question:
            "\\text{Selecting } 4 \\text{ pencils from } 8 \\text{ and } 3 \\text{ pens from } 5",
          steps: [
            "\\text{Choose 4 pencils from 8: } {}^8C_4",
            "\\text{Choose 3 pens from 5: } {}^5C_3",
            "\\text{Multiply the independent choices:}",
            "^{8}C_4 \\times {}^5C_3 = 70 \\times 10",
            "= 700",
          ],
        },
      ],
    },
    {
      sectionNumber: 7,
      instruction:
        "Four of the letters of the word PAINTBRUSH are selected at random. Find the number of different combinations if:",
      problems: [
        {
          id: "7a",
          question: "\\text{there is no restriction on the letters selected}",
          steps: [
            "\\text{PAINTBRUSH has 10 distinct letters.}",
            "\\text{Choose 4 from 10: } {}^{10}C_4",
            "= \\frac{10!}{4!6!} = 210",
          ],
        },
        {
          id: "7b",
          question: "\\text{the letter T must be selected}",
          steps: [
            "\\text{Fix T as one of the choices.}",
            "\\text{We need to choose the remaining 3 letters from the other 9 letters.}",
            "^{9}C_3 = \\frac{9!}{3!6!} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1}",
            "= 84",
          ],
        },
      ],
    },
    {
      sectionNumber: 8,
      instruction:
        "A test consists of 30 questions. Each answer is either correct or incorrect. Find the number of different ways in which it is possible to answer:",
      problems: [
        {
          id: "8a",
          question: "\\text{exactly 10 questions correctly}",
          steps: [
            "\\text{We need to choose which 10 questions (out of 30) are answered correctly.}",
            "^{30}C_{10} = 30045015",
          ],
        },
        {
          id: "8b",
          question: "\\text{exactly 25 questions correctly}",
          steps: [
            "\\text{We need to choose which 25 questions are answered correctly.}",
            "^{30}C_{25} = ^{30}C_5 \\quad (\\text{choosing 25 correct is the same as choosing 5 incorrect})",
            "= \\frac{30 \\times 29 \\times 28 \\times 27 \\times 26}{5 \\times 4 \\times 3 \\times 2 \\times 1}",
            "= 142506",
          ],
        },
      ],
    },
    {
      sectionNumber: 9,
      instruction:
        "An athletics club has 10 long distance runners, 8 sprinters and 5 jumpers. A team of 3 long distance runners, 5 sprinters and 2 jumpers is to be selected. Find the number of ways in which the team can be selected.",
      problems: [
        {
          id: "9",
          question: "\\text{Multi-category selection}",
          steps: [
            "\\text{Choose 3 runners from 10: } {}^{10}C_3 = 120",
            "\\text{Choose 5 sprinters from 8: } {}^8C_5 = 56",
            "\\text{Choose 2 jumpers from 5: } {}^5C_2 = 10",
            "\\text{Multiply the choices together:}",
            "120 \\times 56 \\times 10 = 67200",
          ],
        },
      ],
    },
    {
      sectionNumber: 10,
      instruction:
        "A team of 5 members is to be chosen from 5 men and 3 women. Find the number of different teams that can be chosen:",
      problems: [
        {
          id: "10a",
          question: "\\text{if there are no restrictions}",
          steps: [
            "\\text{Choose 5 from the total 8 people.}",
            "^{8}C_5 = {}^8C_3",
            "= 56",
          ],
        },
        {
          id: "10b",
          question: "\\text{that consist of 3 men and 2 women}",
          steps: [
            "\\text{Choose 3 men from 5: } {}^5C_3 = 10",
            "\\text{Choose 2 women from 3: } {}^3C_2 = 3",
            "\\text{Total} = 10 \\times 3 = 30",
          ],
        },
        {
          id: "10c",
          question: "\\text{that consist of no more than 1 woman}",
          steps: [
            "\\text{This means exactly 0 women OR exactly 1 woman.}",
            "\\text{Case 1 (0 women, 5 men): } {}^5C_5 \\times {}^3C_0 = 1 \\times 1 = 1",
            "\\text{Case 2 (1 woman, 4 men): } {}^5C_4 \\times {}^3C_1 = 5 \\times 3 = 15",
            "\\text{Total} = 1 + 15 = 16",
          ],
        },
      ],
    },
    {
      sectionNumber: 11,
      instruction:
        "A committee of 5 people is to be chosen from 6 women and 7 men. Find the number of different committees that can be chosen:",
      problems: [
        {
          id: "11a",
          question: "\\text{if there are no restrictions}",
          steps: [
            "\\text{Choose 5 from the total 13 people.}",
            "^{13}C_5 = \\frac{13!}{5!8!}",
            "= 1287",
          ],
        },
        {
          id: "11b",
          question: "\\text{if there are more men than women}",
          steps: [
            "\\text{Possible compositions (Men, Women): (5,0), (4,1), (3,2).}",
            "\\text{Case (5,0): } {}^7C_5 \\times {}^6C_0 = 21 \\times 1 = 21",
            "\\text{Case (4,1): } {}^7C_4 \\times {}^6C_1 = 35 \\times 6 = 210",
            "\\text{Case (3,2): } {}^7C_3 \\times {}^6C_2 = 35 \\times 15 = 525",
            "\\text{Total} = 21 + 210 + 525 = 756",
          ],
        },
      ],
    },
    {
      sectionNumber: 12,
      instruction:
        "A committee of 6 people is to be chosen from 6 men and 7 women. The committee must contain at least 1 man. Find the number of different committees that can be formed.",
      problems: [
        {
          id: "12",
          question: "\\text{At least 1 man}",
          steps: [
            "\\text{Use complementary counting: } \\text{Total} - \\text{Committees with 0 men.}",
            "\\text{Total possible committees (choose 6 from 13): } {}^{13}C_6 = 1716",
            "\\text{Committees with 0 men (choose 6 women from 7): } {}^7C_6 = 7",
            "\\text{Committees with at least 1 man} = 1716 - 7 = 1709",
          ],
        },
      ],
    },
    {
      sectionNumber: 13,
      instruction:
        "A school committee of 5 people is to be selected from a group of 4 teachers and 7 students. Find the number of different ways that the committee can be selected if:",
      problems: [
        {
          id: "13a",
          question: "\\text{there are no restrictions}",
          steps: [
            "\\text{Choose 5 from the total 11 people.}",
            "^{11}C_5 = \\frac{11!}{5!6!}",
            "= 462",
          ],
        },
        {
          id: "13b",
          question:
            "\\text{there must be at least 1 teacher and there must be more students than teachers}",
          steps: [
            "\\text{Since the committee has 5 people, and students > teachers, possible (Student, Teacher) splits are (3,2), (4,1), (5,0).}",
            "\\text{The condition 'at least 1 teacher' eliminates (5,0).}",
            "\\text{Case (3 Students, 2 Teachers): } {}^7C_3 \\times {}^4C_2 = 35 \\times 6 = 210",
            "\\text{Case (4 Students, 1 Teacher): } {}^7C_4 \\times {}^4C_1 = 35 \\times 4 = 140",
            "\\text{Total} = 210 + 140 = 350",
          ],
        },
      ],
    },
    {
      sectionNumber: 14,
      instruction:
        "A test consists of 10 different questions. 4 of the questions are on trigonometry and 6 questions are on algebra. Students are asked to answer 8 questions. Find the number of ways in which students can select 8 questions if there are:",
      problems: [
        {
          id: "14a",
          question: "\\text{no restrictions}",
          steps: [
            "\\text{Choose 8 from the total 10 questions.}",
            "^{10}C_8 = {}^{10}C_2",
            "= \\frac{10 \\times 9}{2} = 45",
          ],
        },
        {
          id: "14b",
          question: "\\text{at least 4 algebra questions}",
          steps: [
            "\\text{Total questions = 8. Number of Algebra (A) questions must be } \\ge 4. \\text{ Max A = 6.}",
            "\\text{Possible (Algebra, Trig) splits: (4,4), (5,3), (6,2).}",
            "\\text{Case (4,4): } {}^6C_4 \\times {}^4C_4 = 15 \\times 1 = 15",
            "\\text{Case (5,3): } {}^6C_5 \\times {}^4C_3 = 6 \\times 4 = 24",
            "\\text{Case (6,2): } {}^6C_6 \\times {}^4C_2 = 1 \\times 6 = 6",
            "\\text{Total} = 15 + 24 + 6 = 45",
          ],
        },
      ],
    },
    {
      sectionNumber: 15,
      instruction:
        "Rafiu has downloaded 10 movies to his smartphone. 4 of the movies are comedies, 3 are thrillers and 3 are science fiction. He is going to select 5 of these movies. Find the number of ways he can make his selection if:",
      problems: [
        {
          id: "15a",
          question: "\\text{there are no restrictions}",
          steps: [
            "\\text{Choose 5 movies from the total 10.}",
            "^{10}C_5 = \\frac{10!}{5!5!}",
            "= 252",
          ],
        },
        {
          id: "15b",
          question:
            "\\text{his selection must contain his favourite thriller movie}",
          steps: [
            "\\text{Fix the favourite thriller (1 choice).}",
            "\\text{Choose the remaining 4 movies from the remaining 9 movies.}",
            "^{9}C_4 = \\frac{9!}{4!5!}",
            "= 126",
          ],
        },
        {
          id: "15c",
          question:
            "\\text{his selection must contain at least 3 comedy movies}",
          steps: [
            "\\text{Possible splits: (3 comedies, 2 others) OR (4 comedies, 1 other).}",
            "\\text{Case 1 (3C, 2 Others): } {}^4C_3 \\times {}^6C_2 = 4 \\times 15 = 60",
            "\\text{Case 2 (4C, 1 Other): } {}^4C_4 \\times {}^6C_1 = 1 \\times 6 = 6",
            "\\text{Total} = 60 + 6 = 66",
          ],
        },
      ],
    },
    {
      sectionNumber: 16,
      instruction:
        "In a group of 15 entertainers, there are 6 singers, 5 guitarists and 4 comedians. A show is to be given by 6 of these entertainers. In the show, there must be at least 1 guitarist and 1 comedian. There must also be more singers than guitarists. Find the number of ways that the 6 entertainers can be selected.",
      problems: [
        {
          id: "16",
          question: "\\text{Complex conditions}",
          steps: [
            "\\text{Let S = Singers, G = Guitarists, C = Comedians. Total = 6.}",
            "\\text{Conditions: } G \\ge 1, C \\ge 1, S > G.",
            "\\text{List valid combinations (S, G, C) and calculate:}",
            "\\text{If C=1: } S+G=5 \\implies (3,2,1) \\text{ or } (4,1,1).",
            "\\quad (3,2,1): {}^6C_3 \\times {}^5C_2 \\times {}^4C_1 = 20 \\times 10 \\times 4 = 800",
            "\\quad (4,1,1): {}^6C_4 \\times {}^5C_1 \\times {}^4C_1 = 15 \\times 5 \\times 4 = 300",
            "\\text{If C=2: } S+G=4 \\implies (3,1,2).",
            "\\quad (3,1,2): {}^6C_3 \\times {}^5C_1 \\times {}^4C_2 = 20 \\times 5 \\times 6 = 600",
            "\\text{If C=3: } S+G=3 \\implies (2,1,3).",
            "\\quad (2,1,3): {}^6C_2 \\times {}^5C_1 \\times {}^4C_3 = 15 \\times 5 \\times 4 = 300",
            "\\text{Total} = 800 + 300 + 600 + 300 = 2000",
          ],
        },
      ],
    },
    {
      sectionNumber: 17,
      instruction:
        "Given that 45 × {}^{n}C_4 = (n + 1) × {}^{n+1}C_5, find the value of n.",
      problems: [
        {
          id: "17",
          question: "\\text{Solve for } n",
          steps: [
            "\\text{Recall the identity: } {}^{n+1}C_5 = \\frac{n+1}{5} \\times {}^nC_4",
            "\\text{Substitute into the equation:}",
            "45 \\times {}^nC_4 = (n+1) \\times \\left( \\frac{n+1}{5} \\times {}^nC_4 \\right)",
            "\\text{Divide both sides by } {}^nC_4 \\text{ (assuming } n \\ge 4\\text{):}",
            "45 = \\frac{(n+1)^2}{5}",
            "225 = (n+1)^2",
            "\\text{Since } n > 0, \\text{ take the positive square root:}",
            "n+1 = 15",
            "n = 14",
          ],
        },
      ],
    },
  ],
};

export default exercise104Solutions;
