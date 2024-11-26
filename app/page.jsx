import { Button } from "@/components/ui/button";

// components
import ThreeModel from "@/components/ThreeModel";
import Avatars from "@/components/HomePage/Avatars";
import Social from "@/components/HomePage/Social";
import Biography from "@/components/HomePage/Biography";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-primary px-4 py-8">
      {/* Основной контейнер с максимальной шириной */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 3D модель */}
        <ThreeModel />

        {/* Заголовок с аватаром */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold">Рябов Сергей Дмитриевич</h1>
            <h2 className="text-lg md:text-xl">Веб-разработчик</h2>
          </div>
          <Avatars /> {/* Переместили аватар справа */}
        </div>

        {/* Раздел "О себе" */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-left border-b border-accent-light pb-2">
            О себе
          </h3>
          <p className="text-accent text-left">
            Появился, значит, в Зоне Чёрный сталкер.
            К лагерю ночью повадился ходить и там сует руку в палатку и говорит: "Водички попить!"
            А если не дашь хлебнуть из фляжки или наружу полезешь — пришибет!
            А раз мужик один решил пошутить: вылез тихо из палатки,
            надел кожаную перчатку и полез к соседям в палатку. Полез, значит,
            и попрошайничает жалостно: "Водички, водички попить…"
            А тут из палатки навстречу высовывается рука и за горло его — цап!
            И сиплый голосок отзывается тихонько: "А тебе моя водичка зачем нужна?!"
          </p>

          <div className="flex items-center justify-center space-x-6 mt-8">
            <Button variant="default" asChild>
              <a href="/">Скачать резюме</a>
            </Button>
            <Social
              containerStyles="flex space-x-4"
              iconStyles="hover:text-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Раздел "Биография" */}
        <Biography />
      </div>
    </div>
  );
}