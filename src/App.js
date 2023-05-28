import ReactLogo from './react-logo.svg';

function App() {
  return (
    <>
        <div className="w-full max-w-xs">
            <img src={ReactLogo} alt="React Logo" />
        </div>

        <div className="w-full max-w-fit bg-white/10 text-sm font-mono leading-none overflow-x-auto rounded-md pl-2 py-3 mt-8 lg:mt-10">
            <p className="whitespace-nowrap">
                Get started by editing <span className="font-semibold mr-2">public/index.html</span>
            </p>
        </div>
    </>
  );
}

export default App;
