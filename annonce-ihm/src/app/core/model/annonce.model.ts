export interface AnnonceModel {
  annonceId?: number;
  title: string;
  description: string;
  category: string;
  price: number;
  localisation: string;
  postedAt?: string;
  imagebase64?: string;
  imageFile?:Blob
}
