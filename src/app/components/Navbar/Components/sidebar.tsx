import { BoxSideBar } from '../style';
import ListSideBar from './listSideBar';
interface isOpen {
  open: boolean;
  loginState: boolean;
}

export const SideBar = (props: isOpen) => {
  const { open, loginState } = props;
  return (
    <>
      {props.open && (
        <BoxSideBar>
          <ListSideBar loginState={props.loginState} />
        </BoxSideBar>
      )}
    </>
  );
};
