import styled from 'styled-components';
import ImgButton from 'app/assets/image/ButtonResults.png';

export default function ButtonMenuResults() {

    return (
      <>
        <div>
          <Menu>
            <ButtonMenu/>
          </Menu>
        </div>
      </>
    );
};

const Menu = styled.div`
  position: inherit;
  top: 25px;
  right: 16px;
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`
const ButtonMenu = styled.div`
    background-image: url(${ImgButton});
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 4px;
`;
