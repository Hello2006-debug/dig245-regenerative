const happyBooks = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        Author:"J K Rowling",
        summary: "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'. Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!"
    },
    {
        title: "Pride and Prejudice",
        Author:"Jane Austen",
        summary: "This collectable edition is beautifully crafted and designed. Perfect for gifting as well as for keeps. A prized edition for any library. When Elizabeth Bennet meets Fitzwilliam Darcy for the first time at a ball, she writes him off as an arrogant and obnoxious man. He not only acts like an insufferable snob, but she also overhears him rejecting the very idea of asking her for a dance! As life pits them against each other again and again, Darcy begins to fall for Elizabeth's wit and intelligence and Elizabeth begins to question her feelings about Darcy. But when Darcy saves her youngest sister Lydia from a scandal, Elizabeth starts to wonder if her pride has prejudiced her opinion of Darcy. Through this tale about two warring hearts, Jane Austen weaves a witty satire about life in eighteenth century England. And though it was published more than two centuries ago, Pride and Prejudice continues to enthrall readers to this very day. A beautiful classic leather-bound edition, this book is perfect as keepsake"
    },
    {
        title:"Beach Read",
        Author:"Emily Henry",
        summary: "Augustus Everett is an acclaimed author of literary fiction. January Andrews writes bestselling romance. When she pens a happily ever after, he kills off his entire cast.They’re polar opposites.In fact, the only thing they have in common is that for the next three months, they're living in neighboring beach houses, broke, and bogged down with writer's block.Until, one hazy evening, one thing leads to another and they strike a deal designed to force them out of their creative ruts: Augustus will spend the summer writing something happy, and January will pen the next Great American Novel. She’ll take him on field trips worthy of any rom-com montage, and he’ll take her to interview surviving members of a backwoods death cult (obviously). Everyone will finish a book and no one will fall in love. Really."
    },
    {
        title: "The Love Hypothesis",
        Author:"Ali HazelWood",
        summary: "As a third-year PhD candidate, Olive Smith doesn't believe in lasting romantic relationships—but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees.That man is none other than Adam Carlsen, a young hotshot professor—and well-known ass. Which is why Olive is positively floored when Stanford's reigning lab tyrant agrees to keep her charade a secret and be her fake boyfriend. But when a big science conference goes haywire, putting Olive's career on the Bunsen burner, Adam surprises her again with his unyielding support and even more unyielding...six-pack abs.Suddenly their little experiment feels dangerously close to combustion. And Olive discovers that the only thing more complicated than a hypothesis on love is putting her own heart under the microscope."
    },
    {
        title: "The Art of Happiness",
        Author:"Howard C Cutler",
        summary: "The Dalai Lama is probably one of the only people who, if you ask him if he's happy, even though he's suffered the loss of his country, will give you an unconditional What's more, he'll tell you that happiness is the purpose of life, and the the very motion of our life is toward happiness. How to get there has always been the question. He's tried to answer it before, but he's never had the help of a psychiatrist to get the message across in a context we can easily understand.Through meditation, stories, and the meeting of Buddhism and psychology, the Dalai Lama shows us how to defeat day-to-day depression, anxiety, anger, jealousy, or just an ordinary bad mood. He discusses relationships, health, family, work, and spirituality to show us how to ride through life's obstacles on a deep, abiding source of inner peace. Based on 2,500 years of Buddhist meditations and with a healthy dose of common sense, The Art of Happiness is a program that crosses the boundaries of all traditions to help listeners with the difficulties common to all human beings."
    },
    
];

