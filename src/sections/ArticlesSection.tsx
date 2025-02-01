const p1 = `
This paper explores how China's National Stadium for the 2008
Olympics became a symbol of both nationalist ambition and globalized
identity. The stadium sparked debates between cultural conservatives
criticizing its cost and foreign influence and liberals advocating
for international collaboration. The government's pause on
construction to revise the design highlights tensions between
showcasing China's rise and managing domestic critiques of
extravagance. Ultimately, the project reflects how global
architecture is used to narrate national pride in an era of economic
and political globalization.
`;
const c1 = `
https://www.tandfonline.com/doi/full/10.1111/j.1467-9906.2008.00386.x#abstract
Ren, X. (2008). Architecture and Nation Building in the Age of
Globalization: Construction of the National Stadium of Beijing for
the 2008 Olympics. _Journal of Urban Affairs_, _30_(2), 175-190.
https://doi.org/10.1111/j.1467-9906.2008.00386.x
`;

const p2 = `
This research article describes the development and implementation
of a wireless sensor network (WSN) for monitoring China's National
Stadium. The system uses 290 different sensors to measure various
structural parameters like stress, displacement, acceleration, wind,
and temperature across the massive 40,000-ton steel structure. The
WSN employs a chain-type network topology with 98 sensor nodes
organized into eight areas, allowing for flexible monitoring of the
stadium's health over more than a year - revealing interesting
findings about how temperature significantly affects the structure's
behavior despite its apparent rigidity.
`;

const c2 = `
https://journals.sagepub.com/doi/full/10.1155/2013/709724
Shen Y, Yang P, Zhang P, et al. Development of a Multitype Wireless
Sensor Network for the Large-Scale Structure of the National Stadium
in China. International Journal of Distributed Sensor Networks.
2013;9(12). doi:10.1155/2013/709724
`;
export default function ArticlesSection() {
  return (
    <div>
      <div>{p1}</div>
      <div>{c1}</div>
      <div>{p2}</div>
      <div>{c2}</div>
    </div>
  );
}
