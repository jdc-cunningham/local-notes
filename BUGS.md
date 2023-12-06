- [x] 12/06/2023 on creating first note, UI loads as blank
- [x] 12/06/2023 modifying note blank page
- [x] 12/06/2023 modifying tab focuses first tab

12/06/2023

4:06 PM

lol I try to use it and it's broken, nice, sounds like something I made

okay, the save there's no error, probably a callback issue

alright it was a simple length check on a blank array

there was one other thing I had in mind... the data save is syncrhonous and I think it fires everytime you type...

yeah `onChange` fires on every keystroke, need to batch that like the search

4:18 PM

I tried to update that and it won't work because the value is populated by `localStorage` so the debouncer stops the `textarea`` from updating in real time while you type as you would expect

oh well this doesn't have to be performant

5:04 PM

oh man another one lol... need to set the active tab when updating

5:08 PM

well it was easy to fix

5:16 PM

this still has problems in a new state
