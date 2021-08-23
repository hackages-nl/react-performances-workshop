import {DateTime} from "luxon";
import {ComponentType, ReactNode} from "react";

export const getNumberOfMoviesPerYear = (movies: {release_date: string}[]) => {
  const years: {[key: string]: number} = {};

  movies.forEach((movie) => {
    const year = DateTime.fromISO(movie.release_date).year;
    if (years[year]) {
      return years[year]++;
    }
    years[year] = 1;
  });
  const firstYear = Object.keys(years).sort()[0];
  const lastYear = Object.keys(years).sort()[Object.keys(years).length - 1];
  for (let year: any = firstYear; year < lastYear; ++year) {
    if (!years[year]) {
      years[year] = 0;
    }
  }
  return Object.keys(years).map((year) => ({
    year,
    number: years[year],
  }));
};

export const getDisplayName = (
  hoc: () => ReactNode,
  component: ComponentType
) => `${hoc}(${component.displayName || component.name || "component"})`;

export const parseJSON = (res: Response) => res.json();

export const capitalizeTitle = (words: string) =>
  words
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export const range = (n: number) => new Array(n).fill(0).map((_, x) => x);
