import { heroes } from "../../data/heroes";

export const getHeroesByPublisher = ( publisher ) =>{

  const validPublishers = ['DC Comics', 'Marvel Comics']

  if( !validPublishers.includes( publisher )){
    throw new Error(`Publuser "${publisher}" no es correcto`);
  }

  return heroes.filter( hero => hero.publisher === publisher );
}
