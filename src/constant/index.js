import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";
import { IoMdFootball, IoMdTime } from "react-icons/io";

import Event from "../../src/assets/event/event_bg.jpg";
import dance from "../../src/assets/event/dance.jpg";

export const ServiceData = [
  {
    icon: RxCrop,
    title: "Brocante",
    place: "Jardin de Ville - Rue du Clos de l'Érable",
    content: "01/05/2024",
    backgroundImage: Event,
  },
  {
    icon: RxPencil2,
    title: "Tournoi de pétanque",
    place: "Stade Municipal - Rue René Cassin",
    content: "18/05/2024",
    backgroundImage: Event,
  },
  {
    icon: RxDesktop,
    title: "Soirée dansante senior",
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    content: "14/06/2024",
    backgroundImage: Event,
  },
  {
    icon: IoMdFootball,
    title: "Tournoi Foot mixte",
    place: "Stade Municipal - Rue René Cassin",
    content: "29/06/2024",
    backgroundImage: Event,
  },
  {
    icon: RxAccessibility,
    title: "Loto",
    place: "Gymnase Municipal - 44 Rue des Sablons",
    content: "26/10/2024",
    backgroundImage: Event,
  },
  {
    icon: RxRocket,
    title: "Cuisine du Monde",
    content: "09/11/2024",
    backgroundImage: Event,
  },
  {
    icon: RxCrop,
    title: "Tournoi de Belote",
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    content: "30/11/2024",
    backgroundImage: Event,
  },
];

export const ModalData = [
  {
    icon: IoMdTime,
    place: "Jardin de Ville - Rue du Clos de l'Érable",
    time: "Horaires: 08H00 - 18H00",
    content:
      "Une brocante a été organisée par l'association \"Les Voyageurs du Coeur\" le mercredi 1er mai à Saint-Thibault-des-Vignes, au niveau du Jardin de Ville (rue du Clos de l'Erable). Elle a accueilli environ 230 emplacements de deux mètres et une buvette a été mise à disposition.",
    content_bis:
      "Les inscriptions ont eu lieu les 16, 23 et 30 mars à l'EVS, rue René Cassin à Saint-Thibault-des-Vignes.",
    backgroundImage: Event,
  },
  {
    icon: IoMdTime,
    place: "Stade Municipal - Rue René Cassin",
    time: "Horaires: 09H00 - 18H00",
    backgroundImage: Event,
  },
  {
    icon: IoMdTime,
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    time: "Horaires: 19H00 - 02H30",
    backgroundImage: dance,
  },
  {
    icon: IoMdTime,
    place: "Stade Municipal - Rue René Cassin",
    time: "Horaires: 09H00 - 19H00",
    content:
      "Dans la perspective du voyage humanitaire au Sénégal, l'association Les Voyageurs du Coeur organise un tournoi de football le samedi 29 juin au stade James Ruzzante, rue René Cassin à Saint-Thibault-des-Vignes.",
    content_bis:
      "Il pourra accueillir 24 équipes de 7 à 10 joueurs : 6 joueurs de champ + 1 gardien avec 3 remplaçants au maximum.",
    content_ter:
      "Les inscriptions auront lieu le samedi 25 mai et le samedi 8 juin, de 10h à 12h et de 14h à 17h, à l’EVS (rue René Cassin, à côté du stade de football).",
    content_quater:
      "Le droit d'entrée est de 10€ par joueur et réglable par espèces ou chèque.Les participants doivent être âgés au minimum de 16 ans.",
    question:
      "Pour y participer ou toute question au sujet de cette journée, veuillez contacter un des numéros suivants :  06 69 21 23 66 ou 07 68 39 14 88.",
    backgroundImage: Event,
  },
  {
    icon: IoMdTime,
    place: "Gymnase Municipal - 44 Rue des Sablons",
    time: "Horaires: 18H30 - 01H00",
    backgroundImage: Event,
  },
  {
    icon: IoMdTime,
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    time: "Horaires: 18H30 - 00H00",
    backgroundImage: Event,
  },
  {
    icon: IoMdTime,
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    time: "Horaires: 19H00 - 01H00",
    backgroundImage: Event,
  },
];
