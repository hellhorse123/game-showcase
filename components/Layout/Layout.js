import Link from "next/link";

import { Header, HeaderTitle, WrapperHeader } from "./Layout.styled";

import Search from "./Search";

const Layout = () => {
  return (
    <Header>
      <WrapperHeader>
        <HeaderTitle>
          <Link href="/">
            <a>
              <div>ShowCase</div>
            </a>
          </Link>
        </HeaderTitle>
        <Search />
      </WrapperHeader>
    </Header>
  );
};

export default Layout;
