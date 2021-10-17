import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import i18n from '../../../../translation/i18n';
import Vi from 'app/assets/image/vietnam.png';
import Us from 'app/assets/image/us.png';
import i18next from 'i18next';

const ChangeLang = () => {
  // const [change, setChange] = useState(true);

  // function changeLanguage(e) {
  //   setChange(!change);
  // }
  // useEffect(() => {
  //   if (change) {
  //     i18n.changeLanguage('en');
  //   } else {
  //     i18n.changeLanguage('vi');
  //   }
  // }, [change]);
  // return (
  //   <div>
  //     <Img
  //       src={change ? Us : Vi}
  //       alt="Change Language"
  //       onClick={changeLanguage}
  //     />
  //   </div>
  // );

  const handleOnChange = e => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <select
      name="language"
      value={localStorage.getItem('i18nextLng') || 'en'}
      onChange={handleOnChange}
    >
      <option value="en">EN</option>
      <option value="vn">VN</option>
    </select>
  );
};

export default ChangeLang;

const Img = styled.img`
  width: 25px;
  margin-left: 8px;
  cursor: pointer;
`;