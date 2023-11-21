const movies = [
    [
        'The Shawshank Redemption',
        '1994',
        'Frank Darabont',
        '2h 22min',
        ['Crime', 'Drama'],
        '9.3'
    ],
    [
        'The Godfather',
        '1972',
        'Francis Ford Coppola',
        '2h 55min',
        ['Crime', 'Drama'],
        '9.2'
    ],
    [
        'The Godfather: Part II',
        '1974',
        'Francis Ford Coppola',
        '3h 22min',
        ['Crime', 'Drama'],
        '9.0'
    ],
    [
        'The Dark Knight',
        '2008',
        'Christopher Nolan',
        '2h 32min',
        ['Action', 'Crime', 'Drama', 'Thriller'],
        '9.0'
    ],
    [
        '12 Angry Men',
        '1957',
        'Sidney Lumet',
        '1h 36min',
        ['Crime', 'Drama'],
        '8.9'
    ],
    [
        'Schindler\'s List',
        '1993',
        'Steven Spielberg',
        '3h 15min',
        ['Biography', 'Drama', 'History'],
        '8.9'
    ],
    [
        'Pulp Fiction',
        '1994',
        'Quentin Tarantino',
        '2h 34min',
        ['Crime', 'Drama'],
        '8.9'
    ],
    [
        'The Lord of the Rings: The Return of the King',
        '2003',
        'Peter Jackson',
        '3h 21min',
        ['Adventure', 'Drama', 'Fantasy'],
        '8.9'
    ],
    [
        'Il buono, il brutto, il cattivo',
        '1966',
        'Sergio Leone',
        '3h 2min',
        ['Western'],
        '8.9'
    ],
    [
        'Fight Club',
        '1999',
        'David Fincher',
        '2h 19min',
        ['Drama'],
        '8.8'
    ],
    [
        'The Lord of the Rings: The Fellowship of the Ring',
        '2001',
        'Peter Jackson',
        '2h 58min',
        ['Adventure', 'Drama', 'Fantasy'],
        '8.8'
    ],
    [
        'Forrest Gump',
        '1994',
        'Robert Zemeckis',
        '2h 22min',
        ['Comedy', 'Drama', 'Romance'],
        '8.8'
    ],
    [
        'Star Wars: Episode V - The Empire Strikes Back',
        '1980',
        'Irvin Kershner',
        '2h 4min',
        ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        '8.8'
    ],
    [
        'Inception',
        '2010',
        'Christopher Nolan',
        '2h 28min',
        ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
        '8.8'
    ],
    [
        'The Lord of the Rings: The Two Towers',
        '2002',
        'Peter Jackson',
        '2h 59min',
        ['Adventure', 'Drama', 'Fantasy'],
        '8.7'
    ],
    [
        'One Flew Over the Cuckoo\'s Nest',
        '1975',
        'Milos Forman',
        '2h 13min',
        ['Drama'],
        '8.7'
    ],
    [
        'Goodfellas',
        '1990',
        'Martin Scorsese',
        '2h 26min',
        ['Crime', 'Drama'],
        '8.7'
    ],
    [
        'The Matrix',
        '1999',
        'Lana Wachowski',
        '2h 16min',
        ['Action', 'Sci-Fi'],
        '8.7'
    ],
    [
        'Shichinin no samurai',
        '1954',
        'Akira Kurosawa',
        '3h 27min',
        ['Adventure', 'Drama'],
        '8.7'
    ],
    [
        'Star Wars',
        '1977',
        'George Lucas',
        '2h 1min',
        ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        '8.7'
    ],
    [
        'Cidade de Deus',
        '2002',
        'Fernando Meirelles',
        '2h 10min',
        ['Crime', 'Drama'],
        '8.7'
    ],
    [
        'Se7en',
        '1995',
        'David Fincher',
        '2h 7min',
        ['Crime', 'Drama', 'Mystery', 'Thriller'],
        '8.6'
    ],
    [
        'The Silence of the Lambs',
        '1991',
        'Jonathan Demme',
        '1h 58min',
        ['Crime', 'Drama', 'Thriller'],
        '8.6'
    ],
    [
        'It\'s a Wonderful Life',
        '1946',
        'Frank Capra',
        '2h 10min',
        ['Drama', 'Family', 'Fantasy'],
        '8.6'
    ],
    [
        'La vita è bella',
        '1997',
        'Roberto Benigni',
        '1h 56min',
        ['Comedy', 'Drama', 'War'],
        '8.6'
    ],
    [
        'The Usual Suspects',
        '1995',
        'Bryan Singer',
        '1h 46min',
        ['Crime', 'Drama', 'Mystery', 'Thriller'],
        '8.6'
    ],
    [
        'Léon',
        '1988',
        'Luc Besson',
        '1h 50min',
        ['Crime', 'Drama', 'Thriller'],
        '8.6'
    ],
    [
        'Saving Private Ryan',
        '1998',
        'Steven Spielberg',
        '2h 49min',
        ['Drama', 'War'],
        '8.6'
    ],
    [
        'Sen to Chihiro no kamikakushi',
        '2001',
        'Hayao Miyazaki',
        '2h 5min',
        ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
        '8.6'
    ],
    [
        'American History X',
        '1998',
        'Tony Kaye',
        '1h 59min',
        ['Crime', 'Drama'],
        '8.5'
    ],
    [
        'C\'era una volta il West',
        '1968',
        'Sergio Leone',
        '2h 44min',
        ['Western'],
        '8.6'
    ],
    [
        'Interstellar',
        '2014',
        'Christopher Nolan',
        '2h 49min',
        ['Adventure', 'Drama', 'Sci-Fi'],
        '8.6'
    ],
    [
        'Psycho',
        '1960',
        'Alfred Hitchcock',
        '1h 49min',
        ['Horror', 'Mystery', 'Thriller'],
        '8.5'
    ],
    [
        'The Green Mile',
        '1999',
        'Frank Darabont',
        '3h 9min',
        ['Crime', 'Drama', 'Fantasy', 'Mystery'],
        '8.5'
    ],
    [
        'Casablanca',
        '1942',
        'Michael Curtiz',
        '1h 42min',
        ['Drama', 'Romance', 'War'],
        '8.5'
    ],
    [
        'City Lights',
        '1931',
        'Charles Chaplin',
        '1h 27min',
        ['Comedy', 'Drama', 'Romance'],
        '8.6'
    ],
    [
        'Intouchables',
        '2011',
        'Olivier Nakache',
        '1h 52min',
        ['Biography', 'Comedy', 'Drama'],
        '8.6'
    ],
    [
        'Modern Times',
        '1936',
        'Charles Chaplin',
        '1h 27min',
        ['Comedy', 'Drama', 'Family', 'Romance'],
        '8.5'
    ],
    [
        'Raiders of the Lost Ark',
        '1981',
        'Steven Spielberg',
        '1h 55min',
        ['Action', 'Adventure'],
        '8.5'
    ],
    [
        'The Pianist',
        '2002',
        'Roman Polanski',
        '2h 30min',
        ['Biography', 'Drama', 'Music', 'War'],
        '8.5'
    ],
    [
        'The Departed',
        '2006',
        'Martin Scorsese',
        '2h 31min',
        ['Crime', 'Drama', 'Thriller'],
        '8.5'
    ],
    [
        'Rear Window',
        '1954',
        'Alfred Hitchcock',
        '1h 52min',
        ['Mystery', 'Thriller'],
        '8.5'
    ],
    [
        'Terminator 2: Judgment Day',
        '1991',
        'James Cameron',
        '2h 17min',
        ['Action', 'Sci-Fi', 'Thriller'],
        '8.5'
    ],
    [
        'Back to the Future',
        '1985',
        'Robert Zemeckis',
        '1h 56min',
        ['Adventure', 'Comedy', 'Sci-Fi'],
        '8.5'
    ],
    [
        'Whiplash',
        '2014',
        'Damien Chazelle',
        '1h 47min',
        ['Drama', 'Music'],
        '8.5'
    ],
    [
        'Gladiator',
        '2000',
        'Ridley Scott',
        '2h 35min',
        ['Action', 'Adventure', 'Drama'],
        '8.5'
    ],
    [
        'The Prestige',
        '1994',
        'Christopher Nolan',
        '2h 10min',
        ['Drama', 'Mystery', 'Sci-Fi', 'Thriller'],
        '8.5'
    ],
    [
        'The Lion King',
        '1994',
        'Roger Allers',
        '1h 28min',
        ['Animation', 'Adventure', 'Drama', 'Family', 'Musical'],
        '8.5'
    ],
    [
        'Memento',
        '2000',
        'Christopher Nolan',
        '1h 53min',
        ['Mystery', 'Thriller'],
        '8.5'
    ],
    [
        'Apocalypse Now',
        '1979',
        'Francis Ford Coppola',
        '2h 27min',
        ['Drama', 'War'],
        '8.5'
    ],
    [
        'Alien',
        '1979',
        'Ridley Scott',
        '1h 57min',
        ['Horror', 'Sci-Fi'],
        '8.5'
    ],
    [
        'The Great Dictator',
        '1940',
        'Charles Chaplin',
        '2h 5min',
        ['Comedy', 'Drama', 'War'],
        '8.5'
    ],
    [
        'Sunset Blvd.',
        '1950',
        'Billy Wilder',
        '1h 50min',
        ['Drama', 'Film-Noir'],
        '8.5'
    ],
    [
        'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        '1964',
        'Stanley Kubrick',
        '1h 35min',
        ['Comedy'],
        '8.5'
    ],
    [
        'Nuovo Cinema Paradiso',
        '1988',
        'Giuseppe Tornatore',
        '2h 35min',
        ['Drama'],
        '8.5'
    ],
    [
        'Das Leben der Anderen',
        '2006',
        'Florian Henckel von Donnersmarck',
        '2h 17min',
        ['Drama', 'Thriller'],
        '8.5'
    ],
    [
        'Hotaru no haka',
        '1988',
        'Isao Takahata',
        '1h 29min',
        ['Animation', 'Drama', 'War'],
        '8.5'
    ],
    [
        'Blade Runner 2049',
        '2017',
        'Denis Villeneuve',
        '2h 44min',
        ['Mystery', 'Sci-Fi', 'Thriller'],
        '8.5'
    ],
    [
        'Paths of Glory',
        '1957',
        'Stanley Kubrick',
        '1h 28min',
        ['Drama', 'War'],
        '8.4'
    ],
    [
        'Django Unchained',
        '2012',
        'Quentin Tarantino',
        '2h 45min',
        ['Drama', 'Western'],
        '8.4'
    ],
    [
        'The Shining',
        '1980',
        'Stanley Kubrick',
        '2h 26min',
        ['Drama', 'Horror'],
        '8.4'
    ],
    [
        'WALL·E',
        '2008',
        'Andrew Stanton',
        '1h 38min',
        ['Animation', 'Adventure', 'Family', 'Sci-Fi'],
        '8.4'
    ],
    [
        'American Beauty',
        '1999',
        'Sam Mendes',
        '2h 2min',
        ['Drama', 'Romance'],
        '8.4'
    ],
    [
        'The Dark Knight Rises',
        '2012',
        'Christopher Nolan',
        '2h 44min',
        ['Action', 'Thriller'],
        '8.4'
    ],
    [
        'Mononoke-hime',
        '1997',
        'Hayao Miyazaki',
        '2h 14min',
        ['Animation', 'Adventure', 'Fantasy'],
        '8.4'
    ],
    [
        'Oldeuboi',
        '2003',
        'Chan-wook Park',
        '2h',
        ['Action', 'Drama', 'Mystery', 'Thriller'],
        '8.4'
    ],
    [
        'Aliens',
        '1986',
        'James Cameron',
        '2h 17min',
        ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
        '8.4'
    ],
    [
        'Witness for the Prosecution',
        '1957',
        'Billy Wilder',
        '1h 56min',
        ['Crime', 'Drama', 'Mystery', 'Thriller'],
        '8.4'
    ],
    [
        'Once Upon a Time in America',
        '1984',
        'Sergio Leone',
        '3h 49min',
        ['Crime', 'Drama'],
        '8.4'
    ],
    [
        'Das Boot',
        '1981',
        'Wolfgang Petersen',
        '2h 29min',
        ['Adventure', 'Drama', 'Thriller', 'War'],
        '8.4'
    ],
    [
        'Citizen Kane',
        '1941',
        'Orson Welles',
        '1h 59min',
        ['Drama', 'Mystery'],
        '8.4'
    ],
    [
        'Dangal',
        '2016',
        'Nitesh Tiwari',
        '2h 41min',
        ['Action', 'Biography', 'Drama', 'Sport'],
        '8.6'
    ],
    [
        'Vertigo',
        '2001',
        'Alfred Hitchcock',
        '2h 8min',
        ['Mystery', 'Romance', 'Thriller'],
        '8.4'
    ],
    [
        'North by Northwest',
        '1959',
        'Alfred Hitchcock',
        '2h 16min',
        ['Action', 'Adventure', 'Mystery', 'Thriller'],
        '8.4'
    ],
    [
        'Star Wars: Episode VI - Return of the Jedi',
        '1983',
        'Richard Marquand',
        '2h 11min',
        ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        '8.4'
    ],
    [
        'Braveheart',
        '1995',
        'Mel Gibson',
        '2h 58min',
        ['Biography', 'Drama', 'History', 'War'],
        '8.4'
    ],
    [
        'Reservoir Dogs',
        '1992',
        'Quentin Tarantino',
        '1h 39min',
        ['Crime', 'Drama', 'Thriller'],
        '8.3'
    ],
    [
        'M',
        '1931',
        'Fritz Lang',
        '1h 57min',
        ['Crime', 'Drama', 'Mystery', 'Thriller'],
        '8.4'
    ],
    [
        'Requiem for a Dream',
        '2000',
        'Darren Aronofsky',
        '1h 42min',
        ['Drama'],
        '8.3'
    ],
    [
        'Le fabuleux destin d\'Amélie Poulain',
        '2001',
        'Jean-Pierre Jeunet',
        '2h 2min',
        ['Comedy', 'Romance'],
        '8.4'
    ],
    [
        'Taare Zameen Par',
        '2007',
        'Aamir Khan',
        '2h 45min',
        ['Drama', 'Family'],
        '8.5'
    ],
    [
        'A Clockwork Orange',
        '1971',
        'Stanley Kubrick',
        '2h 16min',
        ['Crime', 'Drama', 'Sci-Fi'],
        '8.3'
    ],
    [
        'Kimi no na wa.',
        '2016',
        'Makoto Shinkai',
        '1h 46min',
        ['Animation', 'Drama', 'Fantasy', 'Romance'],
        '8.5'
    ],
    [
        'Lawrence of Arabia',
        '1962',
        'David Lean',
        '3h 36min',
        ['Adventure', 'Biography', 'Drama', 'History', 'War'],
        '8.3'
    ],
    [
        'Double Indemnity',
        '1944',
        'Billy Wilder',
        '1h 47min',
        ['Crime', 'Drama', 'Film-Noir', 'Mystery', 'Thriller'],
        '8.3'
    ],
    [
        'Amadeus',
        '1984',
        'Milos Forman',
        '2h 40min',
        ['Biography', 'Drama', 'History', 'Music'],
        '8.3'
    ],
    [
        'Eternal Sunshine of the Spotless Mind',
        '2004',
        'Michel Gondry',
        '1h 48min',
        ['Drama', 'Romance', 'Sci-Fi'],
        '8.3'
    ],
    [
        'Taxi Driver',
        '1976',
        'Martin Scorsese',
        '1h 53min',
        ['Crime', 'Drama'],
        '8.3'
    ],
    [
        'To Kill a Mockingbird',
        '1962',
        'Robert Mulligan',
        '2h 9min',
        ['Crime', 'Drama'],
        '8.3'
    ],
    [
        'Dunkirk',
        '2017',
        'Christopher Nolan',
        '1h 46min',
        ['Action', 'Drama', 'History', 'Thriller', 'War'],
        '8.3'
    ],
    [
        'Full Metal Jacket',
        '1987',
        'Stanley Kubrick',
        '1h 56min',
        ['Drama', 'War'],
        '8.3'
    ],
    [
        '2001: A Space Odyssey',
        '1968',
        'Stanley Kubrick',
        '2h 29min',
        ['Adventure', 'Sci-Fi'],
        '8.3'
    ],
    [
        'Singin\' in the Rain',
        '1952',
        'Stanley Donen',
        '1h 43min',
        ['Comedy', 'Musical', 'Romance'],
        '8.3'
    ],
    [
        'Toy Story 3',
        '2010',
        'Lee Unkrich',
        '1h 43min',
        ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
        '8.3'
    ],
    [
        'Toy Story',
        '1995',
        'John Lasseter',
        '1h 21min',
        ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
        '8.3'
    ],
    [
        'The Sting',
        '1973',
        'George Roy Hill',
        '2h 9min',
        ['Comedy', 'Crime', 'Drama'],
        '8.3'
    ],
    [
        '3 Idiots',
        '2009',
        'Rajkumar Hirani',
        '2h 50min',
        ['Adventure', 'Comedy', 'Drama', 'Romance'],
        '8.4'
    ],
    [
        'Ladri di biciclette',
        '1948',
        'Vittorio De Sica',
        '1h 29min',
        ['Drama'],
        '8.3'
    ],
    [
        'Inglourious Basterds',
        '2009',
        'Quentin Tarantino',
        '2h 33min',
        ['Adventure', 'Drama', 'War'],
        '8.3'
    ],
    [
        'The Kid',
        '1921',
        'Charles Chaplin',
        '1h 8min',
        ['Comedy', 'Drama', 'Family'],
        '8.3'
    ],
    [
        'Snatch',
        '2000',
        'Guy Ritchie',
        '1h 44min',
        ['Comedy', 'Crime'],
        '8.3'
    ],
    [
        'Monty Python and the Holy Grail',
        '1975',
        'Terry Gilliam',
        '1h 31min',
        ['Adventure', 'Comedy', 'Fantasy'],
        '8.3'
    ],
    [
        'Good Will Hunting',
        '1997',
        'Gus Van Sant',
        '2h 6min',
        ['Drama'],
        '8.3'
    ],
    [
        'Jagten',
        '2012',
        'Thomas Vinterberg',
        '1h 55min',
        ['Drama'],
        '8.3'
    ],
    [
        'Per qualche dollaro in più',
        '1965',
        'Sergio Leone',
        '2h 12min',
        ['Western'],
        '8.3'
    ],
    [
        'L.A. Confidential',
        '1997',
        'Curtis Hanson',
        '2h 18min',
        ['Crime', 'Drama', 'Mystery', 'Thriller'],
        '8.3'
    ],
    [
        'Scarface',
        '1983',
        'Brian De Palma',
        '2h 50min',
        ['Crime', 'Drama'],
        '8.3'
    ],
    [
        'The Apartment',
        '1960',
        'Billy Wilder',
        '2h 5min',
        ['Comedy', 'Drama', 'Romance'],
        '8.3'
    ],
    [
        'Metropolis',
        '1927',
        'Fritz Lang',
        '2h 33min',
        ['Drama', 'Sci-Fi'],
        '8.3'
    ],
    [
        'Jodaeiye Nader az Simin',
        '2011',
        'Asghar Farhadi',
        '2h 3min',
        ['Drama', 'Mystery'],
        '8.4'
    ],
    [
        'Rashômon',
        '1950',
        'Akira Kurosawa',
        '1h 28min',
        ['Crime', 'Drama', 'Mystery'],
        '8.3'
    ],
    [
        'Indiana Jones and the Last Crusade',
        '1989',
        'Steven Spielberg',
        '2h 7min',
        ['Action', 'Adventure', 'Fantasy'],
        '8.3'
    ],
    [
        'All About Eve',
        '1950',
        'Joseph L. Mankiewicz',
        '2h 18min',
        ['Drama'],
        '8.3'
    ],
    [
        'Yôjinbô',
        '1961',
        'Akira Kurosawa',
        '1h 50min',
        ['Action', 'Drama', 'Thriller'],
        '8.3'
    ],
    [
        'Babam ve Oglum',
        '2005',
        'Çagan Irmak',
        '1h 48min',
        ['Drama'],
        '8.5'
    ],
    [
        'Up',
        '2009',
        'Pete Docter',
        '1h 36min',
        ['Animation', 'Adventure', 'Comedy', 'Family'],
        '8.3'
    ],
    [
        'Batman Begins',
        '2005',
        'Christopher Nolan',
        '2h 32min',
        ['Action', 'Adventure', 'Thriller'],
        '8.3'
    ],
    [
        'Some Like It Hot',
        '1959',
        'Billy Wilder',
        '2h 1min',
        ['Comedy', 'Romance'],
        '8.3'
    ],
    [
        'The Treasure of the Sierra Madre',
        '1948',
        'John Huston',
        '2h 6min',
        ['Adventure', 'Drama', 'Western'],
        '8.3'
    ],
    [
        'Unforgiven',
        '1992',
        'Clint Eastwood',
        '2h 10min',
        ['Drama', 'Western'],
        '8.2'
    ],
    [
        'Der Untergang',
        '2004',
        'Oliver Hirschbiegel',
        '2h 36min',
        ['Biography', 'Drama', 'History', 'War'],
        '8.2'
    ],
    [
        'Die Hard',
        '1988',
        'John McTiernan',
        '2h 11min',
        ['Action', 'Thriller'],
        '8.2'
    ],
    [
        'Raging Bull',
        '1980',
        'Martin Scorsese',
        '2h 9min',
        ['Biography', 'Drama', 'Sport'],
        '8.2'
    ],
    [
        'Heat',
        '1995',
        'Michael Mann',
        '2h 50min',
        ['Action', 'Crime', 'Drama', 'Thriller'],
        '8.2'
    ],
    [
        'The Third Man',
        '1949',
        'Carol Reed',
        '1h 44min',
        ['Film-Noir', 'Mystery', 'Thriller'],
        '8.3'
    ]
];
