# Sorting and filtering with JavaScript array functions.

The JavaScript array methods are very versatile. Let's look at sort, filter, and includes.

## Movies.

Let's say we have some movies that we want to sort:

    const movies = [
      {
        title: "Crocodile Dundee",
        year: 1986,
        genres: ["Adventure", "Comedy"],
      },
      {
        title: "Valkyrie",
        year: 2008,
        genres: ["Drama", "History", "Thriller"],
      },
      {
        title: "Ratatouille",
        year: 2007,
        genres: ["Animation", "Comedy", "Family"],
      },
      {
        title: "City of God",
        year: 2002,
        genres: ["Crime", "Drama"],
      }
    ]

Sort algorithms work by comparing elements pairwise and operating on them until, for any given item, every item higher in the array is greater than the item, and every item lower is less than the item. But, what does it mean to be greater or less than?

For the movies, we can define a movie to be less than another movie if its year of release is less than the other movie's. The strategy for comparison would look like this:

#### Given movies A and B, A < B is B.year < B.year

In JavaScript, the sort method of an array can take a comparison function. The comparison function returns `0` if they are equal, and a negative or positive number if one or the other is greater. For example, the standard way to sort numbers, would be done with this comparison function:

    const array = [43,2,1,5,7];
    const comparisonFn = (a, b) => a - b;
    array.sort(comparisonFn) 
    array // array is now: [ 1, 2, 5, 7, 43 ]

Reverse sorting would look like this:

    const array = [43,2,1,5,7];
    const comparisonFn = (a, b) => b - a;
    array.sort(comparisonFn) 
    array // array is now: [ 43, 7, 5, 2, 1 ] 

The flexibility of a comparison function can be shone by sorting more arbitrary items like movies. You can sort by year released with this comparison function: 

    const compareMoviesByYear = (a, b) => a.year - b.year;
    movies.sort(compareMoviesByYear);

## Invalid comparison functions

Any function can work as a comparison function as long as it follows these properties:

    If A<B and B<C then A<C
    If X=Y and Y=Z then X=Z

This is called the transitive property.

## Performance of comparisonFn

Comparison functions will be run O(n*log n) times on average when sorting the array. So it is helpful to optimize them. For example, the following comparison function for ordering movies by title:

    const normalizeTitle = (str) => {
      const m = str.match(/^the (.+)$/i);
      if(m) {
        return m[1].toLowerCase();
      }
      else {
        return str.toLowerCase();
      }
    };
    const comp = (a, b) => {
      const aT = normalizeTitle(a.title);
      const bT = normalizeTitle(b.title);
      return aT>bT ? 1: -1;
    };
    movies.sort(comp);

We want to sort by title, but if the title starts with the word 'the', we want to remove it before sorting.  Here, the normalizeTitle needs to create a regex every time it is called whenever a title with 'the' is being compared. We could think about how to reduce the number of times a regex is created and called and improve the running time of the sort operation by n*log n times. We might compile the regex outside of `comp` or we could memoize `comp`. Optimizing code can be a waste of a programmer's time, but optimizing a comparison function may be a good place to make use of optimization techniques.
