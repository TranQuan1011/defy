import Box from '@mui/material/Box';
import { LinkButton } from '../style';

const links = [
  {
    name: 'Pawn',
    url: '/',
  },
  {
    name: 'Borrow',
    url: '/',
  },
  {
    name: 'Lend',
    url: '/lend',
  },
  {
    name: 'NFT',
    url: '/',
  },
  {
    name: 'My Account',
    url: '/',
  },
  {
    name: 'FAQ',
    url: '/',
  },
];

export const NavLink = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {links.map(link => (
        <LinkButton key={link.name} to={link.url}>
          {link.name}
        </LinkButton>
      ))}
    </Box>
  );
};
