import fountainPenSvg from "/img/fountain-pen-writing.svg";

const Header = () => {
  return (
    <>
      <header className="flex items-center space-x-6">
        <h1 className="text-4xl font-normal text-gray-700 md:text-6xl font-display">
          Todo List
        </h1>
        <img src={fountainPenSvg} alt="Fountain pen" className="w-10 h-10 md:h-16 md:w-16 " />
      </header>
    </>
  );
};

export default Header;
