import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const sections = [
  { title: 'Finanças', url: '#' },
  { title: 'Tecnologia', url: '#' },
  { title: 'Sustentabilidade', url: '#' },
  { title: 'Ciências', url: '#' },
];

const mainPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue lendo…',
};

const cardPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const linksUrl = {
  home: 'http://localhost:3000/#',
};

export {
  sections, theme, mainPost, cardPosts, linksUrl,
};
