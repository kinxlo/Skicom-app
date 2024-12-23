interface IStarRatingProperties {
  rating: number | undefined;
}
interface IStarProperties {
  filled: boolean;
}

const Star = ({ filled }: IStarProperties) => {
  return filled ? (
    <span className="text-neutral-dark-1 px-0.5 xl:text-2xl">★</span>
  ) : (
    <span className="px-0.5 text-gray-400 xl:text-2xl">☆</span>
  );
};

export const StarRating = ({ rating = 0 }: IStarRatingProperties) => {
  const totalStars = 5;
  const stars = [];

  for (let index = 1; index <= totalStars; index++) {
    stars.push(<Star key={index} filled={index <= rating} />);
  }

  return <div className="flex">{stars}</div>;
};
