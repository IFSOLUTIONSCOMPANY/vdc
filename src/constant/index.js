import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
} from "react-icons/rx";
import { IoMdFootball } from "react-icons/io";


import Event from "../../public/assets/event/event_bg.jpg";
import dance from "../../public/assets/event/dance.jpg";


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


export const ModalData = [{
    place: "Jardin de Ville - Rue du Clos de l'Érable",
    content: "Horaires: 08H00 - 18H00",
    backgroundImage: Event,
},
{
    place: "Stade Municipal - Rue René Cassin",
    content: "Horaires: 09H00 - 18H00",
    backgroundImage: Event,
},
{
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    content: "Horaires: 19H00 - 02H30",
    backgroundImage: dance,
},
{
    place: "Stade Municipal - Rue René Cassin",
    content: "Horaires: 09H00 - 19H00",
    backgroundImage: Event,
},
{
    place: "Gymnase Municipal - 44 Rue des Sablons",
    content: "Horaires:18H30 - 01H00",
    backgroundImage: Event,
},
{
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    content: "Horaires: 18H30 - 00H00",
    backgroundImage: Event,
},
{
    place: "Centre Culturel Marc Brinon - 1 Rue des Vergers",
    content: "Horaires: 19H00 - 01H00",
    backgroundImage: Event,
}]
