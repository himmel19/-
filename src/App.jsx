import { useState } from "react";

function App() {
  const holder = 'Введите данные...';
  const [text, setText] = useState('');
  const [car, setCar] = useState('');
  const [list, setList] = useState({
    'Станция 1': ['Человек 1', 'Человек 2'],
    'Станция 2': ['Человек 1', 'Человек 2'],
    'Станция 3': ['Человек 1', 'Человек 2']
  });

  const addNote = (event) => {
    event.preventDefault();
    // Проверяем длину текста и выбранную станцию
    if (text.length > 2 && car) {
      setList(prevList => ({
        ...prevList,
        [car]: [...prevList[car], text] // Добавляем текст в массив для выбранной станции
      }));
      setText('');
    } else {
      alert('Нужно выбрать станцию и ввести минимум 3 буквы');
    }
  };

  return (
    <div className="wrapper">
      <h1>Работа с массивами</h1>
      <form onSubmit={addNote}>
        <select value={car} onChange={(event) => setCar(event.target.value)}>
          <option value="">Выберите станцию</option>
          <option value="Станция 1">Станция 1</option>
          <option value="Станция 2">Станция 2</option>
          <option value="Станция 3">Станция 3</option>
        </select>
        <h1>{car}</h1>
        <input 
          type="text" 
          placeholder={holder} 
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Добавить</button>
        <h2>Text - {text.length === 0 ? 'Пусто' : text}</h2>
      </form>
      <div className="list">
        {Object.keys(list).map((station, i) => (
          <div className="station" key={i}>
            <h2>{station}</h2>
            <ul>
              {list[station].map((el, j) => (
                <li key={j}>{el}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;