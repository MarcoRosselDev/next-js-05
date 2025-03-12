class Peliculas {
  nombre? : string;
  protagonistas? : string[];
  actores? : string[];
  proyectarEnCine(){
    console.log(`La pelicula ${this.nombre} esta en cines`);
  }
  constructor(nombre:string, protagonistas: string[], actores:string[]){
    this.nombre = nombre,
    this.protagonistas = protagonistas,
    this.actores = actores
  }
}

const pelicula = new Peliculas("Barbie", ["barbie", "ken"], ["margot robien", "alguien mas"])

pelicula.proyectarEnCine()