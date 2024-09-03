import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";
import { IoMdFootball, IoMdTime } from "react-icons/io";

import Event from "../../public/assets/event/event_bg.jpg";
import dance from "../../public/assets/event/dance.jpg";
import foot from "../../public/assets/event/foot.jpg";
import petanque from "../../public/assets/event/petanque.jpg";
import loto from "../../public/assets/event/loto.jpg";
import brocante from "../../public/assets/event/brocante.jpg";
import cooking from "../../public/assets/event/cooking.jpg";
import card from "../../public/assets/event/card.jpg";

export const ServiceData = [
  {
    icon: RxCrop,
    title: "Brocante",
    place: "Jardin de Ville - Rue du Clos de l'Érable",
    content: "01/05/2024",
    backgroundImage: brocante,
  },
  {
    icon: RxPencil2,
    title: "Tournoi de pétanque",
    place: "Stade Municipal - Rue René Cassin",
    content: "18/05/2024",
    backgroundImage: petanque,
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
    description: "Dans la perspective du voyage humanitaire au Sénégal, l'association Les Voyageurs du Coeur organise un tournoi de football le samedi 29 juin au stade James Ruzzante, rue René Cassin à Saint-Thibault-des-Vignes.",
    backgroundImage: foot,
  },
  {
    icon: RxAccessibility,
    title: "Loto",
    place: "Gymnase Municipal - 44 Rue des Sablons",
    content: "26/10/2024",
    backgroundImage: loto,
  },
  {
    icon: RxRocket,
    title: "Cuisine du Monde",
    content: "09/11/2024",
    backgroundImage: cooking,
  },
  {
    icon: RxCrop,
    title: "Tournoi de Belote",
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    content: "30/11/2024",
    backgroundImage: card,
  },
];

export const ModalData = [
  {
    icon: IoMdTime,
    title: "Brocante",
    place: "Jardin de Ville - Rue du Clos de l'Érable",
    description: "Une brocante a été organisée par l'association \"Les Voyageurs du Coeur\" le mercredi 1er mai à Saint-Thibault-des-Vignes, au niveau du Jardin de Ville (rue du Clos de l'Erable). Elle a accueilli environ 230 emplacements de deux mètres et une buvette a été mise à disposition.",
    content: "Horaires: 08H00 - 18H00",
    backgroundImage: brocante,
  },
  {
    icon: IoMdTime,
    title: "Tournoi de pétanque",
    place: "Stade Municipal - Rue René Cassin",
    content: "Horaires: 09H00 - 18H00",
    description: "L'association Les Voyageurs du Coeur a organisé un tournoi de pétanque le samedi 18 mai au stade James Ruzzante, rue René Cassin à Saint-Thibault-des-Vignes.",
    backgroundImage: Event,
  },
  {
    icon: IoMdTime,
    title: "Soirée dansante senior",
    description: "Une soirée dansante pour les seniors a été organisée par l'association \"Les Voyageurs du Coeur\" le vendredi 14 juin au Centre Culturel Marc Brinon (1 rue des Vergers).",
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    content: "Horaires: 19H00 - 02H30",
    backgroundImage: dance,
  },
  {
    icon: IoMdTime,
    title: "Tournoi Foot mixte",
    place: "Stade Municipal - Rue René Cassin",
    content: "Horaires: 09H00 - 19H00",
    description: "Dans la perspective du voyage humanitaire au Sénégal, l'association Les Voyageurs du Coeur organise un tournoi de football le samedi 29 juin au stade James Ruzzante, rue René Cassin à Saint-Thibault-des-Vignes.",
    backgroundImage: Event,
  },
  {
    icon: IoMdTime,
    title: "Loto",
    description: "Un loto a été organisé par l'association \"Les Voyageurs du Coeur\" le samedi 26 octobre au gymnase municipal (44 rue des Sablons).",
    place: "Gymnase Municipal - 44 Rue des Sablons",
    content: "Horaires: 18H30 - 01H00",
    backgroundImage: Event,
  },
  {
    icon: IoMdTime,
    title: "Cuisine du Monde",
    description: "Une soirée \"Cuisine du Monde\" a été organisée par l'association \"Les Voyageurs du Coeur\" le samedi 9 novembre au Centre Culturel Marc Brinon (1 rue des Vergers).",
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    content: "Horaires: 18H30 - 00H00",
    backgroundImage: Event,
  },
  {
    icon: IoMdTime,
    title: "Tournoi de Belote",
    description: "Un tournoi de belote a été organisé par l'association \"Les Voyageurs du Coeur\" le samedi 30 novembre au Centre Culturel Marc Brinon (1 rue des Vergers).",
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    content: "Horaires: 19H00 - 01H00",
    backgroundImage: Event,
  },
];
