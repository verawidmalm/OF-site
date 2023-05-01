export class Product {

    id!: number;
    name!: string;
    price!: number;
    description: string='';
    tags?: string [];
    imageUrl!: string;
    categories?: string[];
    features?: string[];

}
