import {APIOffer, Offer} from '../types/offers';

export interface OfferMapper<T>{
  mapSnakeCase(item: T):Offer
}

export class OfferSnakeCaseMapper implements OfferMapper<APIOffer>{
  mapSnakeCase(item: APIOffer): Offer {
    return ({
      id: item.id,
      previewImage: item['preview_image'],
      title: item.title,
      price: item.price,
      type: item.type,
      rating: item.rating,
      isFavorite: item['is_favorite'],
      isPremium: item['is_premium'],
      bedrooms: item.bedrooms,
      description: item.description,
      goods: item.goods,
      maxAdults: item['max_adults'],
      host: {
        id: item.host.id,
        name: item.host.name,
        avatarUrl: item.host['avatar_url'],
        isPro: item.host['is_pro'],
      },
      location: {...item.location},
      city: {...item.city},
    }
    );
  }
}
