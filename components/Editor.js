import Split from "react-split";

function Editor({textInside}) {
  return (
      <Split
        className="h-[75vh] shadow-lg flex flex-col bg-[#FCEDDA]"
        direction="vertical"
        minSize={150}
        maxSize={1000}
      >
        <Split className="flex" minSize={100} maxSize={1000}>
          <p className="text-lg text-black hover:animate-pulse m-auto p-4 text-center">{textInside}</p>
          <p className="text-lg text-black hover:animate-pulse m-auto p-4 text-center">{textInside}</p>

        </Split>

        <p className="text-4xl text-black hover:animate-pulse text-center p-8">{textInside}</p>
      </Split>
  );
}

export default Editor;
