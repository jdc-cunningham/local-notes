- [x] 12/06/2023 on creating first note, UI loads as blank
- [x] 12/06/2023 modifying note blank page

12/06/2023

4:06 PM

lol I try to use it and it's broken, nice, sounds like something I made

okay, the save there's no error, probably a callback issue

alright it was a simple length check on a blank array

there was one other thing I had in mind... the data save is syncrhonous and I think it fires everytime you type...

yeah `onChange` fires on every keystroke, need to batch that like the search

