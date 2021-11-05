import {RawOffer, Offer} from '../types/offers';
import {RawReview, Review} from '../types/reviews';

export const adaptOfferToCamelCase = (item: RawOffer): Offer => ({
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
});

export const adaptReviewToCamelCase = (item: RawReview): Review => ({
  comment: item.comment,
  date: item.date,
  id: item.id,
  rating: item.rating,
  user: {
    id: item.user.id,
    name: item.user.name,
    avatarUrl: item.user['avatar_url'],
    isPro: item.user['is_pro'],
  },
});
