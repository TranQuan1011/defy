import { BoxSideBar } from '../style';
import ListSideBar from './listSideBar';
interface isOpen {
  open: boolean;
}

export const SideBar = (props: isOpen) => {
  const { open } = props;
  return (
    <>
      {open && (
        <BoxSideBar>
          <ListSideBar />
        </BoxSideBar>
      )}
    </>
  );
};
