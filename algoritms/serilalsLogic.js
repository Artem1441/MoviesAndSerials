export const serilasLogic = (item, value, setFits = false, setData = false) => {
  //   const genres = [
  //     28, 878, 9648, 10752, 27, 10751, 16, 99, 18, 10749, 53, 10759, 10768, 10762,
  //     35,
  //   ];
  //   const comainGenres = [12, 14, 36, 37, 80, 10402, 10765];

  //   // console.log(value);
  //   if (value === "false") {
  //     return false;
  //   }

  //   let positiveGenre = 0;
  //   let negativeGenre = 0;
  let fits = 80;
  //   let other = false;

  //   if (value.includes(comainGenres)) {
  //     other = true;
  //   }

  //   if (item.genre_ids.length === 1) {
  //     fits = fits - 5;
  //   }
  //   if (item.genre_ids.length === 4) {
  //     fits = fits + 5;
  //   }
  //   if (item.genre_ids.length === 5) {
  //     fits = fits + 10;
  //   }
  //   if (item.genre_ids.length === 6) {
  //     fits = fits + 15;
  //   }
  //   if (item.genre_ids.length === 7) {
  //     fits = fits + 20;
  //   }

  //   for (let i = 0; i < item.genre_ids.length; i++) {
  //     if (
  //       positiveGenre === 0 &&
  //       (JSON.parse(value).includes(item.genre_ids[i]) ||
  //         (other && comainGenres.includes(item.genre_ids[i])))
  //     ) {
  //       fits = fits + 50;
  //       if (JSON.parse(value).length > 7) {
  //         fits = fits - 5;
  //       }
  //       if (JSON.parse(value).length < 3) {
  //         fits = fits + 5;
  //       }
  //       fits = regularPluses(i, fits, item, value);
  //       positiveGenre++;
  //     } else if (
  //       positiveGenre === 1 &&
  //       (JSON.parse(value).includes(item.genre_ids[i]) ||
  //         (other && comainGenres.includes(item.genre_ids[i])))
  //     ) {
  //       fits = fits + 15;
  //       if (JSON.parse(value).length > 7) {
  //         fits = fits - 3;
  //       }
  //       if (JSON.parse(value).length < 3) {
  //         fits = fits + 7;
  //       }
  //       fits = regularPluses(i, fits, item, value);
  //       positiveGenre++;
  //     } else if (
  //       positiveGenre === 2 &&
  //       (JSON.parse(value).includes(item.genre_ids[i]) ||
  //         (other && comainGenres.includes(item.genre_ids[i])))
  //     ) {
  //       fits = fits + 10;
  //       fits = regularPluses(i, fits, item, value);
  //       positiveGenre++;
  //     } else if (
  //       positiveGenre === 3 &&
  //       (JSON.parse(value).includes(item.genre_ids[i]) ||
  //         (other && comainGenres.includes(item.genre_ids[i])))
  //     ) {
  //       fits = fits + 5;
  //       fits = regularPluses(i, fits, item, value);
  //       positiveGenre++;
  //     } else if (
  //       negativeGenre === 0 &&
  //       (!JSON.parse(value).includes(item.genre_ids[i]) ||
  //         !(other && comainGenres.includes(item.genre_ids[i])))
  //     ) {
  //       fits = fits - 15;
  //       if (JSON.parse(value).length < 3) {
  //         fits = fits + 10;
  //       }
  //       fits = regularMinuses(i, fits, item, value);
  //       negativeGenre++;
  //     } else if (
  //       negativeGenre === 1 &&
  //       (!JSON.parse(value).includes(item.genre_ids[i]) ||
  //         !(other && comainGenres.includes(item.genre_ids[i])))
  //     ) {
  //       fits = fits - 10;
  //       if (JSON.parse(value).length < 3) {
  //         fits = fits + 5;
  //       }
  //       fits = regularMinuses(i, fits, item, value);
  //       negativeGenre++;
  //     } else if (
  //       negativeGenre === 2 &&
  //       (!JSON.parse(value).includes(item.genre_ids[i]) ||
  //         !(other && comainGenres.includes(item.genre_ids[i])))
  //     ) {
  //       fits = fits - 5;
  //       fits = regularMinuses(i, fits, item, value);
  //       negativeGenre++;
  //     }
  //   }

  //   if (JSON.parse(value).sort().join(",") === comainGenres.sort().join(",")) {
  //     fits = fits + 19;
  //   }

  //   if (other) {
  //     fits = fits + 12;
  //   }

  //   if (item.vote_average < 5) {
  //     fits = fits - 6;
  //   } else if (item.vote_average >= 5 && item.vote_average < 6) {
  //     fits = fits + 3;
  //   } else if (item.vote_average >= 6 && item.vote_average < 7) {
  //     fits = fits + 5;
  //   } else if (item.vote_average >= 7 && item.vote_average < 8) {
  //     fits = fits + 15;
  //   } else if (item.vote_average >= 8) {
  //     fits = fits + 21;
  //   }
  //   if (item.vote_count < 200) {
  //     fits = fits - 40;
  //   } else if (item.vote_count > 199 && item.vote_count < 500) {
  //     fits = fits - 20;
  //   } else if (item.vote_count > 499 && item.vote_count < 1000) {
  //     fits = fits - 3;
  //   } else if (item.vote_count > 999 && item.vote_count < 2000) {
  //     fits = fits + 5;
  //   } else if (item.vote_count > 1999 && item.vote_count < 5000) {
  //     fits = fits + 6;
  //   } else if (item.vote_count > 4999 && item.vote_count < 10000) {
  //     fits = fits + 11;
  //   } else if (item.vote_count > 9999) {
  //     fits = fits + 19;
  //   }

  //   JSON.parse(value).length === 1
  //     ? (fits = fits + 15)
  //     : JSON.parse(value).length === 2
  //     ? (fits = fits + 8)
  //     : JSON.parse(value).length === 3
  //     ? (fits = fits + 3)
  //     : fits;

  //   if (fits > 95 && fits < 101) {
  //     fits = 96;
  //   } else if (fits > 100 && fits < 107) {
  //     fits = 97;
  //   } else if (fits > 106 && fits < 115) {
  //     fits = 98;
  //   } else if (fits > 114 && fits < 120) {
  //     fits = 99;
  //   } else if (fits > 119) {
  //     fits = 100;
  //   }

  //   if (fits < 10 && fits > 6) {
  //     fits = 10;
  //   } else if (fits < 7 && fits > 1) {
  //     fits = 9;
  //   } else if (fits < 2 && fits > -5) {
  //     fits = 8;
  //   } else if (fits < -4 && fits > -9) {
  //     fits = 7;
  //   } else if (fits < -8 && fits > -15) {
  //     fits = 6;
  //   } else if (fits < -16 && fits > -20) {
  //     fits = 5;
  //   } else if (fits < -19 && fits > -27) {
  //     fits = 4;
  //   } else if (fits < -26 && fits > -35) {
  //     fits = 3;
  //   } else if (fits < -34 && fits > -45) {
  //     fits = 2;
  //   } else if (fits < -44) {
  //     fits = 1;
  //   }

    if (setData !== false) {
      if (JSON.parse(value).length > 8 && fits < 60) {
        setData(null);
      } else if (JSON.parse(value).length > 5 && fits < 50) {
        setData(null);
      } else if (JSON.parse(value).length > 2 && fits < 40) {
        setData(null);
      } else if (JSON.parse(value).length < 3 && fits < 30) {
        setData(null);
      } else {
        setFits(fits);
      }
    } else {
      return fits;
    }
//   };

  // const regularPluses = (i, fits, item, value) => {
  //   if (item.genre_ids[i] == 35) {
  //     fits = fits - 4;
  //   }
  //   return fits;
  // };
  // const regularMinuses = (i, fits, item, value) => {
  //   if (item.genre_ids[i] == 16) {
  //     fits = fits - 17;
  //   }
  //   if (item.genre_ids[i] == 53) {
  //     fits = fits + 8;
  //   }
  //   if (item.genre_ids[i] == 80) {
  //     fits = fits + 6;
  //   }
  //   if (item.genre_ids[i] == 18) {
  //     fits = fits + 4;
  //   }
  //   if (item.genre_ids[i] == 12 && value.includes(28)) {
  //     fits = fits + 14;
  //   }
  //   if (item.genre_ids[i] == 14 && value.includes(878)) {
  //     fits = fits + 14;
  //   }
  //   if (item.genre_ids[i] == 53 && value.includes(28)) {
  //     fits = fits + 4;
  //   }
  return fits;
};