const sadBooks = [
    {
        title: "The Fault in Our Stars",
        Author:"John Green",
        summary: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten.From John Green, #1 bestselling author of The Anthropocene Reviewed and Turtles All the Way Down, The Fault in Our Stars is insightful, bold, irreverent, and raw. It brilliantly explores the funny, thrilling, and tragic business of being alive and in love."
    },
    {
        title: "A Little Life",
        Author:"Hanya Yanagihara",
        summary: "A Little Life follows four college classmates—broke, adrift, and buoyed only by their friendship and ambition—as they move to New York in search of fame and fortune. While their relationships, which are tinged by addiction, success, and pride, deepen over the decades, the men are held together by their devotion to the brilliant, enigmatic Jude, a man scarred by an unspeakable childhood trauma. A hymn to brotherly bonds and a masterful depiction of love in the twenty-first century, Hanya Yanagihara’s stunning novel is about the families we are born into, and those that we make for ourselves."
    },
    {
        title:"Me Before You",
        Author:"Jojo Moyes",
        summary: "They had nothing in common until love gave them everything to lose . . .Louisa Clark is an ordinary girl living an exceedingly ordinary life—steady boyfriend, close family—who has barely been farther afield than their tiny village. She takes a badly needed job working for ex–Master of the Universe Will Traynor, who is wheelchair bound after an accident. Will has always lived a huge life—big deals, extreme sports, worldwide travel—and now he’s pretty sure he cannot live the way he is.Will is acerbic, moody, bossy—but Lou refuses to treat him with kid gloves, and soon his happiness means more to her than she expected. When she learns that Will has shocking plans of his own, she sets out to show him that life is still worth living."
    },
    {
        title: "The Kite Runner",
        Author:"Khaled Hosseini",
        summary: "Taking us from Afghanistan in the final days of its monarchy to the present, The Kite Runner is the unforgettable and beautifully told story of the friendship between two boys growing up in Kabul. Raised in the same household and sharing the same wet nurse, Amir and Hassan grow up in different worlds: Amir is the son of a prominent and wealthy man, while Hassan, the son of Amir's father's servant, is a Hazara - a shunned ethnic minority. Their intertwined lives, and their fates, reflect the eventual tragedy of the world around them. When Amir and his father flee the country for a new life in California, Amir thinks that he has escaped his past. And yet he cannot leave the memory of Hassan behind him.The Kite Runner is a novel about friendship and betrayal, and about the price of loyalty. It is about the bonds between fathers and sons, and the power of fathers over sons - their love, their sacrifices, and their lies. Written against a backdrop of history that has not been told in fiction before, The Kite Runner describes the rich culture and beauty of a land in the process of being destroyed. But through the devastation, Khaled Hosseini offers hope for redemption."
    },
    {
        title: "A thousand Boy Kisses",
        Author:"Tillie Cole",
        summary: "One kiss lasts a moment. But a thousand kisses can last a lifetime.One boy. One girl. A bond that is forged in an instant and cherished for a decade. A bond that neither time nor distance can break. A bond that will last forever.Or so they believe.When seventeen-year-old Rune Kristiansen returns from his native Norway to the sleepy town of Blossom Grove, Georgia, where he befriended Poppy Litchfield as a child, he has just one thing on his mind. Why did the girl who was one half of his soul, who promised to wait faithfully for his return, cut him off without a word of explanation?Rune's heart was broken two years ago when Poppy fell silent. But when he discovers the truth of her absence, he finds that the greatest heartache is yet to come."
    },
];

