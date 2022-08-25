import { HeaderStyle, TitleH2 } from "./HomePage.styled";

const Header = ({ count, selectedOrder, orderDesc, platform }) => {
  let filters = selectedOrder.label;
  const platforms = platform.label;

  return (
    <HeaderStyle>
      <TitleH2>К просмотру представлено {count} игр</TitleH2>
      <div>
        Фильтрация: <strong>{filters}</strong>
      </div>

      <div>
        Платформы: <strong>{platforms}</strong>
      </div>
    </HeaderStyle>
  );
};

export default Header;
