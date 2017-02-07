import { fhir } from './nativeFHIR';

export declare class FhirClient {
    private client: fhir;

    constructor(config: any);

    conformance(query: any): any;
    document(query: any): any;
    profile(query: any): any;
    transaction(query: any): any;
    history(query: any): any;
    typeHistory(query: any): any;
    resourceHistory(query: any): any;
    read(query: any): any;
    vread(query: any): any;
    delete(query: any): any;
    create(query: any): any;
    validate(query: any): any;
    search(query: any): any;
    update(query: any): any;
    nextPage(query: any): any;
    prevPage(query: any): any;
    resolve(query: any): any;

}
