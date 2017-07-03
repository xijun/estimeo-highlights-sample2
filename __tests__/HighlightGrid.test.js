/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import HighlightGrid from '../components/HighlightGrid';

describe('<HighlightGrid />', () => {

    let highlights;
    beforeEach(() => {
        highlights =  [{
            periode: 'Avril',
            startups: [
                {
                    _id: 's_0',
                    img: 'http://isarta.com/infos/wp-content/uploads/2016/07/balibart-1.png',
                    avatar: 'https://www.mymajorcompany.com/mmcMediaPlugin/media/cache/c/2/3/b/9/c23b9a2c3a34aa44823ed7147a38e385ca4e3f7b.png',
                    title: 'Balibart',
                    pretty: 'Balibart',
                    subtitle: 'Affiches, mode et accessoires lifestyle pour chez soi',
                    author: 'Maxime',
                    youtubeLink: 'https://www.youtube.com/watch?v=rY7LSFBumhY&t=2s',
                    description: 'Balibart est un service clé-en-main dédié aux artistes, qui permet de créer sa boutique en ligne 100% personnalisable afin de vendre des produits dérivés à sa communauté. Balibart s’occupe personnellement du reste : de l’édition des produits dans leurs ateliers, à l’envoi des colis, de la gestion des stocks au suivi des commandes.',
                    website: 'https://www.balibart.com/',
                    size: 1
                }
            ]
        },{
            periode: 'Mai',
            startups: [
                {
                    _id: 's_1',
                    img: 'https://cestfrais.fr/img/hp/HP-2.jpg',
                    avatar: '/static/img/cestfrais.jpg',
                    title: 'C\'est Frais',
                    pretty: 'Cest-frais',
                    subtitle: 'Faites vous livrer les produits frais de vos commerçants',
                    author: 'Wilfried, Kevin, Nicolas & Idriss',
                    youtubeLink: 'https://www.youtube.com/watch?v=FTPRd4bQdBA',
                    description: 'C\'est Frais est une plateforme de livraison de produits frais des commerçants de proximité, avec leurs coursiers à vélo.  Bouchers, fromagers, primeurs, épiceries fines... Ils font vivre votre quartier !',
                    website: 'https://cestfrais.fr',
                    size: 1
                }
            ]
        },{
            periode: 'Juin',
            startups: [
                {
                    _id: 's_2',
                    img: '/static/img/communpanier.jpg',
                    avatar: 'https://communpanier.com/public/assets/images/logo.png',
                    title: 'Comm\'un Panier',
                    pretty: 'commun-panier',
                    subtitle: 'Le covoiturage des courses en ligne !    ',
                    description: 'Comm\'un Panier est un service de mise en relation des citoyens. L\'objectif ? Faire récupérer son drive par un voisin (le Driveur) ou être covoituré pour faire ses courses. Les avantages ? Un service écologique, une initiative citoyenne et un gain de temps et d\'argent pour tous !',
                    author: 'Manon & Antonin',
                    youtubeLink: 'https://www.youtube.com/watch?v=Vh9tIUBUDvk&t=12s',
                    website: 'https://www.communpanier.com/',
                    size: 1
                },
                {
                    _id: 's_3',
                    img: 'http://newsite.viti-coaching.com/wp-content/uploads/2017/03/Team-viti-web.jpg',
                    avatar: 'http://newsite.viti-coaching.com/wp-content/uploads/2017/03/logo-viti.png',
                    title: 'Viti Coaching',
                    pretty: 'Viti-Coaching',
                    subtitle: 'Prenez rendez-vous avec l’intelligence collective',
                    author: 'Olga',
                    youtubeLink: 'https://www.youtube.com/watch?v=RFGrxWlaFr8&t=9s',
                    description: 'ViTi Coaching conçoit des démarches sur mesure pour accompagner les entreprises à l\'ère du digital et des nouveaux modes d\'organisation du travail. Leurs solutions digitales augmentent l\'efficacité et la collaboration dans un contexte où la distance (équipes dispersées, home office) nécessite de nouvelles pratiques.',
                    website: 'https://www.viti-coaching.com/fr/accueil/',
                    size: 1
                }
            ]
        }].reverse();
    });

    it('has 3 "<GridList />" tags', () => {
        const wrapper = shallow(<HighlightGrid highlights={highlights} />);
        expect(wrapper.find('GridList').length).toBe(3)
    })

    it('first "<GridList />" has "2" as "cols" property', () => {
        const wrapper = shallow(<HighlightGrid highlights={highlights} />);
        expect(wrapper.find('GridList').first().prop('cols')).toEqual(2)
    })

    it('first "<GridList />" has good key', () => {
        const wrapper = shallow(<HighlightGrid highlights={highlights} />);
        expect(wrapper.find('GridList').first().key()).toEqual(highlights[0].periode)
    })
})