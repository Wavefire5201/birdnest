const overview = `
  The Beijing National Stadium, also known as the “Bird's Nest,” is an
  iconic structure located in Beijing's Olympic Green, designed by Swiss
  architects Herzog & de Meuron, artist Ai Weiwei, and China Architecture
  Design & Research Group. Constructed between 2003 and 2008 for the Summer
  Olympics, its striking steel lattice exterior (using 42,000 tons of steel)
  and original capacity of 91,000 spectators made it a global symbol of
  China's modernity. Primarily hosting Olympic ceremonies, athletics, and
  soccer, it later adapted to secondary roles, including concerts,
  exhibitions, tourism (with guided tours and museums), and commercial
  events. Post-Olympics, its capacity was reduced to ~80,000, and it now
  serves as a sustainable, multi-functional hub integrated with public park
  spaces, avoiding underuse through adaptive reuse. The stadium's cultural
  legacy cements its status as a 21st-century architectural marvel and a
  model of large-scale venue sustainability.
`;

const myImpression = `
  I don't remember exactly if I've visited the inside of the building or not, 
  but I know I've seen it from the outside at a good distance before, since I 
  lived in Beijing when I was younger. I think my first impression was that it 
  was big. It was a very big building, and I felt very small next to it. Being 
  a huge stadium meant to hold almost a hundred thousand people means it was massive. 
  Of course, I recognized the bird nest-like design immediately and wondered what it 
  was for, as I didn't know what the building was for at first.
`;

const dadImpression = `
  From my dad: "The first impression I had about the Beijing Bird's Nest was its uniqueness 
  and innovation of the overall design. It's amazing how the building materials were 
  constructed precisely and delicately."
`;

export default function Overview() {
  return (
    <div>
      <div className="text-4xl">{overview}</div>
      <div>{myImpression}</div>
      <div>{dadImpression}</div>
    </div>
  );
}
