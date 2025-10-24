import { z } from "zod";

// Poem schema
export const poemSchema = z.object({
  id: z.string(),
  title: z.string(),
  emoji: z.string(),
  content: z.string(),
  author: z.string().default("POETIC SOUL @IK"),
});

export type Poem = z.infer<typeof poemSchema>;
export type InsertPoem = Omit<Poem, 'id'>;

// All poems data
export const poems: Poem[] = [
  {
    id: "whispers-of-what-couldve-been",
    title: "Whispers of What Could've Been",
    emoji: "🥺",
    content: `What differentiates us is my big heart to choose your happiness first and his big heart to boast of his chances of having you,

You chose him over and over again wiping your harsh words at my heart glued with the echoes of I was not a better man to walk down with at the Freetown

Yet I had no choice but to clap with my tears, heart, and feet leaving with many buried words aside from my hot breath burning my lungs I once exhaled with you beneath the seawater,

Distant memories I could think of you while I searched and learned to stop loving you seeking myself right in the setting of the sunrise we once looked together Dreaming!!`,
    author: "POETIC SOUL @IK"
  },
  {
    id: "losing-my-way",
    title: "Losing My Way",
    emoji: "🖤",
    content: `I've covered many miles just to build a reality in my dream with high hopes of getting there,

Being beaten by the harsh weather of rainfall,
Sunlight,
Thirsty lungs breathing high to hold my heart,

The journey never seems to come to an end while my feet hurt looking lost in the middle of the miles I've covered!!`,
    author: "POETIC SOUL @IK"
  },
  {
    id: "a-gentle-man",
    title: "A Gentle Man",
    emoji: "🖤",
    content: `A gentleman standing in the mirror with his flaws trying to make a difference,

Bold gesture amidst the chaos right fitted together with the suit and tie,

A place of better steps to move on with the linings of the Dreams!!`,
    author: "POETIC SOUL @IK"
  },
  {
    id: "him-over-me",
    title: "Him Over Me",
    emoji: "🥺",
    content: `What differentiates us is my big heart to choose your happiness first and his big heart to boast of his chances of having you,

You chose him over and over again wiping your harsh words at my heart glued with the echoes of I was not a better man to walk down with at the Freetown

Yet I had no choice but to clap with my tears, heart, and feet leaving with many buried words aside from my hot breath burning my lungs I once exhaled with you beneath the seawater,

Distant memories I could think of you while I searched and learned to stop loving you seeking myself right in the setting of the sunrise we once looked together Dreaming!!`,
    author: "POETIC SOUL @IK"
  },
  {
    id: "new-dawn",
    title: "New Dawn",
    emoji: "❤️‍🩹",
    content: `I'm a burning Ashe trying to follow the space of the new being I'm becoming despite not being okay,

I stand in the mirror reflecting no one but myself precisely seeking a new dawn to lose my past together with the tears,

Nothing is better than the best I could see myself and learn to live with the distant memories while flipping the pages at my Heart!!`,
    author: "POETIC SOUL @IK"
  },
  {
    id: "burning-flame",
    title: "Burning Flame",
    emoji: "🥺",
    content: `Loving you was never enough to remember to stay despite the two-sided reason to love you righteously without being bothered as I continuously keep seeing the burning flame consuming the man I have to be and Loving you enough to not be with you,

But my difference put behind my past to love wholeheartedly like a soul whose heart has never been broken before giving a glimmering light in my heart to not look for myself in you,

Yet I hold onto my feelings despite it too hard for me to accept we can't be together while I can't help but to wonder if it's could just be a nightmare but is my reality standing in between my Heart!!`,
    author: "POETIC SOUL @IK"
  }
];
