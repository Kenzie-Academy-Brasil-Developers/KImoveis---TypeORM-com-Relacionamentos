import { IPropertyRequest } from "../properties"

export interface ICategoryRequest {
    id?: string
    name: string
}

export interface ICategoryListProperties {
    name: string
    properties: IPropertyRequest

}