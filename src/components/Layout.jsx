const Layout = ({ children }) => {
  return (
    <div className="min-h-screen font-serif md:p-10 bg-table">
      <div className="container flex flex-col items-center space-y-6 px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-[100vw] w-[900px] bg-white rounded-lg shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
