export interface Author {
  username: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
}

export const AUTHORS: Author[] = [
  {
    username: 'aiplacers',
    name: 'AIPlacers Team',
    email: 'team@aiplacers.com',
    bio: 'The official AIPlacers team bringing you the latest in AI voice agents and voice generation technology.',
  },
  {
    username: 'admin',
    name: 'Admin',
    email: 'admin@aiplacers.com',
    bio: 'Administrative author for system posts.',
  },
  {
    username: 'editor',
    name: 'Editorial Team',
    email: 'editor@aiplacers.com',
    bio: 'Content creation and editorial team.',
  }
];

export const getAuthorByUsername = (username: string): Author | undefined => {
  return AUTHORS.find(author => author.username === username);
};

export const getAllAuthors = (): Author[] => {
  return AUTHORS;
}; 