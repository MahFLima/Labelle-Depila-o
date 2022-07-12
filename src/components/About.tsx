import aboutImage from "../assets/AboutImage.png";

export function About() {
  return (
    <div id="about" className="flex flex-col py-20 gap-8 border-b border-gray-300 md:grid md:grid-cols-2 md:gap-4 md:px-6 ">
      <div className="flex items-center">
        <img src="https://unsplash.it/1600/400?image=950" className='w-full h-80'/>
      </div>
      
      <aside className="flex flex-col gap-4 px-6">
        <strong className="text-3xl text-black">Sobre nós</strong>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
          quis bibendum diam. Sed consequat nisl laoreet eros ultricies
          pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula
          risus. In placerat, felis vitae sodales dictum, lacus quam pretium mi,
          ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
          luctus, nunc finibus elementum suscipit, tortor augue vulputate
          sapien, vitae feugiat enim augue sed. Quisque id aliquam elit.
          Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod
          dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur
          fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus,
          elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem
          ullamcorper luctus.
        </p>
      </aside>
    </div>
  );
}
