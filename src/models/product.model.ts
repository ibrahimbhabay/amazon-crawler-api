import { prop, getModelForClass } from '@typegoose/typegoose';

export class Product {

    @prop({required: true, unique: true})
    _id: string;

    @prop()
    title: string;

    @prop({required: false})
    price: number;

    @prop({required: false})
    numberOfReviews: number;

    @prop({required: false})
    averageRating: number;

    @prop({required: false})
    dateFirstListed: Date;

    @prop({required: false})
    dateFristListedTimestamp: number;

    @prop({required: true})
    createdAt: number;

    @prop({required: false})
    updateAt: number;

}

export const ProductModel = getModelForClass(Product)