/*
 * jumble.c:
 *     A jumble (TM) de-jumbler.
 *     The ultimate weapon to use against the Jumble (tm) puzzle.
 *
 * Copyright (C) 1987, Nick V. Flor
 *
 * Permission is granted to freely distribute this source.
 * Unless you try to make money off of it.  (Not bloody likely)
 *
 * If you really enjoy this program, please send me Disneyland money.
 * (Or e-mail me a better version)
 *
 */

static char
    *bigword;

#define swap(a, b, t) t = a; a = b; b = t;
/*
 * jumble:
 *     Solve those darn jumble thingamajiggies in the San Diego Union
 *     and other newspapers across the world.
 *
 * entry:
 *     word -- The word to be jumbled.
 *
 */
jumble(word)
char
    *word;
{
int
    i = 0;
char
    ch;

    if (!*word)                	/* Printing at the end of the recursion	*/
	printf("%s\n", bigword);/* is sufficient */
    else while (word[i]) {
        swap(word[0], word[i], ch);
	jumble(&word[1]);
	swap(word[0], word[i], ch);
	i++;
    } 
}


main(argc, argv)
int
    argc;
char
    *argv[];
{
    if (argc != 2) {
	puts("usage: jumble <word>");
	exit(0);
    }
    bigword = argv[1];
    jumble(argv[1]);
}
