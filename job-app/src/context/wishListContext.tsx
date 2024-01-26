import { createContext, useState } from "react";
import { IJobOffers } from "../types/types";

interface IdefaultState {
  favOffers: IJobOffers[];
  addToFavorites(offer: IJobOffers): void;
  deleteFavorites(offer: IJobOffers): void;
}

interface IWishListProvider {
  children: React.ReactNode;
}

const defaultState: IdefaultState = {
  favOffers: [],
  addToFavorites: (offer: IJobOffers) => {},
  deleteFavorites: (offer: IJobOffers) => {},
};

const WishListContext = createContext(defaultState);
export const WishListProvider = ({ children }: IWishListProvider) => {
  const [favOffers, setFavOffers] = useState<IJobOffers[]>([]);
  const addToFavorites = (offer: IJobOffers) => {
    const findOffer = favOffers.find((e) => e.id === offer.id);
    if (!findOffer) {
      setFavOffers((prev: any) => [...prev, offer]);
    }
  };
  const deleteFavorites = (offer: IJobOffers) => {
    const newOffers = favOffers.filter((e) => e.id !== offer.id);
    setFavOffers(newOffers);
  };
  console.log(favOffers);
  return (
    <WishListContext.Provider
      value={{ favOffers, addToFavorites, deleteFavorites }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListContext;
