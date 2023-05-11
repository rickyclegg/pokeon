# Pokeon

The Pokémon Configurator providing data to Pokestage, the Pokémon Portal.

## What does it do

When triggered via an HTTP endpoint Pokeon reads from a third party source of data and produces YAML files to be consumed.

### Scope
**First phase** - For every trigger all data will be processed.
**Possible future** - For every trigger only changes to data will be processed.

## My Aim
To build low cost testible software that is easy for a human to read and maintain.  
I want it to be easy to change and adapt to new requirements so we can move at speed.

## What's going through my mind
1. Think about the new initiative. 
2. Think about an ubiquitus language.
3. Create some basic user stories. Acceptance criteria.
4. Pick the first meanful one ([Steel thread](https://www.rubick.com/steel-threads/)).
5. Write a test.
6. Write some code.
7. Commit.
8. Question what we've done... Refactor... Move some code about.
9. Commit.
10. Rebase main.
11. Have a cup of tea.
12. Continue...
13. Release!
14. Monitor!
15. Think about the archetecture. Perhaps some redesign.
16. Pick the next most valuable story.
17. Rinse and repeat if nessessary.

## User Stories
* As Pokestage I need a list of the Pokémon names in a .yml file.
* As Pokestage I need a .yml file for each to provide id of the Pokémon.
* As Pokestage I need a .yml file for each to provide base name of the Pokémon.
* As Pokestage I need a .yml file for each to provide base experience of the Pokémon.
* As Pokestage I need a .yml file for each to provide order of the Pokémon.
* As Pokestage I need a .yml file for each to provide weight of the Pokémon.
* As Pokestage I need a .yml file for each to provide height of the Pokémon.
* As Pokestage I need a .yml file for each to provide types of the Pokémon.
