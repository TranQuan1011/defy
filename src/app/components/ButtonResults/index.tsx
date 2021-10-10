import { useState } from 'react';
import styled from 'styled-components';
import ImgButton from 'app/assets/image/ButtonResults.png';

interface menu {
  open: boolean;
}

export default function ButtonMenuResults() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Menu open={open} onClick={() => setOpen(!open)}>
          <ButtonMenu open={open} />
        </Menu>
      </>
    );
};

const Menu = styled.div<menu>`
  position: inherit;
  top: 25px;
  right: 16px;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`
const ButtonMenu = styled.div<menu>`
    background-image: url(${ImgButton});
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 4px;
`;