const rollerBooks = [
    {
        title: "The Chronicles Of Narnia",
        Author:"C.S Lewis",
        summary: "An impressive hardcover volume containing all seven books in the classic fantasy series The Chronicles of Narnia, graced by black-and-white chapter opening illustrations and featuring an essay by C. S. Lewis on writing. This volume also contains C. S. Lewis's essay On Three Ways of Writing for Children.fantastic creatures, heroic deeds, epic battles in the war between good and evil, and unforgettable adventures come together in this world where magic meets reality, which has been enchanting readers of all ages for over sixty years. The Chronicles of Narnia has transcended the fantasy genre to become a part of the canon of classic literature."
    },
    {
        title: "A Court of Thorns and Roses",
        Author:"Sarah J. Maas",
        summary: "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.At least, he's not a beast all the time.As she adapts to her new home, her feelings for the faerie, Tamlin, transform from icy hostility into a fiery passion that burns through every lie she's been told about the beautiful, dangerous world of the Fae. But something is not right in the faerie lands. An ancient, wicked shadow is growing, and Feyre must find a way to stop it, or doom Tamlin-and his world-forever."
    },
    {
        title:"Fourth Wing: Empyrean",
        Author:"Rebecca Yarros ",
        summary: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy.—Booklist, starred reviewFourth Wing will have your heart pounding from beginning to end ... A fantasy like you've never read before.Jennifer L Armentrout, #1 New York Times bestselling authorEnter the brutal and elite world of a war college for dragon riders from USA Today bestselling author Rebecca Yarros Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away … because dragons don’t bond to “fragile” humans. They incinerate them.With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant.She’ll need every edge her wits can give her just to see the next sunrise.Yet, with every day that passes, the war outside grows more deadly, the kingdom’s protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret."
    },
    {
        title: "Powerless",
        Author:"Lauren Robert",
        summary: "She is the very thing he’s spent his whole life hunting.He is the very thing she’s spent her whole life pretending to be.Only the extraordinary belong in the kingdom of Ilya—the exceptional, the empowered, the Elites. The powers these Elites have possessed for decades were graciously gifted to them by the Plague, though not all were fortunate enough to both survive the sickness and reap the reward. Those born Ordinary are just that—ordinary. And when the king decreed that all Ordinaries be banished to preserve his Elite society, lacking an ability suddenly became a crime—making Paedyn Gray a felon by fate and a thief by necessity.Surviving in the slums as an Ordinary is no simple task, and Paedyn knows this better than most. Having been trained by her father to be keenly observant since she was a child, Paedyn poses as a Psychic in the crowded city, blending in with the Elites as best she can to stay alive and out of trouble…easier said than done.When Paeydn unsuspectingly saves one of Ilya’s princes, she finds herself thrown into the Purging Trials. The brutal competition exists to showcase the Elites’ powers—the very thing Paedyn lacks. If the Trials and the opponents within them don’t kill her, the prince she’s fighting feelings for certainly will if he discovers what she is…completely Ordinary."
    },
    {
        title: "Once upon a Broken Heart",
        Author:"Stephanie Garber",
        summary: "For as long as she can remember, Evangeline Fox has believed in true love and happy endings…until she learns that the love of her life will marry another.Desperate to stop the wedding and to heal her wounded heart, Evangeline strikes a deal with the charismatic, but wicked, Prince of Hearts. In exchange for his help, he asks for three kisses, to be given at the time and place of his choosing.But after Evangeline’s first promised kiss, she learns that bargaining with an immortal is a dangerous game—and that the Prince of Hearts wants far more from her than she’d pledged. He has plans for Evangeline, plans that will either end in the greatest happily ever after, or the most exquisite tragedy...."
    },
];

// Function to generate a random color
function getRandomColor() {
    const colors = ["#9C836D", "#4B5D4A", "#D4B185", "#7A8A9E"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Main function to generate book details based on selected mood
function generateBooks() {
    const moodSelect = document.querySelector("#moodSelect");
    const selectedMood = moodSelect.value;

    let selectedBook = {};
    // Select a random book from the relevant array based on mood
    if (selectedMood == "1") {
        selectedBook = happyBooks[Math.floor(Math.random() * happyBooks.length)];
    } else if (selectedMood == "2") {
        selectedBook = sadBooks[Math.floor(Math.random() * sadBooks.length)];
    } else if (selectedMood == "3") {
        selectedBook = rollerBooks[Math.floor(Math.random() * rollerBooks.length)];
    } else {
        alert("Please select a mood!");
        return;
    }

    const bookDetails = document.querySelector(".bookDetails");
    if (bookDetails) {
        // Display the selected book’s details
        bookDetails.innerHTML = `
            <h3>${selectedBook.title}</h3>
            <p><strong>Author:</strong> ${selectedBook.Author}</p>
            <p>${selectedBook.summary}</p>
        `;
        // Apply styling
        bookDetails.style.backgroundColor = getRandomColor();
        bookDetails.style.padding = "15px";
        bookDetails.style.borderRadius = "8px";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Attach event listener to the Generate button
    document.querySelector("#generateButton").addEventListener("click", generateBooks);
});
