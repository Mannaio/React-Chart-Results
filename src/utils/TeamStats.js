// export const scores = [
//   { day: '1', Alaves: 0, Atletico: 0, Barcelona: 0, Betis: 0, Bilbao: 0, Celta: 0, Espanyol: 0, Getafe: 0, Granada: 0, Leganes:  0, Levante: 0, Eibar: 0, Mallorca: 0, Osasuna: 0, Real: 0, Sevilla: 0, Sociedad: 0, Valencia: 0, Valladolid: 0, Villareal: 0},
//   { day: '2', Alaves: 0, Atletico: 0, Barcelona: -1, Betis: -3, Bilbao: 0, Celta: -3, Espanyol: -3, Getafe: -1, Granada: 0, Leganes:  -3, Levante: -1, Eibar: -1, Mallorca: 0, Osasuna: 2, Real: 2, Sevilla: 2, Sociedad: 0, Valencia: -2, Valladolid: 2, Villareal: -2},
//   { day: '3', Alaves: -2, Atletico: 2, Barcelona: -1, Betis: -4, Bilbao: 0, Celta: -3, Espanyol: -3, Getafe: -3, Granada: -3, Leganes:  -6, Levante: -1, Eibar: -1, Mallorca: -3, Osasuna: 0, Real: 0, Sevilla: 4, Sociedad: 2, Valencia: -3, Valladolid: 2, Villareal: -3},
//   { day: '4', Alaves: -2, Atletico: 2, Barcelona: -1, Betis: -4, Bilbao: 0, Celta: -3, Espanyol: -6, Getafe: -5, Granada: -1, Leganes:  -7, Levante: -1, Eibar: -2, Mallorca: -4, Osasuna: -2, Real: 0, Sevilla: 2, Sociedad: 1, Valencia: -3, Valladolid: 1, Villareal: -5},
//   { day: '5', Alaves: -5, Atletico: 1, Barcelona: -1, Betis: -6, Bilbao: 0, Celta: -6, Espanyol: -4, Getafe: -5, Granada: 2, Leganes:  -10, Levante: -2, Eibar: -5, Mallorca: -6, Osasuna: -2, Real: 0, Sevilla: 4, Sociedad: 1, Valencia: -4, Valladolid: -1, Villareal: -3},
//   { day: '6', Alaves: -6, Atletico: -1, Barcelona: -2, Betis: -6, Bilbao: 0, Celta: -6, Espanyol: -7, Getafe: -5, Granada: 2, Leganes:  -10, Levante: -2, Eibar: -5, Mallorca: -7, Osasuna: -2, Real: 2, Sevilla: 1, Sociedad: 3, Valencia: -6, Valladolid: -2, Villareal: -3},
//   { day: '7', Alaves: -7, Atletico: 1, Barcelona: -2, Betis: -6, Bilbao: 0, Celta: -8, Espanyol: -7, Getafe: -5, Granada: 2, Leganes:  -12, Levante: -3, Eibar: -5, Mallorca: -10, Osasuna: -3, Real: 2, Sevilla: 0, Sociedad: 3, Valencia: -8, Valladolid: -4, Villareal: -4},
//   { day: '8', Alaves: -7, Atletico: -1, Barcelona: 0, Betis: -7, Bilbao: -3, Celta: -9, Espanyol: -10, Getafe: -8, Granada: 2, Leganes:  -13, Levante: -5, Eibar: -5, Mallorca: -11, Osasuna: -3, Real: 2, Sevilla: 0, Sociedad: 2, Valencia: -6, Valladolid: -2, Villareal: -4},
//   { day: '9', Alaves: -8, Atletico: -1, Barcelona: 0, Betis: -9, Bilbao: -4, Celta: -9, Espanyol: -11, Getafe: -6, Granada: 1, Leganes:  -16, Levante: -3, Eibar: -5, Mallorca: -11, Osasuna: -3, Real: 2, Sevilla: -1, Sociedad: -1, Valencia: -6, Valladolid: -4, Villareal: -5},
// ];
//
// export const scoresseriea = [
//   { day: '1', Atalanta: 0, Bologna: 0, Brescia: 0, Cagliari: 0, Fiorentina: 0, Genoa: 0, Inter: 0, Juventus: 0, Lazio: 0, Lecce: 0, Milan: 0, Napoli: 0, Parma: 0, Roma: 0, Sampdoria: 0, Sassuolo: 0, Spal: 0, Torino: 0, Udinese: 0, Verona: 0},
//   { day: '2', Atalanta: 2, Bologna: 0, Brescia: 2, Cagliari: -3, Fiorentina: -3, Genoa: 0, Inter: 0, Juventus: 2, Lazio: 2, Lecce: -1, Milan: -1, Napoli: 2, Parma: -3, Roma: -2, Sampdoria: -3, Sassuolo: -1, Spal: -3, Torino: 0, Udinese: 0, Verona: -2},
//   { day: '3', Atalanta: -1, Bologna: 0, Brescia: 1, Cagliari: -6, Fiorentina: -4, Genoa: 0, Inter: 2, Juventus: 2, Lazio: 0, Lecce: -4, Milan: -1, Napoli: 1, Parma: -1, Roma: -2, Sampdoria: -4, Sassuolo: -1, Spal: -4, Torino: 2, Udinese: -3, Verona: 0},
//   { day: '4', Atalanta: 1, Bologna: 2, Brescia: -2, Cagliari: -4, Fiorentina: -6, Genoa: -3, Inter: 2, Juventus: 2, Lazio: -1, Lecce: -2, Milan: 1, Napoli: 1, Parma: -4, Roma: -2, Sampdoria: -5, Sassuolo: -2, Spal: -4, Torino: -1, Udinese: -4, Verona: -3},
//   { day: '5', Atalanta: -1, Bologna: -1, Brescia: 0, Cagliari: -4, Fiorentina: -6, Genoa: -4, Inter: 4, Juventus: 2, Lazio: -1, Lecce: -5, Milan: -2, Napoli: 3, Parma: -5, Roma: 0, Sampdoria: -5, Sassuolo: -2, Spal: -5, Torino: -2, Udinese: -7, Verona: -4},
//   { day: '6', Atalanta: 1, Bologna: -1, Brescia: -3, Cagliari: -2, Fiorentina: -6, Genoa: -6, Inter: 4, Juventus: 4, Lazio: -2, Lecce: -3, Milan: -3, Napoli: 0, Parma: -5, Roma: -3, Sampdoria: -6, Sassuolo: -3, Spal: -8, Torino: -2, Udinese: -7, Verona: -6},
//   { day: '7', Atalanta: 3, Bologna: -2, Brescia: -4, Cagliari: -4, Fiorentina: -4, Genoa: -7, Inter: 6, Juventus: 4, Lazio: -2, Lecce: -6, Milan: -6, Napoli: 0, Parma: -5, Roma: -1, Sampdoria: -9, Sassuolo: -6, Spal: -9, Torino: -3, Udinese: -7, Verona: -6},
//   { day: '8', Atalanta: 3, Bologna: -4, Brescia: -4, Cagliari: -4, Fiorentina: -4, Genoa: -10, Inter: 3, Juventus: 6, Lazio: -2, Lecce: -7, Milan: -4, Napoli: 0, Parma: -6, Roma: -3, Sampdoria:  -10, Sassuolo: -6, Spal: -9, Torino: -5, Udinese: -8, Verona: -6},
// ];



