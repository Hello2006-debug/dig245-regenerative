/* javascript */
const happyBooks = [
    {
        title:"Love Hypothesis",
        summary:`As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees. That man is none other than Adam Carlsen, a young hotshot professor--and well-known ass. Which is why Olive is positively floored when Stanford's reigning lab tyrant agrees to keep her charade a secret and be her fake boyfriend. But when a big science conference goes haywire, putting Olive's career on the Bunsen burner, Adam surprises her again with his unyielding support and even more unyielding... six-pack abs. Suddenly their little experiment feels dangerously close to combustion. And Olive discovers that the only thing more complicated than a hypothesis on love is putting her own heart under the microscope.`,
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611937942i/56732449.jpg"
    },
    {
        title:"You've reached Sam",
        summary:`Seventeen-year-old Julie has her future all planned out—move out of her small town with her boyfriend Sam, attend college in the city, spend a summer in Japan. But then Sam dies. And everything changes.Heartbroken, Julie skips his funeral, throws out his things, and tries everything to forget him and the tragic way he died. But a message Sam left behind in her yearbook forces back memories. Desperate to hear his voice one more time, Julie calls Sam’s cellphone just to listen to his voicemail.And Sam picks up the phone.In a miraculous turn of events, Julie’s been given a second chance at goodbye. The connection is temporary. But hearing Sam’s voice makes her fall for him all over again, and with each call it becomes harder to let him go. However, keeping her otherworldly calls with Sam a secret isn’t easy, especially when Julie witnesses the suffering Sam’s family is going through. Unable to stand by the sidelines and watch their shared loved ones in pain, Julie is torn between spilling the truth about her calls with Sam and risking their connection and losing him forever.`,
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610730335i/53086843.jpg"
    },
    {
        title:"Fourth Wing",
        summary:`Enter the brutal and elite world of a war college for dragon riders...Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away...because dragons don’t bond to “fragile” humans. They incinerate them.With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant.She’ll need every edge her wits can give her just to see the next sunrise.Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret.Friends, enemies, lovers. Everyone at Basgiath War College has an agenda—because once you enter, there are only two ways out: graduate or die`,
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg"
    }
];
const sadBooks = [
    {
        title:"You've reached Sam",
        summary:`Seventeen-year-old Julie has her future all planned out—move out of her small town with her boyfriend Sam, attend college in the city, spend a summer in Japan. But then Sam dies. And everything changes.Heartbroken, Julie skips his funeral, throws out his things, and tries everything to forget him and the tragic way he died. But a message Sam left behind in her yearbook forces back memories. Desperate to hear his voice one more time, Julie calls Sam’s cellphone just to listen to his voicemail.And Sam picks up the phone.In a miraculous turn of events, Julie’s been given a second chance at goodbye. The connection is temporary. But hearing Sam’s voice makes her fall for him all over again, and with each call it becomes harder to let him go. However, keeping her otherworldly calls with Sam a secret isn’t easy, especially when Julie witnesses the suffering Sam’s family is going through. Unable to stand by the sidelines and watch their shared loved ones in pain, Julie is torn between spilling the truth about her calls with Sam and risking their connection and losing him forever.`,
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610730335i/53086843.jpg"
    },
    {
        title:"Love Hypothesis",
        summary:`As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees. That man is none other than Adam Carlsen, a young hotshot professor--and well-known ass. Which is why Olive is positively floored when Stanford's reigning lab tyrant agrees to keep her charade a secret and be her fake boyfriend. But when a big science conference goes haywire, putting Olive's career on the Bunsen burner, Adam surprises her again with his unyielding support and even more unyielding... six-pack abs. Suddenly their little experiment feels dangerously close to combustion. And Olive discovers that the only thing more complicated than a hypothesis on love is putting her own heart under the microscope.`,
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611937942i/56732449.jpg"
    },
    {
        title:"Fourth Wing",
        summary:`Enter the brutal and elite world of a war college for dragon riders...Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away...because dragons don’t bond to “fragile” humans. They incinerate them.With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant.She’ll need every edge her wits can give her just to see the next sunrise.Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret.Friends, enemies, lovers. Everyone at Basgiath War College has an agenda—because once you enter, there are only two ways out: graduate or die`,
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg"
    }
];
const randomBooks = [
    {
        title:"Fourth Wing",
        summary:`Enter the brutal and elite world of a war college for dragon riders...Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away...because dragons don’t bond to “fragile” humans. They incinerate them.With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant.She’ll need every edge her wits can give her just to see the next sunrise.Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret.Friends, enemies, lovers. Everyone at Basgiath War College has an agenda—because once you enter, there are only two ways out: graduate or die`,
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg"
    },
    {
        title:"You've reached Sam",
        summary:`Seventeen-year-old Julie has her future all planned out—move out of her small town with her boyfriend Sam, attend college in the city, spend a summer in Japan. But then Sam dies. And everything changes.Heartbroken, Julie skips his funeral, throws out his things, and tries everything to forget him and the tragic way he died. But a message Sam left behind in her yearbook forces back memories. Desperate to hear his voice one more time, Julie calls Sam’s cellphone just to listen to his voicemail.And Sam picks up the phone.In a miraculous turn of events, Julie’s been given a second chance at goodbye. The connection is temporary. But hearing Sam’s voice makes her fall for him all over again, and with each call it becomes harder to let him go. However, keeping her otherworldly calls with Sam a secret isn’t easy, especially when Julie witnesses the suffering Sam’s family is going through. Unable to stand by the sidelines and watch their shared loved ones in pain, Julie is torn between spilling the truth about her calls with Sam and risking their connection and losing him forever.`,
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610730335i/53086843.jpg"
    },
    {
        title:"Love Hypothesis",
        summary:`As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees. That man is none other than Adam Carlsen, a young hotshot professor--and well-known ass. Which is why Olive is positively floored when Stanford's reigning lab tyrant agrees to keep her charade a secret and be her fake boyfriend. But when a big science conference goes haywire, putting Olive's career on the Bunsen burner, Adam surprises her again with his unyielding support and even more unyielding... six-pack abs. Suddenly their little experiment feels dangerously close to combustion. And Olive discovers that the only thing more complicated than a hypothesis on love is putting her own heart under the microscope.`,
        image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611937942i/56732449.jpg"
    }
];

function generateBooks(){
    const moodSelect = document.querySelector("#moodSelect");
    const selectedMood = moodSelect.value;

    let selectedBook ={};
    if(selectedMood == 1 ){
        selectedBook = happyBooks[Math.floor(Math.random() * happyBooks.length)];
    }else if(selectedMood == 2){
        selectedBook = sadBooks[Math.floor(Math.random() * sadBooks.length)];
    }else{
        selectedBook = randomBooks[Math.floor(Math.random() * randomBooks.length)];
    }


    const bookDetails = document.querySelector(".bookDetails");
    const bookImage = document.querySelector(".bookImage");


    if(bookDetails && bookImage){
        bookDetails.innerHTML =  `<h3>${selectedBook.title}</h3><p>${selectedBook.summary}</p>`;
    bookImage.innerHTML = `<img src="${selectedBook.image}" alt="${selectedBook.title}" style="max-width:100px;">`;
    }
}

document.querySelector("button").addEventListener("click", generateBooks);