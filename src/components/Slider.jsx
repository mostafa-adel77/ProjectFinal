
import MariaImg from "../assets/images/person-1.jpg";
import JeremyWalkerImg from "../assets/images/person_2.jpg";
import PatrikWhiteImg from "../assets/images/person_3.jpg";
import KathrynRyanImg from "../assets/images/person_4.jpg"

const slides = [
  {
    id: "slide1",
    text:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
    img: MariaImg,
    name: "Maria Jones",
    role: "CEO, Co-Founder, XYZ Inc.",
    prev: "slide4",
    next: "slide2",
  },
  {
    id: "slide2",
    text:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
    img: JeremyWalkerImg,
    name: "Jeremy Walker",
    role: "CEO, Founder, Atty.",
    prev: "slide1",
    next: "slide3",
  },
  {
    id: "slide3",
    text:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
    img: PatrikWhiteImg,
    name: "Patrik White",
    role: "CEO, Founder, Atty.",
    prev: "slide2",
    next: "slide4",
  },
  
  {
    id: "slide4",
    text:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
    img: KathrynRyanImg,
    name: "Kathryn Ryan",
    role: "CEO, Founder, Atty.",
    prev: "slide3",
    next: "slide1",
  },
];

export default function Slider() {
  return (
    <div className="w-full p-10">
      <div className="carousel w-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={slide.id}
            className="carousel-item relative flex flex-col items-center justify-center gap-4 w-full px-4"
          >
            <p className="max-w-2xl text-gray-600 text-lg text-center">
              “{slide.text}”
            </p>

            <img
              src={slide.img}
              alt={slide.name}
              className="w-24 h-24 rounded-full object-cover"
            />

            <h2 className="font-semibold text-lg">{slide.name}</h2>
            <p className="text-sm text-gray-500">{slide.role}</p>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href={`#${slide.prev}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#${slide.next}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