export const scores = {
  Liga: [
    { day: '1', Alaves: 0, Atletico: 0, Barcelona: 0, Betis: 0, Bilbao: 0, Celta: 0, Espanyol: 0, Getafe: 0, Granada: 0, Leganes:  0, Levante: 0, Eibar: 0, Mallorca: 0, Osasuna: 0, Real: 0, Sevilla: 0, Sociedad: 0, Valencia: 0, Valladolid: 0, Villareal: 0},
    { day: '2', Alaves: 0, Atletico: 0, Barcelona: -1, Betis: -3, Bilbao: 0, Celta: -3, Espanyol: -3, Getafe: -1, Granada: 0, Leganes:  -3, Levante: -1, Eibar: -1, Mallorca: 0, Osasuna: 2, Real: 2, Sevilla: 2, Sociedad: 0, Valencia: -2, Valladolid: 2, Villareal: -2},
    { day: '3', Alaves: -2, Atletico: 2, Barcelona: -1, Betis: -4, Bilbao: 0, Celta: -3, Espanyol: -3, Getafe: -3, Granada: -3, Leganes:  -6, Levante: -1, Eibar: -1, Mallorca: -3, Osasuna: 0, Real: 0, Sevilla: 4, Sociedad: 2, Valencia: -3, Valladolid: 2, Villareal: -3},
    { day: '4', Alaves: -2, Atletico: 2, Barcelona: -1, Betis: -4, Bilbao: 0, Celta: -3, Espanyol: -6, Getafe: -5, Granada: -1, Leganes:  -7, Levante: -1, Eibar: -2, Mallorca: -4, Osasuna: -2, Real: 0, Sevilla: 2, Sociedad: 1, Valencia: -3, Valladolid: 1, Villareal: -5},
    { day: '5', Alaves: -5, Atletico: 1, Barcelona: -1, Betis: -6, Bilbao: 0, Celta: -6, Espanyol: -4, Getafe: -5, Granada: 2, Leganes:  -10, Levante: -2, Eibar: -5, Mallorca: -6, Osasuna: -2, Real: 0, Sevilla: 4, Sociedad: 1, Valencia: -4, Valladolid: -1, Villareal: -3},
    { day: '6', Alaves: -6, Atletico: -1, Barcelona: -2, Betis: -6, Bilbao: 0, Celta: -6, Espanyol: -7, Getafe: -5, Granada: 2, Leganes:  -10, Levante: -2, Eibar: -5, Mallorca: -7, Osasuna: -2, Real: 2, Sevilla: 1, Sociedad: 3, Valencia: -6, Valladolid: -2, Villareal: -3},
    { day: '7', Alaves: -7, Atletico: 1, Barcelona: -2, Betis: -6, Bilbao: 0, Celta: -8, Espanyol: -7, Getafe: -5, Granada: 2, Leganes:  -12, Levante: -3, Eibar: -5, Mallorca: -10, Osasuna: -3, Real: 2, Sevilla: 0, Sociedad: 3, Valencia: -8, Valladolid: -4, Villareal: -4},
    { day: '8', Alaves: -7, Atletico: -1, Barcelona: 0, Betis: -7, Bilbao: -3, Celta: -9, Espanyol: -10, Getafe: -8, Granada: 2, Leganes:  -13, Levante: -5, Eibar: -5, Mallorca: -11, Osasuna: -3, Real: 2, Sevilla: 0, Sociedad: 2, Valencia: -6, Valladolid: -2, Villareal: -4},
    { day: '9', Alaves: -8, Atletico: -1, Barcelona: 0, Betis: -9, Bilbao: -4, Celta: -9, Espanyol: -11, Getafe: -6, Granada: 1, Leganes:  -16, Levante: -3, Eibar: -5, Mallorca: -11, Osasuna: -3, Real: 2, Sevilla: -1, Sociedad: -1, Valencia: -6, Valladolid: -4, Villareal: -5},
  ],
  Seriea: [
    { day: '1', Atalanta: 0, Bologna: 0, Brescia: 0, Cagliari: 0, Fiorentina: 0, Genoa: 0, Inter: 0, Juventus: 0, Lazio: 0, Lecce: 0, Milan: 0, Napoli: 0, Parma: 0, Roma: 0, Sampdoria: 0, Sassuolo: 0, Spal: 0, Torino: 0, Udinese: 0, Verona: 0},
    { day: '2', Atalanta: 2, Bologna: 0, Brescia: 2, Cagliari: -3, Fiorentina: -3, Genoa: 0, Inter: 0, Juventus: 2, Lazio: 2, Lecce: -1, Milan: -1, Napoli: 2, Parma: -3, Roma: -2, Sampdoria: -3, Sassuolo: -1, Spal: -3, Torino: 0, Udinese: 0, Verona: -2},
    { day: '3', Atalanta: -1, Bologna: 0, Brescia: 1, Cagliari: -6, Fiorentina: -4, Genoa: 0, Inter: 2, Juventus: 2, Lazio: 0, Lecce: -4, Milan: -1, Napoli: 1, Parma: -1, Roma: -2, Sampdoria: -4, Sassuolo: -1, Spal: -4, Torino: 2, Udinese: -3, Verona: 0},
    { day: '4', Atalanta: 1, Bologna: 2, Brescia: -2, Cagliari: -4, Fiorentina: -6, Genoa: -3, Inter: 2, Juventus: 2, Lazio: -1, Lecce: -2, Milan: 1, Napoli: 1, Parma: -4, Roma: -2, Sampdoria: -5, Sassuolo: -2, Spal: -4, Torino: -1, Udinese: -4, Verona: -3},
    { day: '5', Atalanta: -1, Bologna: -1, Brescia: 0, Cagliari: -4, Fiorentina: -6, Genoa: -4, Inter: 4, Juventus: 2, Lazio: -1, Lecce: -5, Milan: -2, Napoli: 3, Parma: -5, Roma: 0, Sampdoria: -5, Sassuolo: -2, Spal: -5, Torino: -2, Udinese: -7, Verona: -4},
    { day: '6', Atalanta: 1, Bologna: -1, Brescia: -3, Cagliari: -2, Fiorentina: -6, Genoa: -6, Inter: 4, Juventus: 4, Lazio: -2, Lecce: -3, Milan: -3, Napoli: 0, Parma: -5, Roma: -3, Sampdoria: -6, Sassuolo: -3, Spal: -8, Torino: -2, Udinese: -7, Verona: -6},
    { day: '7', Atalanta: 3, Bologna: -2, Brescia: -4, Cagliari: -4, Fiorentina: -4, Genoa: -7, Inter: 6, Juventus: 4, Lazio: -2, Lecce: -6, Milan: -6, Napoli: 0, Parma: -5, Roma: -1, Sampdoria: -9, Sassuolo: -6, Spal: -9, Torino: -3, Udinese: -7, Verona: -6},
    { day: '8', Atalanta: 3, Bologna: -4, Brescia: -4, Cagliari: -4, Fiorentina: -4, Genoa: -10, Inter: 3, Juventus: 6, Lazio: -2, Lecce: -7, Milan: -4, Napoli: 0, Parma: -6, Roma: -3, Sampdoria:  -10, Sassuolo: -6, Spal: -9, Torino: -5, Udinese: -8, Verona: -6},
  ]
};
