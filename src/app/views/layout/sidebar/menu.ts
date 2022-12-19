import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true,
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard',
  },
  {
    label: 'Caisse',
    icon: 'inbox',
    link: 'Caisse',
  },
  {
    label: 'Cuisine primaire',
    icon: 'grid',
    link: 'CuisineP',
  },
  {
    label: 'Cuisine secondaire',
    icon: 'grid',
    link: 'CuisinieS',
  },
  {
    label: 'Clients',
    isTitle: true,
  },
  {
    label: 'Ajouter Client',
    icon: 'user-plus',
    link: 'AddClient',
  },
  {
    label: 'Client',
    icon: 'user',
    link: 'Client',
  },
  {
    label: 'Client fidèle',
    icon: 'user-check',
    link: 'Client fidele',
  },
  {
    label: 'Fidélité',
    icon: 'heart',
    link: '/Fidelite',
  },
  {
    label: 'Gestion des utilisateurs',
    isTitle: true,
  },
  {
    label: 'Ajouter Utilisateur',
    icon: 'user-plus',
    link: 'AddUser',
  },
  {
    label: 'Caissier',
    icon: 'credit-card',
    link: 'Caissier',
  },
  {
    label: 'Cuisinier',
    icon: 'grid',
    link: 'Cuisinier',
  },
  {
    label: 'Livreur',
    icon: 'truck',
    link: 'Livreur',
  },
  {
    label: 'Pointage',
    icon: 'navigation',
    link: 'Pointage',
  },
  {
    label: 'Produit/Catégorie',
    isTitle: true,
  },
  {
    label: 'Catégorie',
    icon: 'package',
    link: '/Produit/Categorie',
  },
  {
    label: 'Produit',
    icon: 'box',
    link: 'Produit',
  },
  {
    label: 'Catégorie de composition',
    icon: 'codesandbox',
    link: 'Produit/CategorieComposition',
  },
  {
    label: 'Composition produit',
    icon: 'codesandbox',
    link: 'Produit/Composition',
  },
  {
    label: 'Offre',
    icon: 'gift',
    link: 'Offre',
  },
  {
    label: 'Commandes en face',
    isTitle: true,
  },

  {
    label: 'Commandes à emporter',
    icon: 'user-check',
    link: '/Enface/Commande/Emporter',
  },
  {
    label: 'Commandes sur place',
    icon: 'user-check',
    link: '/Enface/Commande/Surplace',
  },
  {
    label: 'Commandes par téléphone',
    isTitle: true,
  },

  {
    label: 'Commandes à emporter',
    icon: 'phone-call',
    link: '/Telephone/Commande/Emporter',
  },
  {
    label: 'Commandes sur place',
    icon: 'phone-call',
    link: '/Telephone/Commande/Surplace',
  },
  {
    label: 'Commandes en livraisons',
    icon: 'phone-call',
    link: '/Telephone/Commande/Livraison',
  },
  {
    label: 'Exemple commande',
    icon: 'file',
    link: '/Exemple commande',
  },
  {
    label: '',
    isTitle: true,
  },

];
