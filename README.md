# CoaDE-Engine-Plot
Public plotted repository for engines for CoaDE

Template for new engines:

```
  {
    label: "8.00 km/s Hydrogen Deuteride - Massive III",
        // Name of the engine. If you're not creative, don't include a name,
        // but do include the exhaust velocity and propellant
    author: "Tessfield",
        // Your name, in forums, rl, github, twitter, whatever you want
    thrust: 17400000,
        // thrust in *Newtons*
    cost: 209000,
        // cost in *credits* or whatever they're called. 'c', not 'kc',
        // not 'Mc', etc.
    gimbal: 30,
        // You can leave this alone if it doesn't have it.
        // Currently doesn't show up anywhere, but will implement soon.
    weight: 15000,
        // Mass of the engine in kg (not tonnes)
    diameter: 14.5,
        // Diameter in meters (first/second number in the editor)
    height: 14.1,
        // Height in meters (third number in the editor)
    link: 'https://www.google.com',
        // Link to code or screenshot. Use pastebin or similar for code.
        // Will implement soon.
    /* code: 'CODE HERE', */
        // Maybe in the future I'll implement adding the code here for easy
        // pasting on clicking on the engine? Feel free to use this field,
        // but it's totally unimplemented and completely optional.
        // People can still access this repo to get the code off of here, so
        // you can add the code on this field here and link to the file in the
        // repo? Just a suggestion.
  },
```
