export default function Definition({ infoProp, searchProp, searchTermProp }) {
  if (!searchProp) {
    return <p>Start by searching for a word.</p>;
  }

  if (searchProp && infoProp && infoProp.length > 0) {
    return (
      <div>
        <h2>Results for “{searchTermProp}”</h2>

        {infoProp.map((entry, i) => (
          <div key={i} className="mb-4">
            <h3 className="text-xl font-semibold">{entry.word}</h3>
            {entry.phonetic && <p>{entry.phonetic}</p>}

            {entry.meanings.map((meaning, j) => (
              <div key={j}>
                <p className="italic">{meaning.partOfSpeech}</p>

                {meaning.definitions.map((d, k) => (
                  <div key={k} className="ml-4 mb-2">
                    <p>{d.definition}</p>
                    {d.example && <p className="text-gray-600">“{d.example}”</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (searchProp && (!infoProp || infoProp.length === 0)) {
    return <p>No definitions found for “{searchTermProp}”.</p>;
  }

  return null;
}
