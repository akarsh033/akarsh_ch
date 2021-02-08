// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Flutter',
    competency: 3,
    category: ['Mobile Development'],
  },
  {
    title: 'Git & Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Mobile Development', 'Tools'],
  },
  {
    title: 'SQLite3/SQL',
    competency: 2,
    category: ['Web Development', 'Mobile Development', 'Languages'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#387fd6',
  '#38d648',
  '#e68d2e',
  '',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
