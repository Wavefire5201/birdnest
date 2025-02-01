export default function VideoSection() {
  return (
    <div className="p-10 flex flex-col justify-between h-full">
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RxT8aheWEY4?si=6zi-vopAHa8bCAXE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        The exterior of the building looks like a bird nest, which is where its
        nickname came from. The intricate steel layers around the center makes a
        organic but striking first impression, making me think of a real bird
        nest made with sticks and straws. The stairs on the inside of the
        building spirals and curves in interesting paths, similar to how random
        the sticks may be placed in a bird nest.
      </div>
    </div>
  );
}
