export default function Biography() {
    const bioData = [
      { year: "2001", description: "Гений айти появился на свет" },
      { year: "2008", description: "Поступил в школу и разнёс всё к чёртовой бабушки" },
      { year: "2018", description: "Поступил на программиста и понял что пора взламывать пентагон" },
      { year: "2022", description: "Закончил взламывать пентагон и поступил на вышку(ну типа чтобы не выделяться :) )." },
      { year: "2023", description: "Стал как и все ходить на работу. В данный момент работаю в РАНХИГС." },
    ];
  
    return (
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-left border-b border-accent-light pb-2">Bio</h2>
        <ul className="space-y-2">
          {bioData.map((item, index) => (
            <li
              key={index}
              className="flex space-x-4 text-left"
            >
              <span className="font-bold">{item.year}</span>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  