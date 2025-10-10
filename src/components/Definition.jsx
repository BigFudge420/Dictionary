import { HiMiniSpeakerWave } from "react-icons/hi2"

export default function Definition({ infoProp, searchProp, searchTermProp, loading }) {
  let audioFile
  if (infoProp){
    audioFile = infoProp[0].phonetics.map((entry) => entry.audio).filter(Boolean)
  }

  function playAudio(){
    let audio = new Audio(audioFile[0])
    audio.play()
  }

  if (!searchProp) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-3xl mx-3 text-center">Start by searching for a word.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-3xl">Loading...</p>
      </div>
    );
  }

  if (infoProp && infoProp.length > 0) {
    const phonetics = infoProp
      .map((entry) => entry.phonetic)
      .filter(Boolean)
      .join(", ");

    return (
      <div className="flex justify-center items-center flex-col">
        <div className="flex items-center justify-center gap-2">
          <div className="text-center">
            <h1 className="font-semibold text-3xl">{infoProp[0].word}</h1>
            {phonetics && <p className="text-gray-700 mb-4 text-sm">{phonetics}</p>}
          </div>
          {audioFile.length > 0 && <button onClick={() => playAudio()}><HiMiniSpeakerWave className='h-6 w-6'/></button>}
        </div>
        {infoProp[0].origin && <p>Origin:{infoProp[0].origin}</p>}

        {infoProp.map((entry, i) =>
          entry.meanings.map((meaning, j) => (
            <div
              key={`${i}-${j}`}
              className="border-black border-2 my-4 p-4 w-[920px] max-lg:max-w-[48rem] max-md:max-w-[40rem] max-sm:max-w-[18.75rem] text-black rounded-2xl hover:shadow-xl hover:shadow-black/45 transition-shadow duration-300"
            >
              <p className="italic">{meaning.partOfSpeech}</p>

              <div className="ml-4 mb-2 text-left">
                <p className="font-mono">– {meaning.definitions[0].definition}</p>
                {meaning.definitions[0].example && (
                  <p className="text-gray-600 italic">  
                    Example: “{meaning.definitions[0].example}”
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <p className="text-3xl mx-3 text-center">No definitions found for “{searchTermProp}”.</p>
    </div>
  );
}
