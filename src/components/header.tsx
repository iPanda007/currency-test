import { headerStyle } from "./style";

const Header = () => {
  return (
    <div className={headerStyle()}>
      <div>
        <p>Exchange Rate USD $</p>
        <div>
          <img
            src="https://api.iconify.design/circle-flags:us.svg?color=%23888888"
            alt=""
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
