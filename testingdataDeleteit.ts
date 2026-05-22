const questions = [
  {
    _id: "q101",
    title: "How to optimize nested loops in Java?",
    description:
      "I want to understand techniques to reduce time complexity in nested loops.",
    tags: [
      { _id: "t1", name: "nextjs" },
      { _id: "t2", name: "php" },
    ],
    author: {
      _id: "u1",
      name: "Rahul",
    },
    upvotes: 45,
    answers: 8,
    views: 1200,
    createdAt: "2026-05-20T10:15:00Z",
  },

  {
    _id: "q102",
    title: "Difference between ArrayList and LinkedList",
    description: "Can someone explain when to use ArrayList over LinkedList?",
    tags: [
      { _id: "t3", name: "tailwind" },
      { _id: "t4", name: "python" },
    ],
    author: {
      _id: "u2",
      name: "Aman",
    },
    upvotes: 60,
    answers: 12,
    views: 2100,
    createdAt: "2026-05-18T08:30:00Z",
  },

  {
    _id: "q103",
    title: "What is Big-O notation?",
    description: "I am confused about time complexity and asymptotic notation.",
    tags: [
      { _id: "t5", name: "java" },
      { _id: "t6", name: "nextjs" },
    ],
    author: {
      _id: "u3",
      name: "Priya",
    },
    upvotes: 95,
    answers: 15,
    views: 5400,
    createdAt: "2026-05-15T14:10:00Z",
  },

  {
    _id: "q104",
    title: "How does HashMap work internally?",
    description: "Need a beginner-friendly explanation of HashMap internals.",
    tags: [
      { _id: "t7", name: "cpp" },
      { _id: "t8", name: "css" },
    ],
    author: {
      _id: "u4",
      name: "Neha",
    },
    upvotes: 130,
    answers: 20,
    views: 7800,
    createdAt: "2026-05-10T11:45:00Z",
  },

  {
    _id: "q105",
    title: "Best way to reverse a string in Java",
    description: "Looking for efficient methods to reverse strings.",
    tags: [
      { _id: "t9", name: "java" },
      { _id: "t10", name: "javascript" },
    ],
    author: {
      _id: "u5",
      name: "Karan",
    },
    upvotes: 25,
    answers: 6,
    views: 980,
    createdAt: "2026-05-12T16:20:00Z",
  },

  {
    _id: "q106",
    title: "What is the difference between == and equals()?",
    description: "I don't understand how string comparison works in Java.",
    tags: [
      { _id: "t11", name: "zust" },
      { _id: "t12", name: "angular" },
    ],
    author: {
      _id: "u6",
      name: "Simran",
    },
    upvotes: 75,
    answers: 10,
    views: 3400,
    createdAt: "2026-05-08T09:00:00Z",
  },

  {
    _id: "q107",
    title: "How to calculate GCD using Euclidean Algorithm?",
    description:
      "Need explanation and Java implementation for GCD calculation.",
    tags: [
      { _id: "t13", name: "python" },
      { _id: "t14", name: "nextjs" },
    ],
    author: {
      _id: "u7",
      name: "Arjun",
    },
    upvotes: 40,
    answers: 7,
    views: 1500,
    createdAt: "2026-05-17T13:25:00Z",
  },
];

const hotQuestions = [
  {
    _id: "hq101",
    title: "How does HashMap work internally?",
  },
  {
    _id: "hq102",
    title: "Difference between ArrayList and LinkedList",
  },
  {
    _id: "hq103",
    title: "What is Big-O notation?",
  },
  {
    _id: "hq104",
    title: "Best way to reverse a string in Java",
  },
  {
    _id: "hq105",
    title: "How to optimize nested loops in Java?",
  },
];


const popularTags = [
  { _id: "1", name: "nextjs", questions: 128 },
  { _id: "2", name: "reactjs", questions: 214 },
  { _id: "3", name: "javascript", questions: 356 },
  { _id: "4", name: "typescript", questions: 167 },
  { _id: "5", name: "nodejs", questions: 143 },
];

export { questions, hotQuestions, popularTags };
