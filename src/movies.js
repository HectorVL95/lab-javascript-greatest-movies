// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

  let directorArray = []

  for( let i = 0; i < moviesArray.length; i++) {
   directorArray.push(moviesArray[i].director)
  }

  return directorArray

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  const filteredArr = moviesArray.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'))


  return filteredArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0
  }

  let sum = 0

  moviesArray.forEach(el => {
    if (el.score !== null && el.score !== undefined) {
      sum += el.score
    }
  })
  let average = sum / moviesArray.length

  return parseFloat(average.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let sum = 0
  const dramaMovies = moviesArray.filter(el => el.genre.includes('Drama'))
  moviesArray.forEach(el => {
    if (el.genre.includes('Drama') && el.score !== null && el.score !== undefined) {
      sum += el.score
    } 
  }
   )

  let average = sum / dramaMovies.length
  
  return average ? parseFloat(average.toFixed(2)) : 0
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
 let newArray = []

  const sortedArray = moviesArray.sort((a, b) => a.year - b.year)

    for (let i = 0; i < sortedArray.length; i++) {
      if(sortedArray[i].year === sortedArray[i].year) {
        sortedArray.sort((a, b) => {
          if (a.year === b.year) {
            return a.title.localeCompare(b.title)
          }
        })
      }
      newArray.push(sortedArray[i])

    }

  console.log(newArray);
  
  return newArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArray = moviesArray.map(el => el.title).sort().slice(0, 20)

  return newArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArray = [];
  
  for(let i = 0; i < moviesArray.length; i++) {
      const stringToMinutes = (string) => {
        const hoursMatch = string.match
        const hrsInMinutes = hours * 60;
        const totalMinutes = hrsInMinutes + minutes
        return totalMinutes
      }

      stringToMinutes(moviesArray[i].duration)
      console.log(stringToMinutes(moviesArray[i].duration))
      newArray.push(moviesArray[i])
    }
    
  console.log(newArray)
  return newArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
