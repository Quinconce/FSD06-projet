import createurImg from './assets/job-categories/createurs-de-maisons.jpg';
import construcuteurIMg from './assets/job-categories/constructeurs-de-maisons-pretes-a-finir.jpg';
import amenageurImg from './assets/job-categories/amenageurs-fonciers.jpg';
import prometeurImg from './assets/job-categories/promoteurs-immobiliers.jpg';
import fabricantImg from './assets/job-categories/fabricants-agenceurs.jpg';
import paysagisteIMg from './assets/job-categories/paysagistes.jpg';
import terrasseImg from './assets/job-categories/constructeurs-de-terrasses.jpg';
import cuisineImg from './assets/job-categories/cuisinistes.jpg';
import salleDeBainsImg from './assets/job-categories/salles-de-bain.jpg';
import dressingImg from './assets/job-categories/specialistes-de-dressing.jpg';
import meubleImg from './assets/job-categories/fabricants-de-meubles.jpg';
import maisonEnKitIMG from './assets/job-categories/specialistes-de-maisons-en-kit.jpg';
import customerPhotofirst from './assets/job-categories/testimonial-jean-dupont.png';
import customerPhotofirstSmall from './assets/job-categories/testimonial-jean-dupont-mobile.png';
import customerPhotoSecond from './assets/job-categories/testimonial-jeanne.png';
import customerPhotoSecondSmall from './assets/job-categories/testimonial-jeanne-mobile.png';

export interface JobCategoryPage {
    slug: string,
    backgroundImg: string,
    direction: 'left' | 'right',
    keyForTrad: string,
    customersPhotos: string[]
}

export interface JobCategory {
    slug: string;
    keyForTrad: string;
    pages: JobCategoryPage[];
}

export const jobCategories: JobCategory[] = [
    {
        slug: 'batiment-neuf',
        keyForTrad: 'BatimentNeuf',
        pages: [
            /*{
                slug : 'Bureaux-darchitectes',
                backgroundImg : architecteImg,
                direction : 'right',
                KeyForTrad : 'Bureaux-darchitectes'
            },*/
            {
                slug: 'createurs-de-maisons',
                backgroundImg: createurImg,
                direction: 'left',
                keyForTrad: 'CreateursDeMaisons',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
            {
                slug: 'specialistes-de-maisons-en-kit',
                backgroundImg: maisonEnKitIMG,
                direction: 'right',
                keyForTrad: 'SpecialistesDeMaisonsEnKit',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
            {
                slug: 'constructeurs-de-maisons',
                backgroundImg: construcuteurIMg,
                direction: 'right',
                keyForTrad: 'ConstructeursDeMaisons',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
            {
                slug: 'promoteurs-immobiliers',
                backgroundImg: prometeurImg,
                direction: 'right',
                keyForTrad: 'PromoteursImmobiliers',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            }
        ]
    },
    {
        slug: 'renovation-interieur',
        keyForTrad: 'RenovationInterieur',
        pages: [
            /*{
                slug : 'Mandataires-immobiliers',
                backgroundImg : mandataireImg,
                direction : 'right',
                KeyForTrad : 'Mandataires-immobiliers'
            },*/
            {
                slug: 'amenageurs-fonciers',
                backgroundImg: amenageurImg,
                direction: 'right',
                keyForTrad: 'AmenageursFonciers',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
            {
                slug: 'fabricants-agenceurs',
                backgroundImg: fabricantImg,
                direction: 'right',
                keyForTrad: 'FabricantsAgenceurs',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
        ]

    },
    {
        slug: 'renovation-exterieur',
        keyForTrad: 'RenovationExterieur',
        pages: [
            /*{
                slug : 'Urbanistes',
                backgroundImg : urbanisteImg,
                direction : 'right',
                KeyForTrad : 'Urbanistes'
            },*/
            {
                slug: 'paysagistes',
                backgroundImg: paysagisteIMg,
                direction: 'right',
                keyForTrad: 'Paysagistes',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
            {
                slug: 'constructeurs-de-terrasses',
                backgroundImg: terrasseImg,
                direction: 'right',
                keyForTrad: 'ConstructeursDeTerrasses',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
        ]
    },
    {
        slug: 'prod-vente-de-meubles',
        keyForTrad: 'ProdVenteDeMeubles',
        pages: [
            {
                slug: 'cuisinistes',
                backgroundImg: cuisineImg,
                direction: 'right',
                keyForTrad: 'Cuisinistes',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
            {
                slug: 'salles-de-bain',
                backgroundImg: salleDeBainsImg,
                direction: 'right',
                keyForTrad: 'Salles-de-bain',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
            {
                slug: 'specialistes-de-dressing',
                backgroundImg: dressingImg,
                direction: 'right',
                keyForTrad: 'Specialistes-de-dressing',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            },
            {
                slug: 'fabricants-de-meubles',
                backgroundImg: meubleImg,
                direction: 'right',
                keyForTrad: 'Fabricants-de-meubles',
                customersPhotos: [
                    customerPhotofirst,
                    customerPhotofirstSmall,
                    customerPhotoSecond,
                    customerPhotoSecondSmall,
                ]
            }
        ]
    }
];


