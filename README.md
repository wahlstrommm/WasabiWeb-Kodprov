# WasabiWeb-Kodprov


# Uppgift:
Bygg en enkel webbplats med en arkivsida och en enskild vy för att visa fruktinformation. Fokuset ligger på tydlig, strukturerad och ren kod – inte på omfattande funktionalitet.


Visa en lista med frukter på en arkivsida.

Låt användaren klicka på en frukt för att se mer information på en enskild sida.

Du får använda HTML, CSS, JavaScript eller PHP.

Strukturera koden så tydligt som möjligt.

Pseudo kod

index.html (Där alla frukter är)
fruit.html (enskilda info om EN frukt)

css/style.css

js/main.js (laddar fruktdata och listan av frukter)
fruit.js (en fruit sida och all js till den)

data/fruits.json (metadatan om varje frukt)

images/(alla fruktbilder)

- [X ] URL parametrar (För komma in enskilt varje frukt (id))
- [ X] Matcha varje frukt med tillhörande info
- [ X] Skapa JSON med frukt infon.
- [ X] Lorem ipsum text
- [ X] Ta in ensild frukt till fruit.html typ fruit.html?id=XXXX
- [ X] Fetcha listan av frukter till min index.html aka arkiv sidan.
  
  index -> main.js -> loopar igenom listan och tar den från json filen ->
    index-> bör visa placeholder samt namnet på frukten sen alternativ en knapp eller liknade för att komma till den specfika frukten