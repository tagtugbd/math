const exercise96Solutions = {
  title: "9.6: Solving Trigonometric Equations",
  subtitle:
    "Finding angles using inverse functions, factorisation, and quadratic methods",
  description:
    "Master the techniques for solving trigonometric equations in degrees and radians. This lesson covers basic inverse trigonometric equations, compound angles, homogeneous equations (using the tangent identity), and quadratic equations in trigonometric functions within specific domains.",

  sections: [
    {
      sectionNumber: 1,
      instruction: "Solve each of these equations for 0° < x ≤ 360°.",
      problems: [
        {
          id: "1a",
          question: "\\sin x = 0.3",
          steps: [
            "x = \\sin^{-1}(0.3) \\approx 17.46^\\circ",
            "\\text{Since } \\sin x \\text{ is positive, solutions are in Q1 and Q2.}",
            "x_1 \\approx 17.46^\\circ",
            "x_2 = 180^\\circ - 17.46^\\circ = 162.54^\\circ",
          ],
        },
        {
          id: "1b",
          question: "\\cos x = 0.2",
          steps: [
            "x = \\cos^{-1}(0.2) \\approx 78.46^\\circ",
            "\\text{Since } \\cos x \\text{ is positive, solutions are in Q1 and Q4.}",
            "x_1 \\approx 78.46^\\circ",
            "x_2 = 360^\\circ - 78.46^\\circ = 281.54^\\circ",
          ],
        },
        {
          id: "1c",
          question: "\\tan x = 2",
          steps: [
            "x = \\tan^{-1}(2) \\approx 63.43^\\circ",
            "\\text{Since } \\tan x \\text{ is positive, solutions are in Q1 and Q3.}",
            "x_1 \\approx 63.43^\\circ",
            "x_2 = 180^\\circ + 63.43^\\circ = 243.43^\\circ",
          ],
        },
        {
          id: "1d",
          question: "\\sin x = -0.6",
          steps: [
            "\\text{Principal value: } x = \\sin^{-1}(-0.6) \\approx -36.87^\\circ",
            "\\text{Since } \\sin x \\text{ is negative, solutions are in Q3 and Q4.}",
            "x_1 = 180^\\circ - (-36.87^\\circ) = 216.87^\\circ",
            "x_2 = 360^\\circ + (-36.87^\\circ) = 323.13^\\circ",
          ],
        },
        {
          id: "1e",
          question: "\\tan x = -1.4",
          steps: [
            "\\text{Principal value: } x = \\tan^{-1}(-1.4) \\approx -54.46^\\circ",
            "\\text{Since } \\tan x \\text{ is negative, solutions are in Q2 and Q4.}",
            "x_1 = 180^\\circ - 54.46^\\circ = 125.54^\\circ",
            "x_2 = 360^\\circ - 54.46^\\circ = 305.54^\\circ",
          ],
        },
        {
          id: "1f",
          question: "\\sin x = -0.8",
          steps: [
            "\\text{Principal value: } x = \\sin^{-1}(-0.8) \\approx -53.13^\\circ",
            "\\text{Since } \\sin x \\text{ is negative, solutions are in Q3 and Q4.}",
            "x_1 = 180^\\circ + 53.13^\\circ = 233.13^\\circ",
            "x_2 = 360^\\circ - 53.13^\\circ = 306.87^\\circ",
          ],
        },
        {
          id: "1g",
          question: "4\\sin x - 3 = 0",
          steps: [
            "4\\sin x = 3 \\implies \\sin x = 0.75",
            "x = \\sin^{-1}(0.75) \\approx 48.59^\\circ",
            "\\text{Positive sine means Q1 and Q2.}",
            "x_1 \\approx 48.59^\\circ",
            "x_2 = 180^\\circ - 48.59^\\circ = 131.41^\\circ",
          ],
        },
        {
          id: "1h",
          question: "2\\cos x + 1 = 0",
          steps: [
            "2\\cos x = -1 \\implies \\cos x = -0.5",
            "x = \\cos^{-1}(-0.5) = 120^\\circ",
            "\\text{Negative cosine means Q2 and Q3.}",
            "x_1 = 120^\\circ",
            "x_2 = 360^\\circ - 120^\\circ = 240^\\circ",
          ],
        },
      ],
    },
    {
      sectionNumber: 2,
      instruction: "Solve each of these equations for 0 < x < 2π.",
      problems: [
        {
          id: "2a",
          question: "\\cos x = 0.5",
          steps: [
            "\\text{Reference angle: } \\cos^{-1}(0.5) = \\frac{\\pi}{3}",
            "\\text{Positive cosine means Q1 and Q4.}",
            "x_1 = \\frac{\\pi}{3}",
            "x_2 = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          ],
        },
        {
          id: "2b",
          question: "\\tan x = 0.2",
          steps: [
            "x = \\tan^{-1}(0.2) \\approx 0.197 \\text{ radians}",
            "\\text{Positive tangent means Q1 and Q3.}",
            "x_1 \\approx 0.197",
            "x_2 = \\pi + 0.197 \\approx 3.339",
          ],
        },
        {
          id: "2c",
          question: "\\sin x = 2",
          steps: [
            "\\text{The range of } \\sin x \\text{ is } [-1, 1].",
            "\\text{Since } 2 > 1, \\text{ there are no real solutions.}",
            "\\text{No solution.}",
          ],
        },
        {
          id: "2d",
          question: "\\tan x = -3",
          steps: [
            "\\text{Principal value: } x = \\tan^{-1}(-3) \\approx -1.249",
            "\\text{Negative tangent means Q2 and Q4.}",
            "x_1 = \\pi - 1.249 \\approx 1.893",
            "x_2 = 2\\pi - 1.249 \\approx 5.034",
          ],
        },
        {
          id: "2e",
          question: "\\sin x = -0.75",
          steps: [
            "\\text{Principal value: } x = \\sin^{-1}(-0.75) \\approx -0.848",
            "\\text{Negative sine means Q3 and Q4.}",
            "x_1 = \\pi + 0.848 \\approx 3.990",
            "x_2 = 2\\pi - 0.848 \\approx 5.435",
          ],
        },
        {
          id: "2f",
          question: "\\cos x = -0.55",
          steps: [
            "x = \\cos^{-1}(-0.55) \\approx 2.153",
            "\\text{Negative cosine means Q2 and Q3.}",
            "x_1 \\approx 2.153",
            "x_2 = 2\\pi - 2.153 \\approx 4.130",
          ],
        },
        {
          id: "2g",
          question: "4\\sin x = 1",
          steps: [
            "\\sin x = 0.25",
            "x = \\sin^{-1}(0.25) \\approx 0.253",
            "\\text{Positive sine means Q1 and Q2.}",
            "x_1 \\approx 0.253",
            "x_2 = \\pi - 0.253 \\approx 2.889",
          ],
        },
        {
          id: "2h",
          question: "5\\sin x + 2 = 0",
          steps: [
            "\\sin x = -0.4",
            "\\text{Principal value: } x = \\sin^{-1}(-0.4) \\approx -0.412",
            "\\text{Negative sine means Q3 and Q4.}",
            "x_1 = \\pi + 0.412 \\approx 3.553",
            "x_2 = 2\\pi - 0.412 \\approx 5.871",
          ],
        },
      ],
    },
    {
      sectionNumber: 3,
      instruction: "Solve each of these equations for 0° < x ≤ 180°.",
      problems: [
        {
          id: "3a",
          question: "\\sin 2x = 0.8",
          steps: [
            "\\text{Domain for } 2x \\text{ is } 0^\\circ < 2x \\le 360^\\circ.",
            "2x = \\sin^{-1}(0.8) \\approx 53.13^\\circ",
            "\\text{Positive sine means Q1 and Q2.}",
            "2x_1 \\approx 53.13^\\circ \\implies x_1 \\approx 26.57^\\circ",
            "2x_2 = 180^\\circ - 53.13^\\circ = 126.87^\\circ \\implies x_2 \\approx 63.43^\\circ",
          ],
        },
        {
          id: "3b",
          question: "\\cos 2x = -0.6",
          steps: [
            "\\text{Domain for } 2x \\text{ is } 0^\\circ < 2x \\le 360^\\circ.",
            "2x = \\cos^{-1}(-0.6) \\approx 126.87^\\circ",
            "\\text{Negative cosine means Q2 and Q3.}",
            "2x_1 = 126.87^\\circ \\implies x_1 \\approx 63.43^\\circ",
            "2x_2 = 360^\\circ - 126.87^\\circ = 233.13^\\circ \\implies x_2 \\approx 116.57^\\circ",
          ],
        },
        {
          id: "3c",
          question: "\\tan 2x = 2",
          steps: [
            "\\text{Domain for } 2x \\text{ is } 0^\\circ < 2x \\le 360^\\circ.",
            "2x = \\tan^{-1}(2) \\approx 63.43^\\circ",
            "\\text{Positive tangent means Q1 and Q3.}",
            "2x_1 = 63.43^\\circ \\implies x_1 \\approx 31.72^\\circ",
            "2x_2 = 180^\\circ + 63.43^\\circ = 243.43^\\circ \\implies x_2 \\approx 121.72^\\circ",
          ],
        },
        {
          id: "3d",
          question: "\\sin 2x = -0.6",
          steps: [
            "\\text{Domain for } 2x \\text{ is } 0^\\circ < 2x \\le 360^\\circ.",
            "\\text{Principal value: } \\sin^{-1}(-0.6) \\approx -36.87^\\circ",
            "\\text{Negative sine means Q3 and Q4.}",
            "2x_1 = 180^\\circ + 36.87^\\circ = 216.87^\\circ \\implies x_1 \\approx 108.44^\\circ",
            "2x_2 = 360^\\circ - 36.87^\\circ = 323.13^\\circ \\implies x_2 \\approx 161.57^\\circ",
          ],
        },
        {
          id: "3e",
          question: "5\\cos 2x = 4",
          steps: [
            "\\cos 2x = 0.8",
            "2x = \\cos^{-1}(0.8) \\approx 36.87^\\circ",
            "\\text{Positive cosine means Q1 and Q4.}",
            "2x_1 = 36.87^\\circ \\implies x_1 \\approx 18.44^\\circ",
            "2x_2 = 360^\\circ - 36.87^\\circ = 323.13^\\circ \\implies x_2 \\approx 161.57^\\circ",
          ],
        },
        {
          id: "3f",
          question: "7\\sin 2x = -2",
          steps: [
            "\\sin 2x = -\\frac{2}{7} \\approx -0.2857",
            "\\text{Principal value: } \\sin^{-1}(-0.2857) \\approx -16.6^\\circ",
            "\\text{Negative sine means Q3 and Q4.}",
            "2x_1 = 180^\\circ + 16.6^\\circ = 196.6^\\circ \\implies x_1 \\approx 98.3^\\circ",
            "2x_2 = 360^\\circ - 16.6^\\circ = 343.4^\\circ \\implies x_2 \\approx 171.7^\\circ",
          ],
        },
        {
          id: "3g",
          question: "1 + 3\\tan 2x = 0",
          steps: [
            "3\\tan 2x = -1 \\implies \\tan 2x = -\\frac{1}{3}",
            "\\text{Principal value: } 2x = \\tan^{-1}(-1/3) \\approx -18.43^\\circ",
            "\\text{Negative tangent means Q2 and Q4.}",
            "2x_1 = 180^\\circ - 18.43^\\circ = 161.57^\\circ \\implies x_1 \\approx 80.79^\\circ",
            "2x_2 = 360^\\circ - 18.43^\\circ = 341.57^\\circ \\implies x_2 \\approx 170.79^\\circ",
          ],
        },
        {
          id: "3h",
          question: "2 - 3\\sin 2x = 0",
          steps: [
            "3\\sin 2x = 2 \\implies \\sin 2x = \\frac{2}{3}",
            "2x = \\sin^{-1}(2/3) \\approx 41.81^\\circ",
            "\\text{Positive sine means Q1 and Q2.}",
            "2x_1 = 41.81^\\circ \\implies x_1 \\approx 20.91^\\circ",
            "2x_2 = 180^\\circ - 41.81^\\circ = 138.19^\\circ \\implies x_2 \\approx 69.10^\\circ",
          ],
        },
      ],
    },
    {
      sectionNumber: 4,
      instruction: "Solve each of these equations for the given domains.",
      problems: [
        {
          id: "4a",
          question:
            "\\cos(x - 30^\\circ) = -0.5 \\text{ for } 0^\\circ \\le x \\le 360^\\circ",
          steps: [
            "\\text{Let } u = x - 30^\\circ. \\text{ Domain for } u \\text{ is } -30^\\circ \\le u \\le 330^\\circ.",
            "\\cos u = -0.5 \\implies u = 120^\\circ, 240^\\circ \\text{ (in Q2 and Q3).}",
            "x_1 - 30^\\circ = 120^\\circ \\implies x_1 = 150^\\circ",
            "x_2 - 30^\\circ = 240^\\circ \\implies x_2 = 270^\\circ",
          ],
        },
        {
          id: "4b",
          question:
            "6\\sin(2x + 45^\\circ) = -5 \\text{ for } 0^\\circ \\le x \\le 180^\\circ",
          steps: [
            "\\sin(2x + 45^\\circ) = -\\frac{5}{6} \\approx -0.8333",
            "\\text{Let } u = 2x + 45^\\circ. \\text{ For } 0^\\circ \\le x \\le 180^\\circ, \\text{ domain for } u \\text{ is } 45^\\circ \\le u \\le 405^\\circ.",
            "\\text{Principal value: } u = \\sin^{-1}(-0.8333) \\approx -56.44^\\circ",
            "\\text{Negative sine means Q3 and Q4. Valid values in domain:}",
            "u_1 = 180^\\circ - (-56.44^\\circ) = 236.44^\\circ",
            "u_2 = 360^\\circ + (-56.44^\\circ) = 303.56^\\circ",
            "2x_1 + 45^\\circ = 236.44^\\circ \\implies 2x_1 = 191.44^\\circ \\implies x_1 \\approx 95.72^\\circ",
            "2x_2 + 45^\\circ = 303.56^\\circ \\implies 2x_2 = 258.56^\\circ \\implies x_2 \\approx 129.28^\\circ",
          ],
        },
        {
          id: "4c",
          question:
            "2\\tan\\left(\\frac{x}{2}\\right) + 3 = 0 \\text{ for } 0^\\circ \\le x \\le 540^\\circ",
          steps: [
            "\\tan\\left(\\frac{x}{2}\\right) = -1.5",
            "\\text{Let } u = \\frac{x}{2}. \\text{ Domain for } u \\text{ is } 0^\\circ \\le u \\le 270^\\circ.",
            "\\text{Principal value: } u = \\tan^{-1}(-1.5) \\approx -56.31^\\circ",
            "\\text{Negative tangent means Q2 and Q4. Valid value in domain:}",
            "u = 180^\\circ - 56.31^\\circ = 123.69^\\circ",
            "\\frac{x}{2} = 123.69^\\circ \\implies x = 247.38^\\circ",
          ],
        },
        {
          id: "4d",
          question:
            "\\cos\\left(x + \\frac{\\pi}{4}\\right) = -0.5 \\text{ for } 0 \\le x \\le 2\\pi",
          steps: [
            "\\text{Let } u = x + \\frac{\\pi}{4}. \\text{ Domain for } u \\text{ is } \\frac{\\pi}{4} \\le u \\le \\frac{9\\pi}{4}.",
            "\\cos u = -0.5 \\implies u = \\frac{2\\pi}{3}, \\frac{4\\pi}{3} \\text{ (in Q2 and Q3).}",
            "x_1 + \\frac{\\pi}{4} = \\frac{2\\pi}{3} \\implies x_1 = \\frac{8\\pi}{12} - \\frac{3\\pi}{12} = \\frac{5\\pi}{12}",
            "x_2 + \\frac{\\pi}{4} = \\frac{4\\pi}{3} \\implies x_2 = \\frac{16\\pi}{12} - \\frac{3\\pi}{12} = \\frac{13\\pi}{12}",
          ],
        },
        {
          id: "4e",
          question: "\\sin(2x - 3) = 0.6 \\text{ for } 0 \\le x \\le \\pi",
          steps: [
            "\\text{Let } u = 2x - 3. \\text{ Domain for } u \\text{ is } -3 \\le u \\le 2\\pi - 3 \\approx 3.28.",
            "\\text{Principal value: } u = \\sin^{-1}(0.6) \\approx 0.6435 \\text{ radians}",
            "\\text{Positive sine means Q1 and Q2. Valid values in domain:}",
            "u_1 \\approx 0.6435",
            "u_2 = \\pi - 0.6435 \\approx 2.498",
            "2x_1 - 3 = 0.6435 \\implies 2x_1 = 3.6435 \\implies x_1 \\approx 1.82",
            "2x_2 - 3 = 2.498 \\implies 2x_2 = 5.498 \\implies x_2 \\approx 2.75",
          ],
        },
        {
          id: "4f",
          question:
            "2\\sin\\left(\\frac{x}{2}\\right) = 1 \\text{ for } 0 \\le x \\le 4\\pi",
          steps: [
            "\\sin\\left(\\frac{x}{2}\\right) = 0.5",
            "\\text{Let } u = \\frac{x}{2}. \\text{ Domain for } u \\text{ is } 0 \\le u \\le 2\\pi.",
            "\\sin u = 0.5 \\implies u = \\frac{\\pi}{6}, \\frac{5\\pi}{6} \\text{ (in Q1 and Q2).}",
            "\\frac{x_1}{2} = \\frac{\\pi}{6} \\implies x_1 = \\frac{\\pi}{3}",
            "\\frac{x_2}{2} = \\frac{5\\pi}{6} \\implies x_2 = \\frac{5\\pi}{3}",
          ],
        },
      ],
    },
    {
      sectionNumber: 5,
      instruction: "Solve each of these equations for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "5a",
          question: "4\\sin x = \\cos x",
          steps: [
            "\\text{Divide both sides by } \\cos x \\text{ (since } \\cos x \\ne 0\\text{):}",
            "4\\tan x = 1 \\implies \\tan x = 0.25",
            "x = \\tan^{-1}(0.25) \\approx 14.04^\\circ",
            "\\text{Positive tangent means Q1 and Q3.}",
            "x_1 \\approx 14.04^\\circ",
            "x_2 = 180^\\circ + 14.04^\\circ = 194.04^\\circ",
          ],
        },
        {
          id: "5b",
          question: "3\\sin x + 4\\cos x = 0",
          steps: [
            "3\\sin x = -4\\cos x",
            "\\tan x = -\\frac{4}{3} \\approx -1.333",
            "\\text{Principal value: } x = \\tan^{-1}(-1.333) \\approx -53.13^\\circ",
            "\\text{Negative tangent means Q2 and Q4.}",
            "x_1 = 180^\\circ - 53.13^\\circ = 126.87^\\circ",
            "x_2 = 360^\\circ - 53.13^\\circ = 306.87^\\circ",
          ],
        },
        {
          id: "5c",
          question: "5\\sin x - 3\\cos x = 0",
          steps: [
            "5\\sin x = 3\\cos x \\implies \\tan x = 0.6",
            "x = \\tan^{-1}(0.6) \\approx 30.96^\\circ",
            "\\text{Positive tangent means Q1 and Q3.}",
            "x_1 \\approx 30.96^\\circ",
            "x_2 = 180^\\circ + 30.96^\\circ = 210.96^\\circ",
          ],
        },
        {
          id: "5d",
          question: "5\\cos 2x - 4\\sin 2x = 0",
          steps: [
            "5\\cos 2x = 4\\sin 2x \\implies \\tan 2x = 1.25",
            "\\text{Domain for } 2x \\text{ is } 0^\\circ \\le 2x \\le 720^\\circ.",
            "2x = \\tan^{-1}(1.25) \\approx 51.34^\\circ",
            "\\text{Positive tangent means Q1 and Q3.}",
            "2x_1 \\approx 51.34^\\circ \\implies x_1 \\approx 25.67^\\circ",
            "2x_2 = 180^\\circ + 51.34^\\circ = 231.34^\\circ \\implies x_2 \\approx 115.67^\\circ",
            "2x_3 = 360^\\circ + 51.34^\\circ = 411.34^\\circ \\implies x_3 \\approx 205.67^\\circ",
            "2x_4 = 540^\\circ + 51.34^\\circ = 591.34^\\circ \\implies x_4 \\approx 295.67^\\circ",
          ],
        },
      ],
    },
    {
      sectionNumber: 6,
      instruction: "Solve 4 sin(2x - 0.4) - 5 cos(2x - 0.4) = 0 for 0 ≤ x ≤ π.",
      problems: [
        {
          id: "6",
          question: "4\\sin(2x - 0.4) - 5\\cos(2x - 0.4) = 0",
          steps: [
            "4\\sin(2x - 0.4) = 5\\cos(2x - 0.4) \\implies \\tan(2x - 0.4) = \\frac{5}{4} = 1.25",
            "\\text{Let } u = 2x - 0.4. \\text{ For } 0 \\le x \\le \\pi, \\text{ domain for } u \\text{ is } -0.4 \\le u \\le 2\\pi - 0.4 \\approx 5.883.",
            "u = \\tan^{-1}(1.25) \\approx 0.896 \\text{ radians}",
            "\\text{Positive tangent means Q1 and Q3. Valid values in domain:}",
            "u_1 \\approx 0.896",
            "u_2 = \\pi + 0.896 \\approx 4.038",
            "2x_1 - 0.4 = 0.896 \\implies 2x_1 = 1.296 \\implies x_1 \\approx 0.648",
            "2x_2 - 0.4 = 4.038 \\implies 2x_2 = 4.438 \\implies x_2 \\approx 2.219",
          ],
        },
      ],
    },
    {
      sectionNumber: 7,
      instruction: "Solve each of these equations for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "7a",
          question: "\\sin x \\tan(x - 30^\\circ) = 0",
          steps: [
            "\\text{Case 1: } \\sin x = 0 \\implies x = 0^\\circ, 180^\\circ, 360^\\circ",
            "\\text{Case 2: } \\tan(x - 30^\\circ) = 0 \\implies x - 30^\\circ = 0^\\circ, 180^\\circ, 360^\\circ \\implies x = 30^\\circ, 210^\\circ \\text{ (390 is out of range)}",
            "\\text{Solutions: } x = 0^\\circ, 30^\\circ, 180^\\circ, 210^\\circ, 360^\\circ",
          ],
        },
        {
          id: "7b",
          question: "5\\tan^2 x - 4\\tan x = 0",
          steps: [
            "\\tan x (5\\tan x - 4) = 0",
            "\\text{Case 1: } \\tan x = 0 \\implies x = 0^\\circ, 180^\\circ, 360^\\circ",
            "\\text{Case 2: } \\tan x = 0.8 \\implies x \\approx 38.66^\\circ, 218.66^\\circ",
            "\\text{Solutions: } x = 0^\\circ, 38.66^\\circ, 180^\\circ, 218.66^\\circ, 360^\\circ",
          ],
        },
        {
          id: "7c",
          question: "3\\cos^2 x = \\cos x",
          steps: [
            "3\\cos^2 x - \\cos x = 0 \\implies \\cos x (3\\cos x - 1) = 0",
            "\\text{Case 1: } \\cos x = 0 \\implies x = 90^\\circ, 270^\\circ",
            "\\text{Case 2: } \\cos x = \\frac{1}{3} \\implies x \\approx 70.53^\\circ, 289.47^\\circ",
            "\\text{Solutions: } x = 70.53^\\circ, 90^\\circ, 270^\\circ, 289.47^\\circ",
          ],
        },
        {
          id: "7d",
          question: "\\sin^2 x + \\sin x \\cos x = 0",
          steps: [
            "\\sin x (\\sin x + \\cos x) = 0",
            "\\text{Case 1: } \\sin x = 0 \\implies x = 0^\\circ, 180^\\circ, 360^\\circ",
            "\\text{Case 2: } \\sin x + \\cos x = 0 \\implies \\tan x = -1 \\implies x = 135^\\circ, 315^\\circ",
            "\\text{Solutions: } x = 0^\\circ, 135^\\circ, 180^\\circ, 315^\\circ, 360^\\circ",
          ],
        },
        {
          id: "7e",
          question: "5\\sin x \\cos x = \\cos x",
          steps: [
            "5\\sin x \\cos x - \\cos x = 0 \\implies \\cos x (5\\sin x - 1) = 0",
            "\\text{Case 1: } \\cos x = 0 \\implies x = 90^\\circ, 270^\\circ",
            "\\text{Case 2: } \\sin x = 0.2 \\implies x \\approx 11.54^\\circ, 168.46^\\circ",
            "\\text{Solutions: } x = 11.54^\\circ, 90^\\circ, 168.46^\\circ, 270^\\circ",
          ],
        },
        {
          id: "7f",
          question: "\\sin x \\tan x = \\sin x",
          steps: [
            "\\sin x \\tan x - \\sin x = 0 \\implies \\sin x (\\tan x - 1) = 0",
            "\\text{Case 1: } \\sin x = 0 \\implies x = 0^\\circ, 180^\\circ, 360^\\circ",
            "\\text{Case 2: } \\tan x = 1 \\implies x = 45^\\circ, 225^\\circ",
            "\\text{Solutions: } x = 0^\\circ, 45^\\circ, 180^\\circ, 225^\\circ, 360^\\circ",
          ],
        },
      ],
    },
    {
      sectionNumber: 8,
      instruction: "Solve each of these equations for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "8a",
          question: "4\\sin^2 x = 1",
          steps: [
            "\\sin^2 x = \\frac{1}{4} \\implies \\sin x = \\pm \\frac{1}{2}",
            "\\text{Case 1: } \\sin x = 0.5 \\implies x = 30^\\circ, 150^\\circ",
            "\\text{Case 2: } \\sin x = -0.5 \\implies x = 210^\\circ, 330^\\circ",
            "\\text{Solutions: } x = 30^\\circ, 150^\\circ, 210^\\circ, 330^\\circ",
          ],
        },
        {
          id: "8b",
          question: "25\\tan^2 x = 9",
          steps: [
            "\\tan^2 x = \\frac{9}{25} \\implies \\tan x = \\pm \\frac{3}{5} = \\pm 0.6",
            "\\text{Case 1: } \\tan x = 0.6 \\implies x \\approx 30.96^\\circ, 210.96^\\circ",
            "\\text{Case 2: } \\tan x = -0.6 \\implies x \\approx 149.04^\\circ, 329.04^\\circ",
            "\\text{Solutions: } x = 30.96^\\circ, 149.04^\\circ, 210.96^\\circ, 329.04^\\circ",
          ],
        },
      ],
    },
    {
      sectionNumber: 9,
      instruction: "Solve each of these equations for 0° ≤ x ≤ 360°.",
      problems: [
        {
          id: "9a",
          question: "\\tan^2 x + 2\\tan x - 3 = 0",
          steps: [
            "\\text{Factorise: } (\\tan x + 3)(\\tan x - 1) = 0",
            "\\text{Case 1: } \\tan x = -3 \\implies x \\approx 108.43^\\circ, 288.43^\\circ",
            "\\text{Case 2: } \\tan x = 1 \\implies x = 45^\\circ, 225^\\circ",
            "\\text{Solutions: } x = 45^\\circ, 108.43^\\circ, 225^\\circ, 288.43^\\circ",
          ],
        },
        {
          id: "9b",
          question: "2\\sin^2 x + \\sin x - 1 = 0",
          steps: [
            "\\text{Factorise: } (2\\sin x - 1)(\\sin x + 1) = 0",
            "\\text{Case 1: } \\sin x = 0.5 \\implies x = 30^\\circ, 150^\\circ",
            "\\text{Case 2: } \\sin x = -1 \\implies x = 270^\\circ",
            "\\text{Solutions: } x = 30^\\circ, 150^\\circ, 270^\\circ",
          ],
        },
        {
          id: "9c",
          question: "3\\cos^2 x - 2\\cos x - 1 = 0",
          steps: [
            "\\text{Factorise: } (3\\cos x + 1)(\\cos x - 1) = 0",
            "\\text{Case 1: } \\cos x = -\\frac{1}{3} \\implies x \\approx 109.47^\\circ, 250.53^\\circ",
            "\\text{Case 2: } \\cos x = 1 \\implies x = 0^\\circ, 360^\\circ",
            "\\text{Solutions: } x = 0^\\circ, 109.47^\\circ, 250.53^\\circ, 360^\\circ",
          ],
        },
        {
          id: "9d",
          question: "2\\sin^2 x - \\cos x - 1 = 0",
          steps: [
            "\\text{Use } \\sin^2 x = 1 - \\cos^2 x:",
            "2(1 - \\cos^2 x) - \\cos x - 1 = 0 \\implies 2 - 2\\cos^2 x - \\cos x - 1 = 0",
            "2\\cos^2 x + \\cos x - 1 = 0",
            "\\text{Factorise: } (2\\cos x - 1)(\\cos x + 1) = 0",
            "\\text{Case 1: } \\cos x = 0.5 \\implies x = 60^\\circ, 300^\\circ",
            "\\text{Case 2: } \\cos x = -1 \\implies x = 180^\\circ",
            "\\text{Solutions: } x = 60^\\circ, 180^\\circ, 300^\\circ",
          ],
        },
        {
          id: "9e",
          question: "3\\cos^2 x - 3 = \\sin x",
          steps: [
            "3(1 - \\sin^2 x) - 3 = \\sin x \\implies 3 - 3\\sin^2 x - 3 = \\sin x",
            "-3\\sin^2 x - \\sin x = 0 \\implies \\sin x(3\\sin x + 1) = 0",
            "\\text{Case 1: } \\sin x = 0 \\implies x = 0^\\circ, 180^\\circ, 360^\\circ",
            "\\text{Case 2: } \\sin x = -\\frac{1}{3} \\implies x \\approx 199.47^\\circ, 340.53^\\circ",
            "\\text{Solutions: } x = 0^\\circ, 180^\\circ, 199.47^\\circ, 340.53^\\circ, 360^\\circ",
          ],
        },
        {
          id: "9f",
          question: "\\sin x + 5 = 6\\cos^2 x",
          steps: [
            "\\sin x + 5 = 6(1 - \\sin^2 x) \\implies \\sin x + 5 = 6 - 6\\sin^2 x",
            "6\\sin^2 x + \\sin x - 1 = 0",
            "\\text{Factorise: } (3\\sin x - 1)(2\\sin x + 1) = 0",
            "\\text{Case 1: } \\sin x = \\frac{1}{3} \\implies x \\approx 19.47^\\circ, 160.53^\\circ",
            "\\text{Case 2: } \\sin x = -0.5 \\implies x = 210^\\circ, 330^\\circ",
            "\\text{Solutions: } x = 19.47^\\circ, 160.53^\\circ, 210^\\circ, 330^\\circ",
          ],
        },
        {
          id: "9g",
          question: "2\\cos^2 x - \\sin^2 x - 2\\sin x - 1 = 0",
          steps: [
            "2(1 - \\sin^2 x) - \\sin^2 x - 2\\sin x - 1 = 0",
            "2 - 2\\sin^2 x - \\sin^2 x - 2\\sin x - 1 = 0",
            "3\\sin^2 x + 2\\sin x - 1 = 0",
            "\\text{Factorise: } (3\\sin x - 1)(\\sin x + 1) = 0",
            "\\text{Case 1: } \\sin x = \\frac{1}{3} \\implies x \\approx 19.47^\\circ, 160.53^\\circ",
            "\\text{Case 2: } \\sin x = -1 \\implies x = 270^\\circ",
            "\\text{Solutions: } x = 19.47^\\circ, 160.53^\\circ, 270^\\circ",
          ],
        },
        {
          id: "9h",
          question: "3\\cos x = 8\\tan x",
          steps: [
            "3\\cos x = 8\\frac{\\sin x}{\\cos x} \\implies 3\\cos^2 x = 8\\sin x",
            "3(1 - \\sin^2 x) = 8\\sin x \\implies 3 - 3\\sin^2 x = 8\\sin x",
            "3\\sin^2 x + 8\\sin x - 3 = 0",
            "\\text{Factorise: } (3\\sin x - 1)(\\sin x + 3) = 0",
            "\\text{Case 1: } \\sin x = \\frac{1}{3} \\implies x \\approx 19.47^\\circ, 160.53^\\circ",
            "\\text{Case 2: } \\sin x = -3 \\text{ (reject, since range is } [-1, 1])",
            "\\text{Solutions: } x = 19.47^\\circ, 160.53^\\circ",
          ],
        },
        {
          id: "9i",
          question: "1 + \\tan x \\cos x = 2\\cos x",
          steps: [
            "\\text{Since } \\tan x = \\frac{\\sin x}{\\cos x}, \\text{ then } \\tan x \\cos x = \\sin x.",
            "1 + \\sin x = 2\\cos x",
            "\\text{Square both sides: } (1 + \\sin x)^2 = 4\\cos^2 x",
            "1 + 2\\sin x + \\sin^2 x = 4(1 - \\sin^2 x) \\implies 5\\sin^2 x + 2\\sin x - 3 = 0",
            "\\text{Factorise: } (5\\sin x - 3)(\\sin x + 1) = 0",
            "\\text{Case 1: } \\sin x = 0.6 \\implies x \\approx 36.87^\\circ, 143.13^\\circ",
            "\\text{Check } x = 143.13^\\circ \\text{ in original: LHS } = 1 + 0.6 = 1.6, \\text{ RHS } = 2(-0.8) = -1.6 \\text{ (reject).}",
            "\\text{Case 2: } \\sin x = -1 \\implies x = 270^\\circ \\text{ (limit is valid).}",
            "\\text{Solutions: } x = 36.87^\\circ, 270^\\circ",
          ],
        },
      ],
    },
    {
      sectionNumber: 10,
      instruction:
        "f(x) = sin x for 0 ≤ x ≤ π. g(x) = 2x - 1 for x ∈ ℝ. Solve gf(x) = 0.5.",
      problems: [
        {
          id: "10",
          question: "gf(x) = 0.5",
          steps: [
            "gf(x) = g(\\sin x) = 2\\sin x - 1",
            "2\\sin x - 1 = 0.5 \\implies 2\\sin x = 1.5 \\implies \\sin x = 0.75",
            "\\text{Domain is } 0 \\le x \\le \\pi \\text{ (Q1 and Q2).}",
            "x = \\sin^{-1}(0.75) \\approx 48.59^\\circ \\text{ (or } 0.848 \\text{ radians)}",
            "x_2 = 180^\\circ - 48.59^\\circ = 131.41^\\circ \\text{ (or } 2.294 \\text{ radians)}",
            "\\text{Solutions: } x \\approx 48.6^\\circ, 131.4^\\circ",
          ],
        },
      ],
    },
  ],
};

export default exercise96Solutions;
